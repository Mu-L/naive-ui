<markdown>
# 图标

在标签中使用图标。
</markdown>

<script lang="ts" setup>
import { CheckmarkCircle } from '@vicons/ionicons5'
</script>

<template>
  <n-space>
    <n-tag type="success">
      Checked
      <template #icon>
        <n-icon :component="CheckmarkCircle" />
      </template>
    </n-tag>
    <n-tag round :bordered="false" type="success">
      Checked
      <template #icon>
        <n-icon :component="CheckmarkCircle" />
      </template>
    </n-tag>
  </n-space>
</template>
