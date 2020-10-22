import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
// eslint-disable-next-line no-unused-vars
import calculate from '../logic/calculate';

function App() {
  return (
    <>
      <main className="main">
        <Display result="0" />
        <ButtonPanel />
      </main>
    </>
  );
}

export default App;
