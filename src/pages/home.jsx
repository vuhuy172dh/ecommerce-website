import homepage from '../assets/images/homepage.png'
import feature2 from '../assets/images/features2.png'
import Button from '../components/button'
import LinkButton from '../components/linkButton'
import EmailSignUp from '../components/emailSignUp'
import ProductItemListing from '../components/productItemListing'
import { useState, useEffect } from 'react'

import img1 from '../assets/images/ThreeVases.png'
import img2 from '../assets/images/CeilingLamp.png'
import img3 from '../assets/images/SingleVase.png'
import img4 from '../assets/images/DarkChair.png'
import { Link } from 'react-router-dom'
import InfoItemList from '../components/infoItemList'

const productItems = [
  {
    id: 1,
    imgUrl: img1,
    name: 'Rustic Vase Set',
    price: 155
  },
  {
    id: 2,
    imgUrl: img2,
    name: 'The Luccy Lamp',
    price: 399
  },
  {
    id: 3,
    imgUrl: img3,
    name: 'The Silky Vase',
    price: 125
  },
  {
    id: 4,
    imgUrl: img4,
    name: 'The Silky Vase',
    price: 125
  },
  {
    id: 5,
    imgUrl: img1,
    name: 'The Silky Vase',
    price: 125
  },
  {
    id: 6,
    imgUrl: img2,
    name: 'The Silky Vase',
    price: 125
  }
]

const limitedValue = 4

function HomePage() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    // fake fetch API with init page number
    setProducts(productItems.slice(0, limitedValue))
  }, [])

  return (
    <div className="w-full flex flex-col">
      {/* homepage poster */}
      <div className="w-full flex justify-center">
        <div className="w-[calc(100%-2rem)] tablet:w-[calc(100%-4rem)] flex flex-col mb-8 relative rounded-3xl shadow-xl shadow-gray-700/50 overflow-hidden hover:scale-[1.01] transition-all duration-500">
          {/* poster content */}
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

          {/* poster image */}
          <div className="w-full">
            <img
              src={homepage}
              alt="poster"
              className="w-full max-h-[700px] object-cover"
            />
          </div>
        </div>
      </div>

      {/* info item */}
      <div className="w-full px-8 py-8 tablet:my-20">
        <InfoItemList />
      </div>

      {/* product item list */}
      <div className="px-8 my-8 tablet:my-20">
        {/* title */}
        <div className="my-4 w-fit">
          <LinkButton path="/products" color="dark">
            <p className="text-h3">All Product</p>
          </LinkButton>
        </div>
        <ProductItemListing products={products} />
      </div>

      {/* feature 1*/}
      <div className="w-full px-8 mb-10 flex flex-col gap-10 tablet:flex-row">
        {/* box - 1 */}
        <div className="flex-1 flex flex-col gap-10 w-full p-8 tablet:p-12 bg-dark_primary text-white tablet:justify-between">
          {/* content */}
          <div className="flex flex-col w-full gap-1">
            <p className="text-h4 tablet:text-h2">
              It started with a small idea
            </p>
            <p className="text-body-sm tablet:text-body-lg">
              A global brand with local beginnings, our story begain in a small
              studio in South London in early 2014
            </p>
          </div>

          {/* button */}
          <div className="w-full flex tablet:block">
            <Link to="/products">
              <Button Size="medium" Color="opaque" State="default">
                View collection
              </Button>
            </Link>
          </div>
        </div>

        {/* box - 2 : image */}
        <div className="flex-1 w-full">
          <img
            src={feature2}
            alt="poster"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* email sign up component */}
      <EmailSignUp />
    </div>
  )
}

export default HomePage
