import EmailField from '../components/emailField'
import { useState, useEffect, useRef } from 'react'
import useScrollPosition from '../hooks/useScrollPosition'

// Sample img
import DandyChairImg from '../assets/images/DandyChair.png'
import CeilingLamp from '../assets/images/CeilingLamp.png'
import WhiteRoomImg from '../assets/images/features3.png'
import InfoItemList from '../components/infoItemList'
import ProductDesc from '../components/productDesc'
import ProductCarousel from '../components/productCarousel'
import ProductScrollView from '../components/productScrollView'
import Overview from '../components/overview'

function ProductDetailPage() {
  const ref = useRef(null)
  const [height, setHeight] = useState(0)
  const scrollY = useScrollPosition()
  useEffect(() => {
    const handleInnerWidth = () => {
      setHeight(ref.current.offsetHeight)
    }
    handleInnerWidth()
    window.addEventListener('resize', handleInnerWidth)

    return () => window.removeEventListener('resize', handleInnerWidth)
  })

  console.log(height, scrollY)
  return (
    <div className="mx-6 laptop:mx-20">
      {/* Product detail */}
      <section className="flex flex-col w-full tablet:flex-row tablet:gap-4">
        {/* product image list for mobile*/}
        <div className="block tablet:hidden">
          <ProductCarousel
            images={[
              DandyChairImg,
              DandyChairImg,
              DandyChairImg,
              DandyChairImg
            ]}
          />
        </div>

        {/* product image list for laptop */}
        <div className="w-full hidden tablet:block" ref={ref}>
          <ProductScrollView
            images={[DandyChairImg, CeilingLamp, DandyChairImg, CeilingLamp]}
          />
        </div>

        {/* Product information  */}
        <div className="w-full h-full sticky top-20 bg-border_grey rounded-xl shadow-xl shadow-gray-700/40">
          <ProductDesc />
        </div>

        {/* floating overview */}
        <Overview
          images={[DandyChairImg, CeilingLamp, DandyChairImg, CeilingLamp]}
          visible={
            scrollY <= (height / 4) * 3 + 144 && scrollY > 0 ? true : false
          }
        />
      </section>

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
