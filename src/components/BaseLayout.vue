<script setup lang="ts">
import { useMessage } from 'naive-ui'
import BaseHeader from '@/components/BaseHeader.vue'
import BaseFooter from '@/components/BaseFooter.vue'

window.$message = useMessage()
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <BaseHeader />

    <div class="m-auto w-full max-w-3xl flex-1 py-6">
      <slot></slot>
    </div>

    <BaseFooter />
  </div>
</template>
