# site-factory

`site-factory` 是站群自动化总控项目，不负责单一站点的长期手工维护，而是负责：

- 读取站型库、主题池和发布策略
- 选择下一次要生成的网站
- 调用对应模板家族生成静态文件
- 创建 GitHub 仓库并发布到 GitHub Pages
- 回写站点注册表，避免连续重复

## 当前状态

- 已接入 4 个可运行的模板家族：
  - `family-nav`
  - `family-tool`
  - `family-lead`
  - `family-analysis`
- 已内置多组可发布主题，当前默认启用包括：
  - `fy-global-tools`
  - `fy-dev-tools`
  - `fy-server-brief`
  - `fy-data-clean-lab`
  - `fy-server-choice`
  - `fy-saas-compare`
  - `fy-ai-briefing`
  - `fy-performance-brief`
- 已具备最小闭环：
  - 选择任务
  - 生成站点
  - 发布到 GitHub Pages
  - 校验 Pages 是否返回正常 HTML
  - 更新注册表

## 目录

- `data/`：站型库、主题池、发布策略
- `docs/`：已发布站点清单与工厂状态文档
- `registry/`：站点注册表
- `prompts/`：自动化运行提示
- `scripts/`：选择、生成、发布脚本
- `templates/`：站型家族

## 站型说明

- `family-nav`：导航站，适合目录页、分类页和专题入口
- `family-tool`：工具站，适合输入输出明确、FAQ 和步骤清晰的页面
- `family-lead`：引流站，适合方案页、比较页和明确 CTA 落地页
- `family-analysis`：技术分析站，适合简报、观察文章和长文判断页

## 使用方式

先设置 GitHub token：

```bash
export GH_TOKEN=your_token_here
```

查看下一次会选中什么任务：

```bash
npm run select
```

执行一次完整自动化循环：

```bash
npm run cycle
```

`npm run cycle` 的结果会返回：

- `published_verified`：首页和一个内部页面都已通过验证
- `published_pending_verification`：仓库已推送且已尝试开启 Pages，但 GitHub Pages 还未在检查窗口内返回正常页面

## 定时运行

当前仓库包含一个 GitHub Actions 工作流示例：

- 每 3 小时运行一次
- 需要仓库 Secret：`GH_TOKEN`

也可以把同样逻辑接到 TraeWork 的自动化任务里。
