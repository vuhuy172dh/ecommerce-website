/*
Name: PurchaseProductItem
Description: purchase product item that showed in purchase
*/

function PurchaseProductItem({ product }) {
  return (
    <div className="w-full h-24 laptop:h-32 flex">
      {/*img*/}
      <div className="laptop:w-[10%] w-16 h-full rounded-lg overflow-hidden">
        <img
          src={product.cartItem.arrImg[0]}
          alt="img"
          className="w-full h-full object-cover"
        />
      </div>
      {/*info*/}
      <div className="w-[60%] laptop:w-[80%] pl-2 flex flex-col justify-start">
        <p className="text-h6 laptop:text-h4 text-black dark:text-light_grey line-clamp-1 laptop:line-clamp-2">
          {product.cartItem.name}
        </p>
        <p className="text-body-sm laptop:text-body-md text-black/70 dark:text-light_grey/60 line-clamp-1 laptop:line-clamp-3">
          {product.cartItem.description}
        </p>
        <p className="text-body-sm laptop:text-body-md text-black/70 dark:text-light_grey/60">
          x{product.number}
        </p>
        <p className="text-body-sm laptop:text-body-md text-black/70 dark:text-light_grey/60">
          {product.cartItem.price}$
        </p>
      </div>
      {/*price*/}
      <div className="w-[10%] h-full flex items-center justify-center">
        <p>{(product.number * product.cartItem.price).toFixed(2)}$</p>
      </div>
    </div>
  )
}

export default PurchaseProductItem
