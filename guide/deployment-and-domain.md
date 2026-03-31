---
title: 배포와 도메인 운영
description: GitHub 저장소, Cloudflare Pages, docs.moonworld.uk를 연결해 운영하는 현재 배포 흐름
---

# 배포와 도메인 운영

현재 Moonworld Docs는 GitHub 저장소와 Cloudflare Pages를 연결해 운영하며, 공개 도메인은 `docs.moonworld.uk`를 사용합니다.

## 배포 흐름

1. 로컬에서 문서를 수정합니다.
2. `npm run docs:build`로 빌드를 확인합니다.
3. GitHub `main` 브랜치에 push 합니다.
4. Cloudflare Pages가 자동으로 새 배포를 생성합니다.

## 핵심 설정

```txt
Build command: npm run docs:build
Build output directory: .vitepress/dist
Production branch: main
```

## 도메인 연결 메모

- 기본 Pages 주소: `vitepress-ed1.pages.dev`
- 운영 주소: `docs.moonworld.uk`
- Cloudflare Pages의 `Custom domains`에서 서브도메인을 연결했습니다.

## 운영 중 확인할 것

- 배포 로그에 빌드 실패가 없는지
- 내부 링크가 깨지지 않았는지
- sitemap 과 robots 설정이 유지되는지
- 커스텀 도메인 인증서 상태가 정상인지

> [!WARNING]
> Cloudflare에서 Workers Builds와 Pages를 혼동하면 배포 설정 화면이 달라집니다. 정적 사이트라면 Pages 프로젝트인지 먼저 확인하는 편이 안전합니다.

추가 배포 메모는 [Cloudflare Pages 배포 가이드](/archive/cloudflare-pages-deploy)에서 계속 관리합니다.
