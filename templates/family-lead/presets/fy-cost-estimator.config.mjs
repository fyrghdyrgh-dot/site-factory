export default {
  site: {
    title: "fy 预算配置规划",
    description: "帮助你判断带宽预算、资源预估和扩容节奏的配置规划站，适合先把预算和真实需求对齐。",
    baseUrl: "https://fyrghdyrgh-dot.github.io/fy-cost-estimator/",
    brand: "fy cost estimator",
    eyebrow: "budget and sizing",
    heroTitle: "先把预算和资源关系讲清楚，再谈买哪种套餐。",
    heroSubtitle: "如果你不确定带宽、CPU、内存和预算该怎么配，可以先按访问量、峰值和扩容节奏来判断，避免一开始就配错方向。",
    primaryCta: { label: "查看预算方案", href: "#offers" },
    secondaryCta: { label: "前往 1bgp", href: "https://www.1bgp.com/" },
    selectionNotes: ["先看访问量级。", "再看峰值和波动。", "最后留出扩容余量。"],
    trustPoints: ["先看真实使用量", "覆盖常见预算问题", "方便规划后续扩容"],
    methodSteps: [
      { title: "估算真实使用量", body: "不要只凭感觉设预算，先把访问、资源和波动范围列出来。" },
      { title: "区分日常与峰值", body: "很多业务平时轻量，但活动或投放会出现明显突刺。" },
      { title: "预留升级空间", body: "预算不是一次定死，而是规划升级节奏。" }
    ],
    faqs: [
      { q: "为什么预算要先算峰值？", a: "因为很多问题都是在活动或推广窗口出现的，只看平时流量容易低估需求。" },
      { q: "预算规划是不是一次定死？", a: "不是，更稳的做法是先配出合适起点，再给后续升级留空间。" }
    ]
  },
  offers: [
    {
      slug: "bandwidth-budget-plan",
      title: "带宽预算判断页",
      audience: "下载站、内容站和活动页团队",
      summary: "适合正在判断带宽预算是否合理、以及需不需要为峰值流量预留空间的业务。",
      promise: "带宽预算最常见的问题不是花太少，而是对真实峰值和波动没有概念，导致上线后才发现不够用。",
      benefits: ["适合高峰业务", "重点关注带宽预算", "方便继续比较更合适配置"],
      signals: ["有明显流量波动", "担心活动峰值", "不确定基础带宽是否足够"],
      compare: [
        { label: "核心问题", value: "够不够用" },
        { label: "优先关注", value: "峰值流量" },
        { label: "下一步", value: "看扩容" }
      ],
      sections: [
        { title: "预算要看峰值而不是日均", body: "很多带宽问题只有在活动或推广窗口才会暴露。" },
        { title: "带宽不足的代价", body: "轻则速度下降，重则转化链路受影响。" }
      ],
      faqs: [
        { q: "固定带宽更好吗？", a: "不一定，要结合流量波动和预算结构判断。" },
        { q: "下载站要怎么估算", a: "先看文件大小、访问峰值和地域分布。" }
      ],
      cta: { label: "查看 1bgp 带宽方案", href: "https://www.1bgp.com/" }
    },
    {
      slug: "resource-sizing-guide",
      title: "资源配置预估页",
      audience: "准备上线新业务的团队",
      summary: "适合还在判断 CPU、内存、存储和系统应该怎么配的起步业务。",
      promise: "配置预估不是精确算命，而是先找主要资源瓶颈，避免一开始就配错方向。",
      benefits: ["适合新业务起步", "强调主要瓶颈识别", "方便继续比较不同配置"],
      signals: ["刚开始配机器", "不知道该重 CPU 还是重内存", "还在判断存储需求"],
      compare: [
        { label: "适配阶段", value: "起步期" },
        { label: "优先关注", value: "瓶颈类型" },
        { label: "下一步", value: "看增长" }
      ],
      sections: [
        { title: "先找最关键瓶颈", body: "有的业务重存储，有的重带宽，有的重数据库和内存。" },
        { title: "避免一步到位思维", body: "起步阶段更适合先有合理冗余，再根据增长扩容。" }
      ],
      faqs: [
        { q: "是不是内存越大越好？", a: "不是，重点是是否匹配业务瓶颈。" },
        { q: "如何防止配低了", a: "预留合理冗余并提前设监控阈值。" }
      ],
      cta: { label: "查看 1bgp 配置方案", href: "https://www.1bgp.com/" }
    },
    {
      slug: "scaling-budget-roadmap",
      title: "扩容预算路线页",
      audience: "流量逐步增长的业务团队",
      summary: "适合已经上线、正在考虑下一阶段扩容和预算节奏的团队。",
      promise: "扩容预算最怕的是每次临时救火，先规划增长阈值和升级节点，会比出问题后再换方案更稳。",
      benefits: ["适合成长中业务", "强调升级节奏", "方便继续规划扩容"],
      signals: ["已有稳定流量", "近期访问在增长", "担心下一轮活动或投放带来压力"],
      compare: [
        { label: "适配阶段", value: "增长期" },
        { label: "优先关注", value: "升级阈值" },
        { label: "下一步", value: "看架构" }
      ],
      sections: [
        { title: "扩容要先设阈值", body: "CPU、内存、带宽或响应时间到什么程度触发升级，应提前定义。" },
        { title: "预算规划是持续动作", body: "不是一次拍板，而是随着业务节奏迭代。" }
      ],
      faqs: [
        { q: "扩容需要重构吗？", a: "不一定，很多阶段先升级资源就够，但要提前知道下一步路径。" },
        { q: "什么时候应该拆服务？", a: "当单机扩容开始影响稳定性或运维复杂度时就要考虑。" }
      ],
      cta: { label: "查看 1bgp 扩容方案", href: "https://www.1bgp.com/" }
    }
  ]
};
