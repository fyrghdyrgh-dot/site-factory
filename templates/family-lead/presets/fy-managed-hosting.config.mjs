export default {
  site: {
    title: "fy 托管与自管比较",
    description: "帮助你比较托管、自管和半托管差异的选择站，适合先看团队能力，再判断哪种维护方式更省心。",
    baseUrl: "https://fyrghdyrgh-dot.github.io/fy-managed-hosting/",
    brand: "fy managed hosting",
    eyebrow: "hosting compare",
    heroTitle: "不是所有团队都适合自己扛全部运维。",
    heroSubtitle: "如果你在自管、托管和半托管之间犹豫，可以先看团队有没有人维护、能接受多快响应，以及愿意投入多少精力。",
    primaryCta: { label: "查看比较方案", href: "#offers" },
    secondaryCta: { label: "前往 1bgp", href: "https://www.1bgp.com/" },
    selectionNotes: ["先看团队有没有人维护。", "再看故障响应要求。", "最后看预算和服务边界。"],
    trustPoints: ["先看团队维护能力", "覆盖常见托管选择问题", "方便继续比较方案"],
    methodSteps: [
      { title: "看团队运维能力", body: "有没有稳定的人负责维护，会直接影响方案选择。" },
      { title: "看故障容忍度", body: "业务越不能停，越要重视响应和恢复边界。" },
      { title: "看长期成本", body: "自管不一定更省，很多成本会转移到人力和响应上。" }
    ],
    faqs: [
      { q: "托管一定更贵吗？", a: "表面价格可能更高，但总成本还要一起看人力、时间和故障处理成本。" },
      { q: "半托管适合谁？", a: "适合想保留一定灵活度，但又不想把所有维护都自己扛下来的团队。" }
    ]
  },
  offers: [
    {
      slug: "self-managed-vps",
      title: "自管 VPS 判断页",
      audience: "有基础运维能力的团队",
      summary: "适合希望保留更高控制权、且团队能承担日常维护与排障的业务。",
      promise: "自管 VPS 的优势在于自由度高，但前提是团队真的能接住监控、备份、安全和故障排查。",
      benefits: ["灵活度高", "适合有运维经验团队", "利于自定义部署"],
      signals: ["团队有稳定运维能力", "需要较多自定义控制", "能接受自己处理故障"],
      compare: [
        { label: "适配对象", value: "技术团队" },
        { label: "优先关注", value: "控制权" },
        { label: "下一步", value: "看维护成本" }
      ],
      sections: [
        { title: "自管的收益与代价", body: "自由度更高，但监控、备份、安全和更新都需要自己兜底。" },
        { title: "什么时候不建议自管", body: "如果团队没有稳定运维角色，自管很容易让问题堆积。" }
      ],
      faqs: [
        { q: "自管更省钱吗？", a: "不一定，节省的订阅费可能会变成人力和故障成本。" },
        { q: "适合长期业务吗？", a: "适合，但前提是团队有能力持续维护。" }
      ],
      cta: { label: "查看 1bgp VPS 方案", href: "https://www.1bgp.com/" }
    },
    {
      slug: "managed-wordpress-plan",
      title: "托管 WordPress 方案页",
      audience: "内容站和营销站团队",
      summary: "适合更关注内容更新和转化，不希望自己承担太多底层运维工作的团队。",
      promise: "托管 WordPress 的价值不只是省事，更在于把备份、更新和恢复流程做得更稳定。",
      benefits: ["适合内容团队", "减少底层运维负担", "强调备份更新稳定性"],
      signals: ["以内容发布为主", "没有专职运维", "希望降低维护复杂度"],
      compare: [
        { label: "适配对象", value: "内容团队" },
        { label: "优先关注", value: "维护便利" },
        { label: "下一步", value: "看恢复能力" }
      ],
      sections: [
        { title: "托管适合哪些站", body: "官网、博客、营销专题站通常比复杂业务系统更适合优先考虑托管。" },
        { title: "重点看什么", body: "备份、插件更新、恢复能力和服务边界，比单看套餐参数更重要。" }
      ],
      faqs: [
        { q: "托管会限制扩展吗？", a: "要看具体服务边界，有些托管更适合标准化场景。" },
        { q: "适合多站点吗？", a: "取决于运维方式和服务能力，可以先从单站判断。" }
      ],
      cta: { label: "查看 1bgp 托管资源", href: "https://www.1bgp.com/" }
    },
    {
      slug: "semi-managed-hosting",
      title: "半托管折中方案页",
      audience: "既要灵活又想减轻维护压力的团队",
      summary: "适合仍需一定控制权，但不想把所有底层工作都压在内部团队上的业务。",
      promise: "半托管的价值在于把最容易出问题的基础维护交出去，同时保留关键业务的可控性。",
      benefits: ["适合中间态团队", "兼顾灵活与省心", "利于平衡运维投入"],
      signals: ["团队有基础技术能力", "不想全托管也不想全自管", "更看重故障恢复效率"],
      compare: [
        { label: "适配对象", value: "成长中团队" },
        { label: "优先关注", value: "服务边界" },
        { label: "下一步", value: "看 SLA" }
      ],
      sections: [
        { title: "半托管最适合什么阶段", body: "业务开始稳定增长，但内部还不想正式投入完整运维体系时最常见。" },
        { title: "边界一定要写清楚", body: "哪些由服务方负责，哪些由内部团队负责，应提前明确。" }
      ],
      faqs: [
        { q: "半托管是不是妥协方案？", a: "更准确地说，是适配成长中团队的折中方案。" },
        { q: "适合接口服务吗？", a: "如果服务边界清晰，也可以纳入考虑。" }
      ],
      cta: { label: "查看 1bgp 托管方案", href: "https://www.1bgp.com/" }
    }
  ]
};
