<script setup lang="ts">
import { toolList } from '@/router/index'

const tools = toolList.filter(item => !item.meta?.hide)
</script>

<template>
  <div class="grid grid-cols-2 gap-4 md:grid-cols-3">
    <RouterLink
      v-for="(item, index) in tools"
      :key="index"
      :to="item.path"
      class="h-20 flex items-center border border-black/5 rounded border-solid p-5 text-lg shadow shadow-slate-200 transition-all duration-200 hover:border-black/10 hover:shadow-lg"
    >
      {{ item.meta?.title }}
    </RouterLink>
  </div>
</template>
