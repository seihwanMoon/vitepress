import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createContentLoader } from "vitepress";

const docsRoot = fileURLToPath(new URL("../../", import.meta.url));
const sectionIndexUrls = new Set(["/news/", "/topics/", "/hubs/", "/blog/"]);

function resolveSourcePath(url: string) {
  const relative = url.replace(/^\//, "");

  if (!relative) {
    return path.join(docsRoot, "index.md");
  }

  const directFile = path.join(docsRoot, `${relative}.md`);
  if (fs.existsSync(directFile)) {
    return directFile;
  }

  return path.join(docsRoot, relative, "index.md");
}

function getTimestamp(value: unknown, fallback: number) {
  if (typeof value !== "string") {
    return fallback;
  }

  const parsed = Date.parse(value);
  return Number.isNaN(parsed) ? fallback : parsed;
}

export default createContentLoader("{news,topics,hubs,blog}/**/*.md", {
  includeSrc: true,
  transform(rawData) {
    return rawData
      .map((page) => {
        const sourcePath = resolveSourcePath(page.url);
        const fileTimestamp = fs.existsSync(sourcePath) ? fs.statSync(sourcePath).mtimeMs : 0;
        const timestamp = getTimestamp(page.frontmatter.updated, fileTimestamp);

        return {
          title: page.frontmatter.title,
          summary: page.frontmatter.summary ?? page.frontmatter.description ?? "",
          section: page.frontmatter.section ?? "Docs",
          updated: page.frontmatter.updated ?? new Date(fileTimestamp).toISOString(),
          timestamp,
          url: page.url
        };
      })
      .filter((page) => page.title && page.summary && page.url)
      .filter((page) => !sectionIndexUrls.has(page.url))
      .sort((a, b) => b.timestamp - a.timestamp)
      .slice(0, 6);
  }
});
