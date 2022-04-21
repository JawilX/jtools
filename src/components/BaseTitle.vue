<script lang="ts" setup>
defineProps({
  text: String,
})
</script>

<template>
  <div class="mb-6 text-2xl font-bold">{{ text || $route.meta.title }}</div>
</template>
