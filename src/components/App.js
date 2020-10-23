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
      // eslint-disable-next-line react/no-unused-state
      operation: null,
    };
  }

  handleClick = buttonName => {
    const stateObj = this.state;
    const output = calculate(stateObj, buttonName);
    this.setState({
      total: output.total,
      next: output.next,
    });
  }

  render() {
    const { total, next } = this.state;
    return (
      <>
        <main className="main">
          <Display result={total || next} />
          <ButtonPanel clickHandler={this.handleClick} />
        </main>
      </>
    );
  }
}

export default App;
