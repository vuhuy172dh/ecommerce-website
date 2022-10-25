import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Helmet } from 'react-helmet-async'

import { Button } from '../../components/buttons'
import clubImg from '../../assets/images/features3.png'
import { EmailField } from '../../components/emails'
import { ProductItemListing } from '../../components/products'
import {
  getProducts,
  selectProducts,
  selectStatus,
  selectLastVisible,
  setClearProducts
} from '../../redux/features/productsSlice'

function ProductListingPage() {
  //declare dispatch
  const dispatch = useDispatch()
  //select state
  const status = useSelector(selectStatus)
  const products = useSelector(selectProducts)
  const lastVisible = useSelector(selectLastVisible)
  const [order, setOrder] = useState('price')
  const [sort, setSort] = useState('asc')
  const [priceIsOpen, setPriceIsOpen] = useState(false)
  const [dateIsOpen, setDateIsOpen] = useState(false)
  const priceItemButton = ['Low to High', 'High to Low']
  const dateItemButton = ['Oldest', 'Newest']

  //fetch data
  useEffect(() => {
    dispatch(setClearProducts())
    dispatch(getProducts(null, order, sort))
  }, [order, sort])

  const handleLoadMore = () => {
    dispatch(getProducts(lastVisible, order, sort))
  }

  return (
    <div className="relative z-20">
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
          <Button
            Size="small"
            Color="white"
            IsOpen={priceIsOpen}
            HandleOpen={() => {
              setPriceIsOpen(!priceIsOpen)
              setDateIsOpen(false)
            }}
            HandleItemClick={(index) => {
              setOrder('price')
              if (index === 0) setSort('asc')
              if (index === 1) setSort('desc')
            }}
            DropItem={priceItemButton}
            IconRight
          >
            Price
          </Button>
          <Button
            Size="small"
            Color="white"
            IsOpen={dateIsOpen}
            HandleOpen={() => {
              setDateIsOpen(!dateIsOpen)
              setPriceIsOpen(false)
            }}
            HandleItemClick={(index) => {
              setOrder('create_date')
              if (index === 0) setSort('asc')
              if (index === 1) setSort('desc')
            }}
            DropItem={dateItemButton}
            IconRight
          >
            Date added
          </Button>
        </div>

        {/* this is Navigation component */}
        <nav className="hidden laptop:flex justify-between items-center px-6">
          <div className="flex items-center gap-3">
            <Button
              Size="small"
              IsOpen={priceIsOpen}
              HandleOpen={() => {
                setPriceIsOpen(!priceIsOpen)
                setDateIsOpen(false)
              }}
              HandleItemClick={(index) => {
                setOrder('price')
                if (index === 0) setSort('asc')
                if (index === 1) setSort('desc')
              }}
              Color="white"
              DropItem={priceItemButton}
              IconRight
            >
              Price
            </Button>
          </div>
          <div className="flex items-center">
            <p className="mr-4 text-body-sm">Sorting by:</p>
            <Button
              Size="small"
              IsOpen={dateIsOpen}
              HandleOpen={() => {
                setDateIsOpen(!dateIsOpen)
                setPriceIsOpen(false)
              }}
              HandleItemClick={(index) => {
                setOrder('create_date')
                if (index === 0) setSort('asc')
                if (index === 1) setSort('desc')
              }}
              Color="white"
              DropItem={dateItemButton}
              IconRight
            >
              Date added
            </Button>
          </div>
        </nav>
      </header>

      {/* this is list Product component */}
      <div className="px-6 py-7 laptop:px-20 laptop:pb-10 relative z-20">
        {/* Product Item Lists */}
        {status !== 'loading' ? (
          <ProductItemListing products={products} />
        ) : (
          <div>loading...</div>
        )}

        {/* Load more Button */}
        <div className="flex mt-8 laptop:max-w-[180px] laptop:mx-auto">
          <Button Color="secondary" onClick={handleLoadMore}>
            View collection
          </Button>
        </div>
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
