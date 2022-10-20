import { useEffect, useState } from 'react'
import Button from '../components/button'
import clubImg from '../assets/images/features3.png'
import EmailField from '../components/emailField'
import ProductItemListing from '../components/productItemListing'
import { Helmet } from 'react-helmet-async'
import {
  getProducts,
  selectProducts,
  selectStatus
} from '../redux/features/productsSlice'
import { useSelector, useDispatch } from 'react-redux'

function ProductListingPage() {
  const limitedValue = 4
  const [productsList, setProductsList] = useState([])
  const [current, setCurrent] = useState(4)
  const [visible, setVisible] = useState(true)

  //declare dispatch
  const dispatch = useDispatch()
  //select state
  const status = useSelector(selectStatus)
  const products = useSelector(selectProducts)

  useEffect(() => {
    dispatch(getProducts())
  }, [])

  useEffect(() => {
    setProductsList(products.slice(0, current))
  }, [products, current])

  const handleLoadMore = () => {
    const newlist = products.slice(current, current + limitedValue)

    if (newlist.length > 0) {
      setProductsList((prev) => {
        return [...prev, ...newlist]
      })

      setCurrent(current + limitedValue)
    } else {
      setVisible(!visible)
    }
  }

  return (
    <div className="relative">
      {/*Helmet async*/}
      <Helmet>
        <title>Products</title>
      </Helmet>

      {/* this is Header component */}
      <header className=" bg-light_grey dark:bg-secondary py-8 px-6 laptop:bg-white dark:laptop:bg-dark_secondary laptop:pt-20 laptop:pb-3 laptop:px-20 relative z-30">
        <h2 className="text-center mb-10 text-h2 laptop:mb-8">
          View all products
        </h2>
        <div className="flex gap-3 laptop:hidden">
          <Button Size="small" Color="white" IconRight>
            Sorting
          </Button>
          <Button Size="small" Color="white" IconRight>
            Filtering
          </Button>
        </div>

        {/* this is Navigation component */}
        <nav className="hidden laptop:flex justify-between items-center px-6">
          <div className="flex items-center gap-3">
            <Button Size="small" Color="white" IconRight>
              Category
            </Button>
            <Button Size="small" Color="white" IconRight>
              Product type
            </Button>
            <Button Size="small" Color="white" IconRight>
              Price
            </Button>
            <Button Size="small" Color="white" IconRight>
              Brand
            </Button>
          </div>
          <div className="flex items-center">
            <p className="mr-4 text-body-sm">Sorting by:</p>
            <Button Size="small" Color="white" IconRight>
              Date added
            </Button>
          </div>
        </nav>
      </header>

      {/* this is list Product component */}
      <div className="px-6 py-7 laptop:px-20 laptop:pb-10 relative z-20">
        {/* Product Item Lists */}
        {status !== 'loading' ? (
          <ProductItemListing products={productsList} />
        ) : (
          <div>loading...</div>
        )}

        {/* Load more Button */}
        {visible ? (
          <div className="flex mt-8 laptop:max-w-[180px] laptop:mx-auto">
            <Button Color="secondary" onClick={handleLoadMore}>
              View collection
            </Button>
          </div>
        ) : (
          ''
        )}
      </div>

      {/* this is Contact component */}
      <div className="hidden laptop:flex">
        <img className="w-1/2" src={clubImg} alt="join club" />
        <div className="w-1/2 object-cover p-[70px] flex flex-col justify-between">
          <div>
            <h3 className="text-h2">Join the club and get the benefits</h3>
            <p className="text-h5 my-5 w-4/5">
              Sign up for our newsletter and receive exclusive offers on new
              ranges, sale, pop up store and more
            </p>
          </div>
          <EmailField Color="light" />
        </div>
      </div>
    </div>
  )
}

export default ProductListingPage
