import React, { Component, Fragment } from 'react'

class GameInfo extends Component {
  render () {
    return (
      <Fragment>
        <h4>Game ID: {this.props.id}</h4>
      </Fragment>
    )
  }
}

class Pocket extends Component {
  render () {
    return (
      <Fragment>
        <div className="pocket">{this.boardPosition}</div>
      </Fragment>
    )
  }
}

class Board extends Component {
  render () {
    return (
      <div>
        <Pocket boardPosition="A0" />
        <Pocket boardPosition="A1" />
        <Pocket boardPosition="A2" />
        <Pocket boardPosition="A3" />
        <Pocket boardPosition="A4" />
        <Pocket boardPosition="A5" />
        <Pocket boardPosition="AM" />
        <Pocket boardPosition="B0" />
        <Pocket boardPosition="B1" />
        <Pocket boardPosition="B2" />
        <Pocket boardPosition="B3" />
        <Pocket boardPosition="B4" />
        <Pocket boardPosition="B5" />
        <Pocket boardPosition="BM" />
      </div>
    )
  }
}

class Game extends Component {
  constructor(props) {
    super(props)

    this.state = {
      game: this.props.game,
      id: this.props.id
    }
    console.log('this.props: ', this.props)
  }

  render () {
    return (
      <div>
        <GameInfo game={this.props.game} id={this.props.id} />
        <Board />
      </div>
    )
  }
}

export default Game
