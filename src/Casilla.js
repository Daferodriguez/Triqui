import React, { Component } from 'react';
import './App.css';

const cuadros = [];

function ganar(cuadros){
  const ganadores = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
  ];

  const posicionesX = [];
  const posicionesO = [];

  // buscando los cuadros
  for(let i = 0; i < cuadros.length; i++){
    if(cuadros[i][1] === "X"){
      posicionesX.push(cuadros[i][0]);
    }else{
      posicionesO.push(cuadros[i][0]);
    }
  }
  // console.log(posicionesX)
  // console.log(posicionesO)

  for(let i = 0; i < ganadores.length; i++){
    for(let k = 0; k < posicionesX.length; k++){

    }
  }

  return null;
}

export default class Casilla extends Component{

  constructor(props){
    super(props);
    this.state = {
      valor: " ",
      jugador: this.props.jugActual,
    };
    /*if(this.props.jugActual === "X"){
      console.log("jug X")
    }else if(this.props.jugActual === "O"){
      console.log("jug O")
    }*/
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){

    if(this.state.valor === " " && this.props.jugActual === "X"){
      this.setState((state) => ({valor: "X", jugador: "O"}));
      cuadros.push([this.props.indice, this.state.jugador]);
    }else if(this.state.valor === " " && this.props.jugActual === "O"){
      this.setState((state) => ({valor: "O", jugador: "X"}));
      cuadros.push([this.props.indice, this.state.jugador]);
    }
    console.log("Jugador actual: ", this.state.jugador);
    console.log("Colocado en la celda: ", this.props.indice)
    console.log(cuadros)
    this.props.callBackFromTablero(this.state.jugador);
    ganar(cuadros);
  }

  render(){
    return(
      <button className="casilla" onClick={this.handleClick}>
        {this.state.valor}
      </button>
    )
  }
}
