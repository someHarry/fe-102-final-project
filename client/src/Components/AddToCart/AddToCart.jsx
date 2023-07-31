import PropTypes from "prop-types";
import Button from "../Button/Button";
import './AddToCart.scss'


function AddToCart(props) {

    return(
        <section className="overlay" onClick={(event) => {
            if (!event.target.closest(".atc")) {
              props.closeAddToCart();
            }
          }}>
            <div className="add2cart__styles" 
            // className={props.add2cart__styles}
            >
                <h3 className="add-to-cart__container--title" >My Cart</h3>
                <p className="shouldBeComponent">Component from My Cart Page with product etc.</p>

                
                

            </div>
        </section>
    )
}


export default AddToCart
