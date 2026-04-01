import { defineConfig } from "vitepress";

const siteUrl = "https://docs.moonworld.uk";

function pageToUrl(page: string) {
  const cleanPath = page.replace(/(^|\/)index\.md$/, "$1").replace(/\.md$/, "");
  const pathname = cleanPath ? `/${cleanPath}` : "/";

  return new URL(pathname, siteUrl).toString();
}

export default defineConfig({
  lang: "ko-KR",
  title: "Moonworld Docs",
  titleTemplate: ":title | Moonworld Docs",
  description: "AI, GitHub, 코딩, 제조 AI, 업무자동화, Obsidian 정보를 구조화해 제공하는 지식 허브",
  cleanUrls: true,
  lastUpdated: true,
  sitemap: {
    hostname: siteUrl
  },
  head: [
    ["link", { rel: "icon", type: "image/svg+xml", href: "/logo.svg" }],
    ["link", { rel: "manifest", href: "/site.webmanifest" }],
    ["meta", { name: "theme-color", content: "#0f766e" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:site_name", content: "Moonworld Docs" }],
    ["meta", { property: "og:image", content: `${siteUrl}/og-image.svg` }],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    ["meta", { name: "twitter:image", content: `${siteUrl}/og-image.svg` }]
  ],
  transformHead({ page, title, description }) {
    const url = pageToUrl(page);

    return [
      ["link", { rel: "canonical", href: url }],
      ["meta", { property: "og:title", content: title }],
      ["meta", { property: "og:description", content: description }],
      ["meta", { property: "og:url", content: url }],
      ["meta", { name: "twitter:title", content: title }],
      ["meta", { name: "twitter:description", content: description }]
    ];
  },
  themeConfig: {
    siteTitle: "Moonworld Docs",
    logo: "/logo.svg",
    nav: [
      { text: "Home", link: "/" },
      { text: "News", link: "/news/" },
      {
        text: "Topics",
        items: [
          { text: "AI", link: "/topics/ai/" },
          { text: "GitHub Study", link: "/topics/github-study/" },
          { text: "Manufacturing AI", link: "/topics/manufacturing-ai/" },
          { text: "Coding", link: "/topics/coding/" },
          { text: "Automation", link: "/topics/automation/" },
          { text: "Obsidian", link: "/topics/obsidian/" }
        ]
      },
      {
        text: "Hubs",
        items: [
          { text: "Skill Hub", link: "/hubs/skill-hub" },
          { text: "MCP Hub", link: "/hubs/mcp-hub" }
        ]
      },
      { text: "Blog", link: "/blog/" }
    ],
    sidebar: {
      "/news/": [
        {
          text: "News",
          items: [
            { text: "개요", link: "/news/" },
            { text: "큐레이션 원칙", link: "/news/curation-principles" }
          ]
        }
      ],
      "/topics/": [
        {
          text: "Topics",
          items: [
            { text: "개요", link: "/topics/" },
            { text: "AI", link: "/topics/ai/" },
            { text: "GitHub Study", link: "/topics/github-study/" },
            { text: "Manufacturing AI", link: "/topics/manufacturing-ai/" },
            { text: "Coding", link: "/topics/coding/" },
            { text: "Automation", link: "/topics/automation/" },
            { text: "Obsidian", link: "/topics/obsidian/" }
          ]
        },
        {
          text: "Coding",
          items: [
            { text: "개요", link: "/topics/coding/" },
            { text: "Claude", link: "/topics/coding/claude" },
            { text: "Codex", link: "/topics/coding/codex" },
            { text: "Gemini", link: "/topics/coding/gemini" }
          ]
        }
      ],
      "/hubs/": [
        {
          text: "Hubs",
          items: [
            { text: "개요", link: "/hubs/" },
            { text: "Skill Hub", link: "/hubs/skill-hub" },
            { text: "MCP Hub", link: "/hubs/mcp-hub" }
          ]
        }
      ],
      "/blog/": [
        {
          text: "Blog",
          items: [
            { text: "개요", link: "/blog/" },
            { text: "정보구조 개편 기록", link: "/blog/2026-04-01-information-architecture" }
          ]
        }
      ],
      "/guide/": [
        {
          text: "Guide",
          items: [
            { text: "시작하기", link: "/guide/" },
            { text: "왜 Moonworld Docs인가", link: "/guide/why-moonworld-docs" },
            { text: "프로젝트 문서화 방식", link: "/guide/project-docs-workflow" },
            { text: "배포와 도메인 운영", link: "/guide/deployment-and-domain" }
          ]
        }
      ],
      "/projects/": [
        {
          text: "Projects",
          items: [
            { text: "개요", link: "/projects/" },
            { text: "Moonworld Docs", link: "/projects/vitepress-portfolio" },
            { text: "skillrnd", link: "/projects/skillrnd" },
            { text: "aistudio", link: "/projects/aistudio" },
            { text: "deep-agents", link: "/projects/deep-agents" }
          ]
        }
      ],
      "/archive/": [
        {
          text: "Archive",
          items: [
            { text: "개요", link: "/archive/" },
            { text: "사이트 운영 원칙", link: "/archive/site-operations" },
            { text: "Cloudflare Pages 배포 가이드", link: "/archive/cloudflare-pages-deploy" },
            { text: "콘텐츠 작성 가이드", link: "/archive/content-guide" },
            { text: "사이트 로드맵", link: "/archive/roadmap" },
            { text: "개발 핸드오프", link: "/archive/dev-handoff-2026-03-31" }
          ]
        }
      ]
    },
    socialLinks: [{ icon: "github", link: "https://github.com/seihwanMoon" }],
    lastUpdatedText: "마지막 업데이트",
    outline: {
      label: "이 페이지에서"
    },
    footer: {
      message: "Moonworld Docs on Cloudflare Pages",
      copyright: "Copyright © 2026 seihwanMoon"
    },
    search: {
      provider: "local"
    }
  }
});
