import Button from '../components/button'
import InfoItem from '../components/infoItem'
import EmailField from '../components/emailField'

// Sample img
import DandyChairImg from '../assets/images/DandyChair.png'
import WhiteRoomImg from '../assets/images/features3.png'
import Counter from '../components/counter'

function ProductDetailPage() {
  return (
    <div className="text-dark_primary mx-6 laptop:mx-20">
      {/* Product detail */}
      <section className="grid grid-cols-4 gap-x-5 px-6 -mx-6 bg-light_grey laptop:grid-cols-12 laptop:py-12 laptop:-mx-20 laptop:px-20">
        <div className="col-span-4 -mx-6 laptop:mx-0 laptop:col-span-6">
          <img
            className="w-full h-full object-cover"
            src={DandyChairImg}
            alt="a"
          />
        </div>
        <div className="col-span-4 laptop:col-span-6 laptop:ml-9 ">
          {/* Top Text */}
          <div className="mt-7 mb-4 laptop:mt-9 laptop:mb-7">
            <h3 className="text-h3 mb-3 laptop:text-h1 laptop:mb-4">
              The Dandy Chair
            </h3>
            <h4 className="text-h4 laptop:text-h3">£250</h4>
          </div>
          <hr />
          {/* Description */}
          <div className="mt-7 laptop:mt-6">
            <h5 className="text-h5 mb-3">Product description</h5>
            <small className="text-body-sm laptop:text-body-md">
              A timeless design, with premium materials features as one of our
              most popular and iconic pieces. The dandy chair is perfect for any
              stylish living space with beech legs and lambskin leather
              upholstery.
            </small>
          </div>
          {/* Dimensions */}
          <div className="mt-7 laptop:mt-9 laptop:w-80">
            <h5 className="text-h5 mb-3 laptop:mb-6">Dimensions</h5>
            <hr className="hidden" />
            {/* Dimensions Metrics */}
            <div className="flex justify-between items-center mt-4 ">
              <div>
                <h6 className="text-h6 mb-4">Height</h6>
                <small className="text-body-sm laptop:text-body-md">
                  110cm
                </small>
              </div>
              <div className="h-11 w-1 bg-border_grey"></div>
              <div>
                <h6 className="text-h6 mb-4">Width</h6>
                <small className="text-body-sm laptop:text-body-md">75cm</small>
              </div>
              <div className="h-11 w-1 bg-border_grey"></div>
              <div>
                <h6 className="text-h6 mb-4">Depth</h6>
                <small className="text-body-sm laptop:text-body-md">50cm</small>
              </div>
            </div>
          </div>
          {/* Stepper */}
          <div className="mt-7 laptop:w-32 laptop:mt-10">
            <h5 className="text-h5 mb-3 ">Quantity</h5>
            <Counter />
          </div>
          {/* Group btn */}
          <div className="gap-4 flex flex-col laptop:items-center mt-8 mb-8 laptop:mt-12 laptop:w-96 laptop:flex-row-reverse">
            <Button Color="white">Save to favorites</Button>
            <Button Color="primary">Add to cart</Button>
          </div>
        </div>
      </section>

      {/* Infor Card List */}
      <div className="w-full py-12 laptop:py-20">
        <InfoItem />
      </div>

      {/* Email sign up */}
      <section className="flex flex-col laptop:flex-row laptop:-mx-20">
        <div className="-mx-6 laptop:basis-3/6 laptop:mx-0">
          <img className="w-full h-auto" src={WhiteRoomImg} alt="feature" />
        </div>
        <div className="flex flex-col py-9 laptop:p-10 laptop:basis-3/6">
          <div className="mb-14 text-h4">
            <h4 className="text-h4 mb-4 laptop:text-h2 laptop:mb-5">
              Join the club and get the benefits
            </h4>
            <small className="text-body-sm laptop:text-body-md">
              Sign up for our newsletter and receive exclusive offers on new
              ranges, sales, pop up stores and more
            </small>
          </div>
          <div className="flex-1"></div>
          <div className="flex laptop:max-w-md">
            <EmailField Color="light" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductDetailPage
