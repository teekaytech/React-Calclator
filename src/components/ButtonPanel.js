import React from 'react';
import Button from './Button';

class ButtonPanel extends React.Component {
  renderButton(name) {
    this.buttonName = name;
    return <Button name={this.buttonName} />;
  }

  render() {
    return (
      <div>
        <div className="group-one">
          {this.renderButton('AC')}
          {this.renderButton('+/-')}
          {this.renderButton('%')}
          {this.renderButton('÷')}
        </div>
        <div className="group-two">
          {this.renderButton('7')}
          {this.renderButton('8')}
          {this.renderButton('9')}
          {this.renderButton('X')}
        </div>
        <div className="group-three">
          {this.renderButton('4')}
          {this.renderButton('5')}
          {this.renderButton('6')}
          {this.renderButton('-')}
        </div>
        <div className="group-four">
          {this.renderButton('1')}
          {this.renderButton('2')}
          {this.renderButton('3')}
          {this.renderButton('+')}
        </div>
        <div className="group-five">
          {this.renderButton('0')}
          {this.renderButton('.')}
          {this.renderButton('=')}
        </div>
      </div>
    );
  }
}

export default ButtonPanel;
