import React, { Component } from 'react'
import './gameboard.module.scss'

class Pieces extends Component {

  render() {
    let array = []
    for (let i = 0; i < this.props.stones; i++) {
      array.push(<div className="game-piece"></div>)
    }
    return array
  }
}

export default Pieces
