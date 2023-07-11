import PropTypes from "prop-types";
import "./Input.scss";

function Input(props) {
  const { type, name, placeholder, label, className, error, errorMessage,} = props;

  const classNames = className ? `form-item ${className}` : "form-item";
  const hasValidation = error ? " has-validation" : "";

  return (
    <label className={classNames + hasValidation} htmlFor={name}>
      <p className="form-label">{label}</p>
      <input className="form-control" type={type} name={name} placeholder={placeholder} />
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
};

export default Input;