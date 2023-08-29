// eslint-disable-next-line import/no-extraneous-dependencies
import { createAction } from '@reduxjs/toolkit'

const actionAddBankCard = createAction('bankCard/actionAddBankCard')

const actionClearBankCard = createAction('bankCard/actionClearBankCard')

export { actionAddBankCard, actionClearBankCard }
