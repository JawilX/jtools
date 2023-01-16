<script setup lang="ts">
import nzh from 'nzh'
import { copyText } from '@/utils'

const number = ref('')
const upper = computed(() => nzh.cn.toMoney(number.value ?? '', { outSymbol: false }))
</script>

<template>
  <section>
    <BaseTitle />
    <NInputGroup>
      <NInputGroupLabel>阿拉伯数字</NInputGroupLabel>
      <NInputNumber v-model:value="number" class="flex-1" clearable :show-button="false" />
    </NInputGroup>
    <div class="flex py-4">
      <NInputGroup class="mr-2 flex-1">
        <NInputGroupLabel>结果</NInputGroupLabel>
        <NInput v-model:value="upper" class="flex-1" />
      </NInputGroup>
      <NButton @click="copyText(upper)">复制</NButton>
    </div>
  </section>
</template>
