import './ProductPage.scss'

function ProductPage() {
  return (
    <div>
      <section className="product">
        <div className="container">
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
            {true ? (
              <p className="product__price">Price: 20$</p>
            ) : (
              <div>
                <p className="product__all-price">
                  <span className="product__old-price">Price: 20$</span>
                  <span className="product__discount">Discount: 13%</span>
                  <span className="product__new-price">Price: 20$</span>
                </p>
              </div>
            )}
            <ul className="product__list">
              <li className="product__item product-item">
                <p className="product-item__text">Country: France</p>
                <p className="product-item__text">Region: Burgundy</p>
                <p className="product-item__text">Brand: Pinot Noir</p>
                <p className="product-item__text">Volume: 750 ml</p>
                <p className="product-item__text">Alcohol: 13 %</p>
                <p className="product-item__text">Year: 2020</p>
                <p className="product-item__text">Color: red</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductPage
