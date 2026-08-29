const products = [
  // ==================== BURGERS ====================
  {
    id: 1,
    name: "Classic Burger",
    description:
      "Juicy beef patty with fresh lettuce, tomatoes, onions, and our special sauce.",
    price: 850,
    image:
      "https://shopsuki.ph/cdn/shop/collections/Classic_Burger_1024x.jpg?v=1644488722",
    category: "Burgers",
    type: "Main Course",
  },
  {
    id: 2,
    name: "Double Cheese Burger",
    description:
      "Two juicy beef patties layered with melted cheddar cheese and signature sauce.",
    price: 1150,
    image:
      "https://tse2.mm.bing.net/th/id/OIP.jSCd9IyDGIHmC1fxUtqCXQHaLH?r=0&pid=Api&h=220&P=0",
    category: "Burgers",
    type: "Main Course",
  },
  {
    id: 3,
    name: "BBQ Bacon Burger",
    description:
      "Smoky beef patty topped with crispy bacon, cheddar, onions, and BBQ sauce.",
    price: 1250,
    image:
      "https://tse4.mm.bing.net/th/id/OIP.0mFO95rM6THdMgxv4qgguQHaE7?r=0&pid=Api&h=220&P=0",
    category: "Burgers",
    type: "Main Course",
  },
  {
    id: 4,
    name: "Spicy Jalapeño Burger",
    description:
      "A fiery beef burger with jalapeños, pepper jack cheese, and spicy mayo.",
    price: 1050,
    image:
      "https://yummygusto.com/assets/images/1749407143693-7xqa7d5g.webp",
    category: "Burgers",
    type: "Main Course",
  },
  {
    id: 5,
    name: "Crispy Chicken Burger",
    description:
      "Crunchy fried chicken fillet with lettuce, pickles, and creamy garlic mayo.",
    price: 950,
    image:
      "https://i.pinimg.com/originals/f0/83/12/f08312b5b45b888622e24921df51cb4d.png",
    category: "Burgers",
    type: "Main Course",
  },

  // ==================== PIZZA ====================
  {
    id: 6,
    name: "Pepperoni Pizza",
    description:
      "Classic pizza loaded with spicy pepperoni and gooey mozzarella cheese.",
    price: 1400,
    image:
      "https://grandbaby-cakes.com/wp-content/uploads/2023/01/GrandBabyCakes_PepperoniPizza_Finalnoproduct5_FullSize-scaled.jpg",
    category: "Pizza",
    type: "Main Course",
  },
  {
    id: 7,
    name: "Chicken Tikka Pizza",
    description:
      "Tender chicken tikka, onions, green peppers, and mozzarella on a creamy base.",
    price: 1550,
    image:
      "https://tse2.mm.bing.net/th/id/OIP.bzdoKOSO_LvkAdaKX4G4IwHaHa?r=0&pid=Api&h=220&P=0",
    category: "Pizza",
    type: "Main Course",
  },
  {
    id: 8,
    name: "BBQ Chicken Pizza",
    description:
      "Grilled chicken, smoky BBQ sauce, onions, and melted mozzarella.",
    price: 1500,
    image:
      "https://i.pinimg.com/originals/9a/64/02/9a6402926cc4e49d243da44c9a16facd.png",
    category: "Pizza",
    type: "Main Course",
  },
  {
    id: 9,
    name: "Four Cheese Pizza",
    description:
      "A rich blend of mozzarella, cheddar, parmesan, and creamy cheese sauce.",
    price: 1600,
    image:
      "https://thumbs.dreamstime.com/b/italian-pizza-four-cheeses-stretching-cheese-basil-light-concrete-background-italian-pizza-four-cheeses-271231554.jpg",
    category: "Pizza",
    type: "Main Course",
  },
  {
    id: 10,
    name: "Veggie Supreme Pizza",
    description:
      "Fresh mushrooms, onions, bell peppers, olives, and mozzarella cheese.",
    price: 1350,
    image:
      "https://unsplash.com/photos/pizza-food-41pFxtqK_uU",
    category: "Pizza",
    type: "Main Course",
  },

  // ==================== FRIES ====================
  {
    id: 11,
    name: "Classic Fries",
    description:
      "Crispy golden fries lightly seasoned with our signature seasoning.",
    price: 350,
    image:
      "https://tse1.mm.bing.net/th/id/OIP.XBQ0Xj6bQJGFQjvxT55tNQHaJ4?r=0&pid=Api&h=220&P=0",
    category: "Fries",
    type: "Starters",
  },
  {
    id: 12,
    name: "Loaded Cheese Fries",
    description:
      "Golden fries covered with creamy cheese sauce and crispy bacon bits.",
    price: 550,
    image:
      "https://i.pinimg.com/originals/60/a8/2d/60a82d9d97f073165dcaf21f3b2f9241.jpg",
    category: "Fries",
    type: "Starters",
  },
  {
    id: 13,
    name: "Peri Peri Fries",
    description:
      "Crispy fries tossed in a bold and spicy peri peri seasoning.",
    price: 450,
    image:
      "https://tse3.mm.bing.net/th/id/OIP.0Lj30F3Qoqjbqfhur7yAUAHaHa?r=0&pid=Api&h=220&P=0",
    category: "Fries",
    type: "Starters",
  },
  {
    id: 14,
    name: "BBQ Loaded Fries",
    description:
      "Crispy fries topped with BBQ sauce, cheese, and tender shredded chicken.",
    price: 650,
    image:
      "https://i.pinimg.com/originals/3c/54/75/3c54751cdaf44bc2f20a36ece8c4860a.jpg",
    category: "Fries",
    type: "Starters",
  },
  {
    id: 15,
    name: "Garlic Parmesan Fries",
    description:
      "Crispy fries tossed with garlic, parmesan, parsley, and a touch of butter.",
    price: 550,
    image:
      "https://nodashofgluten.com/wp-content/uploads/2024/10/Baked-Garlic-Parmesan-Fries-2-png.webp",
    category: "Fries",
    type: "Starters",
  },

  // ==================== SHAKES ====================
  {
    id: 16,
    name: "Chocolate Shake",
    description:
      "Thick and creamy chocolate shake topped with whipped cream and chocolate drizzle.",
    price: 550,
    image:
      "https://bakingmischief.com/wp-content/uploads/2019/07/chocolate-milkshake-image-683x1024.jpg",
    category: "Shakes",
    type: "Drinks",
  },
  {
    id: 17,
    name: "Strawberry Shake",
    description:
      "Smooth strawberry shake made with fresh strawberries and creamy vanilla ice cream.",
    price: 550,
    image:
      "https://tse1.mm.bing.net/th/id/OIP.V5Ikg12Gi3gVPsIyOXqNoAHaNK?r=0&pid=Api&h=220&P=0",
    category: "Shakes",
    type: "Drinks",
  },
  {
    id: 18,
    name: "Oreo Shake",
    description:
      "A rich cookies-and-cream shake packed with crushed Oreo cookies.",
    price: 650,
    image:
      "https://tse1.mm.bing.net/th/id/OIP.8zIIHaab3-7m-8y-WNzDpwHaJ4?r=0&pid=Api&h=220&P=0",
    category: "Shakes",
    type: "Drinks",
  },
  {
    id: 19,
    name: "Salted Caramel Shake",
    description:
      "Creamy caramel shake finished with salted caramel sauce and whipped cream.",
    price: 650,
    image:
      "https://tse1.mm.bing.net/th/id/OIP.HqA9izumievSTnRV0TIBhwHaJl?r=0&pid=Api&h=220&P=0",
    category: "Shakes",
    type: "Drinks",
  },
  {
    id: 20,
    name: "Mango Shake",
    description:
      "Sweet and refreshing mango shake blended with creamy vanilla ice cream.",
    price: 600,
    image:
      "https://tse1.mm.bing.net/th/id/OIP.HqA9izumievSTnRV0TIBhwHaJl?r=0&pid=Api&h=220&P=0",
    category: "Shakes",
    type: "Drinks",
  },

  // ==================== DESSERTS ====================
  {
    id: 21,
    name: "Chocolate Lava Cake",
    description:
      "Warm chocolate cake with a rich molten chocolate center.",
    price: 650,
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476f",
    category: "Cakes",
    type: "Desserts",
  },
  {
    id: 22,
    name: "Brownie Sundae",
    description:
      "Warm fudgy brownie served with vanilla ice cream and chocolate sauce.",
    price: 700,
    image:
      "https://images.unsplash.com/photo-1564355808539-22fda35bed7e",
    category: "Brownies",
    type: "Desserts",
  },
  {
    id: 23,
    name: "New York Cheesecake",
    description:
      "Creamy baked cheesecake with a buttery biscuit crust.",
    price: 750,
    image:
      "https://images.unsplash.com/photo-1533134242443-d4fd215305ad",
    category: "Cakes",
    type: "Desserts",
  },
  {
    id: 24,
    name: "Cinnamon Churros",
    description:
      "Crispy golden churros coated in cinnamon sugar and served with chocolate dip.",
    price: 500,
    image:
      "https://images.unsplash.com/photo-1624371414361-e670edf4898d",
    category: "Pastries",
    type: "Desserts",
  },
  {
    id: 25,
    name: "Cookie Skillet",
    description:
      "Warm chocolate chip cookie baked in a skillet and topped with vanilla ice cream.",
    price: 700,
    image:
      "https://images.unsplash.com/photo-1499636136210-6f4ee915583e",
    category: "Cookies",
    type: "Desserts",
  },
];

export default products;