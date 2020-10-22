import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const {
    name, btnClass, color, wide,
  } = props;
  return (
    <button
      type="button"
      className={
        btnClass
        + (color ? ' orangeBackground' : '')
        + (wide ? ' doubleWidth' : '')
      }
    >
      {name}
    </button>
  );
};

Button.defaultProps = {
  name: '',
  btnClass: 'button',
  color: false,
  wide: false,
};

Button.propTypes = {
  name: PropTypes.string,
  btnClass: PropTypes.string,
  color: PropTypes.bool,
  wide: PropTypes.bool,
};

export default Button;
