/*
Name: BannerCarousel
Description: To show banner carousel on top of the web
Properties: 
  slides: string[] (an array of banners)
*/

import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

function BannerCarousel({ slides }) {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'center' }, [
    Autoplay({ delay: 5000, stopOnInteraction: false })
  ])
  return (
    <div className="w-full overflow-hidden bg-dark_primary" ref={emblaRef}>
      <div className="flex items-center">
        {slides.map((slide, index) => (
          <div
            className="relative shrink-0 grow-0 basis-full text-body-sm text-white text-center cursor-pointer"
            key={index}
          >
            {slide}
          </div>
        ))}
      </div>
    </div>
  )
}

export default BannerCarousel
