<script setup lang="ts">
import type { Ref } from 'vue'
import { ref } from 'vue'
import { NSpace, NInputNumber, NButton } from 'naive-ui'
import BaseTitle from '@/components/BaseTitle.vue'

const n: Ref<number | null> = ref(null)
const fib: Ref<BigInt | number | null> = ref(null)

function genFib() {
  if (n.value === null) return
  if (n.value < 2) return (fib.value = n.value)
  let p = 0n,
    q = 0n,
    r = 1n
  for (let i = 2; i <= n.value; i++) {
    p = q
    q = r
    r = p + q
  }
  return (fib.value = r)
}
</script>

<template>
  <BaseTitle />
  <NSpace align="center">
    <span>n =</span>
    <NInputNumber v-model:value="n" :min="0" />
    <NButton @click="genFib()">确定</NButton>
  </NSpace>
  <div class="mt-4 break-all">{{ fib }}</div>
</template>
