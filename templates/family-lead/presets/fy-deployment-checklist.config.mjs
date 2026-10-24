export default {
  site: {
    title: "fy 部署清单专题",
    description: "围绕上线前检查、部署步骤、监控与备份准备整理的清单型引流站，适合承接部署类高意图搜索。",
    baseUrl: "https://fyrghdyrgh-dot.github.io/fy-deployment-checklist/",
    brand: "fy deployment checklist",
    eyebrow: "lead family",
    heroTitle: "先把上线步骤走清楚，再看服务器该怎么买。",
    heroSubtitle: "用清单建立信任，把部署、备份、监控和回滚准备拆成多个方案页，适合承接部署类搜索流量。",
    primaryCta: { label: "查看部署专题", href: "#offers" },
    secondaryCta: { label: "前往 1bgp", href: "https://www.1bgp.com/" },
    selectionNotes: ["先确认上线目标。", "再检查监控备份。", "最后核对资源和回滚。"],
    trustPoints: ["清单式结构", "适合收藏和搜索", "统一导向 1bgp"],
    methodSteps: [
      { title: "确认上线目标", body: "官网、接口、下载站和商城，部署重点并不一样。" },
      { title: "建立回滚意识", body: "真正稳妥的上线一定包含失败后的回退方案。" },
      { title: "检查长期维护", body: "监控、告警和备份不是上线后才补，而是上线前就该确认。" }
    ],
    faqs: [
      { q: "清单页适合做引流吗？", a: "很适合，因为用户搜索时本身就在找步骤和检查项。" },
      { q: "清单页会不会转化弱？", a: "只要下一步资源入口自然，通常会比硬推广告页更稳。" }
    ]
  },
  offers: [
    {
      slug: "vps-launch-checklist",
      title: "VPS 上线检查页",
      audience: "首次部署或新项目上线团队",
      summary: "适合上线前确认系统、端口、备份、告警和访问域名的业务团队。",
      promise: "VPS 上线最怕的不是部署慢，而是漏项。把上线检查列清楚，往往比单纯看配置更能减少翻车概率。",
      benefits: ["适合上线准备搜索", "建立专业感", "自然引到主机方案"],
      signals: ["第一次部署项目", "上线流程不固定", "需要快速核对基础项"],
      compare: [
        { label: "适配阶段", value: "上线前" },
        { label: "优先关注", value: "基础项" },
        { label: "下一步", value: "核对资源" }
      ],
      sections: [
        { title: "上线前要确认什么", body: "域名解析、端口、安全组、备份、监控和日志位置都是最容易漏掉的地方。" },
        { title: "为什么清单比教程更实用", body: "教程解决的是怎么做，清单解决的是有没有漏做。" }
      ],
      faqs: [
        { q: "小项目也要做检查表吗？", a: "建议要，越是小项目越容易因为省步骤导致线上问题。" },
        { q: "需要自动化工具吗？", a: "前期可以人工清单，后续再逐步补自动化。" }
      ],
      cta: { label: "查看 1bgp 上线资源", href: "https://www.1bgp.com/" }
    },
    {
      slug: "backup-monitoring-checklist",
      title: "备份与监控检查页",
      audience: "需要长期维护站点的团队",
      summary: "适合官网、商城、下载站和接口服务在上线前确认备份与告警策略。",
      promise: "真正的稳定不是服务器买完就结束，而是备份和监控从第一天就建立起来。",
      benefits: ["适合长期维护场景", "承接备份与监控搜索", "能自然过渡到服务方案"],
      signals: ["已有线上业务", "担心数据丢失或故障发现太晚", "需要多人协作维护"],
      compare: [
        { label: "适配阶段", value: "上线前后" },
        { label: "优先关注", value: "恢复能力" },
        { label: "下一步", value: "看存储策略" }
      ],
      sections: [
        { title: "备份不能只看有没有", body: "真正关键的是恢复是否顺畅，以及恢复时间是否能接受。" },
        { title: "监控要贴近业务", body: "除了机器资源，还应关注站点可访问性、接口报错和证书有效期。" }
      ],
      faqs: [
        { q: "快照就是备份吗？", a: "不是完全等价，仍应区分系统层和业务数据层备份。" },
        { q: "小站点需要监控吗？", a: "越没人盯的小站点，越应该有基础监控。" }
      ],
      cta: { label: "查看 1bgp 运维资源", href: "https://www.1bgp.com/" }
    },
    {
      slug: "rollback-readiness-guide",
      title: "回滚准备专题页",
      audience: "活动、改版或迁移项目团队",
      summary: "适合需要在发布时间窗口内做好失败回退准备的团队。",
      promise: "真正专业的上线方案一定包含回滚准备，因为很多线上风险不是“会不会出”，而是“出了后能不能快速回”。",
      benefits: ["适合高风险上线", "强调回滚意识", "利于承接迁移和上线场景"],
      signals: ["涉及改版或迁移", "发布时间窗口短", "故障成本较高"],
      compare: [
        { label: "适配阶段", value: "变更前" },
        { label: "优先关注", value: "回退路径" },
        { label: "下一步", value: "核对备份" }
      ],
      sections: [
        { title: "回滚比上线更应该提前写", body: "很多团队会写部署步骤，却没有把失败后如何撤回写清楚。" },
        { title: "回滚需要资源准备", body: "备用实例、旧版本包和恢复点都应提前确认。" }
      ],
      faqs: [
        { q: "简单上线也需要回滚吗？", a: "只要影响真实用户，建议至少准备最小回滚路径。" },
        { q: "回滚会不会太保守？", a: "不是保守，而是降低试错成本。" }
      ],
      cta: { label: "查看 1bgp 部署方案", href: "https://www.1bgp.com/" }
    }
  ]
};
