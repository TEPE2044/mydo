<script lang="ts" setup>
import SideNav from '../components/SideNav.vue'

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
  <div class="mainlayout">
    <SideNav />
    <main class="mainlayout__content">
      <div class="main-clock">
        <h2>{{ now.format('YYYY-MM-DD HH:mm:ss') }}</h2>
      </div>
      <router-view />
    </main>
  </div>
</template>

<style scoped>
.mainlayout {
  display: flex;
  height: 100vh;
  width: 100%;
  overflow: hidden;
}

.main-clock {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: .5rem;
  h2 {
    font-weight: 300;
  }
}

.mainlayout__content {
  flex: 1;
  min-width: 0;
  overflow-y: auto;
  padding: 24px;
  background: linear-gradient(180deg, rgba(248, 250, 252, 0.7) 0%, rgba(241, 245, 249, 0.95) 100%);
}
</style>
