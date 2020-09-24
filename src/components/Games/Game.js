import React, { Component, Fragment } from 'react'
// import '../../index.scss'
import '../../CSS/gameboard.module.scss'

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
  onClick = () => {
    if (!this.props.pocket.isMancala) {
      return this.props.playTurn(this.props.pocket.index)
    }
  }

  render () {
    const { pocket, stones } = this.props
    const { player, isMancala } = pocket

    const playerClass = `player-${player.toLowerCase()}`
    const type = isMancala ? `mancala` : `non-mancala`
    const pocketID = `pocket-${pocket.toString()}`

    const classes = [playerClass, type, 'pocket'].join(' ')


    return (
      <Fragment>
        <div onClick={this.onClick} className={classes} id={pocketID} player={player} type={type}>
          {pocket.toString()} : {stones}
        </div>
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
        return <Pocket playTurn={this.props.playTurn} pocket={pocket} stones={stones} key={pocket.toString()}/>
      })

    const pocketsB = entriesArray
      .filter(([pocket, stones]) => pocket.player === "B" && pocket.isMancala === false)
      .map(([pocket, stones]) => {
        return <Pocket playTurn={this.props.playTurn} pocket={pocket} stones={stones} key={pocket.toString()}/>
      })
      .reverse()

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
      <div className="gameboard">
        <Fragment>{mancalaB}</Fragment>
        <Fragment>{pocketsB}</Fragment>
        <Fragment>{pocketsA}</Fragment>
        <Fragment>{mancalaA}</Fragment>
      </div>
    )
  }
}

class Game extends Component {
  constructor(props) {
    super(props)

    this.state = {
      game: props.game
    }
  }

  playTurn = (index) => {
    this.setState((state) => {
      return { game: state.game.playTurn(index) }
    })
  }

  render () {
    return (
      <div>
        <GameInfo id={this.props.id} />
        <Board playTurn={this.playTurn} board={this.state.game.board} />
      </div>
    )
  }
}

export default Game
