import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  getBillDetail,
  selectBillDetail,
  selectStatus
} from '../../redux/features/bills/billSlice'
import { useEffect } from 'react'
import PagePreloader from '../../components/preloader/pagePreloader'
import LinkButton from '../../components/linkButton'
import PurchaseProductItemList from '../../components/purchase/purchaseProductItemList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'

function PurchaseDetail() {
  const { purchaseId } = useParams()
  const billDetail = useSelector(selectBillDetail)
  const billDetailStatus = useSelector(selectStatus)
  const dispatch = useDispatch()

  const total = billDetail?.total + billDetail?.shipping_method.price

  useEffect(() => {
    dispatch(getBillDetail(purchaseId))
  }, [])

  return (
    <div className="w-full laptop:py-6">
      {billDetailStatus === 'idle' && billDetail?.products ? (
        <div className="mr-4 py-6 px-4 flex flex-col bg-border_grey rounded-md shadow-lg shadow-gray-600/50">
          {/*status and back button*/}
          <div className="w-full flex justify-between">
            <LinkButton path="/user/account/purchases" color="dark">
              <div className="flex gap-2 items-center">
                <FontAwesomeIcon icon={faAngleLeft} />
                Back
              </div>
            </LinkButton>
            <div className="bg-red-500 px-4 text-light_grey rounded-lg">
              <p>{billDetail.status}</p>
            </div>
          </div>

          <hr className="w-full my-6 border-t border-t-primary/50" />

          {/*address*/}
          <div className="w-full flex flex-col">
            <div className="w-full flex justify-between mb-3">
              <p className="text-h3">Delivery Address</p>
              <p className="text-body-sm">{billDetail.shipping_method.name}</p>
            </div>
            <div className="w-full flex gap-3">
              <p className="text-secondary font-semibold">
                {billDetail.ship_to.name}
              </p>
              <p className="text-secondary/70">
                {billDetail.ship_to.phone_num}
              </p>
            </div>
            <div className="text-secondary/90">
              <p>
                {billDetail.ship_to.ward}, {billDetail.ship_to.district},{' '}
                {billDetail.ship_to.province}
              </p>
              <p>
                {billDetail.ship_to.detail}, {billDetail.ship_to.ward},{' '}
                {billDetail.ship_to.district}, {billDetail.ship_to.province}
              </p>
            </div>
          </div>

          <hr className="w-full my-6 border-t border-t-primary/50" />

          {/*product list*/}
          <div>
            <div>
              <p>Products</p>
            </div>
            <PurchaseProductItemList products={billDetail.products} />
          </div>

          <hr className="w-full my-6 border-t border-t-primary/50" />

          {/*price*/}
          <div className="w-full flex gap-14 justify-end">
            <div className="text-secondary font-semibold flex flex-col">
              <p>Subtotal</p>
              <p>Shipping Fee</p>
              <p className="text-h2">Total</p>
            </div>
            <div className="flex flex-col items-center">
              <p>{billDetail.total}$</p>
              <p>{billDetail.shipping_method.price}$</p>
              <p className="text-h2">{total}$</p>
            </div>
          </div>

          <hr className="w-full my-6 border-t border-t-primary/50" />

          <div className="w-full flex justify-end">
            <p>{billDetail.payment.name}</p>
          </div>
        </div>
      ) : (
        <PagePreloader />
      )}
    </div>
  )
}

export default PurchaseDetail
