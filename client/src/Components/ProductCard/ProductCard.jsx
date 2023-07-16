import "./ProductCard.scss";
import PropTypes from 'prop-types';

function ProductCard({id, name, variety, region, country, image, price, basePrice, discount}) {

    let isDiscounted = false;
    let productCardPriceClassName = "product-card__price";
    console.log(discount)
    if (discount > 0) {
        isDiscounted = true;
        productCardPriceClassName += " discounted";
    }

    return (
        <li className="product-card">
            <div className="product-card__image"><img src={`http://localhost:4000${image}`} alt={name}/></div>
            <div className="product-card__content">
                <div className="product-card__title-group">
                    <h3 className="product-card__title">{name}</h3>
                    <p className="product-card__origin-text">{`${variety} | ${region}, ${country}`}</p>
                </div>
                <div className="product-card__price-group">
                    <p className={productCardPriceClassName}>${basePrice}</p>
                    {isDiscounted &&
                        <p className="product-card__price-after-discount">{price}</p>
                    }
                </div>
            </div>
            <div className="product-card__hover-content">
                <a href={`/shop/${id}`} style={{color: "white", fontFamily: "'Montserrat', sans-serif", textTransform: "uppercase"}}>Read more</a>
                <a href="/" style={{color: "white", fontFamily: "'Montserrat', sans-serif", textTransform: "uppercase"}}>Add to cart</a>
            </div>
        </li>
    )
}

// TODO: replace links with Button component in .product-card__hover-content

ProductCard.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    variety: PropTypes.string.isRequired,
    region: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    basePrice: PropTypes.number.isRequired,
    discount: PropTypes.number.isRequired,
}


export default ProductCard;