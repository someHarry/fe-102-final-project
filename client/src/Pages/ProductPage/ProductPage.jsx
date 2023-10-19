/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types'
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios'
// eslint-disable-next-line import/no-extraneous-dependencies
import { useQuery } from 'react-query'
import { Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Loader from '../../Components/Loader'
import NotFoundPage from '../404Page/404Page'
import MayLike from '../../Components/MayLike'
import './ProductPage.scss'
// eslint-disable-next-line import/order
import { useDispatch, useSelector } from 'react-redux'
import { actionAddToCart, actionDecreaseQuantity, actionIncreaseQuantity } from '../../redux/cart/actionCart'
import Button from '../../Components/Button'

function ProductPage({ id }) {
  const [product, setProduct] = useState({})
  const [count, setCount] = useState(1)
  const [cart, setCart] = useState(false)

  const basketList = useSelector((state) => state.cart.cart)
  console.log(basketList)

  useEffect(() => {
    basketList.forEach((item) => {
      if (item.itemNo === id) {
        setCount(item.quant)
        setCart(true)
      }
    })
  }, [basketList, id])

  const dispatch = useDispatch()

  const increment = () => {
    dispatch(actionIncreaseQuantity({ itemNo: id }))
    setCount((prevCount) => prevCount + 1)
  }

  const decrement = () => {
    dispatch(actionDecreaseQuantity({ itemNo: id }))
    if (count > 1) {
      setCount((prevCount) => prevCount - 1)
    }
  }

  const addToCart = () => {
    dispatch(actionAddToCart({ ...product, quant: count }))
  }

  const request = async () => {
    const { data } = await axios.get(`http://localhost:4000/api/products/${id}`)
    return data
  }

  const { data, isError, isLoading } = useQuery('Get_Product', request)

  useEffect(() => {
    if (!isError && !isLoading) {
      setProduct(data)
    }
  }, [data, isError, isLoading])

  let isDiscounted = false
  if (product !== null) {
    if (Number(product.discount > 0)) {
      isDiscounted = true
    }
  }

  if (isLoading) {
    return (
      <div className="container product-loader">
        <Loader />
      </div>
    )
  }

  if (isError) {
    return (
      <Routes>
        <Route path={'*' || '404'} element={<NotFoundPage text="An error occurred while retrieving data" />} />
      </Routes>
    )
  }

  return (
    <div>
      <div className="container product">
        <img className="product__img" src={product.imageUrls} alt="product" width="456" height="507" />
        <div className="product__wrapper">
          <h2 className="product__title">{product.name}</h2>
          <p className="product__description">{product.description}</p>

          {!isDiscounted ? (
            <p className="product__price">{product.previousPrice}</p>
          ) : (
            <div>
              <p className="product__all-price">
                <span className="product__price product__price--old-price">{`${product.previousPrice}$`}</span>
                <span className="product__price product__price--discount">
                  {' '}
                  {`(${Number(Math.round(product.discount * 100))}%)`}
                </span>
                <span className="product__price product__price--new-price">{`${product.currentPrice}$`}</span>
              </p>
            </div>
          )}

          <div className="product__buy buy">
            <div className="buy__wrapper">
              <button className="buy__btn buy__btn--minus" onClick={decrement}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                  <mask maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="25">
                    <rect y="0.742981" width="24" height="24" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_211_1311)">
                    <path d="M7 13.743V11.743H17V13.743H7Z" fill="#282828" />
                  </g>
                </svg>
              </button>

              <p className="buy__text">{count}</p>

              <button className="buy__btn buy__btn--plus" onClick={increment}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                  <mask maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="25">
                    <rect y="0.742981" width="24" height="24" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_211_1315)">
                    <path d="M11 19.743V13.743H5V11.743H11V5.74298H13V11.743H19V13.743H13V19.743H11Z" fill="#282828" />
                  </g>
                </svg>
              </button>
            </div>
            <Button text="ADD TO CART" btnStyles="buttonDark" btnClick={addToCart} />
          </div>
          {cart && <p className="buy__add-cart">Item added to cart</p>}
        </div>
      </div>
      <section className="product-info">
        <div className="container">
          <h2 className="product-info__title">About this product</h2>

          <ul className="product-info__list">
            <li className="product-info__item">
              <p className="product-info__text">Region: {product.region}</p>
            </li>

            <li className="product-info__item">
              <p className="product-info__text">Country: {product.country}</p>
            </li>

            <li className="product-info__item">
              <p className="product-info__text">Brand: {product.variety}</p>
            </li>

            <li className="product-info__item">
              <p className="product-info__text">Volume: {product.volume} ml</p>
            </li>

            <li className="product-info__item">
              <p className="product-info__text">Alcohol: {product.ABV}%</p>
            </li>

            <li className="product-info__item">
              <p className="product-info__text">Year: {product.year}</p>
            </li>

            <li className="product-info__item">
              <p className="product-info__text">Color: {product.color}</p>
            </li>
          </ul>
        </div>
      </section>
      <MayLike />
    </div>
  )
}

ProductPage.propTypes = {
  id: PropTypes.string.isRequired,
}

export default ProductPage
