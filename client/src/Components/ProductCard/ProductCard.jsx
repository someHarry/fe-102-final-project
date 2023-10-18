import React from 'react'
import './ProductCard.scss'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import Button from '../Button'
import { actionAddToCart } from '../../redux/cart/actionCart'

function ProductCard({ itemNo, name, variety, region, country, imageUrls, currentPrice, previousPrice, discount }) {

  const dispatch = useDispatch()

  let isDiscounted = false
  let productCardPriceClassName = 'product-card__price'
  if (+discount > 0) {
    isDiscounted = true
    productCardPriceClassName += ' discounted'
  }
    
  const addToCart = async () => {
    const { data } = await axios.get(`http://localhost:4000/api/products/${itemNo}`);

    dispatch(actionAddToCart({ ...data, quant: 1 }));
};
  
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
        <Button btnClick={() => addToCart(itemNo)} btnStyles="AddToCart" text="Add to cart" />
      </div>
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
