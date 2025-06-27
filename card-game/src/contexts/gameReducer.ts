import type { GameState, GameAction } from '../types';
import { GamePhase } from '../types';

// Initial game state
export const initialGameState: GameState = {
  gameId: '',
  gameMode: 'local',
  maxPlayers: 4,

  match: {
    currentRound: 0,
    roundsToWin: 3,
    roundWins: {},
    winner: null,
  },

  round: {
    phase: GamePhase.SETUP,
    currentPlayerIndex: 0,
    stopCalled: false,
    stopCalledBy: null,
    remainingTurns: 0,
    autoStopped: false,
    turnNumber: 0,
  },

  players: [],
  cards: {},

  deck: {
    drawPile: [],
    discardPile: [],
    isEmpty: true,
  },

  lastAction: null,

  ui: {
    selectedCard: null,
    showingPeekCard: null,
    animationQueue: [],
    isActionInProgress: false,
    currentModal: null,
  },
};

// Game state reducer
export const gameReducer = (
  state: GameState,
  action: GameAction
): GameState => {
  switch (action.type) {
    case 'START_GAME': {
      // This will be fully implemented in Task 1.5
      // For now, return a basic game setup
      return {
        ...state,
        gameId: `game-${Date.now()}`,
        round: {
          ...state.round,
          phase: GamePhase.SETUP,
        },
        lastAction: {
          type: action.type,
          playerId: 'system',
          details: action.payload,
          timestamp: Date.now(),
        },
      };
    }

    case 'START_ROUND': {
      return {
        ...state,
        round: {
          ...state.round,
          phase: GamePhase.PLAYING,
          currentPlayerIndex: 0,
          stopCalled: false,
          stopCalledBy: null,
          remainingTurns: 0,
          autoStopped: false,
          turnNumber: 1,
        },
        lastAction: {
          type: action.type,
          playerId: 'system',
          details: {},
          timestamp: Date.now(),
        },
      };
    }

    case 'END_ROUND': {
      return {
        ...state,
        round: {
          ...state.round,
          phase: GamePhase.SCORING,
        },
        lastAction: {
          type: action.type,
          playerId: 'system',
          details: {},
          timestamp: Date.now(),
        },
      };
    }

    case 'END_GAME': {
      return {
        ...state,
        round: {
          ...state.round,
          phase: GamePhase.FINISHED,
        },
        match: {
          ...state.match,
          winner: action.payload.winnerId,
        },
        lastAction: {
          type: action.type,
          playerId: 'system',
          details: action.payload,
          timestamp: Date.now(),
        },
      };
    }

    case 'RESET_GAME': {
      return {
        ...initialGameState,
        gameId: `game-${Date.now()}`,
      };
    }

    case 'DRAW_FROM_DECK': {
      // Placeholder implementation - will be completed in Task 1.5
      return {
        ...state,
        lastAction: {
          type: action.type,
          playerId: action.payload.playerId,
          details: {},
          timestamp: Date.now(),
        },
      };
    }

    case 'DRAW_FROM_DISCARD': {
      // Placeholder implementation - will be completed in Task 1.5
      return {
        ...state,
        lastAction: {
          type: action.type,
          playerId: action.payload.playerId,
          details: {},
          timestamp: Date.now(),
        },
      };
    }

    case 'REPLACE_CARD': {
      // Placeholder implementation - will be completed in Task 1.5
      return {
        ...state,
        lastAction: {
          type: action.type,
          playerId: action.payload.playerId,
          details: action.payload,
          timestamp: Date.now(),
        },
      };
    }

    case 'DISCARD_DRAWN_CARD': {
      // Placeholder implementation - will be completed in Task 1.5
      return {
        ...state,
        lastAction: {
          type: action.type,
          playerId: action.payload.playerId,
          details: action.payload,
          timestamp: Date.now(),
        },
      };
    }

    case 'END_TURN': {
      const nextPlayerIndex =
        (state.round.currentPlayerIndex + 1) % state.players.length;

      return {
        ...state,
        round: {
          ...state.round,
          currentPlayerIndex: nextPlayerIndex,
          turnNumber: state.round.turnNumber + 1,
        },
        lastAction: {
          type: action.type,
          playerId: action.payload.playerId,
          details: {},
          timestamp: Date.now(),
        },
      };
    }

    case 'CALL_STOP': {
      return {
        ...state,
        round: {
          ...state.round,
          stopCalled: true,
          stopCalledBy: action.payload.playerId,
          remainingTurns: state.players.length - 1, // All other players get one turn
        },
        lastAction: {
          type: action.type,
          playerId: action.payload.playerId,
          details: {},
          timestamp: Date.now(),
        },
      };
    }

    case 'PEEK_CARD':
    case 'SWAP_CARDS':
    case 'USE_SPECIAL_ABILITY':
    case 'SKIP_SPECIAL_ABILITY': {
      // These will be implemented in Task 1.5
      return {
        ...state,
        lastAction: {
          type: action.type,
          playerId: action.payload.playerId,
          details: action.payload,
          timestamp: Date.now(),
        },
      };
    }

    // UI Actions
    case 'SELECT_CARD': {
      return {
        ...state,
        ui: {
          ...state.ui,
          selectedCard: action.payload.cardId,
        },
      };
    }

    case 'CLEAR_SELECTION': {
      return {
        ...state,
        ui: {
          ...state.ui,
          selectedCard: null,
        },
      };
    }

    case 'SHOW_PEEK_RESULT': {
      return {
        ...state,
        ui: {
          ...state.ui,
          showingPeekCard: action.payload.cardId,
        },
      };
    }

    case 'HIDE_PEEK_RESULT': {
      return {
        ...state,
        ui: {
          ...state.ui,
          showingPeekCard: null,
        },
      };
    }

    case 'SHOW_MODAL': {
      return {
        ...state,
        ui: {
          ...state.ui,
          currentModal: action.payload.modalType as string,
        },
      };
    }

    case 'HIDE_MODAL': {
      return {
        ...state,
        ui: {
          ...state.ui,
          currentModal: null,
        },
      };
    }

    case 'ADD_ANIMATION': {
      return {
        ...state,
        ui: {
          ...state.ui,
          animationQueue: [...state.ui.animationQueue, action.payload.animation],
        },
      };
    }

    case 'COMPLETE_ANIMATION': {
      return {
        ...state,
        ui: {
          ...state.ui,
          animationQueue: state.ui.animationQueue.filter(
            anim => anim.id !== action.payload.animationId
          ),
        },
      };
    }

    case 'SET_ACTION_IN_PROGRESS': {
      return {
        ...state,
        ui: {
          ...state.ui,
          isActionInProgress: action.payload.inProgress,
        },
      };
    }

    // Bot Actions (placeholders)
    case 'BOT_MAKE_MOVE':
    case 'BOT_THINKING': {
      return {
        ...state,
        lastAction: {
          type: action.type,
          playerId: action.payload.playerId,
          details: action.payload,
          timestamp: Date.now(),
        },
      };
    }

    // Game State Updates (placeholders)
    case 'UPDATE_PLAYER_KNOWLEDGE':
    case 'REVEAL_CARD':
    case 'UPDATE_SCORES':
    case 'SET_CURRENT_PLAYER':
    case 'INCREMENT_TURN': {
      return {
        ...state,
        lastAction: {
          type: action.type,
          playerId: 'system',
          details: action.payload,
          timestamp: Date.now(),
        },
      };
    }

    default: {
      console.warn(`Unhandled action type: ${(action as { type: string }).type}`);
      return state;
    }
  }
};