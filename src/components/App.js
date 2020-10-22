import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

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
