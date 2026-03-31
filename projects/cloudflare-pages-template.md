---
title: Cloudflare Pages 배포 템플릿
repo: https://github.com/seihwanMoon/vitepress
summary: GitHub push 기반으로 정적 사이트를 빠르게 배포하기 위한 Cloudflare Pages 템플릿
tags:
  - cloudflare
  - deployment
  - static-site
status: draft
stack:
  - Cloudflare Pages
  - npm
  - GitHub
demo: https://your-project.pages.dev
order: 20
---

# Cloudflare Pages 배포 템플릿

## 한 줄 소개

정적 사이트를 GitHub 저장소와 연결해 프리뷰와 운영 배포를 간단히 관리하기 위한 템플릿입니다.

<div class="meta-list">
  <div><strong>상태</strong><br />draft</div>
  <div><strong>저장소</strong><br /><a href="https://github.com/seihwanMoon/vitepress">GitHub Repo</a></div>
  <div><strong>배포</strong><br /><a href="https://your-project.pages.dev">Cloudflare Pages</a></div>
</div>

## 문제/목적

작은 문서 사이트나 포트폴리오 사이트는 서버 구성보다 빠른 배포와 단순한 운영이 중요합니다. Cloudflare Pages는 Git 연동만으로 정적 배포를 반복할 수 있어 운영 비용을 낮춥니다.

## 주요 기능

- GitHub 저장소 연결 기반 자동 배포
- 브랜치별 프리뷰 배포
- 정적 파일 루트 배포 구조

## 기술 스택

- Cloudflare Pages
- GitHub
- npm

## 링크

- GitHub: <https://github.com/seihwanMoon/vitepress>
- Demo: <https://your-project.pages.dev>
- Related Docs: [사이트 운영 원칙](/archive/site-operations)

## 회고 또는 다음 계획

실제 운영 환경에서는 Node 버전 고정, 빌드 명령 명시, 커스텀 도메인 연결 시 DNS 절차까지 문서화하는 것이 좋습니다.
