import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

function Counter({ maxNumber = Infinity, currentNumber = 0 }) {
  const [count, setCount] = useState(currentNumber)

  const increaseCount = () => {
    if (count < maxNumber) setCount(count + 1)
  }

  const decreaseCount = () => {
    if (count > 0) setCount(count - 1)
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
