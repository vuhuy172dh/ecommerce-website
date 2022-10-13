import { useState } from 'react'
import Button from '../button'
import Delivering from '../delivering'
import Delivered from '../delivered'
import Canceled from '../canceled'

function Purchase() {
  const [click, setClick] = useState(0)

  const handleDeliveringClick = () => {
    setClick(0)
  }

  const handleDeliveredClick = () => {
    setClick(1)
  }

  const handleCanceledClick = () => {
    setClick(2)
  }

  return (
    <div className="w-full laptop:px-6">
      {/*Purchase navigation*/}
      <nav className="w-full bg-border_grey rounded-lg mb-4 mt-2 laptop:mt-0">
        <ul className="flex w-full justify-start tablet:justify-center items-center overflow-auto no-scrollbar gap-4">
          <li>
            <Button Color="ghost" onClick={handleDeliveringClick}>
              Delivering
            </Button>
          </li>
          <li>
            <Button Color="ghost" onClick={handleDeliveredClick}>
              Delivered
            </Button>
          </li>
          <li>
            <Button Color="ghost" onClick={handleCanceledClick}>
              Canceled
            </Button>
          </li>
        </ul>
      </nav>

      {/*Puchase container*/}
      <section className="w-full"></section>
    </div>
  )
}

export default Purchase
