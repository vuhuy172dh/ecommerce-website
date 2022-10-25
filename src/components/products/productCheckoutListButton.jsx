import { motion } from 'framer-motion'
import { useState } from 'react'
import ProductCheckout from './productCheckout'

function ProductCheckoutListButton({ products }) {
  const [productsClick, setProductsClick] = useState(false)

  const handleProductsClick = () => {
    setProductsClick(!productsClick)
  }

  return (
    <motion.nav
      className="flex-1 w-full"
      initial={false}
      animate={productsClick ? 'open' : 'closed'}
    >
      <motion.button
        className="text-light_grey/70 hover:text-light_grey bg-primary/70 py-1 px-3 rounded-lg"
        onClick={handleProductsClick}
      >
        Products
      </motion.button>
      <motion.ul
        className="w-[200%] flex flex-col gap-2 mt-2"
        variants={{
          open: {
            opacity: 1,
            height: 'fit-content',
            transition: {
              type: 'spring',
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05
            }
          },
          closed: {
            opacity: 0,
            height: 0,
            transition: {
              type: 'spring',
              bounce: 0,
              duration: 0.3
            }
          }
        }}
      >
        {products.map((item) => {
          console.log(item)
          return (
            <motion.li
              key={item.uid}
              variants={{
                open: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: 'spring',
                    stiffness: 300,
                    damping: 24
                  }
                },
                closed: {
                  opacity: 0,
                  y: 20,
                  transition: { duration: 0.2 }
                }
              }}
            >
              <ProductCheckout
                img={item.cartItem.arrImg[0]}
                name={item.cartItem.name}
                price={item.cartItem.price}
                numberProduct={item.number}
              />
            </motion.li>
          )
        })}
      </motion.ul>
    </motion.nav>
  )
}

export default ProductCheckoutListButton
