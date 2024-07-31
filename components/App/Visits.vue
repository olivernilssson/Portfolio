<template>
  <pre>{{ visits }}</pre>

  <AppRefreshButton dataset="dailyVisits" @refreshing="handleRefreshing" />

</template>

<script lang="ts" setup>
const refreshing = ref(false)

const handleRefreshing = (isRefreshing: boolean) => {
  refreshing.value = isRefreshing
}

const { data } = useNuxtData('dailyVisits')
const visits = data
</script>
