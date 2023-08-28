/* eslint-disable no-param-reassign */
/* eslint-disable import/no-extraneous-dependencies */
import { createReducer } from '@reduxjs/toolkit'
import { actionAddToCart, actionReadyCart, actionRemoveCart, actionRemoveLocalStorage } from './actionCart'

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

      if (!isInCart) {
        state.cart = [...state.cart, payload]
        localStorage.setItem('cart', JSON.stringify(state.cart))
      }
    })
    .addCase(actionRemoveCart, (state, { payload }) => {
      const newCart = state.cart.filter((item) => item.id !== payload.id)
      state.cart = newCart
      localStorage.setItem('cart', JSON.stringify(newCart))
    })
    .addCase(actionRemoveLocalStorage, (state, { payload }) => {
      state.cart = payload
      localStorage.setItem('cart', JSON.stringify(payload))
    })
})

export default reducerCart
