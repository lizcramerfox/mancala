import React, { Component } from 'react'
import '../../../CSS/gameboard.module.scss'

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

    let classNames = [playerClass, type, 'pocket']
    const classes = classNames.join(' ')

    return (
        <div
          onClick={this.onClick}
          className={classes}
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
