import React, { Component, Fragment } from 'react'
import '../../../CSS/gameboard.module.scss'
import Pocket from './Pocket'

class Board extends Component {
  render () {
    const entriesArray = Array.from(this.props.board.pockets.entries())

    const pocketsA = entriesArray
      .filter(([pocket, stones]) => pocket.player === "A" && pocket.isMancala === false)
      .map(([pocket, stones]) => {
        return <Pocket playTurn={this.props.playTurn} pocket={pocket} stones={stones} key={pocket.toString()} />
      })

    const pocketsB = entriesArray
      .filter(([pocket, stones]) => pocket.player === "B" && pocket.isMancala === false)
      .map(([pocket, stones]) => {
        return <Pocket playTurn={this.props.playTurn} pocket={pocket} stones={stones} key={pocket.toString()} />
      })
      .reverse()

    const mancalaA = entriesArray
      .filter(([pocket, stones]) => pocket.player === "A" && pocket.isMancala === true)
      .map(([pocket, stones]) => {
        return <Pocket pocket={pocket} stones={stones} key={pocket.toString()} />
      })

    const mancalaB = entriesArray
      .filter(([pocket, stones]) => pocket.player === "B" && pocket.isMancala === true)
      .map(([pocket, stones]) => {
        return <Pocket pocket={pocket} stones={stones} key={pocket.toString()} />
      })

    console.log(this.props)

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

export default Board
