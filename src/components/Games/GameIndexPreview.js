import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
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
      winnerClass = 'winner-tie'
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

    const gameStatusClassNames = [gameStatusClass, winnerClass].join(' ')
    const mancalaDisplayClassNames = [gameStatusClass, winnerClass].join(' ')
    
    const gameStatusJsx = (
      <div>
        <div className={gameStatusClassNames}>{gameStatusLabel}</div>
        <div className={gameStatusClassNames}>{playerStatusLabel}</div>
      </div>
    )

    const mancalaDisplayJsx = (
      <div>
        <div className={mancalaDisplayClassNames}>
          <div>Player A</div>
          <div>{this.mancalaStones('A')}</div>
        </div>
        <div className={mancalaDisplayClassNames}>  
          <div>Player B</div>
          <div>{this.mancalaStones('B')}</div>
        </div>
      </div>
    )

    return (
      <div className="game-preview">
        <div className="game-status-info">{gameStatusJsx}</div>
        <div className="mancala-status-info">{mancalaDisplayJsx}</div>
      </div>
    )
  }
}

export default withRouter(GameIndexPreview)