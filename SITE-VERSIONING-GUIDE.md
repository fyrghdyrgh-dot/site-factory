# 站点版本编号规范

这个文档用于统一管理同类型站点的多版本发布方式，方便后续在保留主题方向不变的前提下，替换文案、调整配色和改造页面结构。

## 命名规则

- 对外展示名称：`站点名 01`
- 仓库名：`fy-站点slug-v01`
- GitHub Pages 地址：`https://fyrghdyrgh-dot.github.io/fy-站点slug-v01/`
- 第二版起依次递增：`02`、`03`、`04`

示例：

- `系统适配专题 01`
- `系统适配专题 02`
- `系统适配专题 03`

对应仓库可以用：

- `fy-system-compatibility-v01`
- `fy-system-compatibility-v02`
- `fy-system-compatibility-v03`

## 什么时候需要新版本

适合新开版本而不是直接覆盖旧站的场景：

- 主要标题和首屏卖点明显变化
- CTA 策略变化
- 页面结构变化，例如从目录型改成 FAQ 型
- 主题配色和视觉风格明显变化
- 想同时在线测试多个版本的转化效果

如果只是修正错别字、补充一两段内容或替换单个链接，通常直接覆盖当前版本即可。

## 推荐的变体维度

每个站点类型都可以从两条线扩展：

### 文案变体

- `01`：稳妥解释型
- `02`：更强调转化与行动
- `03`：更偏问题词与 FAQ 承接

### 视觉变体

- `01`：中性企业风
- `02`：深色科技风
- `03`：浅色内容门户风

推荐做法是一次只改一条主变量，这样方便判断到底是文案还是视觉带来的差异。

## 当前已发布站点

当前已发布的 13 个站点，都可以视为 `01` 版本。

| 编号 | 展示名称 | 当前版本名 | slug | 当前访问地址 |
| --- | --- | --- | --- | --- |
| 01 | 业务场景站 | 业务场景站 01 | `fy-business-scenario` | https://fyrghdyrgh-dot.github.io/fy-business-scenario/ |
| 02 | 香港节点推荐站 | 香港节点推荐站 01 | `fy-hk-server-selector` | https://fyrghdyrgh-dot.github.io/fy-hk-server-selector/ |
| 03 | 线路对比站 | 线路对比站 01 | `fy-line-comparison` | https://fyrghdyrgh-dot.github.io/fy-line-comparison/ |
| 04 | AI 导航速查 | AI 导航速查 01 | `fy-nav-search-hub` | https://fyrghdyrgh-dot.github.io/fy-nav-search-hub/ |
| 05 | AI 分类目录 | AI 分类目录 01 | `fy-nav-category-directory` | https://fyrghdyrgh-dot.github.io/fy-nav-category-directory/ |
| 06 | AI 工具风向标 | AI 工具风向标 01 | `fy-nav-media-portal` | https://fyrghdyrgh-dot.github.io/fy-nav-media-portal/ |
| 07 | 部署清单专题 | 部署清单专题 01 | `fy-deployment-checklist` | https://fyrghdyrgh-dot.github.io/fy-deployment-checklist/ |
| 08 | 迁移切换方案 | 迁移切换方案 01 | `fy-migration-runbook` | https://fyrghdyrgh-dot.github.io/fy-migration-runbook/ |
| 09 | 起步配置组合 | 起步配置组合 01 | `fy-startup-stack` | https://fyrghdyrgh-dot.github.io/fy-startup-stack/ |
| 10 | 托管与自管比较 | 托管与自管比较 01 | `fy-managed-hosting` | https://fyrghdyrgh-dot.github.io/fy-managed-hosting/ |
| 11 | 预算配置规划 | 预算配置规划 01 | `fy-cost-estimator` | https://fyrghdyrgh-dot.github.io/fy-cost-estimator/ |
| 12 | 系统适配专题 | 系统适配专题 01 | `fy-system-compatibility` | https://fyrghdyrgh-dot.github.io/fy-system-compatibility/ |
| 13 | 服务器 FAQ 专题 | 服务器 FAQ 专题 01 | `fy-ops-faq` | https://fyrghdyrgh-dot.github.io/fy-ops-faq/ |

## 单次批量建议

如果是：

- 只做本地静态生成，不发布：一次做 `10-20` 个通常都可行
- 生成并发布到 GitHub Pages，但不强求逐个验证：一次做 `8-12` 个通常可行
- 生成、发布、轮询构建、逐个验活并整理链接：一次做 `5-8` 个最稳

## 为什么建议分批

你之前分成几批来做是对的，原因不是我完全不能一次做很多，而是分批更稳：

- GitHub Pages 构建本身有等待时间
- 多仓库连续推送时，重试成本会放大
- 一旦其中 1 个站点异常，分批更容易定位和补发
- 对话越长，人工核对链接和状态越容易混淆

所以如果你的目标是“稳定上线并拿到完整链接”，建议按 `5-8` 个一批推进。

## 后续推荐节奏

如果接下来要做多版本，我建议按下面的顺序：

1. 先挑 3 个最值得做 A/B 版本的站点
2. 每个站点先出 `02` 版本，只改文案或只改 CSS
3. 发布后保留 `01` 和 `02` 同时在线
4. 再决定是否继续做 `03`

目前最适合先做 `02` 版的站点：

- AI 导航速查
- 部署清单专题
- 系统适配专题
- 服务器 FAQ 专题
