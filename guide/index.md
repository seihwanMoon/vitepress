---
title: 시작하기
description: Moonworld Docs를 어떤 순서로 읽고, 어떻게 확장할지 빠르게 파악하는 시작 페이지
---

# 시작하기

Moonworld Docs는 `Guide`, `Projects`, `Archive` 세 층으로 나뉩니다. 처음 방문자라면 이 페이지부터 읽고, 관심 있는 구현 사례는 `Projects`, 운영 세부사항은 `Archive`에서 확인하면 됩니다.

> [!TIP]
> 이 사이트는 Vite 가이드처럼 "빠른 진입"을 우선합니다. 먼저 구조를 이해하고, 그 다음 상세 문서로 내려가는 흐름을 의도했습니다.

## 이 사이트에서 볼 수 있는 것

- `Guide`: 사이트 구조, 문서화 방식, 배포 흐름
- `Projects`: 실제 구현 사례와 케이스 스터디
- `Archive`: 운영 기준, 배포 기록, 작성 규칙

## 빠른 링크

<div class="link-grid">
  <a class="link-card" href="/guide/why-moonworld-docs">
    <strong>왜 Moonworld Docs인가</strong>
    문서형 포트폴리오로 정리하는 이유와 기준을 설명합니다.
  </a>
  <a class="link-card" href="/guide/project-docs-workflow">
    <strong>프로젝트 문서화 방식</strong>
    프로젝트 문서에 어떤 섹션이 들어가야 하는지 정리합니다.
  </a>
  <a class="link-card" href="/guide/deployment-and-domain">
    <strong>배포와 도메인 운영</strong>
    Cloudflare Pages와 `docs.moonworld.uk` 운영 흐름을 설명합니다.
  </a>
</div>

## 로컬에서 확인하기

```bash
npm install
npm run docs:dev
```

프로덕션 빌드는 아래 명령으로 확인합니다.

```bash
npm run docs:build
```

## 읽는 순서

1. [왜 Moonworld Docs인가](/guide/why-moonworld-docs)
2. [프로젝트 문서화 방식](/guide/project-docs-workflow)
3. [배포와 도메인 운영](/guide/deployment-and-domain)
4. [Projects](/projects/)
5. [Archive](/archive/)
