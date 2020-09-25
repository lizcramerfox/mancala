import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { gameDestroy } from '../../api/game'
import messages from '../AutoDismissAlert/messages'


class Delete extends Component {
  constructor() {
    super()

    this.state = {
      deleted: false
    }
  }

  deleteGame = () => {
    const { msgAlert, user, id } = this.props

    return gameDestroy(user, id)
      .then(() => {
        this.setState({
          deleted: true
        })
      })
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
    if (this.state.deleted) {
      return <Redirect to={`/games`} />
    }

    return (
      <div className="button" onClick={this.deleteGame}>
        <p>Delete Game</p>
      </div>
    )
  }
}

export default Delete
