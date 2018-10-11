import React, { Component } from "react";
import Square from "../Square/Square";
import "./style.css";

class Board extends Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    // 3. Rewrite Board to use two loops to make the squares
    let squareBoardSet = [];
    for (let row = 0; row < 3; row++) {
      let noOfSquaresPerRow = [];
      for (let col = 0; col < 3; col++) {
        noOfSquaresPerRow.push(
          <span key={row * 3 + col}>{this.renderSquare(row * 3 + col)}</span>
        );
      }
      squareBoardSet.push(
        <div className="board-row" key={row}>
          {noOfSquaresPerRow}
        </div>
      );
    }
    return <div>{squareBoardSet}</div>;
  }
}

export default Board;
