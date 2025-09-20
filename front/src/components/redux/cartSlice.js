import { createSlice } from "@reduxjs/toolkit";
import { shopItems } from "./data";

const initialState = {
  itemsInCart: [],
  products: shopItems,
  productName: ""

}


const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {

      const id = action.payload
      const itemToAdd = state.products.find((item) => item.id === id)
      const existingItem = state.itemsInCart.find((item) => item.id == id)
      if (existingItem) {
        if (existingItem.qty !== 10) {
          existingItem++
        } else {
          alert('wewe usipitishe kumi')
        }
      } else {
        state.itemsInCart.push({
          ...itemToAdd,
          itemToAdd,
          qty: 1

        })
      }


    },


    addQuantity: (state, action) => {

      const id = action.payload
      const existingItem = state.itemsInCart.find((item) => item.id == id)
      if (existingItem) {
        if (existingItem.qty !== 10) {

          existingItem.qty++
        } else {
          existingItem.qty = 1
        }
      }

    },
    searchProducts: (state, action) => {
      state.productName = action.payload
      state.products= shopItems.filter((item)=>{
        return state.productName.toLowerCase()==="" ? item : item.name.toLowerCase().includes(state.productName)
      })


    },

    reduceQuantity: (state, action) => {

      const id = action.payload
      const existingItem = state.itemsInCart.find((item) => item.id === id)
      if (existingItem) {
        if (existingItem.qty > 1) {

          existingItem.qty--
        } else {
          existingItem.qty = 1
        }
      }

    },

    removeFromCart: (state, action) => {

      const id = action.payload
      const existingItem = state.itemsInCart.find((item) => item.id === id)
      if (existingItem) {
        state.itemsInCart = state.itemsInCart.filter((item) => item.id !== existingItem.id)

      }

    },

  }

})

export const { addToCart, addQuantity, reduceQuantity, removeFromCart, searchProducts } = cartSlice.actions
export const cartReducer = cartSlice.reducer

