<markdown>
# Customizing rules

Sometimes builtin triggers don't meet your needs. You can customize these validations by setting a custom trigger in the rules and manually triggering the validation.
</markdown>

<script lang="ts" setup>
import type {
  FormInst,
  FormItemInst,
  FormItemRule,
  FormRules,
  FormValidationError
} from 'naive-ui'
import { useMessage } from 'naive-ui'
import { ref } from 'vue'

interface ModelType {
  age: string | null
  password: string | null
  reenteredPassword: string | null
}

const formRef = ref<FormInst | null>(null)
const rPasswordFormItemRef = ref<FormItemInst | null>(null)
const message = useMessage()
const modelRef = ref<ModelType>({
  age: null,
  password: null,
  reenteredPassword: null
})

function validatePasswordStartWith(rule: FormItemRule, value: string): boolean {
  return (
    !!modelRef.value.password
    && modelRef.value.password.startsWith(value)
    && modelRef.value.password.length >= value.length
  )
}

function validatePasswordSame(rule: FormItemRule, value: string): boolean {
  return value === modelRef.value.password
}

const rules: FormRules = {
  age: [
    {
      required: true,
      validator(rule: FormItemRule, value: string) {
        if (!value) {
          return new Error('Age is required')
        }
        else if (!/^\d*$/.test(value)) {
          return new Error('Age should be an integer')
        }
        else if (Number(value) < 18) {
          return new Error('Age should be above 18')
        }
        return true
      },
      trigger: ['input', 'blur']
    }
  ],
  password: [
    {
      required: true,
      message: 'Password is required'
    }
  ],
  reenteredPassword: [
    {
      required: true,
      message: 'Re-entered password is required',
      trigger: ['input', 'blur']
    },
    {
      validator: validatePasswordStartWith,
      message: 'Password is not same as re-entered password!',
      trigger: 'input'
    },
    {
      validator: validatePasswordSame,
      message: 'Password is not same as re-entered password!',
      trigger: ['blur', 'password-input']
    }
  ]
}

function handlePasswordInput() {
  if (modelRef.value.reenteredPassword) {
    rPasswordFormItemRef.value?.validate({ trigger: 'password-input' })
  }
}

function handleValidateButtonClick(e: MouseEvent) {
  e.preventDefault()
  formRef.value?.validate((errors: Array<FormValidationError> | undefined) => {
    if (!errors) {
      message.success('Valid')
    }
    else {
      console.log(errors)
      message.error('Invalid')
    }
  })
}
</script>

<template>
  <n-form ref="formRef" :model="modelRef" :rules="rules">
    <n-form-item path="age" label="Age">
      <n-input v-model:value="modelRef.age" @keydown.enter.prevent />
    </n-form-item>
    <n-form-item path="password" label="Password">
      <n-input
        v-model:value="modelRef.password"
        type="password"
        @input="handlePasswordInput"
        @keydown.enter.prevent
      />
    </n-form-item>
    <n-form-item
      ref="rPasswordFormItemRef"
      first
      path="reenteredPassword"
      label="Re-enter Password"
    >
      <n-input
        v-model:value="modelRef.reenteredPassword"
        :disabled="!modelRef.password"
        type="password"
        @keydown.enter.prevent
      />
    </n-form-item>
    <n-row :gutter="[0, 24]">
      <n-col :span="24">
        <div style="display: flex; justify-content: flex-end">
          <n-button
            :disabled="modelRef.age === null"
            round
            type="primary"
            @click="handleValidateButtonClick"
          >
            Validate
          </n-button>
        </div>
      </n-col>
    </n-row>
  </n-form>

  <pre>{{ JSON.stringify(modelRef, null, 2) }}
</pre>
</template>
