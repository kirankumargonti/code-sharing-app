import Toast from '@/components/Toast'
import React, {createContext, useState, ReactNode} from 'react'

export interface ToastContextType {
  showToast: (
    message: string,
    type: 'success' | 'failure',
    duration?: number
  ) => void
}

interface ToastProviderProps {
  children: ReactNode
}
interface ToastProps {
  message: string
  type: 'success' | 'failure'
  duration: number
}

export const ToastContext = createContext<ToastContextType>({
  showToast: () => {},
})
export const ToastProvider: React.FC<ToastProviderProps> = ({children}) => {
  const [toast, setToast] = useState<ToastProps | null>(null)

  const showToast = (
    message: string,
    type: 'success' | 'failure',
    duration = 3000
  ) => {
    setToast({message, type, duration})
  }

  return (
    <ToastContext.Provider value={{showToast}}>
      {children}
      {toast && <Toast {...toast} />}
    </ToastContext.Provider>
  )
}
