import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars,
  faCartShopping,
  faCircleUser,
  faSearch
} from '@fortawesome/free-solid-svg-icons'

const icons = {
  search: faSearch,
  cart: faCartShopping,
  menu: faBars,
  user: faCircleUser
}

function ButtonIcon({ Icon, onClick }) {
  return (
    <div
      className="w-10 h-10 flex justify-center items-center cursor-pointer hover:bg-border_grey rounded-full"
      onClick={onClick}
    >
      <FontAwesomeIcon icon={icons[Icon]} />
    </div>
  )
}

export default ButtonIcon
