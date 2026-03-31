---
title: Cloudflare Pages 배포 템플릿
repo: https://github.com/seihwanMoon/vitepress
summary: GitHub push 기반으로 정적 사이트를 빠르게 배포하기 위한 Cloudflare Pages 템플릿
tags:
  - cloudflare
  - deployment
  - static-site
status: active
stack:
  - Cloudflare Pages
  - npm
  - GitHub
demo: https://docs.moonworld.uk
order: 20
---

# Cloudflare Pages 배포 템플릿

## 한 줄 소개

정적 사이트를 GitHub 저장소와 연결하고, Cloudflare Pages와 커스텀 도메인까지 안정적으로 붙이는 운영 템플릿입니다.

<div class="meta-list">
  <div><strong>상태</strong><br />active</div>
  <div><strong>저장소</strong><br /><a href="https://github.com/seihwanMoon/vitepress">GitHub Repo</a></div>
  <div><strong>배포</strong><br /><a href="https://docs.moonworld.uk">docs.moonworld.uk</a></div>
</div>

## 문제/목적

작은 문서 사이트나 포트폴리오 사이트는 서버 구성보다 빠른 배포와 단순한 운영이 중요합니다. Cloudflare Pages는 Git 연동만으로 정적 배포를 반복할 수 있어 운영 비용을 낮춥니다.

## 주요 기능

- GitHub 저장소 연결 기반 자동 배포
- `pages.dev` 배포 후 커스텀 도메인 `docs.moonworld.uk` 연결
- 정적 출력 디렉터리 기반 배포 설정
- 배포 실패 시 Workers Builds와 Pages 설정 차이를 구분하는 운영 경험

## 기술 스택

- Cloudflare Pages
- GitHub
- npm

## 링크

- GitHub: <https://github.com/seihwanMoon/vitepress>
- Demo: <https://docs.moonworld.uk>
- Related Docs: [사이트 운영 원칙](/archive/site-operations)

## 회고 또는 다음 계획

실제로 Pages와 Workers Builds를 혼동하기 쉬웠기 때문에, 이후에도 배포 문서에는 프로젝트 유형과 설정 차이를 분명히 남겨둘 필요가 있습니다.
