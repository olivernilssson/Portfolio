<template>
  <main class="min-h-screen">
    <AppHeader
      class="mb-12"
      title="Statistics"
      :description="description"
    />
    <div class="space-y-24">
      <p>Text</p>
      <AppChart />
    </div>
  </main>
</template>

<script lang="ts" setup>
const description =
  "Here are some visitor statistics for my portfolio app.";
useSeoMeta({
  title: "Statistics | Oliver Nilsson",
  description,
});
</script>
