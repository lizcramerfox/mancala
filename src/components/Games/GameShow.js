import React, { Component, Fragment } from 'react'
import { Button } from 'react-bootstrap'
import { gameShow, gameDestroy, gameUpdate } from '../../api/game'
import messages from '../AutoDismissAlert/messages'
import { Link, Redirect } from 'react-router-dom'

class GameShow extends Component {
  constructor () {
    super()
    this.state = {
      game: {
        board: ''
      }
    }
  }

  componentDidMount () {
    const { msgAlert, user, id } = this.props

    gameShow(user, id)
      .then(res => {
        this.setState({ game: res.data.game })
      })
      .then(() => {
        msgAlert({
          heading: 'Show Game Sucess',
          variant: 'success',
          message: messages.gameShowSuccess
        })
      })
      .catch(() => {
        msgAlert({
          heading: 'Show Game Failed',
          variant: 'danger',
          message: messages.gameShowFailure
        })
      })
  }

  deleteGame = () => {
    const { msgAlert, user, id } = this.props

    gameDestroy(user, id, this.state.game)
      .then(() => {
        msgAlert({
          heading: 'Delete Game Success',
          variant: 'success',
          message: messages.gameDeleteSuccess
        })
      })
      .catch(() => {
        msgAlert({
          heading: 'Delete Game Failed',
          variant: 'danger',
          message: messages.gameDeleteFailure
        })
      })
    console.log(this.state.game)
  }

  continueGame = () => {
    const { msgAlert, user, id } = this.props

    gameUpdate(user, id)
      .then((res) => {
        this.setState({ game: res.data.game })
      })
      .then(() => {
        msgAlert({
          heading: 'Continue Game Success',
          variant: 'success',
          message: messages.gameUpdateSuccess
        })
      })
      .catch(() => {
        msgAlert({
          heading: 'Continue Game Failed',
          variant: 'danger',
          message: messages.gameUpdateFailure
        })
      })
  }

  render () {
    const { game } = this.state
    let gameJsx

    if (!game) {
      gameJsx = <Redirect to={`/games`} />
    }

    gameJsx = (
      <Fragment>
        <div>
          <h5>Game ID: {this.props.id}</h5>
        </div>
        <div>
          <Link to={`/games/${this.state.game.id}/edit`}>
            <Button onClick={this.continueGame}>Continue Playing Game?</Button>
          </Link>
          <Button onClick={this.deleteGame}>Delete Game?</Button>
        </div>
      </Fragment>
    )

    return (
      <div>
        {gameJsx}
      </div>
    )
  }
}

export default GameShow
