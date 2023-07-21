/* eslint-disable react/require-default-props */
import PropTypes from 'prop-types';

function Form({ onSubmit, children, className }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className={className}>
      {children}
    </form>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Form;