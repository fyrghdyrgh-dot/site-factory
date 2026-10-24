export default {
  site: {
    title: "fy 迁移切换方案",
    description: "面向主机迁移、数据库切换和站点回滚准备的迁移专题站，帮助你先把切换步骤和风险想清楚。",
    baseUrl: "https://fyrghdyrgh-dot.github.io/fy-migration-runbook/",
    brand: "fy migration runbook",
    eyebrow: "migration playbook",
    heroTitle: "迁移不是一次复制，而是一套切换和回退方案。",
    heroSubtitle: "不管是换机房、换主机还是切数据库，先把切换窗口、验证步骤和回滚准备想清楚，迁移过程会稳很多。",
    primaryCta: { label: "查看迁移方案", href: "#offers" },
    secondaryCta: { label: "前往 1bgp", href: "https://www.1bgp.com/" },
    selectionNotes: ["先盘点现状。", "再规划切换窗口。", "最后准备回滚和验证。"],
    trustPoints: ["先看切换风险", "覆盖常见迁移场景", "方便继续规划下一步"],
    methodSteps: [
      { title: "盘点现有依赖", body: "域名、数据库、文件、定时任务和证书都应提前列清楚。" },
      { title: "缩小切换窗口", body: "切换窗口越清晰，业务中断时间越容易控制。" },
      { title: "预留回滚余地", body: "迁移前保留恢复点和旧环境，是降低风险的关键。" }
    ],
    faqs: [
      { q: "为什么迁移前要先做准备页？", a: "因为迁移最怕临时决策，提前把关键步骤列清楚，执行时会更稳。" },
      { q: "迁移是不是只要复制过去就行？", a: "不是，切换窗口、验证顺序和回滚准备同样重要。" }
    ]
  },
  offers: [
    {
      slug: "site-migration-plan",
      title: "站点迁移方案页",
      audience: "官网、博客和内容站团队",
      summary: "适合已有线上站点，需要迁移到新主机或新机房的团队。",
      promise: "站点迁移的关键不在复制速度，而在切换窗口、缓存刷新、证书与 DNS 的配合是否明确。",
      benefits: ["承接迁移类搜索", "适合官网与内容站", "自然过渡到新主机资源"],
      signals: ["已有线上站点", "准备更换服务器或机房", "需要降低迁移风险"],
      compare: [
        { label: "核心阶段", value: "切换前" },
        { label: "优先关注", value: "DNS 与备份" },
        { label: "下一步", value: "做验证" }
      ],
      sections: [
        { title: "迁移前先缩短链路", body: "先明确文件、数据库、缓存和域名切换路径，避免临时决策。" },
        { title: "切换后要验证什么", body: "访问入口、证书、静态资源、提交表单和后台功能都应逐项确认。" }
      ],
      faqs: [
        { q: "夜里切换一定更好吗？", a: "不一定，要结合用户活跃时段和团队响应能力。" },
        { q: "迁移前需要停机吗？", a: "取决于业务写入量和切换策略，不一定都要长时间停机。" }
      ],
      cta: { label: "查看 1bgp 迁移资源", href: "https://www.1bgp.com/" }
    },
    {
      slug: "database-cutover-guide",
      title: "数据库切换判断页",
      audience: "有持续写入业务的团队",
      summary: "适合担心迁移过程中数据一致性、写入中断和回滚难度的业务团队。",
      promise: "数据库切换真正难的是一致性和验证路径，不是把数据搬过去本身。",
      benefits: ["适合高风险切换场景", "强调一致性与验证", "利于承接迁移方案需求"],
      signals: ["业务持续有写入", "担心数据丢失", "需要明确切换窗口和验证顺序"],
      compare: [
        { label: "核心问题", value: "数据一致性" },
        { label: "优先关注", value: "写入控制" },
        { label: "下一步", value: "看回滚" }
      ],
      sections: [
        { title: "写入控制很关键", body: "如果切换窗口内写入策略不明确，迁移后的数据一致性很难保障。" },
        { title: "验证比速度更重要", body: "切换后应快速核对关键业务数据，而不是只看服务启动成功。" }
      ],
      faqs: [
        { q: "全量同步后就够了吗？", a: "通常还需要增量切换和最终验证。" },
        { q: "数据库回滚难吗？", a: "难度取决于写入策略和恢复点准备。" }
      ],
      cta: { label: "查看 1bgp 切换方案", href: "https://www.1bgp.com/" }
    },
    {
      slug: "cross-idc-move",
      title: "跨机房迁移专题页",
      audience: "准备换区域或换服务商的团队",
      summary: "适合从旧机房迁往新机房、同时要重新评估线路和访问质量的场景。",
      promise: "跨机房迁移不仅是资源迁移，更是一次重新评估访问路径、线路质量和故障恢复能力的机会。",
      benefits: ["适合重新选节点", "可承接线路升级流量", "强调迁移与访问体验联动"],
      signals: ["准备换服务商或机房", "希望改善访问质量", "需要同步调整线路策略"],
      compare: [
        { label: "核心判断", value: "迁完会不会更好" },
        { label: "优先关注", value: "访问路径" },
        { label: "下一步", value: "重新选线" }
      ],
      sections: [
        { title: "迁移是重新选型的窗口", body: "如果原有节点和线路已不适合业务，迁移时应一并重新评估。" },
        { title: "不要只迁不验证", body: "迁移后的访问体验、监控和备份策略都应一起更新。" }
      ],
      faqs: [
        { q: "换机房一定会变快吗？", a: "不一定，要看新节点是否更贴近用户和线路是否更合适。" },
        { q: "什么时候适合跨机房迁移？", a: "当旧环境已明显限制业务扩展时，通常值得评估。" }
      ],
      cta: { label: "查看 1bgp 迁移方案", href: "https://www.1bgp.com/" }
    }
  ]
};
