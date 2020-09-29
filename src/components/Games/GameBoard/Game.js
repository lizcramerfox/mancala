import React, { Component } from 'react'
import { gameUpdate } from '../../../api/game'
import messages from '../../AutoDismissAlert/messages'


import './gameboard.module.scss'
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
      const { msgAlert, user, id} = this.props
      const updatedGame = state.game.playTurn(index)

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
    const { id, user, msgAlert } = this.props

    return (
      <div>
        <GameInfo
          id={id}
          game={this.state.game}
        />
        <Board playTurn={this.playTurn} game={this.state.game} />
        <GameDelete id={id} user={user} msgAlert={msgAlert} />
      </div>
    )
  }
}

export default Game
