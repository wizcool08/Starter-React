import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Square extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null
    };
  }

  handleClick = () => {
    this.setState({
      value: "X"
    });
  };

  render() {
    return (
      <button className="square" onClick={this.handleClick}>
        {this.state.value}
      </button>
    );
  }
}

class Board extends Component {
  renderSquare(i) {
    return <Square value={i} />;
  }

  render() {
    const status = "Next player: X";
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
        </div>
        <div className="board-row">
          {this.renderSquare(4)}
          {this.renderSquare(5)}
          {this.renderSquare(6)}
        </div>
        <div className="board-row">
          {this.renderSquare(7)}
          {this.renderSquare(8)}
          {this.renderSquare(9)}
        </div>
      </div>
    );
  }
}

class Game extends Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
      </div>
    );
  }
}

//====================================
ReactDOM.render(<Game />, document.getElementById("root"));
