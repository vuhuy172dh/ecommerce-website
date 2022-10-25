import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'

import { useDarkMode } from '../../hooks/useDarkMode'
import { useNavMode } from '../../hooks/useNavMode'
import useScrollPosition from '../../hooks/useScrollPosition'
import { BannerCarousel } from '../others'
import { ButtonIcon, LinkButton } from '../buttons'
import { selectUserUid } from '../../redux/features/userSlice'
import { signOut } from '../../services/auth/index'
import {
  selectCategories,
  selectCategoryStatus,
  getCategories
} from '../../redux/features/category/categorySlice'
import { useSearchMode } from '../../hooks/useSearchMode'
import { setEmptyWishlist } from '../../redux/features/wishlist/wishlistSlice'
import { setEmptyCart } from '../../redux/features/carts/cartSlice'
import { setLogOutUser } from '../../redux/features/userSlice'

function Navbar() {
  const handleMode = useNavMode().handleMode
  const { mode: darkMode } = useDarkMode()
  const handleSearchMode = useSearchMode().handleSearchMode
  const scrollY = useScrollPosition()
  const [userHover, setUserHover] = useState(false)
  const navigate = useNavigate()

  const dispatch = useDispatch()

  //get user name
  const userUid = useSelector(selectUserUid)
  const categories = useSelector(selectCategories)
  const categoryStatus = useSelector(selectCategoryStatus)

  const handleSignOut = () => {
    signOut(dispatch)
    dispatch(setLogOutUser())
    dispatch(setEmptyWishlist())
    dispatch(setEmptyCart())
    navigate('/')
  }

  useEffect(() => {
    dispatch(getCategories())
  }, [])

  return (
    <div className="w-full flex justify-center mb-28 tablet:mb-36 relative z-40">
      <div
        className={`w-full tablet:w-4/5 mb-8 ${
          scrollY === 0
            ? 'fixed top-0 bg-light_grey border-border_grey dark:bg-dark_secondary dark:border-secondary'
            : 'fixed top-0 tablet:-translate-y-16 bg-white/30 border-white/30 backdrop-blur-xl dark:bg-dark_secondary/70 dark:border-secondary/30'
        } flex flex-col items-center z-10 border rounded-b-lg shadow-lg shadow-gray-500/40 dark:shadow-gray-700/50 transition-all duration-300`}
      >
        {/* banner carousel */}
        <div className="w-full relative">
          <BannerCarousel
            slides={[
              'Free delivery on all orders over 50$ with code easter checkout',
              'New Arrivals',
              'Best Sellers'
            ]}
          />
        </div>

        {/* navbar top */}
        <div className="w-full py-1 px-8 flex justify-between items-center">
          {/* Search field */}
          <div
            className="mobile:hidden tablet:block relative"
            onClick={handleSearchMode}
          >
            <ButtonIcon Icon="search" Color={darkMode} />
          </div>

          {/* Avion Logo */}
          <div className="text-h3 dark:text-white">
            <Link to="/">Avion</Link>
          </div>

          <div className="flex gap-2 items-center">
            {/* search field */}
            <div className="tablet:hidden" onClick={handleSearchMode}>
              <ButtonIcon Color={darkMode} Icon="search" />
            </div>

            {/* cart icon button */}
            <Link to="/productCart">
              <ButtonIcon
                Icon="cart"
                Color={darkMode === 'light' ? 'light' : 'dark'}
              />
            </Link>

            {/* Menu icon button */}
            <div className="tablet:hidden" onClick={handleMode}>
              <ButtonIcon
                Icon="menu"
                Color={darkMode === 'light' ? 'light' : 'dark'}
              />
            </div>

            {/*User icon button */}
            <div
              className="block relative"
              onMouseEnter={() => setUserHover(true)}
              onMouseLeave={() => setUserHover(false)}
            >
              <Link to="/user/account/profile">
                <ButtonIcon
                  Icon="user"
                  Color={darkMode === 'light' ? 'light' : 'dark'}
                />
              </Link>
              {/*show when signed in*/}
              <AnimatePresence>
                {userHover && userUid && (
                  <motion.div
                    className="w-[200px] py-6 absolute z-40 bottom-0 right-0 bg-border_dark dark:bg-secondary translate-y-full cursor-pointer flex rounded-md shadow-md shadow-gray-600/40 dark:shadow-light_grey/30 flex-col gap-3"
                    initial={{ y: '200%', opacity: 0 }}
                    animate={{ y: '100%', opacity: 1 }}
                    exit={{ y: '150%', opacity: 0 }}
                  >
                    <motion.div
                      initial={{ opacity: 0.6, x: 0 }}
                      whileHover={{ opacity: 1, x: -20 }}
                      className="text-h5 px-6 flex justify-end"
                      onClick={() => {
                        navigate('/user/account/purchases')
                      }}
                    >
                      Purchase
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0.6, x: 0 }}
                      whileHover={{ opacity: 1, x: -20 }}
                      className="text-h5 px-6 flex justify-end"
                      onClick={() => {
                        navigate('/user/account/wishlist')
                      }}
                    >
                      Wishlist
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0.6, x: 0 }}
                      whileHover={{ opacity: 1, x: -20 }}
                      className="text-h5 px-6 flex justify-end"
                      onClick={handleSignOut}
                    >
                      Sign Out
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* divider */}
        <hr className="w-[calc(100%-4rem)] border-t-1 border-[rgba(0,0,0,0.1)] dark:border-secondary hidden laptop:block" />

        {/* navbar bottom */}
        <div className="justify-center h-10 hidden tablet:flex">
          {/*categories*/}
          <ul className=" flex">
            {categoryStatus === 'idle' ? (
              categories.map((category) => (
                <li className="text-body-md" key={category.uuid}>
                  <LinkButton
                    path={`/products/${category.name
                      .replace(' ', '-')
                      .toLowerCase()}`}
                    size="large"
                    color={darkMode === 'light' ? 'dark' : 'light'}
                  >
                    {category.name}
                  </LinkButton>
                </li>
              ))
            ) : (
              <div>Loading</div>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
