import React from 'react';
import Counter from './Counter';
import './App.css';
import CountContextComponent from './context/CountContext';
import AuthContextComponent from './context/AuthContext';
import User from "./components/User"

function App() {
  return (
    <div className="App">
      <AuthContextComponent>
      <CountContextComponent>
        <Counter />
        <User />
      </CountContextComponent>
      </AuthContextComponent>
    </div>
  );
}

export default App;
