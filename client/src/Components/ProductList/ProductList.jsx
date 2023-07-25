import {useEffect, useState} from "react";
import "./ProductList.scss";
// import PropTypes from 'prop-types';
import ProductCard from "../ProductCard";
import FilterPanel from "./components/FilterPanel";
import SortingPanel from "./components/SortingPanel";

function ProductList() {
    const initialQueryString = window.location.search;
    const [products, setProducts] = useState([]);
    const [isLoad, setIsLoad] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [queryParams, setQueryParams] = useState({perPage: 10, startPage: 1});

    let queryParamsString = "";
    if (initialQueryString.length > 0) {
        queryParamsString = initialQueryString;
    }

    function getProducts() {
        queryParamsString = "";
        Object.keys(queryParams).forEach((key) => {
            if (queryParamsString.length < 1) {
                queryParamsString = `?${key}=${queryParams[key]}`;
            } else {
                queryParamsString += `&${key}=${queryParams[key]}`;
            }
        })

        fetch(`http://localhost:4000/api/products/filter${queryParamsString}`)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
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
    }

    useEffect(() => {
        console.log("default use effect triggered")
        getProducts();
    }, [])
    useEffect(() => {
        console.log("queryParams.sort triggered")
        getProducts();
    }, [queryParams.sort])

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
                    <FilterPanel/>
                </div>
                <div className="product-list__content-block">
                    <div className="product-list__sorting">
                        <SortingPanel 
                            queryParams={queryParams}
                            setQueryParams={setQueryParams}
                        />
                    </div>
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
