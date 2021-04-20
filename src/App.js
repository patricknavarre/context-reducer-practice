import React from 'react';
import Counter from './Counter';
import './App.css';
import CountContextComponent from './context/CountContext';

function App() {
  return (
    <div className="App">
      <CountContextComponent>
        <Counter />
      </CountContextComponent>
    </div>
  );
}

export default App;
