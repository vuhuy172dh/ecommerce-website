import ProductCheckout from './productCheckout'

function ProductCheckoutList({ productList }) {
  return (
    <div className="w-full flex flex-col gap-4">
      {productList.map((product) => (
        <ProductCheckout
          key={product.uid}
          img={product.cartItem.arrImg[0]}
          name={product.cartItem.name}
          price={product.cartItem.price}
          numberProduct={product.number}
        />
      ))}
    </div>
  )
}

export default ProductCheckoutList
