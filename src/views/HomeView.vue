<template>
  <div class="px-4 flex flex-col justify-center h-[100dvh] w-[100dvw] gap-8">
    <div class="text-center text-8xl">
      TABU GAME
    </div>

    <RouterLink
      class="border-2 border-primary text-white px-8 py-4 text-4xl mx-auto hover:bg-primary transition-colors duration-300 ease-in-out"
      :to="{ name: 'game' }">
      Start
    </RouterLink>
  </div>
</template>
