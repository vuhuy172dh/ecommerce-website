import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useScrollPosition from '../hooks/useScrollPosition'

function CartFloatButton() {
  const scrollY = useScrollPosition()
  return (
    <div
      className={`fixed top-2 right-[calc(5%-20px)] w-10 h-10 bg-primary dark:bg-border_dark shadow-lg shadow-gray-600/40 justify-center items-center rounded-full hidden tablet:flex ${
        scrollY === 0 ? '-translate-y-[calc(100%+1rem)]' : 'translate-y-0'
      } transition-all duration-300 cursor-pointer z-40`}
    >
      <FontAwesomeIcon
        icon={faShoppingCart}
        className="text-white text-h5 dark:text-secondary"
      />
    </div>
  )
}

export default CartFloatButton
