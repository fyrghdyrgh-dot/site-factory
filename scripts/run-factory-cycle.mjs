import path from "node:path";
import { execFileSync } from "node:child_process";
import { existsSync, readdirSync, statSync } from "node:fs";

import { selectNextJob } from "./select-next-job.mjs";
import { publishStaticSite } from "./publish-static-site.mjs";
import { ensureDir, projectRoot, readJson, run, writeJson } from "./utils.mjs";

const job = selectNextJob();
const policy = readJson(path.join(projectRoot, "data", "publishing-policy.json"));
const registryPath = path.join(projectRoot, "registry", "site-registry.json");
const registry = readJson(registryPath);

const buildDir = path.join(projectRoot, "build", job.repo_name);
ensureDir(path.dirname(buildDir));

runGenerator(job, buildDir);

const published = publishStaticSite({
  owner: policy.publishing.owner,
  repo: job.repo_name,
  sourceDir: buildDir
});

const verification = verifyPublishedSite(published.site_url, buildDir);

updateRegistry(registry, job, published, verification);
writeJson(registryPath, registry);

console.log(
  JSON.stringify(
    {
      site_title: job.site_title,
      family: job.family.id,
      repo: published.repo,
      repo_url: published.repo_url,
      site_url: published.site_url,
      status: verification.status,
      verified_urls: verification.checked_urls,
      verification_attempts: verification.attempts
    },
    null,
    2
  )
);

function runGenerator(jobData, outputDir) {
  const generatorPath = jobData.generator_path;
  execFileSync("node", [generatorPath], {
    cwd: projectRoot,
    encoding: "utf8",
    stdio: "inherit",
    env: {
      ...process.env,
      ROOT_SITE_CONFIG: jobData.preset_file,
      ROOT_SITE_OUTPUT_DIR: outputDir,
      SITE_FACTORY_CONFIG: jobData.preset_file,
      SITE_FACTORY_OUTPUT_DIR: outputDir,
      SITE_FACTORY_FAMILY: jobData.family.id
    }
  });
}

function updateRegistry(registryData, jobData, publishedData, verificationData) {
  const now = new Date().toISOString();
  registryData.generated_at = now;
  registryData.sites.push({
    site_id: `${jobData.repo_name}-${Date.now()}`,
    title: jobData.site_title,
    family: jobData.family.id,
    topic_id: jobData.topic.id,
    repo: publishedData.repo,
    url: publishedData.site_url,
    published_at: now,
    verification_status: verificationData.status,
    verified_urls: verificationData.checked_urls,
    verification_checked_at: verificationData.checked_at,
    keywords: jobData.topic.keywords,
    server_target_used: jobData.topic.allow_server_target
  });
  registryData.recent_usage.families.push(jobData.family.id);
  registryData.recent_usage.topics.push(jobData.topic.id);
  registryData.recent_usage.repo_names.push(jobData.repo_name);
}

function verifyPublishedSite(siteUrl, buildDir) {
  const urls = [siteUrl, ...discoverInternalUrls(siteUrl, buildDir)];
  const attempts = 4;

  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    const allPassed = urls.every((url) => isHealthyHtml(url));
    if (allPassed) {
      return {
        status: "published_verified",
        attempts: attempt,
        checked_urls: urls,
        checked_at: new Date().toISOString()
      };
    }

    if (attempt < attempts) {
      run("bash", ["-lc", "sleep 5"], projectRoot, true);
    }
  }

  return {
    status: "published_pending_verification",
    attempts,
    checked_urls: urls,
    checked_at: new Date().toISOString()
  };
}

function discoverInternalUrls(siteUrl, buildDir) {
  const entries = readdirSync(buildDir)
    .filter((entry) => entry !== "assets" && !entry.startsWith("."))
    .map((entry) => ({
      entry,
      filePath: path.join(buildDir, entry)
    }))
    .filter(({ filePath }) => statSync(filePath).isDirectory())
    .map(({ entry, filePath }) => ({
      entry,
      hasIndex: existsSync(path.join(filePath, "index.html"))
    }))
    .filter(({ hasIndex }) => hasIndex);

  if (!entries.length) {
    return [];
  }

  const firstPath = `${siteUrl.replace(/\/$/, "")}/${entries[0].entry}/`;
  return [firstPath];
}

function isHealthyHtml(url) {
  try {
    const body = run("curl", ["-L", "--silent", "--show-error", "--max-time", "20", url], projectRoot, true);
    return /<html[\s>]/i.test(body) && !/site not found/i.test(body);
  } catch {
    return false;
  }
}
