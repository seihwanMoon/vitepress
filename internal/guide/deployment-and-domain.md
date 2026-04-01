---
title: 배포와 도메인 운영
summary: GitHub, Cloudflare Pages, docs.moonworld.uk를 연결해 운영하는 내부 배포 기준 문서
section: Internal
updated: 2026-04-01
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
