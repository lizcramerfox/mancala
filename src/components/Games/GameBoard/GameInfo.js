import React, { Component, Fragment } from 'react'
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
    const classNames =[this.props.game.currentPlayer.toLowerCase()]

    let infoJsx

    if (this.props.game.isOver) {
      infoJsx = <Fragment>{this.winnerString()}</Fragment>
    }

    infoJsx = <Fragment>Player <span className={classNames}>{this.props.game.currentPlayer}</span>'s Turn</Fragment>

    return (
      <div className="game-info">
        {infoJsx}
      </div>
    )
  }
}

export default GameInfo
