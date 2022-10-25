import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

import {
  updateNumber,
  updateUserCartFirebase
} from '../../redux/features/carts/cartSlice'

function Counter({
  maxNumber = Infinity,
  currentNumber = 1,
  userUid = null,
  cart = null
}) {
  const [count, setCount] = useState(currentNumber)
  const dispatch = useDispatch()

  const increaseCount = () => {
    if (count < maxNumber) {
      setCount((count) => count + 1)
      if (userUid) {
        dispatch(updateUserCartFirebase(userUid, cart, count + 1))
      } else {
        dispatch(updateNumber({ number: count + 1, cartItem: cart }))
      }
    }
  }

  const decreaseCount = () => {
    if (count > 1) {
      setCount((count) => count - 1)
      if (userUid) {
        dispatch(updateUserCartFirebase(userUid, cart, count - 1))
      } else {
        dispatch(updateNumber({ number: count - 1, cartItem: cart }))
      }
    }
  }

  return (
    <div className="min-w-fit min-h-fit p-2 flex justify-center items-center gap-5 rounded-xl bg-light_grey dark:bg-dark_secondary border-border_grey dark:border-dark_secondary shadow-sm shadow-gray-600/50 dark:shadow-gray-200/40">
      <div className="w-6 h-6 flex justify-center items-center hover:bg-border_dark dark:hover:bg-secondary rounded-full cursor-pointer">
        <FontAwesomeIcon
          icon={faMinus}
          className="m-auto"
          onClick={decreaseCount}
        />
      </div>
      <div className="">{count}</div>
      <div className="w-6 h-6 flex justify-center items-center hover:bg-border_dark dark:hover:bg-secondary rounded-full cursor-pointer">
        <FontAwesomeIcon
          icon={faPlus}
          className="m-auto"
          onClick={increaseCount}
        />
      </div>
    </div>
  )
}

export default Counter
