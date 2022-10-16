import { createContext, useContext, useEffect, useState } from 'react'

export const DarkModeContext = createContext({
  mode: 'light',
  handleDarkMode: undefined
})

const DarkMode = ({ children }) => {
  const [mode, setMode] = useState('light')

  const handleDarkMode = () => {
    if (mode === 'dark') {
      setMode('light')
      localStorage.theme = 'light'
    } else {
      setMode('dark')
      localStorage.theme = 'dark'
    }
  }

  useEffect(() => {
    const updateDarkMode = () => {
      if (
        localStorage.theme === 'dark' ||
        (!('theme' in localStorage) &&
          window.matchMedia('(prefers-color-scheme: dark)').matches)
      ) {
        document.documentElement.classList.add('dark')
        return
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
    updateDarkMode()
    if (document.documentElement.classList.contains('dark')) {
      setMode('dark')
    } else {
      setMode('light')
    }
  }, [setMode, mode])

  return (
    <DarkModeContext.Provider value={{ mode, handleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  )
}

export default DarkMode

export const useDarkMode = () => useContext(DarkModeContext)
