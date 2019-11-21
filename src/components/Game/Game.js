import React, {Component} from 'react'
import Board from '../Board';
import Settings from '../Settings/Settings'
import './Game.css';


const INITIALSTATE = {
  isXNext: true,
  stepNumber: 0,
  squares: Array(9).fill(null),
  width: 80,
  height: 80,
  winner: null,
  winnerLine: []
};

export default class Game extends Component {

  constructor(props) {
    super(props);
    this.state = INITIALSTATE;

    this.handleWidthChange = this.handleWidthChange.bind(this);
    this.handleHeightChange = this.handleHeightChange.bind(this);
  }

  handleClick(i) {
    const currentSquares = this.state.squares;
    if (this.state.winner || currentSquares[i]) {
      // მეორედ რო აღარ დააკლიკოს იგივეს
      return;
    }

    currentSquares[i] = this.state.isXNext ? 'X' : 'O';

    this.setState({
      ...this.state,
      squares: currentSquares,
      isXNext: !this.state.isXNext,
      stepNumber: currentSquares.length
    });


    let winner, winnerLine = null;
    ({winner, winnerLine} = this.calculateWinner(currentSquares));

    if (winner) {
      this.setState({
        ...this.state,
        winner: winner,
        winnerLine: winnerLine
      });
    }
  }

  resetGame() {
    // this.setState(INITIALSTATE);
    this.setState({
      isXNext: true,
      stepNumber: 0,
      squares: Array(9).fill(null),
      width: 80,
      height: 80,
      winner: null,
      winnerLine: []
    });
  }


  calculateWinner(squares) {
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
      if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
        return {
          winner: squares[a],
          winnerLine: lines[i]
        };
      }
    }

    return {
      winner: null,
      winnerLine: null
    };
  }


  handleWidthChange(e) {
    this.setState({
      ...this.state,
      width: e.target.value
    });
  }

  handleHeightChange(e) {
    this.setState({
      ...this.state,
      height: e.target.value
    });
  }

  render() {
    let settings;
    if (this.state.stepNumber === 0) {
      settings = <Settings
        width={this.state.width}
        height={this.state.height}
        widthChanged={event => this.handleWidthChange(event)}
        heightChanged={event => this.handleHeightChange(event)}
      />;
    }

    let winStatus;
    if (this.state.winner) {
      winStatus = 'Winner is: ' + this.state.winner;
    } else if (!this.state.squares.includes(null) && !this.state.winner) {
      winStatus = 'Draw';
    } else {
      winStatus = 'Next player is ' + (this.state.isXNext ? 'X' : 'O');
    }


    return (
      <div className="game">

        <div className="board">
          <h1>{winStatus}</h1>

          <Board onClick={(i) => this.handleClick(i)}
                 squares={this.state.squares}
                 squareWidth={this.state.width}
                 squareHeight={this.state.height}
                 winnerSquars={this.state.winnerLine}/>

          <button className="reset-btn" onClick={() => this.resetGame()}>reset game</button>
        </div>

        <div>{settings}</div>
        
      </div>
    )
  }
}
