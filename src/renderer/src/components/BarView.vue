<template>
  <v-chart class="w-full h-[300px]" :option="chartOption" autoresize />
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { BarChart } from 'echarts/charts'
import { GridComponent, TooltipComponent } from 'echarts/components'
import VChart from 'vue-echarts'

use([CanvasRenderer, BarChart, GridComponent, TooltipComponent])
//三个 prop：xData（X轴）、seriesData（数值）、title（可选标题）。
// option 用 computed 包裹，父组件数据变化时图表自动更新。
const props = defineProps<{
  xData: string[]
  seriesData: number[]
  title?: string
}>()

const chartOption = computed(() => ({
  tooltip: { trigger: 'axis' },
  title: props.title ? { text: props.title, left: 'center' } : undefined,
  xAxis: { type: 'category', data: props.xData },
  yAxis: { type: 'value' },
  series: [{ data: props.seriesData, type: 'bar', itemStyle: { borderRadius: [4, 4, 0, 0] } }]
}))
</script>
