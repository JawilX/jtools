import type { UploadFileInfo } from 'naive-ui'
import { toBase64 } from '@/utils'

export enum Tab {
  STRING = 'string',
  FILE = 'file',
}

export enum Format {
  DATA_URL = 'dataUrl',
  CSS = 'css',
  HTML = 'html',
}

const message = getDiscreteApi().message

const tab = ref<Tab>(Tab.STRING)

const source = ref('')
const encode = ref('')

const fileEncode = reactive({
  dataUrl: '',
  css: '',
  html: '',
})
const fileList = ref<UploadFileInfo[]>([])
const fileEncodeFormat = ref<Format>(Format.DATA_URL)

export const useBase64Store = defineStore('base64', () => {
  function onEncodeString() {
    encode.value = window.btoa(source.value)
  }
  function onDecodeString() {
    try {
      source.value = window.atob(encode.value)
    }
    catch (e) {
      message.error('解码失败，请输入正确的格式')
    }
  }

  async function handleFileChange(options: { file: UploadFileInfo, fileList: UploadFileInfo[] }) {
    fileList.value = options.fileList.slice(-1)

    fileEncode.dataUrl = await toBase64(options.file.file)
    fileEncode.css = `div.image {\n\twidth: 212px;\n\theight: 210px;\n\tbackground-image: url(${fileEncode.dataUrl})`
    fileEncode.html = `<img width="212" height="210" src="${fileEncode.dataUrl}">`
  }

  function clear() {
    source.value = encode.value = ''
    fileEncode.dataUrl = fileEncode.css = fileEncode.html = ''
    fileList.value = []
  }

  return {
    tab,
    source,
    encode,
    onEncodeString,
    onDecodeString,
    fileEncode,
    fileList,
    fileEncodeFormat,
    handleFileChange,
    clear,
  }
})
