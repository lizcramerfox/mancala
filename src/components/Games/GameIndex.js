import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import { gameIndex } from '../../api/game'
import GameIndexPreview from './GameIndexPreview'
import messages from '../AutoDismissAlert/messages'
import Mancala from 'mancala'
import './games.module.scss'
import '../Home/home.module.scss'


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
    console.log(games.length)
    let gamesJsx
    let classNames
    
    if (games.length === 0) {
      classNames = "index empty"
      gamesJsx = (
        <Fragment>
          <h5>No Saved Games - Click "New Game" to Start</h5>
          <a className="big-button" href="#/games-create">
            New Game     
          </a>
        </Fragment>
      )
    } else {
      classNames = "index full"
      gamesJsx = games.map(game => (
        <GameIndexPreview game={Mancala.Game.fromJSON(game)} id={game.id}/>
      ))
    }

    
    
    return (
      <div className={classNames}>
        {gamesJsx}
      </div>
    )
  }
}

export default withRouter(GameIndex)
