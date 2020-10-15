import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './home.module.scss'


class Home extends Component {
  render() {

    return (
      <div className="home">
        <a className="big-button new-game" href="#/games-create">
          <h4>New Game</h4>
        </a>
        <a className="big-button saved-games" href="#/games">
          <h4>Saved Games</h4>
        </a>
      </div>
    )
  }
}

export default withRouter(Home)
