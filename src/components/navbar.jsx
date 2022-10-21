import { Link } from 'react-router-dom'
import { useDarkMode } from '../hooks/useDarkMode'
import { useNavMode } from '../hooks/useNavMode'
import useScrollPosition from '../hooks/useScrollPosition'
import BannerCarousel from './bannerCarousel'
import ButtonIcon from './buttonIcon'
import LinkButton from './linkButton'
import { selectUserEmail } from '../redux/features/userSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { signOut } from '../services/auth/index'
import {
  selectCategories,
  selectCategoryStatus,
  getCategories
} from '../redux/features/category/categorySlice'
import { useSearchMode } from '../hooks/useSearchMode'
import { setEmptyWishlist } from '../redux/features/wishlist/wishlistSlice'
import { setEmptyCart } from '../redux/features/carts/cartSlice'

function Navbar() {
  const handleMode = useNavMode().handleMode
  const { mode: darkMode } = useDarkMode()
  const handleSearchMode = useSearchMode().handleSearchMode
  const scrollY = useScrollPosition()
  const [userHover, setUserHover] = useState(false)

  const dispatch = useDispatch()

  //get user name
  const userEmail = useSelector(selectUserEmail)
  const categories = useSelector(selectCategories)
  const categoryStatus = useSelector(selectCategoryStatus)

  const handleSignOut = () => {
    signOut(dispatch)
    dispatch(setEmptyWishlist())
    dispatch(setEmptyCart())
  }

  useEffect(() => {
    dispatch(getCategories())
  }, [])

  return (
    <div className="w-full flex justify-center mb-28 tablet:mb-36 relative z-30">
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
              className="mobile:hidden tablet:block relative"
              onMouseEnter={() => setUserHover(true)}
              onMouseLeave={() => setUserHover(false)}
            >
              <Link to={userEmail ? '/user/account/profile' : '/signin'}>
                <ButtonIcon
                  Icon="user"
                  Color={darkMode === 'light' ? 'light' : 'dark'}
                />
              </Link>
              {/*show when signed in*/}
              <div
                className={`w-[100px] bg-red-500 px-3 absolute bottom-0 translate-y-full cursor-pointer left-0 ${
                  userHover && userEmail ? 'block' : 'hidden'
                }`}
              >
                <div onClick={handleSignOut}>Sign Out</div>
              </div>
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
