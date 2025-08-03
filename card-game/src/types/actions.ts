// Action types for game state reducer

export type GameAction =
  // Game Flow Actions
  | {
      type: 'START_GAME';
      payload: { playerCount: number; playerNames: string[] };
    }
  | { type: 'START_PLAYING'; payload: Record<string, never> }
  | { type: 'START_ROUND'; payload: Record<string, never> }
  | { type: 'END_ROUND'; payload: Record<string, never> }
  | { type: 'END_GAME'; payload: { winnerId: string } }
  | { type: 'RESET_GAME'; payload: Record<string, never> }

  // Turn Actions
  | { type: 'DRAW_FROM_DECK'; payload: { playerId: string } }
  | { type: 'DRAW_FROM_DISCARD'; payload: { playerId: string } }
  | {
      type: 'REPLACE_CARD';
      payload: { playerId: string; cardIndex: number; drawnCardId: string };
    }
  | {
      type: 'DISCARD_DRAWN_CARD';
      payload: { playerId: string; cardId: string };
    }
  | { type: 'END_TURN'; payload: { playerId: string } }

  // Special Actions
  | { type: 'PEEK_CARD'; payload: { playerId: string; targetCardId: string } }
  | {
      type: 'SWAP_CARDS';
      payload: {
        playerId: string;
        playerCardIndex: number;
        targetPlayerId: string;
        targetCardIndex: number;
      };
    }
  | { type: 'CALL_STOP'; payload: { playerId: string } }
  | {
      type: 'USE_SPECIAL_ABILITY';
      payload: {
        playerId: string;
        cardId: string;
        abilityType: 'peek' | 'swap';
      };
    }
  | {
      type: 'SKIP_SPECIAL_ABILITY';
      payload: { playerId: string; cardId: string };
    }

  // UI Actions
  | { type: 'SELECT_CARD'; payload: { cardId: string } }
  | { type: 'CLEAR_SELECTION'; payload: Record<string, never> }
  | { type: 'SHOW_PEEK_RESULT'; payload: { cardId: string } }
  | { type: 'HIDE_PEEK_RESULT'; payload: Record<string, never> }
  | { type: 'SHOW_MODAL'; payload: { modalType: string; data?: unknown } }
  | { type: 'HIDE_MODAL'; payload: Record<string, never> }
  | {
      type: 'ADD_ANIMATION';
      payload: { animation: import('./game').Animation };
    }
  | { type: 'COMPLETE_ANIMATION'; payload: { animationId: string } }
  | { type: 'SET_ACTION_IN_PROGRESS'; payload: { inProgress: boolean } }
  | { type: 'START_CARD_REPLACEMENT'; payload: { playerId: string; cardIndex: number } }
  | { type: 'COMPLETE_CARD_REPLACEMENT'; payload: Record<string, never> }
  | { type: 'START_JACK_SWAP_MODE'; payload: { drawnCardId: string } }
  | { type: 'SELECT_OWN_CARD_FOR_SWAP'; payload: { cardIndex: number } }
  | { type: 'COMPLETE_JACK_SWAP'; payload: { targetPlayerId: string; targetCardIndex: number } }
  | { type: 'CANCEL_JACK_SWAP'; payload: Record<string, never> }

  // Bot Actions
  | { type: 'BOT_MAKE_MOVE'; payload: { playerId: string; move: BotMove } }
  | { type: 'BOT_THINKING'; payload: { playerId: string; thinking: boolean } }
  | { type: 'SET_BOT_THINKING'; payload: { thinking: boolean } }
  | { type: 'CLEAR_BOT_THINKING'; payload: Record<string, never> }

  // Timer Actions
  | { type: 'START_TURN_TIMER'; payload: { duration: number } }
  | { type: 'UPDATE_TURN_TIMER'; payload: { remainingTime: number } }
  | { type: 'STOP_TURN_TIMER'; payload: Record<string, never> }
  | { type: 'TIMER_EXPIRED'; payload: Record<string, never> }

  // Countdown Actions
  | { type: 'START_COUNTDOWN'; payload: { duration: number } }
  | { type: 'UPDATE_COUNTDOWN'; payload: { remainingTime: number } }
  | { type: 'STOP_COUNTDOWN'; payload: Record<string, never> }
  | { type: 'COUNTDOWN_EXPIRED'; payload: Record<string, never> }

  // Game State Updates
  | {
      type: 'UPDATE_PLAYER_KNOWLEDGE';
      payload: { playerId: string; cardId: string; isKnown: boolean };
    }
  | { type: 'REVEAL_CARD'; payload: { cardId: string; revealed: boolean } }
  | { type: 'UPDATE_SCORES'; payload: { scores: Record<string, number> } }
  | { type: 'SET_CURRENT_PLAYER'; payload: { playerIndex: number } }
  | { type: 'INCREMENT_TURN'; payload: Record<string, never> };

export interface BotMove {
  action:
    | 'draw_deck'
    | 'draw_discard'
    | 'replace_card'
    | 'discard_card'
    | 'call_stop'
    | 'use_peek'
    | 'use_swap'
    | 'skip_ability';
  cardIndex?: number; // for replace_card
  targetPlayerId?: string; // for swap ability
  targetCardIndex?: number; // for swap ability
  targetCardId?: string; // for peek ability
  playerCardIndex?: number; // for swap ability (bot's card)
}

export interface GameContextType {
  gameState: import('./game').GameState;
  dispatch: (action: GameAction) => void;

  // Game control functions
  startGame: (playerCount: number, playerNames: string[]) => void;
  makeMove: (action: GameAction) => void;
  endTurn: () => void;
  callStop: () => void;

  // Player action functions
  drawFromDeck: () => void;
  drawFromDiscard: () => void;
  replaceCard: (cardIndex: number) => void;
  discardDrawnCard: () => void;

  // Special ability functions
  peekCard: (targetCardId: string) => void;
  swapCards: (
    playerCardIndex: number,
    targetPlayerId: string,
    targetCardIndex: number
  ) => void;
  useSpecialAbility: (cardId: string, abilityType: 'peek' | 'swap') => void;
  skipSpecialAbility: (cardId: string) => void;

  // UI functions
  selectCard: (cardId: string) => void;
  clearSelection: () => void;
  showModal: (modalType: string, data?: unknown) => void;
  hideModal: () => void;

  // Bot functions
  processBotTurn: () => void;

  // Utility functions
  getCurrentPlayer: () => import('./game').Player | null;
  getPlayerById: (playerId: string) => import('./game').Player | null;
  getCardById: (cardId: string) => import('./game').Card | null;
  canDrawFromDeck: () => boolean;
  canDrawFromDiscard: () => boolean;
  canCallStop: () => boolean;
  isPlayerTurn: (playerId: string) => boolean;

  // Enhanced game engine functions
  getGameStatistics: () => unknown;
  getTurnAnalysis: () => unknown;
  getPlayerAvailableActions: () => string[];
  isValidAction: (playerId: string, actionType: string) => boolean;

  // Game flow control functions
  forceEndTurn: () => void;
  forceNextRound: () => void;
  getGameFlowInfo: () => Record<string, unknown>;
  forceProgressScoring: () => void;

  // Countdown functions
  startCountdown: (duration: number) => void;
  stopCountdown: () => void;
}
