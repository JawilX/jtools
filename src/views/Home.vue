<script setup lang="ts">
const tools = [{ path: '/base64', name: 'Base64编码' }]
</script>

<template>
  <div class="grid auto-rows-min grid-cols-2 gap-4 md:grid-cols-3">
    <router-link
      v-for="(item, index) in tools"
      :key="index"
      :to="item.path"
      class="flex h-16 w-full items-center rounded border border-gray-200 border-solid bg-gray-50 p-3 text-lg"
    >
      {{ item.name }}
    </router-link>
  </div>
</template>
