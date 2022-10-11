import ReactDOM from 'react-dom/client'
import App from './app'
import './styles/index.css'
import { BrowserRouter } from 'react-router-dom'
import ScrollToTop from './helper/scrollToTop'
import DarkMode from './hooks/useDarkMode'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <BrowserRouter>
    <DarkMode>
      <ScrollToTop />
      <App />
    </DarkMode>
  </BrowserRouter>
)
