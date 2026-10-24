export default {
  site: {
    title: "fy 内容运营工具站",
    description: "围绕标题润色、FAQ 结构、卖点提炼、落地页结构和欢迎语模板整理的轻量工具站，适合内容、运营、客服和电商团队快速落地页面与文案。",
    baseUrl: "https://fyrghdyrgh-dot.github.io/fy-content-ops-lab/",
    brand: "fy content ops lab",
    eyebrow: "content tool family",
    heroTitle: "先把结构、标题和常见问答整理清楚，再去扩写完整内容。",
    heroSubtitle: "适合商品详情、活动页、FAQ、欢迎语和卖点整理场景。每个页面都优先告诉你先处理什么、整理成什么样、下一步怎么复用。",
    intro: "更适合内容运营、客服、增长和电商团队处理页面结构、文案框架和 FAQ 时快速拿到可执行的整理思路，而不是只看概念说明。",
    searchPlaceholder: "搜索工具名、场景或标签，例如：FAQ、标题、落地页、卖点",
    primaryAction: { label: "查看全部工具", href: "#toolDirectory" },
    secondaryAction: { label: "先看常见问题", href: "#faq" },
    updateNote: "2026-10",
    faqs: [
      { q: "这套站适合写完整文案吗？", a: "更适合先定结构、整理标题、梳理 FAQ 和卖点，再进入扩写阶段。" },
      { q: "为什么偏重结构而不是长文？", a: "因为大多数内容问题不是不会写，而是先后顺序、重点和模块边界没整理清楚。" },
      { q: "后续还能扩什么？", a: "可以继续扩客服 SOP、活动页 CTA、价格页模块和商品对比表等页面。" }
    ]
  },
  categories: [
    { id: "page-structure", name: "页面结构", summary: "先把页面模块、顺序和重点块确定，再进入具体写作。" },
    { id: "copy-polish", name: "文案整理", summary: "适合标题、欢迎语、卖点和常见回复的快速梳理。" },
    { id: "faq-library", name: "FAQ 与承接", summary: "围绕问答结构、私域承接和售前解释整理更稳定的内容骨架。" }
  ],
  tools: [
    {
      slug: "landing-page-structure-tool",
      title: "落地页结构检查器",
      category: "page-structure",
      tagline: "主标题、卖点、CTA 和信任块先排顺",
      summary: "适合投放页、专题页和活动页开写前先理清页面结构，避免一上来就堆功能点或堆卖点。",
      description: "落地页的关键通常不是字多，而是顺序是否合理。这个页面会帮助你先看首屏、信任块、FAQ 和 CTA 是否摆在正确位置。",
      tags: ["落地页", "页面结构", "CTA"],
      useCases: ["投放落地页", "活动专题页", "产品介绍页"],
      steps: ["先写主标题和副标题", "确认首屏 CTA 只有一个主动作", "把卖点和信任块分开摆放", "最后补 FAQ 和底部转化模块"],
      inputs: ["页面目标", "主卖点", "目标动作"],
      outputs: ["页面结构草图", "模块顺序建议"],
      faqs: [
        { q: "首屏一定要放很多内容吗？", a: "不用，首屏更重要的是让用户看懂你提供什么和下一步做什么。" },
        { q: "FAQ 应该放前面还是后面？", a: "通常放在中后段更稳，先让用户理解价值，再消除顾虑。" }
      ],
      primaryLink: "https://fyrghdyrgh-dot.github.io/fy-content-ops-lab/",
      linkLabel: "返回工具站"
    },
    {
      slug: "title-polish-checker",
      title: "标题润色检查器",
      category: "copy-polish",
      tagline: "先保留意图，再优化表达",
      summary: "适合文章标题、商品标题和活动标题整理，先确认搜索意图和阅读对象，再决定怎么润色。",
      description: "标题润色最怕只改词不改重点。这个页面会提醒你先看对象、场景和核心信息有没有保留下来，再决定风格化处理。",
      tags: ["标题", "SEO", "内容优化"],
      useCases: ["文章标题优化", "商品标题整理", "活动页标题修改"],
      steps: ["先保留关键词和核心信息", "判断是偏搜索还是偏点击", "删掉空泛和重复表达", "最后检查移动端显示长度"],
      inputs: ["原始标题", "目标对象", "投放或搜索场景"],
      outputs: ["标题优化方向", "可复用的标题版本"],
      faqs: [
        { q: "标题越短越好吗？", a: "不一定，要先保证核心信息完整，再控制到适合展示的长度。" },
        { q: "为什么改完还是像 AI 文案？", a: "通常是没有保留真实场景和具体词，只是在通用表达里换词。" }
      ],
      primaryLink: "https://fyrghdyrgh-dot.github.io/fy-content-ops-lab/",
      linkLabel: "返回工具站"
    },
    {
      slug: "selling-point-matrix",
      title: "卖点矩阵整理器",
      category: "copy-polish",
      tagline: "把功能点翻成用户能理解的卖点",
      summary: "适合商品页、服务页和方案页先把功能、场景和收益整理成卖点矩阵，再进入文案写作。",
      description: "很多页面写不出卖点，不是因为没内容，而是没有把功能、使用场景和用户收益对应起来。这个页面更适合做前置拆解。",
      tags: ["卖点", "功能转化", "商品页"],
      useCases: ["商品卖点整理", "服务介绍页", "方案页写作"],
      steps: ["先列功能点", "补充对应使用场景", "翻译成用户收益表达", "筛出最该放在首屏的 3 个卖点"],
      inputs: ["功能列表", "目标用户", "使用场景"],
      outputs: ["卖点矩阵", "首屏卖点优先级"],
      faqs: [
        { q: "卖点和功能点有什么区别？", a: "功能点是产品有什么，卖点是用户为什么要在意。" },
        { q: "首屏能放几个卖点？", a: "通常 3 个以内更容易让用户快速抓住重点。" }
      ],
      primaryLink: "https://fyrghdyrgh-dot.github.io/fy-content-ops-lab/",
      linkLabel: "返回工具站"
    },
    {
      slug: "faq-structure-planner",
      title: "FAQ 结构规划页",
      category: "faq-library",
      tagline: "常见问题先分组，再安排回答顺序",
      summary: "适合售前咨询、退款说明、配置解释和客服知识库，先把问题按阶段分组，再确定每组先回答什么。",
      description: "FAQ 写得乱通常不是答案不够，而是没有按用户的提问顺序和担心程度来组织。这个页面会帮助你先做结构规划。",
      tags: ["FAQ", "知识库", "客服"],
      useCases: ["售前 FAQ 整理", "退款说明页", "知识库问答结构"],
      steps: ["先收集高频问题", "按售前、使用中、售后分组", "把最常被追问的问题提前", "最后统一答案长度和表达方式"],
      inputs: ["问题列表", "使用阶段", "历史咨询记录"],
      outputs: ["FAQ 分组结构", "问答优先级"],
      faqs: [
        { q: "FAQ 要不要写很长？", a: "通常先把关键答案写清楚，再补充细节，阅读体验更好。" },
        { q: "一个问题能拆成多个吗？", a: "如果用户心里其实在问不同事，拆开更利于理解和收录。" }
      ],
      primaryLink: "https://fyrghdyrgh-dot.github.io/fy-content-ops-lab/",
      linkLabel: "返回工具站"
    },
    {
      slug: "welcome-message-builder",
      title: "欢迎语结构生成器",
      category: "faq-library",
      tagline: "先交代身份、价值和下一步动作",
      summary: "适合私域、客服、社群和产品 onboarding 场景，帮助把欢迎语整理成更清楚的三段式结构。",
      description: "欢迎语最常见的问题是太空泛、太长或没有下一步动作。这个页面会把身份说明、价值提示和引导动作拆成更容易复用的结构。",
      tags: ["欢迎语", "私域", "onboarding"],
      useCases: ["社群欢迎语", "客服首次回复", "产品 onboarding 提示"],
      steps: ["先说明你是谁", "一句话说清能提供什么", "补一个明确的下一步动作", "最后删掉客套和重复表达"],
      inputs: ["渠道场景", "目标对象", "下一步动作"],
      outputs: ["欢迎语框架", "不同场景版本"],
      faqs: [
        { q: "欢迎语需要很热情吗？", a: "重点不是热情程度，而是清楚、可信并且让用户知道下一步怎么走。" },
        { q: "为什么欢迎语也要结构化？", a: "因为首次接触时用户判断很快，结构清楚比堆很多话更有效。" }
      ],
      primaryLink: "https://fyrghdyrgh-dot.github.io/fy-content-ops-lab/",
      linkLabel: "返回工具站"
    }
  ]
};
