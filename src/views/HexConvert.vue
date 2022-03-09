<script setup lang="ts">
import { ref, computed } from 'vue'
import { NInputGroup, NInput, NSelect, NTable, NButton } from 'naive-ui'
import { copyText } from '@/utils'

const hex = ref(10)
const hexOptions = [
  { label: '2进制', value: 2 },
  { label: '8进制', value: 8 },
  { label: '10进制', value: 10 },
  { label: '16进制', value: 16 },
  { label: '26进制', value: 26 },
  { label: '32进制', value: 32 },
  { label: '36进制', value: 36 },
]

const input = ref('')
const convertValue = computed(() => {
  return [
    { radix: '2进制', value: convert(2), note: '' },
    { radix: '4进制', value: convert(4), note: '' },
    { radix: '8进制', value: convert(8), note: '' },
    { radix: '10进制', value: convert(10), note: '' },
    { radix: '16进制', value: convert(16), note: '' },
    { radix: '26进制', value: convert(26), note: '小写字母' },
    { radix: '32进制', value: convert(32), note: '数字 + 大写字母' },
    { radix: '36进制', value: convert(36), note: '数字 + 小写字母' },
  ]
})
function convert(radix: number) {
  return parseInt(input.value, hex.value).toString(radix)
}
</script>

<template>
  <div class="mb-8 text-3xl font-bold">{{ $route.meta.title }}</div>
  <NInputGroup class="mb-8">
    <NSelect v-model:value="hex" class="w-32" :options="hexOptions" />
    <NInput v-model:value="input" />
  </NInputGroup>

  <NTable v-if="input" :bordered="false">
    <thead>
      <tr>
        <th width="50">进制</th>
        <th>值</th>
        <th width="120">备注</th>
        <th width="80">操作</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in convertValue" :key="item.radix">
        <td>{{ item.radix }}</td>
        <td class="max-w-xs truncate">
          {{ item.value }}
        </td>
        <td>{{ item.note }}</td>
        <td>
          <NButton size="small" secondary type="info" @click="copyText(item.value)">复制</NButton>
        </td>
      </tr>
    </tbody>
  </NTable>
</template>
