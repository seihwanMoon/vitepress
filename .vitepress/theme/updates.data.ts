import { createContentLoader } from "vitepress";

export default createContentLoader("{news,topics,hubs,blog}/**/*.md", {
  transform(rawData) {
    return rawData
      .map((page) => {
        const updated = page.frontmatter.updated;

        return {
          title: page.frontmatter.title,
          summary: page.frontmatter.summary ?? page.frontmatter.description ?? "",
          section: page.frontmatter.section ?? "Docs",
          updated,
          url: page.url
        };
      })
      .filter((page) => page.updated && page.title && page.summary && page.url)
      .sort((a, b) => Date.parse(b.updated) - Date.parse(a.updated))
      .slice(0, 6);
  }
});
