import React from 'react'
import products from "../assets/api"
import Card from './Card'
import { useDispatch, useSelector } from "react-redux"
import { addtoCart, selectCartCount } from '../store/CartSlice'
import { NavLink } from 'react-router-dom'


const Menu = () => {
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount)

  const AddToCart = (items) => {
    console.log("adding to cart", items.name)
    dispatch(addtoCart(items));

  }
  return (
    <div className='mx-auto flex w-full max-w-5xl flex-wrap items-stretch justify-center gap-6 px-4 py-8'>
      {products.map((items) => (
        <Card
          key={items.id}
          product={items}
          onAdd={AddToCart}
          className="w-full max-w-sm sm:w-80"
        />
      ))}
      {cartCount > 0 && (
        <div className="fixed bottom-6 right-6">
          <NavLink to="/cart">
            <button className='rounded-xl bg-yellow-400 px-6 py-4 font-bold text-black shadow-lg hover:bg-yellow-300'>
              <span className='text-white'>Cart Items: ({cartCount})</span>
            </button>
          </NavLink>
        </div>
      )}
    </div>
  )
}

export default Menu
