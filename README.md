# AI 超能力鉴定 × OPC 工作台

张江 AI 产品市集 WaytoAGI 社区摊位互动 App。

## 快速开始（本地）

```bash
node server.cjs
# 打开 http://localhost:3456
```

## 部署

详见 [DEPLOY.md](./DEPLOY.md)

## 架构

- 纯静态前端（HTML/CSS/JS，无构建）
- `api/generate.js` — Vercel Serverless 代理 MiniMax API
- `prompts/*.md` — 8 个场景的 prompt 模板

## 6 个 AI 原型

基于 4 维底层（C/O/H/V：创造/效率/连接/洞察）：
- 创造者 Creator · 优化者 Optimizer · 远见者 Visionary
- 超级节点 Hub · 建造者 Maker · 指挥官 Commander