import { checkOpponents } from "../opponents";
import { Battlesnake, Move, SnakePositionMap } from "../types";

describe("Check Opponents Unit Tests", () => {
  test("idk", () => {
    let safeMoves: Record<Move, boolean> = {
      [Move.Up]: true,
      [Move.Down]: true,
      [Move.Left]: false,
      [Move.Right]: true,
    } 

    const you: Battlesnake = {
      id: "me",
      head: {
        x: 5,
        y: 5,
      },
      body: [
        {
          x: 4,
          y: 5,
        },
        {
          x: 3,
          y: 5,
        },
        {
          x: 3,
          y: 4,
        },
      ],
    } as Battlesnake;


    const opps: SnakePositionMap = {
      "opp1": {
        "1-1": true,
        "1-2": true,
        "1-3": true,
        "2-3": true,
      },
      "opp2": {
        "6-5": true,
        "6-6": true,
      },
      "opp3": {
        "7-3": true,
        "7-4": true,
        "8-4": true,
      },
    }  
    safeMoves = checkOpponents(you, opps, safeMoves); 

    expect(safeMoves[Move.Right]).toBe(false)
  });
});
