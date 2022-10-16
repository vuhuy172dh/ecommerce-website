import ProductItemListing from '../../components/productItemListing'

import img1 from '../../assets/images/ThreeVases.png'
import img2 from '../../assets/images/CeilingLamp.png'
import img3 from '../../assets/images/SingleVase.png'
import img4 from '../../assets/images/DarkChair.png'

const wishlistItems = [
  {
    id: 1,
    imgUrl: img1,
    name: 'Rustic Vase Set',
    price: 155
  },
  {
    id: 2,
    imgUrl: img2,
    name: 'The Luccy Lamp',
    price: 399
  },
  {
    id: 3,
    imgUrl: img3,
    name: 'The Silky Vase',
    price: 125
  },
  {
    id: 4,
    imgUrl: img4,
    name: 'The Silky Vase',
    price: 125
  },
  {
    id: 5,
    imgUrl: img1,
    name: 'The Silky Vase',
    price: 125
  },
  {
    id: 6,
    imgUrl: img2,
    name: 'The Silky Vase',
    price: 125
  },
  {
    id: 4,
    imgUrl: img4,
    name: 'The Silky Vase',
    price: 125
  },
  {
    id: 5,
    imgUrl: img1,
    name: 'The Silky Vase',
    price: 125
  },
  {
    id: 6,
    imgUrl: img2,
    name: 'The Silky Vase',
    price: 125
  }
]

function Wishlist() {
  return (
    <div className="w-full px-4 h-full overflow-auto">
      <ProductItemListing products={wishlistItems} />
    </div>
  )
}

export default Wishlist
