import Image from 'next/image'
import {Suspense} from 'react'
import CodeEditor from '@/components/CodeEditor'
import {firestore} from '@/lib/firebaseConfig'
import {doc, getDoc} from 'firebase/firestore'
import NoResponse from '@/components/NoResponse'

export interface CodeSnippet {
  code: string
  language: string
}

async function getCodeSnippet(docId: string): Promise<CodeSnippet | null> {
  const docRef = doc(firestore, 'codeSnippets', docId)
  const docSnap = await getDoc(docRef)

  if (docSnap.exists()) {
    return docSnap.data() as CodeSnippet
  } else {
    console.log('No such document!')
    return null
  }
}

export default async function Page({params}: {params: {snippetId: string}}) {
  const snippet = await getCodeSnippet(params.snippetId)

  return (
    <section className='view-code'>
      <div className='container-logo'>
        <Image
          priority
          src='NoteCodeLogo.svg'
          alt='notecode-logo'
          width={100}
          height={50}
        />
      </div>
      <h2>Where Great Minds Code Together</h2>
      <Suspense fallback={<div>Loading...</div>}>
        {snippet ? (
          <CodeEditor code={snippet.code} language={snippet.language} />
        ) : (
          <NoResponse />
        )}
      </Suspense>
    </section>
  )
}
