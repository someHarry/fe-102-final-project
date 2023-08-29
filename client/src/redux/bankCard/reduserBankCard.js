/* eslint-disable no-param-reassign */
// eslint-disable-next-line import/no-extraneous-dependencies
import { createReducer } from '@reduxjs/toolkit'
import { actionAddBankCard, actionClearBankCard } from './actionBankCard'

const initialState = {
  bankCard: '' || JSON.parse(localStorage.getItem('card')),
}

const reduserBankCard = createReducer(initialState, (builder) => {
  builder
    .addCase(actionAddBankCard, (state, { payload }) => {
      state.bankCard = payload
      localStorage.setItem('card', JSON.stringify(state.bankCard))
    })
    .addCase(actionClearBankCard, (state) => {
      state.bankCard = ''
    })
})

export default reduserBankCard
