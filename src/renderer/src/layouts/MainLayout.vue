<script lang="ts" setup>
import dayjs from 'dayjs'
import { ref, onMounted, onUnmounted } from 'vue'

const now = ref(dayjs())
let timer: ReturnType<typeof setInterval>

onMounted(() => {
  timer = setInterval(() => {
    now.value = dayjs()
  }, 1000)
})

onUnmounted(() => {
  clearInterval(timer)
})
</script>

<template>
  <div class="flex h-screen w-full overflow-hidden">
    <SideNav />
    <main class="flex-1 min-w-0 overflow-y-auto p-6 bg-gradient-to-b from-slate-50/70 to-slate-100/95">
      <div class="flex items-center justify-center mb-2">
        <h2 class="font-light text-2xl">{{ now.format('YYYY-MM-DD HH:mm:ss') }}</h2>
      </div>
      <router-view />
    </main>
  </div>
</template>
