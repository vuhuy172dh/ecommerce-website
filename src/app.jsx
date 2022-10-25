import { Routes, Route, Outlet, useLocation, Navigate } from 'react-router-dom'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import HomePage from './pages/home'
import {
  Category,
  ProductCartPage,
  ProductDetailPage,
  ProductListingPage
} from './pages/products'
import {
  Checkout,
  CheckoutInformation,
  CheckoutPayment,
  CheckoutShipping
} from './pages/checkout'
import {
  AboutPage,
  ContactUs,
  Privacy,
  ReturnPolicy,
  Vacancies
} from './pages/others'
import { SignIn, SignUp, ForgetPassword } from './pages/auth'
import {
  Address,
  Profile,
  ChangePassword,
  Purchase,
  PurchaseDetail,
  Wishlist
} from './pages/user'
import { CartFloatButton, DarkModeButton } from './components/buttons'
import { NavDrawer, Navbar } from './components/navbars'
import { Footer } from './components/footers'
import NavMode from './hooks/useNavMode'
import Sidebar from './components/user/sidebar'
import SearchMode from './hooks/useSearchMode'
import SearchDrawer from './components/search/searchDrawer'
import { auth } from './services/firebase.config'

import { selectUserUid, getInformation } from './redux/features/userSlice'
import { getUserCart } from './redux/features/carts/cartSlice'
import { getWishlist } from './redux/features/wishlist/wishlistSlice'

const SidebarLayout = () => (
  <div className="laptop:flex">
    <Sidebar />
    <Outlet />
  </div>
)

function App() {
  const dispatch = useDispatch()
  const userUid = useSelector(selectUserUid)
  const path = useLocation().pathname

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log('user persistence', user)
      if (user !== null) {
        dispatch(getUserCart(user.uid))
        dispatch(getInformation(user.uid))
        dispatch(getWishlist(user.uid))
      }
    })
  }, [])

  console.log('user uid', userUid)

  return (
    <div>
      {path === '/signin' ||
        path === '/signup' ||
        path === '/forgetPassword' ||
        path === '/user/checkout/information' ||
        path === '/user/checkout/shipping' ||
        path === '/user/checkout/payment' || (
          <header>
            <SearchMode>
              <NavMode>
                <Navbar />
                <NavDrawer />
              </NavMode>
              <SearchDrawer />
            </SearchMode>
            <DarkModeButton />
            <CartFloatButton />
          </header>
        )}
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route element={<SidebarLayout />}>
            <Route
              path="/user/account/profile"
              element={userUid ? <Profile /> : <Navigate to="/signin" />}
            />
            <Route
              path="/user/account/address"
              element={userUid ? <Address /> : <Navigate to="/signin" />}
            />
            <Route
              path="/user/account/purchases"
              element={userUid ? <Purchase /> : <Navigate to="/signin" />}
            />
            <Route
              path="/user/account/wishlist"
              element={userUid ? <Wishlist /> : <Navigate to="/signin" />}
            />
            <Route
              path="/user/account/changePassword"
              element={userUid ? <ChangePassword /> : <Navigate to="/signin" />}
            />
            <Route
              path="/user/account/purchase/:purchaseId"
              element={userUid ? <PurchaseDetail /> : <Navigate to="/signin" />}
            />
          </Route>
          <Route element={<Checkout />}>
            <Route
              path="/user/checkout/information"
              element={
                userUid ? <CheckoutInformation /> : <Navigate to="/signin" />
              }
            />
            <Route
              path="/user/checkout/shipping"
              element={
                userUid ? <CheckoutShipping /> : <Navigate to="/signin" />
              }
            />
            <Route
              path="/user/checkout/payment"
              element={
                userUid ? <CheckoutPayment /> : <Navigate to="/signin" />
              }
            />
          </Route>
          <Route path="/productCart" element={<ProductCartPage />} />
          <Route path="/products" element={<ProductListingPage />} />
          <Route path="/product/:productId" element={<ProductDetailPage />} />
          <Route path="/products/:category" element={<Category />} />
          <Route
            path="/signin"
            element={userUid ? <Navigate to="/" /> : <SignIn />}
          />
          <Route
            path="/signup"
            element={userUid ? <Navigate to="/" /> : <SignUp />}
          />
          <Route
            path="/forgetPassword"
            element={userUid ? <Navigate to="/" /> : <ForgetPassword />}
          />
          <Route path="/vacancies" element={<Vacancies />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/returnPolicy" element={<ReturnPolicy />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </main>
      {path === '/signin' ||
        path === '/signup' ||
        path === '/forgetPassword' ||
        path === '/user/checkout/information' ||
        path === '/user/checkout/shipping' ||
        path === '/user/checkout/payment' || (
          <footer>
            <Footer />
          </footer>
        )}
      <ToastContainer autoClose={1000} pauseOnHover={false} />
    </div>
  )
}

export default App
