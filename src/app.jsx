import React from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'
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
import Address from './components/user/address'
import Profile from './components/user/profile'
import Purchase from './components/user/purchase'
import Wishlist from './components/user/wishlist'

const SidebarLayout = () => (
  <div className="laptop:flex">
    <Sidebar />
    <Outlet />
  </div>
)

function App() {
  return (
    <div>
      <header>
        <NavMode>
          <Navbar />
          <NavDrawer />
        </NavMode>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route element={<SidebarLayout />}>
            <Route path="/user/account/profile" element={<Profile />} />
            <Route path="/user/account/address" element={<Address />} />
            <Route path="/user/account/purchases" element={<Purchase />} />
            <Route path="/user/account/wishlist" element={<Wishlist />} />
          </Route>
          <Route path="/producCart" element={<ProductCartPage />} />
          <Route path="/products" element={<ProductListingPage />} />
          <Route path="/product/:productId" element={<ProductDetailPage />} />
          <Route path="/products/:category" element={<ProductListingPage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgetPassword" element={<ForgetPassword />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App
