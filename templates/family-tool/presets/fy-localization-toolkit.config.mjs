export default {
  site: {
    title: "fy 本地化工具站",
    description: "围绕中英术语、越南语广告文案、多语校对、字幕长度和跨语种文案复核整理的轻量工具站，适合出海、本地化和内容团队快速处理多语内容。",
    baseUrl: "https://fyrghdyrgh-dot.github.io/fy-localization-toolkit/",
    brand: "fy localization toolkit",
    eyebrow: "localization tool family",
    heroTitle: "先把术语、长度和语言场景对齐，再生成最终版本文案。",
    heroSubtitle: "适合中英术语整理、越南语广告文案、本地化界面复核和字幕长度控制场景。每个页面都优先帮你判断当前内容能不能直接进入翻译和发布阶段。",
    intro: "更适合跨语种内容、产品本地化和投放团队快速复核多语内容，不再只靠零散术语表和聊天记录反复确认。",
    searchPlaceholder: "搜索工具名、场景或标签，例如：越南语、字幕、术语、校对",
    primaryAction: { label: "查看全部工具", href: "#toolDirectory" },
    secondaryAction: { label: "先看使用 FAQ", href: "#faq" },
    updateNote: "2026-10",
    faqs: [
      { q: "这套站只适合翻译团队吗？", a: "不是，投放、运营、产品和客服团队在处理多语内容时也很适合先用这些页面做预检查。" },
      { q: "为什么强调术语和长度？", a: "因为很多本地化问题不是语法错误，而是术语前后不统一、字幕过长或场景不匹配。" },
      { q: "后续还能扩什么？", a: "可以继续补多语价格表达、国家地区称呼、客服语气模板和多语言 SEO 标题检查等页面。" }
    ]
  },
  categories: [
    { id: "term-base", name: "术语与表达", summary: "先统一术语和核心表达，再进入批量翻译或改写。" },
    { id: "multi-review", name: "多语复核", summary: "适合翻译完成后做语言一致性、长度和语气复查。" },
    { id: "market-copy", name: "市场文案", summary: "围绕越南语广告、商品描述和跨语种投放内容整理工具页。" }
  ],
  tools: [
    {
      slug: "term-base-planner",
      title: "中英术语基线表",
      category: "term-base",
      tagline: "核心术语先统一，再给不同语言版本扩写",
      summary: "适合产品、客服和内容团队先把功能名、按钮名、业务词和敏感词汇整理成统一术语表。",
      description: "术语混乱会直接影响翻译质量、产品界面一致性和客服回答统一度。这个页面适合先做术语基线，再进入多语改写。",
      tags: ["术语表", "中英", "本地化"],
      useCases: ["产品术语统一", "客服话术对齐", "多语言界面翻译"],
      steps: ["先列核心业务词", "补充中英对照和禁用表达", "注明适用页面或功能模块", "最后抽样检查是否前后一致"],
      inputs: ["现有术语", "产品页面", "历史翻译版本"],
      outputs: ["术语基线表", "禁用词说明"],
      faqs: [
        { q: "术语表一定要很全吗？", a: "不需要一开始做很大，先覆盖核心高频词最有效。" },
        { q: "同一个词能有多个译法吗？", a: "可以，但要明确不同场景分别用哪一种，避免团队自由发挥。" }
      ],
      primaryLink: "https://fyrghdyrgh-dot.github.io/fy-localization-toolkit/",
      linkLabel: "返回工具站"
    },
    {
      slug: "subtitle-length-review",
      title: "字幕长度复核页",
      category: "multi-review",
      tagline: "先看长度和节奏，再看语言风格",
      summary: "适合视频字幕、短视频脚本和直播切条文案在发布前先控制长度与阅读节奏，避免一屏塞不下。",
      description: "字幕问题往往不是翻得不对，而是长度、停顿和一屏信息量不适合真实播放节奏。这个页面更适合做发布前快速复核。",
      tags: ["字幕", "长度控制", "视频文案"],
      useCases: ["短视频字幕复核", "直播切条文案", "多语字幕发布前检查"],
      steps: ["先控制单行长度", "再看一屏停留时间是否足够", "确认数字和专有名词不会挤压阅读节奏", "最后按实际播放速度再过一遍"],
      inputs: ["字幕文本", "视频时长", "目标语言"],
      outputs: ["长度复核结果", "需要拆句的片段"],
      faqs: [
        { q: "字幕越短越好吗？", a: "不一定，关键是单屏信息量和停留时间匹配。" },
        { q: "为什么翻译没错但观感还是差？", a: "通常是拆句和节奏没有按视频阅读场景调整。" }
      ],
      primaryLink: "https://fyrghdyrgh-dot.github.io/fy-localization-toolkit/",
      linkLabel: "返回工具站"
    },
    {
      slug: "multilingual-copy-review",
      title: "多语文案复核器",
      category: "multi-review",
      tagline: "检查一致性、语气和场景是否跑偏",
      summary: "适合同一份首页、活动页或产品页同时出多语版本时，快速检查信息是否一致、语气是否匹配场景。",
      description: "多语文案常见的问题不是语法，而是不同语言版本重点不一致、语气过头或丢了原本想表达的价值。这个页面适合做发布前复查。",
      tags: ["多语", "校对", "语气一致"],
      useCases: ["多语首页发布", "活动页翻译复核", "跨语种广告文案检查"],
      steps: ["先比对核心信息是否一致", "再看 CTA 和按钮语气是否匹配", "确认国家地区叫法和数字表达统一", "最后删掉明显机器化表达"],
      inputs: ["主语言版本", "目标语言版本", "场景说明"],
      outputs: ["多语复核清单", "需返工的表达项"],
      faqs: [
        { q: "主语言和目标语言一定要逐字一致吗？", a: "不需要逐字一致，但核心信息、动作和承诺要一致。" },
        { q: "怎么减少机器翻译感？", a: "优先改语气和场景表达，而不是只替换个别词。" }
      ],
      primaryLink: "https://fyrghdyrgh-dot.github.io/fy-localization-toolkit/",
      linkLabel: "返回工具站"
    },
    {
      slug: "vietnamese-ad-copy-check",
      title: "越南语广告文案检查",
      category: "market-copy",
      tagline: "先看表达是否自然，再决定是否投放",
      summary: "适合越南市场广告投放、活动页和商品页文案发布前快速复核，避免直译和场景不对。",
      description: "越南语广告文案最常见的问题不是单词拼错，而是表达太像直译、按钮太硬或和本地语气不匹配。这个页面更适合做投放前检查。",
      tags: ["越南语", "广告文案", "投放"],
      useCases: ["越南市场广告投放", "活动页本地化", "商品页文案调整"],
      steps: ["先确认目标对象和场景", "再检查价格、优惠和动作词表达", "确认按钮和标题不显得生硬直译", "最后找一轮本地化视角复核"],
      inputs: ["越南语文案", "原始版本", "投放场景"],
      outputs: ["文案复核结果", "需重写的表达段"],
      faqs: [
        { q: "为什么翻译正确也可能不适合投放？", a: "因为广告文案更依赖语气、节奏和本地表达习惯。" },
        { q: "按钮词要不要直译？", a: "通常不建议，按钮更需要贴近用户日常点击习惯。" }
      ],
      primaryLink: "https://fyrghdyrgh-dot.github.io/fy-localization-toolkit/",
      linkLabel: "返回工具站"
    },
    {
      slug: "zh-vi-localization-check",
      title: "中越文案对照检查",
      category: "market-copy",
      tagline: "先确认信息和场景，再看语言转换",
      summary: "适合中文到越南语的商品文案、客服回复和活动描述在交付前快速对照检查，避免重点缺失或表达偏移。",
      description: "中越文案对照最怕只是看字面是否对应，却忽略了营销重点和使用场景。这个页面会帮助你先确认信息完整，再看语言转换质量。",
      tags: ["中越", "本地化", "对照检查"],
      useCases: ["商品文案对照", "客服话术翻译", "活动页本地化"],
      steps: ["先对齐核心信息点", "再看优惠、数字和时间表达", "确认动作词和 CTA 没跑偏", "最后检查是否保留了原始卖点重点"],
      inputs: ["中文原文", "越南语版本", "目标场景"],
      outputs: ["对照检查结果", "重点缺失项"],
      faqs: [
        { q: "中越文案需要完全一一对应吗？", a: "不一定，但关键信息和动作引导必须完整保留。" },
        { q: "怎么判断是不是过度直译？", a: "如果读起来像在对照中文语序，而不是自然本地表达，通常就需要重写。" }
      ],
      primaryLink: "https://fyrghdyrgh-dot.github.io/fy-localization-toolkit/",
      linkLabel: "返回工具站"
    }
  ]
};
