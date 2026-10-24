export default {
  site: {
    title: "fy 服务器 FAQ 专题",
    description: "围绕服务器选型、线路区别、迁移问题和部署疑问整理的常见问题站，适合先把高频疑问看明白。",
    baseUrl: "https://fyrghdyrgh-dot.github.io/fy-ops-faq/",
    brand: "fy ops faq",
    eyebrow: "server FAQ",
    heroTitle: "先把最常见的问题说清楚，再决定下一步怎么选。",
    heroSubtitle: "如果你对服务器选型、线路区别、迁移风险还有疑问，可以先从这些高频问题开始看，先把关键判断点弄清楚。",
    primaryCta: { label: "查看 FAQ 专题", href: "#offers" },
    secondaryCta: { label: "前往 1bgp", href: "https://www.1bgp.com/" },
    selectionNotes: ["先回答最常见的疑问。", "再补充判断方法。", "最后给出下一步方向。"],
    trustPoints: ["先看高频问题", "覆盖常见误区与疑问", "方便继续深入了解"],
    methodSteps: [
      { title: "先拆问题类型", body: "价格疑虑、线路误区、系统选择和迁移风险可以分开组织。" },
      { title: "保持短答案", body: "FAQ 的关键是快速解决疑问，而不是把每个问题写成大长文。" },
      { title: "看完再做下一步判断", body: "先把疑问理清楚，再去看更具体的方案，会更容易做决定。" }
    ],
    faqs: [
      { q: "FAQ 会不会看起来太碎？", a: "不会，只要问题分类清楚，反而更适合快速解决疑问。" },
      { q: "为什么先看 FAQ 更有用？", a: "因为很多时候你缺的不是一整篇长文，而是把最关键的几个问题先想明白。" }
    ]
  },
  offers: [
    {
      slug: "server-choice-faq",
      title: "服务器选型 FAQ",
      audience: "刚开始做服务器判断的用户",
      summary: "适合围绕香港、新加坡、Windows VPS 和带宽等问题做快速答疑。",
      promise: "很多人并不是不想选，而是还卡在几个关键问题没想清楚，所以先把常见疑问理顺，判断会轻松很多。",
      benefits: ["适合先做快速判断", "重点消除常见疑虑", "方便继续深入比较"],
      signals: ["用户常问怎么选", "问题重复出现", "需要降低决策门槛"],
      compare: [
        { label: "内容类型", value: "短问题答疑" },
        { label: "优先关注", value: "疑虑消除" },
        { label: "下一步", value: "看方案" }
      ],
      sections: [
        { title: "FAQ 解决什么", body: "先回答是否需要香港、是否值得上 CN2、Windows VPS 适不适合这类问题。" },
        { title: "为什么先看问题更有效", body: "在还没确定方向前，大多数人会先想弄清楚疑问，而不是直接跳到最终选择。" }
      ],
      faqs: [
        { q: "FAQ 和专题文章有什么区别？", a: "FAQ 更短、更直接，适合快速判断问题。" },
        { q: "适合放很多问题吗？", a: "建议按专题聚合，不要杂糅太多无关问题。" }
      ],
      cta: { label: "查看 1bgp 服务器方案", href: "https://www.1bgp.com/" }
    },
    {
      slug: "line-myths-faq",
      title: "线路误区 FAQ",
      audience: "正在比较线路和访问质量的用户",
      summary: "适合围绕 CN2、BGP、优化线路和访问延迟误区做集中答疑。",
      promise: "线路相关问题最容易被营销词带偏，所以把常见误区拆开讲清楚，反而更容易做出稳妥判断。",
      benefits: ["适合先澄清概念", "降低误判风险", "方便继续看线路比较"],
      signals: ["用户常问线路区别", "存在认知误区", "正在比较不同套餐"],
      compare: [
        { label: "内容类型", value: "误区答疑" },
        { label: "优先关注", value: "概念澄清" },
        { label: "下一步", value: "看线路方案" }
      ],
      sections: [
        { title: "为什么先澄清误区", body: "很多人不是想系统学习，而是想先确认自己理解有没有偏差。" },
        { title: "知道区别后更容易判断", body: "当概念先讲清楚，再去比较不同线路和方案会更省时间。" }
      ],
      faqs: [
        { q: "线路误区为什么值得单做一页？", a: "因为这类问题重复率高，且会直接影响购买判断。" },
        { q: "要不要放测速图？", a: "可以辅助，但不建议只靠截图说明问题。" }
      ],
      cta: { label: "查看 1bgp 线路资源", href: "https://www.1bgp.com/" }
    },
    {
      slug: "migration-risk-faq",
      title: "迁移疑问 FAQ",
      audience: "准备迁移站点或换机房的团队",
      summary: "适合围绕停机、数据丢失、DNS 切换和回滚准备等问题做答疑。",
      promise: "迁移前最常见的担心就是停机、切换和恢复，所以先用短答案把关键问题说明白，会更容易判断怎么安排迁移。",
      benefits: ["问题集中且明确", "适合快速核对风险", "方便继续看迁移步骤"],
      signals: ["用户担心迁移风险", "需要快速得到判断", "准备进入迁移执行阶段"],
      compare: [
        { label: "内容类型", value: "迁移答疑" },
        { label: "优先关注", value: "风险说明" },
        { label: "下一步", value: "看迁移方案" }
      ],
      sections: [
        { title: "迁移前最常见疑问", body: "停机多久、DNS 怎么切、数据库怎么保证一致性，都是高频问题。" },
        { title: "看完后下一步做什么", body: "把疑问确认清楚后，再去看迁移步骤和切换安排，会更容易落地。" }
      ],
      faqs: [
        { q: "迁移 FAQ 适合技术用户吗？", a: "适合，尤其是需要快速核对关键点的时候。" },
        { q: "FAQ 会不会不够深入？", a: "FAQ 负责快速判断，深入部分可以链接到专题页。" }
      ],
      cta: { label: "查看 1bgp 迁移方案", href: "https://www.1bgp.com/" }
    }
  ]
};
