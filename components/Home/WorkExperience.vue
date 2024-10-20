<template>
    <div>
        <h2 class="uppercase text-xs font-semibold text-gray-500 mb-6">
            WORK EXPERIENCE
        </h2>
        <div class="space-y-4">
            <div v-for="(work, id) in jobs" :key="id" class="flex items-start space-x-4">
                <!-- <div class="flex-none p-1 bg-white w-12 h-12 shadow-lg rounded flex items-center justify-center">
                    <img :src="work.logo" :alt="`${work.company} logo`" draggable="false">
                </div> -->
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
        title: "Accounting Clerk",
        company: "Fristads",
        date: "May 2023 - Now",
        description: "Accounting, invoicing and credit management."
    },
    {
        id: 2,
        title: "Web and Accounting Consultant",
        company: "Freelance",
        date: "Oct 2020 - Now",
        description: "Performs various web development and accounting tasks."
    },
    {
        id: 3,
        title: "Customer Service",
        company: "Länsförsäkringar",
        date: "Jun 2021 - Feb 2023",
        description: "Handling of insurance cases."
    },
    {
        id: 4,
        title: "Customer Service",
        company: "NetOnNet",
        date: "Jun 2020 - Aug 2021",
        description: "Handling incoming customer contacts via phone, chat and email."
    },
];
</script>
