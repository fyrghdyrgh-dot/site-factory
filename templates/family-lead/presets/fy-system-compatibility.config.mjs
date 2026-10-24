export default {
  site: {
    title: "fy 系统适配专题",
    description: "帮助你判断 Linux、Windows、组件兼容和数据库依赖是否匹配的系统选择站，先看依赖，再决定环境。",
    baseUrl: "https://fyrghdyrgh-dot.github.io/fy-system-compatibility/",
    brand: "fy system compatibility",
    eyebrow: "system compatibility",
    heroTitle: "先看软件栈和组件依赖，再决定系统和服务器方案。",
    heroSubtitle: "如果你在 Linux、Windows、.NET、数据库和远程桌面环境之间犹豫，这里会先帮你把依赖和维护习惯理清楚，再决定更合适的系统方向。",
    primaryCta: { label: "查看适配专题", href: "#offers" },
    secondaryCta: { label: "前往 1bgp", href: "https://www.1bgp.com/" },
    selectionNotes: ["先看组件依赖。", "再看团队习惯。", "最后核对运维成本。"],
    trustPoints: ["先看软件依赖", "覆盖常见系统选择问题", "方便继续判断环境方案"],
    methodSteps: [
      { title: "列出必须依赖", body: "数据库、中间件、桌面环境和框架版本都要先列清楚。" },
      { title: "看团队维护习惯", body: "团队更熟悉哪一套，会直接影响后续维护成本。" },
      { title: "看后续扩展", body: "不是能装上就够，还要看后续更新、备份和监控是否方便。" }
    ],
    faqs: [
      { q: "是不是默认 Linux 就更好？", a: "不一定，还是要看你的软件依赖、团队习惯和后续维护成本。" },
      { q: "为什么系统选择不能只看价格？", a: "因为兼容性、维护效率和后续扩展，往往比表面价格更影响长期体验。" }
    ]
  },
  offers: [
    {
      slug: "linux-vs-windows-hosting",
      title: "Linux 与 Windows 选择页",
      audience: "正在选系统环境的团队",
      summary: "适合还在判断应该选 Linux 还是 Windows VPS 的业务和项目团队。",
      promise: "系统选择不应该只看价格，而要看软件栈、运维习惯和后续维护成本。",
      benefits: ["适合系统选择场景", "适合多类业务", "方便继续比较具体方案"],
      signals: ["还没确定系统环境", "团队对两套系统理解不同", "业务有明确软件依赖"],
      compare: [
        { label: "核心问题", value: "哪套更适合" },
        { label: "优先关注", value: "依赖和维护" },
        { label: "下一步", value: "看权限与备份" }
      ],
      sections: [
        { title: "系统选择要围绕依赖", body: "项目使用的框架、中间件和团队维护方式会决定系统优先级。" },
        { title: "不要忽略维护成本", body: "熟悉度差异会把系统选择问题放大成长期运维成本。" }
      ],
      faqs: [
        { q: "WordPress 适合 Windows 吗？", a: "通常 Linux 更常见，但也要看团队维护习惯。" },
        { q: "Windows 一定更贵吗？", a: "成本结构可能不同，但判断不能只看面价。" }
      ],
      cta: { label: "查看 1bgp 系统方案", href: "https://www.1bgp.com/" }
    },
    {
      slug: "dotnet-hosting-guide",
      title: ".NET 组件适配页",
      audience: "依赖 Windows 栈或 .NET 组件的团队",
      summary: "适合要部署 .NET、SQL Server 或远程桌面维护环境的项目。",
      promise: "依赖 .NET 和 Windows 组件的项目，真正关键的是兼容性、权限和维护习惯，而不是盲目跟随通用建议。",
      benefits: ["适合 Windows 栈业务", "强调组件兼容", "方便继续比较明确技术栈方案"],
      signals: ["使用 .NET 或 SQL Server", "需要远程桌面维护", "团队熟悉 Windows 环境"],
      compare: [
        { label: "适配业务", value: "Windows 栈" },
        { label: "优先关注", value: "兼容性" },
        { label: "下一步", value: "看备份" }
      ],
      sections: [
        { title: "优先确保兼容和可维护", body: "如果项目已深度依赖 Windows 组件，强行迁到 Linux 往往会增加迁移成本。" },
        { title: "看授权与备份策略", body: "除了系统本身，还要确认授权、快照和恢复路径是否明确。" }
      ],
      faqs: [
        { q: ".NET 一定要用 Windows 吗？", a: "要看具体框架和依赖，不是所有场景都必须，但很多业务确实更适合 Windows。" },
        { q: "适合做内部系统吗？", a: "如果团队习惯 Windows 维护，通常是常见选择。" }
      ],
      cta: { label: "查看 1bgp Windows 方案", href: "https://www.1bgp.com/" }
    },
    {
      slug: "database-stack-match",
      title: "数据库与环境匹配页",
      audience: "数据库依赖较重的业务团队",
      summary: "适合在 MySQL、PostgreSQL、SQL Server 等数据库环境上做配套部署判断的团队。",
      promise: "数据库相关的服务器选择，不只是看能不能跑，而是看性能、备份、恢复和团队维护习惯能否匹配。",
      benefits: ["强调数据库依赖", "适合业务系统选型", "方便继续看更细的部署方案"],
      signals: ["数据库是核心业务依赖", "需要考虑备份与恢复", "团队对不同数据库栈经验不一致"],
      compare: [
        { label: "适配业务", value: "数据密集型" },
        { label: "优先关注", value: "恢复与维护" },
        { label: "下一步", value: "看扩展" }
      ],
      sections: [
        { title: "数据库方案要贴近业务", body: "写入频率、查询压力和恢复要求都会影响主机选择。" },
        { title: "环境匹配很重要", body: "数据库跑得起来不代表长期运维省心，还要看团队经验和监控体系。" }
      ],
      faqs: [
        { q: "数据库应该和应用放一起吗？", a: "初期可以，但要提前知道何时拆分更稳。" },
        { q: "数据库更看存储还是内存？", a: "取决于访问模式和业务特点。" }
      ],
      cta: { label: "查看 1bgp 数据库方案", href: "https://www.1bgp.com/" }
    }
  ]
};
