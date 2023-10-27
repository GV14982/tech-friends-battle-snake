import { Coord, Move } from "./types"

export function translateCoord(coord: Coord, move: Move): Coord {
  switch (move) {
    case Move.Up:
      return { x: coord.x, y: coord.y + 1 }
    case Move.Down:
      return { x: coord.x, y: coord.y - 1 }
    case Move.Left:
      return { x: coord.x - 1, y: coord.y }
    case Move.Right:
      return { x: coord.x + 1, y: coord.y }
  }
}

export function parseCoord(coord: Coord): string {
  return `${coord.x}-${coord.y}`
}
