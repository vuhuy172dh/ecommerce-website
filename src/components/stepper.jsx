import { useState } from 'react'
import styles from '../styles/stepper.module.css'
import Button from './button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import AddressList from './user/addressList'
import ShippingList from './shipping/shippingList'
import PopupAddress from './popup/popupAddress'
import { useSelector, useDispatch } from 'react-redux'
import { selectUserEmail } from '../redux/features/userSlice'
import {
  addContact,
  selectContact,
  selectMethod,
  selectPayment,
  selectShipTo
} from '../redux/features/bills/billSlice'
import { selectAddressList } from '../redux/features/address/addressSlice'

const steps = ['Information', 'Shipping', 'Payment']

const shipping = [
  {
    name: 'Fast',
    price: 5
  },
  {
    name: 'Standard Shipping',
    price: 'free'
  }
]

/*const addressList = [
  {
    id: 1,
    name: 'Hoàng Văn Phúc',
    phoneNumber: '0123321760',
    address:
      'Ktx khu A ĐHQG, Đường Tạ Quang Bửu, Phường Linh Trung Thành Phố Thủ Đức, TP. Hồ Chí Minh, Phường Linh Trung Thành Phố Thủ Đức, TP. Hồ Chí Minh',
    default: true,
    province: 'Tỉnh Hà Giang',
    district: 'Huyện Đồng Văn',
    ward: 'Xã Lũng Cú',
    provinceCode: '2',
    districtCode: '26',
    wardCode: '715'
  },
  {
    id: 2,
    name: 'Hoàng Văn Phúc',
    phoneNumber: '0123321760',
    address:
      'Ktx khu A ĐHQG, Đường Tạ Quang Bửu, Phường Linh Trung Thành Phố Thủ Đức, TP. Hồ Chí Minh',
    default: false,
    province: 'Tỉnh Hà Giang',
    district: 'Huyện Đồng Văn',
    ward: 'Xã Lũng Cú',
    provinceCode: '2',
    districtCode: '26',
    wardCode: '715'
  }
]*/

function Stepper() {
  const [currentStep, setCurrentStep] = useState(1)
  const [popupAddress, setPopupAddress] = useState(false)

  const handleNext = () => {
    if (currentStep < steps.length) setCurrentStep((prev) => prev + 1)
  }

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep((prev) => prev - 1)
  }

  const dispatch = useDispatch()
  //get user email
  const userEmail = useSelector(selectUserEmail)
  const billContact = useSelector(selectContact)
  const billShipTo = useSelector(selectShipTo)
  const billMethod = useSelector(selectMethod)
  const billPayment = useSelector(selectPayment)
  const addressList = useSelector(selectAddressList)

  if (billContact === null) {
    dispatch(addContact(userEmail))
  }

  return (
    <div>
      {/*step*/}
      <div className="flex w-full mb-6 justify-between">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`w-full relative flex flex-col items-center ${
              styles.step_item
            } ${currentStep === index + 1 && styles.active} ${
              index + 1 < currentStep && styles.complete
            }`}
          >
            <div
              className={`w-7 h-7 rounded-lg bg-dark_primary border border-primary text-light_grey flex justify-center relative z-10 items-center ${styles.step}`}
            >
              {index + 1 < currentStep ? (
                <FontAwesomeIcon icon={faCheck} />
              ) : (
                index + 1
              )}
            </div>
            <p className="text-light_grey">{step}</p>
          </div>
        ))}
      </div>

      {/*all information for bill*/}
      {currentStep !== 1 && (
        <div className="w-full p-3 border border-light_grey/30 rounded-xl">
          {/*contact to row*/}
          {billContact && (
            <div className="w-full py-2 flex text-light_grey items-center text-h5">
              <div className="text-border_dark/50 flex w-1/5">
                <p>Contact</p>
              </div>
              <div className="flex-1">
                <p>{billContact}</p>
              </div>
              <div className="flex text-body-sm text-border_dark/50">
                <button>Change</button>
              </div>
            </div>
          )}

          {/*ship to row*/}
          {billShipTo && (
            <div className="w-full py-2 flex text-light_grey items-center text-h5 border-t border-t-light_grey/10">
              <div className="text-border_dark/50 flex w-1/5">
                <p>Ship to</p>
              </div>
              <div className="flex-1">
                <p>{billShipTo}</p>
              </div>
              <div className="flex text-body-sm text-border_dark/50">
                <button>Change</button>
              </div>
            </div>
          )}

          {/*shipping method row*/}
          {billMethod && (
            <div className="w-full py-2 flex text-light_grey items-center text-h5 border-t border-t-light_grey/10">
              <div className="text-border_dark/50 flex w-1/5">
                <p>Method</p>
              </div>
              <div className="flex-1">
                <p>{billMethod}</p>
              </div>
            </div>
          )}

          {/*payment row*/}
          {billPayment && (
            <div className="w-full py-2 flex text-light_grey items-center text-h5 border-t border-t-light_grey/10">
              <div className="text-border_dark/50 flex w-1/5">
                <p>Payment</p>
              </div>
              <div className="flex-1">
                <p>Payment on delivery</p>
              </div>
            </div>
          )}
        </div>
      )}

      {/*information*/}
      {currentStep === 1 && (
        <div className="w-full flex flex-col gap-6 mb-7">
          <div className="w-full flex flex-col gap-2">
            <p className="text-light_grey text-h4">Contact Information</p>
            <input
              type="email"
              className="w-full py-2 px-4 bg-black/40 text-light_grey rounded-lg"
              placeholder="email"
            />
          </div>
          <div className="flex flex-col w-full">
            <div className="w-full flex justify-between">
              <p className="text-light_grey text-h4">Shipping Address</p>
              <div>
                <Button
                  Color="primary"
                  Custom={true}
                  Padding="px-6"
                  onClick={() => setPopupAddress(true)}
                >
                  New Address
                </Button>
              </div>
            </div>
            <AddressList addressList={addressList} />
          </div>
        </div>
      )}

      {/*Shipping*/}
      {currentStep === 2 && (
        <div className="w-full mb-7">
          <p className="text-white my-4 text-h3">Shipping Method</p>
          <ShippingList shippingList={shipping} />
        </div>
      )}

      {/*Payment*/}
      <div className="w-full"></div>

      {/*Button*/}
      <div className="w-full flex flex-col gap-2 tablet:flex-row-reverse tablet:justify-between">
        {/*next*/}
        <Button onClick={handleNext} Color="primary">
          {currentStep === steps.length
            ? 'Pay now'
            : `Continue to ${steps[currentStep]}`}
        </Button>

        {/*Back*/}
        {currentStep === 1 ? (
          <Link to="/productCart" className="flex-1">
            <Button Color="secondary">Back to Cart</Button>
          </Link>
        ) : (
          <Button onClick={handleBack} Color="secondary">
            Back to {steps[currentStep - 2]}
          </Button>
        )}
      </div>

      {popupAddress && <PopupAddress onBack={() => setPopupAddress(false)} />}
    </div>
  )
}

export default Stepper
