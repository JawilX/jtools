<script setup lang="ts">
import { copyText } from '@/utils'
import { Format, Tab, useBase64Store } from '@/stores/useBase64Store'

const base64Store = useBase64Store()
</script>

<template>
  <section>
    <NTabs v-model:value="base64Store.tab" type="segment">
      <NTabPane :name="Tab.STRING" tab="字符 base64">
        <NInput
          v-model:value="base64Store.source"
          type="textarea"
          :rows="9"
          placeholder="请输入需要转码的字符串"
        />
        <NSpace class="py-2" justify="center">
          <NButton secondary type="info" @click="base64Store.onEncodeString">
            编码
          </NButton>
          <NButton secondary type="info" @click="base64Store.onDecodeString">
            解码
          </NButton>
        </NSpace>
        <NInput
          v-model:value="base64Store.encode"
          type="textarea"
          :rows="9"
          placeholder="请输入需要解码的字符串"
        />
      </NTabPane>

      <NTabPane :name="Tab.FILE" tab="文件 base64">
        <NUpload :file-list="base64Store.fileList" :default-upload="false" @change="base64Store.handleFileChange">
          <NButton>选择文件</NButton>
        </NUpload>
        <div class="flex py-2">
          <NRadioGroup v-model:value="base64Store.fileEncodeFormat">
            <NRadioButton :value="Format.DATA_URL">
              data url
            </NRadioButton>
            <NRadioButton :value="Format.CSS">
              css
            </NRadioButton>
            <NRadioButton :value="Format.HTML">
              html
            </NRadioButton>
          </NRadioGroup>
          <div class="flex-1" />
          <NSpace>
            <NButton secondary type="info" @click="base64Store.clear">
              清空
            </NButton>
            <NButton secondary type="info" @click="copyText(base64Store.fileEncode[base64Store.fileEncodeFormat])">
              复制
            </NButton>
          </NSpace>
        </div>
        <NInput
          v-show="base64Store.fileEncodeFormat === Format.DATA_URL"
          v-model:value="base64Store.fileEncode.dataUrl"
          type="textarea"
          :rows="16"
          placeholder=""
        />
        <NInput
          v-show="base64Store.fileEncodeFormat === Format.CSS"
          v-model:value="base64Store.fileEncode.css"
          type="textarea"
          :rows="16"
          placeholder=""
        />
        <NInput
          v-show="base64Store.fileEncodeFormat === Format.HTML"
          v-model:value="base64Store.fileEncode.html"
          type="textarea"
          :rows="16"
          placeholder=""
        />
      </NTabPane>
    </NTabs>
  </section>
</template>
