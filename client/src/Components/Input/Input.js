/* eslint-disable react/require-default-props */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types'
import './Input.scss'

function Input(props) {
  // eslint-disable-next-line react/prop-types
  const {
    type,
    name,
    placeholder,
    label,
    className,
    error,
    errorMessage,
    hasIcon,
    hasEmailIcon,
    hasPassIcon,
    options,
    ...inputProps
  } = props

  const classNames = className ? `form-item ${className}` : 'form-item  '
  const hasValidation = error ? ' has-validation' : ''
  const inputClassNames = `form-control input ${className}`

  if (type === 'select') {
    return (
      <label className={classNames + hasValidation} htmlFor={name}>
        <p className="form-label">{label}</p>
        <div className="input-wrapper">
          <select className={inputClassNames} name={name} {...inputProps}>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        {error && <p className="error-message">{errorMessage}</p>}
      </label>
    )
  }
  return (
    <label className={classNames + hasValidation} htmlFor={name}>
      <p className="form-label">{label}</p>
      <div className="input-wrapper">
        <input className={inputClassNames} type={type} name={name} placeholder={placeholder} {...inputProps} />
        {hasIcon && <span className="icon-header" />}
        {hasEmailIcon && <span className="signIn-icon signIn-icon__email" />}
        {hasPassIcon && <span className="signIn-icon signIn-icon__password" />}
      </div>
      {error && <p className="error-message">{errorMessage}</p>}
    </label>
  )
}

Input.defaultProps = {
  type: 'text',
}

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  hasIcon: PropTypes.element,
  hasEmailIcon: PropTypes.element,
  hasPassIcon: PropTypes.element,
  options: PropTypes.element,
}

export default Input
