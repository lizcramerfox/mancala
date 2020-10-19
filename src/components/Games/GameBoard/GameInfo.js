import React, { Component, Fragment } from 'react'
import './gameboard.module.scss'

class GameInfo extends Component {

  mancalaStones(player) {
    return Array.from(this.props.game.board.pockets.entries())
      .find(([pocket, stones]) => pocket.player === player && pocket.isMancala === true)[1]
  }

  render() {
    const classNames =[this.props.game.currentPlayer.toLowerCase(), 'player-display'].join(' ')

    let infoJsx

    if (!this.props.game.isover) {
      infoJsx = <Fragment>Player <span className={classNames}>{this.props.game.currentPlayer}</span>'s Turn</Fragment>
    }
    
    if (this.props.game.isOver && (this.mancalaStones('A') > this.mancalaStones('B'))) {
      infoJsx = <Fragment>Player <span className={classNames}>A</span> Wins!</Fragment>
    }
    
    if (this.props.game.isOver && (this.mancalaStones('A') < this.mancalaStones('B'))) {
      infoJsx = <Fragment>Player <span className={classNames}>B</span> Wins!</Fragment>
    }

    if (this.props.game.isOver && (this.mancalaStones('A') === this.mancalaStones('B'))) {
      infoJsx = <Fragment><span className={classNames}>Tie Game!</span></Fragment>
    }

    return (
      <div className="game-info">
        {infoJsx}
      </div>
    )
  }
}

export default GameInfo
