<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const activePath = computed(() => route.path)

const isExpand = ref<Boolean>(false)
const expand_nav = () => {
  isExpand.value = !isExpand.value
}
</script>

<template>
  <aside
    class="side-nav app-surface--panel flex flex-col border-r border-[var(--app-panel-border)] overflow-hidden transition-[width] duration-300 ease-in-out"
    :class="isExpand ? 'w-[190px]' : 'w-16'"
  >
    <div
      class="flex items-start p-4 pb-3"
      :class="!isExpand ? 'justify-center' : ''"
    >
      <div class="flex-1 overflow-hidden whitespace-nowrap" v-show="isExpand">
        <h5 class="text-xl font-bold text-[var(--app-text)] font-[Trebuchet_MS]">MYDO</h5>
        <p class="mt-1 text-xs text-[var(--app-text-soft)]">快速制定计划</p>
      </div>
      <div class="shrink-0 mt-1" @click.stop="expand_nav()">
        <el-button :text="isExpand ? 1 : 0" :size="isExpand ? 'large' : ''">
          <el-icon :size="20">
            <IEpFold v-if="isExpand" />
            <IEpExpand v-else />
          </el-icon>
        </el-button>
      </div>
    </div>

    <el-menu
      class="border-r-0 bg-transparent"
      :default-active="activePath"
      :collapse="!isExpand"
      router
    >
      <el-menu-item index="/home">
        <el-icon><IEpHouse /></el-icon>
        <span>首页</span>
      </el-menu-item>
      <el-menu-item index="/date">
        <el-icon><IEpCalendar /></el-icon>
        <span>日历</span>
      </el-menu-item>
      <el-menu-item index="/my">
        <el-icon><IEpSetting /></el-icon>
        <span>设置</span>
      </el-menu-item>
    </el-menu>
  </aside>
</template>

<style lang="scss" scoped>
.side-nav {
  --el-menu-bg-color: transparent;
  --el-menu-text-color: var(--app-menu-text);
  --el-menu-hover-bg-color: var(--app-menu-hover);
  --el-menu-active-color: var(--app-accent);
}
</style>

