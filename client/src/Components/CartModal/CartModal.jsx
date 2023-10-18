import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  actionRemoveCart,
  actionDecreaseQuantity,
  actionIncreaseQuantity,
  actionHandleModal,
} from '../../redux/cart/actionCart' 
import Button from '../Button'
import './CartModal.scss'

export default function CartModal() {

  const subtotal = useSelector((state) => state.cart.subtotal)
  const modal = useSelector((state) => state.cart.modal)
  const cartItems = useSelector((state) => state.cart.cart)
  const dispatch = useDispatch()



  const handleModal = (modalchoose) => (modalchoose ? 'overlay' : 'none')

  const handleRemoveFromCart = (item) => {
    dispatch(actionRemoveCart(item))
  }

  const handleIncreaseQuantity = (itemNo) => {
    dispatch(actionIncreaseQuantity({ itemNo }))
  }

  const handleDecreaseQuantity = (itemNo) => {
    dispatch(actionDecreaseQuantity({ itemNo }))
  }

  const handleModalClick = () => {
    dispatch(actionHandleModal())
  }

  const CartList = cartItems.map((item) => (
    <div className="cart-modal__item" key={item.itemNo}>
      <span className="cart-modal__item-img">
        <img src={`${item.imageUrls}`} alt="" />
      </span>
      <span className="cart-modal__item-info">
        <span className="cart-modal__item-name-quantity">
          <a href={`/shop/${item.itemNo}`}>{item.name}</a>
          <div className="cart-modal__item-price__quantity">
            <Button btnStyles="Quantity" btnClick={() => handleDecreaseQuantity(item.itemNo)} text="-" />
            <p>{item.quant || 1}</p>
            <Button btnStyles="Quantity" btnClick={() => handleIncreaseQuantity(item.itemNo)} text="+" />
          </div>
        </span>
        <span className="cart-modal__item-price">
          <Button text="Remove" btnStyles="Remove" btnClick={() => handleRemoveFromCart(item)} />
          <p>{item.currentPrice}</p>
        </span>
      </span>
    </div>
  ))

  return (
    <div
      className={handleModal(modal)}
      onClick={() => handleModalClick()}
      data-testid="modal-overlay" // Додати цей атрибут
      onKeyDown={(e) => {
        if (e.key === 'Escape') {
          handleModalClick()
        }
      }}
      role="button"
      tabIndex={0}
    >
      <div
        className="cart-modal"
        onClick={(e) => e.stopPropagation()}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Escape') {
            console.log('Закрити модальне вікно')
          }
        }}
      >
        {CartList.length > 0 ? (
          <>
            <h2>My Bag</h2>
            <div className="cart-modal__container">{CartList}</div>
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
            <div className="cart-modal__subtotal">
              <span>Subtotal</span>
              <span>${subtotal}</span>
            </div>
            <span className="cart-modal__link">
              <a className="cart-modal__link-shop" href="/cart" onClick={() => handleModalClick()}>
                Purchase
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
    </div>
  )
}
