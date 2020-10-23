import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import './games.module.scss'

class GameIndexPreview extends Component {
  // REFACTOR:
  mancalaStones(player) {
    return Array.from(this.props.game.board.pockets.entries())
      .find(([pocket, stones]) => pocket.player === player && pocket.isMancala === true)[1]
  }

  // REFACTOR:
  oppositePlayer(player) {
    return player === 'A' ? 'B' : 'A'
  }

  // REFACTOR:
  isWinner(player) {
    if (!this.props.game.isOver) {
      return false
    }
    return this.mancalaStones(player) >= this.mancalaStones(this.oppositePlayer(player))
  }

  
  render() {
    let gameStatusLabel, playerStatusLabel, gameStatusClass, winnerClass
    
    if (!this.props.game.isOver) {
      gameStatusLabel = 'In Progress'
      playerStatusLabel = `Player ${this.props.game.currentPlayer}'s Turn`
      gameStatusClass = 'in-progress'
      winnerClass = ''
    }

    if (this.isWinner('A') && this.isWinner('B')) {
      gameStatusLabel = 'GAME OVER'
      playerStatusLabel = 'Tie Game'
      gameStatusClass = 'game-over'
      winnerClass = 'winner-a winner-b'
    }

    if (this.isWinner('A') && !this.isWinner('B')) {
      gameStatusLabel = 'GAME OVER'
      playerStatusLabel = 'Player A Wins'
      gameStatusClass = 'game-over'
      winnerClass = 'winner-a'
    }

    if (this.isWinner('B') && !this.isWinner('A')) {
      gameStatusLabel = 'GAME OVER'
      playerStatusLabel = 'Player B Wins'
      gameStatusClass = 'game-over'
      winnerClass = 'winner-b'
    }

    const classNames = ["game-preview", gameStatusClass, winnerClass].join(' ')
  
    return (
      <Link to={`/games/${this.props.id}`} className={classNames}>
        <div className="game-status-label">{gameStatusLabel}</div>
        <div className="player-status-label">{playerStatusLabel}</div>
        <div className="mancala-display">
          <div className="player-a-label">Player A</div>
          <div className="stones-a">{this.mancalaStones('A')}</div>
          <div className="player-b-label">Player B</div>
          <div className="stones-b">{this.mancalaStones('B')}</div>
        </div>
      </Link>
    )
  }
}

export default withRouter(GameIndexPreview)