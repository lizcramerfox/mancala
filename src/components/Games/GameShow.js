import React, { Component, Fragment } from 'react'
import { Button } from 'react-bootstrap'
import { gameShow, gameDestroy } from '../../api/game'
import messages from '../AutoDismissAlert/messages'
import { Redirect } from 'react-router-dom'
// import GameBoard from './GameBoard'

class GameShow extends Component {
  constructor (props) {
    super(props)
    this.state = {
      game: {
        deleted: false
      }
    }
  }

  componentDidMount () {
    const { msgAlert, user, id } = this.props
    console.log(`in componentDidMount, user= ${user}`)
    gameShow(user, id)
      .then(res => {
        this.setState({ game: res.data.game })
        console.log(`in componentDidMount, res.data.game = ${res.data.game}`)
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
    console.log(`this.props.id: ${this.props.id}`)
    console.log(`this.user= ${this.user}`)

    gameDestroy(user, id)
      .then(() => this.setState({ deleted: true }))
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
  }

  render () {
    const { game } = this.state

    if (!game) {
      return (<p>Loading...</p>)
    }

    if (this.state.deleted) {
      return (<Redirect to='/memories' />)
    }

    const gameJsx = (
      <Fragment>
        <Button>Game ID: {this.props.id}</Button>
        <Button onClick={this.deleteGame}>Delete Game?</Button>
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
