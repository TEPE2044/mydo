<script lang="ts" setup></script>

<template>
  <div class="news">
    <el-carousel trigger="click" height="150px">
      <el-carousel-item v-for="item in 4" :key="item" class="even:bg-[#99a9bf] odd:bg-[#d3dce6]">
        <h3 class="text-2xl leading-[150px] text-center m-0 text-[#475669]/75">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
