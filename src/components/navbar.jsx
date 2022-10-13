import { Link } from 'react-router-dom'
import { useDarkMode } from '../hooks/useDarkMode'
import { useNavMode } from '../hooks/useNavMode'
import useScrollPosition from '../hooks/useScrollPosition'
import BannerCarousel from './bannerCarousel'
import ButtonIcon from './buttonIcon'
import LinkButton from './linkButton'
import SearchField from './searchField'

function Navbar() {
  const { mode, handleMode } = useNavMode()
  const { mode: darkMode } = useDarkMode()
  const scrollY = useScrollPosition()

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
          <div className="mobile:hidden tablet:block relative">
            <SearchField Direction="ltr" />
          </div>

          {/* Avion Logo */}
          <div className="text-h3 tablet:-translate-x-full dark:text-white">
            <Link to="/">Avion</Link>
          </div>

          <div className="flex gap-2 items-center">
            {/* search field */}
            <div className="tablet:hidden">
              <SearchField />
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
            <div className="mobile:hidden tablet:block">
              <Link to="/user/account/profile">
                <ButtonIcon
                  Icon="user"
                  Color={darkMode === 'light' ? 'light' : 'dark'}
                />
              </Link>
            </div>
          </div>
        </div>

        {/* divider */}
        <hr className="w-[calc(100%-4rem)] border-t-1 border-[rgba(0,0,0,0.1)] dark:border-secondary hidden laptop:block" />

        {/* navbar bottom */}
        <div className="justify-center h-10 hidden tablet:flex">
          <ul className=" flex">
            <li className="text-body-md">
              <LinkButton
                size="large"
                color={darkMode === 'light' ? 'dark' : 'light'}
              >
                Plant pots
              </LinkButton>
            </li>
            <li className="text-body-md">
              <LinkButton
                size="large"
                color={darkMode === 'light' ? 'dark' : 'light'}
              >
                Ceramics
              </LinkButton>
            </li>
            <li className="text-body-md">
              <LinkButton
                size="large"
                color={darkMode === 'light' ? 'dark' : 'light'}
              >
                Tables
              </LinkButton>
            </li>
            <li className="text-body-md">
              <LinkButton
                size="large"
                color={darkMode === 'light' ? 'dark' : 'light'}
              >
                Chairs
              </LinkButton>
            </li>
            <li className="text-body-md">
              <LinkButton
                size="large"
                color={darkMode === 'light' ? 'dark' : 'light'}
              >
                Crockery
              </LinkButton>
            </li>
            <li className="text-body-md">
              <LinkButton
                size="large"
                color={darkMode === 'light' ? 'dark' : 'light'}
              >
                Tableware
              </LinkButton>
            </li>
            <li className="text-body-md">
              <LinkButton
                size="large"
                color={darkMode === 'light' ? 'dark' : 'light'}
              >
                Cutlery
              </LinkButton>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
