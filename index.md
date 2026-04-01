---
layout: home

hero:
  name: "Moonworld Docs"
  text: "관심사를 구조화해 제공하는 지식 허브"
  tagline: "AI, GitHub, Coding, Manufacturing AI, 업무자동화, Obsidian 관련 정보를 주제별 폴더와 Markdown 문서로 관리하는 큐레이션 사이트입니다."
  image:
    src: /logo.svg
    alt: Moonworld Docs
  actions:
    - theme: brand
      text: News 보기
      link: /news/
    - theme: alt
      text: Topics 보기
      link: /topics/

features:
  - title: 주제 중심 구조
    details: News, Topics, Hubs, Blog로 나누고, 각 메뉴는 폴더와 Markdown 문서 단위로 확장합니다.
  - title: 대시보드형 홈
    details: 최근 업데이트된 문서를 카드형으로 노출해, 첫 화면에서 무엇이 바뀌었는지 바로 확인할 수 있게 합니다.
  - title: 운영 가능한 콘텐츠 사이트
    details: VitePress, Cloudflare Pages, sitemap, local search 기반으로 큐레이션 사이트를 안정적으로 운영합니다.
---

## 소개

이 사이트는 `docs.moonworld.uk`에서 운영하는 개인 지식 허브입니다. 인터넷의 여러 정보를 수집하고 정리해, 나와 다른 사용자가 빠르게 탐색할 수 있도록 주제별 문서로 제공합니다.

<div class="badge-row">
  <span class="badge">AI</span>
  <span class="badge">GitHub</span>
  <span class="badge">Coding</span>
  <span class="badge">Manufacturing AI</span>
  <span class="badge">Automation</span>
  <span class="badge">Obsidian</span>
  <span class="badge">Cloudflare Pages</span>
  <span class="badge">VitePress</span>
</div>

각 메뉴는 폴더 구조로 나뉘고, 실제 콘텐츠는 Markdown 파일로 관리합니다. 구조는 탐색용, Markdown은 작성과 수정용 역할을 가집니다.

<HomeDashboard />

## 주요 섹션

<div class="topic-grid">
  <div class="topic-card">
    <h3><a href="/news/">News</a></h3>
    <p>인터넷에서 수집한 최신 정보와 큐레이션 포맷을 관리합니다.</p>
  </div>
  <div class="topic-card">
    <h3><a href="/topics/">Topics</a></h3>
    <p>AI, GitHub Study, Manufacturing AI, Coding, Automation, Obsidian 같은 관심사를 주제별로 정리합니다.</p>
  </div>
  <div class="topic-card">
    <h3><a href="/hubs/">Hubs</a></h3>
    <p>Skill Hub, MCP Hub처럼 반복해서 참고하는 링크와 리소스를 모읍니다.</p>
  </div>
  <div class="topic-card">
    <h3><a href="/blog/">Blog</a></h3>
    <p>사이트 운영, 정보구조 개편, 개인적인 정리 글을 아카이브합니다.</p>
  </div>
</div>

## 운영 메모

- 상단 메뉴는 탐색 기준입니다.
- 각 메뉴는 폴더로 구분합니다.
- 각 문서는 `.md` 파일로 관리합니다.
- 최신 업데이트 카드는 `updated` 값과 파일 수정 시각을 함께 사용해 정렬합니다.

## 다음 확장 후보

- 뉴스 큐레이션 문서 추가
- Topics별 세부 문서 확대
- Hub 섹션에 실제 리소스 링크 축적
- Blog에 운영 기록 누적

<div class="cta-panel">
  <p class="mini-heading">Repository</p>
  <p>소스 코드는 <a href="https://github.com/seihwanMoon/vitepress">github.com/seihwanMoon/vitepress</a> 에서 관리합니다.</p>
</div>
