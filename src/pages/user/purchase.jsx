import { useEffect, useState } from 'react'
import PurchaseItemList from '../../components/purchase/purchaseItemList'
import { useSelector, useDispatch } from 'react-redux'
import {
  getBills,
  selectBills,
  selectStatus
} from '../../redux/features/bills/billSlice'
import { useDarkMode } from '../../hooks/useDarkMode'
import ButtonIcon from '../../components/buttonIcon'

function Purchase() {
  const [click, setClick] = useState('Waiting')
  const bills = useSelector(selectBills)
  const dispatch = useDispatch()
  const billStatus = useSelector(selectStatus)
  const mode = useDarkMode().mode

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
    <div className="w-full laptop:px-6 flex flex-row-reverse relative">
      {/*Purchase navigation*/}
      <nav className="w-fit h-fit flex flex-col py-2 px-1 mx-4 gap-2 sticky top-36 bg-border_dark rounded-lg shadow-md shadow-gray-500/40">
        <div>
          <ButtonIcon Icon="waiting" onClick={handleWaitingClick} />
        </div>
        <div>
          <ButtonIcon Icon="delivering" onClick={handleDeliveringClick} />
        </div>
        <div>
          <ButtonIcon Icon="completed" onClick={handleCompletedClick} />
        </div>
        <div>
          <ButtonIcon Icon="canceled" onClick={handleCanceledClick} />
        </div>
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
