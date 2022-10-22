/*
Name: PurchaseProductItem
Description: purchase product item that showed in purchase
*/

function PurchaseProductItem({ product }) {
  return (
    <div className="w-full h-32 flex">
      {/*img*/}
      <div className="w-[10%] h-full rounded-lg overflow-hidden">
        <img
          src={product.cartItems.arrImg[0]}
          alt="img"
          className="w-full h-full object-cover"
        />
      </div>
      {/*info*/}
      <div className="w-[80%] pl-2 flex flex-col justify-start">
        <p className="text-h4 text-black">{product.cartItems.name}</p>
        <p className="text-body-md text-black/70">
          {product.cartItems.description}
        </p>
        <p className="text-body-md text-black/70">x{product.number}</p>
      </div>
      {/*price*/}
      <div className="w-[10%] h-full flex items-center justify-center">
        <p>{product.number * product.cartItems.price}$</p>
      </div>
    </div>
  )
}

export default PurchaseProductItem
