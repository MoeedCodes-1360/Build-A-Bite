import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
// import Main from './components/Main'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <h1 className='text-2xl font-bold'>Hello</h1> */}
     <Header />
     <Outlet />
     <Footer />
     
         </>
  )
}

export default App
