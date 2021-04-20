import React from 'react';
import Counter from './Counter';
import './App.css';
import CountContextComponent from './context/CountContext';
import AuthContextComponent from './context/AuthContext';

function App() {
  return (
    <div className="App">
      <AuthContextComponent>
      <CountContextComponent>
        <Counter />
      </CountContextComponent>
      </AuthContextComponent>
    </div>
  );
}

export default App;
