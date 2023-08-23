/* eslint-disable import/no-extraneous-dependencies */
import { combineReducers } from '@reduxjs/toolkit'
import cartReducer from './cart/reduserCart'

const rootReduser = combineReducers({
  reduser: { cart: cartReducer },
})

export default rootReduser
