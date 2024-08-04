import CodeEditor from '@/components/CodeEditor'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='hero'>
      <div className='hero-background'>
        <Image
          priority
          src='Hero-Background-notecode.svg'
          alt='hero-background'
          fill
          style={{objectFit: 'cover'}}
        />
      </div>
      <div className='container'>
        <div className='container-logo'>
          <Image
            priority
            src='NoteCodeLogo.svg'
            alt='notecode-logo'
            width={100}
            height={50}
          />
        </div>
        <h2>Create & Share</h2>
        <h1>Your Code easily</h1>
      </div>
      <CodeEditor />
    </main>
  )
}
