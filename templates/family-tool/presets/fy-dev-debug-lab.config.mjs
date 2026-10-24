export default {
  site: {
    title: "fy 开发排查工具站",
    description: "围绕 API 联调、浏览器排错、Webhook 回调和前端性能复查整理的轻量工具站，适合开发、测试和技术支持团队快速定位问题。",
    baseUrl: "https://fyrghdyrgh-dot.github.io/fy-dev-debug-lab/",
    brand: "fy dev debug lab",
    eyebrow: "developer tool family",
    heroTitle: "先把请求、日志和页面行为看清楚，再决定往哪一层排查。",
    heroSubtitle: "适合接口联调、页面报错、Webhook 回调和上线前复查场景。每个页面都尽量把输入、输出、检查顺序和常见误区拆开写清楚。",
    intro: "更适合开发、测试和技术支持团队在排查 API、前端和回调问题时快速定位重点，不用在多个零散笔记里来回翻。",
    searchPlaceholder: "搜索工具名、场景或标签，例如：API、Webhook、浏览器、性能",
    primaryAction: { label: "查看全部工具", href: "#toolDirectory" },
    secondaryAction: { label: "先看排查 FAQ", href: "#faq" },
    updateNote: "2026-10",
    faqs: [
      { q: "这套工具站更适合什么阶段？", a: "更适合联调、上线前复查和线上问题初步定位阶段，先把范围缩小，再决定深入哪一层。" },
      { q: "为什么每页都强调输入和输出？", a: "因为排查类页面最怕只有概念没有落点，明确输入和输出能让团队更快复现和对齐问题。" },
      { q: "后续还能扩什么？", a: "可以继续扩登录态排查、跨域问题清单、监控告警复核和日志字段核对等实用页面。" }
    ]
  },
  categories: [
    { id: "api-check", name: "接口排查", summary: "先核对请求、鉴权和返回，再看接口逻辑和环境差异。" },
    { id: "frontend-debug", name: "前端定位", summary: "适合页面异常、控制台报错和首屏体验复查。" },
    { id: "delivery-check", name: "交付复核", summary: "围绕发布、回调和上线前后的关键核对步骤整理工具页。" }
  ],
  tools: [
    {
      slug: "api-header-checker",
      title: "API 请求头检查器",
      category: "api-check",
      tagline: "先比对 Header，再深挖接口差异",
      summary: "适合联调时快速核对 Authorization、Content-Type、Cookie 和环境 Header，避免同一接口在不同端表现不一致。",
      description: "很多联调问题并不在接口逻辑本身，而是在 Header、Token、Cookie 或请求来源差异上。这个页面会把最容易漏掉的请求头检查点先列出来。",
      tags: ["API", "Header", "联调"],
      useCases: ["前后端接口联调", "第三方 API 对接", "多环境请求对比"],
      steps: ["先确认请求方法和目标环境", "对照 Authorization、Content-Type 和 Cookie", "保留一条成功请求和一条失败请求做比对", "最后再看响应体和错误码"],
      inputs: ["请求示例", "Header 列表", "环境信息"],
      outputs: ["Header 差异点", "联调检查清单"],
      faqs: [
        { q: "为什么浏览器请求成功但 Postman 失败？", a: "通常是 Cookie、Origin、CSRF 或自动附带 Header 不同。" },
        { q: "Header 要全部复制吗？", a: "不用，先抓最关键的鉴权、内容类型和上下文 Header，避免把噪音也复制进去。" }
      ],
      primaryLink: "https://fyrghdyrgh-dot.github.io/fy-dev-debug-lab/",
      linkLabel: "返回工具站"
    },
    {
      slug: "dns-http-checker",
      title: "域名与 HTTP 状态检查",
      category: "api-check",
      tagline: "解析、跳转和状态码一次核对",
      summary: "适合站点切换域名、接口换网关或页面上线前快速确认解析是否生效、跳转是否正常。",
      description: "很多上线问题并不是代码错误，而是 DNS、证书、跳转链或缓存导致的访问异常。这个页面更适合做上线前后的快速复核。",
      tags: ["DNS", "HTTP", "上线检查"],
      useCases: ["域名切换", "页面上线前复查", "网关地址替换"],
      steps: ["先查 DNS 解析结果", "再确认 HTTP 状态码与跳转链路", "重点看登录页和表单页是否异常", "必要时补不同地区访问核对"],
      inputs: ["域名", "目标 URL", "预期状态"],
      outputs: ["解析结果", "状态码检查记录"],
      faqs: [
        { q: "DNS 生效了为什么页面还是旧的？", a: "通常和浏览器缓存、CDN 缓存或地区传播延迟有关。" },
        { q: "HTTP 200 就代表没问题吗？", a: "不一定，还要检查页面内容、关键接口和跳转是否符合预期。" }
      ],
      primaryLink: "https://fyrghdyrgh-dot.github.io/fy-dev-debug-lab/",
      linkLabel: "返回工具站"
    },
    {
      slug: "browser-console-debug",
      title: "浏览器控制台排错顺序",
      category: "frontend-debug",
      tagline: "先定位报错范围，再逐层排查",
      summary: "适合页面白屏、脚本失效、接口报错和资源加载异常场景，先把控制台、网络面板和页面行为串起来看。",
      description: "浏览器报错最怕一上来就改代码。先确定是资源、脚本、接口还是状态同步问题，排查效率会高很多。",
      tags: ["浏览器", "控制台", "前端"],
      useCases: ["页面白屏排查", "脚本错误定位", "资源加载异常"],
      steps: ["先看 Console 第一条错误", "再切到 Network 看失败请求", "确认资源、接口和脚本哪个先异常", "最后结合页面操作路径复现问题"],
      inputs: ["报错截图", "控制台日志", "复现步骤"],
      outputs: ["排错顺序", "异常范围判断"],
      faqs: [
        { q: "Console 里很多报错先看哪个？", a: "优先看最早出现、最接近主流程的错误，而不是数量最多的提示。" },
        { q: "Network 全是 200 还可能有问题吗？", a: "有可能，接口内容错误、脚本执行异常和状态同步问题都可能发生。" }
      ],
      primaryLink: "https://fyrghdyrgh-dot.github.io/fy-dev-debug-lab/",
      linkLabel: "返回工具站"
    },
    {
      slug: "webhook-replay-check",
      title: "Webhook 回调复核页",
      category: "delivery-check",
      tagline: "把签名、重试和返回值一起看",
      summary: "适合支付回调、表单通知和自动化触发场景，帮助确认到底是第三方重复触发还是本地逻辑没有正确处理。",
      description: "Webhook 问题通常出在签名校验、超时、幂等和重试记录缺失。这个页面把回调检查顺序集中到一页，方便排查时不漏步骤。",
      tags: ["Webhook", "回调", "重试"],
      useCases: ["支付回调排查", "表单通知验证", "自动化任务触发复核"],
      steps: ["先保留原始请求和签名字段", "再看返回状态码和超时情况", "比对重试次数和幂等处理", "最后用同 payload 做一轮重放"],
      inputs: ["Webhook payload", "签名字段", "返回日志"],
      outputs: ["回调检查记录", "问题定位方向"],
      faqs: [
        { q: "为什么要保留原始请求？", a: "没有原始请求，很难区分是签名串变化还是你本地逻辑处理异常。" },
        { q: "幂等一定要做吗？", a: "如果第三方会重试，幂等处理几乎是必须项。" }
      ],
      primaryLink: "https://fyrghdyrgh-dot.github.io/fy-dev-debug-lab/",
      linkLabel: "返回工具站"
    },
    {
      slug: "frontend-launch-check",
      title: "前端上线复查清单",
      category: "delivery-check",
      tagline: "首屏、资源和交互一起复核",
      summary: "适合工具站、内容站和落地页上线前做一轮轻量复查，避免图片、字体、按钮和关键交互在发布后才暴露问题。",
      description: "很多前端线上问题不是功能本身，而是首屏加载、图片资源、字体、按钮态或移动端适配没在上线前复核。这一页更偏发布前的最后检查。",
      tags: ["前端发布", "首屏", "上线检查"],
      useCases: ["落地页上线前复查", "工具站发布前检查", "移动端适配回看"],
      steps: ["先看首屏结构和主标题显示", "检查按钮、表单和关键 CTA", "确认图片、字体和图标加载", "最后在移动端宽度下再过一遍"],
      inputs: ["预发布页面", "设计稿或预期效果", "关键交互清单"],
      outputs: ["上线复查结果", "待修问题列表"],
      faqs: [
        { q: "为什么上线前还要看一次首屏？", a: "因为资源路径、字体、缓存和环境差异最容易在正式发布时出问题。" },
        { q: "这页适合后端项目吗？", a: "只要有前端页面和关键交互，都适合做这类上线前复查。" }
      ],
      primaryLink: "https://fyrghdyrgh-dot.github.io/fy-dev-debug-lab/",
      linkLabel: "返回工具站"
    }
  ]
};
