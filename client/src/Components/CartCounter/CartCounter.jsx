import React from 'react'
import './CartCounter.scss'

import { useSelector } from 'react-redux'

export default function CartCounter() {
  const cartItems = useSelector((state) => state.cart.cart)
  const cartCount = cartItems.length
  return (
    <div>
      {cartCount > 0 ? (
        <div className="counter">
          <span>{cartCount}</span>
        </div>
      ) : (
        <div style={{ display: 'none' }} />
      )}
    </div>
  )
}
