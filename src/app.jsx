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
          <Route path="/ProductDetail" element={<ProductDetailPage />} />
          <Route path="/About" element={<AboutPage />} />
          <Route path="/ProductCart" element={<ProductCartPage />} />
          <Route path="/ProductListing" element={<ProductListingPage />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App
