---
title: deep-agents
repo: https://github.com/seihwanMoon/deep-agents
summary: FastAPI 기반 에이전트 관리 백엔드와 편집기 UX를 단계별로 구현하는 백엔드 프로젝트
tags:
  - fastapi
  - agents
  - langgraph
  - backend
status: active
stack:
  - Python
  - FastAPI
  - SQLAlchemy
  - Docker Compose
order: 40
---

# deep-agents

## 한 줄 소개

에이전트 관리, 버전 스냅샷, 리포트, 채팅, 도구 연동까지 단계적으로 확장하는 FastAPI 기반 백엔드 프로젝트입니다.

<div class="meta-list">
  <div><strong>상태</strong><br />active</div>
  <div><strong>저장소</strong><br /><a href="https://github.com/seihwanMoon/deep-agents">GitHub Repo</a></div>
  <div><strong>실행</strong><br />로컬 백엔드 및 정적 UI 목업</div>
</div>

## 문제/목적

에이전트 관련 기능은 CRUD만으로 끝나지 않고 버전 관리, 보고, 파일 주입, 스케줄, 모델/시크릿 관리까지 함께 자라납니다. 이 프로젝트는 그런 복합 요구를 Phase 계획으로 쪼개고, 실제 백엔드 엔드포인트와 경량 UI 편집기로 연결하는 데 초점을 둡니다.

## 주요 기능

- Docker Compose, FastAPI, SQLAlchemy, Alembic, JWT auth 기반 기본 구조
- Agent/Folder CRUD와 버전 스냅샷, import/export API
- `/app/agent/{id}/edit` 경량 편집기와 diff/restore/report UX
- LangGraph 기반 SSE 채팅, Tools/Models/Secrets, Schedules, OpenAI 호환 API로 이어지는 단계별 확장

## 기술 스택

- Python
- FastAPI
- SQLAlchemy
- Docker Compose
- LangGraph

## 링크

- GitHub: <https://github.com/seihwanMoon/deep-agents>
- Related Docs: [배포와 도메인 운영](/guide/deployment-and-domain)

## 회고 또는 다음 계획

기능 범위가 넓은 프로젝트인 만큼, 현재 강점은 무엇이 이미 구현됐고 무엇이 다음 단계인지 문서로 잘 드러난다는 점입니다. 이후에는 UI와 운영 고도화를 어디까지 끌고 갈지 우선순위가 중요해집니다.
