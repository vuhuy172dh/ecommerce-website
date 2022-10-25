import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AnimatePresence, motion } from 'framer-motion'
import { useDarkMode } from '../../hooks/useDarkMode'

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
  const { mode, handleDarkMode } = useDarkMode()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        className={`fixed z-50 top-2 left-[calc(5%-20px)] w-10 h-10 justify-center items-center rounded-xl hidden tablet:flex ${
          mode ? modes.light.style : modes.dark.style
        } cursor-pointer`}
        key={mode}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={handleDarkMode}
      >
        <FontAwesomeIcon
          icon={mode === 'light' ? modes.light.icon : modes.dark.icon}
        />
      </motion.div>
    </AnimatePresence>
  )
}

export default DarkModeButton
