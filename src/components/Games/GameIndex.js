import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { gameIndex } from '../../api/game'
import GameIndexPreview from './GameIndexPreview'
import messages from '../AutoDismissAlert/messages'
import Mancala from 'mancala'
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

  render() {
    const { games } = this.state
    
    if (games.length < 1) {
      return (<h5>No Saved Games - Click "Start a New Game".</h5>)
    }

    const gamesJsx = games.map(game => (
      <GameIndexPreview game={Mancala.Game.fromJSON(game)} id={game.id}/>
    ))
    
    return (
      <div className="index">
        {gamesJsx}
      </div>
    )
  }
}

export default withRouter(GameIndex)
