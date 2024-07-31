<template>
    <div>
        <h2 class="uppercase text-xs font-semibold text-gray-500 mb-6">
            WORK EXPERIENCE
        </h2>
        <div class="space-y-4">
            <div v-for="(work, id) in jobs" :key="id" class="flex items-start space-x-4">
                <div class="flex-none p-1 bg-white w-12 h-12 shadow-lg rounded flex items-center justify-center">
                    <img :src="work.logo" :alt="`${work.company} logo`" draggable="false">
                </div>
                <div>
                    <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200">
                        {{ work.title }}
                    </h3>
                    <div class="flex gap-2 items-center">
                        <p class="text-sm font-semibold text-gray-600 dark:text-gray-400">
                            {{ work.company }}
                        </p>
                        <div class="w-1 h-1 bg-gray-400 rounded-full"></div>
                        <p class="text-sm text-gray-600 dark:text-gray-400">
                            {{ work.date }}
                        </p>
                    </div>
                    <p class="text-sm text-gray-600 dark:text-gray-400">
                        {{ work.description }}
                    </p>
                </div>
            </div>
        </div>
        <div class="flex items-center justify-center mt-6 text-sm">
        <ULink
            to="/CV_Oliver_Nilsson.pdf"
            target="_blank"
            class="font-medium text-gray-500 underline-offset-4 hover:underline hover:text-primary-500 dark:hover:text-primary-400">
            Download CV ↓
        </ULink>
      </div>
    </div>
</template>

<script lang="ts" setup>
const jobs = [
    {
        id: 1,
        logo: "/logos/fristads_sverige_logo.jpeg",
        title: "Accounting Clerk",
        company: "Fristads",
        date: "2022 - Now",
        description: "I work as an accounting clerk at Fristads AB. The work consists of accounting, invoicing, and credit management."
    },
    {
        id: 2,
        logo: "/logos/sons.svg",
        title: "Web and Accounting Consultant",
        company: "Sons Design",
        date: "2021 - Now",
        description: "I work as a frontend developer at Kodbruket. I work with Vue.js, Nuxt.js, Tailwind CSS, and Storyblok."
    },
    {
        id: 3,
        logo: "/logos/LF.jpeg",
        title: "Customer Service",
        company: "Länsförsäkringar",
        date: "2020 - Present",
        description: "I work as a freelance web developer. I work with Vue.js, Nuxt.js, Tailwind CSS, and Storyblok."
    },
    {
        id: 4,
        logo: "/logos/netonnet_logo.jpeg",
        title: "Customer Service",
        company: "NetOnNet",
        date: "2020 - 2021",
        description: "I worked",
    },
];
</script>
