import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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
    const { msgAlert } = this.props
    gameIndex(this.props.user)
      .then(res => {
        this.setState({
          games: res.data.games,
          user: this.props.user
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

    if (games.length < 1) {
      return (<h3>Nothing to view - Click "Start a New Game".</h3>)
    }

    const gamesJsx = games.map(game => (
      <li key={game.id}>
        <Link to={`/games/${game.id}`}>
          <Button>Game {game.id}</Button>
        </Link>
      </li>
    ))

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
