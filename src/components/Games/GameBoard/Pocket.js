import React, { Component } from 'react'
import Pieces from './Pieces'
import './gameboard.module.scss'

class Pocket extends Component {
  
  onClick = () => {
    if (!this.props.pocket.isMancala ) {
      return this.props.playTurn(this.props.pocket.index, this.props.pocket.player)
    }
  }
  
  checkValidity = () => {
    if (this.props.pocket.isMancala) {
      return 'invalid'
    }

    if (this.props.pocket.player !== this.props.game.currentPlayer) {
      return 'invalid'
    }

    if (this.props.stones === 0) {
      return 'invalid'
    }
    
    return 'valid'
  }

  render () {
    console.log(`stones = `, this.props.stones)
    const { pocket, stones } = this.props
    const { player, isMancala } = pocket

    const playerClass = `player-${player.toLowerCase()}`
    const type = isMancala ? `mancala` : `non-mancala`
    const pocketID = `${pocket.toString()}`
    const validity = this.checkValidity()
   
    let classNames = [validity, playerClass, type, 'pocket'].join(' ')

    return (
      <div
        onClick={this.onClick}
        className={classNames}
        id={pocketID}
        key={pocketID}
        player={player}
        type={type}
      >
        <Pieces stones={stones} />
        <div className="stones-number">{stones}</div>    
      </div>  
    )
  }
}

export default Pocket
