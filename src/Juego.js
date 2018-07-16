import React, { Component } from 'react';
import Tablero from './Tablero';
import logo from './logo.svg';
import './App.css';


export default class Juego extends Component{

  constructor(){
    super();
    this.state = {
      jugador: ""
    }
    this.handleClickX = this.handleClickX.bind(this);
    this.handleClickO = this.handleClickO.bind(this);
  }

  handleClickX(){
    this.setState((state) => ({jugador: "X"}));
    console.log(this.state.jugador)
  }

  handleClickO(){
    this.setState((state) => ({jugador: "O"}));
    console.log(this.state.jugador)
  }

  render(){

    if(this.state.jugador === ""){
      return(
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <div className="text">Elije el jugador que va a comenzar! </div>
          <div>
            <button className="jugadorX" onClick={this.handleClickX}>Jugador X</button>
            <button className="jugadorO" onClick={this.handleClickO}>Jugador O</button>
          </div>
        </div>
      )
    }

    return(
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="juego">
          <Tablero jugador={this.state.jugador}/>
        </div>
      </div>
    )
  }
}
