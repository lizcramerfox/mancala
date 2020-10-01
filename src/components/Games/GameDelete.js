import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import ReactModal from 'react-modal'
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
        <ReactModal
          ariaHideApp={true}
          isOpen={true}
          shouldCloseOnEsc={true}
          shouldCloseOnOverlayClick={true}
          onRequestClose={this.cancelDelete}
          className={"alert"}
        >
        <div>
          <div className="alert-heading">
            Confirm Delete
          </div>
          <div className="alert-message">
            Are you sure you want to delete this game?
          </div>
          <div>
            <button className="success" onClick={this.cancelDelete}>Cancel</button>
            <button className="failure" onClick={this.deleteGame}>Delete</button>
          </div>
        </div>
        </ReactModal>
      )
    }

    return (
      <div className="delete-button">
        <button onClick={this.showModal}>Delete Game</button>
      </div>
    )
  }


}

export default Delete
