<markdown>
# 行内显示

JavaScript 的例子。
</markdown>

<script lang="ts" setup>
const code = 'console.log("工具人的日子不好过")'
</script>

<template>
  <div>
    JavaScript
    <n-code :code="code" language="javascript" inline />
  </div>
</template>
