import React, { Component, Fragment } from 'react'
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
    const pocketID = `pocket-${pocket.toString()}`

    const classes = [playerClass, type, 'pocket'].join(' ')


    return (
      <Fragment>
        <div onClick={this.onClick} className={classes} id={pocketID} player={player} type={type}>
          {pocket.toString()} : {stones}
        </div>
      </Fragment>
    )
  }
}

export default Pocket
