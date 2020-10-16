import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { gameDestroy } from '../../api/game'
import messages from '../AutoDismissAlert/messages'
import '../AutoDismissAlert/autoDismissAlert.module.scss'


class Delete extends Component {
  constructor() {
    super()

    this.state = {
      showModal: false,
      deleted: false
    }
  }

  showModal = () => {
    this.setState({ showModal: true })
  }

  cancelDelete = () => {
    this.setState({ showModal: false})
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
          heading: 'Success',
          variant: 'success',
          message: messages.gameDeleteSuccess
        })
      })
      .catch(() => {
        msgAlert({
          heading: 'Failure',
          variant: 'danger',
          message: messages.gameDeleteFailure
        })
      })
  }


  render () {
    if (this.state.deleted) {
      return <Redirect to={`/games`} />
    }

    if (this.state.showModal) {
      return (
        <div 
          onRequestClose={this.cancelDelete}
          className={"alert modal"}
        >
          <div className="alert-heading failure">
            Confirm Delete
          </div>
          <div className="alert-message">
            Are you sure you want to delete this game?
          </div>
          <div className="button-container">
            <button className="button" onClick={this.cancelDelete}>Cancel</button>
            <button className="button" onClick={this.deleteGame}>Delete</button>
          </div>
        </div>
      )
    }

    return (
      <div className="container delete-button" onClick={this.showModal}>
        Delete Game?
      </div>
    )
  }


}

export default Delete
