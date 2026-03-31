import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "ko-KR",
  title: "GitHub Portfolio",
  description: "문서 중심으로 정리한 GitHub 프로젝트 포트폴리오",
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    siteTitle: "GitHub Portfolio",
    logo: "/logo.svg",
    nav: [
      { text: "Home", link: "/" },
      { text: "Projects", link: "/projects/" },
      { text: "Archive", link: "/archive/" },
      { text: "GitHub", link: "https://github.com/seihwanMoon" }
    ],
    sidebar: {
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
            { text: "Cloudflare Pages 배포 가이드", link: "/archive/cloudflare-pages-deploy" }
          ]
        }
      ]
    },
    socialLinks: [{ icon: "github", link: "https://github.com/seihwanMoon" }],
    footer: {
      message: "Built with VitePress and deployed on Cloudflare Pages.",
      copyright: "Copyright © 2026"
    },
    search: {
      provider: "local"
    }
  }
});
