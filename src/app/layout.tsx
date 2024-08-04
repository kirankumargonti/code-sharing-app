import type {Metadata} from 'next'
import {Outfit} from 'next/font/google'
import '@/styles/globals.scss'

const outfit = Outfit({subsets: ['latin'], weight: ['600', '400']})

export const metadata: Metadata = {
  title: 'Note Code',
  description: 'Create and share code snippets easily with Note Code',
  openGraph: {
    title: 'Note Code',
    description: 'Create and share code snippets easily with Note Code',
  },
  
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={outfit.className}>{children}</body>
    </html>
  )
}
