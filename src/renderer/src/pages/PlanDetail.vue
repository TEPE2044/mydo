<template>
  <div class="planDetail">

  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    treeData: string[]
    plans: string[]
  }>(),
  {
    treeData: undefined,
    plans: undefined
  }
)
</script>
