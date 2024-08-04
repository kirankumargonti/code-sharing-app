import {useState, useEffect} from 'react'

interface TruncateOptions {
  text: string
  maxLength: number
  suffix?: string
}

export const useTruncateText = ({
  text,
  maxLength ,
  suffix = '...',
}: TruncateOptions) => {
  const [truncatedText, setTruncatedText] = useState<string>(text)

  useEffect(() => {
    if (text.length > maxLength) {
      const start = text.length - maxLength + suffix.length
      setTruncatedText(suffix + text.slice(start))
    } else {
      setTruncatedText(text)
    }
  }, [text, maxLength, suffix])

  return truncatedText
}
