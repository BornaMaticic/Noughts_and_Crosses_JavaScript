import React, {Component} from 'react';
import Square from './Square.js';
import './Board.css';
import ResetButton from './ResetButton.js';


class Board extends Component {

constructor(props) {
  super(props);
  this.state = {
    squares: Array(9).fill(null),
    nextTurnPlayerX: true
  };

}

handleClick(i) {
  const squares = Array.from(this.state.squares);
  if (forTheWin(squares) || squares[i]) {
    return;
  }
  squares[i] = this.state.nextTurnPlayerX ? 'X' : 'O';
  this.setState({squares: squares, nextTurnPlayerX: !this.state.nextTurnPlayerX});
}

renderSquare(i){
  return (
    <Square value={this.state.squares[i]}
    onClick={() => this.handleClick(i)}
      />
  );
}

resetForm = () => {
    this.setState({
      squares: Array(9).fill(null),
      nextTurnPlayerX: true
    })
  }

render() {
  const winner = forTheWin(this.state.squares);
  let status;
  if (winner){
    status = 'And the winner is: Player ' + winner;
  } else {
    status = 'Next move: ' + (this.state.nextTurnPlayerX ? 'Player X' : 'Player O')
  }

    return (
      <>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </>
    );
  }
}

function forTheWin(squares){
  const winCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];

  for (let i = 0; i < winCombinations.length; i++) {
    const [a,b,c] = winCombinations[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
      return squares[a];
    }
  }
  return null;
}


export default Board;
