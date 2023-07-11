import "./ProductList.scss";
import PropTypes from 'prop-types';
import ProductCard from "../ProductCard";

function ProductList({items}) {

    return (
        <ul>
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
    )
}

ProductList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))).isRequired,
}

export default ProductList;