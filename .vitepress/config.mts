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
  description: "seihwanMoon의 프로젝트, 운영 메모, 배포 기록을 정리한 문서형 포트폴리오",
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
      { text: "Guide", link: "/guide/" },
      { text: "Projects", link: "/projects/" },
      { text: "Archive", link: "/archive/" },
      { text: "GitHub", link: "https://github.com/seihwanMoon" }
    ],
    sidebar: {
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
            { text: "VitePress 포트폴리오", link: "/projects/vitepress-portfolio" },
            { text: "Cloudflare Pages 배포 템플릿", link: "/projects/cloudflare-pages-template" },
            { text: "문서 워크플로우 실험", link: "/projects/docs-workflow-lab" }
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
            { text: "사이트 로드맵", link: "/archive/roadmap" }
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
