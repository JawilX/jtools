<script setup lang="ts">
import { zhCN, dateZhCN } from 'naive-ui'
</script>

<template>
  <NConfigProvider :locale="zhCN" :date-locale="dateZhCN" :inline-theme-disabled="true">
    <NMessageProvider>
      <BaseLayout>
        <RouterView v-slot="{ Component, route }">
          <Transition :name="(route.meta.transition as string)">
            <Component
              class="absolute top-12 m-auto w-full max-w-3xl flex-1 py-6 px-4"
              :is="Component"
              :key="route.path"
            />
          </Transition>
        </RouterView>
      </BaseLayout>
    </NMessageProvider>
  </NConfigProvider>
</template>

<style>
body {
  font-family: 'SF Pro SC', 'SF Pro Text', 'SF Pro Icons', 'PingFang SC', 'Helvetica Neue',
    'Helvetica', 'Arial', sans-serif;
}

.slide-left-enter-active,
.slide-right-enter-active,
.slide-left-leave-active,
.slide-right-leave-active {
  transition: all 0.8s ease-in-out;
}

.slide-left-enter-from {
  transform: translateX(100%);
}
.slide-left-leave-to {
  transform: translateX(-100%);
}

.slide-right-enter-from {
  transform: translateX(-100%);
}
.slide-right-leave-to {
  transform: translateX(100%);
}
</style>
