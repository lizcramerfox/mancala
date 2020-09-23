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

    const playerClass = `player-${player.toLowerCase()}`
    const type = isMancala ? `mancala` : `non-mancala`
    const pocketID = `pocket-${pocket.toString()}`

    const classes = [playerClass, type].join(' ')


    return (
      <Fragment>
        <div className={classes} id={pocketID} player={player} type={type}>{pocket.toString()} : {stones}</div>
      </Fragment>
    )
  }
}

class Board extends Component {

  render () {
    const entriesArray = Array.from(this.props.board.pockets.entries())

    const pocketsA = entriesArray
      .filter(([pocket, stones]) => pocket.player === "A" && pocket.isMancala === false)
      .map(([pocket, stones]) => {
        return <Pocket pocket={pocket} stones={stones} key={pocket.toString()}/>
      })

    const pocketsB = entriesArray
      .filter(([pocket, stones]) => pocket.player === "B" && pocket.isMancala === false)
      .map(([pocket, stones]) => {
        return <Pocket pocket={pocket} stones={stones} key={pocket.toString()}/>
      })

    const mancalaA = entriesArray
      .filter(([pocket, stones]) => pocket.player === "A" && pocket.isMancala === true)
      .map(([pocket, stones]) => {
        return <Pocket pocket={pocket} stones={stones} key={pocket.toString()}/>
      })

    const mancalaB = entriesArray
      .filter(([pocket, stones]) => pocket.player === "B" && pocket.isMancala === true)
      .map(([pocket, stones]) => {
        return <Pocket pocket={pocket} stones={stones} key={pocket.toString()}/>
      })

    return (
      <Fragment>
        <div>Pockets-A: {pocketsA}</div>
        <div>Pockets-B: {pocketsB}</div>
        <div>Mancala-A: {mancalaA}</div>
        <div>Mancala-B: {mancalaB}</div>
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
