import Button from "../components/button"
import ProductItem from "../components/productItem"

import img1 from '../assets/images/ThreeVases.png'
import img2 from '../assets/images/CeilingLamp.png'
import img3 from '../assets/images/SingleVase.png'
import img4 from '../assets/images/DarkChair.png'

function ProductListingPage() {

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

  return (
    <div className='w-[100%]'>
      <div className="h-52 bg-gray-100 pt-8 px-6">
        <h2 className="text-center mb-8 text-h2">View all products</h2>
        <div className="flex gap-3">
          <Button Size="small" Color='white' IconRight>Sorting</Button>
          <Button Size="small" Color='white' IconRight>Filtering</Button>
        </div>
      </div>
      <div className='px-6 py-7'>
        <div className="grid grid-cols-2 gap-4">
              {
                productItems.map(item => (
                  <ProductItem key={item.id} Img={item.imgUrl} Name={item.name} Price={item.price}/>
                ))
              }
        </div>
        <div className="flex mt-8">
          <Button Color='secondary'>View collection</Button>
        </div>
      </div>
    </div>
  ) 
}

export default ProductListingPage
