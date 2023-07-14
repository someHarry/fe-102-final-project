/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from "prop-types";
import "./Input.scss";

function Input(props) {
  // eslint-disable-next-line react/prop-types
  const { type, name, placeholder, label, className, error, errorMessage, hasIcon, hasEmailIcon, hasPassIcon, ...inputProps } = props;

  const classNames = className ? `form-item ${className}` : "form-item  ";
  const hasValidation = error ? " has-validation" : "";
  const inputClassNames = `form-control input ${className}`;
  return (
    <label className={classNames + hasValidation} htmlFor={name}>
      <p className="form-label">{label}</p>
       <div className="input-wrapper">
    <input className={inputClassNames} type={type} name={name} placeholder={placeholder} {...inputProps}/>
        {hasIcon && <span className="icon-header" />}
        {hasEmailIcon && <span className="signIn-icon--email" />}
        {hasPassIcon && <span className="signIn-icon--password"/>}
  </div>
      {error && <p className="error-message">{errorMessage}</p>}
    </label>
  );
}

Input.defaultProps = {
  type: "text",

};

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  error: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  hasIcon: PropTypes.element,
};

export default Input;