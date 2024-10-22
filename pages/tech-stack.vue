<template>
    <main class="min-h-screen">
        <div class="space-y-4">
            <AppHeader class="mb-12" title="Tech Stack" :description="description" />
            <AppTechCard
                v-for="(tech, id) in techStack"
                :key="id"
                :tech="tech"
            />
        </div>
    </main>
</template>

<script lang="ts" setup>
const description =
    "This is the technology I mainly use to build Business Intelligence solutions, analyze data, stay productive etc. I am always open for learning new things and trying to improve my skills.";

useSeoMeta({
  title: "Tech Stack | Oliver Nilsson",
  description,
});

const techStack = [
    {
        id: 1,
        logo: "/logos/python.svg",
        name: "Python",
        description: "Using Python for everything from data analysis and machine learning to web development. I've used libraries like Pandas, NumPy, Matplotlib, and FastAPI etc."
    },
    {
        id: 2,
        logo: "/logos/sql.svg",
        name: "SQL",
        description: "I've used different types of SQL such as PostgreSQL and MySQL."
    },
    {
        id: 3,
        logo: "/logos/vue.svg",
        name: "Vue.js",
        description: "Used Nuxt.js to build this website, which is a Vue.js framework. I like the simplicity and performance of Vue."
    },
    {
        id: 4,
        logo: "/logos/react.svg",
        name: "React.js",
        description: "I've been using React.js and Next.js to develop some of my projects."
    },
    {
        id: 5,
        logo: "/logos/excel.svg",
        name: "Excel",
        description: "Have used Excel much in school, work, and personal projects. Achieved the Microsoft Office Specialist: Microsoft Excel Expert(Office 2019) certification."
    },
    {
        id: 6,
        logo: "/logos/matlab.svg",
        name: "MATLAB",
        description: "I've been using MATLAB for some projects in school, but prefer Python instead."
    },
];
</script>