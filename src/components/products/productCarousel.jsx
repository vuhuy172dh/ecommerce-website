/*
Name: ProductCarousel
Description: Carousel of product images 
Properties:
  - images: array of product images
*/

import { Swiper, SwiperSlide } from 'swiper/react'

// import swiper style
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper'

function ProductCarousel({ images }) {
  return (
    <div className="w-full">
      <Swiper pagination={true} modules={[Pagination]} className="w-full">
        {images.map((img, index) => (
          <SwiperSlide key={index} className="w-full px-2">
            <div className="w-full pt-[125%] relative rounded-xl overflow-hidden shadow-lg shadow-gray-700/40">
              <img
                src={img}
                alt={index}
                className="w-full h-full absolute top-0 object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default ProductCarousel
