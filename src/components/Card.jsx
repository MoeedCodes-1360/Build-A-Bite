import React from 'react'
import Button from './Button'

const Card = ({ product, cart = false, onAdd, onRemove, className = '' }) => {
  return (
    <div className={`bg-neutral-800 block max-w-sm rounded-xl border border-neutral-700 p-6 shadow-lg shadow-black/20 transition-shadow duration-300 hover:shadow-xl overflow-hidden ${className}`}>
      <img src={product.image} alt={product.name} className='h-56 w-full object-cover transition-transform duration-300 hover:scale-110' />
      <h2 className='text-2xl font-bold text-white'>{product.name}</h2>
      <p className='text-white'>{product.description.slice(0, 12)}.....</p>
      <p className='text-white'>Price:{product.price}Rs</p>
      {cart ? (
        <Button children="Remove" onClick={() => onRemove(product.id)} className='bg-white p-2 text-black' />
      ) : (
        <Button children="Add to Cart" onClick={() => onAdd(product)} className='bg-white p-2 text-black' />
      )}
    </div>
  )
}

export default Card
