import { Routes, Route } from 'react-router-dom'
import AboutPage from './pages/about'
import HomePage from './pages/home'
import ProductCartPage from './pages/productCart'
import ProductDetailPage from './pages/productDetail'
import ProductListingPage from './pages/productListing'

function App() {
  return (
    <div>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ProductDetail" element={<ProductDetailPage />} />
          <Route path="/About" element={<AboutPage />} />
          <Route path="/ProductCart" element={<ProductCartPage />} />
          <Route path="/ProductListing" element={<ProductListingPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
