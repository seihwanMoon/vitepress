---
layout: home

hero:
  name: "GitHub Portfolio"
  text: "문서 중심으로 정리한 프로젝트 아카이브"
  tagline: "대표 레포지토리의 배경, 구현 포인트, 운영 메모를 VitePress로 정리하고 Cloudflare Pages에 배포하는 기본 구조입니다."
  image:
    src: /logo.svg
    alt: GitHub Portfolio
  actions:
    - theme: brand
      text: 프로젝트 보기
      link: /projects/
    - theme: alt
      text: 운영 문서 보기
      link: /archive/

features:
  - title: 프로젝트 문서화
    details: 각 레포지토리를 단순 링크가 아니라 목적, 기능, 스택, 회고까지 포함한 문서로 정리합니다.
  - title: Cloudflare Pages 배포
    details: GitHub 저장소와 Cloudflare Pages를 연결해 push 기반 정적 배포 흐름으로 운영합니다.
  - title: 장기 확장 구조
    details: 초기에는 한국어 단일 사이트로 시작하고, 이후 다국어·SEO·자동 동기화 기능을 단계적으로 추가할 수 있습니다.
---

## 소개

이 사이트는 GitHub 레포지토리를 보기 좋게 모아두는 링크 모음이 아니라, 각 프로젝트의 의도와 구현 맥락을 설명하는 문서형 포트폴리오를 목표로 합니다.

대표 프로젝트는 [Projects](/projects/) 에서 확인하고, 운영 기준이나 배포 절차는 [Archive](/archive/) 에서 관리합니다.

## 시작 포인트

<div class="project-grid">
  <div class="project-card">
    <h3><a href="/projects/vitepress-portfolio">VitePress 포트폴리오</a></h3>
    <p>현재 사이트 자체를 구성하는 기준 프로젝트입니다.</p>
  </div>
  <div class="project-card">
    <h3><a href="/projects/cloudflare-pages-template">Cloudflare Pages 배포 템플릿</a></h3>
    <p>정적 사이트 배포 흐름을 간단히 재사용하기 위한 구성입니다.</p>
  </div>
  <div class="project-card">
    <h3><a href="/projects/docs-workflow-lab">문서 워크플로우 실험</a></h3>
    <p>문서 작성 규칙과 아카이브 방식의 초안을 담습니다.</p>
  </div>
</div>

## 다음 작업

- 대표 프로젝트별 설명을 실제 내용으로 교체
- Cloudflare Pages에 Git 저장소 연결 후 프리뷰 배포 확인
