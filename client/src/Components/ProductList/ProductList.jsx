import {useEffect, useState} from "react";
import "./ProductList.scss";
// import PropTypes from 'prop-types';
import ProductCard from "../ProductCard";

function ProductList() {
    const queryString = window.location.search;
    const [products, setProducts] = useState([]);
    const [isLoad, setIsLoad] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    useEffect(() => {
        let queryParams = "?perPage=10&startPage=1"
        if (queryString.length > 0) {
            queryParams = queryString;
        }
        fetch(`http://localhost:4000/api/products/filter${queryParams}`)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result.products)
                    if (result.productsQuantity > 0) {
                        setProducts(result.products);
                    }
                    setIsLoad(true);
                },
                (error) => {
                    setIsLoad(true);
                    setErrorMessage(JSON.stringify(error.message));
                }
            )
    }, [])
    if (!isLoad) {
        return (
            <h3>Loading...</h3>
        )
    }
    if (errorMessage) {
        return (
            <h3>Error: {errorMessage}</h3>
        )
    }

    return (
        <div className="product-list__wrapper">
            <section className="product-list">
                <div className="product-list__filter-block">
                    Here will be filter panel component
                </div>
                <div className="product-list__content-block">
                    <div className="product-list__sorting">Here will be sorting component</div>
                    <ul className="product-list__products">
                        {products.length > 0 &&
                            products.map((product) => (
                                    <ProductCard
                                        id={product.id}
                                        name={product.name}
                                        variety={product.variety}
                                        region={product.region}
                                        country={product.country}
                                        image={product.image}
                                        price={product.price}
                                        basePrice={product.basePrice}
                                        discount={product.discount}
                                        key={product.id}
                                    />
                                )
                            )}
                        {
                            products.length <= 0 &&
                            <p>Nothing was found for your request. Try another one. 🤷‍♂️</p>
                        }
                    </ul>
                </div>
            </section>
        </div>
    )
}

// ProductList.propTypes = {
//     items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))).isRequired,
// }

export default ProductList;