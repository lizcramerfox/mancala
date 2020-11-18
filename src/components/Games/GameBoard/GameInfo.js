import React, { Component, Fragment } from 'react'
import './gameboard.module.scss'
import { mancalaStones, isWinner } from '../GameHelpers'

class GameInfo extends Component {
  
  render() {   
    let winnerClass

    if (isWinner(this.props.game, 'A') && !isWinner(this.props.game, 'B')) {
      winnerClass = 'a'
    }

    if (isWinner(this.props.game, 'B') && !isWinner(this.props.game, 'A')) {
      winnerClass = 'b'
    }

    if (isWinner(this.props.game, 'A') && isWinner(this.props.game, 'B')) {
      winnerClass = 'tie'
    }

    const classNamesCurrentGame = [this.props.game.currentPlayer.toLowerCase(), 'player-display'].join(' ')
    const classNamesGameOver = [winnerClass, 'player-display'].join(' ')
    
    let infoJsx

    if (!this.props.game.isOver) {
      infoJsx = <Fragment>Player <span className={classNamesCurrentGame}>{this.props.game.currentPlayer}</span>'s Turn</Fragment>
    }
    
    if (this.props.game.isOver && (mancalaStones(this.props.game, 'A') > mancalaStones(this.props.game, 'B'))) {
      infoJsx = <Fragment>Player <span className={classNamesGameOver}>A</span> Wins!</Fragment>
    }
    
    if (this.props.game.isOver && (mancalaStones(this.props.game, 'A') < mancalaStones(this.props.game, 'B'))) {
      infoJsx = <Fragment>Player <span className={classNamesGameOver}>B</span> Wins!</Fragment>
    }

    if (this.props.game.isOver && (mancalaStones(this.props.game, 'A') === mancalaStones(this.props.game, 'B'))) {
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
