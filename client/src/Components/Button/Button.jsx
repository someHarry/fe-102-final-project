import PropTypes from 'prop-types'
import './Button.scss'

function Button(props) {
  const { btnStyles, btnClick, text, children } = props
  return (
    <button className={`button + ${btnStyles}`} type="button" onClick={btnClick}>
      {text}
      {children}
    </button>
  )
}

Button.defaultProps = {
  btnClick: () => {},
  btnStyles: '',
  
}

Button.propTypes = {
  btnStyles: PropTypes.string,
  btnClick: PropTypes.func,
  text: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default Button
