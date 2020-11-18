import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import './games.module.scss'
import { mancalaStones, isWinner } from './GameHelpers'

class GameIndexPreview extends Component {
  
  render() {
    let gameStatusLabel, playerStatusLabel, gameStatusClass

    if (!this.props.game.isOver) {
      gameStatusLabel = 'In Progress'
      playerStatusLabel = `Player ${this.props.game.currentPlayer}'s Turn`
      gameStatusClass = 'in-progress'
    } else if (isWinner(this.props.game, 'A') && isWinner(this.props.game, 'B')) {
      gameStatusLabel = 'GAME OVER'
      playerStatusLabel = 'Tie Game'
      gameStatusClass = 'game-over'
    } else if (isWinner(this.props.game, 'A') && !isWinner(this.props.game, 'B')) {
      gameStatusLabel = 'GAME OVER'
      playerStatusLabel = 'Player A Wins'
      gameStatusClass = 'game-over'
    } else {
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