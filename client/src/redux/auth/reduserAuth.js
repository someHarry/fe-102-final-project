/* eslint-disable no-param-reassign */
import {createReducer} from '@reduxjs/toolkit'
import {
    actionLogin,
    actionLogout,
} from './actionAuth'


const initialState = {
    apiToken: JSON.parse(localStorage.getItem('apiToken')) || null,
    isLogin: JSON.parse(localStorage.getItem('isLogin')) || false,


}

const reducerAuth = createReducer(initialState, (builder) => {
    builder
        .addCase(actionLogin, (state, {payload}) => {
            state.apiToken = payload;
            state.isLogin = true;
            state.authError = null;
            localStorage.setItem('apiToken', JSON.stringify(payload));
            localStorage.setItem('isLogin', JSON.stringify(true));
        })
        .addCase(actionLogout, (state) => {
            state.isLogin = false;
            localStorage.setItem('isLogin', JSON.stringify(false));
            localStorage.removeItem('apiToken');
        })
})

export default reducerAuth
