import { useEffect, useState } from 'react'
import Button from '../../components/button'
import PurchaseItemList from '../../components/purchase/purchaseItemList'
import { useSelector, useDispatch } from 'react-redux'
import {
  getBills,
  selectBills,
  selectStatus
} from '../../redux/features/bills/billSlice'

function Purchase() {
  const [click, setClick] = useState('Waiting')
  const bills = useSelector(selectBills)
  const dispatch = useDispatch()
  const billStatus = useSelector(selectStatus)

  const handleWaitingClick = () => {
    setClick('Waiting')
    dispatch(getBills('Waiting'))
  }

  const handleDeliveringClick = () => {
    setClick('Delivering')
    dispatch(getBills('Delivering'))
  }

  const handleCompletedClick = () => {
    setClick('Completed')
    dispatch(getBills('Completed'))
  }

  const handleCanceledClick = () => {
    setClick('Canceled')
    dispatch(getBills('Canceled'))
  }

  useEffect(() => {
    dispatch(getBills('Waiting'))
  }, [])

  return (
    <div className="w-full laptop:px-6">
      {/*Purchase navigation*/}
      <nav className="w-full bg-border_grey dark:bg-secondary rounded-lg mb-4 mt-2 shadow-md shadow-gray-600/50 dark:shadow-light_grey/50 laptop:mt-0">
        <ul className="flex w-full justify-start tablet:justify-center items-center overflow-auto no-scrollbar gap-4">
          <li>
            <Button Color="ghost" onClick={handleWaitingClick}>
              Waiting
            </Button>
          </li>
          <li>
            <Button Color="ghost" onClick={handleDeliveringClick}>
              Delivering
            </Button>
          </li>
          <li>
            <Button Color="ghost" onClick={handleCompletedClick}>
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
      {billStatus === 'idle' && bills.length !== 0 ? (
        <section className="w-full">
          <PurchaseItemList purchases={bills} />
        </section>
      ) : (
        <div>...loading</div>
      )}
    </div>
  )
}

export default Purchase
