import React, { Component, Fragment } from 'react'
import { Button } from 'react-bootstrap'
import { gameShow } from '../../api/game'
import messages from '../AutoDismissAlert/messages'
// import { Link, Redirect } from 'react-router-dom'
// import GameBoard from './GameBoard'

class GameShow extends Component {
  constructor (props) {
    super(props)
    this.state = {
      game: {}
    }
  }

  componentDidMount () {
    console.log(this.props)
    const { msgAlert, user, id } = this.props
    gameShow(user, id)
      .then(res => {
        this.setState({ game: res.data })
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

  // deleteMemory = () => {
  //   const { msgAlert } = this.props
  //   memoryDestroy(this.props.user, this.props.id)
  //     .then(() => this.setState({ deleted: true }))
  //     .then(() => {
  //       msgAlert({
  //         heading: 'Delete Memory Success',
  //         variant: 'success',
  //         message: messages.memoryDeleteSuccess
  //       })
  //     })
  //     .catch(() => {
  //       msgAlert({
  //         heading: 'Delete Memory Failed',
  //         variant: 'danger',
  //         message: messages.memoryDeleteFailure
  //       })
  //     })
  // }

  render () {
    const { game } = this.state

    if (!game) {
      return (<p>Loading...</p>)
    }

    // if (this.state.deleted) {
    //   return (<Redirect to='/memories' />)
    // }

    const gameJsx = (
      <Fragment>
        <Button>Game ID: { this.props.id }</Button>
        <Button>Delete Game?</Button>
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
