import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = buttonName => {
    const stateObj = this.state;
    const output = calculate(stateObj, buttonName);
    this.setState({
      total: output.total ? output.total : null,
      next: output.next ? output.next : null,
      operation: output.operation ? output.operation : null,
    });
  }

  render() {
    // eslint-disable-next-line no-unused-vars
    const { total, next, operation } = this.state;
    return (
      <>
        <main className="main">
          <Display result={next || total || '0'} />
          <ButtonPanel clickHandler={this.handleClick} />
        </main>
      </>
    );
  }
}

export default App;
