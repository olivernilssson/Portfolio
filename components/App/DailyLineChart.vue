<script setup lang="ts">
import { LineChart } from '@/components/ui/chart-line'

const { data } = useNuxtData('dailyVisits')


</script>

<template>
  <AppRefreshButton dataset="dailyVisits" />
  <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4">
    <p className="text-gray-800 dark:text-gray-200 font-bold text-lg pb-6">Daily Visits</p>
    <LineChart
      :data="data.visits"
      index="date"
      :colors="['orange']"
      :categories="['visits']"
      :show-grid-line="false"
      :show-legend="false"
      :show-x-axis="false"
      :show-y-axis="false"
    />
  </div>
</template>