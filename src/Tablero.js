import React, { Component } from 'react';
import './App.css';
import Casilla from './Casilla';

export default class Tablero extends Component{

  constructor(props){
    super(props);
    this.state = {
      jug: this.props.jugador,
    }
  }

  playerCallback = (jugad) => {
    this.setState((state) => ({jug: jugad}));
  }

  pintarCasilla(i){
    return <Casilla jugActual={this.state.jug} callBackFromTablero={this.playerCallback} indice={i}/>
  }

  render(){
    if(this.state.jug === "X" || this.state.jug === "O"){
      return(
        //El tablero completo compuesto de filas
        <div>
          <div className="text">Turno del jugador {this.state.jug}!</div>
          <div className="juego">
            <div className="fila">
              {this.pintarCasilla(1)}
              {this.pintarCasilla(2)}
              {this.pintarCasilla(3)}
            </div>
            <div className="fila">
              {this.pintarCasilla(4)}
              {this.pintarCasilla(5)}
              {this.pintarCasilla(6)}
            </div>
            <div className="fila">
              {this.pintarCasilla(7)}
              {this.pintarCasilla(8)}
              {this.pintarCasilla(9)}
            </div>
          </div>
        </div>
      )
    }
    return(
      <div>
        <div className="text">No se ha escogido jugador</div>
      </div>
    )
  }
}
