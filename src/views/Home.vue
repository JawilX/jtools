<script setup lang="ts">
import BaseHeader from '@/components/BaseHeader.vue'
import BaseFooter from '@/components/BaseFooter.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <BaseHeader />

    <div class="flex-1">Content</div>

    <BaseFooter />
  </div>
</template>
