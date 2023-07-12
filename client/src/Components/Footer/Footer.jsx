import PropTypes from 'prop-types'
import Logo from './img/logo-wine.svg'
import './Footer.scss'

function Footer({ catalogTitle, clientTitle, catalogItem, clientItem }) {
  return (
    <footer className="footer">
      <div className="container footer__wrapper">
        <img src={Logo} alt="Logo Wine" className="footer__logo" width="100" height="100" />

        <div className="footer__catalog catalog">
          <h3 className="catalog__title footer-title">{catalogTitle}</h3>

          <ul className="catalog__list footer-list">
            {catalogItem.map((item) => (
              <li className="catalog__item" key={item}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__client client">
          <h3 className="client__title footer-title">{clientTitle}</h3>

          <ul className="client__list footer-list">
            {clientItem.map((item) => (
              <li className="client__item" key={item}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__contacts contacts">
          <h3 className="contacts__title footer-title">Контактна інформація</h3>
          <ul className="contacts__list">
            <li className="contacts__item contacts__item--tel">
              <a className="contacts__item-text" href="tel:+1234567890">
                +1 (234) 567-890
              </a>
              <a className="contacts__item-text" href="tel:+1234567890">
                +1 (234) 567-890
              </a>
            </li>
            <li className="contacts__item contacts__item--email">
              <a className="contacts__item-text" href="mailto:wine@gmail.com">
                wine@gmail.com
              </a>
            </li>
          </ul>
          <p className="contacts__text">Ми в соцмережах</p>
        </div>
      </div>
    </footer>
  )
}

Footer.defaultProps = {
  catalogItem: [],
  clientItem: [],
}
Footer.propTypes = {
  catalogTitle: PropTypes.string.isRequired,
  clientTitle: PropTypes.string.isRequired,
  catalogItem: PropTypes.arrayOf(PropTypes.string),
  clientItem: PropTypes.arrayOf(PropTypes.string),
}

export default Footer
