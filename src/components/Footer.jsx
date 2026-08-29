import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="flex w-full items-center bg-black border border-white rounded-full px-6 py-4">
      <div className="h-24 w-24 shrink-0 overflow-hidden rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 500 500"
          className="h-full w-full"
        >
          <rect width="500" height="500" fill="#0d0d0d" />

          <circle
            cx="250"
            cy="250"
            r="160"
            fill="#f5c518"
            opacity="0.12"
            filter="blur(30px)"
          />

          <g transform="translate(0, 10)">
            <path
              d="M 125 195 C 125 110, 375 110, 375 195 C 375 210, 125 210, 125 195 Z"
              fill="#e08e2d"
            />

            <path
              d="M 135 190 C 135 125, 365 125, 365 190 C 365 200, 135 200, 135 190 Z"
              fill="#f4a240"
            />
            <path
              d="M 160 135 C 200 120, 300 120, 340 135 C 320 125, 180 125, 160 135 Z"
              fill="#ffd166"
              opacity="0.6"
            />

            <g fill="#ffd166">
              <ellipse
                cx="190"
                cy="155"
                rx="5"
                ry="3"
                transform="rotate(-20 190 155)"
              />
              <ellipse
                cx="230"
                cy="140"
                rx="4"
                ry="7"
                transform="rotate(15 230 140)"
              />
              <ellipse
                cx="270"
                cy="145"
                rx="6"
                ry="3"
                transform="rotate(-10 270 145)"
              />
              <ellipse
                cx="310"
                cy="158"
                rx="5"
                ry="3"
                transform="rotate(30 310 158)"
              />
              <ellipse
                cx="210"
                cy="175"
                rx="5"
                ry="3"
                transform="rotate(45 210 175)"
              />
              <ellipse
                cx="255"
                cy="170"
                rx="4"
                ry="6"
                transform="rotate(-25 255 170)"
              />
              <ellipse
                cx="295"
                cy="178"
                rx="5"
                ry="3"
                transform="rotate(10 295 178)"
              />
            </g>

            <path
              d="M 115 210 Q 135 195, 155 210 T 195 210 T 235 210 T 275 210 T 315 210 T 355 210 Q 375 195, 385 210 Q 385 230, 365 230 Q 345 230, 335 230 Q 165 230, 115 230 Z"
              fill="#2a9d8f"
            />
            <path
              d="M 120 220 Q 140 205, 160 220 T 200 220 T 240 220 T 280 220 T 320 220 T 360 220 Q 380 205, 385 220 Z"
              fill="#38b000"
            />

            <g>
              <rect
                x="130"
                y="228"
                width="240"
                height="22"
                rx="11"
                fill="#d90429"
              />
              <rect
                x="135"
                y="233"
                width="230"
                height="12"
                rx="6"
                fill="#ef233c"
              />

              <ellipse
                cx="175"
                cy="239"
                rx="15"
                ry="5"
                fill="#8d0801"
                opacity="0.6"
              />
              <ellipse
                cx="250"
                cy="239"
                rx="20"
                ry="5"
                fill="#8d0801"
                opacity="0.6"
              />
              <ellipse
                cx="325"
                cy="239"
                rx="15"
                ry="5"
                fill="#8d0801"
                opacity="0.6"
              />
            </g>

            <path
              d="M 122 250 
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
             L 130 262 Z"
              fill="#f5c518"
            />

            <path
              d="M 120 265 Q 120 258, 130 258 L 370 258 Q 380 258, 380 265 L 385 290 Q 385 302, 370 302 L 130 302 Q 115 302, 115 290 Z"
              fill="#4a2e1b"
            />

            <path
              d="M 130 275 Q 250 285, 370 275"
              stroke="#321d0e"
              stroke-width="6"
              fill="none"
              stroke-linecap="round"
            />
            <circle cx="160" cy="270" r="4" fill="#653d22" />
            <circle cx="210" cy="290" r="5" fill="#653d22" />
            <circle cx="280" cy="275" r="6" fill="#653d22" />
            <circle cx="330" cy="285" r="4" fill="#653d22" />

            <path
              d="M 125 305 C 125 300, 375 300, 375 305 C 375 355, 125 355, 125 305 Z"
              fill="#e08e2d"
            />
            <path
              d="M 130 310 C 130 305, 370 305, 370 310 C 360 345, 140 345, 130 310 Z"
              fill="#c67d24"
            />
          </g>

          {/* <text x="250" y="415" font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-weight="900" font-size="36" fill="#f5c518" text-anchor="middle" letter-spacing="4">BURGER</text>
  <text x="250" y="440" font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-weight="600" font-size="14" fill="#ffffff" text-anchor="middle" letter-spacing="8" opacity="0.8">CO.</text> */}
        </svg>
      </div>
      <div className="flex w-1/3 flex-col gap-2 text-sm text-white">
        <Link
          to="/"
          className="flex items-center justify-center gap-2 hover:underline"
        >
          <svg
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            width="18"
            height="18"
          >
            <path
              d="M500,9.1C229.4,9.1,10,228.9,10,500c0,271.1,219.4,490.9,490,490.9c270.7,0,490-219.8,490-490.9C990,228.9,770.7,9.1,500,9.1z M640.5,514.6H538.8c0,162.8,0,363.4,0,363.4H388c0,0,0-198.5,0-363.4h-71.7V386.2H388v-83.1c0-59.5,28.2-152.5,152.2-152.5l111.7,0.4v124.7c0,0-67.9,0-81.1,0c-13.2,0-32,6.6-32,35v75.5h114.9L640.5,514.6z"
              fill="#0273a2"
            />
          </svg>
          Facebook
        </Link>
        <Link
          to="/"
          className="flex items-center justify-center gap-2 hover:underline"
        >
          <svg
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            width="18"
            height="18"
          >
            <g>
              <path
                d="M500,10C229.4,10,10,229.4,10,500s219.4,490,490,490s490-219.4,490-490S770.6,10,500,10z M781.6,355.6c0.3,6.2,0.4,12.5,0.4,18.8c0,192-146.1,413.4-413.4,413.4c-82.1,0-158.4-24.1-222.7-65.3c11.4,1.3,22.9,2,34.7,2c68.1,0,130.7-23.2,180.4-62.2c-63.6-1.2-117.2-43.2-135.7-100.9c8.9,1.7,18,2.6,27.3,2.6c13.3,0,26.1-1.8,38.3-5.1c-66.5-13.4-116.6-72.1-116.6-142.5c0-0.6,0-1.2,0-1.8c19.6,10.9,42,17.4,65.8,18.2c-39-26.1-64.6-70.5-64.6-120.9c0-26.6,7.2-51.6,19.7-73c71.7,87.9,178.7,145.7,299.5,151.8c-2.5-10.6-3.8-21.7-3.8-33.1c0-80.2,65.1-145.3,145.3-145.3c41.8,0,79.6,17.6,106.1,45.9c33.1-6.5,64.2-18.6,92.3-35.3c-10.8,33.9-33.9,62.4-63.9,80.4c29.4-3.5,57.4-11.3,83.4-22.9C834.6,309.5,810,335.1,781.6,355.6z"
                fill="#0273a2"
              />
            </g>
          </svg>
          Twiiter
        </Link>
        <Link
          to="/"
          className="flex items-center justify-center gap-2 hover:underline"
        >
          <svg
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            width="18"
            height="18"
          >
            <g>
              <path
                d="M847.1,10H152.9C74.1,10,10,74.2,10,153v694c0,78.8,64.1,143,142.9,143h694.1c78.8,0,142.9-64.1,142.9-143V153C990,74.2,925.9,10,847.1,10z M152.9,83h694.1c38.6,0,69.9,31.4,69.9,70.1v197.1H716.3C668.7,281.7,589.5,236.7,500,236.7c-89.5,0-168.7,44.9-216.2,113.4H83V153C83,114.4,114.4,83,152.9,83z M500,309.7c104.9,0,190.3,85.4,190.3,190.3c0,104.9-85.4,190.3-190.3,190.3c-104.9,0-190.3-85.4-190.3-190.3C309.7,395.1,395.1,309.7,500,309.7z M847.1,917H152.9c-38.6,0-70-31.4-70-70V423.1h165.3c-7.4,24.3-11.5,50.1-11.5,76.9c0,145.2,118.1,263.3,263.3,263.3c145.2,0,263.3-118.1,263.3-263.3c0-26.7-4-52.5-11.5-76.9H917V847C917,885.6,885.6,917,847.1,917z"
                fill="#0273a2"
              />
              <path
                d="M747.5,289h92c20.2,0,36.5-16.3,36.5-36.5S859.6,216,839.5,216h-55.5v-55.5c0-20.2-16.3-36.5-36.5-36.5c-20.2,0-36.5,16.3-36.5,36.5v92C711,272.7,727.3,289,747.5,289z"
                fill="#0273a2"
              />
            </g>
          </svg>
          Instagram
        </Link>
      </div>
      <div className="grid w-2/3 grid-cols-3 gap-8 text-white">
        <div>
          <h3 className="text-sm font-semibold hover:underline">Company</h3>
          <p className="text-xs hover:underline">About</p>
          <p className="text-xs hover:underline">Contact</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold hover:underline">Menu</h3>
          <p className="text-xs hover:underline">Burgers</p>
          <p className="text-xs hover:underline">Pizza</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold hover:underline">Follow Us</h3>
          <p className="text-xs hover:underline">Instagram</p>
          <p className="text-xs hover:underline">Facebook</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
