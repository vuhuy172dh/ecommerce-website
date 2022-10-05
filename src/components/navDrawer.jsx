import { Link } from 'react-router-dom'
import { useNavMode } from '../hooks/useNavMode'
import Button from './button'
import ButtonIcon from './buttonIcon'
import LinkButton from './linkButton'

function NavDrawer() {
  const { mode, handleMode } = useNavMode()

  return (
    <div
      className={`w-full h-screen tablet:hidden fixed bottom-0 z-20 ${
        mode ? 'visible z-10' : 'invisible -z-10'
      } transition-all duration-300`}
    >
      {/* this is navdrawer's backdrop */}
      <div
        className="w-full h-screen fixed top-0 left-0 opacity-100 backdrop-blur-sm z-10 cursor-pointer"
        onClick={handleMode}
      ></div>

      {/* this is navdrawer's content */}
      <div
        className={`w-full h-[90vh] fixed bottom-0 left-0 z-20 bg-light_grey border-t rounded-t-[2rem] transition-all duration-300 ${
          mode ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        } overflow-auto`}
      >
        {/* this is navdrawer's menu */}
        <div className="flex flex-col w-full px-4 mt-4">
          {/* Menu title */}
          <p className="text-center text-h3">CATEGORIES</p>
          {/* Divider */}
          <hr className="border-t border-t-border_dark" />

          {/* Menu list */}
          <div className="mt-4 flex columns-2 gap-28">
            <ul className="flex-1 flex flex-col gap-4">
              <li>
                <LinkButton size="small">All products</LinkButton>
              </li>
              <li>
                <LinkButton size="small">Plant pots</LinkButton>
              </li>
              <li>
                <LinkButton size="small">Ceramics</LinkButton>
              </li>
              <li>
                <LinkButton size="small">Tables</LinkButton>
              </li>
            </ul>
            <ul className="flex-1 flex flex-col gap-4">
              <li>
                <LinkButton size="small">Chairs</LinkButton>
              </li>
              <li>
                <LinkButton size="small">Crockery</LinkButton>
              </li>
              <li>
                <LinkButton size="small">Tableware</LinkButton>
              </li>
              <li>
                <LinkButton size="small">Cutlery</LinkButton>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col w-full px-4 mt-4">
          {/* Menu title */}
          <p className="text-center text-h3">MEMU</p>
          {/* Divider */}
          <hr className="border-t border-t-border_dark" />

          {/* Menu list */}
          <div className="mt-4 flex columns-2 gap-28">
            <ul className="flex-1 flex flex-col gap-4">
              <li>
                <LinkButton size="small">New Arrivals</LinkButton>
              </li>
              <li>
                <LinkButton size="small">Best Sellers</LinkButton>
              </li>
            </ul>
            <ul className="flex-1 flex flex-col gap-4">
              <li>
                <LinkButton size="small">Recently viewed</LinkButton>
              </li>
              <li>
                <LinkButton size="small">Popular this week</LinkButton>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col w-full px-4 mt-4">
          {/* Menu title */}
          <p className="text-center text-h3">OUR COMPANY</p>
          {/* Divider */}
          <hr className="border-t border-t-border_dark" />

          {/* Menu list */}
          <div className="mt-4 flex columns-2 gap-28">
            <ul className="flex-1 flex flex-col gap-4">
              <li>
                <LinkButton size="small">About us</LinkButton>
              </li>
              <li>
                <LinkButton size="small">Vacancies</LinkButton>
              </li>
            </ul>
            <ul className="flex-1 flex flex-col gap-4">
              <li>
                <LinkButton size="small">Contact Us</LinkButton>
              </li>
              <li>
                <LinkButton size="small">Privacy</LinkButton>
              </li>
              <li>
                <LinkButton size="small">Returns Policy</LinkButton>
              </li>
            </ul>
          </div>
        </div>

        {/*Navdrawer's footer*/}
        <div className="w-full mt-4 px-12 flex flex-col gap-4">
          {/*footer's title*/}
          <p className="text-h4 font-[500]">Join our mailing list</p>

          {/*footer's emal*/}
          <div className="flex">
            <input
              className="bg-border_grey pl-4 grow-[1]"
              placeholder="your@gmail.com"
            />
            <Button Size="medium" Color="primary" State="default">
              Sign up
            </Button>
          </div>

          {/*footer's social media*/}
          <div className="flex">
            <ButtonIcon Icon="linkedin" />
            <ButtonIcon Icon="facebook" />
            <ButtonIcon Icon="instagram" />
            <ButtonIcon Icon="skype" />
            <ButtonIcon Icon="twitter" />
            <ButtonIcon Icon="pinterest" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavDrawer
