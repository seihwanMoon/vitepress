# VitePress GitHub Portfolio

AI, GitHub, 코딩, 제조 AI, 업무자동화, Obsidian 관련 정보를 주제별로 정리하는 VitePress 기반 지식 허브입니다. 현재 `https://docs.moonworld.uk` 로 운영 중이며, Cloudflare Pages의 Git 연동 배포를 전제로 작성되었습니다.

## 시작하기

```bash
npm install
npm run docs:dev
```

기본 개발 서버 주소는 `http://localhost:5173` 입니다.

## 사이트 구조

- `index.md`: 홈
- `news/*.md`: 큐레이션/업데이트 문서
- `topics/**/*.md`: 관심사별 주제 문서
- `hubs/*.md`: 링크/리소스 허브
- `blog/*.md`: 운영 기록과 정리 글
- `.vitepress/config.mts`: VitePress 설정
- `public/robots.txt`: 검색 엔진 기본 정책
- `public/site.webmanifest`: 웹 앱 메타데이터

## 콘텐츠 작성 규칙

각 콘텐츠는 아래 frontmatter를 기본으로 사용합니다.

```md
---
title: 문서 제목
summary: 카드와 목록에서 사용할 한 줄 소개
section: News
updated: 2026-04-01
tags:
  - vitepress
---
```

`updated` 값이 있으면 홈 대시보드의 최신 업데이트 카드 후보에 들어갑니다.

## 관리 방식

- 메뉴는 폴더 구조로 관리합니다.
- 실제 콘텐츠는 Markdown 파일로 관리합니다.
- 홈의 최신 업데이트 카드는 Markdown frontmatter를 읽어 build 시 생성합니다.

권장 본문 섹션:

1. 한 줄 소개
2. 문제/목적
3. 주요 기능
4. 참고 링크
5. 다음 업데이트

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
- `news/`, `topics/`, `hubs/`, `blog/` 아래 문서
- 각 문서 frontmatter의 `summary`, `section`, `updated`
