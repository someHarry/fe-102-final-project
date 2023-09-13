/* eslint-disable import/no-extraneous-dependencies */
import { createAction } from '@reduxjs/toolkit'

const actionAddToCart = createAction('cart/actionAddToCart')

const actionReadyCart = createAction('cart/actionReadyCart')

const actionRemoveCart = createAction('cart/actionRemoveCart')

const actionRemoveLocalStorage = createAction('cart/actionRemoveLocalStorage')

const actionClearCart = createAction('cart/actionClearCart')

const actionIncreaseQuantity = createAction('cart/actionIncreaseQuantity')

const actionDecreaseQuantity = createAction('cart/actionDecreaseQuantity')

const actionHandleModal = createAction('cart/actionHandleModal') // Hlib

const actionIncreaseProductCount = createAction('cart/actionIncreaseProductCount')

const actionDecreaseProductCount = createAction('cart/actionDecreaseProductCount')

export {
  actionAddToCart,
  actionReadyCart,
  actionRemoveCart,
  actionRemoveLocalStorage,
  actionClearCart,
  actionDecreaseQuantity,
  actionIncreaseQuantity,
  actionHandleModal, // Hlib
  actionIncreaseProductCount,
  actionDecreaseProductCount,
}
