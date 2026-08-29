import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increaseQuantity, decreaseQuantity, removeFromCart, confirmOrder, selectCartTotal, selectCartItems, selectOrderConfirmed } from '../store/CartSlice'
import { NavLink } from 'react-router-dom'


function Cart() {
    const total = useSelector(selectCartTotal)
    const items = useSelector(selectCartItems)
    const dispatch = useDispatch()
    const orderConfirmed = useSelector(selectOrderConfirmed)
    if (orderConfirmed) {
        return (
            <div className='min-h-screen flex flex-col justify-center text-white'>
                <h1 className='text-5xl font-bold text-cyan-500 '>Order Confirmed</h1>
                <p className='text-xl mt-4'>Thanks for ordering! We are preparing your food now</p>
                <NavLink to="/menu">
                    <button className="mt-8 rounded-xl bg-yellow-400 px-6 py-4 font-bold text-black shadow-lg hover:bg-yellow-300">
                        Go to Menu
                    </button>
                </NavLink>

            </div>
        )
    }
    if (items.length === 0) {
        return (
            <div className='min-h-screen flex flex-col justify-center text-white'>
                <h1 className='text-5xl font-bold text-cyan-500'>Your Cart is empty</h1>
                <NavLink to="/menu">
                    <button className="mt-8 rounded-xl bg-yellow-400 px-6 py-4 font-bold text-black shadow-lg hover:bg-yellow-300">
                        Go to Menu
                    </button>
                </NavLink>

            </div>)
    }
    return (
        <div className='min-h-screen  p-10 text-white'>
            <h1 className='text-4xl font-bold text-center mb-10'>Your Cart</h1>
            <div className='flex flex-col gap-6'>
                {items.map((item) => (
                    <div key={item.id} className="flex items-center justify-between bg-white/10 p-5 rounded-xl">
                        <div>
                            <h2 className='text-2xl font-bold'>{item.name}</h2>
                            <p className='text-xl font-bold'>{item.price}</p>

                        </div>
                        <div>
                            <button className='bg-yellow-400 text-white px-3 py-1 rounded-full hover:bg-yellow-300 cursor-pointer' onClick={() => dispatch(increaseQuantity({ id: item.id }))}>+</button>
                            <span className='text-xl mx-2'>{item.quantity}</span>
                            <button className='bg-yellow-400 text-white px-3 py-1 rounded-full hover:bg-yellow-300 cursor-pointer' onClick={() => dispatch(decreaseQuantity({ id: item.id }))}>-</button>

                        </div>
                        <p className='text-xl'>{item.price * item.quantity}Rs</p>
                        <button className='text-red-600 hover:text-red-500' onClick={() => dispatch(removeFromCart({ id: item.id }))}>Remove</button>


                    </div>

                ))}

            </div>
            <div className="mt-12 border-t border-white/20 pt-8">

                <h2 className="text-3xl font-bold">
                    Total: Rs. {total}
                </h2>


                <button
                    onClick={() => dispatch(confirmOrder())}
                    className="mt-6 bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold text-xl"
                >
                    Confirm Order
                </button>
            </div>


        </div>
    )
}

export default Cart