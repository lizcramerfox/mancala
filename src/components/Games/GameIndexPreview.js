import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import './games.module.scss'
import { mancalaStones, oppositePlayer } from './GameHelpers'

class GameIndexPreview extends Component {
  // REFACTOR:
  // mancalaStones(player) {
  //   return Array.from(this.props.game.board.pockets.entries())
  //     .find(([pocket, stones]) => pocket.player === player && pocket.isMancala === true)[1]
  // }

  // REFACTOR:
  // oppositePlayer(player) {
  //   return player === 'A' ? 'B' : 'A'
  // }

  // REFACTOR:
  isWinner(player) {
    if (!this.props.game.isOver) {
      return false
    }
    return mancalaStones(this.props.game, player) >= mancalaStones(this.props.game, oppositePlayer(player))
  }

  
  render() {
    let gameStatusLabel, playerStatusLabel, gameStatusClass

    if (!this.props.game.isOver) {
      gameStatusLabel = 'In Progress'
      playerStatusLabel = `Player ${this.props.game.currentPlayer}'s Turn`
      gameStatusClass = 'in-progress'
    }

    if (this.isWinner('A') && this.isWinner('B')) {
      gameStatusLabel = 'GAME OVER'
      playerStatusLabel = 'Tie Game'
      gameStatusClass = 'game-over'
    }

    if (this.isWinner('A') && !this.isWinner('B')) {
      gameStatusLabel = 'GAME OVER'
      playerStatusLabel = 'Player A Wins'
      gameStatusClass = 'game-over'
    }

    if (this.isWinner('B') && !this.isWinner('A')) {
      gameStatusLabel = 'GAME OVER'
      playerStatusLabel = 'Player B Wins'
      gameStatusClass = 'game-over'
    }

    const classNames = ["game-preview", gameStatusClass].join(' ')
  
    return (
      <Link to={`/games/${this.props.id}`} className={classNames}>
        <div className="game-status-label">{gameStatusLabel}</div>
        <div className="player-status-label">{playerStatusLabel}</div>
        <div className="mancala-display">
          <div className="player-a-label">Player A</div>
          <div className="stones-a">{mancalaStones(this.props.game, 'A')}</div>
          <div className="player-b-label">Player B</div>
          <div className="stones-b">{mancalaStones(this.props.game, 'B')}</div>
        </div>
      </Link>
    )
  }
}

export default withRouter(GameIndexPreview)