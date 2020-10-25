import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const {
    buttonName, btnClass, color, wide, clickHandler,
  } = props;
  return (
    <button
      type="button"
      className={
        btnClass
        + (color ? ' orangeBackground' : '')
        + (wide ? ' doubleWidth' : '')
      }
      onClick={clickHandler}
    >
      {buttonName}
    </button>
  );
}

Button.defaultProps = {
  buttonName: '',
  btnClass: 'button',
  color: false,
  wide: false,
};

Button.propTypes = {
  buttonName: PropTypes.string,
  btnClass: PropTypes.string,
  color: PropTypes.bool,
  wide: PropTypes.bool,
};

Button.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default Button;
