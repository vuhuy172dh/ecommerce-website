import { useState } from 'react'
import styles from '../styles/stepper.module.css'
import Button from './button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const steps = ['Information', 'Shipping', 'Payment']

const addressList = [
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
]

function Stepper() {
  const [currentStep, setCurrentStep] = useState(1)

  const handleNext = () => {
    if (currentStep < steps.length) setCurrentStep((prev) => prev + 1)
  }

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep((prev) => prev - 1)
  }

  return (
    <div>
      {/*step*/}
      <div className="flex w-full justify-between">
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

      {/*information*/}
      <div className="w-full"></div>

      {/*Shipping*/}
      <div className="w-full"></div>

      {/*Payment*/}
      <div className="w-full"></div>

      {/*Button*/}
      <div className="w-full flex flex-col gap-2 tablet:flex-row-reverse tablet:justify-between">
        {/*next*/}
        <div>
          <Button onClick={handleNext} Color="primary">
            {currentStep === steps.length
              ? 'Pay now'
              : `Continue to ${steps[currentStep]}`}
          </Button>
        </div>

        {/*Back*/}
        <div>
          <button
            onClick={handleBack}
            className="w-full py-4 flex-1 flex justify-center items-center text-light_grey/60 hover:text-light_grey bg-transparent"
          >
            {currentStep === 1 ? (
              <Link to="/productCart">Back to Cart</Link>
            ) : (
              `Back to ${steps[currentStep - 2]}`
            )}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Stepper
