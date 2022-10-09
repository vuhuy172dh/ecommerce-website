import React from 'react'
import { Routes, Route, Router } from 'react-router-dom'
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
          <Route path="/user/account/profile" element={<User />} />
          <Route path="/producCart" element={<ProductCartPage />} />
          <Route path="/products" element={<ProductListingPage />} />
          <Route path="/product/:productId" element={<ProductDetailPage />} />
          <Route path="/products/:category" element={<ProductListingPage />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App
