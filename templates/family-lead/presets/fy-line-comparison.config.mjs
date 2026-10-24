export default {
  site: {
    title: "fy 线路对比专题",
    description: "围绕 CN2、BGP、大陆优化线路和跨境访问质量整理的线路对比引流站，适合承接高意图比较词。",
    baseUrl: "https://fyrghdyrgh-dot.github.io/fy-line-comparison/",
    brand: "fy line compare",
    eyebrow: "lead family",
    heroTitle: "线路不是名词堆砌，而是访问体验的真实差异。",
    heroSubtitle: "把常见线路比较问题拆成方案页，适合承接“哪个更稳”“区别是什么”“值不值得”的搜索意图。",
    primaryCta: { label: "查看线路专题", href: "#offers" },
    secondaryCta: { label: "前往 1bgp", href: "https://www.1bgp.com/" },
    selectionNotes: ["先看访问来源。", "再看高峰期波动。", "最后核对线路成本。"],
    trustPoints: ["按线路问题拆页", "适合比较型搜索", "统一导向 1bgp"],
    methodSteps: [
      { title: "看用户从哪来", body: "不同线路的价值取决于访问路径，而不是线路名字本身。" },
      { title: "看高峰期表现", body: "业务真正受影响的是高峰期是否抖动，而不是一次测速截图。" },
      { title: "看成本阈值", body: "线路升级带来提升，但应根据业务收益判断是否值得。" }
    ],
    faqs: [
      { q: "所有 CN2 都一样吗？", a: "不一样，线路质量和实际交付体验都会有差异。" },
      { q: "线路越贵越好吗？", a: "不是，重点是业务是否真的需要更强线路。" }
    ]
  },
  offers: [
    {
      slug: "cn2-vs-bgp",
      title: "CN2 与 BGP 对比页",
      audience: "大陆访问敏感业务",
      summary: "适合希望判断是否值得为更稳线路支付更高成本的业务团队。",
      promise: "CN2 和 BGP 的区别，不应该只停留在线路名词，而应回到访问来源、波动容忍度和成本预算上做判断。",
      benefits: ["承接高意图比较词", "适合线路升级判断", "方便引导到实际方案"],
      signals: ["大陆访问占比较高", "业务对高峰期波动敏感", "正在比较不同线路套餐"],
      compare: [
        { label: "核心问题", value: "值不值得" },
        { label: "优先关注", value: "高峰期表现" },
        { label: "下一步", value: "核对预算" }
      ],
      sections: [
        { title: "比较要回到业务", body: "如果业务对大陆访问质量极为敏感，线路升级通常更容易体现价值。" },
        { title: "测速不是全部", body: "真正影响转化的是页面稳定打开，而不是单次测速数值。" }
      ],
      faqs: [
        { q: "下载站适合 CN2 吗？", a: "要结合带宽、流量峰值和成本，不能只看线路名称。" },
        { q: "BGP 就一定差吗？", a: "不一定，很多业务完全可以先用更均衡的方案。" }
      ],
      cta: { label: "查看 1bgp 线路方案", href: "https://www.1bgp.com/" }
    },
    {
      slug: "mainland-optimized-lines",
      title: "大陆优化线路判断页",
      audience: "面向大陆的海外业务",
      summary: "适合大陆访问占比较高，但还不确定是否必须上优化线路的团队。",
      promise: "大陆优化线路的价值不在于宣传词，而在于业务是否真有明显的首屏、接口或支付访问敏感点。",
      benefits: ["更适合大陆访问场景", "利于判断升级优先级", "承接高商业意图流量"],
      signals: ["核心用户来自大陆", "业务有支付或提交动作", "已有普通线路但体验不稳"],
      compare: [
        { label: "适配业务", value: "大陆优先" },
        { label: "优先关注", value: "关键链路" },
        { label: "下一步", value: "测高峰表现" }
      ],
      sections: [
        { title: "不是所有站都必须优化线路", body: "静态展示类站点和轻量内容站，未必需要一开始就上更贵线路。" },
        { title: "重点看关键动作", body: "下单、登录、表单提交等动作更能体现线路升级价值。" }
      ],
      faqs: [
        { q: "海外官网值得上优化线路吗？", a: "如果转化动作对访问质量敏感，通常更值得优先评估。" },
        { q: "如何判断是否真的变好？", a: "建议看真实访问、关键页面和高峰期而不是单点测速。" }
      ],
      cta: { label: "查看 1bgp 优化线路", href: "https://www.1bgp.com/" }
    },
    {
      slug: "latency-stability-check",
      title: "低延迟与稳定性取舍页",
      audience: "对访问体验敏感的产品团队",
      summary: "适合在低延迟和线路稳定性之间做取舍判断的业务场景。",
      promise: "很多业务真正需要的不是极限低延迟，而是更可预测的稳定访问，这一点在线路选择时经常被忽略。",
      benefits: ["强调稳定性判断", "适合接口和交互业务", "可自然衔接更高配线路"],
      signals: ["业务对交互体验敏感", "已有断续波动问题", "更关心持续可用性而非最低价"],
      compare: [
        { label: "核心判断", value: "稳不稳" },
        { label: "优先关注", value: "抖动和高峰" },
        { label: "下一步", value: "看运维策略" }
      ],
      sections: [
        { title: "稳定有时比低延迟更重要", body: "对表单、支付和接口服务来说，可预测性往往比极限延迟更有价值。" },
        { title: "配套策略也要跟上", body: "线路之外，监控和告警也会影响最终体验。" }
      ],
      faqs: [
        { q: "延迟低就一定好吗？", a: "不一定，抖动、丢包和高峰期稳定性也很关键。" },
        { q: "适合 API 服务吗？", a: "如果服务对持续稳定响应有要求，通常值得优先评估。" }
      ],
      cta: { label: "查看 1bgp 方案", href: "https://www.1bgp.com/" }
    }
  ]
};
