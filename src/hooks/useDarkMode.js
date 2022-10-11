import { createContext, useContext, useEffect, useState } from 'react'

export const DarkModeContext = createContext({
  mode: 'light',
  handleDarkMode: undefined
})

const DarkMode = ({ children }) => {
  const [mode, setMode] = useState('light')
  const declareDarkMode = () => {
    document.documentElement.classList.add('dark')
  }

  const handleDarkMode = () => {
    if (mode === 'dark') setMode('light')
    else setMode('dark')
  }

  useEffect(() => {
    const updateDarkMode = () => {
      if (mode === 'light') {
        document.documentElement.classList.remove('dark')
        return
      }

      document.documentElement.classList.add('dark')
    }

    updateDarkMode()
  }, [setMode, mode])

  declareDarkMode()
  return (
    <DarkModeContext.Provider value={{ mode, handleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  )
}

export default DarkMode

export const useDarkMode = () => useContext(DarkModeContext)
