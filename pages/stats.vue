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
  "Visitor statistics for the portfolio app. Hover over the charts for details. Visualizations are created using the shadcn-vue component library."
useSeoMeta({
  title: "Statistics | Oliver Nilsson",
  description,
});
</script>
