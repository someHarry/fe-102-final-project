/* eslint-disable no-param-reassign */
// eslint-disable-next-line import/no-extraneous-dependencies
import { createReducer } from '@reduxjs/toolkit'
import actionAddUser from './actionUser'

const initialState = {
  dataUser: null,
}

const reducerUser = createReducer(initialState, (builder) => {
  builder.addCase(actionAddUser, (state, { payload }) => {
    state.dataUser = payload
  })
})

export default reducerUser
