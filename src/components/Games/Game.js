import React, { Component, Fragment } from 'react'

class GameInfo extends Component {
  render () {
    return (
      <Fragment>
        <h4>Game ID: {this.props.id}</h4>
      </Fragment>
    )
  }
}

class Pocket extends Component {
  render () {
    const { pocket, stones } = this.props
    const { player, isMancala } = pocket

    const playerClass = `player-${player}`
    const typeClass = isMancala ? `mancala` : `non-mancala`
    const pocketID = `pocket-${pocket.toString()}`

    const classes = [playerClass, typeClass].join(' ')

    return (
      <Fragment>
        <div className={classes} id={pocketID}>{pocket.toString()} : {stones}</div>
      </Fragment>
    )
  }
}

class Board extends Component {

  render () {
    const boardJsx = Array.from(this.props.board.pockets.entries()).map(([pocket, stones]) => {
      return <Pocket pocket={pocket} stones={stones} key={pocket.toString()}/>
    })

    return (
      <Fragment>
        {boardJsx}
      </Fragment>
    )
  }
}

class Game extends Component {
  render () {
    return (
      <div>
        <GameInfo id={this.props.id} />
        <Board board={this.props.game.board} />
      </div>
    )
  }
}

export default Game
