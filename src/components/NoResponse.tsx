'use client'

import {useRouter} from 'next/navigation'

function NoResponse() {
  const router = useRouter()

  return (
    <div className='no-snippet-found'>
      <p>No snippet found</p>
      <button onClick={() => router.push('/')}>Create One</button>
    </div>
  )
}

export default NoResponse
