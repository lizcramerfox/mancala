import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { gameShow } from '../../api/game'
import messages from '../AutoDismissAlert/messages'
import Game from './GameBoard/Game'
import Mancala from 'mancala'

class GameShow extends Component {
  constructor (props) {
    super(props)

    this.state = {
      game: null,
      id: null,
      user: null
    }
  }

  componentDidMount () {
    const { msgAlert, user, id } = this.props

    gameShow(user, id)
      .then(res => {
        this.setState({
          game: Mancala.Game.fromJSON(res.data.game),
          id: res.data.game.id,
          user: user
        })
      })
      .catch(() => {
        msgAlert({
          heading: 'Failure',
          variant: 'danger',
          message: messages.gameShowFailure
        })
      })
  }

  render () {
    if (!this.state.game) {
      return <p>"Loading..."</p>
    }

    const gameJsx = (
      <Game
        game={this.state.game}
        id={this.state.id}
        user={this.state.user}
        msgAlert={this.props.msgAlert}
        currentPlayer={this.state.currentPlayer}
      />
    )

    return (
      <div>
        {gameJsx}
      </div>
    )
  }
}

export default withRouter(GameShow)
