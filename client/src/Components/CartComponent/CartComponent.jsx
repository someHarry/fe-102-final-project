import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'
import "./CartComponent.scss"

export default function CartComponent({ cartStyles, updateSubtotals }) {
  const [cartItems, setCartItems] = useState([])
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    const cartItemsFromStorage = localStorage.getItem('cart')
    if (cartItemsFromStorage) {
      setCartItems(JSON.parse(cartItemsFromStorage))
    }
  }, [])

  useEffect(() => {
    const newSubtotal = cartItems.reduce(
      (total, item) => total + (item.currentPrice || 0) * (item.quantity || 1),
      0
    );
    setSubtotal(newSubtotal);
    updateSubtotals(newSubtotal.toFixed(2)); // Округлення до двох знаків після коми
  }, [cartItems, updateSubtotals]);


  // const subtotal = cartItems.reduce(
  //   (total, item) => total + (item.currentPrice || 0) * (item.quantity || 1),

  //   0
  // )

  const removeFromCart = (itemNo) => {
    const updatedCart = cartItems.filter((item) => item.itemNo !== itemNo)
    setCartItems(updatedCart)
    localStorage.setItem('cart', JSON.stringify(updatedCart))
    updateSubtotals(subtotal)
  }

  const increaseQuantity = (itemNo) => {
    const updatedCart = cartItems.map((item) =>
      item.itemNo === itemNo ? { ...item, quantity: (item.quantity || 1) + 1 } : item
    )
    setCartItems(updatedCart)
    localStorage.setItem('cart', JSON.stringify(updatedCart))
    updateSubtotals(subtotal)
  }

  // Function to decrease the quantity of an item in the cart and update localStorage
  const decreaseQuantity = (itemNo) => {
    const updatedCart = cartItems.map((item) =>
      item.itemNo === itemNo && item.quantity > 1 ? { ...item, quantity: (item.quantity || 1) - 1 } : item
    )
    setCartItems(updatedCart)
    localStorage.setItem('cart', JSON.stringify(updatedCart))
    updateSubtotals(subtotal)
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
            <Button btnStyles="Quantity" btnClick={() => decreaseQuantity(el.itemNo)} text="-" />
            <p>{el.quantity || 1}</p>
            <Button btnStyles="Quantity" btnClick={() => increaseQuantity(el.itemNo)} text="+" />
          </div>
        </span>

        <span className={`cart-${cartStyles}__item-price`}>
          <Button text="Remove" btnStyles="Remove" btnClick={() => removeFromCart(el.itemNo)} />

          <p>{el.currentPrice}</p>
        </span>
      </span>
    </div>
  ))

  return (
    <div className={`cart-${cartStyles}`}>
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
          <div className={`cart-${cartStyles}__subtotal`}>
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <span className={`cart-${cartStyles}__link`}>
            <a className={`cart-${cartStyles}__link-shop`} href="/shop">
              Back to shopping
            </a>
          </span>
        </>
      ) : (
        <p className="no-items">
          Товарів в корзині немає!
          <br />
          <a href="/">Головна</a>
        </p>
      )}
    </div>
  )
}

CartComponent.propTypes = {
  cartStyles: PropTypes.string.isRequired,
  updateSubtotals: PropTypes.func.isRequired,
}
