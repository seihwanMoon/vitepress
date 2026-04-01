---
title: 개발 핸드오프 (2026-04-01)
summary: 2026-04-01 기준 Moonworld Docs의 구조 개편 상태와 다음 작업 준비 메모
section: Internal
updated: 2026-04-01
---

# 개발 핸드오프 (2026-04-01)

## 요약

오늘은 Moonworld Docs를 문서형 포트폴리오 구조에서 관심사 중심 지식 허브 구조로 크게 전환했습니다. 현재 공개 사이트는 `News / Topics / Hubs / Blog`를 중심으로 탐색하고, 구조 설명과 운영 문서는 `Internal` 영역으로 분리했습니다.

## 오늘 완료한 작업

### 1. 정보구조 재편

- 상단 메뉴를 `Home / News / Topics / Hubs / Blog`로 단순화
- `Topics` 아래를 주제별 폴더 구조로 재구성
  - AI
  - GitHub Study
  - Manufacturing AI
  - Coding
  - Automation
  - Obsidian
- `Hubs`와 `Blog` 섹션 추가

### 2. 홈 대시보드 개선

- 최신 업데이트 카드를 홈에 배치
- 카드 데이터는 Markdown frontmatter를 기반으로 자동 생성
- 카드가 없을 때를 위한 빈 상태 문구 추가
- `News / Topics / Hubs / Blog / Internal` 빠른 진입 링크 추가

### 3. 자동 사이드바 고도화

- 폴더 구조를 읽어 자동으로 사이드바 생성
- `index.md`만 있으면 단일 링크
- 하위 문서가 있으면 접기/펼치기 가능한 그룹
- `index.md`가 없는 폴더에서 잘못된 링크가 생기지 않도록 방어 로직 추가

### 4. Internal 영역 분리

- `Guide / Projects / Archive` 성격의 문서를 공개 메뉴 바깥의 `internal/`로 분리
- 내부용 가이드, 프로젝트 케이스 스터디, 운영 문서 인덱스 추가
- 공개 사이트 탐색 축과 내부 운영 축을 구분

## 현재 구조

### 공개 콘텐츠

- `news/`
- `topics/`
- `hubs/`
- `blog/`

### 내부 운영/설명 문서

- `internal/guide/`
- `internal/projects/`
- `internal/archive/`

### 핵심 구현 파일

- 사이트 설정: `.vitepress/config.mts`
- 홈 대시보드 컴포넌트: `.vitepress/theme/components/HomeDashboard.vue`
- 최신 업데이트 데이터 로더: `.vitepress/theme/updates.data.ts`
- 홈: `index.md`

## 현재 상태에서 확인할 것

1. `docs.moonworld.uk` 홈에서 최신 업데이트 카드와 섹션 링크가 정상 표시되는지 확인
2. `Topics` 사이드바에서 `Coding`, `AI`, `Automation`, `Obsidian`이 접기/펼치기 그룹으로 보이는지 확인
3. `Internal` 문서가 공개 메뉴와 섞이지 않고 별도 경로에서 잘 열리는지 확인

## 내일 우선순위

### 우선순위 1. News 실제 문서 추가

- 공식 소스 기반 큐레이션 문서 2~3개 추가
- 원문 링크, 핵심 요약, 왜 중요한지를 포함한 형식 확정
- 홈 대시보드에서 News 카드가 실제로 유의미하게 보이도록 만들기

### 우선순위 2. Hubs 강화

- Skill Hub에 실제 링크/리소스 섹션 추가
- MCP Hub도 설명형 문서에서 링크 허브형 문서로 확장

### 우선순위 3. Topics 품질 보강

- AI, Automation, Obsidian 문서에 실제 사례 추가
- `GitHub Study`, `Manufacturing AI`에도 하위 문서 추가 여부 검토

## 내일 바로 시작할 순서

1. `news/`용 실제 큐레이션 문서 2개 작성
2. 홈 카드 노출 순서 확인
3. `hubs/skill-hub.md`와 `hubs/mcp-hub.md`를 링크 중심으로 보강

이 순서가 좋은 이유는, 현재 구조는 갖춰졌고 이제 공개 사이트로서 체감 가치가 가장 큰 부분이 실제 콘텐츠 밀도이기 때문입니다.

## 작업할 때 사용할 기본 명령

```bash
npm run docs:dev
npm run docs:build
git status
```

## 주의사항

- `summary`, `section`, `updated` frontmatter를 넣어야 홈 카드 품질이 유지됩니다.
- 폴더 구조를 바꾸면 자동 사이드바도 함께 바뀌므로, `index.md` 존재 여부를 의식하고 작업해야 합니다.
- 공개 문서와 내부 문서는 역할을 섞지 않는 편이 좋습니다.

## 마지막 배포 기준

- 최신 반영 커밋: `1b1c9a8`
- 브랜치: `main`
- 배포 방식: Cloudflare Pages Git 연동

## 메모

지금 상태는 구조 설계 단계가 거의 마무리됐고, 다음 단계는 실제 콘텐츠를 넣어 사이트의 신뢰도와 재방문 가치를 높이는 단계입니다. 내일은 새 기능보다 `News`와 `Hubs`의 실질 콘텐츠 채우기에 집중하는 편이 좋습니다.
