'use client'
import {useState} from 'react'

type CopyToClipboardHook = {
  copyToClipboard: (text: string) => Promise<void>
  isCopied: boolean
}

export const useCopyToClipboard = (): CopyToClipboardHook => {
  const [isCopied, setIsCopied] = useState(false)

  const copyToClipboard = async (text: string): Promise<void> => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text)
      } else {
        // Fallback for mobile devices
        const textArea = document.createElement('textarea')
        textArea.value = text
        document.body.appendChild(textArea)
        textArea.focus()
        textArea.select()
        document.execCommand('copy')
        document.body.removeChild(textArea)
      }
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
      setIsCopied(false)
    }
  }

  return {copyToClipboard, isCopied}
}
