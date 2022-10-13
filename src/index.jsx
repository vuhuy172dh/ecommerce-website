import ReactDOM from 'react-dom/client'
import App from './app'
import './styles/index.css'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import ScrollToTop from './helper/scrollToTop'
import DarkMode from './hooks/useDarkMode'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <BrowserRouter>
    <HelmetProvider>
      <DarkMode>
        <ScrollToTop />
        <App />
      </DarkMode>
    </HelmetProvider>
  </BrowserRouter>
)
