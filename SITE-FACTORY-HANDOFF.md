# Site Factory Handoff

## 当前仓库

- 自动化总控仓库: https://github.com/fyrghdyrgh-dot/site-factory
- Trae Work 自动化提示词: `/workspace/TRAEWORK-AUTOMATION-PROMPT.md`
- 运行目录: `/workspace/site-factory`

## 当前已验证可访问的站点

| 站点 | family | 主题 | 仓库 | 访问地址 | 状态 |
| --- | --- | --- | --- | --- | --- |
| fybot 网站导航 | family-nav | ai-tool-roundup | https://github.com/fyrghdyrgh-dot/fyrghdyrgh-dot.github.io | https://fyrghdyrgh-dot.github.io/ | 已存在 |
| fy 出海工具导航 | family-nav | global-ops-tools | https://github.com/fyrghdyrgh-dot/fy-global-tools | https://fyrghdyrgh-dot.github.io/fy-global-tools/ | 已发布 |
| fy 服务器专题导航 | family-nav | server-choice-brief | https://github.com/fyrghdyrgh-dot/fy-server-brief | https://fyrghdyrgh-dot.github.io/fy-server-brief/ | 已发布 |
| fy 服务器方案选择 | family-lead | server-plan-leads | https://github.com/fyrghdyrgh-dot/fy-server-choice | https://fyrghdyrgh-dot.github.io/fy-server-choice/ | 已验证 |
| fy 性能分析简报 | family-analysis | performance-analysis-brief | https://github.com/fyrghdyrgh-dot/fy-performance-brief | https://fyrghdyrgh-dot.github.io/fy-performance-brief/ | 已验证 |

## 当前可轮换的站型

- `family-nav`: 导航站，适合大量分类页和内容入口页
- `family-tool`: 工具站，适合单功能说明页、FAQ、步骤页
- `family-lead`: 引流站，适合方案页、对比页、CTA 落地页
- `family-analysis`: 分析站，适合技术观察、性能简报、判断型文章

## 当前可直接跑的主题

- `global-ops-tools`
- `dev-stack-checks`
- `server-choice-brief`
- `ai-tool-roundup`
- `saas-compare-guides`
- `data-clean-workflow`
- `server-plan-leads`
- `performance-analysis-brief`

## Trae Work 推荐执行方式

1. 工作目录固定为 `/workspace/site-factory`
2. 环境变量提供 `GH_TOKEN`
3. 自动化频率使用 `每 3 小时`
4. 每次只执行 1 个站点发布
5. 每次运行前读取：
   - `data/families.json`
   - `data/topic-pool.json`
   - `data/publishing-policy.json`
   - `registry/site-registry.json`
   - `prompts/runtime-prompt.md`
6. 执行命令顺序：
   - `npm run select`
   - `npm run cycle`
7. 若 `cycle` 输出是 `published_pending_verification`，等待 10 到 30 秒再补查一次首页和一个内部页
8. 若注册表变化，提交并推送回 `site-factory`

## GitHub Pages 引流站运行建议

- 每个站建议保留 `1` 个首页和 `3` 到 `8` 个内部页面，不要全站只有单页
- 内部页要互相链接，首页也要链接到每个详情页，避免孤页
- 服务器主题站可以自然导向 `https://www.1bgp.com/`
- 普通流量站先做真实内容，不必强塞推广
- 不要连续多次发布同一 family 或同一 topic
- 新站优先换结构、栏目命名、内容组织方式，而不是只换标题
- 发现 Pages 404 时先查 GitHub API 的 Pages `status`，再做外部访问验证

## 本次完善内容

- 修正 `site-factory` 的 `origin` 指向 `fyrghdyrgh-dot/site-factory`
- 修正 `family-nav` 生成器路径配置
- 修正 topic 与 family 的映射，避免拿错 preset
- 给发布流程补上 `.nojekyll`
- 给 `npm run cycle` 增加 Pages 验证状态输出
- 验证 `fy-server-choice` 已可正常访问
- 新发布并验证 `fy-performance-brief`
