import { useState } from 'react'
import styles from '../styles/stepper.module.css'
import Button from './button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const steps = ['Information', 'Shipping', 'Payment']

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
