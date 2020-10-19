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

  markWinner = (pocket, otherPocket) => {
    if (!this.props.game.isOver) {
      return
    }

    if (!this.props.pocket.isMancala) {
      return
    }

    if (pocket > otherPocket || pocket === otherPocket) {
      return 'winner'
    }
  }

  render () {
    const mancalaPocketStonesA = Array
      .from(this.props.game.board.pockets.entries())
      .filter(([pocket, stones]) => pocket.player === "A" && pocket.isMancala === true)
    
    const mancalaPocketStonesB = Array
      .from(this.props.game.board.pockets.entries())
      .filter(([pocket, stones]) => pocket.player === "B" && pocket.isMancala === true)

    const { pocket, stones } = this.props
    const { player, isMancala } = pocket

    const playerClass = `player-${player.toLowerCase()}`
    const type = isMancala ? `mancala` : `non-mancala`
    const pocketID = `${pocket.toString()}`
    const validity = this.checkValidity()

    let classNames = [this.markWinner(mancalaPocketStonesA[0][1], mancalaPocketStonesB[0][1]), validity, playerClass, type, 'pocket'].join(' ')

    console.log(this.props.pocket.toString(), classNames)

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
