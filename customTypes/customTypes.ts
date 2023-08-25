export interface Player {
  name: string;
  frames: frame[];
}

export type frame = [string, string?];

export interface PlayersProps {
  players: Player[];
  setPlayers: Function;
  frameCount: number;
  setFrameCount: Function;
}

export interface PlayProps {
  players: Player[];
  setPlayers: Function;
  frameCount: number;
  setFrameCount: Function;
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
  players: Player[];
  totalFrameScore: string;
  setTotalFrameScore: Function;
  disableHSButton: boolean;
  setDisableHSButton: Function;
  disableStrikeButton: boolean;
  setDisableStrikeButton: Function;
}
export type turnCount = 0 | 1 | 2;

export interface FullScoreProps {
  players: Player[];
  setPlayers: Function;
  frameCount: number;
}
