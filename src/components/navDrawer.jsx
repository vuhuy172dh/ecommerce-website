import { useDarkMode } from '../hooks/useDarkMode'
import { useNavMode } from '../hooks/useNavMode'
import EmailField from './emailField'
import LinkButton from './linkButton'
import SocialMedia from './socialMedia'

function NavDrawer() {
  const { mode, handleMode } = useNavMode()
  const { mode: darkMode } = useDarkMode()

  return (
    <div
      className={`w-full h-screen tablet:hidden fixed bottom-0 ${
        mode ? 'visible z-50 ' : 'invisible -z-10'
      } transition-all duration-300`}
    >
      {/* navdrawer's backdrop */}
      <div
        className="w-full h-screen fixed top-0 left-0 bg-white/50 dark:bg-secondary/50 backdrop-blur-sm z-10 cursor-pointer"
        onClick={handleMode}
      ></div>

      {/* navdrawer's content */}
      <div
        className={`w-full h-[90vh] fixed bottom-0 left-0 z-20 bg-white dark:bg-secondary border-dark_secondary border-t rounded-t-[2rem] transition-all duration-300 ${
          mode ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        } overflow-auto`}
      >
        {/* 'CATEGORIES' component */}
        <div className="flex flex-col w-full px-4 mt-4">
          {/* Menu title */}
          <p className="text-center text-h3">CATEGORIES</p>
          {/* Divider */}
          <hr className="border-t border-t-border_dark dark:border-t-border_dark/40" />

          {/* '' */}
          <div className="mt-4 flex columns-2 gap-28">
            <ul className="flex-1 flex flex-col gap-4">
              <li>
                <LinkButton
                  size="small"
                  color={darkMode === 'light' ? 'dark' : 'light'}
                >
                  All products
                </LinkButton>
              </li>
              <li>
                <LinkButton
                  size="small"
                  color={darkMode === 'light' ? 'dark' : 'light'}
                >
                  Plant pots
                </LinkButton>
              </li>
              <li>
                <LinkButton
                  size="small"
                  color={darkMode === 'light' ? 'dark' : 'light'}
                >
                  Ceramics
                </LinkButton>
              </li>
              <li>
                <LinkButton
                  size="small"
                  color={darkMode === 'light' ? 'dark' : 'light'}
                >
                  Tables
                </LinkButton>
              </li>
            </ul>
            <ul className="flex-1 flex flex-col gap-4">
              <li>
                <LinkButton
                  size="small"
                  color={darkMode === 'light' ? 'dark' : 'light'}
                >
                  Chairs
                </LinkButton>
              </li>
              <li>
                <LinkButton
                  size="small"
                  color={darkMode === 'light' ? 'dark' : 'light'}
                >
                  Crockery
                </LinkButton>
              </li>
              <li>
                <LinkButton
                  size="small"
                  color={darkMode === 'light' ? 'dark' : 'light'}
                >
                  Tableware
                </LinkButton>
              </li>
              <li>
                <LinkButton
                  size="small"
                  color={darkMode === 'light' ? 'dark' : 'light'}
                >
                  Cutlery
                </LinkButton>
              </li>
            </ul>
          </div>
        </div>

        {/* 'MENU' component */}
        <div className="flex flex-col w-full px-4 mt-4">
          {/* Menu title */}
          <p className="text-center text-h3">MEMU</p>
          {/* Divider */}
          <hr className="border-t border-t-border_dark" />

          {/* Menu list */}
          <div className="mt-4 flex columns-2 gap-28">
            <ul className="flex-1 flex flex-col gap-4">
              <li>
                <LinkButton
                  size="small"
                  color={darkMode === 'light' ? 'dark' : 'light'}
                >
                  New Arrivals
                </LinkButton>
              </li>
              <li>
                <LinkButton
                  size="small"
                  color={darkMode === 'light' ? 'dark' : 'light'}
                >
                  Best Sellers
                </LinkButton>
              </li>
            </ul>
            <ul className="flex-1 flex flex-col gap-4">
              <li>
                <LinkButton
                  size="small"
                  color={darkMode === 'light' ? 'dark' : 'light'}
                >
                  Recently viewed
                </LinkButton>
              </li>
              <li>
                <LinkButton
                  size="small"
                  color={darkMode === 'light' ? 'dark' : 'light'}
                >
                  Popular this week
                </LinkButton>
              </li>
            </ul>
          </div>
        </div>

        {/* 'OUR COMPANY' component */}
        <div className="flex flex-col w-full px-4 mt-4">
          {/* Menu title */}
          <p className="text-center text-h3">OUR COMPANY</p>
          {/* Divider */}
          <hr className="border-t border-t-border_dark" />

          {/* Menu list */}
          <div className="mt-4 flex columns-2 gap-28">
            <ul className="flex-1 flex flex-col gap-4">
              <li>
                <LinkButton
                  size="small"
                  color={darkMode === 'light' ? 'dark' : 'light'}
                >
                  About us
                </LinkButton>
              </li>
              <li>
                <LinkButton
                  size="small"
                  color={darkMode === 'light' ? 'dark' : 'light'}
                >
                  Vacancies
                </LinkButton>
              </li>
            </ul>
            <ul className="flex-1 flex flex-col gap-4">
              <li>
                <LinkButton
                  size="small"
                  color={darkMode === 'light' ? 'dark' : 'light'}
                >
                  Contact Us
                </LinkButton>
              </li>
              <li>
                <LinkButton
                  size="small"
                  color={darkMode === 'light' ? 'dark' : 'light'}
                >
                  Privacy
                </LinkButton>
              </li>
              <li>
                <LinkButton
                  size="small"
                  color={darkMode === 'light' ? 'dark' : 'light'}
                >
                  Returns Policy
                </LinkButton>
              </li>
            </ul>
          </div>
        </div>

        {/*Navdrawer footer*/}
        <div className="w-full mt-4 px-12 flex flex-col gap-4">
          {/*footer title*/}
          <p className="text-h4 font-[500]">Join our mailing list</p>

          {/*footer emal field*/}
          <EmailField Color={darkMode} />

          {/*footer social media*/}
          <div className="block">
            <SocialMedia Color={darkMode === 'light' ? 'dark' : 'light'} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavDrawer
