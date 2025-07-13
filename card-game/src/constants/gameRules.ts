// Game rules and scoring constants

import { Rank, Suit } from '../types/game';

// Card scoring values
export const CARD_VALUES: Record<Rank, number> = {
  [Rank.ACE]: 1,
  [Rank.TWO]: 2,
  [Rank.THREE]: 3,
  [Rank.FOUR]: 4,
  [Rank.FIVE]: 5,
  [Rank.SIX]: 6,
  [Rank.SEVEN]: 7,
  [Rank.EIGHT]: 8,
  [Rank.NINE]: 9,
  [Rank.TEN]: 0, // Special: 10 is worth 0 points
  [Rank.JACK]: 11,
  [Rank.QUEEN]: 12,
  [Rank.KING]: -2, // Special: King is worth -2 points
  [Rank.JOKER]: -4, // Special: Joker is worth -4 points
};

// Special card abilities
export const SPECIAL_ABILITIES = {
  [Rank.QUEEN]: 'peek', // Can peek at any card
  [Rank.JACK]: 'swap', // Can swap cards with opponent
} as const;

// Game configuration
export const GAME_CONFIG = {
  DECK_SIZE: 54, // 52 standard cards + 2 jokers
  CARDS_PER_PLAYER: 4,
  INITIAL_KNOWN_CARDS: 2, // Players see 2 of their 4 cards initially
  ROUNDS_TO_WIN: 3, // First to win 3 rounds wins the match
  MIN_PLAYERS: 2,
  MAX_PLAYERS: 4,
  JOKER_COUNT: 2,
} as const;

// Deck composition
export const STANDARD_RANKS = [
  Rank.ACE,
  Rank.TWO,
  Rank.THREE,
  Rank.FOUR,
  Rank.FIVE,
  Rank.SIX,
  Rank.SEVEN,
  Rank.EIGHT,
  Rank.NINE,
  Rank.TEN,
  Rank.JACK,
  Rank.QUEEN,
  Rank.KING,
] as const;

export const ALL_SUITS = [
  Suit.HEARTS,
  Suit.DIAMONDS,
  Suit.CLUBS,
  Suit.SPADES,
] as const;

// Animation durations (in milliseconds)
export const ANIMATION_DURATIONS = {
  CARD_FLIP: 400,
  CARD_MOVE: 300,
  CARD_FADE: 200,
  CARD_HIGHLIGHT: 500,
  TURN_CHANGE: 500,
  SCORE_UPDATE: 800,
  MODAL_OPEN: 250,
  MODAL_CLOSE: 200,
  BUTTON_CLICK: 150,
} as const;

// UI constants
export const UI_CONFIG = {
  CARD_SIZES: {
    small: { width: 48, height: 64 },
    medium: { width: 64, height: 88 },
    large: { width: 80, height: 112 },
  },
  BREAKPOINTS: {
    mobile: 667, // Mobile landscape minimum
    tablet: 768,
    desktop: 1024,
  },
  Z_INDEX: {
    card: 1,
    selectedCard: 10,
    modal: 1000,
    tooltip: 1100,
  },
} as const;

// Bot behavior constants
export const BOT_CONFIG = {
  THINKING_DELAY: {
    min: 5000, // Minimum thinking time (ms)
    max: 5000, // Maximum thinking time (ms)
  },
  DIFFICULTY: {
    easy: {
      randomness: 0.9, // 90% random moves
      memoryAccuracy: 0.1, // 10% chance to remember seen cards
      stopThreshold: 15, // Call stop when score estimate below 15
    },
    medium: {
      randomness: 0.5, // 50% random moves
      memoryAccuracy: 0.6, // 60% chance to remember seen cards
      stopThreshold: 12, // Call stop when score estimate below 12
    },
    hard: {
      randomness: 0.1, // 10% random moves
      memoryAccuracy: 0.9, // 90% chance to remember seen cards
      stopThreshold: 8, // Call stop when score estimate below 8
    },
  },
} as const;

// Error messages
export const ERROR_MESSAGES = {
  INVALID_MOVE: 'Invalid move attempted',
  DECK_EMPTY: 'Cannot draw from empty deck',
  NOT_PLAYER_TURN: 'Not your turn',
  CARD_NOT_FOUND: 'Card not found',
  PLAYER_NOT_FOUND: 'Player not found',
  INVALID_CARD_INDEX: 'Invalid card position',
  GAME_NOT_STARTED: 'Game has not started',
  GAME_ALREADY_ENDED: 'Game has already ended',
  SPECIAL_ABILITY_NOT_AVAILABLE: 'Special ability not available',
  INVALID_PEEK_TARGET: 'Invalid peek target',
  INVALID_SWAP_TARGET: 'Invalid swap target',
} as const;

// Success messages
export const SUCCESS_MESSAGES = {
  GAME_STARTED: 'Game started successfully',
  ROUND_STARTED: 'New round started',
  CARD_DRAWN: 'Card drawn',
  CARD_REPLACED: 'Card replaced',
  SPECIAL_ABILITY_USED: 'Special ability used',
  STOP_CALLED: 'Stop called',
  ROUND_WON: 'Round won',
  GAME_WON: 'Game won',
} as const;

// Game phase transitions
export const PHASE_TRANSITIONS = {
  setup: ['playing'],
  playing: ['scoring'],
  scoring: ['setup', 'finished'],
  finished: ['setup'], // Can restart
} as const;
