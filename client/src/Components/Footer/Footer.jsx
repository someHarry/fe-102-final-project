import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './Footer.scss'
import Logo from '../Logo'

function Footer({ catalogTitle, clientTitle }) {
  return (
    <footer className="footer">
      <div className="container footer__wrapper">
        <Logo classNames="footer__logo" />
        <div className="footer__catalog catalog">
          <h3 className="catalog__title footer-title">{catalogTitle}</h3>

          <ul className="catalog__list footer-list">
            <li className="catalog__item footer__item">
              <Link className="catalog-link footer__link" to="blog/jura">
                Jura
              </Link>
            </li>
            <li className="client__item footer__item">
              <Link className="catalog-link footer__link" to="blog/porto">
                Porto
              </Link>
            </li>
            <li className="client__item footer__item">
              <Link className="catalog-link footer__link" to="blog/priorat">
                Priorat
              </Link>
            </li>
            <li className="client__item footer__item">
              <Link className="catalog-link footer__link" to="blog/sicily">
                Sicily
              </Link>
            </li>
            <li className="client__item footer__item">
              <Link className="catalog-link footer__link" to="blog/switzerland">
                Switzerland
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer__client client">
          <h3 className="client__title footer-title">{clientTitle}</h3>

          <ul className="client__list footer-list">
            <li className="client__item footer__item">
              <Link className="client-link footer__link" to="contact">
                Contact us
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer__contacts contacts">
          <h3 className="contacts__title footer-title">Contacts info</h3>
          <ul className="contacts__list footer-list">
            <li className="contacts__item contacts__item--adress">
              <Link className="contacts__item-text contacts__text" to="tel:+1234567890">
                Pavla Tychyna Avenue, 1B, Kyiv
              </Link>
            </li>

            <li className="contacts__item contacts__item--email">
              <Link className="contacts__item-text contacts__text" to="mailto:wine@gmail.com">
                goodwine.kyiv@gmail.com
              </Link>
            </li>

            <li className="contacts__item contacts__item--tel">
              <Link className="contacts__item-text contacts__text" to="tel:+1234567890">
                +38 (063) 278-45-55
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

Footer.defaultProps = {}
Footer.propTypes = {
  catalogTitle: PropTypes.string.isRequired,
  clientTitle: PropTypes.string.isRequired,
}

export default Footer
