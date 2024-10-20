<template>
  <div class="space-y-6">
    <NuxtImg src="/avatar.jpeg" alt="Oliver Nilsson"
      class="ring-2 border ring-gray-200 border-gray-300 dark:ring-white/10 dark:border-gray-800 hover:ring-4 transition-all duration-300 bg-gray-200 dark:bg-gray-900 rounded-full h-12 w-12 sm:h-16 sm:w-16"
      sizes="48px sm:64px" placeholder format="webp" />
    <h1 class="text-xl font-bold tracking-tight text-gray-800 dark:text-gray-100">
      <HomeHelloRotator />
    </h1>
    <p class="text-gray-900 dark:text-gray-400">
      I'm Oliver, currently pursuing a Master of Science in Finance at the Business School of Gothenburg University. I have a strong interest for finance, data analysis and coding. I enjoy combining these fields to uncover data-driven insights.
    </p>
    <!-- <AppVisits /> -->
  </div>
</template>

<script setup>
useSeoMeta({
  title: "Oliver Nilsson",
  description:
    "Portfolio app of Oliver Nilsson",
});
</script>
