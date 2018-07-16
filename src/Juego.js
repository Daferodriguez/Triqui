import React, { Component } from 'react';
import Tablero from './Tablero'
import './App.css';

function calcGanador(casillas) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (casillas[a] && casillas[a] === casillas[b] && casillas[a] === casillas[c]) {
      return casillas[a];
    }
  }
  return null;
}

export default class Juego extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          casillas: Array(9).fill(null)
        }
      ],
      stepNumber: 0,
      xIsNext: true
    };
  }

  handleClick(i) {
    const history = this.state.history;
    const current = history[history.length - 1];
    const casillas = current.casillas;
    // No se puede cambiar una vez se haya puesto un signo
    if (calcGanador(casillas) || casillas[i]) {
      return;
    }
    casillas[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat([
        {
          casillas: casillas
        }
      ]),
      xIsNext: !this.state.xIsNext
    });
  }


  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const ganador = calcGanador(current.casillas);

    let status;
    if (ganador) {
      status = "Ganador: " + ganador;
    } else {
      status = "Turno del jugador: " + (this.state.xIsNext ? "X" : "O");
    }

    return (
      <div className="App">
        <div className="App">
          <Tablero
            casillas={current.casillas}
            onClick={i => this.handleClick(i)}
          />
        </div>
        <div className="text">
          <div>{status}</div>
        </div>
      </div>
    );
  }
}
