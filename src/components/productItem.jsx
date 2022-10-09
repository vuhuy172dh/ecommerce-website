/*
Name: ProductItem
Description: Product Item
Properties:
  Img: string
  Name: string
  Price: string
*/

import Button from './button'

function ProductItem({ Img, Name, Price }) {
  return (
    <div className="m-w-[200px] flex justify-center w-full rounded-lg overflow-hidden relative group shadow-lg shadow-gray-700/40 cursor-pointer">
      <img
        src={Img}
        alt="Product"
        className="w-full object-cover relative z-10"
        onClick={() => {}}
      />
      {/* this is information */}
      <div className="w-4/5 absolute bottom-4 z-20 px-4 flex flex-col items-center bg-light_grey rounded-xl translate-y-[calc(100%+16px)] group-hover:translate-y-[calc(70%+16px)] hover:!translate-y-0 transition-all duration-200">
        <p className="text-center text-h4 py-2">
          <strong>INFO</strong>
        </p>
        <hr className="w-[90%] border-t border-t-dark_primary" />
        <div className="w-full py-2">
          <p>
            <strong>Name:</strong> {Name}
          </p>
          <p>
            <strong>Price:</strong> {Price}
          </p>
        </div>
        <div className="w-full flex mb-4">
          <Button Size="small" Color="primary">
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ProductItem
