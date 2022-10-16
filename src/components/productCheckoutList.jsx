import ProductCheckout from './productCheckout'

function ProductCheckoutList({ productList }) {
  return (
    <div className="w-full flex flex-col gap-4">
      {productList.map((product, index) => (
        <ProductCheckout
          key={index}
          img={product.imgUrl}
          name={product.name}
          price={product.price}
        />
      ))}
    </div>
  )
}

export default ProductCheckoutList
