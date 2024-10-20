<template>
  <NuxtLink
    class="flex items-end gap-4 group p-2 -m-2 rounded-lg"
    :to="project.url"
    target="_blank"
    external
  >
    <div class="max-w-sm">
      <h3 class="text-sm font-medium group-hover:text-primary-400 flex flex-wrap items-center mb-1 gap-1">
        <div class="pr-2 min-w-0">{{ project.name }}</div>
        <div class="flex flex-wrap min-w-0">
          <p
            v-for="(language, id) in project.languages"
            :key="id"
            :class="`text-sm border ${programmingColors[language][1]} rounded-full font-normal px-1 mr-1`"
          >
            <span :class="`${programmingColors[language][0]} p-1`">{{ language }}</span>
          </p>
        </div>
      </h3>
      <p class="text-gray-500 text-sm">{{ project.description }}</p>
    </div>
    <div
      class="flex-1 border-b border-dashed border-gray-300 dark:border-gray-800 group-hover:border-primary-400"
    ></div>
    <UIcon
      name="i-heroicons-arrow-right"
      class="w-5 h-5 group-hover:text-primary-400 group-hover:-rotate-45 transition-transform duration-150 ease-in-out"
    />
  </NuxtLink>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    required: true,
  },
});

const programmingColors = {
  "Python": ['text-yellow-500', 'border-yellow-500'],
  "JavaScript": ['text-yellow-500', 'border-yellow-500'],
  "TypeScript": ['text-blue-500', 'border-blue-500'],
  "Vue": ['text-green-500', 'border-green-500'],
  "Nuxt.js": ['text-green-500', 'border-green-500'],
  "React": ['text-blue-500', 'border-blue-500'],
  "Next.js": ['text-blue-500', 'border-blue-500'],
  "Node.js": ['text-green-500', 'border-green-500'],
}
</script>
