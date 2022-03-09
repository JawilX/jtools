<script setup lang="ts">
import { routes } from '@/router/index'
const tools = routes.filter(item => !item.meta?.hide)
</script>

<template>
  <div class="mx-2 grid auto-rows-auto grid-cols-2 gap-4 md:grid-cols-3">
    <router-link
      v-for="(item, index) in tools"
      :key="index"
      :to="item.path"
      class="flex h-16 items-center rounded border border-solid border-gray-200 bg-gray-50 p-3 text-lg"
    >
      {{ item.meta?.title }}
    </router-link>
  </div>
</template>
