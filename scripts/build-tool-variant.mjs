import { mkdtempSync, rmSync, writeFileSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { spawnSync } from "node:child_process";

const sourcePreset = process.env.SOURCE_PRESET;
const outputDir = process.env.OUTPUT_DIR;
const siteBaseUrl = process.env.SITE_BASE_URL;

if (!sourcePreset || !outputDir || !siteBaseUrl) {
  throw new Error("Missing SOURCE_PRESET, OUTPUT_DIR or SITE_BASE_URL.");
}

const { default: sourceConfig } = await import(pathToFileURL(sourcePreset).href);
const config = structuredClone(sourceConfig);

config.site.baseUrl = siteBaseUrl;

if (process.env.SITE_TITLE) config.site.title = process.env.SITE_TITLE;
if (process.env.SITE_DESCRIPTION) config.site.description = process.env.SITE_DESCRIPTION;
if (process.env.SITE_BRAND) config.site.brand = process.env.SITE_BRAND;
if (process.env.SITE_EYEBROW) config.site.eyebrow = process.env.SITE_EYEBROW;
if (process.env.HERO_TITLE) config.site.heroTitle = process.env.HERO_TITLE;
if (process.env.HERO_SUBTITLE) config.site.heroSubtitle = process.env.HERO_SUBTITLE;
if (process.env.SITE_INTRO) config.site.intro = process.env.SITE_INTRO;
if (process.env.SEARCH_PLACEHOLDER) config.site.searchPlaceholder = process.env.SEARCH_PLACEHOLDER;
if (process.env.UPDATE_NOTE) config.site.updateNote = process.env.UPDATE_NOTE;

const tempDir = mkdtempSync(path.join(os.tmpdir(), "tool-variant-"));
const tempConfigPath = path.join(tempDir, "variant.config.mjs");

writeFileSync(tempConfigPath, `export default ${JSON.stringify(config, null, 2)};\n`, "utf8");

const result = spawnSync(process.execPath, ["/workspace/templates/family-tool/build-tool-site.mjs"], {
  stdio: "inherit",
  env: {
    ...process.env,
    SITE_FACTORY_CONFIG: tempConfigPath,
    SITE_FACTORY_OUTPUT_DIR: outputDir
  }
});

rmSync(tempDir, { recursive: true, force: true });

if (result.status !== 0) {
  process.exit(result.status ?? 1);
}
