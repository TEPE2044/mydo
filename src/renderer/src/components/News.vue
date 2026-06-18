<script lang="ts" setup>
import { ref } from 'vue'

interface News {
  content: string
  pictures: string
}

const news = ref<News[]>([
  {
    content: 'fake',
    pictures:
      'https://picsum.photos/200/300?random=1'
  },
  {
    content: 'fake2',
    pictures:
      'https://picsum.photos/200/300?random=1'
  }
])
</script>

<template>
  <div class="news">
    <el-splitter lazy>
      <el-splitter-panel collapsible min="50" v-for="n in news" :id="`news${n}`">
        <div class="panel">
          <div class="panel-background">
            <img :src="n.pictures" :alt="`pic${n.pictures}`" />
            <div class="panel-cover">
              <div class="pannel-content">
                {{ n.content }}
              </div>
            </div>
          </div>
        </div>
      </el-splitter-panel>
    </el-splitter>
  </div>
</template>

<style lang="scss" scoped>
.news {
  height: 150px;
  box-shadow: var(--el-border-color-light) 0px 0px 10px;
}
.panel {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  position: relative;
  .panel-background {
    position: absolute;
    inset: 0;
  }
  .panel-cover {
    position: absolute;
    bottom: 0;
    height: 50px;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.205);
    .panel-content{
      color: azure;
    }
  }
}
</style>
