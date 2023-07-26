import { useState, useEffect } from 'react'
import Button from '../../Components/Button/Button'
import './ProductPage.scss'
// import sendRequest from '../../helpers/request'

function ProductPage() {
  // const [product, setProduct] = useState({})
  const [isLoad, setIsLoad] = useState(false)
  useEffect(() => {
    // sendRequest().then().catch(setIsLoad(true))
    setIsLoad(true)
  }, [])

  if (!isLoad) {
    return <p>sdfghj</p>
  }

  return (
    <div>
      <div className="container product">
        <img
          className="product__img"
          src={`${process.env.PUBLIC_URL}/pics/product-page-img.jpg`}
          alt="product"
          width="456"
          height="507"
        />
        <div className="product__wrapper">
          <h2 className="product__title">Ceylon Ginger Cinnamon chai tea</h2>
          <p className="product__description">A lovely warming Chai tea with ginger cinnamon flavours.</p>

          {false ? (
            <p className="product__price">20$</p>
          ) : (
            <div>
              <p className="product__all-price">
                <span className="product__price product__price--old-price">20$</span>
                <span className="product__price product__price--discount">13%</span>
                <span className="product__price product__price--new-price">20$</span>
              </p>
            </div>
          )}

          <div className="product__buy buy">
            <div className="buy__wrapper">
              <button className="buy__btn buy__btn--minus">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                  <mask maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="25">
                    <rect y="0.742981" width="24" height="24" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_211_1311)">
                    <path d="M7 13.743V11.743H17V13.743H7Z" fill="#282828" />
                  </g>
                </svg>
              </button>

              <p className="buy__text">1</p>

              <button className="buy__btn buy__btn--plus">
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
            <Button text="ADD TO BAG" btnStyles="buttonDark" />
          </div>
        </div>
      </div>
      <section className="product-info">
        <div className="container">
          <h2 className="product-info__title">About this product</h2>

          <ul className="product-info__list">
            <li className="product-info__item">
              <p className="product-info__text">Region: Burgundy</p>
            </li>

            <li className="product-info__item">
              <p className="product-info__text">Country: France</p>
            </li>

            <li className="product-info__item">
              <p className="product-info__text">Brand: Pinot Noir</p>
            </li>

            <li className="product-info__item">
              <p className="product-info__text">Volume: 750 ml</p>
            </li>

            <li className="product-info__item">
              <p className="product-info__text">Alcohol: 13 %</p>
            </li>

            <li className="product-info__item">
              <p className="product-info__text">Year: 2020</p>
            </li>

            <li className="product-info__item">
              <p className="product-info__text">Color: red</p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default ProductPage
