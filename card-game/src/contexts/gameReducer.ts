import type { GameState, GameAction, Player, PlayerCard, Card } from '../types';
import { GamePhase, PlayerType, Rank } from '../types';
import { GAME_CONFIG, CARD_VALUES, STANDARD_RANKS, ALL_SUITS } from '../constants';

// Utility functions for the reducer
const generateCardId = (): string => {
  return `card-${Math.random().toString(36).substr(2, 9)}`;
};

const createDeck = (): Record<string, Card> => {
  const cards: Record<string, Card> = {};
  
  // Create standard cards
  ALL_SUITS.forEach(suit => {
    STANDARD_RANKS.forEach(rank => {
      const id = generateCardId();
      cards[id] = {
        id,
        suit,
        rank,
        value: CARD_VALUES[rank],
        isSpecial: rank === Rank.QUEEN || rank === Rank.JACK,
      };
    });
  });

  // Create jokers
  for (let i = 0; i < GAME_CONFIG.JOKER_COUNT; i++) {
    const id = generateCardId();
    cards[id] = {
      id,
      suit: null,
      rank: Rank.JOKER,
      value: CARD_VALUES[Rank.JOKER],
      isSpecial: false,
    };
  }

  return cards;
};

const shuffleArray = <T>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const createPlayers = (playerCount: number, playerNames: string[]): Player[] => {
  const players: Player[] = [];
  
  for (let i = 0; i < playerCount; i++) {
    const isHuman = i === 0; // First player is human
    players.push({
      id: `player-${i}`,
      name: playerNames[i] || `${isHuman ? 'Player' : 'Bot'} ${i + 1}`,
      type: isHuman ? PlayerType.HUMAN : PlayerType.BOT,
      cards: [],
      score: 0,
      isActive: true,
      roundWins: 0,
    });
  }
  
  return players;
};

const dealInitialCards = (
  players: Player[],
  cardIds: string[]
): { updatedPlayers: Player[]; remainingCards: string[] } => {
  const updatedPlayers = [...players];
  const remainingCards = [...cardIds];
  
  // Deal 4 cards to each player
  updatedPlayers.forEach(player => {
    const playerCards: PlayerCard[] = [];
    
    for (let i = 0; i < GAME_CONFIG.CARDS_PER_PLAYER; i++) {
      const cardId = remainingCards.pop()!;
      playerCards.push({
        cardId,
        isRevealed: false,
        isKnownToPlayer: i < GAME_CONFIG.INITIAL_KNOWN_CARDS, // First 2 cards are known
      });
    }
    
    player.cards = playerCards;
  });
  
  return { updatedPlayers, remainingCards };
};

const calculatePlayerScore = (playerCards: PlayerCard[], allCards: Record<string, Card>): number => {
  return playerCards.reduce((total, playerCard) => {
    const card = allCards[playerCard.cardId];
    return total + (card ? card.value : 0);
  }, 0);
};

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
      const cardIds = shuffleArray(Object.keys(allCards));
      
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
          phase: GamePhase.PLAYING,
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

    case 'START_ROUND': {
      // Create and shuffle a new deck
      const allCards = createDeck();
      const cardIds = shuffleArray(Object.keys(allCards));
      
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
      const winner = updatedPlayers.reduce((lowest, current) => 
        current.score < lowest.score ? current : lowest
      );
      
      // Update round wins
      const updatedRoundWins = { ...state.match.roundWins };
      updatedRoundWins[winner.id] = (updatedRoundWins[winner.id] || 0) + 1;
      
      // Check if someone won the match
      const matchWinner = Object.entries(updatedRoundWins).find(
        ([, wins]) => wins >= state.match.roundsToWin
      )?.[0] || null;
      
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
      
      if (state.deck.drawPile.length === 0) {
        return state; // Cannot draw from empty deck
      }
      
      const drawnCardId = state.deck.drawPile[state.deck.drawPile.length - 1];
      const newDrawPile = state.deck.drawPile.slice(0, -1);
      
      return {
        ...state,
        deck: {
          ...state.deck,
          drawPile: newDrawPile,
          isEmpty: newDrawPile.length === 0,
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

    case 'DRAW_FROM_DISCARD': {
      const { playerId } = action.payload;
      
      if (state.deck.discardPile.length === 0) {
        return state; // Cannot draw from empty discard pile
      }
      
      const drawnCardId = state.deck.discardPile[state.deck.discardPile.length - 1];
      const newDiscardPile = state.deck.discardPile.slice(0, -1);
      
      return {
        ...state,
        deck: {
          ...state.deck,
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
      const replacedCardId = player.cards[cardIndex].cardId;
      
      // Update player's cards
      const updatedPlayers = [...state.players];
      updatedPlayers[playerIndex] = {
        ...player,
        cards: player.cards.map((card, index) => 
          index === cardIndex 
            ? { ...card, cardId: drawnCardId, isKnownToPlayer: true }
            : card
        ),
      };
      
      // Add replaced card to discard pile
      const newDiscardPile = [...state.deck.discardPile, replacedCardId];
      
      // Check if drawn card has special ability
      const drawnCard = state.cards[drawnCardId];
      const hasSpecialAbility = drawnCard && drawnCard.isSpecial && 
        (drawnCard.rank === Rank.QUEEN || drawnCard.rank === Rank.JACK);
      
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
          currentModal: hasSpecialAbility ? drawnCard.rank : null,
        },
        lastAction: {
          type: action.type,
          playerId,
          details: { cardIndex, drawnCardId, replacedCardId, hasSpecialAbility },
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
      const newDiscardPile = [...state.deck.discardPile, drawnCardId];
      
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
      const nextPlayerIndex = (state.round.currentPlayerIndex + 1) % state.players.length;
      let shouldEndRound = false;
      let newRemainingTurns = state.round.remainingTurns;
      
      // Check for automatic round end conditions
      if (state.deck.isEmpty) {
        shouldEndRound = true;
      } else if (state.round.stopCalled) {
        newRemainingTurns = Math.max(0, state.round.remainingTurns - 1);
        if (newRemainingTurns === 0) {
          shouldEndRound = true;
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
        },
        lastAction: {
          type: action.type,
          playerId,
          details: { shouldEndRound },
          timestamp: Date.now(),
        },
      };
      
      // If round should end, automatically trigger END_ROUND
      if (shouldEndRound) {
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
      
      // Find the target card and update player knowledge
      let updatedPlayers = [...state.players];
      const currentPlayerIndex = updatedPlayers.findIndex(p => p.id === playerId);
      
      if (currentPlayerIndex !== -1) {
        // Update knowledge for the target card
        updatedPlayers = updatedPlayers.map(player => ({
          ...player,
          cards: player.cards.map(card => 
            card.cardId === targetCardId 
              ? { ...card, isKnownToPlayer: player.id === playerId }
              : card
          ),
        }));
      }
      
      return {
        ...state,
        players: updatedPlayers,
        ui: {
          ...state.ui,
          showingPeekCard: targetCardId,
          currentModal: null,
        },
        lastAction: {
          type: action.type,
          playerId,
          details: { targetCardId },
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
      
      // Swap the cards
      const updatedPlayers = [...state.players];
      const currentPlayerCard = currentPlayer.cards[playerCardIndex];
      const targetPlayerCard = targetPlayer.cards[targetCardIndex];
      
      updatedPlayers[currentPlayerIndex] = {
        ...currentPlayer,
        cards: currentPlayer.cards.map((card, index) =>
          index === playerCardIndex ? { ...targetPlayerCard, isKnownToPlayer: false } : card
        ),
      };
      
      updatedPlayers[targetPlayerIndex] = {
        ...targetPlayer,
        cards: targetPlayer.cards.map((card, index) =>
          index === targetCardIndex ? { ...currentPlayerCard, isKnownToPlayer: false } : card
        ),
      };
      
      return {
        ...state,
        players: updatedPlayers,
        ui: {
          ...state.ui,
          currentModal: null,
        },
        lastAction: {
          type: action.type,
          playerId,
          details: { playerCardIndex, targetPlayerId, targetCardIndex },
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