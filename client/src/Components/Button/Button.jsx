import PropTypes from 'prop-types'
import './Button.scss'

function Button(props) {
  const { btnStyles, btnClick, text } = props
  return (
    <button data-testid="btn" className={`button + ${btnStyles}`} type="button" onClick={btnClick}>
      {text}
    </button>
  )
}

Button.defaultProps = {
  // type: "button",
  btnClick: () => {},
  btnStyles: '',
  
}

Button.propTypes = {
  btnStyles: PropTypes.string,
  // type: PropTypes.string,
  btnClick: PropTypes.func,
  text: PropTypes.string.isRequired,
}

export default Button
