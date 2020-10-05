import React, { Component } from 'react'
import Pieces from './Pieces'
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

    console.log(pocket.toString(), " = ", stones)

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
        <div className="pocket-display">
          <div className="stones-number">{stones}</div>
          <Pieces stones={stones} />
        </div>
      </div>
    )
  }
}

export default Pocket
