import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { useSelector, useDispatch } from 'react-redux'
import { actionRemoveCart, actionDecreaseQuantity, actionIncreaseQuantity } from '../../redux/cart/actionCart' // Імпорт дій з Redux

import Button from '../Button'
import './CartComponent.scss'

export default function CartComponent({ cartStyles, updateSubtotals }) {
  const [subtotal, setSubtotal] = useState(0)

  const cartItems = useSelector((state) => state.cart.cart)
  const dispatch = useDispatch()

  useEffect(() => {
    const newSubtotal = cartItems.reduce((total, item) => total + (item.currentPrice || 0) * (item.quant || 1), 0)
    setSubtotal(newSubtotal)
    updateSubtotals(newSubtotal.toFixed(2)) // Округлення до двох знаків після коми
  }, [cartItems, updateSubtotals])

  const handleRemoveFromCart = (el) => {
    dispatch(actionRemoveCart(el))
  }

  const handleIncreaseQuantity = (itemNo) => {
    dispatch(actionIncreaseQuantity({ itemNo }))
  }

  const handleDecreaseQuantity = (itemNo) => {
    dispatch(actionDecreaseQuantity({ itemNo }))
  }

  const CartList = cartItems.map((el) => (
    <div className={`cart-${cartStyles}__item`} key={el.itemNo}>
      <span className={`cart-${cartStyles}__item-img`}>
        <img src={`${el.imageUrls}`} alt="" />
      </span>
      <span className={`cart-${cartStyles}__item-info`}>
        <span className={`cart-${cartStyles}__item-name-quantity`}>
          <p>{el.name}</p>
          <div className={`cart-${cartStyles}__item-price__quantity`}>
            <Button btnStyles="Quantity" btnClick={() => handleDecreaseQuantity(el.itemNo)} text="-" />
            {/* <Button btnStyles="Quantity" text="-" /> */}
            <p>{el.quant || 1}</p>
            {/* <Button btnStyles="Quantity" text="+" /> */}
            <Button btnStyles="Quantity" btnClick={() => handleIncreaseQuantity(el.itemNo)} text="+" />
          </div>
        </span>

        <span className={`cart-${cartStyles}__item-price`}>
          <Button text="Remove" btnStyles="Remove" btnClick={() => handleRemoveFromCart(el)} />

          <p>{el.currentPrice}</p>
        </span>
      </span>
    </div>
  ))

  return (
    <div
      className={`cart-${cartStyles}`}
      onClick={(e) => e.stopPropagation()}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Escape') {
          console.log('close modal')
        }
      }}
    >
      {CartList.length > 0 ? (
        <>
          {cartStyles === 'collection' && <h2>My Bag</h2>}
          {cartStyles === 'collection' && <div className="cart-collection__container">{CartList}</div>}
          {cartStyles === 'lis' && <div>{CartList}</div>}
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
          {/* <div className='cart-collection__bottom'> */}
          <div className={`cart-${cartStyles}__subtotal`}>
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <span className={`cart-${cartStyles}__link`}>
            {cartStyles === 'lis' && (
              <a className={`cart-${cartStyles}__link-shop`} href="/shop">
                Back to shopping
              </a>
            )}
            {cartStyles === 'collection' && (
              <a className={`cart-${cartStyles}__link-shop`} href="/cart">
                Purchace
              </a>
            )}
          </span>
          {/* </div> */}
        </>
      ) : (
        <p className="no-items">
          Товарів в корзині немає!
          <br />
          <a href="/shop">Перейти до колекції</a>
        </p>
      )}
    </div>
  )
}

CartComponent.propTypes = {
  cartStyles: PropTypes.string.isRequired,
  updateSubtotals: PropTypes.func.isRequired,
}
