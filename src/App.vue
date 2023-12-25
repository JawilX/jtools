<script setup lang="ts">
import { dateZhCN, zhCN } from 'naive-ui'
</script>

<template>
  <NConfigProvider :locale="zhCN" :date-locale="dateZhCN" :inline-theme-disabled="true">
    <NMessageProvider>
      <BaseLayout>
        <RouterView v-slot="{ Component, route }">
          <Transition :name="route.meta.transition">
            <Component
              :is="Component"
              :key="route.path"
              class="absolute left-1/2 top-12 max-w-3xl w-full flex-1 px-4 py-6 -translate-x-1/2"
            />
          </Transition>
        </RouterView>
      </BaseLayout>
    </NMessageProvider>
  </NConfigProvider>
</template>

<style>
body {
  font-family: 'SF Pro SC', 'SF Pro Text', 'SF Pro Icons', 'PingFang SC',
    'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
}

.slide-left-enter-active,
.slide-right-enter-active,
.slide-left-leave-active,
.slide-right-leave-active {
  transition: all 0.5s ease-in-out !important;
}

.slide-left-enter-from {
  transform: translateX(150%) !important;
}
.slide-left-leave-to {
  transform: translateX(-150%) !important;
}

.slide-right-enter-from {
  transform: translateX(-150%) !important;
}
.slide-right-leave-to {
  transform: translateX(150%) !important;
}
</style>
