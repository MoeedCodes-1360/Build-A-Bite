import React from 'react'
import products from "../assets/api"
import Card from './Card'

const Menu = () => {
    const AddToCart= (product)=>{
        console.log("adding to cart",product.name)

    }
  return (
    <div className='mx-auto flex w-full max-w-5xl flex-wrap items-stretch justify-center gap-6 px-4 py-8'>
      {products.map((product)=>(
        <Card
          key={product.id}
          product={product}
          onAdd={AddToCart}
          className="w-full max-w-sm sm:w-80"
        />
      ))}
    </div>
  )
}

export default Menu
