<template>
  <div class="font-extrabold text-2xl [text-wrap:balance] text-gray-700">
    <span
      class="inline-flex flex-col h-[calc(theme(fontSize.2xl)*theme(lineHeight.tight))] overflow-hidden"
    >
      <ul
        class="block text-left leading-tight [&_li]:block animate-text-slide"
      >
        <li class="text-orange-500">Hello!</li>
        <li class="text-rose-500">Hej!</li>
        <li class="text-yellow-500">Bonjour!</li>
        <li class="text-teal-500">Hola!</li>
        <li class="text-pink-500">Ciao!</li>
        <li class="text-sky-500">こんにちは!</li>
      </ul>
    </span>
  </div>
</template>

<style>
  .animate-text-slide {
    animation: text-slide 15.5s cubic-bezier(0.83, 0, 0.17, 1) infinite;
  }

  @keyframes text-slide {
    0%,
    14.28% {
      transform: translateY(0%);
    }

    16.66%,
    30.94% {
      transform: translateY(-16.66%);
    }

    33.32%,
    47.6% {
      transform: translateY(-33.32%);
    }

    49.98%,
    64.26% {
      transform: translateY(-49.98%);
    }

    66.64%,
    80.92% {
      transform: translateY(-66.64%);
    }

    83.3%,
    97.58% {
      transform: translateY(-83.3%);
    }

    100% {
      transform: translateY(-100%);
    }
  }
</style>