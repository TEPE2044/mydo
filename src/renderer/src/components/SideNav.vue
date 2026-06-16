<script lang="ts" setup>
import { computed } from 'vue'
import { Document, Location, Setting } from '@element-plus/icons-vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const activePath = computed(() => route.path)
</script>

<template>
  <aside class="side-nav app-surface--panel">
    <div class="side-nav__brand">
      <h5>MYDO</h5>
      <p>Workspace</p>
    </div>

    <el-menu
      class="side-nav__menu"
      :default-active="activePath"
      router
    >
      <el-menu-item index="/create-mydo">
        <el-icon><document /></el-icon>
        <span>CREATE MYDO</span>
      </el-menu-item>
      <el-menu-item index="/date">
        <el-icon><location /></el-icon>
        <span>DATE</span>
      </el-menu-item>
      <el-menu-item index="/my">
        <el-icon><setting /></el-icon>
        <span>MY</span>
      </el-menu-item>
    </el-menu>
  </aside>
</template>

<style scoped>
.side-nav {
  width: 200px;
  padding: 20px 14px;
  border-right: 1px solid var(--app-panel-border);
  --el-menu-bg-color: transparent;
  --el-menu-text-color: var(--app-menu-text);
  --el-menu-hover-bg-color: var(--app-menu-hover);
  --el-menu-active-color: var(--app-accent);
}

.side-nav__brand {
  margin-bottom: 18px;
  padding: 12px 10px 16px;
}

.side-nav__brand h5 {
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0.16em;
  color: var(--app-text);
}

.side-nav__brand p {
  margin-top: 4px;
  font-size: 12px;
  color: var(--app-text-soft);
}

.side-nav__menu {
  border-right: 0;
  background: transparent;
}
</style>
