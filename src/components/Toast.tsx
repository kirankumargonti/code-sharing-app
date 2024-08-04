import React, {useState, useEffect} from 'react'
import '@/styles/toast.scss'

interface ToastProps {
  message: string
  type: 'success' | 'failure'
  duration?: number
}

const Toast: React.FC<ToastProps> = ({message, type, duration = 3000}) => {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false)
    }, duration)

    return () => clearTimeout(timer)
  }, [duration])

  if (!visible) return null

  return <div className={`toast ${type}`}>{message}</div>
}

export default Toast
