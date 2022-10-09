import { Link } from 'react-router-dom'
import { useNavMode } from '../hooks/useNavMode'
import useScrollPosition from '../hooks/useScrollPosition'
import BannerCarousel from './bannerCarousel'
import ButtonIcon from './buttonIcon'
import LinkButton from './linkButton'
import SearchField from './searchField'

function Navbar() {
  const { mode, handleMode } = useNavMode()
  const scrollY = useScrollPosition()

  return (
    <div className="w-full flex justify-center mb-20 tablet:mb-36 relative z-30">
      <div
        className={`w-full tablet:w-4/5 mb-8 ${
          scrollY === 0
            ? 'fixed top-0 bg-light_grey border-border_grey'
            : 'fixed top-0 tablet:-translate-y-16 bg-white/30 border-white/30 backdrop-blur-xl'
        } flex flex-col items-center z-10 border rounded-b-lg shadow-lg shadow-gray-500/40 transition-all duration-300`}
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
          <div className="text-h3 tablet:-translate-x-full">
            <Link to="/">Avion</Link>
          </div>

          <div className="flex gap-2 items-center">
            {/* search field */}
            <div className="tablet:hidden">
              <SearchField />
            </div>

            {/* cart icon button */}
            <ButtonIcon Icon="cart" />

            {/* Menu icon button */}
            <div className="tablet:hidden" onClick={handleMode}>
              <ButtonIcon Icon="menu" />
            </div>

            {/*User icon button */}
            <div className="mobile:hidden tablet:block">
              <ButtonIcon Icon="user" />
            </div>
          </div>
        </div>

        {/* divider */}
        <hr className="w-[calc(100%-4rem)] border-t-1 border-[rgba(0,0,0,0.1)] hidden laptop:block" />

        {/* navbar bottom */}
        <div className="justify-center h-10 hidden tablet:flex">
          <ul className=" flex">
            <li className="text-body-md">
              <LinkButton size="large" color="dark">
                Plant pots
              </LinkButton>
            </li>
            <li className="text-body-md">
              <LinkButton size="large" color="dark">
                Ceramics
              </LinkButton>
            </li>
            <li className="text-body-md">
              <LinkButton size="large" color="dark">
                Tables
              </LinkButton>
            </li>
            <li className="text-body-md">
              <LinkButton size="large" color="dark">
                Chairs
              </LinkButton>
            </li>
            <li className="text-body-md">
              <LinkButton size="large" color="dark">
                Crockery
              </LinkButton>
            </li>
            <li className="text-body-md">
              <LinkButton size="large" color="dark">
                Tableware
              </LinkButton>
            </li>
            <li className="text-body-md">
              <LinkButton size="large" color="dark">
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
