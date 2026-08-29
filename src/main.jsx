import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, BrowserRouter, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
// import { Route } from 'react-router'
import Main from "./components/Main.jsx"
import About from "./components/About.jsx"
import Menu from './components/Menu.jsx'
import Review from './components/Review.jsx'
import store from './store/Store.js'
import { Provider } from 'react-redux'
import Cart from './components/Cart.jsx'



const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App />}>
    <Route index element={<Main />} />
    <Route path="/about" element={<About />} />
    <Route path="/review" element={<Review />} />
    <Route path="/menu" element={<Menu />} />
    <Route path="/cart" element={<Cart />} />
  </Route>
))

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>

)
