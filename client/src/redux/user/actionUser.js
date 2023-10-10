/* eslint-disable import/no-extraneous-dependencies */
import { createAction } from '@reduxjs/toolkit'

const actionAddUser = createAction('user/actionAddUser')

const actionClearUser = createAction('user/actionClearUser')

const actionUpdateUserData = createAction('user/actionUpdateUserData');
export { actionAddUser, actionClearUser,actionUpdateUserData }
