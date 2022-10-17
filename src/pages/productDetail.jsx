import EmailField from '../components/emailField'
import useScrollPosition from '../hooks/useScrollPosition'
import { useSelector, useDispatch } from 'react-redux'
import {
  getProductDetail,
  selectProduct,
  selectStatus
} from '../redux/features/productSlice'
import { addToCart, addItemToUserCart } from '../redux/features/carts/cartSlice'
import { selectUserUid } from '../redux/features/userSlice'
import WhiteRoomImg from '../assets/images/features3.png'
import { Helmet } from 'react-helmet-async'
import InfoItemList from '../components/infoItemList'
import ProductDesc from '../components/productDesc'
import ProductCarousel from '../components/productCarousel'
import ProductScrollView from '../components/productScrollView'
import Overview from '../components/overview'
import useClientRect from '../hooks/useClientRect'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

function ProductDetailPage() {
  // get scroll position
  const scrollY = useScrollPosition()
  // get element height
  const { rect: imgsRect, ref: imgsRef } = useClientRect()

  // scroll to index image when click on image overview
  const handleScroll = (index) => {
    window.scrollTo({
      top: index * (imgsRect?.height / 4) + 144,
      left: 0,
      behavior: 'smooth'
    })
  }

  //get product id
  const { productId } = useParams()

  //declare dispatch
  const dispatch = useDispatch()
  const status = useSelector(selectStatus)
  const product = useSelector(selectProduct)
  const userUid = useSelector(selectUserUid)

  //fetch Data
  useEffect(() => {
    dispatch(getProductDetail(productId))
  }, [])

  const handleAddToCart = (number = 0) => {
    if (userUid) {
      dispatch(addItemToUserCart(userUid, product, number))
    } else {
      dispatch(addToCart({ cartItem: product, number: number }))
    }
  }

  return (
    <div className="mx-2 tablet:mx-6 laptop:mx-20">
      {/*helmet async*/}
      <Helmet>
        <title>{product.name}</title>
      </Helmet>

      {/* Product detail */}
      {status !== 'loading' ? (
        <section className="flex flex-col w-full tablet:flex-row tablet:gap-4">
          {/* product image list for mobile*/}
          <div className="block tablet:hidden mb-8">
            <ProductCarousel images={product.arrImg} />
          </div>

          {/* product image list for laptop */}
          <div className="w-full hidden tablet:block" ref={imgsRef}>
            <ProductScrollView images={product.arrImg} />
          </div>

          {/* floating overview */}
          <div className="hidden tablet:block">
            <Overview
              images={product.arrImg}
              visible={
                scrollY <= (imgsRect?.height / 4) * 3 + 144 && scrollY > 0
                  ? true
                  : false
              }
              onClick={handleScroll}
            />
          </div>

          {/* Product information  */}
          <div className="w-full h-full sticky top-20 bg-border_grey dark:bg-secondary rounded-xl shadow-lg shadow-gray-700/40 dark:shadow-gray-300/40">
            <ProductDesc
              name={product.name}
              desc={product.description}
              price={product.price}
              width={product.width}
              height={product.height}
              depth={product.depth}
              quantity={product.remain}
              onClick={(number) => handleAddToCart(number)}
            />
          </div>
        </section>
      ) : (
        <div>loading....</div>
      )}

      {/* Infor Card List */}
      <div className="w-full py-12 laptop:py-20">
        <InfoItemList />
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
