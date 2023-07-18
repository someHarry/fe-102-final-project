// import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Input from '../Input/Input'
import './Header.scss'

function Header() {
  return (
    <header className="header__wrapper">
      {/* LOGO */}
      <Link className="logo logo__link" to="/">
        <svg
          className="logo__pic"
          width="64.000000pt"
          height="64.000000pt"
          viewBox="0 0 64.000000 64.000000"
          preserveAspectRatio="xMidYMid meet"
          fill="#000000"
        >
          <g transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)" stroke="none">
            <path
              d="M282 621 c-10 -6 -12 -22 -7 -64 7 -52 5 -59 -29 -114 -46 -74 -50
                -128 -10 -143 14 -6 45 -10 70 -10 l44 0 0 -56 0 -57 -70 6 -70 6 0 -65 c0
                -65 0 -65 35 -80 99 -41 244 18 155 63 -34 17 -102 16 -126 -2 -19 -15 -19
                -15 0 -30 22 -17 76 -20 76 -5 0 6 -13 10 -30 10 -16 0 -30 5 -30 11 0 12 104
                8 117 -4 25 -26 -98 -48 -149 -28 -25 9 -28 15 -28 59 l0 48 70 -4 70 -4 0 76
                0 76 -54 0 c-30 0 -61 3 -70 6 -27 10 -18 62 20 125 34 55 36 63 30 114 l-6
                55 30 0 30 0 -6 -55 c-6 -51 -4 -59 30 -114 l36 -59 0 -126 c0 -77 4 -126 10
                -126 6 0 10 49 10 127 l0 128 -36 58 c-34 55 -36 62 -29 114 7 61 0 73 -45 73
                -14 0 -31 -4 -38 -9z"
            />
          </g>
        </svg>
        <h1 className="logo__title">Good Wine</h1>
      </Link>
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
    </header>
  )
}

export default Header
