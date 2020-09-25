import React, { Component } from 'react'
import { gameUpdate } from '../../../api/game'
import messages from '../../AutoDismissAlert/messages'

import '../../../CSS/gameboard.module.scss'
import Board from './Board'
import GameInfo from './GameInfo'
import GameDelete from '../GameDelete'


class Game extends Component {
  constructor(props) {
    super(props)

    this.state = {
      game: props.game,
    }
  }

  playTurn = (index, player) => {
    if (player !== this.state.game.currentPlayer) {
      return
    }

    this.setState((state) => {
      const updatedGame = state.game.playTurn(index)

      const { msgAlert, user, id} = this.props

      gameUpdate(user, updatedGame.toJSON(), id)
        .catch(() => {
          msgAlert({
            heading: 'Game Failed to Update',
            variant: 'danger',
            message: messages.gameUpdateFailure
          })
        })

      return { game: updatedGame }
    })
  }



  render () {
    return (
      <div>
        <GameInfo id={this.props.id} />
        <Board playTurn={this.playTurn} board={this.state.game.board} />
        <GameDelete id={this.props.id} user={this.props.user} msgAlert={this.props.msgAlert}/>
      </div>
    )
  }
}

export default Game
