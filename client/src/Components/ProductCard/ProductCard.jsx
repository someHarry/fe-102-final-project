import React from "react";
import "./ProductCard.scss";
import PropTypes from 'prop-types';
import Button from "../Button";

function ProductCard({id, name, variety, region, country, image, price, basePrice, discount}) {

    let isDiscounted = false;
    let productCardPriceClassName = "product-card__price";
    if (discount > 0) {
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
        <li key={id} className="product-card">
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
                <Button btnClick={addToCart} btnStyles="AddToCart" text="Add to cart" />
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