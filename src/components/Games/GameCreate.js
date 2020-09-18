import React, { Component } from 'react'
//import { Button } from 'react-bootstrap'
//import { Redirect } from 'react-router-dom'

import { gameCreate } from '../../api/game'
import messages from '../AutoDismissAlert/messages'
import GameBoard from './GameBoard'

class GameCreate extends Component {
  constructor () {
    super()
    this.state = {
      game: {
        isOver: false
      },
      createdId: null
    }
  }

  componentDidMount() {
    const { msgAlert, user } = this.props
    gameCreate(user)
      .then(res => {
        // take the ID that was created and set it to the game
        this.setState({ game: res.data })
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
    const { game } = this.state

    let gameJsx = (
      <GameBoard />
    )


    return (
      <div>
        <span>Game ID: { game.id }</span>
        { gameJsx }
      </div>
    )
  }
}

export default GameCreate
