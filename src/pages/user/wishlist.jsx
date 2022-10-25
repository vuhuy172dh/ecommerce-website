import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

import { ProductItemListing } from '../../components/products'
import {
  getWishlist,
  selectWishlistList,
  selectWishlistStatus
} from '../../redux/features/wishlist/wishlistSlice'
import { selectUserUid } from '../../redux/features/userSlice'
import { PagePreloader } from '../../components/preloader'

function Wishlist() {
  const dispatch = useDispatch()
  const wishlistList = useSelector(selectWishlistList)
  const wishlistStatus = useSelector(selectWishlistStatus)
  const userUid = useSelector(selectUserUid)

  useEffect(() => {
    if (wishlistList.length === 0) {
      dispatch(getWishlist(userUid))
    }
  }, [])

  let itemList = []
  wishlistList.map((item) => itemList.push(item.product))

  return wishlistStatus === 'success' && wishlistList.length !== 0 ? (
    <div className="w-full px-4 pb-14 h-full overflow-auto">
      <ProductItemListing products={itemList} />
    </div>
  ) : wishlistList.length === 0 && wishlistStatus !== 'loading' ? (
    <div>No wishlist</div>
  ) : (
    <PagePreloader />
  )
}

export default Wishlist
