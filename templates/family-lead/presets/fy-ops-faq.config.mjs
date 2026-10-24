export default {
  site: {
    title: "fy 服务器 FAQ 专题",
    description: "围绕服务器选型、线路区别、迁移问题和部署疑问整理的常见问题站，适合先把高频疑问看明白。",
    baseUrl: "https://fyrghdyrgh-dot.github.io/fy-ops-faq/",
    brand: "fy ops faq",
    eyebrow: "server FAQ",
    heroTitle: "把常见问题拆开讲，往往比堆一页卖点更容易转化。",
    heroSubtitle: "如果你对服务器选型、线路区别、迁移风险还有疑问，可以先从这些高频问题开始看，先把关键判断点弄清楚。",
    primaryCta: { label: "查看 FAQ 专题", href: "#offers" },
    secondaryCta: { label: "前往 1bgp", href: "https://www.1bgp.com/" },
    selectionNotes: ["先回答用户疑虑。", "再补判断方法。", "最后引到方案页。"],
    trustPoints: ["先看高频问题", "覆盖常见误区与疑问", "方便继续深入了解"],
    methodSteps: [
      { title: "先拆问题类型", body: "价格疑虑、线路误区、系统选择和迁移风险可以分开组织。" },
      { title: "保持短答案", body: "FAQ 的关键是快速解决疑问，而不是把每个问题写成大长文。" },
      { title: "自然接下一步", body: "回答问题后，再给进一步方案入口，承接会更自然。" }
    ],
    faqs: [
      { q: "FAQ 会不会看起来太碎？", a: "不会，只要问题分类清楚，反而更适合快速解决疑问。" },
      { q: "为什么先看 FAQ 更有用？", a: "因为很多时候你缺的不是一整篇长文，而是把最关键的几个问题先想明白。" }
    ]
  },
  offers: [
    {
      slug: "server-choice-faq",
      title: "服务器选型 FAQ 页",
      audience: "刚开始做服务器判断的用户",
      summary: "适合围绕香港、新加坡、Windows VPS 和带宽等问题做快速答疑。",
      promise: "很多用户不是不想买，而是还卡在几个关键问题没想清楚，所以 FAQ 页更适合承接这些高意图疑虑。",
      benefits: ["适合选型长尾词", "转化承接自然", "方便继续导向更深方案页"],
      signals: ["用户常问怎么选", "问题重复出现", "需要降低决策门槛"],
      compare: [
        { label: "内容类型", value: "短问题答疑" },
        { label: "优先关注", value: "疑虑消除" },
        { label: "下一步", value: "看方案" }
      ],
      sections: [
        { title: "FAQ 解决什么", body: "先回答是否需要香港、是否值得上 CN2、Windows VPS 适不适合这类问题。" },
        { title: "为什么适合转化前阶段", body: "用户在还没确定方案前，通常更愿意先看问题答案而不是直接看销售页。" }
      ],
      faqs: [
        { q: "FAQ 和专题文章有什么区别？", a: "FAQ 更短、更直接，适合快速判断问题。" },
        { q: "适合放很多问题吗？", a: "建议按专题聚合，不要杂糅太多无关问题。" }
      ],
      cta: { label: "查看 1bgp 服务器方案", href: "https://www.1bgp.com/" }
    },
    {
      slug: "line-myths-faq",
      title: "线路误区 FAQ 页",
      audience: "正在比较线路和访问质量的用户",
      summary: "适合围绕 CN2、BGP、优化线路和访问延迟误区做集中答疑。",
      promise: "线路相关问题最容易被营销词带偏，所以 FAQ 页更适合把误区拆开讲清楚。",
      benefits: ["适合误区搜索词", "降低误判风险", "承接线路对比与方案页"],
      signals: ["用户常问线路区别", "存在认知误区", "正在比较不同套餐"],
      compare: [
        { label: "内容类型", value: "误区答疑" },
        { label: "优先关注", value: "概念澄清" },
        { label: "下一步", value: "看线路方案" }
      ],
      sections: [
        { title: "误区比知识点更适合引流", body: "很多搜索不是想系统学习，而是想快速确认自己理解有没有错。" },
        { title: "答完就接方案", body: "当用户知道区别后，更容易进入具体方案选择。" }
      ],
      faqs: [
        { q: "线路误区为什么值得单做一页？", a: "因为这类问题重复率高，且会直接影响购买判断。" },
        { q: "要不要放测速图？", a: "可以辅助，但不建议只靠截图说明问题。" }
      ],
      cta: { label: "查看 1bgp 线路资源", href: "https://www.1bgp.com/" }
    },
    {
      slug: "migration-risk-faq",
      title: "迁移疑问 FAQ 页",
      audience: "准备迁移站点或换机房的团队",
      summary: "适合围绕停机、数据丢失、DNS 切换和回滚准备等问题做答疑。",
      promise: "迁移前的搜索意图往往非常直接，FAQ 页适合用短回答快速消除对停机、切换和恢复的疑虑。",
      benefits: ["适合迁移高意图流量", "问题集中且明确", "自然承接迁移方案页"],
      signals: ["用户担心迁移风险", "需要快速得到判断", "准备进入迁移执行阶段"],
      compare: [
        { label: "内容类型", value: "迁移答疑" },
        { label: "优先关注", value: "风险说明" },
        { label: "下一步", value: "看迁移方案" }
      ],
      sections: [
        { title: "迁移前最常见疑问", body: "停机多久、DNS 怎么切、数据库怎么保证一致性，都是高频问题。" },
        { title: "FAQ 之后接什么", body: "答完疑问后，最适合接迁移步骤和切换方案页。" }
      ],
      faqs: [
        { q: "迁移 FAQ 适合技术用户吗？", a: "适合，尤其是需要快速核对关键点的时候。" },
        { q: "FAQ 会不会不够深入？", a: "FAQ 负责快速判断，深入部分可以链接到专题页。" }
      ],
      cta: { label: "查看 1bgp 迁移方案", href: "https://www.1bgp.com/" }
    }
  ]
};
