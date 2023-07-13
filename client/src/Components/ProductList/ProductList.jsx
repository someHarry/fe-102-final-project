import "./ProductList.scss";
import PropTypes from 'prop-types';
import ProductCard from "../ProductCard";

function ProductList({items}) {

    return (
        <div className="product-list__wrapper">
            <section className="product-list">
                <div className="product-list__filter-block">
                    Here will be filter panel component
                </div>
                <div className="product-list__content-block">
                    <div className="product-list__sorting">Here will be sorting component</div>
                    <ul className="product-list__products">
                        {items.map((item) => (
                                <ProductCard
                                    id={item.id}
                                    name={item.name}
                                    variety={item.variety}
                                    region={item.region}
                                    country={item.country}
                                    image={item.image}
                                    price={item.price}
                                    discount={item.discount}
                                    key={item.id}
                                />
                            )
                        )}
                    </ul>
                </div>
            </section>
        </div>
    )
}

ProductList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))).isRequired,
}

export default ProductList;