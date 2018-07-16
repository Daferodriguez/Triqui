import React, { Component } from 'react';
import Tablero from './Tablero';
import logo from './logo.svg';
import './App.css';


export default class Juego extends Component{
  render(){
    return(
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="juego">
          <Tablero/>
        </div>
      </div>
    )
  }
}
