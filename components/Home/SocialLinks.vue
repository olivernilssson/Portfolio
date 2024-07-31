<template>
  <div>
    <h2 class="uppercase text-xs font-semibold text-gray-500 mb-4">FIND ME ON</h2>
    <div class="space-y-5">
      <NuxtLink
        v-for="link in links"
        :key="link.icon"
        :to="link.url"
        target="_blank"
        external
        class="flex items-end gap-4 dark:hover:text-primary-400 group"
      >
        <span class="text-sm">
          {{ link.name }}
        </span>
        <div
          class="flex-1 border-b border-dashed border-gray-300 dark:border-gray-800 group-hover:border-gray-700"
        ></div>
        <Icon :name="link.icon" class="w-6 h-6"></Icon>
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
const links = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/oliver-nilsson-b994641aa/",
    icon: "mdi:linkedin",
  },
  {
    name: "GitHub",
    url: "https://github.com/olivernilssson",
    icon: "mdi:github",
  },
  {
    name: "Email",
    url: "mailto:olivernilsson@live.se",
    icon: "mdi:email",  
  },
];
</script>