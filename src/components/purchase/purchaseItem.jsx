import { useNavigate } from 'react-router-dom'
import Button from '../button'
import PurchaseProductItemList from './purchaseProductItemList'
import { useDispatch, useSelector } from 'react-redux'
import {
  cancelBill,
  reorderBill,
  selectCancelStatus,
  selectReorderStatus
} from '../../redux/features/bills/billSlice'
import PagePreloader from '../preloader/pagePreloader'

function PurchaseItem({ purchaseItem }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const cancelBillStatus = useSelector(selectCancelStatus)
  const reorderStatus = useSelector(selectReorderStatus)

  const handleCancel = (uid) => {
    dispatch(cancelBill(uid))
  }

  const handleReorder = (uid) => {
    dispatch(reorderBill(uid))
  }

  return (
    <div className="w-full py-2 px-8 bg-border_grey dark:bg-secondary rounded-lg shadow-md shadow-gray-600/50 dark:shadow-border_dark/50">
      <div className="w-full flex justify-end">
        <p className="text-h4 text-primary dark:text-light_grey">
          <strong>{purchaseItem.status}</strong>
        </p>
      </div>

      {/*products cart list*/}
      <PurchaseProductItemList products={purchaseItem.products} />
      {/*Divider*/}
      <hr className="w-full border-t border-t-primary/50 my-2 dark:border-t-light_grey/50" />

      {/*detail*/}
      <div className="w-full flex flex-col items-end gap-4">
        <p>
          <strong>Subtotal Price:</strong> {purchaseItem.total}$
        </p>
        <p>
          <strong>Shipping:</strong> {purchaseItem.shipping_method.price}$
        </p>
        <p>
          <strong>Total Price:</strong>{' '}
          {purchaseItem.total + purchaseItem.shipping_method.price}$
        </p>
        <div className="flex gap-2">
          <Button
            Color="red"
            Custom={true}
            Padding="px-4"
            onClick={() => handleCancel(purchaseItem.uid)}
          >
            Cancel
          </Button>
          <div
            className={`${
              purchaseItem.status === 'Canceled' ? 'block' : 'hidden'
            }`}
          >
            <Button
              Color="primary"
              Custom={true}
              Padding="px-8"
              onClick={() => handleReorder(purchaseItem.uid)}
            >
              Re-Order
            </Button>
          </div>
          <Button
            Color="primary"
            Custom={true}
            Padding="px-8"
            onClick={() => {
              navigate(`/user/account/purchase/${purchaseItem.uid}`)
            }}
          >
            Detail
          </Button>
        </div>
      </div>

      {(cancelBillStatus === 'loading' || reorderStatus === 'loading') && (
        <PagePreloader />
      )}
    </div>
  )
}

export default PurchaseItem
