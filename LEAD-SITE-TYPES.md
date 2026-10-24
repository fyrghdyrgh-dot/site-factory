# Lead Site Types

当前仓库的 `family-lead` 已整理为 12 种可落地引流站型。

## 当前站型

| 站型 | 说明 | 预设文件 |
|------|------|---------|
| 服务器方案选择站 | 按地区、线路和业务类型筛选方案 | `templates/family-lead/presets/fy-server-choice.config.mjs` |
| SaaS 选型对比站 | 承接选型和比较类搜索 | `templates/family-lead/presets/fy-saas-compare.config.mjs` |
| 地区节点推荐站 | 承接“香港/新加坡/日本怎么选”类搜索 | `templates/family-lead/presets/fy-hk-server-selector.config.mjs` |
| 线路对比引流站 | 承接 CN2、BGP 和优化线路比较 | `templates/family-lead/presets/fy-line-comparison.config.mjs` |
| 部署清单引流站 | 承接上线检查、备份和回滚类搜索 | `templates/family-lead/presets/fy-deployment-checklist.config.mjs` |
| 迁移与切换方案站 | 承接主机迁移、数据库切换和回滚 | `templates/family-lead/presets/fy-migration-runbook.config.mjs` |
| 起步方案组合站 | 承接 MVP、轻量建站和起步配置类搜索 | `templates/family-lead/presets/fy-startup-stack.config.mjs` |
| 托管与自管对比站 | 比较自管、托管和半托管差异 | `templates/family-lead/presets/fy-managed-hosting.config.mjs` |
| 业务场景解决方案站 | 按跨境电商、API、下载分发等场景拆页 | `templates/family-lead/presets/fy-business-scenario.config.mjs` |
| 预算与配置规划站 | 承接预算、带宽、扩容和资源预估 | `templates/family-lead/presets/fy-cost-estimator.config.mjs` |
| 系统与组件适配站 | 承接 Linux / Windows / 组件兼容判断 | `templates/family-lead/presets/fy-system-compatibility.config.mjs` |
| FAQ 专题引流站 | 用高意图问答覆盖长尾流量 | `templates/family-lead/presets/fy-ops-faq.config.mjs` |

## 配套配置

- 引流站型目录：`data/lead-site-types.json`
- 调度主题池：`data/topic-pool.json`
- 生成器：`templates/family-lead/build-lead-site.mjs`

## 设计原则

- 先承接搜索意图，再引导进入主目标站。
- 页面入口应围绕用户问题、业务场景或判断动作，而不是单纯堆产品卖点。
- 每种站型都尽量能复用 `family-lead` 生成器，只通过 preset 切换内容结构。
