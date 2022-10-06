/*
Description: This hook is used for control navbar mode
*/

import { createContext, useContext, useState } from 'react'

export const NavModeContext = createContext()

export default function NavMode({ children }) {
  const [mode, setMode] = useState(false)

  const handleMode = () => {
    setMode(!mode)
    return
  }

  return (
    <NavModeContext.Provider value={{ mode, handleMode }}>
      {children}
    </NavModeContext.Provider>
  )
}

export const useNavMode = () => useContext(NavModeContext)
