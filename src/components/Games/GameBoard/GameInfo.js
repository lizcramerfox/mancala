import React, { Component } from 'react'
import './gameboard.module.scss'

class GameInfo extends Component {

  mancalaStones(player) {
    return Array.from(this.props.game.board.pockets.entries())
      .find(([pocket, stones]) => pocket.player === player && pocket.isMancala === true)[1]
  }

  winnerString() {
    if (this.mancalaStones('A') > this.mancalaStones('B')) {
      return 'Player A Wins'
    } if (this.mancalaStones('B') > this.mancalaStones('A')) {
      return 'Player B Wins'
    } else {
      return 'Tie Game'
    }
  }

  render() {
    if (this.props.game.isOver) {
      return <h4>{this.winnerString()}</h4>
    }

    return (
      <div className="game-info">
        <h4>Player {this.props.game.currentPlayer}'s Turn</h4>
      </div>
    )
  }
}

export default GameInfo
