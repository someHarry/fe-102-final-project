import React from 'react'

import { useSelector } from 'react-redux'

import './CartPage.scss'
import CartComponent from '../../Components/CartComponent/CartComponent'
import MayLike from '../../Components/MayLike'
import RadioButton from '../../Components/RadioButton'

export default function CartPage() {
  const subtotal = useSelector((state) => state.cart.subtotal)

  return (
    <section className="cart">
      <div className="routes">
        <p className="routes-tit">1. MY BAG</p>
        <hr className="routes-line" />
        <p className="routes-tit">2. DELIVERY</p>
        <hr className="routes-line" />
        <p className="routes-tit">3. REVIEW & PAYMENT</p>
      </div>
      <div className="cart-container">
        <CartComponent />

        <div className="cart-details">
          <div className="cart-details__info">
            <h2 className="cart-info__title">Order summery</h2>
            <div className="cart-subtotal">
              <span>Subtotal</span>
              <span>${subtotal}</span>
            </div>
            <div className="cart-subtotal">
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
            <div className="cart-subtotal">
              <span>Total</span>
              <span>${parseFloat(subtotal) + 15}</span>
            </div>
            <p>Estimated shipping time: 2 days</p>
            <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: 'rgba(40, 40, 40, 1)' }}>
              <a
                href="/delivery"
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
          </div>
          <div className="cart-details__payment">
            <h2 className="cart-info__title">Payment type</h2>
            <div className="cart-details__payment-choose">
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
      <MayLike />
    </section>
  )
}
