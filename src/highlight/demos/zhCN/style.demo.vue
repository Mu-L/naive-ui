<markdown>
  # 样式

  换个样式，让高亮更加醒目。
</markdown>

<script lang="ts" setup>
import { useThemeVars } from 'naive-ui'

const themeVars = useThemeVars()
const text = 'Naive UI 全量使用 TypeScript 编写，和你的 TypeScript 项目无缝衔接'
const patterns = ['Naive UI', 'TypeScript']
</script>

<template>
  <n-highlight
    :text="text"
    :patterns="patterns"
    :highlight-style="{
      padding: '0 6px',
      borderRadius: themeVars.borderRadius,
      display: 'inline-block',
      color: themeVars.baseColor,
      background: themeVars.primaryColor,
      transition: `all .3s ${themeVars.cubicBezierEaseInOut}`,
    }"
  />
</template>
