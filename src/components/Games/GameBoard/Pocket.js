import React, { Component } from 'react'
import Pieces from './Pieces'
import './gameboard.module.scss'

class Pocket extends Component {
  onClick = () => {
    if (!this.props.pocket.isMancala) {
      return this.props.playTurn(this.props.pocket.index, this.props.pocket.player)
    }
  }

  // isValid = () => {
  //   if (this.props.pocket.player === this.props.game.currentPlayer) {
      
  //   }
  // }

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
        key={pocketID}
        player={player}
        type={type}
        pocket={this.props.pocket}
      >
        <Pieces stones={stones} />
        <div className="stones-number">{stones}</div>    
      </div>  
    )
  }
}

export default Pocket
