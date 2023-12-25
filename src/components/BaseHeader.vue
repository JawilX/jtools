<script setup lang="ts">
import LogoGithub from '@vicons/carbon/LogoGithub'
</script>

<template>
  <div class="w-full shadow-slate-200 shadow-sm">
    <div class="m-auto h-12 max-w-5xl flex items-center px-4">
      <RouterLink class="cursor-pointer text-xl" to="/" title="JTools">
        <span>JTools</span>
      </RouterLink>
      <span class="flex-1" />
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
