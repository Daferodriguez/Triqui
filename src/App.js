import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Casilla from './Casilla';

class App extends Component {
  render(i) {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Casilla tam={i}/>
      </div>
    );
  }
}

export default App;
