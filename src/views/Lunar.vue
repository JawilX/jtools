<script setup lang="ts">
import { Solar, Lunar } from 'lunar-typescript'
import { ArrowExportLtr20Filled, ArrowExportRtl20Filled } from '@vicons/fluent'
import { useRouteQuery } from '@vueuse/router'
import dayjs from 'dayjs'

const current = ref(Date.now())

const queryDate = useRouteQuery<string>('date')
if (queryDate.value) {
  current.value = dayjs(queryDate.value, 'YYYY-MM-DD').valueOf()
}
watch(current, val => {
  queryDate.value = dayjs(val).format('YYYY-MM-DD')
})

const add = () => {
  current.value = current.value + 86400000
}
const sub = () => {
  current.value = current.value - 86400000
}

const s = computed(() => Solar.fromDate(new Date(current.value)))

const l = computed(() => Lunar.fromDate(new Date(current.value)))
</script>

<template>
  <section>
    <NH2 class="relative text-center">
      <NIcon class="cursor-pointer align-middle" @click="sub">
        <ArrowExportRtl20Filled />
      </NIcon>
      <span class="mx-2 align-middle text-base md:text-xl">
        {{
          `${s.getYear()}年${s.getMonth()}月${s.getDay()}日 星期${s.getWeekInChinese()} ${s.getXingZuo()}座`
        }}
      </span>
      <NDatePicker
        v-model:value="current"
        class="!absolute inline-block !w-52 -translate-x-[105%] opacity-0 md:!w-64"
        :input-readonly="true"
        :actions="['now']"
      />
      <NIcon class="cursor-pointer align-middle" @click="add">
        <ArrowExportLtr20Filled />
      </NIcon>
    </NH2>

    <div class="grid auto-cols-max grid-cols-4 items-center rounded-sm border">
      <div class="col-start-1 col-end-2 row-start-1 row-end-7 min-w-max border-r p-2 text-center">
        <span class="inline-block w-10 align-middle text-3xl">
          农历{{ l.getMonthInChinese() }}月{{ l.getDayInChinese() }}
        </span>
        <span class="inline-block w-6 align-middle text-gray-500">
          {{ l.getYearGan() }}{{ l.getYearZhi() }} {{ l.getYearShengXiao() }}年
          {{ l.getMonthInGanZhi() }}月 {{ l.getDayInGanZhi() }}日
        </span>
      </div>
      <div class="col-start-2 col-end-5 row-start-1 row-end-2 pl-4">
        <span class="mr-4">五行</span>
        <span class="text-gray-500">{{ l.getDayNaYin() }}</span>
      </div>
      <div class="col-start-2 col-end-5 row-start-2 row-end-3 pl-4">
        <span class="mr-4">冲煞</span>
        <span class="text-gray-500">冲{{ l.getDayChongDesc() }} 煞{{ l.getDaySha() }}</span>
      </div>
      <div class="col-start-2 col-end-5 row-start-3 row-end-4 border-b pl-4">
        <span class="mr-4 align-top">彭祖</span>
        <div class="inline-block text-gray-500">
          <div>{{ l.getPengZuGan() }}</div>
          <div>{{ l.getPengZuZhi() }}</div>
        </div>
      </div>
      <div class="col-start-2 col-end-3 row-start-4 row-end-5 pl-4">
        <div>喜神</div>
        <div class="text-gray-500">{{ l.getDayPositionXiDesc() }}</div>
      </div>
      <div class="col-start-3 col-end-4 row-start-4 row-end-5 pl-4">
        <div>福神</div>
        <div class="text-gray-500">{{ l.getDayPositionFuDesc() }}</div>
      </div>
      <div class="col-start-4 col-end-5 row-start-4 row-end-5 pl-4">
        <div>财神</div>
        <div class="text-gray-500">{{ l.getDayPositionCaiDesc() }}</div>
      </div>
      <div class="col-start-2 col-end-5 row-start-5 row-end-6 pl-4">
        <span class="mr-2 rounded-xl bg-green-600 py-[2px] px-1 text-white">宜</span>
        <span class="text-gray-500">{{ l.getDayYi().join(' ') }}</span>
      </div>
      <div class="col-start-2 col-end-5 row-start-6 row-end-7 pl-4">
        <span class="mr-2 rounded-xl bg-red-600 py-[2px] px-1 text-white">忌</span>
        <span class="text-gray-500">{{ l.getDayJi().join(' ') }}</span>
      </div>
    </div>
  </section>
</template>
