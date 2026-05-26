import fs from "node:fs/promises";
import path from "node:path";

const root = path.resolve("downloads/urongda_logos");
const htmlPath = path.join(root, "logos.html");
const outDir = path.join(root, "svg");
const detailDir = path.join(root, "detail_pages");
const manifestPath = path.join(root, "manifest.json");
const passcode = "urongda";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function sanitizeFilename(name) {
  return String(name || "logo.svg")
    .replace(/[\\/:*?"<>|]/g, "_")
    .replace(/\s+/g, " ")
    .trim();
}

function parseCtfileUrl(url) {
  const match = String(url).match(/\/f\/(\d+)-(\d+)-([0-9a-f]+)(?:\?|$)/i);
  if (!match) throw new Error(`Cannot parse ctfile URL: ${url}`);
  return { uid: match[1], fid: match[2], shareChk: match[3] };
}

function decodeHtml(value) {
  return String(value || "")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

async function fetchText(url, tries = 4, timeoutMs = 20_000) {
  let lastError;
  for (let i = 0; i < tries; i += 1) {
    try {
      const res = await fetch(url, {
        signal: AbortSignal.timeout(timeoutMs),
        headers: {
          "user-agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X) AppleWebKit/537.36 Chrome/125 Safari/537.36",
        },
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return await res.text();
    } catch (error) {
      lastError = error;
      await sleep(500 * (i + 1));
    }
  }
  throw lastError;
}

async function fetchJson(url) {
  return JSON.parse(await fetchText(url, 4, 20_000));
}

async function downloadFile(url, targetPath, expectedBytes) {
  const res = await fetch(url, { signal: AbortSignal.timeout(30_000) });
  if (!res.ok) throw new Error(`download HTTP ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  if (expectedBytes && buf.length !== expectedBytes) {
    throw new Error(`size mismatch: got ${buf.length}, expected ${expectedBytes}`);
  }
  if (!buf.toString("utf8", 0, 200).includes("<svg")) {
    throw new Error("downloaded file does not look like SVG");
  }
  await fs.writeFile(targetPath, buf);
}

function extractSchools(listHtml) {
  const ids = [...listHtml.matchAll(/href="\/logos\/(\d+)"/g)].map((m) => m[1]);
  return [...new Set(ids)];
}

function extractSvgEntry(detailHtml) {
  const anchors = [
    ...detailHtml.matchAll(
      /<a[^>]+href="(https:\/\/url\d+\.ctfile\.com\/f\/[^"]+p=urongda)"[^>]*>([^<]+\.svg)<\/a>/gi,
    ),
  ].map((match) => ({
    name: decodeHtml(match[2]),
    weblink: decodeHtml(match[1]),
  }));
  const preferredAnchor =
    anchors.find((entry) => /-logo\.svg$/i.test(entry.name)) ||
    anchors.find((entry) => /\.svg$/i.test(entry.name));
  if (preferredAnchor) return preferredAnchor;

  const match = detailHtml.match(
    /\{\\"key\\":\\"f\d+\\",\\"icon\\":\\"svg\\",\\"name\\":\\"(.*?)\\",\\"imgsrc\\":\\".*?\\",\\"weblink\\":\\"(https:\\\\\/\\\\\/url\d+\.ctfile\.com\\\\\/f\\\\\/.*?p=urongda)\\"/s,
  );
  if (!match) return null;
  return {
    name: JSON.parse(`"${match[1]}"`),
    weblink: JSON.parse(`"${match[2]}"`),
  };
}

async function getSvgDownload(svgEntry) {
  const { uid, fid } = parseCtfileUrl(svgEntry.weblink);
  const ref = encodeURIComponent("");
  const pageUrl = encodeURIComponent(svgEntry.weblink);
  const getFileUrl =
    `https://webapi.ctfile.com/getfile.php?path=f&f=${uid}-${fid}-${parseCtfileUrl(svgEntry.weblink).shareChk}` +
    `&passcode=${encodeURIComponent(passcode)}&r=${Math.random()}&ref=${ref}&url=${pageUrl}`;
  const fileInfo = await fetchJson(getFileUrl);
  if (fileInfo.code !== 200 || !fileInfo.file?.file_chk) {
    throw new Error(`getfile failed: code=${fileInfo.code}`);
  }
  const downInfo = await fetchJson(
    `https://webapi.ctfile.com/get_down_url.php?uid=${fileInfo.file.userid}` +
      `&fid=${fileInfo.file.file_id}&file_chk=${fileInfo.file.file_chk}` +
      `&start_time=${fileInfo.file.start_time || 0}&wait_seconds=${fileInfo.file.wait_seconds || 0}` +
      `&rd=${Math.random()}`,
  );
  if (downInfo.code !== 200 || !downInfo.downurl) {
    throw new Error(`get_down_url failed: code=${downInfo.code}`);
  }
  return downInfo;
}

async function main() {
  await fs.mkdir(outDir, { recursive: true });
  await fs.mkdir(detailDir, { recursive: true });

  const listHtml = await fs.readFile(htmlPath, "utf8");
  const ids = extractSchools(listHtml);
  const manifest = [];

  console.log(`Found ${ids.length} schools`);
  for (let i = 0; i < ids.length; i += 1) {
    const id = ids[i];
    const detailPath = path.join(detailDir, `${id}.html`);
    let detailHtml;
    try {
      detailHtml = await fs.readFile(detailPath, "utf8");
    } catch {
      detailHtml = await fetchText(`https://www.urongda.com/logos/${id}`);
      await fs.writeFile(detailPath, detailHtml);
      await sleep(150);
    }

    const svgEntry = extractSvgEntry(detailHtml);
    if (!svgEntry) {
      manifest.push({ id, status: "missing-svg-entry" });
      console.log(`[${i + 1}/${ids.length}] ${id} missing SVG entry`);
      continue;
    }

    const filename = sanitizeFilename(svgEntry.name);
    const targetPath = path.join(outDir, filename);
    try {
      await fs.access(targetPath);
      manifest.push({ id, status: "exists", filename, weblink: svgEntry.weblink });
      console.log(`[${i + 1}/${ids.length}] exists ${filename}`);
      continue;
    } catch {
      // continue to download
    }

    try {
      const downInfo = await getSvgDownload(svgEntry);
      await downloadFile(downInfo.downurl, targetPath, downInfo.file_size);
      manifest.push({
        id,
        status: "downloaded",
        filename,
        bytes: downInfo.file_size,
        weblink: svgEntry.weblink,
      });
      console.log(`[${i + 1}/${ids.length}] downloaded ${filename}`);
      await sleep(250);
    } catch (error) {
      manifest.push({ id, status: "error", filename, error: error.message, weblink: svgEntry.weblink });
      console.log(`[${i + 1}/${ids.length}] error ${filename}: ${error.message}`);
      await sleep(1000);
    }

    if ((i + 1) % 25 === 0) {
      await fs.writeFile(manifestPath, JSON.stringify(manifest, null, 2));
    }
  }

  await fs.writeFile(manifestPath, JSON.stringify(manifest, null, 2));
  const ok = manifest.filter((item) => ["downloaded", "exists"].includes(item.status)).length;
  const bad = manifest.length - ok;
  console.log(`Done. ok=${ok}, bad=${bad}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
