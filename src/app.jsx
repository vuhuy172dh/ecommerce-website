import React from 'react'
import { Routes, Route, Outlet, useLocation } from 'react-router-dom'
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
import Category from './pages/category'
import CheckoutInformation from './pages/checkout/information'

const SidebarLayout = () => (
  <div className="laptop:flex">
    <Sidebar />
    <Outlet />
  </div>
)

function App() {
  const path = useLocation().pathname
  return (
    <div>
      {path === '/signin' ||
        path === '/signup' ||
        path === '/forgetPassword' ||
        path === '/user/checkout/information' ||
        path === '/user/checkout/shipping' ||
        path === '/user/checkout/payment' || (
          <header>
            <NavMode>
              <Navbar />
              <NavDrawer />
            </NavMode>
            <DarkModeButton />
            <CartFloatButton />
          </header>
        )}
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route element={<SidebarLayout />}>
            <Route path="/user/account/profile" element={<Profile />} />
            <Route path="/user/account/address" element={<Address />} />
            <Route path="/user/account/purchases" element={<Purchase />} />
            <Route path="/user/account/wishlist" element={<Wishlist />} />
            <Route
              path="/user/account/changePassword"
              element={<ChangePassword />}
            />
          </Route>
          <Route element={<Checkout />}>
            <Route
              path="/user/checkout/information"
              element={<CheckoutInformation />}
            />
          </Route>
          <Route path="/productCart" element={<ProductCartPage />} />
          <Route path="/products" element={<ProductListingPage />} />
          <Route path="/product/:productId" element={<ProductDetailPage />} />
          <Route path="/products/:category" element={<Category />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgetPassword" element={<ForgetPassword />} />
          <Route path="/vacancies" element={<Vacancies />} />
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
    </div>
  )
}

export default App
