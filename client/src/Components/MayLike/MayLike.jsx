import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import sendRequest from '../../helpers/request'
import './MayLike.scss'
import { actionAddToCart } from '../../redux/cart/actionCart'

function MayLike() {
  const [productOne, setProductOne] = useState({})
  const [productTwo, setProductTwo] = useState({})
  const [productThree, setProductThree] = useState({})

  const dispatch = useDispatch()

  const addToCartProductOne = () => {
    dispatch(actionAddToCart(productOne))
  }
  const addToCartProductTwo = () => {
    dispatch(actionAddToCart(productTwo))
  }
  const addToCartProductThree = () => {
    dispatch(actionAddToCart(productThree))
  }

  useEffect(() => {
    sendRequest(`http://localhost:4000/api/products/filter?perPage=3`).then((data) => {
      setProductOne(data.products[0])
      setProductTwo(data.products[1])
      setProductThree(data.products[2])
    })
  })
  return (
    <div className="container like">
      <h2 className="like__title">You may also like</h2>
      <div className="like__wrapper">
        <ul className="like__list">
          <li className="like__item like-product">
            <img className="like-product__img" src={productOne.imageUrls} alt="" width="264" height="264" />
            <p className="like-product__title">{productOne.name}</p>
            <p className="like-product__price price">
              <span className="price__active">{productOne.currentPrice} $</span>/ {productOne.volume}ml
            </p>
            <div className="like-product__hover-content">
              <a className="like-product__link" href={`/shop/${productOne.itemNo}`}>
                Read more
              </a>
              <button className="like-product__btn" onClick={addToCartProductOne}>
                Add to cart
              </button>
            </div>
          </li>

          <li className="like__item like-product">
            <img className="like-product__img" src={productTwo.imageUrls} alt="" width="264" height="264" />
            <p className="like-product__title">{productTwo.name}</p>
            <p className="like-product__price price">
              <span className="price__active">{productTwo.currentPrice} $</span>/ {productTwo.volume}ml
            </p>
            <div className="like-product__hover-content">
              <a className="like-product__link" href={`/shop/${productTwo.itemNo}`}>
                Read more
              </a>
              <button className="like-product__btn" onClick={addToCartProductTwo}>
                Add to cart
              </button>
            </div>
          </li>

          <li className="like__item like-product">
            <img className="like-product__img" src={productThree.imageUrls} alt="" width="264" height="264" />
            <p className="like-product__title">{productThree.name}</p>
            <p className="like-product__price price">
              <span className="price__active">{productThree.currentPrice} $</span>/ {productThree.volume}ml
            </p>
            <div className="like-product__hover-content">
              <a className="like-product__link" href={`/shop/${productThree.itemNo}`}>
                Read more
              </a>
              <button className="like-product__btn" onClick={addToCartProductThree}>
                Add to cart
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default MayLike
