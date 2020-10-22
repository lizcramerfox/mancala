import React, { Component, Fragment } from 'react'
import './gameboard.module.scss'

class GameInfo extends Component {
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
    let winnerClass

    if (this.isWinner('A') && !this.isWinner('B')) {
      winnerClass = 'a'
    }

    if (this.isWinner('B') && !this.isWinner('A')) {
      winnerClass = 'b'
    }

    if (this.isWinner('A') && this.isWinner('B')) {
      winnerClass = 'tie'
    }

    const classNamesCurrentGame = [this.props.game.currentPlayer.toLowerCase(), 'player-display'].join(' ')
    const classNamesGameOver = [winnerClass, 'player-display'].join(' ')
    
    let infoJsx

    if (!this.props.game.isOver) {
      infoJsx = <Fragment>Player <span className={classNamesCurrentGame}>{this.props.game.currentPlayer}</span>'s Turn</Fragment>
    }
    
    if (this.props.game.isOver && (this.mancalaStones('A') > this.mancalaStones('B'))) {
      infoJsx = <Fragment>Player <span className={classNamesGameOver}>A</span> Wins!</Fragment>
    }
    
    if (this.props.game.isOver && (this.mancalaStones('A') < this.mancalaStones('B'))) {
      infoJsx = <Fragment>Player <span className={classNamesGameOver}>B</span> Wins!</Fragment>
    }

    if (this.props.game.isOver && (this.mancalaStones('A') === this.mancalaStones('B'))) {
      infoJsx = <Fragment><span className={classNamesGameOver}>Tie Game!</span></Fragment>
    }

    return (
      <div className="game-info">
        {infoJsx}
      </div>
    )
  }
}

export default GameInfo
