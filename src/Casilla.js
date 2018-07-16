import React, { Component } from 'react';
import './App.css';

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
    }else if(this.state.valor === " " && this.props.jugActual === "O"){
      this.setState((state) => ({valor: "O", jugador: "X"}));
    }
    console.log("Jugador actual: ", this.state.jugador);
    console.log("Colocado en la celda: ", this.props.indice)
    this.props.callBackFromTablero(this.state.jugador);
  }

  render(){
    return(
      <button className="casilla" onClick={this.handleClick}>
        {this.state.valor}
      </button>
    )
  }
}
