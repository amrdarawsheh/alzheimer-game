// Core game type definitions

export const Suit = {
  HEARTS: 'hearts',
  DIAMONDS: 'diamonds',
  CLUBS: 'clubs',
  SPADES: 'spades',
} as const;

export type Suit = (typeof Suit)[keyof typeof Suit];

export const Rank = {
  ACE: 'ace',
  TWO: '2',
  THREE: '3',
  FOUR: '4',
  FIVE: '5',
  SIX: '6',
  SEVEN: '7',
  EIGHT: '8',
  NINE: '9',
  TEN: '10',
  JACK: 'jack',
  QUEEN: 'queen',
  KING: 'king',
  JOKER: 'joker',
} as const;

export type Rank = (typeof Rank)[keyof typeof Rank];

export const GamePhase = {
  SETUP: 'setup',
  CARD_VIEWING: 'card-viewing',
  PLAYING: 'playing',
  SCORING: 'scoring',
  FINISHED: 'finished',
} as const;

export type GamePhase = (typeof GamePhase)[keyof typeof GamePhase];

export const PlayerType = {
  HUMAN: 'human',
  BOT: 'bot',
} as const;

export type PlayerType = (typeof PlayerType)[keyof typeof PlayerType];

export interface Card {
  id: string;
  suit: Suit | null; // null for jokers
  rank: Rank;
  value: number; // Point value for scoring
  isSpecial: boolean; // true for Queen/Jack when drawn from deck
}

export interface PlayerCard {
  cardId: string;
  isRevealed: boolean; // true when card is face-up (during scoring)
  isKnownToPlayer: boolean; // true when player has seen this card
  lastSeenTurn?: number; // turn number when player last saw this card
}

export interface Player {
  id: string;
  name: string;
  type: PlayerType;
  cards: PlayerCard[];
  score: number; // current round score
  isActive: boolean;
  roundWins: number; // wins across the match
}

export interface Match {
  currentRound: number;
  roundsToWin: number;
  roundWins: Record<string, number>; // playerId -> round wins
  winner: string | null; // playerId of match winner
}

export interface Round {
  phase: GamePhase;
  currentPlayerIndex: number;
  stopCalled: boolean;
  stopCalledBy: string | null; // playerId who called stop
  remainingTurns: number; // turns left after stop is called
  autoStopped: boolean; // true if round ended due to empty deck
  turnNumber: number; // current turn number for tracking
}

export interface Deck {
  drawPile: string[]; // array of cardIds
  discardPile: string[]; // array of cardIds (top card is last)
  isEmpty: boolean;
}

export interface GameActionHistory {
  type: string;
  playerId: string;
  details: Record<string, unknown>;
  timestamp: number;
}

export interface UIState {
  selectedCard: string | null; // cardId of selected card
  showingPeekCard: string | null; // cardId being peeked at
  animationQueue: Animation[];
  isActionInProgress: boolean;
  currentModal: string | null; // Will be properly typed as ModalType in Task 1.5
  isBotThinking: boolean; // Whether bot is currently thinking
  botThinkingStartTime: number | null; // When bot started thinking
  replacingCard: {
    playerId: string;
    cardIndex: number;
    phase: 'swapping-out' | 'swapping-in' | null;
  } | null; // Tracks card replacement animation state
  jackSwapMode: {
    isActive: boolean;
    selectedOwnCardIndex: number | null;
    drawnCardId: string; // The Jack card that enables this swap
  } | null; // Tracks Jack swap card selection state
  turnTimer: {
    isActive: boolean;
    startTime: number;
    duration: number; // timer duration in milliseconds
    remainingTime: number; // remaining time in milliseconds
  } | null;
  startCountdown: {
    isActive: boolean;
    startTime: number;
    duration: number; // countdown duration in milliseconds
    remainingTime: number; // remaining time in milliseconds
  } | null;
}

export const ModalType = {
  PEEK_SELECTION: 'peek_selection',
  SWAP_SELECTION: 'swap_selection',
  ROUND_RESULTS: 'round_results',
  GAME_RESULTS: 'game_results',
} as const;

export type ModalType = (typeof ModalType)[keyof typeof ModalType];

export interface Animation {
  id: string;
  type: 'flip' | 'move' | 'fade' | 'highlight';
  target: string; // element id or cardId
  duration: number;
  delay?: number;
}

export interface GameState {
  // Game Configuration
  gameId: string;
  gameMode: 'local' | 'multiplayer';
  maxPlayers: number;

  // Match Progress
  match: Match;

  // Current Round State
  round: Round;

  // Players
  players: Player[];

  // Cards (master list of all cards with their properties)
  cards: Record<string, Card>; // cardId -> Card

  // Deck Management
  deck: Deck;

  // Game Actions
  lastAction: GameActionHistory | null;

  // UI State
  ui: UIState;
}
