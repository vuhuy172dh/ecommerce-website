import LinkButton from '../linkButton'
import CeilingLamp from '../../assets/images/CeilingLamp.png'

function Sidebar() {
  return (
    <nav className="w-full h-10 bg-border_grey flex justify-center items-center laptop:w-1/5 laptop:h-screen laptop:flex-col laptop:justify-start laptop:rounded-tr-lg laptop:rounded-br-lg laptop:mr-8">
      {/*user avatar and name*/}
      <div className="items-center justify-center gap-2 my-10 hidden laptop:flex">
        {/*user avatar*/}
        <div className="w-20 h-20 rounded-full border-2 border-border_dark overflow-hidden">
          <img
            src={CeilingLamp}
            alt="user"
            className="w-full h-full object-cover"
          />
        </div>

        {/*user name*/}
        <div>
          <p className="text-h5 font-[500]">User Name</p>
        </div>
      </div>

      {/*sidebar menu*/}
      <ul className="flex justify-center items-center laptop:flex-col laptop:gap-8">
        <li>
          <LinkButton path="/user/account/profile">Profile</LinkButton>
        </li>
        <li>
          <LinkButton path="/user/account/address">Address</LinkButton>
        </li>
        <li>
          <LinkButton path="/user/account/purchases">Purchase</LinkButton>
        </li>
        <li>
          <LinkButton path="/user/account/wishlist">Wishlist</LinkButton>
        </li>
        <li>
          <LinkButton path="/user/account/changePassword">
            Change Password
          </LinkButton>
        </li>
      </ul>
    </nav>
  )
}

export default Sidebar
