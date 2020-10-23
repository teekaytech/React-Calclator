import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

class ButtonPanel extends React.Component {
  constructor(props) {
    super(props);
    this.renderButton = this.renderButton.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = buttonName => {
    const { clickHandler } = this.props;
    return clickHandler(buttonName);
  }

  renderButton = (buttonName, color = false, wide = false) => (
    <Button
      buttonName={buttonName}
      color={color}
      wide={wide}
      clickHandler={this.handleClick}
    />
  );

  render() {
    return (
      <div>
        <div className="group group-one">
          {this.renderButton('AC')}
          {this.renderButton('+/-')}
          {this.renderButton('%')}
          {this.renderButton('÷', true)}
        </div>
        <div className="group group-two">
          {this.renderButton('7')}
          {this.renderButton('8')}
          {this.renderButton('9')}
          {this.renderButton('X', true)}
        </div>
        <div className="group group-three">
          {this.renderButton('4')}
          {this.renderButton('5')}
          {this.renderButton('6')}
          {this.renderButton('-', true)}
        </div>
        <div className="group group-four">
          {this.renderButton('1')}
          {this.renderButton('2')}
          {this.renderButton('3')}
          {this.renderButton('+', true)}
        </div>
        <div className="group group-five">
          {this.renderButton('0', false, true)}
          {this.renderButton('.')}
          {this.renderButton('=', true)}
        </div>
      </div>
    );
  }
}

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};
export default ButtonPanel;
