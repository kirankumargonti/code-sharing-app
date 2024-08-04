'use client'

import '@/styles/error.scss'
export default function Error({
  error,
  reset,
}: {
  error: Error & {digest?: string}
  reset: () => void
}) {
  return (
    <div className='error-container'>
      <div className='error-card'>
        <h1>Oops! Something went wrong</h1>
        <p className='error-message'>
          I apologize for the inconvenience. An error has occurred.
        </p>
        <button onClick={reset}>
          Try again
        </button>
      </div>
    </div>
  )
}
