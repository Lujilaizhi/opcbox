# 部署指南 · Vercel + 阿里云 DNS

> 目标：把 AI 摊位互动 App 部署到 `ai.heyyan.cn`

## 已完成

- [x] 项目代码整理（html / css / js / prompts / api）
- [x] Vercel 配置文件（`vercel.json` + `api/generate.js`）
- [x] 本地 Git 仓库初始化（`201b9bc`）
- [x] MiniMax API Key 准备好

---

## 步骤 1 · 推送代码到 GitHub（5 分钟）

1. 登录 GitHub → 右上角 `+` → `New repository`
   - 名称：`ai-booth` （或 `opc-booth`，随你）
   - 可见性：选 `Public`（Vercel 免费版要求）
   - **不要勾选** Add README / .gitignore / license（本地已有）
2. 创建后 GitHub 给你一个仓库地址，类似：
   `https://github.com/你的用户名/ai-booth.git`
3. 在 PowerShell 里执行（替换成你的地址）：

```powershell
cd "C:\Users\leyu7\Documents\与雁Lab\ai-booth-app"
git remote add origin https://github.com/你的用户名/ai-booth.git
git branch -M main
git push -u origin main
```

如果弹出 GitHub 登录，按提示登录。

---

## 步骤 2 · Vercel 部署（5 分钟）

1. 打开 [vercel.com](https://vercel.com) → 用 GitHub 账号登录
2. 第一次会让你授权 Vercel 访问 GitHub → 同意
3. 点 `Add New...` → `Project`
4. 找到你刚创建的 `ai-booth` 仓库 → 点 `Import`
5. 配置：
   - Framework Preset: **Other**（不用选）
   - Root Directory: `./`（默认）
   - Build Command: 留空
   - Output Directory: 留空
6. **重要**：展开 `Environment Variables`，添加：
   - Key: `MINIMAX_API_KEY`
   - Value: `sk-cp-jjPU1sfnsAarp1bpGAh997EEd3V5cTkunFn8B1Vk630b9rQ9P6NqOpZCmzbC2fu2InamofeFLQPoNwTtmy5rZSdEBfciICvkuLPBIMgHG-mnmFiAtqFBElk`
   - Environment: 三个都勾选
7. 点 `Deploy`
8. 等 1-2 分钟，部署完成会给一个默认域名，类似：
   `https://ai-booth-xxx.vercel.app`
9. **立刻打开测试**：
   - 首页轮播 OK？
   - 测 6 题 → 结果页 → 雷达图 → 4 维分数对吗？
   - 工作台选场景 → 填字段 → 生成 → 拿到内容吗？

---

## 步骤 3 · 绑定自定义域名 `ai.heyyan.cn`（3 分钟）

部署成功页面 → 顶部菜单 `Settings` → 左侧 `Domains`

1. 输入框填 `ai.heyyan.cn` → `Add`
2. Vercel 会显示要配的 DNS 记录：
   ```
   Type: CNAME
   Name: ai
   Value: cname.vercel-dns.com
   ```
   （具体值以 Vercel 页面显示为准）

---

## 步骤 4 · 阿里云 DNS 解析（5 分钟）

1. 登录 [阿里云控制台](https://dns.console.aliyun.com) → 域名 `heyyan.cn`
2. 点 `解析设置` → `添加记录`
3. 配置：
   - 记录类型：`CNAME`
   - 主机记录：`ai`
   - 解析路线：默认
   - 记录值：`cname.vercel-dns.com`（以 Vercel 显示的为准）
   - TTL：`10 分钟`（或默认）
4. 点 `确认`
5. 等 DNS 生效（5-30 分钟，最长 24 小时）

---

## 步骤 5 · Vercel 签发 HTTPS 证书（自动）

DNS 生效后，Vercel 会自动：
- 验证 CNAME 解析
- 申请 Let's Encrypt SSL 证书
- 自动 HTTPS 启用

在 Vercel 域名页能看到状态从 `Invalid Configuration` 变成 `Valid Configuration`。

---

## 步骤 6 · 验证上线

打开 `https://ai.heyyan.cn`，确认：
- [ ] 首页轮播 6 个 AI 角色
- [ ] 6 道测试题能答完
- [ ] 结果页显示 4 维雷达图
- [ ] 工作台选场景 → 填字段 → 生成内容
- [ ] 海报生成 → 保存图片 → 分享
- [ ] 手机扫码可访问

---

## 后续维护

**更新代码**：
```powershell
cd "C:\Users\leyu7\Documents\与雁Lab\ai-booth-app"
# 改完文件后
git add -A
git commit -m "改了啥"
git push
# Vercel 会自动重新部署
```

**改 prompt（不用碰代码）**：
- 改 `prompts/*.md` 里对应的文件
- push 后 Vercel 自动部署
- 改完让 AI 重新读模板

**换 API Key**：
- Vercel 控制台 → Settings → Environment Variables → 改 `MINIMAX_API_KEY` 的值
- 改完点 `Deployments` → 最新部署右边三个点 → `Redeploy`

---

## 紧急回滚

如果新版出问题，Vercel 控制台 → Deployments → 选上一个好的版本 → 右上角 `Promote to Production`，秒级回滚。

---

## 排错

| 现象 | 解决 |
|---|---|
| 部署失败 | 看 Vercel `Deployments` → 失败那条 → `Logs` |
| 域名一直 `Invalid Configuration` | `nslookup ai.heyyan.cn` 看是否解析到 Vercel |
| API 返回兜底（提示内容不真实） | 看 Vercel Functions logs，看 MiniMax API 报错 |
| 静态资源 404 | 确认文件在项目根或子目录，且文件名大小写一致 |