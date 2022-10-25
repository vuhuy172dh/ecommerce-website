import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'

import {
  getBillDetail,
  selectBillDetail,
  selectStatus
} from '../../redux/features/bills/billSlice'
import { PagePreloader } from '../../components/preloader'
import { LinkButton } from '../../components/buttons'
import { PurchaseProductItemList } from '../../components/purchase'
import { useDarkMode } from '../../hooks/useDarkMode'

function PurchaseDetail() {
  const { purchaseId } = useParams()
  const billDetail = useSelector(selectBillDetail)
  const billDetailStatus = useSelector(selectStatus)
  const dispatch = useDispatch()
  const darkMode = useDarkMode().mode

  const total = billDetail?.total + billDetail?.shipping_method.price

  useEffect(() => {
    dispatch(getBillDetail(purchaseId))
  }, [])

  return (
    <div className="w-full laptop:py-6 mb-3">
      {billDetailStatus === 'idle' && billDetail?.products ? (
        <div className="mr-4 py-6 px-4 flex flex-col bg-border_grey dark:bg-secondary rounded-md shadow-md shadow-gray-600/50 dark:shadow-light_grey/50">
          {/*status and back button*/}
          <div className="w-full flex justify-between">
            <LinkButton
              path="/user/account/purchases"
              color={darkMode === 'light' ? 'dark' : 'light'}
            >
              <div className="flex gap-2 items-center">
                <FontAwesomeIcon icon={faAngleLeft} />
                Back
              </div>
            </LinkButton>
            <div className="bg-red-500 px-4 text-light_grey rounded-lg">
              <p>{billDetail.status}</p>
            </div>
          </div>

          <hr className="w-full my-6 border-t border-t-primary/50 dark:border-t-light_grey/50" />

          {/*address*/}
          <div className="w-full flex flex-col">
            <div className="w-full flex justify-between mb-3">
              <p className="laptop:text-h3 text-h5">Delivery Address</p>
              <p className="text-body-sm">{billDetail.shipping_method.name}</p>
            </div>
            <div className="w-full flex gap-3">
              <p className="text-secondary dark:text-border_grey font-semibold">
                {billDetail.ship_to.name}
              </p>
              <p className="text-secondary/70 dark:text-border_grey/70">
                {billDetail.ship_to.phone_num}
              </p>
            </div>
            <div className="text-secondary/90 dark:text-border_grey/90">
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

          <hr className="w-full my-6 border-t border-t-primary/50 dark:border-t-light_grey/50" />

          {/*product list*/}
          <div>
            <div>
              <p>Products</p>
            </div>
            <PurchaseProductItemList products={billDetail.products} />
          </div>

          <hr className="w-full my-6 border-t border-t-primary/50 dark:border-t-light_grey/50" />

          {/*price*/}
          <div className="w-full flex gap-14 justify-end">
            <div className="text-secondary dark:text-border_grey font-semibold flex flex-col">
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

          <hr className="w-full my-6 border-t border-t-primary/50 dark:border-t-light_grey/50" />

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
