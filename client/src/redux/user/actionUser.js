/* eslint-disable import/no-extraneous-dependencies */
import { createAction } from '@reduxjs/toolkit'

const actionAddUser = createAction('user/actionAddUser')

const actionClearUser = createAction('user/actionClearUser')

const actionUptadeUserData = createAction('user/actionUptadeUserData')

export { actionAddUser, actionClearUser, actionUptadeUserData }
