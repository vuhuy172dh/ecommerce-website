import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars,
  faCartShopping,
  faCircleUser,
  faSearch
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
  pinterest: faPinterest
}

function ButtonIcon({ Icon, onClick }) {
  return (
    <div
      className="min-w-[2.5rem] min-h-[2.5rem] p-2 w-full h-full flex-1 flex justify-center items-center cursor-pointer hover:bg-border_grey rounded-full"
      onClick={onClick}
    >
      <FontAwesomeIcon icon={icons[Icon]} />
    </div>
  )
}

export default ButtonIcon
