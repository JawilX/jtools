<script setup lang="ts">
import { useMessage } from 'naive-ui'
import BaseHeader from '@/components/BaseHeader.vue'

window.$message = useMessage()
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <BaseHeader />

    <div class="m-auto w-full max-w-3xl flex-1 py-6 px-4">
      <slot></slot>
    </div>
  </div>
</template>
