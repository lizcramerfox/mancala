import React, { Component, Fragment } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { gameCreate } from '../../api/game'
import messages from '../AutoDismissAlert/messages'
// import GameBoard from './GameBoard'

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
    const { createdId } = this.state

    let gameJsx = (
      <Fragment>
        <div>
          <h5>Game ID: {createdId}</h5>
        </div>
        <div>
          <Link to={`/games/${createdId}/edit`}>
            <Button onClick={this.continueGame}>Continue Playing Game?</Button>
          </Link>
          <Button onClick={this.deleteGame}>Delete Game?</Button>
        </div>
      </Fragment>
    )


    return (
      { gameJsx }
    )
  }
}

export default GameCreate
