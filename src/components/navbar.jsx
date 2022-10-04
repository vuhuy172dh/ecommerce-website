import { Link } from 'react-router-dom'
import ButtonIcon from './buttonIcon'

function Navbar() {
  return (
    <div className="w-full px-4 mb-4">
      {/* this is navbar top */}
      <div className="w-full flex py-4 justify-between items-center">
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
          <div className="tablet:hidden">
            <ButtonIcon Icon="menu" />
          </div>
          <div className="mobile:hidden tablet:block">
            <ButtonIcon Icon="user" />
          </div>
        </div>
      </div>

      {/* this is divider */}
      <hr className="w-full border-t-1 border-[rgba(0,0,0,0.1)]"></hr>

      {/* this is navbar bottom */}
      <div className="flex justify-center"></div>
    </div>
  )
}

export default Navbar
