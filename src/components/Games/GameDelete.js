import React, { Component } from 'react'
import { gameDestroy } from '../../api/game'
import messages from '../AutoDismissAlert/messages'

class Delete extends Component {

  deleteGame = () => {
    const { msgAlert, user, id } = this.props

    return gameDestroy(user, id)
      .then(res => {
        this.setState({
          game: null,
          id: null
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
    return (
      <div className="button" onClick={this.deleteGame}>
        <p>Delete Game</p>
      </div>
    )
  }


}

export default Delete
