'use client'

import {useState, useEffect, useInsertionEffect} from 'react'

type Theme = 'light' | 'vs-dark'

export function useTheme(initialTheme: Theme = 'light') {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('editorTheme') as Theme | null
      return savedTheme || initialTheme
    }
    return initialTheme
  })

  useInsertionEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('editorTheme', theme)
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'vs-dark' : 'light'))
  }

  return {theme, toggleTheme}
}
