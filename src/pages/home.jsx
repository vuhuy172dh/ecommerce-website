import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

import homepage from '../assets/images/homepage.png'
import feature2 from '../assets/images/features2.png'
import { Button, LinkButton } from '../components/buttons'
import { EmailSignUp } from '../components/emails'
import { ProductItemListing } from '../components/products'
import {
  selectStatus,
  selectProducts,
  getProducts
} from '../redux/features/productsSlice'
import { selectCartStatus } from '../redux/features/carts/cartSlice'
import { InfoItemList } from '../components/others'
import { useDarkMode } from '../hooks/useDarkMode'
import { PagePreloader } from '../components/preloader'

function HomePage() {
  const { mode: darkMode } = useDarkMode()
  const [productList, setProductList] = useState([])

  const limitedValue = 4
  const dispatch = useDispatch()
  const status = useSelector(selectStatus)
  const products = useSelector(selectProducts)
  const cartStatus = useSelector(selectCartStatus)

  useEffect(() => {
    if (products.length === 0)
      dispatch(getProducts(null, 'create_date', 'desc'))
  }, [])

  useEffect(() => {
    setProductList(products.slice(0, limitedValue))
  }, [products])

  return (
    <div className="w-full flex flex-col relative">
      {/*Helmet async*/}
      <Helmet>
        <title>Avion</title>
      </Helmet>

      {/* homepage poster */}
      <div>
        <div className="w-full flex justify-center">
          <div className="w-[calc(100%-2rem)] tablet:w-[calc(100%-4rem)] flex flex-col mb-8 relative rounded-3xl shadow-xl shadow-gray-700/50 dark:shadow-gray-500/30 overflow-hidden hover:scale-[1.01] transition-all duration-500 dark:bg-secondary">
            {/* poster content */}
            <div className="w-full px-8 mb-8 flex flex-col justify-between top-1/2 tablet:-translate-y-1/2 right-[5%] tablet:p-10 tablet:absolute tablet:w-1/2 laptop:w-2/5 tablet:h-1/2 tablet:bg-white tablet:dark:bg-secondary">
              <div className="w-full flex flex-col gap-2">
                <p className="text-h3 tablet:text-h3 text-dark_primary dark:text-light_grey">
                  Luxury homeware for people who love timeless design quality
                </p>
                <p className="text-body-md text-dark_primary dark:text-light_grey tablet:hidden">
                  With our new collection, view over 400 bespoke pieces from
                  homeware through to furniture tody
                </p>
                <p className="tablet:block text-body-lg text-dark_primary dark:text-light_grey">
                  Shop the new Spring 2022 collection today
                </p>
              </div>
              <div className="flex w-full tablet:w-1/3">
                <Link to="/products">
                  <Button Size="medium" Color="secondary" State="default">
                    View collection
                  </Button>
                </Link>
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
            <LinkButton
              path="/products"
              color={darkMode === 'light' ? 'dark' : 'light'}
            >
              <p className="text-h3">All Product</p>
            </LinkButton>
          </div>
          {status === 'idle' ? (
            <ProductItemListing products={productList} />
          ) : (
            <div>Loading...</div>
          )}
        </div>

        {/* feature 1*/}
        <div className="w-full px-8 mb-10 flex flex-col gap-10 tablet:flex-row">
          {/* box - 1 */}
          <div className="flex-1 flex flex-col gap-10 w-full p-8 tablet:p-12 bg-dark_primary dark:bg-secondary text-white tablet:justify-between rounded-xl overflow-hidden shadow-xl shadow-gray-700/40">
            {/* content */}
            <div className="flex flex-col w-full gap-1">
              <p className="text-h4 tablet:text-h2">
                It started with a small idea
              </p>
              <p className="text-body-sm tablet:text-body-lg">
                A global brand with local beginnings, our story begain in a
                small studio in South London in early 2014
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
          <div className="flex-1 w-full rounded-xl overflow-hidden shadow-xl shadow-gray-600/50">
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

      {cartStatus === 'loading' && <PagePreloader />}
    </div>
  )
}

export default HomePage
