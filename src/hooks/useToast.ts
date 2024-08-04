import {ToastContext, ToastContextType} from '@/contexts/ToastContext'
import {useContext} from 'react'

export const useToast = (): ToastContextType => {
  const context = useContext(ToastContext)
  if (context === undefined) {
    throw new Error('useToast must be used within a ToastProvider')
  }
  return context
}
