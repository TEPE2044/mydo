<script setup lang="ts">


</script>
<template>
  <div class="sum-view border border-black rounded-lg p-4">
    <div class="sum-child-view d-flex" v-for="i in 4">
      <el-statistic title="Daily active users" :value="268500" />
    </div>
  </div>
</template>
