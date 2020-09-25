import React, { Component } from 'react'
import '../../../CSS/gameboard.module.scss'
import Board from './Board'
import GameInfo from './GameInfo'

class Game extends Component {
  constructor(props) {
    super(props)

    this.state = {
      game: props.game
    }
  }

  playTurn = (index, player) => {
    if (player === this.state.game.currentPlayer) {
      this.setState((state) => {
        return { game: state.game.playTurn(index) }
      })
    }
  }

  render () {
    // console.log(`this.props.pocket = `, this.props.pocket)
    console.log(`this.state.game.currentPlayer  = `, this.state.game.currentPlayer)

    return (
      <div>
        <GameInfo id={this.props.id} />
        <Board playTurn={this.playTurn} board={this.state.game.board} />
      </div>
    )
  }
}

export default Game
