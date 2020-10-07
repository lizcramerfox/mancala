import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './home.module.scss'


class Home extends Component {
  render() {

    return (
      <div class="home">
        <a className="big-button" href="#/games-create">
          Start New Game
        </a>
        <a className="big-button" href="#/games">
          View Saved Games
        </a>
      </div>
    )
  }
}

export default withRouter(Home)
