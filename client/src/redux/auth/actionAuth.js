import { createAction } from '@reduxjs/toolkit'

// eslint-disable-next-line import/prefer-default-export
export const actionLogin = createAction('auth/actionLogin')
export const actionLogout = createAction('auth/actionLogout')
