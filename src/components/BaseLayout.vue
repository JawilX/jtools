<script setup lang="ts">
import { useMessage } from 'naive-ui'
import BaseHeader from '@/components/BaseHeader.vue'

window.$message = useMessage()
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <BaseHeader />

    <slot></slot>
  </div>
</template>
