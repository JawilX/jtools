<script setup lang="ts">
import { useMessage } from 'naive-ui'

window.$message = useMessage()
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <BaseHeader />

    <slot></slot>
  </div>
</template>
