import {useCopyToClipboard} from '@/hooks/useCopyToClipboard'
import '@/styles/tooltip.scss'

interface TooltipProps {
  children: React.ReactNode
  title?: string
}

const Tooltip: React.FC<TooltipProps> = ({children, title}) => {
  const {copyToClipboard, isCopied} = useCopyToClipboard()

  return (
    <span className='tooltip-container'>
      {title && (
        <>
          <span className={`tooltip-content ${isCopied ? 'copied' : ''}`}>
            {isCopied ? 'Copied!' : 'Click to copy'}
          </span>
          <span
            onClick={(e) => {
              copyToClipboard(title || '')
            }}
            className='tooltip-text'
          >
            {children}
          </span>
        </>
      )}
    </span>
  )
}

export default Tooltip
