import React from 'react';
import Counter from './Counter';
import './App.css';
import CountContextComponent from './context/CountContext';
import AuthContextComponent from './context/AuthContext';
import Login from "./components/Login"
import User from "./components/User"
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="App">
      <AuthContextComponent>
      <CountContextComponent>
        <Navbar />
        <Login />
        <Counter />
        <User />
      </CountContextComponent>
      </AuthContextComponent>
    </div>
  );
}

export default App;
