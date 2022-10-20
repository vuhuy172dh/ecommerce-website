import ReactDOM from 'react-dom/client'
import App from './app'
import './styles/index.css'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import ScrollToTop from './helper/scrollToTop'
import DarkMode from './hooks/useDarkMode'
import { Provider } from 'react-redux'
import store from './redux/stores/store'
import showOneUser from './services/user/show'

const root = ReactDOM.createRoot(document.getElementById('root'))

console.log(showOneUser('srMoizlppNaF3eMXL4xnwVHNCUF3'))

root.render(
  <BrowserRouter>
    <HelmetProvider>
      <DarkMode>
        <Provider store={store}>
          <ScrollToTop />
          <App />
        </Provider>
      </DarkMode>
    </HelmetProvider>
  </BrowserRouter>
)
