/* eslint-disable import/no-extraneous-dependencies */
import { combineReducers } from '@reduxjs/toolkit'
import reducerCart from './cart/reduserCart'
import reducerUser from './user/reduserUser'
import reduserBankCard from './bankCard/reduserBankCard'
import reducerAuth from "./auth/reduserAuth";

const rootReduser = combineReducers({ cart: reducerCart, user: reducerUser, card: reduserBankCard, auth:reducerAuth })

export default rootReduser
