<script setup lang="ts">
import { ref, reactive } from 'vue'
import type { UploadFileInfo } from 'naive-ui'
import {
  NTabs,
  NTabPane,
  NInput,
  NButton,
  NSpace,
  NUpload,
  NRadioGroup,
  NRadioButton,
} from 'naive-ui'

import { toBase64, copyText } from '@/utils/index'

const source = ref('')
const encode = ref('')

const fileEncode = reactive({
  dataUrl: '',
  css: '',
  html: '',
})
const fileList = ref([] as UploadFileInfo[])
async function handleFileChange(options: { file: UploadFileInfo; fileList: UploadFileInfo[] }) {
  fileList.value = options.fileList.slice(-1)

  fileEncode.dataUrl = await toBase64(options.file.file)
  fileEncode.css = `div.image {\n\twidth: 212px;\n\theight: 210px;\n\tbackground-image: url(${fileEncode.dataUrl})`
  fileEncode.html = `<img width="212" height="210" src="${fileEncode.dataUrl}">`
}

type Format = 'dataUrl' | 'css' | 'html'
const fileEncodeFormat = ref('dataUrl' as Format)

function clear() {
  fileEncode.dataUrl = fileEncode.css = fileEncode.html = ''
  fileList.value = []
}
</script>

<template>
  <NTabs type="segment">
    <NTabPane name="string" tab="字符 base64">
      <NInput
        v-model:value="source"
        type="textarea"
        :rows="10"
        placeholder="请输入需要转码的字符串"
      />
      <NSpace class="py-2" justify="center">
        <NButton secondary type="info" @click="encode = window.btoa(source)">编码</NButton>
        <NButton secondary type="info" @click="source = window.atob(encode)">解码</NButton>
      </NSpace>
      <NInput
        v-model:value="encode"
        type="textarea"
        :rows="10"
        placeholder="请输入需要解码的字符串"
      />
    </NTabPane>

    <NTabPane name="file" tab="文件 base64">
      <NUpload :file-list="fileList" :default-upload="false" @change="handleFileChange">
        <NButton>选择文件</NButton>
      </NUpload>
      <div class="flex py-2">
        <NRadioGroup v-model:value="fileEncodeFormat">
          <NRadioButton value="dataUrl">data url</NRadioButton>
          <NRadioButton value="css">css</NRadioButton>
          <NRadioButton value="html">html</NRadioButton>
        </NRadioGroup>
        <div class="flex-1"></div>
        <NSpace>
          <NButton secondary type="info" @click="clear()">清空</NButton>
          <NButton secondary type="info" @click="copyText(fileEncode[fileEncodeFormat])">
            复制
          </NButton>
        </NSpace>
      </div>
      <NInput
        v-show="fileEncodeFormat === 'dataUrl'"
        v-model:value="fileEncode.dataUrl"
        type="textarea"
        :rows="20"
        placeholder=""
      />
      <NInput
        v-show="fileEncodeFormat === 'css'"
        v-model:value="fileEncode.css"
        type="textarea"
        :rows="20"
        placeholder=""
      />
      <NInput
        v-show="fileEncodeFormat === 'html'"
        v-model:value="fileEncode.html"
        type="textarea"
        :rows="20"
        placeholder=""
      />
    </NTabPane>
  </NTabs>
</template>
