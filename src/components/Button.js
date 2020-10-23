import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  handleClick(buttonName) {
    const { clickHandler } = this.props;
    return clickHandler(buttonName);
  }

  render() {
    const {
      name, btnClass, color, wide,
    } = this.props;
    return (
      <button
        type="button"
        className={
          btnClass
          + (color ? ' orangeBackground' : '')
          + (wide ? ' doubleWidth' : '')
        }
        onClick={this.handleClick(name)}
      >
        {name}
      </button>
    );
  }
}

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
  clickHandler: PropTypes.func.isRequired,
};

export default Button;
