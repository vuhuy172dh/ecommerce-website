import { useEffect, useState } from 'react'
import PurchaseItemList from '../../components/purchase/purchaseItemList'
import { useSelector, useDispatch } from 'react-redux'
import {
  getBills,
  selectBills,
  selectCancelStatus,
  selectReorderStatus,
  selectStatus
} from '../../redux/features/bills/billSlice'
import { useDarkMode } from '../../hooks/useDarkMode'
import ButtonIcon from '../../components/buttons/buttonIcon'
import PagePreloader from '../../components/preloader/pagePreloader'

function Purchase() {
  const [click, setClick] = useState('Waiting')
  const bills = useSelector(selectBills)
  const dispatch = useDispatch()
  const billStatus = useSelector(selectStatus)
  //const mode = useDarkMode().mode
  const cancelStatus = useSelector(selectCancelStatus)
  const reorderStatus = useSelector(selectReorderStatus)

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
    if (click === 'Waiting') dispatch(getBills('Waiting'))
    else if (click === 'Canceled') dispatch(getBills('Canceled'))
    console.log(click)
  }, [cancelStatus, reorderStatus])

  return (
    <div className="w-full laptop:px-6 flex laptop:flex-row-reverse flex-col relative">
      {/*Purchase navigation*/}
      <nav className="w-fit h-fit flex laptop:flex-col py-2 px-1 mx-4 mb-4 gap-2 laptop:sticky laptop:top-36 bg-border_dark rounded-lg shadow-md shadow-gray-500/40">
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
      {billStatus !== 'loading' && bills.length !== 0 ? (
        <section className="w-full">
          <PurchaseItemList purchases={bills} />
        </section>
      ) : billStatus !== 'loading' && bills.length === 0 ? (
        <div>No bills</div>
      ) : (
        <PagePreloader />
      )}
    </div>
  )
}

export default Purchase
