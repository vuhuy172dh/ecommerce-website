import ProductCartList from '../components/productCartList'
import img1 from '../assets/images/BlueChair.png'
import Button from './../components/button'

function ProductCartPage() {
  //fake API
  const cartItems = [
    {
      id: 1,
      name: 'Graystone vase',
      detail: 'A time less ceramic vase with a tru color grey glaze.',
      price: 85,
      imgUrl: img1
    },
    {
      id: 2,
      name: 'Basic white vase',
      detail: 'Beautiful and simple this is one for the classics.',
      price: 125,
      imgUrl: img1
    }
  ]
  return (
    <div className="w-[100%] mb-12 p-6 laptop:px-[180px] laptop:py-16">
      {/*Product Cart*/}
      <div className="border-b-2 border-primary-300">
        <p className="text-[24px] laptop:text-[36px]">Your shopping cart</p>
        <div className="hidden laptop:flex py-3 justify-between border-b-2 border-primary-300">
          <p className="w-[45%]">Product</p>
          <p>Quantity</p>
          <p>Total</p>
        </div>
        {/*Product Cart List*/}
        <ProductCartList cartItems={cartItems} />
      </div>
      <div className="flex flex-row-reverse my-4">
        <p className="text-[20px] text-primary">
          Subtotal &emsp; <span className="text-[24px]">$210</span>
        </p>
      </div>
      <div className="flex flex-row-reverse">
        <p className="text-primary text-[14px]">
          Taxes and shipping are calculated at checkout
        </p>
      </div>
      <div className="w-[100%] flex mt-5 laptop:w-[172px] laptop:float-right">
        <Button Color="primary" children="Go to checkout" />
      </div>
    </div>
  )
}

export default ProductCartPage
