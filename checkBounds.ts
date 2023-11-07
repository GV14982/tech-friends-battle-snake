import { Coord, Board, Move } from "./types";

export function checkBound(head:Coord, board: Board, moves: Record<Move, boolean>): Record<Move, boolean> {
  // TODO: Step 1 - Prevent your Battlesnake from moving out of bounds
  if (head.x + 1 >= board.width) {
    moves[Move.Right] = false
  }
  if (head.x - 1 < 0) {
    moves[Move.Left] = false
  }

  if(head.y + 1  >= board.height){
    moves[Move.Up] = false
  }
  if(head.y - 1 < 0){
    moves[Move.Down] = false
  }

  return moves;

}