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

## 재배포 방식

- 기본 브랜치에 push 하면 운영 배포가 갱신됩니다.
- Pull Request 또는 분기 브랜치는 프리뷰 배포로 확인합니다.
- 배포 문제 발생 시 Cloudflare의 최근 빌드 로그에서 Node 버전과 빌드 명령을 먼저 확인합니다.
