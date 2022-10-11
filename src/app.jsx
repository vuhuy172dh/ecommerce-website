import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AboutPage from './pages/about'
import HomePage from './pages/home'
import ProductCartPage from './pages/productCart'
import ProductDetailPage from './pages/productDetail'
import ProductListingPage from './pages/productListing'
import Navbar from './components/navbar'
import Footer from './components/footer'
import NavDrawer from './components/navDrawer'
import NavMode from './hooks/useNavMode'
import User from './pages/user'
import SignIn from './pages/signIn'
import SignUp from './pages/signUp'
import ForgetPassword from './pages/forgetPassword'
import DarkModeButton from './components/darkModeButton'
import CartFloatButton from './components/cartFloatButton'

function App() {
  return (
    <div>
      <header>
        <NavMode>
          <Navbar />
          <NavDrawer />
        </NavMode>
        <DarkModeButton />
        <CartFloatButton />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/user/account/profile" element={<User />} />
          <Route path="/productCart" element={<ProductCartPage />} />
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
