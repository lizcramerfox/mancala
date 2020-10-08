import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { gameIndex } from '../../api/game'
import messages from '../AutoDismissAlert/messages'
import './games.module.scss'

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
          heading: 'Failure',
          variant: 'danger',
          message: messages.gamesIndexFailure
        })
      })
  }

  render () {
    const { games } = this.state

    if (games.length < 1) {
      return (<h3>No Saved Games - Click "Start a New Game".</h3>)
    }

    const gamesJsx = games.map(game => (
      <li key={game.id}>
        <Link to={`/games/${game.id}`}>
          <button>Game {game.id}</button>
        </Link>
      </li>
    ))

    return (
      <div className="index">
        <ul>
          {gamesJsx}
        </ul>
      </div>
    )
  }
}

export default withRouter(GameIndex)
