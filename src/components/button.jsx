/*
Name: Button
Description: Button
Properties: 
  Size: 'medium' | 'small' (default: 'medium')
  Color: 'white' | 'secondary' | 'opaque' | 'primary' | 'ghost' (default: 'white')
  State: 'default' | 'disabled'
  IconRight: true | false (default: false)
  onClick: function,
  Custom: false | true (default: false)
  Padding: string (active when Custom={true})
*/

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { colors, sizes } from '../constant/button'

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 24 }
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
}

function Button({
  Color = 'white',
  Size = 'medium',
  State = 'default',
  IconRight = false,
  Custom = false,
  onClick = () => {},
  children = 'button',
  Padding = ''
}) {
  const [isOpen, setIsOpen] = useState(false)
  const handleOpen = () => {
    setIsOpen(!isOpen)
    onClick()
  }
  return (
    <motion.nav
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      className=" min-w-fit min-h-fit flex-1 flex relative"
    >
      <motion.button
        className={`text-body-md min-w-fit min-h-fit flex-1 flex items-center justify-center gap-4 relative ease-out duration-300 cursor-pointer rounded-lg ${
          colors[Color][State]
        } ${Custom ? Padding : sizes[Size]}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleOpen}
      >
        {children}
        {/* this is icon right */}
        {IconRight && (
          <motion.div
            variants={{ open: { rotate: 180 }, closed: { rotate: 0 } }}
          >
            <FontAwesomeIcon icon={faCaretDown} />
          </motion.div>
        )}
      </motion.button>
      {/* this is dropdown button */}
      {IconRight && (
        <motion.ul
          variants={{
            open: {
              clipPath: 'inset(0% 0% 0% 0% round 10px)',
              transition: {
                type: 'spring',
                bounce: 0,
                duration: 0.7,
                delayChildren: 0.3,
                staggerChildren: 0.05
              }
            },
            closed: {
              clipPath: 'inset(10% 50% 90% 50% round 10px)',
              transition: {
                type: 'spring',
                bounce: 0,
                duration: 0.3
              }
            }
          }}
          style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
          className={`w-full max-h-80 flex flex-col gap-10 list-none m-0 mt-2 absolute bottom-0 translate-y-full ${colors[Color][State]}`}
        >
          <motion.li variants={itemVariants}>Item 1 </motion.li>
          <motion.li variants={itemVariants}>Item 2 </motion.li>
          <motion.li variants={itemVariants}>Item 3 </motion.li>
          <motion.li variants={itemVariants}>Item 4 </motion.li>
          <motion.li variants={itemVariants}>Item 5 </motion.li>
        </motion.ul>
      )}
    </motion.nav>
  )
}

export default Button
