import React from 'react'
import { Routes, Route, Outlet, useLocation, Navigate } from 'react-router-dom'
import AboutPage from './pages/about'
import HomePage from './pages/home'
import ProductCartPage from './pages/productCart'
import ProductDetailPage from './pages/productDetail'
import ProductListingPage from './pages/productListing'
import Navbar from './components/navbar'
import Footer from './components/footer'
import NavDrawer from './components/navDrawer'
import NavMode from './hooks/useNavMode'
import SignIn from './pages/signIn'
import SignUp from './pages/signUp'
import ForgetPassword from './pages/forgetPassword'
import Sidebar from './components/user/sidebar'
import Address from './pages/user/address'
import Profile from './pages/user/profile'
import Purchase from './pages/user/purchase'
import Wishlist from './pages/user/wishlist'
import ChangePassword from './pages/user/changePassword'
import DarkModeButton from './components/darkModeButton'
import CartFloatButton from './components/cartFloatButton'
import Checkout from './pages/checkout/checkout'
import Vacancies from './pages/vacancies'
import ContactUs from './pages/contactUs'
import ReturnPolicy from './pages/returnPolicy'
import Privacy from './pages/Privacy'
import Category from './pages/category'
import CheckoutInformation from './pages/checkout/information'
import CheckoutShipping from './pages/checkout/shipping'
import CheckoutPayment from './pages/checkout/payment'
import SearchMode from './hooks/useSearchMode'
import SearchDrawer from './components/search/searchDrawer'
import { auth } from './services/firebase.config'
import PurchaseDetail from './pages/user/purchaseDetail'
import { useSelector, useDispatch } from 'react-redux'
import { selectUserUid, getInformation } from './redux/features/userSlice'
import { getUserCart } from './redux/features/carts/cartSlice'
import { getWishlist } from './redux/features/wishlist/wishlistSlice'
import { useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ReactDOM from 'react-dom'
import MessengerCustomerChat from 'react-messenger-customer-chat'

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
      <MessengerCustomerChat pageId="100087373081474" appId="479082790856803" />
    </div>
  )
}

export default App
