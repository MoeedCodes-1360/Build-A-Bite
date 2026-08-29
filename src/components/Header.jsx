import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='w-full h-16 bg-amber-300 border border-white flex space-x-2.5 justify-between '>
      <div className='rounded-full overflow-hidden'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="100%" height="100%">

          <rect width="500" height="500" fill="#0d0d0d" />


          <circle cx="250" cy="250" r="160" fill="#f5c518" opacity="0.12" filter="blur(30px)" />

          <g transform="translate(0, 10)">

            <path d="M 125 195 C 125 110, 375 110, 375 195 C 375 210, 125 210, 125 195 Z" fill="#e08e2d" />

            <path d="M 135 190 C 135 125, 365 125, 365 190 C 365 200, 135 200, 135 190 Z" fill="#f4a240" />
            <path d="M 160 135 C 200 120, 300 120, 340 135 C 320 125, 180 125, 160 135 Z" fill="#ffd166" opacity="0.6" />


            <g fill="#ffd166">
              <ellipse cx="190" cy="155" rx="5" ry="3" transform="rotate(-20 190 155)" />
              <ellipse cx="230" cy="140" rx="4" ry="7" transform="rotate(15 230 140)" />
              <ellipse cx="270" cy="145" rx="6" ry="3" transform="rotate(-10 270 145)" />
              <ellipse cx="310" cy="158" rx="5" ry="3" transform="rotate(30 310 158)" />
              <ellipse cx="210" cy="175" rx="5" ry="3" transform="rotate(45 210 175)" />
              <ellipse cx="255" cy="170" rx="4" ry="6" transform="rotate(-25 255 170)" />
              <ellipse cx="295" cy="178" rx="5" ry="3" transform="rotate(10 295 178)" />
            </g>

            <path d="M 115 210 Q 135 195, 155 210 T 195 210 T 235 210 T 275 210 T 315 210 T 355 210 Q 375 195, 385 210 Q 385 230, 365 230 Q 345 230, 335 230 Q 165 230, 115 230 Z" fill="#2a9d8f" />
            <path d="M 120 220 Q 140 205, 160 220 T 200 220 T 240 220 T 280 220 T 320 220 T 360 220 Q 380 205, 385 220 Z" fill="#38b000" />


            <g>
              <rect x="130" y="228" width="240" height="22" rx="11" fill="#d90429" />
              <rect x="135" y="233" width="230" height="12" rx="6" fill="#ef233c" />

              <ellipse cx="175" cy="239" rx="15" ry="5" fill="#8d0801" opacity="0.6" />
              <ellipse cx="250" cy="239" rx="20" ry="5" fill="#8d0801" opacity="0.6" />
              <ellipse cx="325" cy="239" rx="15" ry="5" fill="#8d0801" opacity="0.6" />
            </g>


            <path d="M 122 250 
             Q 130 250, 135 270 
             Q 140 280, 150 270 
             L 165 250 
             L 245 250 
             Q 260 285, 275 250 
             L 345 250 
             Q 355 275, 365 260 
             Q 375 250, 378 250 
             L 378 262 
             Q 350 280, 330 262 
             L 130 262 Z" fill="#f5c518" />


            <path d="M 120 265 Q 120 258, 130 258 L 370 258 Q 380 258, 380 265 L 385 290 Q 385 302, 370 302 L 130 302 Q 115 302, 115 290 Z" fill="#4a2e1b" />

            <path d="M 130 275 Q 250 285, 370 275" stroke="#321d0e" stroke-width="6" fill="none" stroke-linecap="round" />
            <circle cx="160" cy="270" r="4" fill="#653d22" />
            <circle cx="210" cy="290" r="5" fill="#653d22" />
            <circle cx="280" cy="275" r="6" fill="#653d22" />
            <circle cx="330" cy="285" r="4" fill="#653d22" />


            <path d="M 125 305 C 125 300, 375 300, 375 305 C 375 355, 125 355, 125 305 Z" fill="#e08e2d" />
            <path d="M 130 310 C 130 305, 370 305, 370 310 C 360 345, 140 345, 130 310 Z" fill="#c67d24" />
          </g>


          {/* <text x="250" y="415" font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-weight="900" font-size="36" fill="#f5c518" text-anchor="middle" letter-spacing="4">BURGER</text>
  <text x="250" y="440" font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-weight="600" font-size="14" fill="#ffffff" text-anchor="middle" letter-spacing="8" opacity="0.8">CO.</text> */}
        </svg>

      </div>
      <div className='flex justify-center space-x-5'> <NavLink to="/" className={({ isActive }) =>
        `px-3 py-3 rounded-4xl mx-3 text-4xl ${isActive ? "text-orange-400" : "text-gray-400"
        }`
      }>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) =>
          `px-3 py-3 rounded-4xl mx-3 text-4xl ${isActive ? "text-orange-400" : "text-gray-400"
          }`}>About</NavLink>
        <NavLink to="/review" className={({ isActive }) =>
          `px-3 py-3 rounded-4xl mx-3 text-4xl ${isActive ? "text-orange-400" : "text-gray-400"
          }`
        }>Review</NavLink></div>
      <div>
        <NavLink to="/menu" className={({ isActive }) =>
          `px-3 py-3 rounded-4xl mx-3 text-4xl ${isActive ? "text-orange-400" : "text-gray-400"
          }`
        }><button className='bg-white p-2 rounded-full text-black m-1'>Order Now</button></NavLink>
      </div>

    </div>
  )
}

export default Header
