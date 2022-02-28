<script setup lang="ts">
import { NConfigProvider, NMessageProvider } from 'naive-ui'
import BaseLayout from './components/BaseLayout.vue'
</script>

<template>
  <NConfigProvider>
    <NMessageProvider>
      <BaseLayout />
    </NMessageProvider>
  </NConfigProvider>
</template>

<style>
html {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
    'Open Sans', 'Helvetica Neue', sans-serif;
}
</style>
