<markdown>
# Delay

You can specify a delay for displaying spin. If spinning ends during delay, spin won't appear.
</markdown>

<script lang="ts" setup>
import { ref } from 'vue'

const show = ref(false)
</script>

<template>
  <n-space vertical>
    <n-spin :show="show" :delay="1000">
      <n-alert title="La La La" type="success">
        Leave it till tomorrow to unpack my case. Honey disconnect the phone.
      </n-alert>
    </n-spin>
    <n-button @click="show = !show">
      {{ show ? 'Click to stop Spin' : 'Click to Spin' }}
    </n-button>
  </n-space>
</template>
