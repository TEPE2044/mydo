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
    class="side-nav app-surface--panel"
    :class="isExpand ? 'side-expand' : 'side-close'"
  >
    <div class="side-nav__header" :class="{ 'side-nav__header--collapsed': !isExpand }">
      <div class="side-nav__brand" v-show="isExpand">
        <h5 class="brand">MYDO</h5>
        <p>快速制定计划</p>
      </div>
      <div class="expand__btn" @click.stop="expand_nav()">
        <el-button :text="isExpand ? 1 : 0" :size="isExpand ? 'large' : ''" :type="isExpand ? '' : 'info'">
          <el-icon :size="20">
            <IEpFold v-if="isExpand" />
            <IEpExpand v-else />
          </el-icon>
        </el-button>
      </div>
    </div>

    <el-menu
      class="side-nav__menu"
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
        <span>MY</span>
      </el-menu-item>
    </el-menu>
  </aside>
</template>

<style lang="scss" scoped>
$side-expand-width: 190px;
$side-close-width: 64px;

.side-nav {
  display: flex;
  flex-direction: column;
  border-right: 1px solid var(--app-panel-border);
  overflow: hidden;
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  --el-menu-bg-color: transparent;
  --el-menu-text-color: var(--app-menu-text);
  --el-menu-hover-bg-color: var(--app-menu-hover);
  --el-menu-active-color: var(--app-accent);
}

.side-expand {
  width: $side-expand-width;
}

.side-close {
  width: $side-close-width;
}

.side-nav__header {
  display: flex;
  align-items: flex-start;
  padding: 1rem 1rem 12px;

  &--collapsed {
    justify-content: center;
  }

  .side-nav__brand {
    flex: 1;
    overflow: hidden;
    white-space: nowrap;

    h5 {
      font-size: 20px;
      font-weight: 700;
      color: var(--app-text);
      font-family:
        'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans',
        Arial, sans-serif;
    }

    p {
      margin-top: 4px;
      font-size: 12px;
      color: var(--app-text-soft);
    }
  }

  .expand__btn {
    flex-shrink: 0;
    margin-top: 4px;
  }
}

.side-nav__menu {
  border-right: 0;
  background: transparent;

  :deep(.el-menu-item) {
    gap: 8px;
  }
}
</style>

