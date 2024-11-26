<script setup lang="ts">
import { ref, watch } from 'vue';

const tabooWord = ref('')

const countdownIntervalId = ref<number>()

const countDownValue = ref(5)

countdownIntervalId.value = setInterval(() => countDownValue.value--, 1000)

watch(countDownValue, () => {
  if (countDownValue.value === 0) {
    clearInterval(countdownIntervalId.value)
  }
})

fetch('https://tabu-api-production.up.railway.app/', { method: 'GET' })
  .then(res => res.text())
  .then(word => tabooWord.value = word)
</script>

<template>
  <div class="flex flex-col justify-center h-[100dvh] relative">
    <div class="text-center text-[20vw] w-full break-words">
      <template v-if="countDownValue > 0">
        {{ countDownValue }}
      </template>
      <template v-else>
        {{ tabooWord }}
      </template>
    </div>

    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2">
      <RouterLink :to="{ name: 'home' }"
        class="border-2 border-primary text-white px-4 py-2 mx-auto hover:bg-primary transition-colors duration-300 ease-in-out">
        New Game
      </RouterLink>
    </div>
  </div>
</template>
