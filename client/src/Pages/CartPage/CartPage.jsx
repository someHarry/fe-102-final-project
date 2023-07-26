import React, { useState, useEffect } from 'react'
import './CartPage.scss'
import Button from '../../Components/Button/Button'
import RadioButton from '../../Components/RadioButton'

export default function CartPage() {
  // Initialize state to store cart items retrieved from localStorage
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    // Retrieve cart items from localStorage and parse them
    const cartItemsFromStorage = localStorage.getItem('cart')
    if (cartItemsFromStorage) {
      setCartItems(JSON.parse(cartItemsFromStorage))
    }
  }, [])

  // Function to remove an item from the cart and update localStorage
  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id)
    setCartItems(updatedCart)
    localStorage.setItem('cart', JSON.stringify(updatedCart))
  }

  const increaseQuantity = (id) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
    )
    setCartItems(updatedCart)
    localStorage.setItem('cart', JSON.stringify(updatedCart))
  }

  // Function to decrease the quantity of an item in the cart and update localStorage
  const decreaseQuantity = (id) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id && item.quantity > 1 ? { ...item, quantity: (item.quantity || 1) - 1 } : item
    )
    setCartItems(updatedCart)
    localStorage.setItem('cart', JSON.stringify(updatedCart))
  }

  const rounded = function (number) {
    return +number.toFixed(2)
  }

  const CartList = cartItems.map((el) => (
    <div className="cart-list__item" key={el.id}>
      <span className="cart-list__item-img">
        <img src={`http://localhost:4000${el.image}`} alt="" />
      </span>
      <span className="cart-list__item-info">
        <span className='cart-list__item-name-quantity'>
          <p>{el.name}</p>
          <div className="cart-list__item-price__quantity">
            <Button btnStyles="Quantity" btnClick={() => decreaseQuantity(el.id)} text="-" />
            <p>{el.quantity || 1}</p>
            <Button btnStyles="Quantity" btnClick={() => increaseQuantity(el.id)} text="+" />
          </div>
        </span>

        <span className="cart-list__item-price">
          <Button text="Remove" btnStyles="Remove" btnClick={() => removeFromCart(el.id)} />

          <p>
            ${rounded((el.price || 0) * (el.quantity || 1) - (el.price || 0) * (el.quantity || 1) * (el.discount || 0))}
          </p>
        </span>
      </span>
    </div>
  ))

  const subtotal = cartItems.reduce(
    (total, item) =>
      total +
      (item.price || 0) * (item.quantity || 1) -
      (item.price || 0) * (item.quantity || 1) * (item.discount || 0),
    0
  )

  return (
    <section className="cart">
      <div style={{ height: '28px', marginBottom: '30px', marginTop: '30px' }}>
        1 my bag 2 delivery 3 Review & Payment{' '}
      </div>
      <div className="cart-container">
        <div className="cart-list">
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
              <div className="cart-list__subtotal">
                <span>Subtotal</span>
                <span>${rounded(subtotal)}</span>
              </div>
              <span className="cart-list__link">
                <a className="cart-list__link-shop" href="/shop">
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
        <div className="cart-details">
          <div className="cart-details__info">
            <h2 className="cart-info__title">Order summery</h2>
            <div className="cart-list__subtotal">
              <span>Subtotal</span>
              <span>${rounded(subtotal)}</span>
            </div>
            <div className="cart-list__subtotal">
              <span>Delivery</span>
              <span>$15</span>
            </div>
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
            <div className="cart-list__subtotal">
              <span>Total</span>
              <span>${rounded(subtotal + 15)}</span>
            </div>
            <p>Estimated shipping time: 2 days</p>
            <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: 'rgba(40, 40, 40, 1)' }}>
              <a
                href="/"
                style={{
                  textAlign: 'center',
                  cursor: 'pointer',
                  width: '100%',
                  color: 'white',
                  fontFamily: "'Montserrat', sans-serif",
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  padding: '10px 0',
                }}
              >
                Check out
              </a>
            </div>
            {/* Замінити <div><a></a></div> */}
          </div>
          <div className="payment">
            <h2 className="cart-info__title">Payment type</h2>
            <div className="payment-choose">
              <RadioButton option="visa" imgsrc="./pics/payment/Visa.svg" />
              <RadioButton option="master" imgsrc="./pics/payment/Master.svg" />
              <RadioButton option="maestro" imgsrc="./pics/payment/Maestro.svg" />
              <RadioButton option="ideal" imgsrc="./pics/payment/Ideal.svg" />
              <RadioButton option="dvance" imgsrc="./pics/payment/Advance.svg" />
            </div>
          </div>
          <div className="cart-details__delivery">
            <h2 className="cart-details__delivery-title">Delivery</h2>
            <ul className="cart-details__delivery-list">
              <li>Order before 12:00 and we will ship the same day.</li>
              <li>Orders made after Friday 12:00 are processed on Monday.</li>
              <li>To return your articles, please contact us first.</li>
              <li>Postal charges for retour are not reimbursed.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
