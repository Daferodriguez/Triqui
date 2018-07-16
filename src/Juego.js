import React, { Component } from 'react';
import Tablero from './Tablero'
import './App.css';

function ganador(casillas) {
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
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const casillas = current.casillas.slice();
    if (ganador(casillas) || casillas[i]) {
      return;
    }
    casillas[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat([
        {
          casillas: casillas
        }
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = ganador(current.casillas);

    let status;
    if (winner) {
      status = "Winner: " + winner;
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
