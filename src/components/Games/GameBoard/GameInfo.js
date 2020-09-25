import React, { Component, Fragment } from 'react'
import '../../../CSS/gameboard.module.scss'

class GameInfo extends Component {
  render () {
    return (
      <Fragment>
        <h4>Game ID: {this.props.id}</h4>
      </Fragment>
    )
  }
}

export default GameInfo
