<script setup lang="ts">
import { NConfigProvider, NMessageProvider, zhCN, dateZhCN } from 'naive-ui'
</script>

<template>
  <NConfigProvider :locale="zhCN" :date-locale="dateZhCN" :inline-theme-disabled="true">
    <NMessageProvider>
      <router-view />
    </NMessageProvider>
  </NConfigProvider>
</template>

<style>
body {
  font-family: 'SF Pro SC', 'SF Pro Text', 'SF Pro Icons', 'PingFang SC', 'Helvetica Neue',
    'Helvetica', 'Arial', sans-serif;
}
</style>
