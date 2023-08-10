import React from "react";
import "./ProductCard.scss";
import PropTypes from 'prop-types';
import Button from "../Button";

function ProductCard({itemNo, name, variety, region, country, imageUrls, currentPrice, previousPrice, discount}) {

    let isDiscounted = false;
    let productCardPriceClassName = "product-card__price";
    if (+discount > 0) {
        isDiscounted = true;
        productCardPriceClassName += " discounted";
    }

    const addToCart = () => {
        // Get the existing cart items from localStorage
        const existingCartItems = JSON.parse(localStorage.getItem('cart')) || [];
        
        // Check if the product is already in the cart by its ID
        const productInCart = existingCartItems.find(item => item.id === id);
        
        // If the product is not in the cart, add it to the cart
        if (!productInCart) {
            const newCartItem = { id, name, variety, region, country, image, price, basePrice, discount };
            existingCartItems.push(newCartItem);
            localStorage.setItem('cart', JSON.stringify(existingCartItems));
        }
    };


    return (
        <li key={itemNo} className="product-card">
            <div className="product-card__image"><img src={`${imageUrls[0]}`} alt={name}/></div>
            <div className="product-card__content">
                <div className="product-card__title-group">
                    <h3 className="product-card__title">{name}</h3>
                    <p className="product-card__origin-text">{`${variety} | ${region}, ${country}`}</p>
                </div>
                <div className="product-card__price-group">
                    <p className={productCardPriceClassName}>${previousPrice}</p>
                    {isDiscounted &&
                        <p className="product-card__price-after-discount">{currentPrice}</p>
                    }
                </div>
            </div>
            <div className="product-card__hover-content">
<<<<<<< HEAD
                <a href={`/shop/${id}`} style={{color: "white", fontFamily: "'Montserrat', sans-serif", textTransform: "uppercase"}}>Read more</a>
                <Button btnClick={addToCart} btnStyles="AddToCart" text="Add to cart" />
=======
                <a href={`/shop/${itemNo}`} style={{color: "white", fontFamily: "'Montserrat', sans-serif", textTransform: "uppercase"}}>Read more</a>
                <a href="/" style={{color: "white", fontFamily: "'Montserrat', sans-serif", textTransform: "uppercase"}}>Add to cart</a>
>>>>>>> main
            </div>
        </li>
    )
}

// TODO: replace links with Button component in .product-card__hover-content

ProductCard.propTypes = {
    itemNo: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    variety: PropTypes.string.isRequired,
    region: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    imageUrls: PropTypes.arrayOf(PropTypes.string).isRequired,
    currentPrice: PropTypes.number.isRequired,
    previousPrice: PropTypes.number.isRequired,
    discount: PropTypes.string.isRequired,
}


export default ProductCard;