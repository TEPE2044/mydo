<script lang="ts" setup>
import router from '@renderer/router'
import dayjs from 'dayjs'

import { ref } from 'vue'
const value = ref(dayjs())
const today = ref(dayjs())

const getDateDetail = () => {
  router.push('/plan-detail')
}
</script>
<template>
  <section class="page-card app-surface">
    <p class="app-page-eyebrow">计划完成情况</p>
    <el-calendar v-model="value" controller-type="select">
      <template #date-cell="{data}">
        <el-button v-if="data.isSelected && data.date >= today" size="small" @click.prevent="getDateDetail()">查看</el-button>
      </template>
    </el-calendar>
  </section>
</template>

<style lang="scss" scoped>
.is-selected {
  color: #1989fa;
}
</style>
