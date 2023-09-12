import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { actionRemoveCart, actionDecreaseQuantity, actionIncreaseQuantity } from '../../redux/cart/actionCart'
import Button from '../Button'
import './CartComponent.scss'

export default function CartComponent() {

  const subtotal = useSelector((state) => state.cart.subtotal)
  const cartItems = useSelector((state) => state.cart.cart)
  const dispatch = useDispatch()

  const handleRemoveFromCart = (item) => {
    dispatch(actionRemoveCart(item))
  }

  const handleIncreaseQuantity = (itemNo) => {
    dispatch(actionIncreaseQuantity({ itemNo }))
  }

  const handleDecreaseQuantity = (itemNo) => {
    dispatch(actionDecreaseQuantity({ itemNo }))
  }

  const CartList = cartItems.map((item) => (
    <div className="cart-lis__item" key={item.itemNo}>
      <span className="cart-lis__item-img">
        <img src={`${item.imageUrls}`} alt="" />
      </span>
      <span className="cart-lis__item-info">
        <span className="cart-lis__item-name-quantity">
          <a href={`/shop/${item.itemNo}`}>{item.name}</a>
          <div className="cart-lis__item-price__quantity">
            <Button btnStyles="Quantity" btnClick={() => handleDecreaseQuantity(item.itemNo)} text="-" />
            <p>{item.quant || 1}</p>
            <Button btnStyles="Quantity" btnClick={() => handleIncreaseQuantity(item.itemNo)} text="+" />
          </div>
        </span>
        <span className="cart-lis__item-price">
          <Button text="Remove" btnStyles="Remove" btnClick={() => handleRemoveFromCart(item)} />
          <p>{item.currentPrice}</p>
        </span>
      </span>
    </div>
  ))

  return (
    <div className="cart-lis">
      {CartList.length > 0 ? (
        <>
          {CartList}
          <span
            style={{
              display: 'block',
              width: '80%',
              height: '1px',
              background: 'rgba(160, 160, 160, 1)',
              margin: '0 auto',
              marginBottom: '25px',
            }}
          />
          <div className="cart-lis__subtotal">
            <span>Subtotal</span>
            <span>${subtotal}</span>
          </div>
          <span className="cart-lis__link">
            <a className="cart-lis__link-shop" href="/shop">
              Back to Shopping
            </a>
          </span>
        </>
      ) : (
        <p className="no-items">
          There are no products in the basket!
          <br />
          <a href="/shop">Back to Collection</a>
        </p>
      )}
    </div>
  )
}