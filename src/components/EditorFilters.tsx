import {memo, useReducer} from 'react'
import Image from 'next/image'
import {languageOptions, themOptions} from '@/lib/constants'
import SelectComponent from './SelectComponent'
import {EditorStateProps} from './CodeEditor'
import {firestore} from '@/lib/firebaseConfig'
import {addDoc, collection} from 'firebase/firestore'
import TruncateText from './TruncateText'
import Tooltip from './Tooltip'
import {useToast} from '@/hooks/useToast'

interface EditorFiltersProps {
  onLanguageChange: (language: string) => void
  onThemeChange: (theme: string) => void
  editorState: EditorStateProps
}

export interface SnippetResponseProps {
  loading: boolean
  link: string
}

function EditorFilters({
  onLanguageChange,
  onThemeChange,
  editorState,
}: EditorFiltersProps) {
  const {showToast} = useToast()
  const [snippetResponse, setSnippetResponse] = useReducer(
    (
      prev: SnippetResponseProps,
      next: Partial<SnippetResponseProps>
    ): SnippetResponseProps => {
      return {...prev, ...next}
    },
    {loading: false, link: ''}
  )

  async function addSnippet() {
    setSnippetResponse({loading: true})
    try {
      const snippetDetails = {
        language: editorState?.language,
        code: editorState?.value,
      }
      const response = await addDoc(
        collection(firestore, 'codeSnippets'),
        snippetDetails
      )
      const documentId = response.id
      if (documentId) {
        setSnippetResponse({link: documentId})
        showToast('Code snippet created', 'success')
      }
    } catch (error) {
      console.error('Error adding document: ', error)
    } finally {
      setSnippetResponse({loading: false})
    }
  }

  return (
    <div className='editor-filters'>
      <div className='editor-filters-container'>
        <SelectComponent
          options={languageOptions}
          selectedValue={editorState?.language}
          onSelectChange={onLanguageChange}
        />
        <SelectComponent
          options={themOptions}
          selectedValue={editorState?.theme}
          onSelectChange={onThemeChange}
        />
      </div>
      <div className='editor-filters-actions'>
        {snippetResponse?.link && (
          <Tooltip title={`${window.location.origin}/${snippetResponse?.link}`}>
            <div className='link'>
              <div className='link-image'>
                <Image
                  src='link.svg'
                  alt='link-icon'
                  fill
                  style={{objectFit: 'cover'}}
                />
              </div>
              <p>
                <TruncateText
                  maxLength={24}
                  text={`${window.location.origin}/${snippetResponse?.link}`}
                />
              </p>
              <div className='link-image'>
                <Image
                  src='copy-svgrepo-com.svg'
                  alt='copy-icon'
                  fill
                  style={{objectFit: 'cover'}}
                />
              </div>
              {/*  */}
            </div>
          </Tooltip>
        )}
        <button
          className={`${snippetResponse.loading && 'disable-btn'}`}
          onClick={addSnippet}
          disabled={snippetResponse.loading}
        >
          <div className='button-icon'>
            <Image
              src='Share.svg'
              alt='share-icon'
              fill
              style={{objectFit: 'cover'}}
            />
          </div>
          Share
        </button>
      </div>
    </div>
  )
}

export default memo(EditorFilters)
