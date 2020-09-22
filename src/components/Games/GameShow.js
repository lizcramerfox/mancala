import React, { Component } from 'react'
// import { Button } from 'react-bootstrap'
import { gameShow /*, gameDestroy, gameUpdate */} from '../../api/game'
import messages from '../AutoDismissAlert/messages'
// import { Redirect } from 'react-router-dom'
import Game from './Game'
import Mancala from 'mancala'

class GameShow extends Component {

  constructor (props) {
    super(props)

    this.state = {
      game: null,
      id: null
    }
  }

  componentDidMount () {
    const { msgAlert, user, id } = this.props

    gameShow(user, id)
      .then(res => {
        console.log(`RES DATA: `, res.data)
        this.setState({
          game: Mancala.Game.fromJSON(res.data.game),
          id: res.data.game.id
        })
      })
      .then(() => {
        msgAlert({
          heading: 'Show Game Success',
          variant: 'success',
          message: messages.gameShowSuccess
        })
      })
      .catch(() => {
        console.log('catch in GameShow')
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
    console.log(this.props.game)
    let gameJsx

    if (!this.props.game) {
      gameJsx = "GameShow loading..."
    }

    gameJsx = (
      <Game game={this.props.game} id={this.state.id} />
    )

    return (
      <div>
        {gameJsx}
      </div>
    )
  }
}

export default GameShow
