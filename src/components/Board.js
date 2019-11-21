import React, {Component} from 'react';
import Square from './Square/Square';


export default class Board extends Component {

  renderSquare(i) {
    return <Square value={this.props.squares[i]}
                   id={i}
                   onClick={() => this.props.onClick(i)}
                   squareWidth={this.props.squareWidth}
                   squareHeight={this.props.squareHeight}
                   winnerSquars={this.props.winnerSquars}
    />
  }

  render() {
    return (
      <div>
        <div>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    )
  }
}
