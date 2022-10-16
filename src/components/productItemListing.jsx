/*
Name: ProductItemListing
Description: A list of Product Item
Properties: 
  products: A list of Product Object
*/

import ProductItem from './productItem'

function ProductItemListing({ products }) {
  return (
    <div className="grid grid-cols-2 gap-4 laptop:grid-cols-4 laptop:gap-x-5 laptop:gap-y-7">
      {products.map((item) => (
        <ProductItem
          key={item.uuid}
          id={item.uuid}
          img={item.arrImg[0]}
          name={item.name}
          price={item.price}
        />
      ))}
    </div>
  )
}

export default ProductItemListing
