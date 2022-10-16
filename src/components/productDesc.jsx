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

import Button from './button'
import Counter from '../components/counter'

function ProductDesc({ name, price, desc, width, height, depth, quantity }) {
  return (
    <div className="col-span-4 laptop:col-span-6 laptop:ml-9 px-2">
      {/* Top Text */}
      <div className="mt-7 mb-4 laptop:mt-9 laptop:mb-7">
        <h3 className="text-h3 mb-3 laptop:text-h1 laptop:mb-4">{name}</h3>
        <h4 className="text-h4 laptop:text-h3">£{price}</h4>
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
      <div className="mt-7 laptop:w-32 laptop:mt-10">
        <h5 className="text-h5 mb-3 ">Quantity</h5>
        <Counter />
      </div>
      {/* Group btn */}
      <div className="gap-4 flex flex-col laptop:items-center mt-8 mb-8 laptop:mt-12 laptop:w-96 laptop:flex-row-reverse">
        <Button Color="white">Save to favorites</Button>
        <Button Color="primary">Add to cart</Button>
      </div>
    </div>
  )
}

export default ProductDesc
