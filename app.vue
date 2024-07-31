<template>
  <NuxtLoadingIndicator color="#14b8a6" />
  <AppNavbar />
  <div class="h-32"></div>
  <UContainer>
    <NuxtPage />
  </UContainer>
  <div class="h-32"></div>
  <AppFooter />
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}

.page-enter-from {
  opacity: 0;
  transform: translateY(5px);
}
</style>

<script setup>
  const { visits } = await useFetch('/api/getvisits?start=2024-07-10&end=2024-07-31', { key: 'visits' })
  const { dailyVisits } = await useFetch('/api/getdailyvisits?start=2024-07-10&end=2024-07-31', { key: 'dailyVisits' })
</script>