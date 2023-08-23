export interface Player {
  name: string;
  turns: turn[];
}

export type turn = [string?, string?];

export interface PlayersProps {
  players: Player[];
  setPlayers: Function;
}

export interface PlayProps {
  players: Player[];
  setPlayers: Function;
}

export interface GameOverProps {
  players: Player[];
  setPlayerIndex: Function;
  setPlayers: Function;
  setFrameCount: Function;
}

export interface CurrentTurnProps {
  setTurnCount: Function;
  frameCount: number;
  setPlayers: Function;
  playerIndex: number;
  turnCount: turnCount;
  buttonsDisabled: boolean | undefined;
  setButtonsDisabled: Function;
}

export type turnCount = 0 | 1 | 2;