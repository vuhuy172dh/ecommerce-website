import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'

import signup from '../../assets/images/signup.png'
import EmailField from './emailField'

function EmailSignUp() {
  return (
    <div className="w-full flex flex-col relative items-center">
      {/* background image */}
      <img
        src={signup}
        alt="signup backdround"
        className=" w-full max-h-[500px] object-cover"
      />

      {/* content */}
      <div className="absolute top-1/2 -translate-y-1/2 w-full p-8 flex flex-col gap-4 laptop:w-2/5 laptop:items-center">
        <p className="text-white text-h3 laptop:text-h2">
          Join the club and get the benefits
        </p>
        <p className="text-white text-body-sm laptop:text-center laptop:px-10">
          Sign up for our newsletter and receive exclusive offers on new ranges,
          sales, pop up stores and more
        </p>
        <ul className="text-white text-body-md laptop:w-full laptop:px-10 laptop:flex laptop:justify-between">
          <li className="flex gap-1 items-center">
            <FontAwesomeIcon icon={faCircleCheck} />
            Exclusive offers
          </li>
          <li className="flex gap-1 items-center">
            <FontAwesomeIcon icon={faCircleCheck} />
            Free events
          </li>
          <li className="flex gap-1 items-center">
            <FontAwesomeIcon icon={faCircleCheck} />
            Large discounts
          </li>
        </ul>

        {/* Sign up field*/}
        <div className="flex laptop:w-full laptop:px-10">
          <EmailField Color="light" />
        </div>
      </div>
    </div>
  )
}

export default EmailSignUp
