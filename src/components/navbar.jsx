import { Link } from 'react-router-dom'
import { useNavMode } from '../hooks/useNavMode'
import BannerCarousel from './bannerCarousel'
import ButtonIcon from './buttonIcon'
import LinkButton from './linkButton'
import SearchField from './searchField'

function Navbar() {
  const { mode, handleMode } = useNavMode()

  return (
    <div className="w-full flex flex-col items-center mb-4 relative z-10">
      {/* banner carousel */}
      <BannerCarousel
        slides={[
          'Free delivery on all orders over 50$ with code easter checkout',
          'New Arrivals',
          'Best Sellers'
        ]}
      />

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
          <Link to="/producCart">
            <ButtonIcon Icon="cart" />
          </Link>

          {/* Menu icon button */}
          <div className="tablet:hidden" onClick={handleMode}>
            <ButtonIcon Icon="menu" />
          </div>

          {/*User icon button */}
          <div className="mobile:hidden tablet:block">
            <Link to="/user/account/profile">
              <ButtonIcon Icon="user" />
            </Link>
          </div>
        </div>
      </div>

      {/* divider */}
      <hr className="w-[calc(100%-4rem)] border-t-1 border-[rgba(0,0,0,0.1)] hidden laptop:block" />

      {/* navbar bottom */}
      <div className="justify-center hidden tablet:flex">
        <ul className="py-2 flex items-center">
          <li className="text-body-md">
            <LinkButton path="/" size="large">
              Plant pots
            </LinkButton>
          </li>
          <li className="text-body-md">
            <LinkButton path="/" size="large">
              Ceramics
            </LinkButton>
          </li>
          <li className="text-body-md">
            <LinkButton size="large">Tables</LinkButton>
          </li>
          <li className="text-body-md">
            <LinkButton size="large">Chairs</LinkButton>
          </li>
          <li className="text-body-md">
            <LinkButton size="large">Crockery</LinkButton>
          </li>
          <li className="text-body-md">
            <LinkButton size="large">Tableware</LinkButton>
          </li>
          <li className="text-body-md">
            <LinkButton size="large">Cutlery</LinkButton>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
