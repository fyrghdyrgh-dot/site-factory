export default {
  site: {
    title: "fy 起步配置组合",
    description: "面向入门建站、MVP 部署和轻量业务起步的配置指南站，帮助你先配出能稳定跑起来的第一套方案。",
    baseUrl: "https://fyrghdyrgh-dot.github.io/fy-startup-stack/",
    brand: "fy startup stack",
    eyebrow: "starter stack guide",
    heroTitle: "起步阶段先求能跑稳，再谈一步到位。",
    heroSubtitle: "如果你刚起步，不确定第一台机器该怎么买，可以先从业务阶段和最小可用配置开始判断，再慢慢预留后续升级空间。",
    primaryCta: { label: "查看起步方案", href: "#offers" },
    secondaryCta: { label: "前往 1bgp", href: "https://www.1bgp.com/" },
    selectionNotes: ["先看业务阶段。", "再看最小可用配置。", "最后预留扩展空间。"],
    trustPoints: ["先保证能跑稳", "强调最小可用配置", "方便后续升级"],
    methodSteps: [
      { title: "确认业务是不是刚开始", body: "起步项目不需要一开始就按成熟站点配置，重点是先跑稳。" },
      { title: "先匹配主要瓶颈", body: "有的场景重带宽，有的重存储，有的重运维便利性。" },
      { title: "保留升级路径", body: "起步配置应考虑三个月到半年的扩展方向。" }
    ],
    faqs: [
      { q: "起步是不是应该只看最便宜？", a: "不一定，价格重要，但能不能稳定跑起来更重要。" },
      { q: "为什么要先看组合而不是单项参数？", a: "因为很多起步问题不是单个参数不够，而是整套配置是否搭得合理。" }
    ]
  },
  offers: [
    {
      slug: "mvp-launch-stack",
      title: "MVP 起步配置页",
      audience: "新产品和验证型项目",
      summary: "适合希望以最小成本先把产品跑起来，再逐步升级的团队。",
      promise: "MVP 阶段最重要的是快速验证而不是一次配满，所以更适合先选最小可用组合，再预留升级路径。",
      benefits: ["适合早期项目", "强调低成本可验证", "利于后续升级引导"],
      signals: ["产品刚上线", "流量尚不稳定", "团队还在试错阶段"],
      compare: [
        { label: "适配阶段", value: "验证期" },
        { label: "优先关注", value: "最小可用" },
        { label: "下一步", value: "规划升级" }
      ],
      sections: [
        { title: "先保证能稳定验证", body: "只要能平稳承接首批真实用户，就已经达到 MVP 阶段的目标。" },
        { title: "预留升级信号", body: "访问峰值、媒体资源和后台任务增长，都会成为下一轮扩容信号。" }
      ],
      faqs: [
        { q: "MVP 需要 CDN 吗？", a: "不一定，看内容分发需求和目标用户区域。" },
        { q: "起步可以先单机吗？", a: "很多场景可以，但要提前知道何时需要升级。" }
      ],
      cta: { label: "查看 1bgp 起步方案", href: "https://www.1bgp.com/" }
    },
    {
      slug: "content-site-starter",
      title: "内容站起步页",
      audience: "博客、官网和专题站团队",
      summary: "适合内容站、企业官网和专题页从零起步时判断服务器和部署组合。",
      promise: "内容站起步时，比起高配，更重要的是更新方便、备份清晰和后续扩展不被卡住。",
      benefits: ["适合官网与博客", "承接建站类搜索", "强调备份与更新便利"],
      signals: ["以内容发布为主", "更新频率较高", "后续可能扩栏目或多语言"],
      compare: [
        { label: "适配业务", value: "内容站" },
        { label: "优先关注", value: "备份更新" },
        { label: "下一步", value: "看扩展性" }
      ],
      sections: [
        { title: "内容站的重点不是只看 CPU", body: "更新流程、缓存和恢复能力会直接影响长期维护体验。" },
        { title: "适合从简单组合起步", body: "先选清晰的主机和备份方案，再考虑对象存储和 CDN。" }
      ],
      faqs: [
        { q: "企业官网也要这么细分吗？", a: "适合，因为很多企业官网会逐渐扩成营销站或内容站。" },
        { q: "WordPress 是默认选项吗？", a: "常见但不是唯一选择，还是要看团队习惯。" }
      ],
      cta: { label: "查看 1bgp 建站资源", href: "https://www.1bgp.com/" }
    },
    {
      slug: "lightweight-store-stack",
      title: "轻量电商起步页",
      audience: "小型商城与活动页团队",
      summary: "适合 SKU 不多、订单量初期有限，但希望后续可以平滑扩容的业务。",
      promise: "轻量电商起步时，不必一开始堆很高配置，但支付链路、监控和峰值预案必须提前考虑。",
      benefits: ["适合小型电商起步", "强调支付与峰值", "利于后续升级套餐"],
      signals: ["订单量还小", "活动波动较明显", "需要后续扩容空间"],
      compare: [
        { label: "适配业务", value: "轻量电商" },
        { label: "优先关注", value: "峰值预案" },
        { label: "下一步", value: "看支付链路" }
      ],
      sections: [
        { title: "电商起步要留峰值余量", body: "即使日常流量不高，也要为活动和推广窗口预留波动空间。" },
        { title: "先解决关键链路", body: "支付、登录和订单确认比普通内容页更值得优先优化。" }
      ],
      faqs: [
        { q: "商城起步需要单独数据库吗？", a: "初期未必，但要提前知道何时拆分。" },
        { q: "适合放在香港节点吗？", a: "取决于主要访问区域和结算场景。" }
      ],
      cta: { label: "查看 1bgp 电商方案", href: "https://www.1bgp.com/" }
    }
  ]
};
