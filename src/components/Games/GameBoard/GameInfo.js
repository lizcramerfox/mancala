import React, { Component } from 'react'
import '../../../CSS/gameboard.module.scss'

class GameInfo extends Component {
  render () {
    return (
      <div>
        <h4>Player {this.props.currentPlayer}'s Turn</h4>
      </div>
    )
  }
}

export default GameInfo
