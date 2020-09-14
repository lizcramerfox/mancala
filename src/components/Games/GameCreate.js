import React, { Component } from 'react'
//import { Redirect } from 'react-router-dom'

import { gameCreate } from '../../api/game'
import messages from '../AutoDismissAlert/messages'
import GameWindow from './GameWindow'

class GameCreate extends Component {
  constructor () {
    super()
    this.state = {
      game: {
        over: false
      },
      createdId: null
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { msgAlert } = this.props
    gameCreate(this.props.user, this.state.game)
      .then(res => {
        // take the ID that was created and set it to the game
        this.setState({ createdId: res.data.game.id })
      })
      .then(() => {
        msgAlert({
          heading: 'New Game Success',
          variant: 'success',
          message: messages.gameCreateSuccess
        })
      })
      .catch(() => {
        msgAlert({
          heading: 'New Game Failure',
          variant: 'danger',
          message: messages.gameCreateFailure
        })
      })
  }

  render () {
    // const { game } = this.state

    let gameJsx = (
      <GameWindow />
    )

    return (
      <div>
        { gameJsx }
      </div>
    )
  }
}

export default GameCreate
