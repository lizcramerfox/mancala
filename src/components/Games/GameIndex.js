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

    console.log(games)

    if (games.length < 1) {
      return (<h5>No Saved Games - Click "Start a New Game".</h5>)
    }

    const gamesJsx = games.map(game => (
      <Link to={`/games/${game.id}`}>
        <div className="game-preview">
          Game {game.id}: {game.board}
        </div>
      </Link>
    ))

    return (
      <div className="index">
        {gamesJsx}
      </div>
    )
  }
}

export default withRouter(GameIndex)
