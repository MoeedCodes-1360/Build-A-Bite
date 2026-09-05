# 🍔 Build-a-Bite

A responsive restaurant ordering experience built with React and Vite. Build-a-Bite combines a food menu, Redux-powered cart, order confirmation flow, restaurant storytelling, and locally saved customer reviews.

<div align="center">

  <img src="https://img.shields.io/badge/React-19.2.8-61DAFB?style=for-the-badge&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/Vite-8.2.2-646CFF?style=for-the-badge&logo=vite" alt="Vite" />
  <img src="https://img.shields.io/badge/Style-Tailwind-38B2AC?style=for-the-badge&logo=tailwindcss" alt="Tailwind CSS" />

</div>

## ✨ Overview

Build-a-Bite is a front-end restaurant app designed to make browsing and ordering feel quick and appetizing. It includes:

- 🍽️ a restaurant-style menu experience
- 🛒 a shopping cart with quantity controls and order confirmation
- 🧾 customer review submission and star-rating flow
- 🏪 branded storytelling sections about the business
- 🧭 route-based navigation between pages
- 📱 responsive layout that adapts well to different screen sizes

## 🌮 Why this app?

The experience is built around the idea that eating should feel memorable, satisfying, and personal. From burgers and pizza to fries, shakes, and desserts, the UI is styled to make every craving feel exciting.

## 🚀 Features

| Feature | Description | Icon |
|---|---|---|
| Restaurant Branding | Strong, appetizing visual design with a modern foodie aesthetic | 🍔 |
| Menu Showcase | Product cards present food items in a clean and engaging layout | 🍽️ |
| Shopping Cart | Add menu items, adjust quantities, remove items, and view totals | 🛒 |
| Order Confirmation | Confirm an order and return to the menu | ✅ |
| Reviews | Users can leave ratings and write feedback saved in local storage | ⭐ |
| Storytelling Pages | About section explains the brand and mission | 🧡 |
| Responsive UI | Mobile-friendly layout for a smoother browsing experience | 📱 |
| Client-side Routing | Navigate between home, about, menu, review, and cart routes | 🧭 |

## 🧱 Tech Stack

- React 19
- Vite
- React Router DOM
- Tailwind CSS 4
- Redux Toolkit and React Redux
- JavaScript

## 📁 Project Structure

```bash
BuildABite/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── ...
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── .gitignore
```

## 🧩 Main Components

- `Header` — top navigation and branding
- `Main` — landing page content and highlights
- `About` — brand story and mission
- `Menu` — product listing grid
- `Card` — individual menu item and add-to-cart action
- `Cart` — cart quantities, totals, removal, and order confirmation
- `Review` — customer review form with star rating
- `Footer` — closing navigation and contact section

## 🗺️ Routes

| Path | Page |
|---|---|
| `/` | Home page |
| `/about` | Restaurant story |
| `/menu` | Menu and add-to-cart actions |
| `/cart` | Cart and order confirmation |
| `/review` | Review and rating form |

Cart state is managed with Redux Toolkit. Submitted reviews are persisted in the browser's `localStorage`; there is no backend or payment processing yet.

## 🏁 Getting Started

### 1) Install dependencies

```bash
npm install
```

### 2) Run the app locally

```bash
npm run dev
```

Then open the local Vite URL shown in your terminal.

### 3) Build for production

```bash
npm run build
```

### 4) Preview production build

```bash
npm run preview
```

## 🛠️ Available Scripts

```bash
npm run dev      # start local development server
npm run build    # create production build
npm run preview  # preview final build locally
npm run lint     # run lint checks
```

## 🎯 App Experience

This app is designed to feel like a modern fast-casual restaurant brand with:

- warm colors and bold contrast
- lively food-inspired design language
- organized content storytelling
- easy path to explore menu, brand, and feedback

## 📸 Design Direction

The UI leans into a premium casual dining vibe using rich tones, layered cards, glow effects, and clean typography to make each section feel polished and appetizing.

## 💡 Future Enhancements

- 💳 payment and real order management
- ☁️ server-backed review storage
- 🖼️ food image gallery
- 🧠 search and filtering for menu items

## 📘 Notes

This project is a front-end experience focused on style, structure, and usability. Orders and reviews are currently handled in the browser, making it a strong foundation for connecting a backend or payment provider later.

## 🙌 Project Status

This project is actively styled and structured as a front-end restaurant app with a strong UI base ready for feature expansion.

---

Made with ❤️ for cravings, flavor, and great food experiences.
