import Button from "../components/button"
import ProductItem from "../components/productItem"

import img1 from '../assets/images/ThreeVases.png'
import img2 from '../assets/images/CeilingLamp.png'
import img3 from '../assets/images/SingleVase.png'
import img4 from '../assets/images/DarkChair.png'
import clubImg from '../assets/images/features3.png'

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
    <div>
      {/* this is Header component */}
      <header className=" bg-gray-100 py-8 px-6 laptop:bg-white laptop:pt-20 laptop:pb-3 laptop:px-20">
        <h2 className="text-center mb-10 text-h2 laptop:mb-8">View all products</h2>
        <div className="flex gap-3 laptop:hidden">
          <Button Size="small" Color='white' IconRight>Sorting</Button>
          <Button Size="small" Color='white' IconRight>Filtering</Button>
        </div>

        {/* this is Navigation component */}
        <nav className="hidden laptop:flex justify-between items-center px-6">
          <div className="flex items-center gap-3">
            <Button Size="small" Color='white' IconRight>Category</Button>
            <Button Size="small" Color='white' IconRight>Product type</Button>
            <Button Size="small" Color='white' IconRight>Price</Button>
            <Button Size="small" Color='white' IconRight>Brand</Button>
          </div>
          <div className="flex items-center">
            <p className="mr-4 text-[14px] font-normal font-satoshi">Sorting by:</p>
            <Button Size="small" Color='white' IconRight>Date added</Button>
          </div>
        </nav>
      </header>

      {/* this is list Product component */}
      <div className="px-6 py-7 laptop:px-20 laptop:pb-10">
        <div className="grid grid-cols-2 gap-4 laptop:grid-cols-4 laptop:gap-x-5 laptop:gap-y-7">
              {
                productItems.map(item => (
                  <ProductItem key={item.id} Img={item.imgUrl} Name={item.name} Price={item.price}/>
                ))
              }
        </div>
        {/* Load more Button */}
        <div className="flex mt-8 laptop:max-w-[180px] laptop:mx-auto">
          <Button Color='secondary'>View collection</Button>
        </div>
      </div>

      {/* this is Contact component */}
      <div className="hidden laptop:flex">
          <img className="w-[50%]" src={clubImg} alt="join club" />
          <div className="w-[50%] object-cover p-[70px] flex flex-col justify-between">
              <div>
                <h3 className="text-h2">Join the club and get the benefits</h3>
                <p className="text-h5 my-5 w-[80%]">Sign up for our newsletter and receive exclusive offers on new ranges, sale, pop up store and more</p>
              </div>
              <div className="flex w-[80%]">
                <input className="flex-1 bg-light_grey pl-8 outline-none" type="text" placeholder="your@email.com"/>
                <div className="w-[118px]"><Button Color="primary">Signup</Button></div>
              </div>
          </div>
      </div>
    </div>
  ) 
}

export default ProductListingPage
