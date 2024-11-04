<template>
  <main class="min-h-screen">
    <AppHeader
      class="mb-12"
      title="Statistics"
      :description="description"
    />
    <div class="space-y-24">
      <AppDailyLineChart />
    </div>
  </main>
</template>

<script lang="ts" setup>
const description =
  "Server requests statistics for the portfolio app. Hover over the charts for details. Visualizations are created using the shadcn-vue component library. This page is mainly made to play around with data fetching, vizualizations and storage. The data is fetched from a hosted PostgreSQL database using a Node.js backend.";
useSeoMeta({
  title: "Statistics | Oliver Nilsson",
  description,
});
</script>
