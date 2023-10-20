import { Battlesnake, Move, SnakePositionMap } from "./types"
import { parseCoord, translateCoord } from "./utils"
// Takes in your snake and a set of opponent snake body positions
// and checks if any possible move would collide with them
// TODO: Account for their move (i.e. if they would move and it would make your
export function checkOpponents(you: Battlesnake, oppMap: SnakePositionMap, safeMoves: Record<Move, boolean>): Record<Move, boolean> {
  return Object.values(oppMap).reduce((acc, curr) => {
      // TODO: Maybe refactor this into a loop? Too lazy to do that - love Graham :)
      // Check Up move
      if (curr[parseCoord(translateCoord(you.head, Move.Up))]) {
        acc[Move.Up] = false
      }

      // Check Down move
      if (curr[parseCoord(translateCoord(you.head, Move.Down))]) {
        acc[Move.Down] = false
      }

      // Check Left move
      if (curr[parseCoord(translateCoord(you.head, Move.Left))]) {
        acc[Move.Left] = false
      }

      // Check Right move
      if (curr[parseCoord(translateCoord(you.head, Move.Right))]) {
        acc[Move.Right] = false
      }
      
    return acc
  }, safeMoves)
}
