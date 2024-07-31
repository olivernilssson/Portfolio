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
        description: "My go-to language for most things. I've used it for everything from data analysis, modeling, and visualization to web development."
    },
    {
        id: 2,
        logo: "/logos/sql.svg",
        name: "SQL",
        description: "I've used different flavors of SQL over the years such as PostgreSQL, MySQL, and Microsoft SQL Server."
    },
    {
        id: 3,
        logo: "/logos/vue.svg",
        name: "Vue.js",
        description: "Vue.js is a progressive JavaScript framework for building user interfaces. It is designed from the ground up to be incrementally adoptable, and can easily scale between a library and a framework depending on different use cases."
    },
    {
        id: 4,
        logo: "/logos/react.svg",
        name: "React",
        description: "I've been using React.js and Next.js to develop some of my projects. I like the flexibility and performance of React."
    },
    {
        id: 5,
        logo: "/logos/matlab.svg",
        name: "MATLAB",
        description: "I've been using MATLAB for some projects in school."
    },
];
</script>