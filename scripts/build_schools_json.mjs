import fs from "node:fs/promises";
import path from "node:path";

const svgDir = path.resolve("svg");
const outputPath = path.resolve("data/schools.json");
const defaultSchoolName = "香港中文大学（深圳）";

function schoolNameFromFile(filename) {
  return filename
    .replace(/\.svg$/i, "")
    .replace(/[-_\s]*logo$/i, "")
    .replace(/[-_\s]*校徽$/i, "")
    .trim();
}

function schoolIdFromName(name) {
  return name
    .replace(/[（(]/g, "-")
    .replace(/[）)]/g, "")
    .replace(/\s+/g, "-")
    .trim();
}

async function main() {
  const files = await fs.readdir(svgDir);
  const collator = new Intl.Collator("zh-CN");
  const schools = await Promise.all(
    files
      .filter((file) => file.toLowerCase().endsWith(".svg"))
      .map(async (file) => {
        const stat = await fs.stat(path.join(svgDir, file));
        const name = schoolNameFromFile(file);
        return {
          id: schoolIdFromName(name),
          name,
          displayName: name,
          shareName: name,
          logo: `svg/${file}`,
          logoVersion: Math.round(stat.mtimeMs),
        };
      }),
  );

  schools.sort((a, b) => collator.compare(a.name, b.name));

  const defaultIndex = schools.findIndex((school) => school.name === defaultSchoolName);
  if (defaultIndex > 0) {
    const [defaultSchool] = schools.splice(defaultIndex, 1);
    schools.unshift(defaultSchool);
  }

  await fs.writeFile(outputPath, `${JSON.stringify(schools, null, 2)}\n`);
  console.log(`Wrote ${schools.length} schools to ${path.relative(process.cwd(), outputPath)}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
