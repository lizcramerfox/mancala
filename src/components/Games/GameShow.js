import React, { Component, Fragment } from 'react'
// import { Button } from 'react-bootstrap'
import { gameShow, gameDestroy, gameUpdate } from '../../api/game'
import messages from '../AutoDismissAlert/messages'
import { Redirect } from 'react-router-dom'

class GameShow extends Component {
  constructor () {
    super()
    this.state = {
      game: {
        id: null,
      }
    }
  }

  componentDidMount () {
    const { msgAlert, user, game, id } = this.props

    gameShow(user, game, id)
      .then(res => {
        this.setState({ game: res.data.game })
        console.log(this.state)
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

  // deleteGame = () => {
  //   const { msgAlert, user, id } = this.props
  //
  //   gameDestroy(user, id, this.state.game)
  //     .then(() => {
  //       msgAlert({
  //         heading: 'Delete Game Success',
  //         variant: 'success',
  //         message: messages.gameDeleteSuccess
  //       })
  //     })
  //     .catch(() => {
  //       msgAlert({
  //         heading: 'Delete Game Failed',
  //         variant: 'danger',
  //         message: messages.gameDeleteFailure
  //       })
  //     })
  //   console.log(this.state.game)
  // }
  //
  // continueGame = () => {
  //   const { msgAlert, user, id } = this.props
  //
  //   gameUpdate(user, id)
  //     .then((res) => {
  //       this.setState({ game: res.data.game })
  //     })
  //     .then(() => {
  //       msgAlert({
  //         heading: 'Continue Game Success',
  //         variant: 'success',
  //         message: messages.gameUpdateSuccess
  //       })
  //     })
  //     .catch(() => {
  //       msgAlert({
  //         heading: 'Continue Game Failed',
  //         variant: 'danger',
  //         message: messages.gameUpdateFailure
  //       })
  //     })
  // }

  render () {
    let gameJsx

    if (!this.state.game) {
      gameJsx = <Redirect to={`/games`} />
    }

    gameJsx = (
      <Fragment>
        <div>
          <h5>Game ID: {this.state.game.id}</h5>
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
