import React, { Component } from 'react'
// import { Button } from 'react-bootstrap'
import { gameShow /* gameUpdate */} from '../../api/game'
import messages from '../AutoDismissAlert/messages'
// import { Redirect } from 'react-router-dom'
import Game from './GameBoard/Game'
import Mancala from 'mancala'

class GameShow extends Component {
  constructor (props) {
    super(props)

    this.state = {
      game: null,
      id: null
    }
    console.log(`in GameShow, this.props.user = `, this.props.user)
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
        console.log(user)
      })
      .then(() => {
        msgAlert({
          heading: 'Show Game Success',
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

  render () {
    if (!this.state.game) {
      return <p>"GameShow loading..."</p>
    }

    const gameJsx = (
      <Game game={this.state.game} id={this.state.id} user={this.state.user} msgAlert={this.props.msgAlert}/>
    )

    return (
      <div>
        {gameJsx}
      </div>
    )
  }
}

export default GameShow
