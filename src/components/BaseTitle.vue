<script lang="ts" setup>
import { NH1 } from 'naive-ui'

defineProps({
  text: String,
})
</script>

<template>
  <NH2 class="mb-6">{{ text || $route.meta.title }}</NH2>
</template>
