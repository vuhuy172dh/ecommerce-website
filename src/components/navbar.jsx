import { Link } from 'react-router-dom'
import { useNavMode } from '../hooks/useNavMode'
import BannerCarousel from './bannerCarousel'
import ButtonIcon from './buttonIcon'

function Navbar() {
  const { mode, handleMode } = useNavMode()

  return (
    <div className="w-full flex flex-col items-center mb-4">
      {/* this is banner carousel */}
      <BannerCarousel
        slides={[
          'Free delivery on all orders over 50$ with code easter checkout',
          'New Arrivals',
          'Best Sellers'
        ]}
      />

      {/* this is navbar top */}
      <div className="w-full py-1 px-8 flex justify-between items-center">
        <div className="mobile:hidden tablet:block">
          <ButtonIcon Icon="search" />
        </div>

        <div className="text-h3">
          <Link to="/">Avion</Link>
        </div>

        <div className="flex gap-4 items-center">
          <div className="tablet:hidden">
            <ButtonIcon Icon="search" />
          </div>
          <ButtonIcon Icon="cart" />
          <div className="tablet:hidden" onClick={handleMode}>
            <ButtonIcon Icon="menu" />
          </div>
          <div className="mobile:hidden tablet:block">
            <ButtonIcon Icon="user" />
          </div>
        </div>
      </div>

      {/* this is divider */}
      <hr className="w-[calc(100%-4rem)] border-t-1 border-[rgba(0,0,0,0.1)] hidden laptop:block" />

      {/* this is navbar bottom */}
      <div className="justify-center hidden tablet:flex">
        <ul className="py-2 flex items-center">
          <li className="px-4 text-body-md">Plant pots</li>
          <li className="px-4 text-body-md">Ceramics</li>
          <li className="px-4 text-body-md">Tables</li>
          <li className="px-4 text-body-md">Chairs</li>
          <li className="px-4 text-body-md">Crockery</li>
          <li className="px-4 text-body-md">Tableware</li>
          <li className="px-4 text-body-md">Cutlery</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
