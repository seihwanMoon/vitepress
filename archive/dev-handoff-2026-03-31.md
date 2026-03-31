---
title: 개발 핸드오프 (2026-03-31)
description: Moonworld Docs의 현재 구현 상태와 다음 작업 우선순위를 정리한 handoff 문서
---

# 개발 핸드오프 (2026-03-31)

## 요약

오늘까지 Moonworld Docs는 배포 가능한 골격 단계를 넘어서, 실제 운영 도메인과 실제 GitHub 프로젝트를 포함한 문서형 포트폴리오 상태까지 올라왔습니다. 현재 서비스 주소는 `https://docs.moonworld.uk` 이고, 소스 저장소는 `https://github.com/seihwanMoon/vitepress` 입니다.

## 오늘 완료한 작업

### 1. 인프라와 배포

- VitePress 기반 사이트 구성
- Cloudflare Pages Git 연동 배포 설정
- 커스텀 도메인 `docs.moonworld.uk` 연결
- `robots.txt`, `site.webmanifest`, `sitemap.xml` 생성
- canonical, Open Graph, Twitter 메타데이터 추가

### 2. 정보 구조

- 상단 내비게이션을 `Home / Guide / Projects / Archive / GitHub` 구조로 정리
- 홈을 입문형 문서 포털로 재구성
- `Guide` 섹션 추가
  - 시작하기
  - 왜 Moonworld Docs인가
  - 프로젝트 문서화 방식
  - 배포와 도메인 운영
- `Archive` 섹션 보강
  - 운영 원칙
  - 배포 가이드
  - 콘텐츠 작성 가이드
  - 로드맵

### 3. 프로젝트 문서

- 샘플 프로젝트 문서 제거
- 실제 GitHub 저장소 기반 케이스 스터디 추가
  - `Moonworld Docs`
  - `skillrnd`
  - `aistudio`
  - `deep-agents`

## 현재 파일 구조에서 중요한 위치

- 사이트 설정: `.vitepress/config.mts`
- 홈: `index.md`
- 가이드: `guide/`
- 프로젝트 문서: `projects/`
- 운영/핸드오프 문서: `archive/`
- 공개 메타 파일: `public/`

## 현재 상태에서 바로 확인할 것

1. `docs.moonworld.uk` 에서 Guide, Projects, Archive 라우팅이 정상인지 확인
2. 프로젝트 문서 4개가 모두 노출되는지 확인
3. 커스텀 도메인에서 정적 자산과 sitemap 이 정상 응답하는지 확인

## 내일 우선순위

### 우선순위 1. 프로젝트 문서 품질 올리기

- `skillrnd`, `aistudio`, `deep-agents` 문서에 실제 스크린샷 추가
- 가능하면 각 프로젝트별 아키텍처 다이어그램 또는 흐름도 추가
- `문제/목적` 섹션을 더 구체적인 실제 사용 시나리오 중심으로 보강

### 우선순위 2. 사이트 신뢰도 보강

- 각 프로젝트 문서에 실제 데모 링크가 있다면 반영
- GitHub 저장소의 README와 현재 문서 간 표현 불일치가 없는지 점검
- 프로젝트별 최근 상태를 `status`와 본문에서 일관되게 유지

### 우선순위 3. 공개 문서로서의 완성도 올리기

- 홈에 대표 프로젝트 강조 순서를 다시 조정
- 프로젝트 카드에 배지 또는 상태 표현 추가 검토
- Open Graph 이미지를 페이지별로 다르게 줄지 검토

## 내일 바로 시작할 작업 제안

가장 먼저 아래 순서로 진행하는 편이 좋습니다.

1. `projects/skillrnd.md` 보강
2. `projects/aistudio.md` 보강
3. `projects/deep-agents.md` 보강
4. 홈과 프로젝트 목록에서 대표 순서 조정

이 순서가 좋은 이유는, 현재 사이트의 약점이 구조가 아니라 콘텐츠 밀도이기 때문입니다.

## 작업할 때 사용할 기본 명령

```bash
npm run docs:dev
npm run docs:build
git status
```

## 주의사항

- 파일 수정 후에는 반드시 `npm run docs:build` 로 링크와 frontmatter 오류를 확인
- 프로젝트 문서는 `문제/목적`, `주요 기능`, `기술 스택`, `링크` 섹션을 유지
- 도메인, 저장소 링크, 데모 주소를 바꾸면 아카이브 문서도 같이 갱신

## 마지막 배포 기준

- 최신 반영 커밋: `5723bbc`
- 작업 브랜치: `main`
- 배포 방식: Cloudflare Pages Git 연동

## 메모

지금 상태는 "사이트 구조 설계 단계"는 끝났고, 이제부터는 "케이스 스터디 품질 향상 단계"로 보는 편이 맞습니다. 내일은 새 기능보다 실제 프로젝트 문서의 설득력을 올리는 데 시간을 쓰는 것이 효과가 큽니다.
