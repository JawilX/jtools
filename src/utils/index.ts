export function toBase64(file?: Blob | null): Promise<string> {
  return new Promise((resolve, reject) => {
    if (!file)
      return reject(new Error('no file'))
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(String(reader.result))
    reader.onerror = error => reject(error)
  })
}

export function copyText(text: string | number) {
  navigator.clipboard.writeText(String(text))
  getDiscreteApi().message.success('复制成功')
}

export function convertFileSize(size: number) {
  const unit = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
  let index = 0
  while (size > 1024) {
    size /= 1024
    index++
  }
  return `${size.toFixed(2)}${unit[index]}`
}

export function downloadFile(file: Blob, fileName: string) {
  const url = window.URL.createObjectURL(file)
  const a = document.createElement('a')
  a.href = url
  a.download = fileName
  a.click()
  window.URL.revokeObjectURL(url)
}
