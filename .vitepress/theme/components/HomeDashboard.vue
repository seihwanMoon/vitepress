<script setup lang="ts">
import { computed } from "vue";
import { data as updates } from "../updates.data";

const latestUpdates = computed(() =>
  updates.map((item) => ({
    ...item,
    label: new Intl.DateTimeFormat("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    }).format(new Date(item.updated))
  }))
);
</script>

<template>
  <section class="home-dashboard">
    <div class="dashboard-header">
      <div>
        <p class="eyebrow">Latest Updates</p>
        <h2>최근 업데이트</h2>
      </div>
      <p class="dashboard-copy">
        News, Topics, Hubs, Blog에서 최근 손본 문서를 카드형으로 모아 보여줍니다.
      </p>
    </div>
    <div class="dashboard-actions">
      <a href="/news/">News</a>
      <a href="/topics/">Topics</a>
      <a href="/hubs/">Hubs</a>
      <a href="/blog/">Blog</a>
      <a href="/internal/">Internal</a>
    </div>
    <div v-if="latestUpdates.length === 0" class="dashboard-empty">
      아직 최근 업데이트 카드에 표시할 문서가 없습니다. `summary`와 `updated`를 가진 Markdown 문서를 추가하면 여기에 자동으로 표시됩니다.
    </div>
    <div class="dashboard-grid">
      <a
        v-for="item in latestUpdates"
        :key="item.url"
        class="dashboard-card"
        :href="item.url"
      >
        <div class="dashboard-meta">
          <span class="section">{{ item.section }}</span>
          <span class="date">{{ item.label }}</span>
        </div>
        <strong>{{ item.title }}</strong>
        <p>{{ item.summary }}</p>
      </a>
    </div>
  </section>
</template>

<style scoped>
.home-dashboard {
  margin: 2rem 0 3rem;
}

.dashboard-header {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: end;
  margin-bottom: 1rem;
}

.eyebrow {
  margin: 0 0 0.35rem;
  color: var(--vp-c-text-2);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.9rem;
}

.dashboard-header h2 {
  margin: 0;
}

.dashboard-copy {
  max-width: 420px;
  margin: 0;
  color: var(--vp-c-text-2);
}

.dashboard-grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.dashboard-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.9rem;
  margin-bottom: 1rem;
}

.dashboard-actions a {
  color: var(--vp-c-brand-1);
  font-weight: 600;
  text-decoration: none;
}

.dashboard-empty {
  margin-bottom: 1rem;
  padding: 1rem 1.1rem;
  border: 1px dashed rgba(15, 118, 110, 0.28);
  border-radius: 16px;
  color: var(--vp-c-text-2);
  background: rgba(15, 118, 110, 0.05);
}

.dashboard-card {
  display: block;
  padding: 1rem;
  border-radius: 18px;
  border: 1px solid var(--vp-c-divider);
  background:
    radial-gradient(circle at top right, rgba(29, 78, 216, 0.12), transparent 35%),
    linear-gradient(180deg, rgba(15, 118, 110, 0.06), rgba(15, 23, 42, 0.04));
  color: inherit;
  text-decoration: none;
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.dashboard-card:hover {
  transform: translateY(-2px);
  border-color: rgba(29, 78, 216, 0.4);
}

.dashboard-card strong {
  display: block;
  margin-bottom: 0.55rem;
}

.dashboard-card p {
  margin: 0;
  color: var(--vp-c-text-2);
}

.dashboard-meta {
  display: flex;
  justify-content: space-between;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
  font-size: 0.9rem;
}

.section {
  color: var(--vp-c-brand-1);
  font-weight: 600;
}

.date {
  color: var(--vp-c-text-3);
}

@media (max-width: 768px) {
  .dashboard-header {
    flex-direction: column;
    align-items: start;
  }
}
</style>
