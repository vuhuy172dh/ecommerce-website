/*
Name: ButtonIcon
Description: Icon button
Properties: 
  Icon: 'search'|'cart'|'menu'|'user'|'facebook'|'linkedin'|'instagram'|'skype'|'twitter'|'pinterest'
  Color: 'light'|'dark' (default: 'light')
  onClick: function
*/

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars,
  faCartShopping,
  faCircleUser,
  faSearch,
  faTrash,
  faBarsProgress,
  faTruck,
  faCircleCheck,
  faRectangleXmark
} from '@fortawesome/free-solid-svg-icons'
import {
  faFacebook,
  faLinkedin,
  faInstagram,
  faSkype,
  faTwitter,
  faPinterest
} from '@fortawesome/free-brands-svg-icons'

const icons = {
  search: faSearch,
  cart: faCartShopping,
  menu: faBars,
  user: faCircleUser,
  facebook: faFacebook,
  linkedin: faLinkedin,
  instagram: faInstagram,
  skype: faSkype,
  twitter: faTwitter,
  pinterest: faPinterest,
  trash: faTrash,
  waiting: faBarsProgress,
  delivering: faTruck,
  completed: faCircleCheck,
  canceled: faRectangleXmark
}

const colors = {
  light: 'text-dark_primary hover:bg-border_grey',
  dark: 'text-white hover:bg-primary',
  red: 'text-red-500 hover:border hover:border-red-500 hover:rounded-full'
}

function ButtonIcon({ Icon, Color = 'light', onClick }) {
  return (
    <div
      className={`min-w-[2.5rem] min-h-[2.5rem] p-2 w-full h-full flex-1 flex justify-center items-center cursor-pointer ${colors[Color]} rounded-full`}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={icons[Icon]} />
    </div>
  )
}

export default ButtonIcon
