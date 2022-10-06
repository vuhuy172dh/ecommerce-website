import ProductItem from './productItem'

function ProductItemListing({ products }) {
  return (
    <div className="grid grid-cols-2 gap-4 laptop:grid-cols-4 laptop:gap-x-5 laptop:gap-y-7">
      {products.map((item) => (
        <ProductItem
          key={item.id}
          Img={item.imgUrl}
          Name={item.name}
          Price={item.price}
        />
      ))}
    </div>
  )
}

export default ProductItemListing
