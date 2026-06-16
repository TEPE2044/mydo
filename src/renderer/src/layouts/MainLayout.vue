<script lang="ts" setup>
import SideNav from '../components/SideNav.vue'
</script>

<template>
  <div class="mainlayout">
    <SideNav />
    <main class="mainlayout__content">
      <router-view />
    </main>
  </div>
</template>

<style scoped>
.mainlayout {
  display: flex;
  min-height: 100vh;
  width: 100%;
}

.mainlayout__content {
  flex: 1;
  min-width: 0;
  padding: 24px;
  background: linear-gradient(180deg, rgba(248, 250, 252, 0.7) 0%, rgba(241, 245, 249, 0.95) 100%);
}
</style>
