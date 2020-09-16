import React, { Component } from 'react'
//import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { gameIndex } from '../../api/game'
import messages from '../AutoDismissAlert/messages'

class GameIndex extends Component {
  constructor (props) {
    super(props)

    this.state = {
      games: []
    }
  }

  componentDidMount () {
    console.log("gameIndex componentDidMount")
    const { msgAlert, user } = this.props
    gameIndex(user)
      .then(res => {
        this.setState({ games: res.data })
      })
      .then(() => {
        msgAlert({
          heading: 'Index All Games Success',
          variant: 'success',
          message: messages.gameIndexSuccess
        })
      })
      .catch(() => {
        msgAlert({
          heading: 'Index All Games Failed',
          variant: 'danger',
          message: messages.gamesIndexFailure
        })
      })
  }

  render () {
    const { games } = this.state

    if (this.length < 1) {
      return (<h3>Nothing to view - Click "Start a New Game".</h3>)
    }

    const gamesJsx = games.map(game => <li><Button>Game {game.id}</Button></li>)

    return (
      <div>
        <ul>
          {gamesJsx}
        </ul>
      </div>
    )
  }
}

export default GameIndex
