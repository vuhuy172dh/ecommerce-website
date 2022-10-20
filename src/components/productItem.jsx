/*
Name: ProductItem
Description: Product Item (for carousel of product or product listing page)
Properties:
  Img: string
  Name: string
  Price: string
*/

import { Link, useNavigate } from 'react-router-dom'
import Button from './button'
import { useDispatch, useSelector } from 'react-redux'
import { selectUserUid } from '../redux/features/userSlice'
import { addItemToUserCart, addToCart } from '../redux/features/carts/cartSlice'

function ProductItem({ product }) {
  const dispatch = useDispatch()
  const userUid = useSelector(selectUserUid)

  const handleAddToCart = (number = 1, product, userUid) => {
    if (userUid) {
      dispatch(addItemToUserCart(userUid, product, number))
    } else {
      dispatch(addToCart({ cartItem: product, number: number }))
    }
  }

  return (
    <div className="m-w-[200px] flex justify-center w-full rounded-lg overflow-hidden relative group shadow-lg shadow-gray-700/40 cursor-pointer">
      <Link to={`/product/${product.uuid}`}>
        <img
          src={product.arrImg?.[0]}
          alt="Product"
          className="w-full object-cover relative z-10"
        />
      </Link>
      {/* this is information */}
      <div className="w-4/5 absolute bottom-4 z-20 px-4 flex flex-col items-center bg-light_grey dark:bg-secondary rounded-xl translate-y-[calc(100%+16px)] group-hover:translate-y-[calc(70%+16px)] hover:!translate-y-0 transition-all duration-200 dark:text-light_grey">
        <p className="text-center text-h4 py-2">
          <strong>INFO</strong>
        </p>
        <hr className="w-[90%] border-t border-t-dark_primary dark:border-t-light_grey" />
        <div className="w-full py-2">
          <p>
            <strong>Name:</strong> {product.name}
          </p>
          <p>
            <strong>Price:</strong> {product.price}
          </p>
        </div>
        <div className="w-full flex mb-4">
          <Button
            Size="small"
            Color="primary"
            onClick={() => handleAddToCart(1, product, userUid)}
          >
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ProductItem
