import React, { Component } from 'react'
import './gameboard.module.scss'

class Pocket extends Component {
  onClick = () => {
    if (!this.props.pocket.isMancala) {
      return this.props.playTurn(this.props.pocket.index, this.props.pocket.player)
    }
  }

  render () {

    const { pocket, stones } = this.props
    const { player, isMancala } = pocket

    const playerClass = `player-${player.toLowerCase()}`
    const type = isMancala ? `mancala` : `non-mancala`
    const pocketID = `${pocket.toString()}`

    let classNames = [playerClass, type, 'pocket'].join(' ')

    return (
        <div
          onClick={this.onClick}
          className={classNames}
          id={pocketID}
          player={player}
          type={type}
          pocket={this.props.pocket}
        >
          {pocket.toString()} : {stones}
        </div>
    )
  }
}

export default Pocket
