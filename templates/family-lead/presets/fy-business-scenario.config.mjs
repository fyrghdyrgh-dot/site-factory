export default {
  site: {
    title: "fy 业务场景方案",
    description: "面向跨境电商、API 服务和下载分发等业务场景的服务器选择站，帮助你先按业务判断，再看更合适的部署方向。",
    baseUrl: "https://fyrghdyrgh-dot.github.io/fy-business-scenario/",
    brand: "fy business scenario",
    eyebrow: "business hosting guide",
    heroTitle: "先判断你在跑什么业务，再选节点和配置。",
    heroSubtitle: "如果你做的是跨境电商、接口服务或下载分发，可以直接从对应场景进入，少走弯路，也更容易找到适合自己的部署思路。",
    primaryCta: { label: "查看场景方案", href: "#offers" },
    secondaryCta: { label: "前往 1bgp", href: "https://www.1bgp.com/" },
    selectionNotes: ["先看业务模式。", "再看核心访问路径。", "最后核对线路与资源。"],
    trustPoints: ["按真实业务来选", "覆盖常见高价值场景", "提供下一步参考"],
    methodSteps: [
      { title: "定义主业务动作", body: "是下单、下载、接口调用还是内容浏览，会决定方案重点。" },
      { title: "识别高风险环节", body: "支付、提交、登录和接口响应通常更值得优先优化。" },
      { title: "围绕业务选型", body: "不要先从服务器参数出发，而要先从业务表现目标出发。" }
    ],
    faqs: [
      { q: "为什么建议先按场景看？", a: "因为不同业务最看重的环节不同，先看自己的场景，判断会更快更准。" },
      { q: "场景会不会分得太细？", a: "不会，先看最接近自己的那一类，通常比直接看参数更容易找到方向。" }
    ]
  },
  offers: [
    {
      slug: "cross-border-store-hosting",
      title: "跨境电商部署页",
      audience: "独立站与跨境电商团队",
      summary: "适合需要兼顾大陆团队管理与海外用户访问体验的跨境业务。",
      promise: "跨境电商最怕的不是平均速度慢，而是关键交易路径不稳，所以节点和线路选择必须围绕转化链路来做。",
      benefits: ["适合跨境业务", "强调支付与转化链路", "自然承接服务器方案"],
      signals: ["目标用户在海外", "团队在大陆或东南亚", "支付和下单链路很关键"],
      compare: [
        { label: "适配业务", value: "独立站电商" },
        { label: "优先关注", value: "转化链路" },
        { label: "下一步", value: "看节点" }
      ],
      sections: [
        { title: "优先看交易链路", body: "登录、购物车和支付页的稳定性，比内容页的平均速度更重要。" },
        { title: "节点要贴近核心市场", body: "核心市场在东南亚、欧美还是混合区域，会直接影响部署点。" }
      ],
      faqs: [
        { q: "跨境电商适合香港还是新加坡？", a: "要结合目标市场和团队位置，一般不能一概而论。" },
        { q: "需要特别关注什么", a: "建议优先关注支付、证书和峰值活动表现。" }
      ],
      cta: { label: "查看 1bgp 跨境方案", href: "https://www.1bgp.com/" }
    },
    {
      slug: "api-service-hosting",
      title: "API 服务部署页",
      audience: "接口服务与产品团队",
      summary: "适合关注响应稳定性、请求波动和日志排查的 API 服务场景。",
      promise: "API 服务的服务器方案应该围绕响应时间、可观测性和扩容路径，而不是只看静态页面速度。",
      benefits: ["适合接口业务", "强调稳定与监控", "利于承接更高配方案"],
      signals: ["有持续接口请求", "对响应稳定性敏感", "需要清晰日志和监控"],
      compare: [
        { label: "适配业务", value: "API 服务" },
        { label: "优先关注", value: "可观测性" },
        { label: "下一步", value: "看扩容" }
      ],
      sections: [
        { title: "可观测性要先建", body: "API 服务出问题时，没有监控和日志，排查成本会远高于主机差价。" },
        { title: "扩容路径比初始配置更重要", body: "接口增长往往快于预期，所以一开始就要规划如何平滑扩容。" }
      ],
      faqs: [
        { q: "API 服务一定要高配吗？", a: "不一定，取决于请求量、峰值和业务复杂度。" },
        { q: "适合放海外吗？", a: "关键要看调用方所在区域和线路质量。" }
      ],
      cta: { label: "查看 1bgp API 方案", href: "https://www.1bgp.com/" }
    },
    {
      slug: "download-distribution-hosting",
      title: "下载分发站部署页",
      audience: "下载站与文件分发业务",
      summary: "适合带宽、文件传输和高峰活动波动较明显的下载与分发场景。",
      promise: "下载分发站的核心不是单机参数，而是带宽、峰值承载和文件分发策略是否匹配业务。",
      benefits: ["适合下载与分发场景", "强调带宽与峰值", "方便引导到更合适套餐"],
      signals: ["文件下载量大", "高峰期波动明显", "对带宽和传输稳定性敏感"],
      compare: [
        { label: "适配业务", value: "下载分发" },
        { label: "优先关注", value: "带宽峰值" },
        { label: "下一步", value: "看分发策略" }
      ],
      sections: [
        { title: "下载站重点看带宽", body: "页面能打开不代表下载体验稳定，真正影响用户的是传输过程。" },
        { title: "分发策略要一起评估", body: "缓存、对象存储和下载路径都会影响最终体验。" }
      ],
      faqs: [
        { q: "下载站适合优化线路吗？", a: "要结合访问区域、文件大小和预算来判断。" },
        { q: "需要多节点吗？", a: "不一定，先看主访问区域和峰值分布。" }
      ],
      cta: { label: "查看 1bgp 分发方案", href: "https://www.1bgp.com/" }
    }
  ]
};
