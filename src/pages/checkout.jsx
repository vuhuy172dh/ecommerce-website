import { Helmet } from 'react-helmet-async'
import Background from '../assets/images/background.jpg'
import Stepper from '../components/stepper'
import { Link } from 'react-router-dom'

import img1 from '../assets/images/BlueChair.png'
import ProductCheckoutList from '../components/productCheckoutList'
const cartItems = [
  {
    id: 1,
    name: 'Graystone vase',
    detail: 'A time less ceramic vase with a tru color grey glaze.',
    price: 85,
    imgUrl: img1
  },
  {
    id: 2,
    name: 'Basic white vase',
    detail: 'Beautiful and simple this is one for the classics.',
    price: 125,
    imgUrl: img1
  },
  {
    id: 3,
    name: 'Graystone vase',
    detail: 'A time less ceramic vase with a tru color grey glaze.',
    price: 85,
    imgUrl: img1
  },
  {
    id: 4,
    name: 'Basic white vase',
    detail: 'Beautiful and simple this is one for the classics.',
    price: 125,
    imgUrl: img1
  },
  {
    id: 5,
    name: 'Graystone vase',
    detail: 'A time less ceramic vase with a tru color grey glaze.',
    price: 85,
    imgUrl: img1
  },
  {
    id: 6,
    name: 'Basic white vase',
    detail: 'Beautiful and simple this is one for the classics.',
    price: 125,
    imgUrl: img1
  },
  {
    id: 5,
    name: 'Graystone vase',
    detail: 'A time less ceramic vase with a tru color grey glaze.',
    price: 85,
    imgUrl: img1
  },
  {
    id: 6,
    name: 'Basic white vase',
    detail: 'Beautiful and simple this is one for the classics.',
    price: 125,
    imgUrl: img1
  }
]

function Checkout() {
  return (
    <div className="w-screen h-screen relative">
      {/*helmet async*/}
      <Helmet>
        <title>Checkout</title>
      </Helmet>

      {/*background and backdrop*/}
      <section className="w-full h-full fixed top-0 z-10">
        {/*background*/}
        <img
          src={Background}
          alt="background"
          className="w-full h-full object-cover"
        />

        {/*backdrop*/}
        <div className="w-full h-full bg-black/70 backdrop-blur-lg absolute top-0 left-0 z-20"></div>
      </section>

      {/*content*/}
      <section className="w-full flex relative z-30 justify-center items-start laptop:pt-8 pb-16">
        {/*check out*/}
        <section className="flex-[1.3] w-full flex justify-center laptop:pr-8 laptop:justify-end laptop:border-r laptop:border-r-light_grey/40">
          <div className="flex-1 max-w-[600px] px-4">
            {/*logo*/}
            <Link to="/">
              <div className="w-full py-4 border-b border-b-border_dark/20">
                <p className="text-h2 text-light_grey font-[600]">AVION</p>
              </div>
            </Link>

            {/*total price*/}
            <div className="w-full py-4 border-b border-b-border_dark/20">
              <p className="text-h4 font-[500] text-light_grey">$444</p>
            </div>

            {/*stepper*/}
            <div className="w-full py-4 border-b border-b-border_dark/20">
              <Stepper />
            </div>
          </div>
        </section>

        {/*product info*/}
        <section className="flex-1 w-full hidden laptop:flex pl-10">
          <div className="max-w-[450px] w-full">
            {/*product list*/}
            <ProductCheckoutList productList={cartItems} />

            {/*divider*/}
            <hr className="w-full border-t border-t-light_grey/40 my-4" />

            {/*price*/}
            <div className="w-full flex flex-col gap-4">
              {/*subtotal*/}
              <div className="w-full flex justify-between text-light_grey">
                <p className="text-h4">Subtotal</p>
                <p className="font-[500]">$444.75</p>
              </div>

              {/*shipping*/}
              <div className="w-full flex justify-between text-light_grey">
                <p className="text-h6">Shipping</p>
                <p className="text-h6">Free</p>
              </div>

              {/*divider*/}
              <hr className="w-full border-t border-t-light_grey/30" />

              {/*total*/}
              <div className="w-full flex justify-between text-light_grey">
                <p className="text-h3 font-[600]">Total</p>
                <p className="text-h3 font-[600]">$444.75</p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  )
}

export default Checkout
