<markdown>
# Basic

A basic dropdown.
</markdown>

<script lang="ts" setup>
import { useMessage } from 'naive-ui'

const message = useMessage()
const options = [
  {
    label: 'Marina Bay Sands',
    key: 'marina bay sands',
    disabled: true
  },
  {
    label: 'Brown\'s Hotel, London',
    key: 'brown\'s hotel, london'
  },
  {
    label: 'Atlantis Bahamas, Nassau',
    key: 'atlantis nahamas, nassau'
  },
  {
    label: 'The Beverly Hills Hotel, Los Angeles',
    key: 'the beverly hills hotel, los angeles'
  }
]

function handleSelect(key: string | number) {
  message.info(String(key))
}
</script>

<template>
  <n-dropdown trigger="hover" :options="options" @select="handleSelect">
    <n-button>Go For a Trip</n-button>
  </n-dropdown>
</template>
