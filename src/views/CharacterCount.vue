<script setup lang="ts">
const input = ref('')
const info = computed(() => {
  const value = input.value
  return {
    char: value.match(/./g)?.length || 0,
    chinese: value.match(/[\u4E00-\u9FA5]/g)?.length || 0,
    word: value.match(/[a-zA-Z]+/g)?.length || 0,
    letter: value.match(/[a-zA-Z]/g)?.length || 0,
    number: value.match(/\d/g)?.length || 0,
    others: value.match(/[^\u4E00-\u9FA5\w]/g)?.length || 0,
  }
})
</script>

<template>
  <section>
    <BaseTitle />
    <NInput v-model:value="input" type="textarea" :rows="15" placeholder="" />
    <div class="my-4 leading-10">
      <span class="font-bold">总计：</span>
      <span class="ml-2 rounded-l bg-black px-2 py-1 text-white">{{ info.char }}</span>
      <span class="rounded-r bg-orange-300 p-2">个字符</span>
    </div>
    <div class="mt-4 leading-10">
      <span class="font-bold">包含：</span>
      <span class="ml-2 rounded-l bg-gray-100 px-2 py-1">{{ info.chinese }}</span>
      <span class="rounded-r bg-red-50 p-2 text-red-400">个汉字</span>
      <span class="ml-2 rounded-l bg-gray-100 px-2 py-1">{{ info.word }}</span>
      <span class="rounded-r bg-green-50 p-2 text-green-500">个单词</span>
      <span class="ml-2 rounded-l bg-gray-100 px-2 py-1">{{ info.letter }}</span>
      <span class="rounded-r bg-yellow-50 p-2 text-yellow-500">个字母</span>
      <span class="ml-2 rounded-l bg-gray-100 px-2 py-1">{{ info.number }}</span>
      <span class="rounded-r bg-blue-50 p-2 text-blue-400">个数字</span>
      <span class="ml-2 rounded-l bg-gray-100 px-2 py-1">{{ info.others }}</span>
      <span class="rounded-r bg-gray-50 p-2 text-gray-500">个其他字符</span>
    </div>
  </section>
</template>
