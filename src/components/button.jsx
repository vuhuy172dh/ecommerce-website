/*
Name: Button
Description: Button
Properties: 
  Size: 'medium' | 'small' (default: 'medium')
  Color: 'white' | 'secondary' | 'opaque' | 'primary' | 'ghost' (default: 'white')
  State: 'default' | 'disabled'
  IconRight: true | false (default: false)
  onClick: function
*/

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'

const sizes = {
  medium: 'py-4 px-8',
  small: 'py-3 px-6'
}

const colors = {
  white: {
    default: 'text-dark_primary bg-white hover:bg-light_grey',
    disabled: 'text-dark_primary bg-white opacity-50'
  },
  ghost: {
    default: 'bg-transparent text-dark_primary hover:bg-border_grey',
    disabled: 'bg-transparent text-dark_primary opacity-50'
  },
  secondary: {
    default: 'bg-light_grey text-dark_primary hover:bg-border_grey',
    disabled: 'bg-light_grey text-dark_primary opacity-50'
  },
  primary: {
    default: 'bg-dark_primary text-white hover:bg-[#1e193e]',
    disabled: 'bg-dark_primary text-white opacity-50'
  },
  opaque: {
    default:
      'bg-[rgba(249,249,249,0.15)] hover:bg-[rgba(249,249,249,0.3)] text-white',
    disabled: 'bg-[rgba(249,249,249,0.15)] text-white opacity-50'
  }
}

function Button({
  Color = 'white',
  Size = 'medium',
  State = 'default',
  IconRight = false,
  Custom = false,
  onClick = () => {},
  children = 'Button',
  Padding = ''
}) {
  return (
    <motion.button
      className={`text-body-md min-w-fit min-h-fit flex-1 flex items-center justify-center gap-4 relative ease-out duration-300 cursor-pointer rounded-lg ${
        colors[Color][State]
      } ${Custom ? Padding : sizes[Size]}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
    >
      {children}
      {IconRight && <FontAwesomeIcon icon={faCaretDown} />}
    </motion.button>
  )
}

export default Button
