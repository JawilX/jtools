<script setup lang="ts">
import { LogoGithub } from '@vicons/carbon'
</script>

<template>
  <div class="w-full shadow-sm shadow-slate-200">
    <div class="m-auto flex h-12 max-w-5xl items-center px-4">
      <RouterLink class="cursor-pointer text-xl" to="/" title="JTools">
        <span>JTools</span>
      </RouterLink>
      <span class="flex-1"></span>
      <a
        class="cursor-pointer"
        href="https://github.com/JawilX/jtools"
        target="_blank"
        title="GitHub"
      >
        <NIcon size="24"><LogoGithub /></NIcon>
      </a>
    </div>
  </div>
</template>
