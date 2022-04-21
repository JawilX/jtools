<script setup lang="ts">
import { ref, computed } from 'vue'
import BaseTitle from '@/components/BaseTitle.vue'
import { NSpace, NInputGroup, NInputGroupLabel, NInput, NButton } from 'naive-ui'
import nzh from 'nzh'
import { copyText } from '@/utils'

const number = ref('')
const upper = computed(() => nzh.cn.toMoney(number.value, { outSymbol: false }))
</script>

<template>
  <BaseTitle />
  <NInputGroup class="w-96">
    <NInputGroupLabel>阿拉伯数字</NInputGroupLabel>
    <NInput v-model:value="number" class="flex-1" />
  </NInputGroup>
  <NSpace class="py-4">
    <NInputGroup class="w-96">
      <NInputGroupLabel>结果</NInputGroupLabel>
      <NInput v-model:value="upper" class="flex-1" />
    </NInputGroup>
    <NButton @click="copyText(upper)">复制</NButton>
  </NSpace>
</template>
