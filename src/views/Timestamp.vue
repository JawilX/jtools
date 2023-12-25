<script setup lang="ts">
import dayjs from 'dayjs'
import { copyText } from '@/utils'

const { timestamp, pause, resume } = useTimestamp({ controls: true })
const isPause = ref(false)

const inputTimestamp = ref('')
inputTimestamp.value = String(timestamp.value)
const convertTimestamp = computed(() =>
  dayjs(Number.parseInt(inputTimestamp.value)).format('YYYY-MM-DD HH:mm:ss'),
)

const inputDate = ref('')
inputDate.value = dayjs(timestamp.value).format('YYYY-MM-DD HH:mm:ss')
const convertDate = computed(() => dayjs(inputDate.value).format('x'))

const inputSecond = ref('')
const convertSecond = computed(() => {
  const value = Number.parseInt(inputSecond.value)
  if (Number.isNaN(value))
    return ''
  let result = '结算结果：'
  const day = Math.floor(value / 86400)
  const hour = Math.floor((value % 86400) / 3600)
  const minute = Math.floor((value % 3600) / 60)
  const second = value % 60
  if (day > 0)
    result += `${day}天 `
  if (hour > 0)
    result += `${hour}小时 `
  if (minute > 0)
    result += `${minute}分钟 `
  if (second > 0)
    result += `${second}秒 `
  return result
})
</script>

<template>
  <section>
    <NSpace align="center">
      当前时间：
      <span class="inline-block w-40 text-xl">{{ timestamp }}</span>
      <span class="pr-6">毫秒</span>
      <NButton v-if="!isPause" text type="warning" @click="pause(), (isPause = true)">
        暂停
      </NButton>
      <NButton v-if="isPause" text type="primary" @click="resume(), (isPause = false)">
        启动
      </NButton>
      <NButton text type="info" @click="copyText(timestamp)">
        复制
      </NButton>
    </NSpace>

    <BaseTitle class="my-6" />
    <NSpace align="center">
      <NInputGroup>
        <NInput v-model:value="inputTimestamp" class="flex-1" clearable placeholder="时间戳" />
        <NInputGroupLabel class="">
          毫秒
        </NInputGroupLabel>
      </NInputGroup>
      <span class="px-6">=></span>
      <NInputGroup>
        <NInput
          v-model:value="convertTimestamp"
          class="flex-1"
          placeholder="时间"
          @click="e => (e.target as HTMLInputElement).select()"
        />
      </NInputGroup>
    </NSpace>

    <BaseTitle class="!mt-12" text="获取时间戳" />
    <NSpace align="center">
      <NInput v-model:value="inputDate" clearable placeholder="时间" />
    </NSpace>
    <span class="my-4 ml-24 inline-block rotate-90">=></span>
    <NSpace align="center">
      <NInputGroup>
        <NInput
          v-model:value="convertDate"
          class="flex-1"
          placeholder="时间戳"
          @click="e => (e.target as HTMLInputElement).select()"
        />
        <NInputGroupLabel>毫秒</NInputGroupLabel>
      </NInputGroup>
    </NSpace>

    <BaseTitle class="!mt-12" text="秒转天、小时、分钟、秒" />
    <NInputGroup class="w-[231px]">
      <NInput v-model:value="inputSecond" clearable />
      <NInputGroupLabel class="">
        秒
      </NInputGroupLabel>
    </NInputGroup>
    <div class="p-4">
      {{ convertSecond }}
    </div>

    <BaseTitle class="!mt-48" text="什么是Unix时间戳" />
    <div class="leading-6">
      Unix时间戳（Unix时间/POSIX时间）是自1970年1月1日（UTC / GMT午夜）以来经过的秒数。
      此页面上的转换器将以秒（10位数字）和毫秒（13位数字）为单位的时间戳转换为可读的日期。
    </div>
    <NTable :bordered="false">
      <thead>
        <th>单位</th>
        <th>数量</th>
      </thead>
      <tbody>
        <tr>
          <td>1分钟</td>
          <td>60</td>
        </tr>
        <tr>
          <td>1小时</td>
          <td>3600</td>
        </tr>
        <tr>
          <td>1天</td>
          <td>86400</td>
        </tr>
        <tr>
          <td>1周（星期）</td>
          <td>604800</td>
        </tr>
        <tr>
          <td>1个月（30.44天）</td>
          <td>2629743</td>
        </tr>
        <tr>
          <td>1年（365.24天）</td>
          <td>31556926</td>
        </tr>
      </tbody>
    </NTable>
  </section>
</template>
