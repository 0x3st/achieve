# 毕业成就馆

一个纯静态的 Steam 成就页风格毕业纪念网页。

访问者先勾选自己的毕业经历，并填写每个已解锁成就的时间和姓名/昵称。页面会生成个人成就汇总，也可以导出一张适合截图分享的 PNG 图片。

## 文件结构

```text
index.html
styles.css
app.js
data/achievements.json
data/achievements.generic.json
data/schools.json
svg/*.svg
```

## 修改成就

港中深专属成就直接编辑：

```text
data/achievements.json
```

其他学校使用通用毕业模板，直接编辑：

```text
data/achievements.generic.json
```

页面会根据用户选择的学校自动切换：香港中文大学（深圳）使用专属成就，其他学校使用通用模板。

每个成就包含：

```json
{
  "id": "thesis-final",
  "title": "论文终章",
  "description": "完成终稿提交，把连续几周的修改痕迹变成最后一版 PDF。",
  "rarity": "rare",
  "icon": "TH"
}
```

`rarity` 支持 `common`、`uncommon`、`rare`、`legendary`。

## 修改学校

学校列表来自：

```text
data/schools.json
```

每个学校包含：

```json
{
  "id": "香港中文大学-深圳",
  "name": "香港中文大学（深圳）",
  "displayName": "香港中文大学（深圳）",
  "shareName": "香港中文大学（深圳）",
  "logo": "svg/香港中文大学（深圳）-logo.svg",
  "logoVersion": 1779744722028
}
```

页面里也可以临时自定义“页面显示校名”和“分享图校名”。新增学校时，把 SVG 放进 `svg/`，然后运行：

```bash
node scripts/build_schools_json.mjs
```

脚本会自动重建 `data/schools.json`。
`logoVersion` 由 SVG 文件修改时间生成，用来避免同名替换 Logo 后浏览器继续显示旧缓存。

## 预览

纯静态部署时直接上传这些文件即可。若本地预览时浏览器限制 `fetch` 读取 JSON，可以在项目目录启动任意静态服务器，例如：

```bash
python3 -m http.server 4180
```

然后访问：

```text
http://localhost:4180
```
