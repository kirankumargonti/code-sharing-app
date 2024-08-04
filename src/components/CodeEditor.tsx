'use client'

import {useCallback, useInsertionEffect, useReducer, useRef} from 'react'
import {Editor} from '@monaco-editor/react'
import {defaultCodeSnippets} from '@/lib/constants'
import {ToastProvider} from '@/contexts/ToastContext'
import EditorFilters from './EditorFilters'
import '@/styles/codeEditor.scss'
import {useTheme} from '@/hooks/useTheme'

interface IEditorInstance {
  setValue(value: string): void
  getValue(): string
  focus(): void
}

export interface EditorStateProps {
  language: string
  value: string
  theme: string
}

export default function CodeEditor({
  code,
  language,
}: {
  code?: string
  language?: string
}) {
  const editorRef = useRef<IEditorInstance | null>(null)
  const isReadOnly = Boolean(code)
  const {theme, toggleTheme} = useTheme()

  const [editorState, setEditorState] = useReducer(
    (
      prev: EditorStateProps,
      next: Partial<EditorStateProps>
    ): EditorStateProps => {
      return {...prev, ...next}
    },
    {
      language: language || 'html',
      value: code || defaultCodeSnippets['html'],
      theme: 'light',
    }
  )

  const handleEditorChange = useCallback(
    (value: string | undefined, event: any) => {
      setEditorState({value: value})
    },
    []
  )

  const handleEditorDidMount = useCallback((editor: IEditorInstance) => {
    editorRef.current = editor
    editor.focus()
  }, [])

  const handleThemeChange = useCallback(
    (theme: string) => {
      setEditorState({theme})
      toggleTheme()
    },
    [toggleTheme]
  )

  const handleLanguageChange = useCallback((language: string) => {
    setEditorState({language, value: defaultCodeSnippets[language]})
  }, [])

  useInsertionEffect(() => {
    if (typeof window !== 'undefined') {
      setEditorState({theme})
    }
  }, [theme])

  return (
    <div
      className={`code-editor-wrapper ${
        editorState?.theme === 'vs-dark' ? 'code-editor-dark-color' : ''
      }`}
    >
      <Editor
        height='95%'
        value={editorState?.value}
        language={editorState?.language}
        onChange={handleEditorChange}
        onMount={handleEditorDidMount}
        theme={theme}
        options={{
          readOnly: isReadOnly,
          wordWrap: 'on',
          automaticLayout: true,
          bracketPairColorization: {
            enabled: true,
            independentColorPoolPerBracketType: true,
          },
          scrollbar: {
            verticalScrollbarSize: 2,
            horizontalScrollbarSize: 2,
          },
        }}
      />
      {!isReadOnly && (
        <ToastProvider>
          <EditorFilters
            onLanguageChange={handleLanguageChange}
            onThemeChange={handleThemeChange}
            editorState={editorState}
          />
        </ToastProvider>
      )}
    </div>
  )
}
