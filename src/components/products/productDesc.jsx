/*
Name: ProductDesc
Description: Product Description (for Product Detail Page)
Properties:
  - name: string 
  - price: number
  - desc: string
  - dimensions: object
  - quantity: number
*/

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

import { Button } from '../buttons'

function ProductDesc({
  name,
  price,
  desc,
  width,
  height,
  depth,
  quantity,
  saved,
  handleAddToCart,
  handleAddToWishlist,
  removeFromWishlist,
  handleComment
}) {
  //
  const [count, setCount] = useState(1)
  //handle increase count
  const increaseCount = () => {
    if (count < quantity) setCount(count + 1)
  }
  //handle decrease count
  const decreaseCount = () => {
    if (count > 1) setCount(count - 1)
  }

  return (
    <div className="col-span-4 laptop:col-span-6 laptop:ml-9 px-2">
      {/* Top Text */}
      <div className="mt-7 mb-4 laptop:mt-9 laptop:mb-7">
        <h3 className="text-h3 mb-3 laptop:text-h1 laptop:mb-4">{name}</h3>
        <h4 className="text-h4 laptop:text-h3">${price}</h4>
      </div>
      <hr />
      {/* Description */}
      <div className="mt-7 laptop:mt-6">
        <h5 className="text-h5 mb-3">Product description</h5>
        <small className="text-body-sm laptop:text-body-md">{desc}</small>
      </div>
      {/* Dimensions */}
      <div className="mt-7 laptop:mt-9 laptop:w-80">
        <h5 className="text-h5 mb-3 laptop:mb-6">Dimensions</h5>
        <hr className="hidden" />
        {/* Dimensions Metrics */}
        <div className="flex justify-between items-center mt-4 ">
          <div>
            <h6 className="text-h6 mb-4">Height</h6>
            <small className="text-body-sm laptop:text-body-md">
              {height}cm
            </small>
          </div>
          <div className="h-11 w-1 bg-border_grey"></div>
          <div>
            <h6 className="text-h6 mb-4">Width</h6>
            <small className="text-body-sm laptop:text-body-md">
              {width}cm
            </small>
          </div>
          <div className="h-11 w-1 bg-border_grey"></div>
          <div>
            <h6 className="text-h6 mb-4">Depth</h6>
            <small className="text-body-sm laptop:text-body-md">
              {depth}cm
            </small>
          </div>
        </div>
      </div>
      {/* Stepper */}
      <div className="mt-7 laptop:w-fit laptop:mt-10">
        <h5 className="text-h5 mb-3 ">Quantity</h5>
        <div className="flex items-center gap-2">
          {/*Counter*/}
          <div>
            <div className="min-w-fit min-h-fit p-2 flex justify-center items-center gap-5 rounded-xl bg-light_grey dark:bg-dark_secondary border-border_grey dark:border-dark_secondary shadow-sm shadow-gray-600/50 dark:shadow-gray-200/40">
              <div className="w-6 h-6 flex justify-center items-center hover:bg-border_dark dark:hover:bg-secondary rounded-full cursor-pointer">
                <FontAwesomeIcon
                  icon={faMinus}
                  className="m-auto"
                  onClick={decreaseCount}
                />
              </div>
              <div>{count}</div>
              <div className="w-6 h-6 flex justify-center items-center hover:bg-border_dark dark:hover:bg-secondary rounded-full cursor-pointer">
                <FontAwesomeIcon
                  icon={faPlus}
                  className="m-auto"
                  onClick={increaseCount}
                />
              </div>
            </div>
          </div>
          {/*remain on stock*/}
          <div>{quantity} items</div>
          {/**/}
          <div
            className="cursor-pointer w-fit px-2 bg-primary rounded-full text-light_grey"
            onClick={handleComment}
          >
            Comment
          </div>
        </div>
      </div>
      {/* Group btn */}
      <div className="gap-4 flex flex-col laptop:items-center mt-8 mb-8 laptop:mt-12 laptop:w-96 laptop:flex-row-reverse">
        <Button
          Color={saved ? 'red' : 'white'}
          onClick={saved ? removeFromWishlist : handleAddToWishlist}
        >
          {saved ? 'Saved to favorites' : 'Save to favorites'}
        </Button>
        <Button Color="primary" onClick={() => handleAddToCart(count)}>
          Add to cart
        </Button>
      </div>
    </div>
  )
}

export default ProductDesc
