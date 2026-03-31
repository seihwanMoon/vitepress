---
layout: home

hero:
  name: "Moonworld Docs"
  text: "프로젝트를 설명 가능한 문서로 남기는 공간"
  tagline: "Vite 가이드처럼 빠르게 진입할 수 있는 구조를 참고해, 프로젝트 설명과 운영 기록을 명확하게 정리하는 문서 허브로 구성했습니다."
  image:
    src: /logo.svg
    alt: Moonworld Docs
  actions:
    - theme: brand
      text: 시작하기
      link: /guide/
    - theme: alt
      text: GitHub 프로필
      link: https://github.com/seihwanMoon

features:
  - title: Guide 우선 구조
    details: 첫 방문자가 바로 시작할 수 있도록 Guide를 전면에 두고, 프로젝트와 운영 문서는 그 뒤에서 참조하도록 설계했습니다.
  - title: Case Study 중심
    details: 각 프로젝트는 목적, 기능, 배포 경험, 다음 계획까지 담는 설명 문서로 정리합니다.
  - title: 운영 가능한 정적 문서 사이트
    details: Cloudflare Pages, custom domain, sitemap, 로컬 검색을 포함한 실제 운영 구성을 반영했습니다.
---

## 소개

이 사이트는 `docs.moonworld.uk`에 배포된 문서 허브입니다. GitHub 저장소 자체보다 그 안의 구현 의도, 기술 선택, 운영 경험을 읽기 쉬운 문서로 남기는 것을 우선합니다.

<div class="badge-row">
  <span class="badge">Cloudflare Pages</span>
  <span class="badge">VitePress</span>
  <span class="badge">Custom Domain</span>
  <span class="badge">Local Search</span>
  <span class="badge">Sitemap Ready</span>
</div>

대표 프로젝트는 [Projects](/projects/) 에서, 운영 원칙과 기록은 [Archive](/archive/) 에서 관리합니다.

## 먼저 볼 문서

<div class="link-grid">
  <a class="link-card" href="/guide/">
    <strong>Guide / 시작하기</strong>
    Vite 가이드처럼 사이트를 어떤 순서로 읽어야 하는지 빠르게 안내합니다.
  </a>
  <a class="link-card" href="/guide/project-docs-workflow">
    <strong>프로젝트 문서화 방식</strong>
    레포지토리를 어떤 형식과 밀도로 설명할지 기준을 정리합니다.
  </a>
  <a class="link-card" href="/guide/deployment-and-domain">
    <strong>배포와 도메인 운영</strong>
    Cloudflare Pages와 `docs.moonworld.uk` 연결 흐름을 한 페이지에서 봅니다.
  </a>
</div>

## 빠른 탐색

<div class="section-grid">
  <div class="section-card">
    <div class="mini-heading">Guide</div>
    <h3><a href="/guide/why-moonworld-docs">왜 Moonworld Docs인가</a></h3>
    <p>왜 링크 모음이 아니라 문서형 포트폴리오를 택했는지, 사이트의 철학을 설명합니다.</p>
  </div>
  <div class="section-card">
    <div class="mini-heading">Project</div>
    <h3><a href="/projects/vitepress-portfolio">문서형 포트폴리오 구조</a></h3>
    <p>현재 사이트를 기준으로 정보 구조, 테마, 메타데이터, 문서 UX를 정리합니다.</p>
  </div>
  <div class="section-card">
    <div class="mini-heading">Operations</div>
    <h3><a href="/archive/site-operations">운영 원칙</a></h3>
    <p>프로젝트 추가 기준, 문서 갱신 흐름, 배포 전 점검 기준을 정리합니다.</p>
  </div>
</div>

## 현재 강화된 구성

- 커스텀 도메인 `docs.moonworld.uk` 적용
- `robots.txt`, `manifest`, `sitemap.xml` 생성 준비
- 페이지별 canonical / Open Graph 메타데이터 설정
- Guide / Projects / Archive 로 분리한 문서 구조

## 다음 확장 후보

- 실제 GitHub 프로젝트별 상세 문서 추가
- 프로젝트별 스크린샷 또는 다이어그램 보강
- 영어 버전 또는 공개용 케이스 스터디 섹션 추가

<div class="cta-panel">
  <p class="mini-heading">Repository</p>
  <p>소스 코드는 <a href="https://github.com/seihwanMoon/vitepress">github.com/seihwanMoon/vitepress</a> 에서 관리합니다.</p>
</div>
