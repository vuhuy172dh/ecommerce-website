import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

const modes = {
  light: {
    icon: faSun,
    style: 'bg-border_dark text-dark_primary'
  },
  dark: {
    icon: faMoon,
    style: 'bg-primary text-light_grey'
  }
}

function DarkModeButton() {
  const [mode, setMode] = useState(true)
  const handleMode = () => {
    setMode(!mode)
  }

  console.log(mode)
  return (
    <AnimatePresence mode="wait">
      <motion.div
        className={`fixed z-50 top-2 left-[calc(5%-20px)] w-10 h-10 flex justify-center items-center rounded-xl ${
          mode ? modes.light.style : modes.dark.style
        } cursor-pointer`}
        key={mode}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={handleMode}
      >
        <FontAwesomeIcon icon={mode ? modes.light.icon : modes.dark.icon} />
      </motion.div>
    </AnimatePresence>
  )
}

export default DarkModeButton
