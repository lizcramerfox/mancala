import React, { Component, Fragment } from 'react'
// import { Button } from 'react-bootstrap'
// import { Redirect } from 'react-router-dom'

import { gameCreate } from '../../api/game'
import messages from '../AutoDismissAlert/messages'
import { Game } from 'mancala'
// import GameBoard from './GameBoard'

class GameCreate extends Component {
  constructor () {
    super()
    this.state = {
      game: new Game({}),
      id: null
    }
  }

  componentDidMount() {
    const { msgAlert, user } = this.props
    gameCreate(user, this.state.game.toJSON())
      .then(res => {
        // take the ID that was created and set it to the game
        console.log(res)
        console.log(Game.fromJSON(res.data.game))
        this.setState({
          game: Game.fromJSON(res.data.game),
          id: res.data.game.id
        })
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
    return (
      <Fragment>
        <div>
          <h5>Game ID: {this.state.id}</h5>
        </div>
      </Fragment>
    )
  }
}

export default GameCreate
