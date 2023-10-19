/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { Link } from 'react-router-dom'
import { useEffect, useCallback } from 'react'
import './Header.scss'
import Logo from '../Logo'
import CartCounter from '../CartCounter'
import Auth from "../Auth";


function Header() {

  useEffect(() => {
      const burger = document.querySelector(".burger-menu");
      const menuExtended = document.querySelector(".menu__list");
      // Menu Burger
      document.addEventListener("click", (e) => {
        if (e && !(e.target.className === "menu__list--item") && !(e.target.className === "menu__list--item__link") ) { 
          burger.classList.remove("checked");
          menuExtended.classList.remove("menu-extended");
        }
      });
  
      document.addEventListener("keydown", (el) => {
        if (el.key === "Escape") {
          menuExtended.classList.remove("menu-extended");
          burger.classList.remove("checked");
        }
      });
  
      // END Burger
    }, [])
  
    const burgerHandler = useCallback((e) => {
      const burger = e.target.closest(".burger-menu");
      e.stopPropagation();
      e.target.closest(".burger-menu").classList.toggle("checked");
      const menuExtended = document.querySelector(".menu__list");
      if (burger.classList.contains("checked")) {
        menuExtended.classList.add("menu-extended");
      } else {
        menuExtended.classList.remove("menu-extended");
      }
    }, [])

  return (
    <header className="header__wrapper">
      <Logo classNames="logo__link" />

      {/* NAVIGATION WITH MAIN LINKS */}

       {/* Burger  */}
           <div className="burger-menu" onClick={burgerHandler}>
            <span className="burger-menu__item1" />
            <span className="burger-menu__item2" />
            <span className="burger-menu__item3" />
          </div> 
         {/* End Burger */}

      <nav className="header__wrapper--nav nav__menu">
      
        <ul className="nav__menu--list menu__list">
          <li className="menu__list--item">
            <Link className="menu__list--item__link item__link" to="/shop">
              Wine Collection
            </Link>
          </li>
          <li className="menu__list--item">
            <Link className="menu__list--item__link item__link" to="/blog">
              Blog
            </Link>
          </li>
          <li className="menu__list--item">
            <Link className="menu__list--item__link item__link" to="/contact">
              Contact Us
            </Link>
          </li>
        </ul> 
      </nav>
      {/* END of NAVIGATION WITH MAIN LINKS */}
      <Auth className="icons__auth" />
      <Link className=" icons__link" to="/cart">
        <CartCounter/>
        <img className="icons__link--cart" src="https://raw.githubusercontent.com/someHarry/fe-102-final-project/main/client/public/pics/shopping_cart.png" alt="shopping cart icon" />
      </Link>
        
    </header>
  )
}

export default Header
