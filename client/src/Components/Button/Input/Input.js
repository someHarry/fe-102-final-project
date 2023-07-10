import { ReactPropTypes } from "react";
import "./Input.scss";

function Input(props) {
  const { type, name, placeholder, label, className, error, errorMessage, ...inputProps } = props;

  const classNames = className ? `form-item ${className}` : "form-item";
  const hasValidation = error ? " has-validation" : "";

  return (
    <label className={classNames + hasValidation}>
      <p className="form-label">{label}</p>
      <input className="form-control" type={type} name={name} placeholder={placeholder} {...inputProps} />
      {error && <p className="error-message">{errorMessage}</p>}
    </label>
  );
}
Input.defaultProps = {
  
};

Input.propTypes = {
 
};

export default Input;
