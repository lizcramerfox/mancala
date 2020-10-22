import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './games.module.scss'

class GameIndexPreview extends Component {
  // REFACTOR:
  // mancalaStones(player) {
  //   const pocketsArray = this.props.game.board.split(',')
    
  //   if (player === 'A') {
  //     return pocketsArray[6].split(':')[1] 
  //   } 

  //   if (player === 'B') {
  //     return pocketsArray[13].split(':')[1]
  //   }
  // }

  mancalaStones(player) {
    return Array.from(this.props.game.board.pockets.entries())
      .find(([pocket, stones]) => pocket.player === player && pocket.isMancala === true)[1]
  }

  // REFACTOR:
  oppositePlayer(player) {
    return player === 'A' ? 'B' : 'A'
  }

  // REFACTOR:
  isWinner(player) {
    if (!this.props.game.isOver) {
      return false
    }
    return this.mancalaStones(player) >= this.mancalaStones(this.oppositePlayer(player))
  }


  render() {

    console.log(`A = `, this.mancalaStones('A'))
    console.log(`B = `, this.mancalaStones('B'))
    // let status
    // if (!this.props.game.isOver) {
    //   status =  
    // }


    const previewJsx = (
      <div className="game-preview">
        <div>Board | {this.props.game.board}</div>
        <div>Current Player | {this.props.game.currentPlayer}</div>
        <div>Winner | </div>
      </div>
    )

    return (
      <div className="game-preview">
        {previewJsx}
      </div>
    )
  }
}

export default withRouter(GameIndexPreview)
