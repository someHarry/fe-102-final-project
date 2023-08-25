/* eslint-disable import/no-extraneous-dependencies */
import { configureStore } from '@reduxjs/toolkit'
import rootReduser from './reduser'

const store = configureStore({ reducer: rootReduser })

export default store
