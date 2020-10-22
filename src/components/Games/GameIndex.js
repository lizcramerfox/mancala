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

  componentDidMount() {
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

  // // REFACTOR:
  // mancalaStones(player) {
  //   return Array.from(this.state.games)
  //     .find(([pocket, stones]) => pocket.player === player && pocket.isMancala === true)
  // }

  // // REFACTOR:
  // oppositePlayer(player) {
  //   return player === 'A' ? 'B' : 'A'
  // }

  // // REFACTOR:
  // isWinner(player) {
  //   if (!this.props.game.isOver) {
  //     return false
  //   }
  //   return this.mancalaStones(player) >= this.mancalaStones(this.oppositePlayer(player))
  // }


  render() {
    const { games } = this.state
    
    if (games.length < 1) {
      return (<h5>No Saved Games - Click "Start a New Game".</h5>)
    }

    const gamesJsx = games.map(game => (
      <Link to={`/games/${game.id}`} key={game.id}>
        <div className="game-preview">
          <div>Game | {game.id}</div>
          <div>Board | {game.board}</div>
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
