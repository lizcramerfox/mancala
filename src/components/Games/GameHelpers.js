export function mancalaStones(game, player) {
  return Array.from(game.board.pockets.entries())
    .find(([pocket, stones]) => pocket.player === player && pocket.isMancala === true)[1]
}

export function oppositePlayer(player) {
  return player === 'A' ? 'B' : 'A'
}

export function isWinner(game, player) {
  if (game.isOver) {
    return false
  }
  return mancalaStones(game, player) >= mancalaStones(game, oppositePlayer(player))
}

module.export = {
  mancalaStones,
  oppositePlayer,
  isWinner
}