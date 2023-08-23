/* eslint-disable import/no-extraneous-dependencies */
import { combineReducers } from '@reduxjs/toolkit'
import reducerCart from './cart/reduserCart'
import reducerUser from './user/reduserUser'

const rootReduser = combineReducers({ cart: reducerCart, user: reducerUser })

export default rootReduser
