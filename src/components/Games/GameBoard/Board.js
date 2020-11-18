import React, { Component } from 'react'
import './gameboard.module.scss'
import Pocket from './Pocket'
import { isWinner } from '../GameHelpers'

class Board extends Component {
  render() {
    const entriesArray = Array.from(this.props.game.board.pockets.entries())

    const pocketsA = entriesArray
      .filter(([pocket, stones]) => pocket.player === "A" && pocket.isMancala === false)
      .map(([pocket, stones]) => {
        return <Pocket game={this.props.game} playTurn={this.props.playTurn} pocket={pocket} stones={stones} key={pocket.toString()} />
      })

    const pocketsB = entriesArray
      .filter(([pocket, stones]) => pocket.player === "B" && pocket.isMancala === false)
      .map(([pocket, stones]) => {
        return <Pocket game={this.props.game} playTurn={this.props.playTurn} pocket={pocket} stones={stones} key={pocket.toString()} />
      })
      .reverse()

    const mancalaA = entriesArray
      .filter(([pocket, stones]) => pocket.player === "A" && pocket.isMancala === true)
      .map(([pocket, stones]) => {
        return <Pocket isWinner={isWinner(this.props.game, 'A')} game={this.props.game} pocket={pocket} stones={stones} key={pocket.toString()} />
      })

    const mancalaB = entriesArray
      .filter(([pocket, stones]) => pocket.player === "B" && pocket.isMancala === true)
      .map(([pocket, stones]) => {
        return <Pocket isWinner={isWinner(this.props.game, 'B')} game={this.props.game} pocket={pocket} stones={stones} key={pocket.toString()} />
      })
   
    return (
      <div className="gameboard">
        <span className="mancalaB">{mancalaB}</span>
        <span className="pocketsB">{pocketsB}</span>
        <span className="pocketsA">{pocketsA}</span>
        <span className="mancalaA">{mancalaA}</span>
      </div>
    )
  }
}

export default Board
