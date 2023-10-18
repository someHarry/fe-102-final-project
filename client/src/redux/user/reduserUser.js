/* eslint-disable no-param-reassign */
// eslint-disable-next-line import/no-extraneous-dependencies
import { createReducer } from '@reduxjs/toolkit'
import { actionAddUser, actionClearUser, actionUptadeUserData } from './actionUser'

const initialState = {
  dataUser: null || JSON.parse(localStorage.getItem('user')),
}

const reducerUser = createReducer(initialState, (builder) => {
  builder
    .addCase(actionAddUser, (state, { payload }) => {
      state.dataUser = payload
      localStorage.setItem('user', JSON.stringify(state.dataUser))
    })
    .addCase(actionClearUser, (state) => {
      state.dataUser = null
    })
    .addCase(actionUptadeUserData, (state, { payload }) => {
      state.dataUser = {
        ...state.dataUser,
        ...payload,
      }
      localStorage.setItem('user', JSON.stringify(state.dataUser))
    })
})

export default reducerUser
