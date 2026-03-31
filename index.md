---
layout: home

hero:
  name: "Moonworld Docs"
  text: "프로젝트를 문서로 남기는 작업 공간"
  tagline: "seihwanMoon의 프로젝트, 운영 메모, 배포 기록을 docs.moonworld.uk에서 문서형 포트폴리오로 정리합니다."
  image:
    src: /logo.svg
    alt: Moonworld Docs
  actions:
    - theme: brand
      text: 프로젝트 보기
      link: /projects/
    - theme: alt
      text: GitHub 프로필
      link: https://github.com/seihwanMoon

features:
  - title: 문서형 포트폴리오
    details: 프로젝트를 단순 링크 모음이 아니라 배경, 구조, 운영 메모까지 포함한 문서로 설명합니다.
  - title: 실서비스 배포 기록
    details: GitHub와 Cloudflare Pages를 연결한 실제 운영 흐름과 도메인 연결 경험을 함께 남깁니다.
  - title: 확장 가능한 정적 사이트
    details: 검색, 사이트맵, 커스텀 도메인, 아카이브 구조를 갖춘 상태에서 점진적으로 내용을 확장합니다.
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

## 빠른 탐색

<div class="section-grid">
  <div class="section-card">
    <div class="mini-heading">Project</div>
    <h3><a href="/projects/vitepress-portfolio">문서형 포트폴리오 구조</a></h3>
    <p>현재 사이트를 기준으로 정보 구조, 네비게이션, 문서 템플릿을 정리합니다.</p>
  </div>
  <div class="section-card">
    <div class="mini-heading">Deployment</div>
    <h3><a href="/archive/cloudflare-pages-deploy">Cloudflare Pages 연결 기록</a></h3>
    <p>Git 연동, pages.dev 배포, `docs.moonworld.uk` 커스텀 도메인 연결 흐름을 보관합니다.</p>
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
- 프로젝트 문서와 운영 문서를 분리한 아카이브 구조

## 다음 확장 후보

- 실제 GitHub 프로젝트별 상세 문서 추가
- 프로젝트별 스크린샷 또는 다이어그램 보강
- 영어 버전 또는 공개용 케이스 스터디 섹션 추가

<div class="cta-panel">
  <p class="mini-heading">Repository</p>
  <p>소스 코드는 <a href="https://github.com/seihwanMoon/vitepress">github.com/seihwanMoon/vitepress</a> 에서 관리합니다.</p>
</div>
