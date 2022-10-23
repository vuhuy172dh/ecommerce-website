/*
Name: ProductItemListing
Description: A list of Product Item
Properties: 
  products: A list of Product Object
*/

import ProductItem from './productItem'
import { motion } from 'framer-motion'

function ProductItemListing({ products }) {
  return (
    <div className="grid grid-cols-2 gap-4 laptop:grid-cols-4 laptop:gap-x-5 laptop:gap-y-7">
      {products.map((item, index) => (
        <motion.div
          key={item.uuid}
          initial={{ opacity: 0, y: -20 }}
          animate={{
            opacity: 1,
            y: 20,
            transition: {
              duration: 0.2,
              delay: 0.1 * index
            }
          }}
        >
          <ProductItem product={item} />
        </motion.div>
      ))}
    </div>
  )
}

export default ProductItemListing
