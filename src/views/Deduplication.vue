<script setup lang="ts">
import { ref } from 'vue'
import { NInput, NButton, NSpace } from 'naive-ui'
import { copyText } from '@/utils'

const input = ref('')

const output = ref('')

function deduplication() {
  const s = input.value.split(/\r?\n/).filter(i => i)
  const m = new Map<string, number>()
  for (const i of s) {
    const iv = m.get(i)
    m.set(i, iv ? iv + 1 : 1)
  }
  output.value = ''
  m.forEach((v, k) => {
    output.value += `${k}  // 出现了：${v}次\n`
  })
  output.value = output.value.slice(0, -1)
}

function clear() {
  input.value = ''
  output.value = ''
}
</script>

<template>
  <div class="mb-8 text-3xl font-bold">{{ $route.meta.title }}</div>
  <NInput v-model:value="input" type="textarea" :rows="10" placeholder="输入需要统计的内容" />
  <NSpace class="py-2" justify="center">
    <NButton secondary type="info" @click="deduplication">开始统计</NButton>
    <NButton secondary type="info" @click="copyText(output)">复制结果</NButton>
    <NButton secondary type="info" @click="clear">清空</NButton>
  </NSpace>
  <NInput v-model:value="output" type="textarea" :rows="10" placeholder="统计结果" />
</template>
