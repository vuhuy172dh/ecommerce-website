import { useEffect } from 'react'
import clubImg from '../assets/images/features3.png'
import EmailField from '../components/emailField'
import ProductItemListing from '../components/productItemListing'
import { Helmet } from 'react-helmet-async'
import {
  selectProducts,
  getCategoryProducts,
  selectStatus
} from '../redux/features/productsSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

function Category() {
  //declare dispatch
  const dispatch = useDispatch()
  //select state
  const products = useSelector(selectProducts)
  const status = useSelector(selectStatus)
  //catogory
  let { category } = useParams()
  category = category.replace('-', ' ')

  useEffect(() => {
    dispatch(getCategoryProducts(category))
  }, [category])

  return (
    <div className="relative">
      {/*Helmet async*/}
      <Helmet>
        <title>{category.toUpperCase()}</title>
      </Helmet>

      {/* this is Header component */}
      <header className=" bg-light_grey dark:bg-secondary py-8 px-6 laptop:bg-white dark:laptop:bg-dark_secondary laptop:pt-20 laptop:pb-3 laptop:px-20 relative z-30">
        <h2 className="text-center mb-10 text-h2 laptop:mb-8">
          View {category.toUpperCase()} Products
        </h2>
      </header>

      {/* this is list Product component */}
      <div className="px-6 py-7 laptop:px-20 laptop:pb-10 relative z-20">
        {/* Product Item Lists */}
        {status === 'idle' ? (
          <ProductItemListing products={products} />
        ) : (
          <div>Loading</div>
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

export default Category
