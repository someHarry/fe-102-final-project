/* eslint-disable no-param-reassign */
/* eslint-disable import/no-extraneous-dependencies */
import { createReducer } from '@reduxjs/toolkit'
import {
  actionAddToCart,
  actionClearCart,
  actionDecreaseQuantity,
  actionIncreaseQuantity,
  actionReadyCart,
  actionRemoveCart,
  actionRemoveLocalStorage,
} from './actionCart'

const initialState = {
  readyToCart: null,
  cart: JSON.parse(localStorage.getItem('cart')) || [],
}

const reducerCart = createReducer(initialState, (builder) => {
  builder
    .addCase(actionReadyCart, (state, { payload }) => {
      state.readyToCart = payload
    })
    .addCase(actionAddToCart, (state, { payload }) => {
      const isInCart = state.cart.some((item) => item.itemNo === payload.itemNo)
      console.log(payload)
      if (!isInCart) {
        const newItem = { ...payload, quant: 1 }
        state.cart = [...state.cart, newItem]
        localStorage.setItem('cart', JSON.stringify(state.cart))
      }
    })
    .addCase(actionRemoveCart, (state, { payload }) => {
      const newCart = state.cart.filter((item) => item.itemNo !== payload.itemNo)
      state.cart = newCart
      localStorage.setItem('cart', JSON.stringify(newCart))
    })
    .addCase(actionRemoveLocalStorage, (state, { payload }) => {
      state.cart = payload
      localStorage.setItem('cart', JSON.stringify(payload))
    })
    .addCase(actionClearCart, (state) => {
      state.cart = []
    })
    .addCase(actionIncreaseQuantity, (state, { payload }) => {
      const { itemNo } = payload
      const updatedCart = state.cart.map((item) =>
        item.itemNo === itemNo ? { ...item, quant: (item.quant || 1) + 1 } : item
      )
      localStorage.setItem('cart', JSON.stringify(updatedCart))
      state.cart = updatedCart
    })
    .addCase(actionDecreaseQuantity, (state, { payload }) => {
      const { itemNo } = payload
      const updatedCart = state.cart.map((item) =>
        item.itemNo === itemNo && item.quant > 1 ? { ...item, quant: (item.quant || 1) - 1 } : item
      )
      localStorage.setItem('cart', JSON.stringify(updatedCart))
      state.cart = updatedCart
    })
})

export default reducerCart
