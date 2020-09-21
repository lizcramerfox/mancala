import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import { gameUpdate, gameShow } from '../../api/game'
import messages from '../AutoDismissAlert/messages'

class GameUpdate extends Component {
  constructor () {
    super()

    this.state = {
      game: null,
      updated: false
    }
  }

  componentDidMount () {
    const { msgAlert, user, id } = this.props
    gameShow(user, id)
      .then(res => {
        this.setState({ game: res.data.game })
      })
      .catch(() => {
        msgAlert({
          heading: 'Display Game Failed',
          variant: 'danger',
          message: messages.gameShowFailure
        })
      })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const { msgAlert, user, id} = this.props

    gameUpdate(user, this.state.game, id)
      .then(() => this.setState({ updated: true }))
      .then(() => {
        msgAlert({
          heading: 'Update Game Success',
          variant: 'success',
          message: messages.gameShowSuccess
        })
      })
      .catch(() => {
        msgAlert({
          heading: 'Update Game Failed',
          variant: 'danger',
          message: messages.gameUpdateFailure
        })
      })
  }

  // handleChange = (event) => {
  //   // saves form fields into a key:value pair ("Field Name"=key; "Field Value"=value)
  //   const updatedField = {
  //     [event.target.name]: event.target.value
  //   }
  //   // merge updated fields into an object with the edited data & state
  //   const editedGame = Object.assign(this.state.game, updatedField)
  //
  //   // set the state
  //   this.setState({ game: editedGame })
  // }

  render () {
    const { game, updated } = this.state

    let gameJsx

    if (!game) {
      gameJsx = 'Loading...'
    }

    if (updated) {
      gameJsx = <Redirect to={`/games/${this.props.id}`} />
    }

    gameJsx = (
        <h5>In-progress game will appear here...</h5>
    )

    return (
      <div>
        {gameJsx}
      </div>
    )
  }
}

export default GameUpdate
