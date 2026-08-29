import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    total: 0,
    orderConfirmed: false
}
const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addtoCart: (state, action) => {
            const item = state.items.find((item) => item.id === action.payload.id)
            if (item) {
                item.quantity += 1
            }
            else {
                state.items.push({ ...action.payload, quantity: 1 })
            }
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter(
                (item) => item.id !== action.payload.id
            )
        },
        increaseQuantity: (state, action) => {
            const item = state.items.find(
                (item) => item.id === action.payload.id
            )
            if (item) {
                item.quantity += 1
            }
        },
        decreaseQuantity: (state, action) => {
            const item = state.items.find(
                item => item.id === action.payload.id
            )
            if (item && item.quantity > 1) {
                item.quantity -= 1
            }
        },
        confirmOrder: (state, action) => {
            state.orderConfirmed = true
        },
        clearCart: (state, action) => {
            state.items = [];
            state.total = 0;
            state.orderConfirmed = false;
        }
    }
})
export const {
    addtoCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    confirmOrder,
    clearCart
} = CartSlice.actions

export default CartSlice.reducer
export const selectCartItems = (state) => state.cart?.items || []
export const selectCartTotal = (state) => state.cart?.items?.reduce((total, item) => total + item.quantity * item.price, 0) || 0
export const selectCartCount = (state) => state.cart?.items?.reduce((total, item) => total + item.quantity, 0) || 0
export const selectOrderConfirmed = (state) => state.cart?.orderConfirmed || false