# VitePress GitHub Portfolio

문서 중심의 GitHub 포트폴리오 사이트를 VitePress로 구성한 기본 템플릿입니다. 현재 `https://docs.moonworld.uk` 로 운영 중이며, Cloudflare Pages의 Git 연동 배포를 전제로 작성되었습니다.

## 시작하기

```bash
npm install
npm run docs:dev
```

기본 개발 서버 주소는 `http://localhost:5173` 입니다.

## 사이트 구조

- `index.md`: 홈
- `projects/index.md`: 프로젝트 목록
- `projects/*.md`: 프로젝트 상세 문서
- `archive/*.md`: 운영/구성 문서
- `.vitepress/config.mts`: VitePress 설정
- `public/robots.txt`: 검색 엔진 기본 정책
- `public/site.webmanifest`: 웹 앱 메타데이터

## 프로젝트 문서 작성 규칙

각 프로젝트 문서는 아래 frontmatter를 기본으로 사용합니다.

```md
---
title: 프로젝트 이름
repo: https://github.com/seihwanMoon/vitepress
summary: 한 줄 소개
tags:
  - vitepress
status: active
stack:
  - TypeScript
demo: https://example.pages.dev
order: 10
---
```

권장 본문 섹션:

1. 한 줄 소개
2. 문제/목적
3. 주요 기능
4. 기술 스택
5. 링크
6. 회고 또는 다음 계획

## Cloudflare Pages 배포

1. 이 저장소를 GitHub에 push 합니다.
2. Cloudflare Dashboard에서 `Workers & Pages > Create application > Pages > Connect to Git`를 선택합니다.
3. 저장소를 연결한 뒤 아래 값을 사용합니다.

```txt
Framework preset: None
Build command: npm run docs:build
Build output directory: .vitepress/dist
Node.js version: 20
```

4. 첫 배포 후 발급되는 `*.pages.dev` 도메인으로 동작을 확인합니다.
5. 추후 커스텀 도메인이 필요하면 Pages 프로젝트의 `Custom domains`에서 연결합니다.

현재 실서비스 도메인:

- `https://docs.moonworld.uk`

## 사용자 맞춤 변경 포인트

- `.vitepress/config.mts`의 사이트 제목, 설명, 소셜 링크
- `index.md`의 소개 문구
- `projects/` 아래 프로젝트 상세 문서
- `archive/` 아래 운영 문서
- 실제 배포 후 각 문서의 `demo` 링크
