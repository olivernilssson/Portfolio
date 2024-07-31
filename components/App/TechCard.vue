<template>
    <div class="gap-4 p-2 -m-2">
      <div class="flex items-center gap-4 p-2 -m-2">
        <div class="flex items-center justify-center p-1 w-12 h-12 text-gray-800 rounded-full shadow-lg bg-white/90 shadow-gray-800/5 ring-1 backdrop-blur dark:bg-gray-800/90 dark:text-gray-200 dark:ring-white/20 ring-gray-900/5">
          <img :src="tech.logo" :alt="`${tech.name} logo`" class="w-9 h-9" draggable="false">
        </div>
        <h3 class="text-md font-medium">
          {{ tech.name }}
        </h3>
      </div>
      <p class="text-gray-500 text-sm mt-2">{{ tech.description }}</p>
    </div>
</template>

<script lang="ts" setup>
defineProps({
  tech: {
    type: Object,
    required: true,
  },
});
</script>
