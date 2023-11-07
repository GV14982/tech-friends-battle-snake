// API Types
// https://docs.battlesnake.com/api

/**
 *  @description An object containing cartesian coordinates 
 * */
export interface Coord {
  x: number;
  y: number;
}

export interface Battlesnake {
  id: string;
  name: string;
  health: number;
  /**
   *  @description Array of {@link Coord} representing this Battlesnake's location on the game board. This array is ordered from head to tail
   * */
  body: Coord[];
  /**
   *  @description {@link Coord} for this Battlesnake's head. Equivalent to the first element of the body array
   *  @example {"x": 0, "y": 0}
   * */
  head: Coord;
  length: number;
  latency: string;
  shout: string;
  customizations: Customizations;
}

export interface Customizations {
  /**
   *  @description Hex color code used to display this Battlesnake
   *  @example #888888
   * */
  color: string;
  /**
   *  @description Displayed head of this Battlesnake
   * */
  head: string;
  /**
   *  @description Displayed tail of this Battlesnake
   * */
  tail: string;
}

export interface Board {
  /**
   *  @description The number of rows in the y-axis of the game board
   *  @example 11
   * */
  height: number;
  width: number;
  food: Coord[];
  hazards: Coord[];
  /**
   *  @description List of all Battlesnakes currently on the board (Including you if you haven't been eliminated) 
   * */
  snakes: Battlesnake[];
}

export interface GameState {
  game: Game;
  turn: number;
  board: Board;
  you: Battlesnake;
}

export interface Game {
  id: string;
  ruleset: Ruleset;
  map: string;
  source: string;
  timeout: number;
}

export interface Ruleset {
  /**
   *  @description Name of the ruleset being used to run this game. Possible values include: standard, solo, royale, squad, constrictor, wrapped. See {@link https://docs.battlesnake.com/guides/playing/modes Game Modes} for more information on each ruleset
   *  @example "standard"
   * */
  name: string;
  /**
   *  @description The release version of the {@link https://github.com/BattlesnakeOfficial/rules Rules} module used in this game
   *  @example "version": "v1.2.3"
   * */
  version: string;
  /**
   *  @description A collection of {@link RulesetSettings specific settings} being used by the current game that control how the rules are applied.
   * */
  settings: RulesetSettings;
}

export interface RulesetSettings {
  foodSpawnChance: number;
  minimumFood: number;
  hazardDamagePerTurn: number;
}

// Response Types
// https://docs.battlesnake.com/api

export interface InfoResponse {
  apiversion: string;
  author?: string;
  color?: string;
  head?: string;
  tail?: string;
  version?: string;
}

export interface MoveResponse {
  move: Move;
  shout?: string;
}

export enum Move {
  Up = "up",
  Down = "down",
  Left = "left",
  Right = "right"
}

export type SnakePositionMap = Record<string, Record<string, boolean>>;
