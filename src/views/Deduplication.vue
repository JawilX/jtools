<script setup lang="ts">
import { ref, computed } from 'vue'
import { NInput, NButton, NSpace } from 'naive-ui'
import { copyText } from '@/utils'
import BaseTitle from '@/components/BaseTitle.vue'

const input = ref('')

const output = computed(() => {
  const s = input.value.split(/\r?\n/).filter(i => i)
  const m = new Map<string, number>()
  for (const i of s) {
    const iv = m.get(i)
    m.set(i, iv ? iv + 1 : 1)
  }
  let result = ''
  m.forEach((v, k) => {
    result += `${k}  // 出现了：${v}次\n`
  })
  result = result.slice(0, -1)
  return result
})

function clear() {
  input.value = ''
}
</script>

<template>
  <BaseTitle />
  <NInput v-model:value="input" type="textarea" :rows="9" placeholder="输入需要统计的内容" />
  <NSpace class="py-2" justify="center">
    <NButton secondary type="info" @click="copyText(output)">复制结果</NButton>
    <NButton secondary type="info" @click="clear">清空</NButton>
  </NSpace>
  <NInput v-model:value="output" type="textarea" :rows="9" placeholder="统计结果" />
</template>
