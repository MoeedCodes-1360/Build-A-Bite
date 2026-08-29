import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider,BrowserRouter, createBrowserRouter, createRoutesFromElements,Route } from 'react-router-dom'
// import { Route } from 'react-router'
import Main from "./components/Main.jsx"
import About from "./components/About.jsx"
import Menu from './components/Menu.jsx'
import Review from './components/Review.jsx'


const router= createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App/>}>
    <Route index element={<Main/>} />
    <Route  path="/about" element={<About />} />
    <Route  path="/review" element={<Review />} />
    <Route path="/menu" element={<Menu/>} />
  </Route>
))

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
    
)
