import { useState } from 'react'
import styles from '../styles/stepper.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { Outlet } from 'react-router-dom'

const steps = ['Information', 'Shipping', 'Payment']

/*const shipping = [
  {
    name: 'Fast',
    price: 5
  },
  {
    name: 'Standard Shipping',
    price: 'free'
  }
]*/

function Stepper() {
  const [currentStep, setCurrentStep] = useState(1)

  return (
    <div>
      {/*stepper*/}
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

      <Outlet />
    </div>
  )
}

export default Stepper
