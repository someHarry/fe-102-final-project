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
              <Link className="catalog-link footer__link" to="/">
                Вино
              </Link>
            </li>
            <li className="catalog__item footer__item">
              <Link className="catalog-link footer__link" to="/">
                Ігристі
              </Link>
            </li>
            <li className="catalog__item footer__item">
              <Link className="catalog-link footer__link" to="/">
                Віскі
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer__client client">
          <h3 className="client__title footer-title">{clientTitle}</h3>

          <ul className="client__list footer-list">
            <li className="client__item footer__item">
              <Link className="client-link footer__link" to="/">
                Вхід до кабінету
              </Link>
            </li>
            <li className="client__item footer__item">
              <Link className="client-link footer__link" to="/">
                Каталог
              </Link>
            </li>
            <li className="client__item footer__item">
              <Link className="client-link footer__link" to="/">
                Про нас
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer__contacts contacts">
          <h3 className="contacts__title footer-title">Контактна інформація</h3>
          <ul className="contacts__list footer-list">
            <li className="contacts__item contacts__item--adress">
              <a className="contacts__item-text contacts__text" href="tel:+1234567890">
                3 Falahi, Falahi St, Pasdaran Ave, Shiraz, Fars Provieence Iran
              </a>
            </li>

            <li className="contacts__item contacts__item--email">
              <a className="contacts__item-text contacts__text" href="mailto:wine@gmail.com">
                wine@gmail.com
              </a>
            </li>

            <li className="contacts__item contacts__item--tel">
              <a className="contacts__item-text contacts__text" href="tel:+1234567890">
                +1 (234) 567-890
              </a>
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
