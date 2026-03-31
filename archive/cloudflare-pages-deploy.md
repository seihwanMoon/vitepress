---
title: Cloudflare Pages 배포 가이드
---

# Cloudflare Pages 배포 가이드

## 환경 요구사항

- Node.js 20 이상
- npm 10 이상
- GitHub 저장소
- Cloudflare 계정

## 연결 절차

1. GitHub에 저장소를 생성하고 현재 파일을 push 합니다.
2. Cloudflare Dashboard에서 Pages 프로젝트를 생성합니다.
3. `Connect to Git`으로 저장소를 연결합니다.
4. 빌드 설정에 아래 값을 입력합니다.

```txt
Build command: npm run docs:build
Build output directory: .vitepress/dist
Root directory: /
Environment variable: 필요 없음
```

현재 운영 주소는 `https://docs.moonworld.uk` 이며, 기본 Pages 주소는 `https://vitepress-ed1.pages.dev` 입니다.

## 재배포 방식

- 기본 브랜치에 push 하면 운영 배포가 갱신됩니다.
- Pull Request 또는 분기 브랜치는 프리뷰 배포로 확인합니다.
- 배포 문제 발생 시 Cloudflare의 최근 빌드 로그에서 Node 버전과 빌드 명령을 먼저 확인합니다.

## 커스텀 도메인 연결 메모

- Pages 프로젝트의 `Custom domains`에서 `docs.moonworld.uk` 를 추가합니다.
- DNS는 `docs` CNAME이 Pages 프로젝트를 가리키도록 맞춥니다.
- Pages가 아니라 Workers Builds로 생성하면 설정 화면이 달라지므로, 정적 사이트라면 Pages 프로젝트인지 먼저 확인합니다.
