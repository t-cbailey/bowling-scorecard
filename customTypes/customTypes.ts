export interface Player {
  name: string;
  turns?: turn[];
}

type turn = [number | "X" | "/", number | "X" | "/"];

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
