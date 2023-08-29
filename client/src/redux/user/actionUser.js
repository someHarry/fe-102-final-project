/* eslint-disable import/no-extraneous-dependencies */
import { createAction } from '@reduxjs/toolkit'

const actionAddUser = createAction('user/actionAddUser')

const actionClearUser = createAction('user/actionClearUser')

export { actionAddUser, actionClearUser }
