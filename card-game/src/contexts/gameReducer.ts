import type { GameState, GameAction } from '../types';
import { GamePhase } from '../types';
import { GAME_CONFIG } from '../constants';

// Import utility functions
import { 
  createDeck, 
  shuffleDeck, 
  dealInitialCards, 
  calculatePlayerScore,
  hasSpecialAbility,
  drawCard,
  addToDiscardPile,
  replacePlayerCard,
  updateCardKnowledge,
  swapPlayerCards,
} from '../utils/deckUtils';

import {
  createPlayers,
} from '../utils/playerUtils';

import {
  determineRoundWinner,
  checkMatchWinner,
  shouldEndRound,
  getNextPlayerIndex,
} from '../utils/gameEngine';

// Initial game state
export const initialGameState: GameState = {
  gameId: '',
  gameMode: 'local',
  maxPlayers: 4,

  match: {
    currentRound: 0,
    roundsToWin: GAME_CONFIG.ROUNDS_TO_WIN,
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
      const { playerCount, playerNames } = action.payload;
      
      // Create deck and shuffle
      const allCards = createDeck();
      const cardIds = shuffleDeck(allCards);
      
      // Create players
      const players = createPlayers(playerCount, playerNames);
      
      // Deal initial cards
      const { updatedPlayers, remainingCards } = dealInitialCards(players, cardIds);
      
      // Set up discard pile with first card
      const discardPile = [remainingCards.pop()!];
      const drawPile = remainingCards;
      
      // Initialize round wins tracking
      const roundWins: Record<string, number> = {};
      updatedPlayers.forEach(player => {
        roundWins[player.id] = 0;
      });
      
      return {
        ...state,
        gameId: `game-${Date.now()}`,
        cards: allCards,
        players: updatedPlayers,
        deck: {
          drawPile,
          discardPile,
          isEmpty: drawPile.length === 0,
        },
        match: {
          ...state.match,
          currentRound: 1,
          roundWins,
        },
        round: {
          ...state.round,
          phase: GamePhase.CARD_VIEWING,
          currentPlayerIndex: 0,
          turnNumber: 1,
        },
        lastAction: {
          type: action.type,
          playerId: 'system',
          details: action.payload,
          timestamp: Date.now(),
        },
      };
    }

    case 'START_PLAYING': {
      return {
        ...state,
        round: {
          ...state.round,
          phase: GamePhase.PLAYING,
        },
        lastAction: {
          type: action.type,
          playerId: 'system',
          details: {},
          timestamp: Date.now(),
        },
      };
    }

    case 'START_ROUND': {
      // Create and shuffle a new deck
      const allCards = createDeck();
      const cardIds = shuffleDeck(allCards);
      
      // Reset players for new round
      const resetPlayers = state.players.map(player => ({
        ...player,
        cards: [],
        score: 0,
      }));
      
      // Deal new cards
      const { updatedPlayers, remainingCards } = dealInitialCards(resetPlayers, cardIds);
      
      // Set up new discard pile
      const discardPile = [remainingCards.pop()!];
      const drawPile = remainingCards;
      
      return {
        ...state,
        cards: allCards,
        players: updatedPlayers,
        deck: {
          drawPile,
          discardPile,
          isEmpty: drawPile.length === 0,
        },
        match: {
          ...state.match,
          currentRound: state.match.currentRound + 1,
        },
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
        ui: {
          ...state.ui,
          currentModal: null,
          selectedCard: null,
          showingPeekCard: null,
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
      // Calculate scores for all players
      const updatedPlayers = state.players.map(player => {
        const score = calculatePlayerScore(player.cards, state.cards);
        return {
          ...player,
          score,
          cards: player.cards.map(card => ({ ...card, isRevealed: true })), // Reveal all cards
        };
      });
      
      // Find the winner (lowest score)
      const winner = determineRoundWinner(updatedPlayers);
      
      // Update round wins
      const updatedRoundWins = { ...state.match.roundWins };
      updatedRoundWins[winner.id] = (updatedRoundWins[winner.id] || 0) + 1;
      
      // Check if someone won the match
      const matchWinner = checkMatchWinner(updatedRoundWins, state.match.roundsToWin);
      
      return {
        ...state,
        players: updatedPlayers,
        match: {
          ...state.match,
          roundWins: updatedRoundWins,
          winner: matchWinner,
        },
        round: {
          ...state.round,
          phase: matchWinner ? GamePhase.FINISHED : GamePhase.SCORING,
        },
        ui: {
          ...state.ui,
          currentModal: 'ROUND_RESULTS',
        },
        lastAction: {
          type: action.type,
          playerId: 'system',
          details: { roundWinner: winner.id, scores: updatedPlayers.map(p => ({ id: p.id, score: p.score })) },
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
      const { playerId } = action.payload;
      
      const { drawnCardId, newDrawPile, newDiscardPile } = drawCard(
        state.deck.drawPile,
        state.deck.discardPile,
        'deck'
      );
      
      if (!drawnCardId) {
        return state; // Cannot draw from empty deck
      }
      
      // Check if drawn card has special ability
      const drawnCard = state.cards[drawnCardId];
      const hasSpecial = drawnCard && hasSpecialAbility(drawnCard, 'deck');
      
      return {
        ...state,
        deck: {
          ...state.deck,
          drawPile: newDrawPile,
          discardPile: newDiscardPile,
          isEmpty: newDrawPile.length === 0,
        },
        ui: {
          ...state.ui,
          selectedCard: drawnCardId, // Store drawn card for replacement decision
          currentModal: hasSpecial ? 'special-ability' : null, // Show special ability modal if needed
        },
        lastAction: {
          type: action.type,
          playerId,
          details: { drawnCardId, hasSpecialAbility: hasSpecial },
          timestamp: Date.now(),
        },
      };
    }

    case 'DRAW_FROM_DISCARD': {
      const { playerId } = action.payload;
      
      const { drawnCardId, newDrawPile, newDiscardPile } = drawCard(
        state.deck.drawPile,
        state.deck.discardPile,
        'discard'
      );
      
      if (!drawnCardId) {
        return state; // Cannot draw from empty discard pile
      }
      
      return {
        ...state,
        deck: {
          ...state.deck,
          drawPile: newDrawPile,
          discardPile: newDiscardPile,
        },
        ui: {
          ...state.ui,
          selectedCard: drawnCardId, // Store drawn card for replacement decision
        },
        lastAction: {
          type: action.type,
          playerId,
          details: { drawnCardId },
          timestamp: Date.now(),
        },
      };
    }

    case 'REPLACE_CARD': {
      const { playerId, cardIndex, drawnCardId } = action.payload;
      
      const playerIndex = state.players.findIndex(p => p.id === playerId);
      if (playerIndex === -1 || cardIndex < 0 || cardIndex >= GAME_CONFIG.CARDS_PER_PLAYER) {
        return state;
      }
      
      const player = state.players[playerIndex];
      
      // Prevent replacement if no card is selected or if already in progress
      if (!drawnCardId || state.ui.isActionInProgress) {
        return state;
      }
      
      const { updatedPlayer, replacedCardId } = replacePlayerCard(
        player,
        cardIndex,
        drawnCardId,
        state.round.turnNumber
      );
      
      // Update players array
      const updatedPlayers = [...state.players];
      updatedPlayers[playerIndex] = updatedPlayer;
      
      // Add replaced card to discard pile
      const newDiscardPile = addToDiscardPile(state.deck.discardPile, replacedCardId);
      
      // Check if drawn card has special ability
      const drawnCard = state.cards[drawnCardId];
      const hasAbility = hasSpecialAbility(drawnCard, 'deck');
      
      return {
        ...state,
        players: updatedPlayers,
        deck: {
          ...state.deck,
          discardPile: newDiscardPile,
        },
        ui: {
          ...state.ui,
          selectedCard: null,
          currentModal: hasAbility ? drawnCard.rank : null,
          isActionInProgress: true, // Prevent multiple rapid actions
        },
        lastAction: {
          type: action.type,
          playerId,
          details: { cardIndex, drawnCardId, replacedCardId, hasSpecialAbility: hasAbility },
          timestamp: Date.now(),
        },
      };
    }

    case 'DISCARD_DRAWN_CARD': {
      const { playerId, cardId } = action.payload;
      const drawnCardId = cardId || state.ui.selectedCard;
      
      if (!drawnCardId) {
        return state;
      }
      
      // Add drawn card to discard pile
      const newDiscardPile = addToDiscardPile(state.deck.discardPile, drawnCardId);
      
      return {
        ...state,
        deck: {
          ...state.deck,
          discardPile: newDiscardPile,
        },
        ui: {
          ...state.ui,
          selectedCard: null,
        },
        lastAction: {
          type: action.type,
          playerId,
          details: { cardId: drawnCardId },
          timestamp: Date.now(),
        },
      };
    }

    case 'END_TURN': {
      const { playerId } = action.payload;
      const nextPlayerIndex = getNextPlayerIndex(state.round.currentPlayerIndex, state.players.length);
      let endRound = shouldEndRound(state);
      let newRemainingTurns = state.round.remainingTurns;
      
      // Update remaining turns if stop was called
      if (state.round.stopCalled) {
        newRemainingTurns = Math.max(0, state.round.remainingTurns - 1);
        if (newRemainingTurns === 0) {
          endRound = true;
        }
      }
      
      const newState = {
        ...state,
        round: {
          ...state.round,
          currentPlayerIndex: nextPlayerIndex,
          turnNumber: state.round.turnNumber + 1,
          remainingTurns: newRemainingTurns,
        },
        ui: {
          ...state.ui,
          selectedCard: null,
          showingPeekCard: null,
          isActionInProgress: false, // Clear action in progress flag
        },
        lastAction: {
          type: action.type,
          playerId,
          details: { shouldEndRound: endRound },
          timestamp: Date.now(),
        },
      };
      
      // If round should end, automatically trigger END_ROUND
      if (endRound) {
        return gameReducer(newState, { type: 'END_ROUND', payload: {} });
      }
      
      return newState;
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

    case 'PEEK_CARD': {
      const { playerId, targetCardId } = action.payload;
      
      // Update player knowledge for the peeked card
      const updatedPlayers = updateCardKnowledge(
        state.players,
        playerId,
        targetCardId,
        state.round.turnNumber
      );
      
      // Automatically discard the drawn special card after using ability
      const drawnCardId = state.ui.selectedCard;
      const newDiscardPile = drawnCardId 
        ? addToDiscardPile(state.deck.discardPile, drawnCardId)
        : state.deck.discardPile;
      
      return {
        ...state,
        players: updatedPlayers,
        deck: {
          ...state.deck,
          discardPile: newDiscardPile,
        },
        ui: {
          ...state.ui,
          selectedCard: null, // Clear the drawn card
          showingPeekCard: targetCardId,
          currentModal: 'peek-result',
        },
        lastAction: {
          type: action.type,
          playerId,
          details: { targetCardId, discardedCardId: drawnCardId },
          timestamp: Date.now(),
        },
      };
    }

    case 'SWAP_CARDS': {
      const { playerId, playerCardIndex, targetPlayerId, targetCardIndex } = action.payload;
      
      const currentPlayerIndex = state.players.findIndex(p => p.id === playerId);
      const targetPlayerIndex = state.players.findIndex(p => p.id === targetPlayerId);
      
      if (currentPlayerIndex === -1 || targetPlayerIndex === -1) {
        return state;
      }
      
      const currentPlayer = state.players[currentPlayerIndex];
      const targetPlayer = state.players[targetPlayerIndex];
      
      if (playerCardIndex >= currentPlayer.cards.length || targetCardIndex >= targetPlayer.cards.length) {
        return state;
      }
      
      // Swap the cards using utility function
      const updatedPlayers = swapPlayerCards(
        state.players,
        playerId,
        playerCardIndex,
        targetPlayerId,
        targetCardIndex
      );
      
      // Automatically discard the drawn special card after using ability
      const drawnCardId = state.ui.selectedCard;
      const newDiscardPile = drawnCardId 
        ? addToDiscardPile(state.deck.discardPile, drawnCardId)
        : state.deck.discardPile;
      
      return {
        ...state,
        players: updatedPlayers,
        deck: {
          ...state.deck,
          discardPile: newDiscardPile,
        },
        ui: {
          ...state.ui,
          selectedCard: null, // Clear the drawn card
          currentModal: null,
        },
        lastAction: {
          type: action.type,
          playerId,
          details: { playerCardIndex, targetPlayerId, targetCardIndex, discardedCardId: drawnCardId },
          timestamp: Date.now(),
        },
      };
    }

    case 'USE_SPECIAL_ABILITY': {
      const { playerId, cardId, abilityType } = action.payload;
      
      // This action opens the appropriate modal for the special ability
      const modalType = abilityType === 'peek' ? 'PEEK_SELECTION' : 'SWAP_SELECTION';
      
      return {
        ...state,
        ui: {
          ...state.ui,
          currentModal: modalType,
        },
        lastAction: {
          type: action.type,
          playerId,
          details: { cardId, abilityType },
          timestamp: Date.now(),
        },
      };
    }

    case 'SKIP_SPECIAL_ABILITY': {
      const { playerId, cardId } = action.payload;
      
      return {
        ...state,
        ui: {
          ...state.ui,
          currentModal: null,
        },
        lastAction: {
          type: action.type,
          playerId,
          details: { cardId },
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