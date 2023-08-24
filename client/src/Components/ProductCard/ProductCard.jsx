import React, { useState } from 'react'
import './ProductCard.scss'
import PropTypes from 'prop-types'
import Button from '../Button'
import CartComponent from '../CartComponent/CartComponent'

function ProductCard({ itemNo, name, variety, region, country, imageUrls, currentPrice, previousPrice, discount }) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [subtotal, setSubtotal] = useState(0)

  const updateSubtotals = (newSubtotal) => {
    setSubtotal(newSubtotal)
  }

  let isDiscounted = false
  let productCardPriceClassName = 'product-card__price'
  if (+discount > 0) {
    isDiscounted = true
    productCardPriceClassName += ' discounted'
  }

  const addToCart = () => {
    const existingCartItems = JSON.parse(localStorage.getItem('cart')) || []
    const productInCart = existingCartItems.find((item) => item.itemNo === itemNo)
    if (!productInCart) {
      const newCartItem = { itemNo, name, variety, region, country, imageUrls, currentPrice }
      existingCartItems.push(newCartItem)
      localStorage.setItem('cart', JSON.stringify(existingCartItems))
      setIsModalOpen(true) // Відкрити модальне вікно
    }
  }


  return (
    <li key={itemNo} className="product-card">
      <div className="product-card__image">
        <img src={`${imageUrls[0]}`} alt={name} />
      </div>
      <div className="product-card__content">
        <div className="product-card__title-group">
          <h3 className="product-card__title">{name}</h3>
          <p className="product-card__origin-text">{`${variety} | ${region}, ${country}`}</p>
        </div>
        <div className="product-card__price-group">
          <p className={productCardPriceClassName}>${previousPrice}</p>
          {isDiscounted && <p className="product-card__price-after-discount">{currentPrice}</p>}
        </div>
      </div>
      <div className="product-card__hover-content">
        <a
          href={`/shop/${itemNo}`}
          style={{ color: 'white', fontFamily: "'Montserrat', sans-serif", textTransform: 'uppercase' }}
        >
          Read more
        </a>
        <Button btnClick={addToCart} btnStyles="AddToCart" text="Add to cart" />
        <span style={{ display: 'none' }}>{subtotal}</span>
      </div>
      {isModalOpen && (
        <div
          role="button"
          tabIndex={0}
          className="overlay"
          onClick={() => setIsModalOpen(false)}
          onKeyDown={(e) => {
            if (e.key === 'Escape') {
              setIsModalOpen(false)
            }
          }}
        >
          <CartComponent
            updateSubtotals={updateSubtotals}
            cartStyles="collection"
          />
        </div>
      )}
    </li>
  )
}

// TODO: replace links with Button component in .product-card__hover-content

ProductCard.propTypes = {
  itemNo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  variety: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  imageUrls: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentPrice: PropTypes.number.isRequired,
  previousPrice: PropTypes.number.isRequired,
  discount: PropTypes.string.isRequired,
}

export default ProductCard
