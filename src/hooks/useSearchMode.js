import { createContext, useContext, useState } from 'react'

export const SearchModeContext = createContext()

export default function SearchMode({ children }) {
  const [mode, setMode] = useState(false)

  const handleSearchMode = () => {
    setMode(!mode)
    return
  }

  return (
    <SearchModeContext.Provider value={{ mode, handleSearchMode }}>
      {children}
    </SearchModeContext.Provider>
  )
}

export const useSearchMode = () => useContext(SearchModeContext)
