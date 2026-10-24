import { mkdirSync, rmSync, writeFileSync } from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const configPath = process.env.SITE_FACTORY_CONFIG;
const outputDir = process.env.SITE_FACTORY_OUTPUT_DIR;

if (!configPath || !outputDir) {
  throw new Error("Missing SITE_FACTORY_CONFIG or SITE_FACTORY_OUTPUT_DIR for family-lead.");
}

const { default: config } = await import(pathToFileURL(configPath).href);
const buildIso = new Date().toISOString();
const buildDate = buildIso.slice(0, 10);

rmSync(outputDir, { recursive: true, force: true });
mkdirSync(path.join(outputDir, "assets"), { recursive: true });

writeFile("index.html", renderHomePage());
writeFile("robots.txt", renderRobots());
writeFile("sitemap.xml", renderSitemap());
writeFile(path.join("assets", "lead.css"), renderCss());

for (const offer of config.offers) {
  writeFile(path.join(offer.slug, "index.html"), renderOfferPage(offer));
}

console.log(`Built family-lead site "${config.site.title}" with ${config.offers.length} offer pages.`);

function writeFile(relativePath, content) {
  const filePath = path.join(outputDir, relativePath);
  mkdirSync(path.dirname(filePath), { recursive: true });
  writeFileSync(filePath, content, "utf8");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function absoluteUrl(relativePath = "") {
  return new URL(relativePath, config.site.baseUrl).toString();
}

function renderMeta({ title, description, canonical, jsonLdEntries = [] }) {
  return `  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(title)}</title>
  <meta name="description" content="${escapeHtml(description)}">
  <meta name="robots" content="index,follow">
  <meta name="googlebot" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1">
  <meta name="theme-color" content="#0f172a">
  <meta name="twitter:card" content="summary_large_image">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="${escapeHtml(config.site.title)}">
  <meta property="og:title" content="${escapeHtml(title)}">
  <meta property="og:description" content="${escapeHtml(description)}">
  <meta property="og:url" content="${escapeHtml(canonical)}">
  <meta property="og:locale" content="zh_CN">
  <meta name="twitter:title" content="${escapeHtml(title)}">
  <meta name="twitter:description" content="${escapeHtml(description)}">
  <link rel="canonical" href="${escapeHtml(canonical)}">
  <link rel="stylesheet" href="${absoluteUrl("assets/lead.css")}">
${renderJsonLdScripts(jsonLdEntries)}`;
}

function renderJsonLdScripts(entries) {
  return entries
    .filter(Boolean)
    .map((entry) => `  <script type="application/ld+json">${JSON.stringify(entry)}</script>`)
    .join("\n");
}

function buildFaqJsonLd(faqs, canonical) {
  if (!faqs?.length) {
    return null;
  }

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    url: canonical,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a
      }
    }))
  };
}

function buildBreadcrumbJsonLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}

function siteBrandLabel() {
  return config.site.title;
}

function themeValue(key, fallback) {
  return config.site.theme?.[key] ?? fallback;
}

function renderHomePage() {
  const canonical = absoluteUrl();
  const jsonLdEntries = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: config.site.title,
      url: canonical,
      description: config.site.description,
      inLanguage: "zh-CN",
      dateModified: buildIso,
      hasPart: config.offers.map((offer) => ({
        "@type": "WebPage",
        name: offer.title,
        url: absoluteUrl(`${offer.slug}/`)
      }))
    },
    buildFaqJsonLd(config.site.faqs, canonical),
    buildBreadcrumbJsonLd([
      { name: config.site.title, url: canonical }
    ])
  ];

  return `<!doctype html>
<html lang="zh-CN">
<head>
${renderMeta({
  title: config.site.title,
  description: config.site.description,
  canonical,
  jsonLdEntries
})}
</head>
<body>
  <header class="topbar">
    <div class="shell topbar-row">
      <a class="brand" href="${absoluteUrl()}">${escapeHtml(siteBrandLabel())}</a>
      <nav>
        <a href="#offers">方案总览</a>
        <a href="#method">如何判断</a>
        <a href="#faq">常见问题</a>
      </nav>
      <a class="button ghost" href="${escapeHtml(config.site.primaryCta.href)}">查看可选方案</a>
    </div>
  </header>
  <main>
    <section class="hero shell">
      <div class="hero-copy">
        <p class="eyebrow">${escapeHtml(config.site.eyebrow)}</p>
        <h1>${escapeHtml(config.site.heroTitle)}</h1>
        <p class="hero-text">${escapeHtml(config.site.heroSubtitle)}</p>
        <div class="button-row">
          <a class="button" href="#offers">查看可选方案</a>
          <a class="button ghost" href="${escapeHtml(config.site.secondaryCta.href)}">获取参考资源</a>
        </div>
        ${config.site.heroBadges?.length ? `<div class="hero-badges">${config.site.heroBadges.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}</div>` : ""}
      </div>
      <aside class="hero-panel">
        <h2>${escapeHtml(config.site.panelTitle ?? "选择建议")}</h2>
        <ul>
          ${config.site.selectionNotes.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
        </ul>
      </aside>
    </section>
    <section class="shell trust-row">
      ${config.site.trustPoints.map((item) => `<article>${escapeHtml(item)}</article>`).join("")}
    </section>
    <section class="shell offer-shell" id="offers">
      <div class="section-head">
        <p class="eyebrow">solutions</p>
        <h2>先看最接近你情况的页面</h2>
      </div>
      <div class="offer-grid">
        ${config.offers.map(renderOfferCard).join("")}
      </div>
    </section>
    <section class="shell method-shell" id="method">
      <div class="section-head">
        <p class="eyebrow">how to choose</p>
        <h2>如果你还没想清楚，可以先按这几个步骤判断。</h2>
      </div>
      <div class="method-grid">
        ${config.site.methodSteps.map((step, index) => `<article><span>${index + 1}</span><h3>${escapeHtml(step.title)}</h3><p>${escapeHtml(step.body)}</p></article>`).join("")}
      </div>
    </section>
    <section class="shell faq-shell" id="faq">
      <div class="section-head">
        <p class="eyebrow">common questions</p>
        <h2>先把大家最常问的几个问题说清楚</h2>
      </div>
      <div class="faq-grid">
        ${config.site.faqs.map((faq) => `<article><h3>${escapeHtml(faq.q)}</h3><p>${escapeHtml(faq.a)}</p></article>`).join("")}
      </div>
    </section>
  </main>
</body>
</html>`;
}

function renderOfferCard(offer) {
  return `<article class="offer-card">
    <p class="offer-audience">${escapeHtml(offer.audience)}</p>
    <h3>${escapeHtml(offer.title)}</h3>
    <p class="offer-summary">${escapeHtml(offer.summary)}</p>
    <ul class="signal-list">
      ${offer.signals.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
    </ul>
    <div class="button-row compact">
      <a class="button" href="${absoluteUrl(`${offer.slug}/`)}">查看详情</a>
      <a class="text-link" href="${escapeHtml(offer.cta.href)}">获取参考方案</a>
    </div>
  </article>`;
}

function renderOfferPage(offer) {
  const canonical = absoluteUrl(`${offer.slug}/`);
  const jsonLdEntries = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: offer.title,
      url: canonical,
      description: offer.summary,
      inLanguage: "zh-CN",
      dateModified: buildIso,
      audience: { "@type": "Audience", audienceType: offer.audience }
    },
    buildFaqJsonLd(offer.faqs, canonical),
    buildBreadcrumbJsonLd([
      { name: config.site.title, url: absoluteUrl() },
      { name: offer.title, url: canonical }
    ])
  ];

  return `<!doctype html>
<html lang="zh-CN">
<head>
${renderMeta({
  title: `${offer.title} - ${config.site.title}`,
  description: offer.summary,
  canonical,
  jsonLdEntries
})}
</head>
<body>
  <header class="topbar">
    <div class="shell topbar-row">
      <a class="brand" href="${absoluteUrl()}">${escapeHtml(siteBrandLabel())}</a>
      <nav>
        <a href="${absoluteUrl()}">返回首页</a>
        <a href="#signals">适合人群</a>
        <a href="#faq">常见问题</a>
      </nav>
      <a class="button ghost" href="${escapeHtml(offer.cta.href)}">获取参考方案</a>
    </div>
  </header>
  <main class="shell offer-detail">
    <section class="detail-copy">
      <p class="eyebrow">${escapeHtml(offer.audience)}</p>
      <h1>${escapeHtml(offer.title)}</h1>
      <p class="hero-text">${escapeHtml(offer.promise)}</p>
      <div class="compare-grid">
        ${offer.compare.map((item) => `<article><strong>${escapeHtml(item.value)}</strong><span>${escapeHtml(item.label)}</span></article>`).join("")}
      </div>
      <section class="content-block">
        <h2>这页适合哪类情况</h2>
        <p>${escapeHtml(offer.summary)}</p>
      </section>
      ${offer.sections.map((section) => `<section class="content-block"><h2>${escapeHtml(section.title)}</h2><p>${escapeHtml(section.body)}</p></section>`).join("")}
      <section class="content-block" id="signals">
        <h2>如果你符合这些情况，就值得重点看</h2>
        <ul class="signal-list">
          ${offer.signals.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
        </ul>
      </section>
      <section class="content-block" id="faq">
        <h2>常见问题</h2>
        <div class="faq-grid">
          ${offer.faqs.map((faq) => `<article><h3>${escapeHtml(faq.q)}</h3><p>${escapeHtml(faq.a)}</p></article>`).join("")}
        </div>
      </section>
      <section class="content-block">
        <h2>你也可以继续看看这些页面</h2>
        <div class="related-grid">
          ${renderRelatedOffers(offer.slug)}
        </div>
      </section>
    </section>
    <aside class="offer-sidebar">
      <div class="sidebar-card">
        <h2>先看结论</h2>
        <p>${escapeHtml(offer.summary)}</p>
      </div>
      <div class="sidebar-card">
        <h2>这页重点关注</h2>
        <ul class="signal-list">
          ${offer.benefits.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
        </ul>
      </div>
      <div class="sidebar-card">
        <h2>下一步</h2>
        <p>如果这页内容和你的情况接近，可以继续查看参考方案；如果还在比较，也可以回首页继续看其他页面。</p>
        <div class="sidebar-actions">
          <a class="button" href="${escapeHtml(offer.cta.href)}">前往 1bgp 查看参考方案</a>
          <a class="text-link" href="${absoluteUrl()}">返回首页继续比较</a>
        </div>
      </div>
    </aside>
  </main>
</body>
</html>`;
}

function renderRelatedOffers(currentSlug) {
  return config.offers
    .filter((offer) => offer.slug !== currentSlug)
    .map(
      (offer) => `<article class="related-card">
  <p class="offer-audience">${escapeHtml(offer.audience)}</p>
  <h3>${escapeHtml(offer.title)}</h3>
  <p>${escapeHtml(offer.summary)}</p>
  <a class="text-link" href="${absoluteUrl(`${offer.slug}/`)}">查看详情</a>
</article>`
    )
    .join("");
}

function renderRobots() {
  return `User-agent: *\nAllow: /\n\nUser-agent: Googlebot\nAllow: /\n\nSitemap: ${absoluteUrl("sitemap.xml")}\n`;
}

function renderSitemap() {
  const urls = [
    { url: absoluteUrl(), priority: "1.0" },
    ...config.offers.map((offer) => ({ url: absoluteUrl(`${offer.slug}/`), priority: "0.8" }))
  ];
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map(
      ({ url, priority }) =>
        `  <url><loc>${escapeHtml(url)}</loc><lastmod>${buildDate}</lastmod><changefreq>weekly</changefreq><priority>${priority}</priority></url>`
    )
    .join("\n")}\n</urlset>\n`;
}

function renderCss() {
  return `:root {
  --bg: ${themeValue("bg", "#f8f8fb")};
  --ink: #101223;
  --muted: #6b7085;
  --accent: ${themeValue("accent", "#0f172a")};
  --accent-2: ${themeValue("accent2", "#4f46e5")};
  --hero-top: ${themeValue("heroTop", "#0f172a")};
  --hero-bottom: ${themeValue("heroBottom", "#111c46")};
  --panel-soft: ${themeValue("panelSoft", "#f8faff")};
  --accent-soft: ${themeValue("accentSoft", "rgba(79, 70, 229, 0.14)")};
  --card: #ffffff;
  --line: #e3e6f0;
}

* { box-sizing: border-box; }
body {
  position: relative;
  margin: 0;
  font-family: "Inter", "PingFang SC", "Microsoft YaHei", sans-serif;
  background: var(--bg);
  color: var(--ink);
}
body::before {
  content: "";
  position: absolute;
  inset: 0 0 auto 0;
  height: clamp(460px, 58vw, 640px);
  background: linear-gradient(180deg, var(--hero-top) 0, var(--hero-bottom) 100%);
  z-index: -1;
}
a { color: inherit; text-decoration: none; }
.shell { width: min(1120px, calc(100% - 32px)); margin: 0 auto; }
.topbar { padding: 20px 0; color: #fff; }
.topbar-row, nav, .button-row, .trust-row { display: flex; gap: 14px; align-items: center; }
.topbar-row { justify-content: space-between; }
nav { color: rgba(255,255,255,0.78); flex-wrap: wrap; }
.brand { font-weight: 800; font-size: 20px; }
.button, .text-link {
  display: inline-flex; align-items: center; justify-content: center;
  min-height: 44px; padding: 0 18px; border-radius: 999px; font-weight: 700;
}
.button { background: linear-gradient(135deg, var(--accent-2), var(--accent)); color: #fff; box-shadow: 0 14px 30px rgba(16, 18, 35, 0.18); }
.button.ghost { background: rgba(255,255,255,0.1); color: #fff; border: 1px solid rgba(255,255,255,0.2); }
.hero { display: grid; grid-template-columns: minmax(0, 1.4fr) minmax(280px, 0.8fr); gap: 24px; padding: 34px 0 56px; color: #fff; align-items: start; }
.hero-copy { display: grid; gap: 18px; align-content: start; }
.eyebrow { margin: 0 0 10px; font-size: 12px; letter-spacing: 0.16em; text-transform: uppercase; color: #a5b4fc; font-weight: 800; }
h1, h2, h3 { margin: 0; line-height: 1.15; }
h1 { font-size: clamp(36px, 6vw, 58px); max-width: 700px; }
.hero-text, .offer-summary, .faq-grid p, .content-block p, .signal-list, .hero-panel li { color: var(--muted); line-height: 1.8; }
.hero .hero-text { color: rgba(255,255,255,0.78); }
.hero-panel, .offer-card, .method-grid article, .faq-grid article, .sidebar-card, .content-block, .compare-grid article, .trust-row article {
  background: var(--card);
  border: 1px solid var(--line);
  border-radius: 24px;
  box-shadow: 0 18px 36px rgba(16, 18, 35, 0.08);
}
.hero-panel { padding: 24px; color: var(--ink); background: linear-gradient(180deg, #ffffff 0, var(--panel-soft) 100%); }
.hero-panel ul, .signal-list { padding-left: 18px; margin: 0; }
.hero-badges { display: flex; gap: 12px; flex-wrap: wrap; }
.hero-badges span {
  display: inline-flex;
  align-items: center;
  min-height: 38px;
  padding: 0 14px;
  border-radius: 999px;
  background: var(--accent-soft);
  border: 1px solid rgba(255,255,255,0.08);
  color: rgba(255,255,255,0.92);
  font-weight: 700;
}
.trust-row { flex-wrap: wrap; padding-bottom: 18px; }
.trust-row article { flex: 1 1 180px; padding: 18px 20px; }
.offer-shell, .method-shell, .faq-shell { padding: 24px 0; }
.section-head { display: grid; gap: 8px; margin-bottom: 18px; }
.offer-grid, .method-grid, .faq-grid { display: grid; gap: 18px; grid-template-columns: repeat(2, minmax(0, 1fr)); }
.offer-card, .method-grid article, .faq-grid article, .content-block, .sidebar-card, .related-card { padding: 24px; }
.offer-audience { color: var(--accent-2); font-weight: 700; margin: 0 0 8px; }
.compact { justify-content: space-between; flex-wrap: wrap; margin-top: 18px; }
.text-link { padding: 0; min-height: auto; color: var(--muted); }
.method-grid article span, .compare-grid strong { font-size: 28px; font-weight: 800; color: var(--accent-2); }
.offer-detail { display: grid; grid-template-columns: minmax(0, 1.4fr) 320px; gap: 22px; padding: 30px 0 56px; }
.detail-copy { display: grid; gap: 18px; }
.compare-grid { display: grid; gap: 14px; grid-template-columns: repeat(3, minmax(0, 1fr)); }
.compare-grid article { padding: 18px; display: grid; gap: 10px; }
.content-block { display: grid; gap: 12px; }
.offer-sidebar { display: grid; gap: 16px; align-content: start; position: sticky; top: 16px; height: fit-content; }
.related-grid { display: grid; gap: 16px; grid-template-columns: repeat(2, minmax(0, 1fr)); }
.related-card {
  background: var(--card);
  border: 1px solid var(--line);
  border-radius: 20px;
  display: grid;
  gap: 10px;
}
.related-card p { margin: 0; color: var(--muted); line-height: 1.7; }
.sidebar-actions { display: grid; gap: 14px; margin-top: 8px; }
@media (max-width: 900px) {
  .hero, .offer-grid, .method-grid, .faq-grid, .offer-detail, .compare-grid, .related-grid { grid-template-columns: 1fr; }
  .topbar-row, nav, .button-row, .trust-row { flex-direction: column; align-items: stretch; }
}
`;
}
