<script setup lang="ts">
import BaseLayout from '@/components/BaseLayout.vue'
import { homeChildren } from '@/router/index'

const tools = homeChildren.filter(item => !item.meta?.hide)
</script>

<template>
  <BaseLayout>
    <div
      v-if="$route.fullPath === '/'"
      class="mx-2 grid auto-rows-auto grid-cols-2 gap-4 md:grid-cols-3"
    >
      <router-link
        v-for="(item, index) in tools"
        :key="index"
        :to="item.path"
        class="flex h-16 items-center rounded border border-solid border-gray-200 bg-gray-50 p-3 text-lg"
      >
        {{ item.meta?.title }}
      </router-link>
    </div>
    <router-view v-else />
  </BaseLayout>
</template>
