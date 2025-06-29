<markdown>
# 自定义验证

你可能需要自定义验证的时机和效果，使用 `validation-status` 和 `feedback` 来控制表项的验证效果。在这种情况下通常不需要提供 `path`。
</markdown>

<script lang="ts" setup>
import { computed, ref } from 'vue'

function createStatus(value: string) {
  switch (value) {
    case '10:30':
      return undefined
    case '10:29':
      return 'warning'
    default:
      return 'error'
  }
}

function createFeedback(value: string) {
  switch (value) {
    case '10:30':
      return '十点半的飞机已经到了'
    case '10:29':
      return '虽然差不多了，请把时间调到 10:30'
    default:
      return '请把时间调到 10:30'
  }
}

function createTimeForNumber(num: number) {
  return `${Number.parseInt(String(num / 100), 10)}:${num % 100}`
}

const inputValueRef = ref('10:29')
const inputNumberValueRef = ref(1029)
const selectValueRef = ref('10:29')

const selectOptions = [
  {
    label: '10:28',
    value: '10:28'
  },
  {
    label: '10:29',
    value: '10:29'
  },
  {
    label: '10:30',
    value: '10:30'
  }
]

const inputValidationStatus = computed(() => {
  return createStatus(inputValueRef.value)
})

const inputFeedback = computed(() => {
  return createFeedback(inputValueRef.value)
})

const inputNumberValidationStatus = computed(() => {
  return createStatus(createTimeForNumber(inputNumberValueRef.value))
})

const inputNumberFeedback = computed(() => {
  return createFeedback(createTimeForNumber(inputNumberValueRef.value))
})

const selectValidationStatus = computed(() => {
  return createStatus(selectValueRef.value)
})

const selectFeedback = computed(() => {
  return createFeedback(selectValueRef.value)
})
</script>

<template>
  <n-form>
    <n-form-item
      label="飞机场的"
      :validation-status="inputValidationStatus"
      :feedback="inputFeedback"
    >
      <n-input v-model:value="inputValueRef" clearable />
    </n-form-item>
    <n-form-item
      label="飞机场的"
      :validation-status="inputNumberValidationStatus"
    >
      <n-input-number v-model:value="inputNumberValueRef" />
      <template #feedback>
        {{ inputNumberFeedback }}
      </template>
    </n-form-item>
    <n-form-item
      label="飞机场的"
      :validation-status="selectValidationStatus"
      :feedback="selectFeedback"
    >
      <n-select
        v-model:value="selectValueRef"
        :options="selectOptions"
        clearable
      />
    </n-form-item>
  </n-form>
</template>
