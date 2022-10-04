import homepage from '../assets/images/homepage.png'
import feature2 from '../assets/images/features2.png'
import signup from '../assets/images/signup.png'
import Button from '../components/button'

function HomePage() {
  return (
    <div className="w-full flex flex-col">
      {/* this is homepage poster */}
      <div className="w-full flex flex-col mb-8">
        {/* this is poster content */}
        <div className="w-full px-8 mb-8 flex flex-col gap-4">
          <p className="text-h3 text-dark_primary">
            Luxury homeware for people who love timeless design quality
          </p>
          <p className="text-body-md text-dark_primary">
            With our new collection, view over 400 bespoke pieces from homeware
            through to furniture tody
          </p>
          <Button Size="medium" Color="secondary" State="default">
            View collection
          </Button>
        </div>

        {/* this is poster image */}
        <div className="w-full">
          <img src={homepage} alt="poster" className="w-full object-contain" />
        </div>
      </div>

      {/* this is info item */}
      <div></div>

      {/* this is product item list */}
      <div></div>

      {/* this is */}
      <div className="w-full px-8 mb-10 flex flex-col gap-10">
        {/* this is box - 1 */}
        <div className="flex flex-col gap-10 w-full p-8 bg-dark_primary text-white">
          {/* this is content */}
          <div className="flex flex-col w-full gap-1">
            <p className="text-h4">It started with a small idea</p>
            <p className="text-body-sm">
              A global brand with local beginnings, our story begain in a small
              studio in South London in early 2014
            </p>
          </div>

          {/* this is button */}
          <Button Size="medium" Color="opaque" State="default">
            View collection
          </Button>
        </div>

        {/* this is poster img */}
        <div className="w-full">
          <img src={feature2} alt="poster" className="w-full object-contain" />
        </div>
      </div>

      {/* this feature 2 */}
      <div className="w-full flex flex-col relative">
        <img
          src={signup}
          alt="signup backdround"
          className=" w-full object-contain"
        />
        {/* top content */}
        <div className="absolute top-1/2 -translate-y-1/2 w-full p-8 flex flex-col gap-4">
          <p className="text-white text-h3">
            Join the club and get the benefits
          </p>
          <p className="text-white text-body-sm">
            Sign up for our newsletter and receive exclusive offers on new
            ranges, sales, pop up stores and more
          </p>
          <ul className="text-white text-body-md">
            <li>Exclusive offers</li>
            <li>Free events</li>
            <li>Large discounts</li>
          </ul>

          {/* Sign up */}
          <div className="flex ">
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
