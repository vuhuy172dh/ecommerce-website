import { useSelector } from 'react-redux'

import { LinkButton } from '../buttons'
import CeilingLamp from '../../assets/images/CeilingLamp.png'
import { useDarkMode } from '../../hooks/useDarkMode'
import {
  selectUserAvatar,
  selectUserName
} from '../../redux/features/userSlice'

function Sidebar() {
  const { mode: darkMode } = useDarkMode()
  const userAvatar = useSelector(selectUserAvatar)
  const userName = useSelector(selectUserName)
  return (
    <nav className="w-full h-10 bg-border_grey dark:bg-secondary mb-4 flex justify-start tablet:justify-center overflow-auto no-scrollbar items-center laptop:w-1/5 laptop:h-full laptop:flex-col laptop:justify-start laptop:rounded-tr-lg laptop:rounded-br-lg laptop:mr-8 laptop:sticky laptop:top-[143px] laptop:left-0 laptop:overflow-visible laptop:mt-14 laptop:shadow-md laptop:shadow-black/50 dark:laptop:shadow-white/50">
      {/*user avatar and name*/}
      <div className="items-center justify-center gap-2 my-10 hidden laptop:flex">
        {/*user avatar*/}
        <div className="w-20 h-20 rounded-full border-2 border-border_dark overflow-hidden absolute top-0 -translate-y-1/2">
          <img
            src={userAvatar || CeilingLamp}
            alt="user"
            className="w-full h-full object-cover"
          />
        </div>

        {/*user name*/}
        <div>
          <p className="text-h5 font-[500]">{userName || 'user name'}</p>
        </div>
      </div>

      {/*sidebar menu*/}
      <ul className="flex justify-center items-center laptop:flex-col laptop:gap-8 laptop:mb-12">
        <li>
          <LinkButton
            path="/user/account/profile"
            color={darkMode === 'light' ? 'dark' : 'light'}
          >
            Profile
          </LinkButton>
        </li>
        <li>
          <LinkButton
            path="/user/account/address"
            color={darkMode === 'light' ? 'dark' : 'light'}
          >
            Address
          </LinkButton>
        </li>
        <li>
          <LinkButton
            path="/user/account/purchases"
            color={darkMode === 'light' ? 'dark' : 'light'}
          >
            Purchase
          </LinkButton>
        </li>
        <li>
          <LinkButton
            path="/user/account/wishlist"
            color={darkMode === 'light' ? 'dark' : 'light'}
          >
            Wishlist
          </LinkButton>
        </li>
        <li>
          <LinkButton
            path="/user/account/changePassword"
            color={darkMode === 'light' ? 'dark' : 'light'}
          >
            Change Password
          </LinkButton>
        </li>
      </ul>
    </nav>
  )
}

export default Sidebar
