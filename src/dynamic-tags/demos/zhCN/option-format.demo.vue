<markdown>
# 使用对象格式的值

你可以配置 `@create` 来产生 `{ label, value }` 格式的值，注意不要和 `string` 类型混用。
</markdown>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref([
  { label: '你没见过不等于没有', value: 'hello world 1' },
  {
    label: '不要给自己设限',
    value: 'hello world 2'
  },
  {
    label: '不要说连升两级',
    value: 'hello world 3'
  },
  {
    label: '直接升到 CEO 都是有可能的',
    value: 'hello world 4'
  }
])

function onCreate(label: string) {
  return {
    label,
    value: `v${label}`
  }
}
</script>

<template>
  <n-dynamic-tags v-model:value="value" @create="onCreate" />
</template>
