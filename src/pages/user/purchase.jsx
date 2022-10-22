import { useState } from 'react'
import Button from '../../components/button'
import PurchaseItemList from '../../components/purchase/purchaseItemList'
import BlueChair from '../../assets/images/BlueChair.png'

const Purchases = [
  {
    total: 132.8,
    products: [
      {
        cartItems: {
          arrImg: [BlueChair],
          name: 'BLUE CHAIR',
          price: 87,
          description: 'Light ash wood stool.Does not require assembly.'
        },
        number: 1
      },
      {
        cartItems: {
          arrImg: [BlueChair],
          name: 'BLUE CHAIR',
          price: 87,
          description: 'Light ash wood stool.Does not require assembly.'
        },
        number: 1
      }
    ],
    shipping_method: {
      name: 'standar shipping',
      price: 0
    }
  },
  {
    total: 132.8,
    products: [
      {
        cartItems: {
          arrImg: [BlueChair],
          name: 'BLUE CHAIR',
          price: 87,
          description: 'Light ash wood stool.Does not require assembly.'
        },
        number: 1
      },
      {
        cartItems: {
          arrImg: [BlueChair],
          name: 'BLUE CHAIR',
          price: 87,
          description: 'Light ash wood stool.Does not require assembly.'
        },
        number: 1
      }
    ],
    shipping_method: {
      name: 'standar shipping',
      price: 0
    }
  }
]

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
      <nav className="w-full bg-border_grey dark:bg-secondary rounded-lg mb-4 mt-2 shadow-md shadow-gray-600/50 dark:shadow-light_grey/50 laptop:mt-0">
        <ul className="flex w-full justify-start tablet:justify-center items-center overflow-auto no-scrollbar gap-4">
          <li>
            <Button Color="ghost" onClick={handleDeliveringClick}>
              Waiting
            </Button>
          </li>
          <li>
            <Button Color="ghost" onClick={handleDeliveringClick}>
              Delivering
            </Button>
          </li>
          <li>
            <Button Color="ghost" onClick={handleDeliveredClick}>
              Completed
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
      <section className="w-full">
        <PurchaseItemList purchases={Purchases} />
      </section>
    </div>
  )
}

export default Purchase
