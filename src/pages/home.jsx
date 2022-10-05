import homepage from '../assets/images/homepage.png'
import feature2 from '../assets/images/features2.png'
import signup from '../assets/images/signup.png'
import Button from '../components/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'

function HomePage() {
  return (
    <div className="w-full flex flex-col">
      {/* this is homepage poster */}
      <div className="w-full flex flex-col mb-8 relative">
        {/* this is poster content */}
        <div className="w-full px-8 mb-8 flex flex-col justify-between top-1/2 tablet:-translate-y-1/2 right-[5%] tablet:p-10 tablet:absolute tablet:w-1/2 laptop:w-2/5 tablet:h-1/2 tablet:bg-white">
          <div className="w-full flex flex-col gap-2">
            <p className="text-h3 tablet:text-h3 text-dark_primary">
              Luxury homeware for people who love timeless design quality
            </p>
            <p className="text-body-md text-dark_primary tablet:hidden">
              With our new collection, view over 400 bespoke pieces from
              homeware through to furniture tody
            </p>
            <p className="tablet:block text-body-lg text-dark_primary">
              Shop the new Spring 2022 collection today
            </p>
          </div>
          <div className="flex w-full tablet:w-1/3">
            <Button Size="medium" Color="secondary" State="default">
              View collection
            </Button>
          </div>
        </div>

        {/* this is poster image */}
        <div className="w-full">
          <img
            src={homepage}
            alt="poster"
            className="w-full max-h-[700px] object-cover"
          />
        </div>
      </div>

      {/* this is info item */}
      <div></div>

      {/* this is product item list */}
      <div></div>

      {/* this is feature 1*/}
      <div className="w-full px-8 mb-10 flex flex-col gap-10 tablet:flex-row">
        {/* this is box - 1 */}
        <div className="flex-1 flex flex-col gap-10 w-full p-8 tablet:p-12 bg-dark_primary text-white tablet:justify-between">
          {/* this is content */}
          <div className="flex flex-col w-full gap-1">
            <p className="text-h4 tablet:text-h2">
              It started with a small idea
            </p>
            <p className="text-body-sm tablet:text-body-lg">
              A global brand with local beginnings, our story begain in a small
              studio in South London in early 2014
            </p>
          </div>

          {/* this is button */}
          <div className="w-full flex tablet:block">
            <Button Size="medium" Color="opaque" State="default">
              View collection
            </Button>
          </div>
        </div>

        {/* this is poster img */}
        <div className="flex-1 w-full">
          <img
            src={feature2}
            alt="poster"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* this feature 2 */}
      <div className="w-full mb-10 flex flex-col relative items-center">
        {/* this is background image */}
        <img
          src={signup}
          alt="signup backdround"
          className=" w-full max-h-[500px] object-cover"
        />

        {/* top content */}
        <div className="absolute top-1/2 -translate-y-1/2 w-full p-8 flex flex-col gap-4 laptop:w-2/5 laptop:items-center">
          <p className="text-white text-h3 laptop:text-h2">
            Join the club and get the benefits
          </p>
          <p className="text-white text-body-sm laptop:text-center laptop:px-10">
            Sign up for our newsletter and receive exclusive offers on new
            ranges, sales, pop up stores and more
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

          {/* Sign up */}
          <div className="flex laptop:w-full laptop:px-10">
            <input
              className="bg-light_grey pl-8 grow-[1]"
              placeholder="your@email.com"
            />
            <Button Size="medium" State="default" Color="primary">
              Sign up
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
