/* eslint-disable no-param-reassign */
// eslint-disable-next-line import/no-extraneous-dependencies
import { createReducer } from '@reduxjs/toolkit'
import actionAddBankCard from './actionBankCard'

const initialState = {
  bankCard: '',
}

const reduserBankCard = createReducer(initialState, (builder) => {
  builder.addCase(actionAddBankCard, (state, { payload }) => {
    state.bankCard = payload
  })
})

export default reduserBankCard
