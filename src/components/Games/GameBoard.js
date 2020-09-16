import React, { Component } from 'react'

class Square extends Component {
  render() {
    return (
      <button className="square">
        {/* TODO */}
      </button>
    );
  }
}

class Base extends Component {
  render() {
    return (
      <button className="base">
        {this.props.value}
      </button>
    );
  }
}

class Board extends Component {
  renderSquare(i) {
    return <Square value={i}/>;
  }

  renderBase(i) {
    return <Base value={i} />;
  }

  render() {
    const status = 'Next player: X'

    return (
      <div>
        <div className="status">{status}</div>
        <div className="base">
          {this.renderBase("L")}
        </div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
          {this.renderSquare(9)}
          {this.renderSquare(10)}
          {this.renderSquare(11)}
        </div>
        <div className="base">
          {this.renderBase("R")}
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
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

export default Game
