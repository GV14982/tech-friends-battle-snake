import { checkBound } from "../checkBounds";
import { checkOpponents } from "../opponents";
import { Battlesnake, Board, Move, SnakePositionMap } from "../types";

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

describe("CheckBounds", () => {
    const board: Board = {
      height:11,
      width:11,
      food: [],
      hazards: [],
      snakes: []
    }

    const you: Battlesnake = {
      id: "me",
      head: {
        x: 10,
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

  test("Fail on Right", () => {
    let safeMoves: Record<Move, boolean> = {
      [Move.Up]: true,
      [Move.Down]: true,
      [Move.Left]: true,
      [Move.Right]: true,
    } 
    safeMoves = checkBound(you.head, board, safeMoves); 
    expect(safeMoves[Move.Right]).toBe(false)
    expect(safeMoves[Move.Left]).toBe(true)
    expect(safeMoves[Move.Up]).toBe(true)
    expect(safeMoves[Move.Down]).toBe(true)
  });
  test("Fail on Left", () => {
    let safeMoves: Record<Move, boolean> = {
      [Move.Up]: true,
      [Move.Down]: true,
      [Move.Left]: true,
      [Move.Right]: true,
    } 
    you.head.x = 0
    safeMoves = checkBound(you.head, board, safeMoves); 
    expect(safeMoves[Move.Right]).toBe(true)
    expect(safeMoves[Move.Left]).toBe(false)
    expect(safeMoves[Move.Up]).toBe(true)
    expect(safeMoves[Move.Down]).toBe(true)
  });
  test("Fail on Up", () => {
    let safeMoves: Record<Move, boolean> = {
      [Move.Up]: true,
      [Move.Down]: true,
      [Move.Left]: true,
      [Move.Right]: true,
    } 
    you.head.x = 5
    you.head.y = 10
    safeMoves = checkBound(you.head, board, safeMoves); 
    expect(safeMoves[Move.Up]).toBe(false)
  });
  test("Fail on Down", () => {
    let safeMoves: Record<Move, boolean> = {
      [Move.Up]: true,
      [Move.Down]: true,
      [Move.Left]: true,
      [Move.Right]: true,
    } 
    you.head.x = 5
    you.head.y = 0
    safeMoves = checkBound(you.head, board, safeMoves); 
    expect(safeMoves[Move.Down]).toBe(false)
  });
  test("Top Right Corner", () => {
    let safeMoves: Record<Move, boolean> = {
      [Move.Up]: true,
      [Move.Down]: true,
      [Move.Left]: true,
      [Move.Right]: true,
    } 
    you.head.x = 10
    you.head.y = 10
    safeMoves = checkBound(you.head, board, safeMoves); 
    expect(safeMoves[Move.Right]).toBe(false)
    expect(safeMoves[Move.Up]).toBe(false)
  });
  test("Top Left Corner", () => {
    let safeMoves: Record<Move, boolean> = {
      [Move.Up]: true,
      [Move.Down]: true,
      [Move.Left]: true,
      [Move.Right]: true,
    } 
    you.head.x = 0
    you.head.y = 10
    safeMoves = checkBound(you.head, board, safeMoves); 
    expect(safeMoves[Move.Left]).toBe(false)
    expect(safeMoves[Move.Up]).toBe(false)
  });
  test("Bottom Left Corner", () => {
    let safeMoves: Record<Move, boolean> = {
      [Move.Up]: true,
      [Move.Down]: true,
      [Move.Left]: true,
      [Move.Right]: true,
    } 
    you.head.x = 0
    you.head.y = 0
    safeMoves = checkBound(you.head, board, safeMoves); 
    expect(safeMoves[Move.Left]).toBe(false)
    expect(safeMoves[Move.Down]).toBe(false)
  });
  test("Bottom Right Corner", () => {
    let safeMoves: Record<Move, boolean> = {
      [Move.Up]: true,
      [Move.Down]: true,
      [Move.Left]: true,
      [Move.Right]: true,
    } 
    you.head.x = 10
    you.head.y = 0
    safeMoves = checkBound(you.head, board, safeMoves); 
    expect(safeMoves[Move.Right]).toBe(false)
    expect(safeMoves[Move.Down]).toBe(false)
  });
});
