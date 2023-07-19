// import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Input from '../Input/Input'
import './Header.scss'
import Logo from '../Logo'

function Header() {
  return (
    <section className="header__wrapper">
      {/* LOGO */}
      <Logo classNames="logo__link" />
      {/* END LOGO */}

      {/* NAVIGATION WITH MAIN LINKS */}
      <nav className="header__wrapper--nav nav__menu">
        <ul className="nav__menu--list menu__list">
          <li className="menu__list--item">
            <Link className="menu__list--item__link item__link" to="/shop">
              Wine Collection
            </Link>
          </li>
          <li className="menu__list--item">
            <Link className="menu__list--item__link item__link" to="/">
              Accessories
            </Link>
          </li>
          <li className="menu__list--item">
            <Link className="menu__list--item__link item__link" to="/">
              Blog
            </Link>
          </li>
          <li className="menu__list--item">
            <Link className="menu__list--item__link item__link" to="/">
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
      {/* END of NAVIGATION WITH MAIN LINKS */}

      {/* ICONS MENU */}
      <ul className="icons__menu">
        <li className="icons__menu--item menu__link">
          <Input className="icons__menu--search search" />
        </li>
        <li className="icons__menu--item menu__link">
          <Link to="/">
            <img className="menu__link--profile" src="./pics/profile.png" alt="user profile icon" />
          </Link>
        </li>
        <li className="icons__menu--item menu__link">
          <Link to="/cart">
            <img className="menu__link--cart" src="./pics/shopping_cart.png" alt="shopping cart icon" />
          </Link>
        </li>
      </ul>
      {/* END OF ICONS MENU */}
    </section>
  )
}

export default Header