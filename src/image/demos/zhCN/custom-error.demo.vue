<markdown>
# 加载失败的插槽

你可以使用 `error` slot 来自定义加载失败时的内容。
</markdown>

<script lang="ts" setup>
import { ImageOutline as ImageOutlineIcon } from '@vicons/ionicons5'
import { ref } from 'vue'

const url = ref('人生嘛，失败总是难免的')
function refresh() {
  url.value = 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg'
}
function reloadError() {
  url.value = '人生嘛，失败总是难免的'
}
</script>

<template>
  <n-flex vertical inline>
    <n-flex>
      <n-button type="error" @click="reloadError">
        加载失败
      </n-button>
      <n-button type="primary" @click="refresh">
        刷新
      </n-button>
    </n-flex>
    <n-image width="100" :src="url">
      <template #error>
        <n-icon :size="100" color="lightGrey">
          <ImageOutlineIcon />
        </n-icon>
      </template>
    </n-image>
  </n-flex>
</template>
