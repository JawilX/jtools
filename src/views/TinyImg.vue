<script setup lang="ts">
import type { UploadFileInfo } from 'naive-ui'
import { ref, reactive } from 'vue'

import { NUpload, NUploadDragger, NIcon, NP, NText, NSpace } from 'naive-ui'
import { Add28Regular } from '@vicons/fluent'
import Compressor from 'compressorjs'
import { convertFileSize, downloadFile } from '@/utils/index'
import BaseTitle from '@/components/BaseTitle.vue'

type TableItem = {
  id: string
  name: string
  size: number
  compressedFile: File | null
  compressedSize: number
  status: string
}

const fileList = ref<UploadFileInfo[]>([])
const tableList = reactive<TableItem[]>([])

function handleBeforeUpload(options: { file: UploadFileInfo }) {
  const { file } = options
  if (!/image/.test(String(file.type))) {
    return Promise.reject(new Error('请上传图片文件'))
  }
  return Promise.resolve(true)
}

function handleChange(options: { file: UploadFileInfo }) {
  const { file } = options
  const tableItem = reactive<TableItem>({
    id: file.id,
    name: file.name,
    size: file?.file?.size || 0,
    compressedFile: null,
    compressedSize: 0,
    status: 'warning',
  })
  tableList.push(tableItem)
  new Compressor(file.file as File, {
    quality: 0.6,
    success(result: File) {
      tableItem.compressedFile = result
      tableItem.compressedSize = result.size
      tableItem.status = 'success'
    },
  })
}

function handleRemove(index: number) {
  fileList.value.splice(index, 1)
  tableList.splice(index, 1)
}
</script>

<template>
  <BaseTitle />
  <NUpload
    v-model:file-list="fileList"
    :show-file-list="false"
    accept=".jpg,.png,.jpeg,.gif"
    multiple
    @before-upload="handleBeforeUpload"
    @change="handleChange"
  >
    <NUploadDragger class="h-40 bg-white">
      <NIcon size="20" depth="3" class="mt-8">
        <Add28Regular />
      </NIcon>
      <NP>
        将文件拖到此处，或
        <NText type="info">点击上传</NText>
      </NP>
    </NUploadDragger>
  </NUpload>
  <NP depth="3">
    *只能上传
    <NText type="info">jpg</NText>
    /
    <NText type="info">png</NText>
    /
    <NText type="info">jpeg</NText>
    /
    <NText type="info">gif</NText>
    文件，且不超过
    <NText type="info">10MB</NText>
  </NP>

  <div class="overflow-auto">
    <NTable v-if="tableList.length > 0" :bordered="false">
      <thead>
        <tr>
          <th width="180">文件名</th>
          <th width="100">压缩前</th>
          <th width="100">压缩后</th>
          <th width="100">压缩率</th>
          <th width="100">状态</th>
          <th width="120">操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in tableList" :key="item.id">
          <td>{{ item.name }}</td>
          <td>{{ convertFileSize(item.size) }}</td>
          <td>{{ convertFileSize(item.compressedSize) }}</td>
          <td class="!text-green-500">
            {{ -((1 - item.compressedSize / item.size) * 100).toFixed(2) }}%
          </td>
          <td>
            <NText :type="item.status">
              {{ item.status === 'success' ? '完成' : '处理中...' }}
            </NText>
          </td>
          <td>
            <NSpace :wrap="false">
              <NButton size="small" secondary type="error" @click="handleRemove(index)">
                删除
              </NButton>
              <NButton
                size="small"
                secondary
                type="primary"
                @click="downloadFile(item.compressedFile as Blob, item.name)"
              >
                下载
              </NButton>
            </NSpace>
          </td>
        </tr>
      </tbody>
    </NTable>
  </div>
</template>
