export function mancalaStones(game, player) {
    return Array.from(game.board.pockets.entries())
      .find(([pocket, stones]) => pocket.player === player && pocket.isMancala === true)[1]
  }

export function oppositePlayer(player) {
    return player === 'A' ? 'B' : 'A'
  }


module.export = {
  mancalaStones,
  oppositePlayer
}