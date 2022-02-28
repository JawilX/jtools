export function toBase64(file?: Blob | null): Promise<string> {
  return new Promise((resolve, reject) => {
    if (!file) return reject('')
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(String(reader.result))
    reader.onerror = error => reject(error)
  })
}

export function copyText(text: string) {
  navigator.clipboard.writeText(text)
  window.$message.success('复制成功')
}
