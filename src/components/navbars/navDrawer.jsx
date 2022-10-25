import { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faToggleOff, faToggleOn } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'

import { useDarkMode } from '../../hooks/useDarkMode'
import { useNavMode } from '../../hooks/useNavMode'
import { EmailField } from '../emails'
import { LinkButton } from '../buttons'
import { SocialMedia } from '../others'
import {
  selectCategoryStatus,
  selectCategories,
  getCategories
} from '../../redux/features/category/categorySlice'

function NavDrawer() {
  const { mode, handleMode } = useNavMode()
  const { mode: darkMode, handleDarkMode } = useDarkMode()

  //declare react-redux and state
  const dispatch = useDispatch()
  const categories = useSelector(selectCategories)
  const status = useSelector(selectCategoryStatus)

  useEffect(() => {
    if (categories.length !== 0) {
      dispatch(getCategories())
    }
  }, [])

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
          <div className="mt-3 w-full">
            <ul className="columns-2">
              <li>
                <div className="w-fit">
                  <LinkButton
                    size="small"
                    path="/products"
                    onClick={handleMode}
                    color={darkMode === 'light' ? 'dark' : 'light'}
                  >
                    All products
                  </LinkButton>
                </div>
              </li>
              {status === 'idle' ? (
                categories.map((category) => (
                  <li key={category.uuid}>
                    <div className="w-fit my-5">
                      <LinkButton
                        size="small"
                        path={`/products/${category.name
                          .replace(' ', '-')
                          .toLowerCase()}`}
                        onClick={handleMode}
                        color={darkMode === 'light' ? 'dark' : 'light'}
                      >
                        {category.name}
                      </LinkButton>
                    </div>
                  </li>
                ))
              ) : (
                <div>Loading</div>
              )}
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
          <div className="mt-4">
            <ul className="columns-2">
              <li>
                <div className="w-fit">
                  <LinkButton
                    size="small"
                    path="/products"
                    onClick={handleMode}
                    color={darkMode === 'light' ? 'dark' : 'light'}
                  >
                    New Arrivals
                  </LinkButton>
                </div>
              </li>
              <li className="my-2">
                <div className="w-fit my-5">
                  <LinkButton
                    size="small"
                    path="/products"
                    onClick={handleMode}
                    color={darkMode === 'light' ? 'dark' : 'light'}
                  >
                    Best Sellers
                  </LinkButton>
                </div>
              </li>
              <li className="my-2">
                <div className="w-fit my-5">
                  <LinkButton
                    size="small"
                    path="/products"
                    onClick={handleMode}
                    color={darkMode === 'light' ? 'dark' : 'light'}
                  >
                    Recently viewed
                  </LinkButton>
                </div>
              </li>
              <li className="my-2">
                <div className="w-fit my-5">
                  <LinkButton
                    size="small"
                    onClick={handleMode}
                    path="/products"
                    color={darkMode === 'light' ? 'dark' : 'light'}
                  >
                    Popular this week
                  </LinkButton>
                </div>
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
          <div className="mt-4">
            <ul className="columns-2">
              <li>
                <div className="w-fit">
                  <LinkButton
                    size="small"
                    path="/about"
                    onClick={handleMode}
                    color={darkMode === 'light' ? 'dark' : 'light'}
                  >
                    About us
                  </LinkButton>
                </div>
              </li>
              <li>
                <div className="w-fit my-5">
                  <LinkButton
                    path="/vacancies"
                    onClick={handleMode}
                    size="small"
                    color={darkMode === 'light' ? 'dark' : 'light'}
                  >
                    Vacancies
                  </LinkButton>
                </div>
              </li>
              <li>
                <div className="w-fit my-5">
                  <LinkButton
                    size="small"
                    onClick={handleMode}
                    color={darkMode === 'light' ? 'dark' : 'light'}
                    path="/contactUs"
                  >
                    Contact Us
                  </LinkButton>
                </div>
              </li>
              <li>
                <div className="w-fit my-5">
                  <LinkButton
                    size="small"
                    onClick={handleMode}
                    color={darkMode === 'light' ? 'dark' : 'light'}
                    path="/privacy"
                  >
                    Privacy
                  </LinkButton>
                </div>
              </li>
              <li>
                <div className="w-fit my-5">
                  <LinkButton
                    size="small"
                    onClick={handleMode}
                    color={darkMode === 'light' ? 'dark' : 'light'}
                    path="/returnPolicy"
                  >
                    Returns Policy
                  </LinkButton>
                </div>
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
          <div className="flex items-center">
            <SocialMedia Color={darkMode} />
            <div onClick={handleDarkMode}>
              {darkMode === 'light' ? (
                <FontAwesomeIcon
                  icon={faToggleOn}
                  className="text-h2 cursor-pointer"
                />
              ) : (
                <FontAwesomeIcon
                  icon={faToggleOff}
                  className="text-h1 cursor-pointer"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavDrawer
