import PropTypes from 'prop-types'
import './Button.scss'

function Button(props) {
  const { btnStyles, btnClick, text } = props
  return (
    <button className={`button + ${btnStyles}`} type="button" onClick={btnClick}>
      {text}
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
}

export default Button
