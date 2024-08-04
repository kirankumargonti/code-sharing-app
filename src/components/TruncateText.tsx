import {useTruncateText} from '@/hooks/useTruncateText'

export default function TruncateText({
  text,
  maxLength = 21,
}: {
  text: string
  maxLength?: number
}) {
  const truncatedText = useTruncateText({text: text, maxLength: maxLength})
  return <>{truncatedText}</>
}
