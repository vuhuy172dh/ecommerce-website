/*
Name: BannerCarousel
Description: To show banner carousel on top of the web
Properties: 
  slides: string[] (an array of banners)
*/

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'

import 'swiper/css'

function BannerCarousel({ slides }) {
  return (
    <div className="w-full relative">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="bg-dark_primary dark:bg-light_grey"
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            className="text-body-sm text-center text-white dark:text-dark_secondary cursor-pointer"
          >
            {slide}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default BannerCarousel
