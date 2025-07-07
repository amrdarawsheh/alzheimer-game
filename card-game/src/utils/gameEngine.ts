// Game engine utilities for core game logic

import type { GameState, Player, Card, PlayerCard } from '../types';
import { GamePhase, Rank } from '../types';
import { GAME_CONFIG } from '../constants';
import { isDeckEmpty } from './deckUtils';

/**
 * Calculates the score for a player's hand
 * @param playerCards Array of player's cards
 * @param allCards Record of all cards in the game
 * @returns Total score for the hand
 */
export const calculatePlayerScore = (
  playerCards: PlayerCard[], 
  allCards: Record<string, Card>
): number => {
  return playerCards.reduce((total, playerCard) => {
    const card = allCards[playerCard.cardId];
    return total + (card ? card.value : 0);
  }, 0);
};

/**
 * Determines the winner of a round (player with lowest score)
 * @param players Array of players with calculated scores
 * @returns Winning player
 */
export const determineRoundWinner = (players: Player[]): Player => {
  if (players.length === 0) {
    throw new Error('Cannot determine winner with no players');
  }
  
  return players.reduce((lowest, current) => 
    current.score < lowest.score ? current : lowest
  );
};

/**
 * Checks if a match is complete (someone has reached the required round wins)
 * @param roundWins Record of player ID to round wins
 * @param roundsToWin Number of rounds needed to win
 * @returns Winner ID or null if no winner yet
 */
export const checkMatchWinner = (
  roundWins: Record<string, number>,
  roundsToWin: number
): string | null => {
  const winner = Object.entries(roundWins).find(
    ([, wins]) => wins >= roundsToWin
  );
  
  return winner ? winner[0] : null;
};

/**
 * Validates if a player can perform an action
 * @param gameState Current game state
 * @param playerId ID of player attempting action
 * @returns True if player can act
 */
export const canPlayerAct = (gameState: GameState, playerId: string): boolean => {
  // Game must be in playing phase
  if (gameState.round.phase !== GamePhase.PLAYING) {
    return false;
  }
  
  // Must be the player's turn
  const currentPlayer = gameState.players[gameState.round.currentPlayerIndex];
  if (!currentPlayer || currentPlayer.id !== playerId) {
    return false;
  }
  
  // Player must be active
  return currentPlayer.isActive;
};

/**
 * Validates if a stop can be called
 * @param gameState Current game state
 * @param playerId ID of player calling stop
 * @returns True if stop can be called
 */
export const canCallStop = (gameState: GameState, playerId: string): boolean => {
  // Must be able to act
  if (!canPlayerAct(gameState, playerId)) {
    return false;
  }
  
  // Stop hasn't been called yet
  if (gameState.round.stopCalled) {
    return false;
  }
  
  // Game must be in playing phase
  return gameState.round.phase === GamePhase.PLAYING;
};

/**
 * Checks if the round should end automatically
 * @param gameState Current game state
 * @returns True if round should end
 */
export const shouldEndRound = (gameState: GameState): boolean => {
  // Deck is empty
  if (isDeckEmpty(gameState.deck.drawPile)) {
    return true;
  }
  
  // Stop was called and no more turns remaining
  if (gameState.round.stopCalled && gameState.round.remainingTurns <= 0) {
    return true;
  }
  
  return false;
};

/**
 * Alias for shouldEndRound - checks if round should end
 * @param gameState Current game state
 * @returns True if round should end
 */
export const checkRoundEnd = (gameState: GameState): boolean => {
  return shouldEndRound(gameState);
};

/**
 * Calculates remaining turns after stop is called
 * @param players Array of players
 * @param currentPlayerIndex Index of current player
 * @param stopCalledBy ID of player who called stop
 * @returns Number of remaining turns
 */
export const calculateRemainingTurns = (
  players: Player[],
  _currentPlayerIndex: number,
  _stopCalledBy: string
): number => {
  // All other players get exactly one more turn
  const stopCallerIndex = players.findIndex(p => p.id === _stopCalledBy);
  if (stopCallerIndex === -1) {
    return 0;
  }
  
  // If the stop caller is the current player, everyone else gets a turn
  // Otherwise, we need to account for players who haven't had their turn yet this round
  return players.length - 1;
};

/**
 * Gets the next player index in turn order
 * @param currentIndex Current player index
 * @param playerCount Total number of players
 * @returns Next player index
 */
export const getNextPlayerIndex = (
  currentIndex: number, 
  playerCount: number
): number => {
  return (currentIndex + 1) % playerCount;
};

/**
 * Validates game state consistency
 * @param gameState Current game state
 * @returns Array of validation errors (empty if valid)
 */
export const validateGameState = (gameState: GameState): string[] => {
  const errors: string[] = [];
  
  // Check player count
  if (gameState.players.length < GAME_CONFIG.MIN_PLAYERS || 
      gameState.players.length > GAME_CONFIG.MAX_PLAYERS) {
    errors.push(`Invalid player count: ${gameState.players.length}`);
  }
  
  // Check each player has correct number of cards (during play)
  if (gameState.round.phase === GamePhase.PLAYING || 
      gameState.round.phase === GamePhase.SCORING) {
    gameState.players.forEach((player, index) => {
      if (player.cards.length !== GAME_CONFIG.CARDS_PER_PLAYER) {
        errors.push(`Player ${index} has ${player.cards.length} cards, expected ${GAME_CONFIG.CARDS_PER_PLAYER}`);
      }
    });
  }
  
  // Check current player index
  if (gameState.round.currentPlayerIndex < 0 || 
      gameState.round.currentPlayerIndex >= gameState.players.length) {
    errors.push(`Invalid current player index: ${gameState.round.currentPlayerIndex}`);
  }
  
  // Check deck consistency
  const totalCardsInGame = gameState.deck.drawPile.length + 
                          gameState.deck.discardPile.length +
                          gameState.players.reduce((sum, player) => sum + player.cards.length, 0);
  
  if (totalCardsInGame !== GAME_CONFIG.DECK_SIZE) {
    errors.push(`Total cards in game: ${totalCardsInGame}, expected: ${GAME_CONFIG.DECK_SIZE}`);
  }
  
  // Check round wins consistency
  const totalRoundWins = Object.values(gameState.match.roundWins)
    .reduce((sum, wins) => sum + wins, 0);
  
  if (totalRoundWins !== gameState.match.currentRound - 1 && 
      gameState.round.phase !== GamePhase.SETUP) {
    errors.push(`Round wins (${totalRoundWins}) don't match current round (${gameState.match.currentRound})`);
  }
  
  return errors;
};

/**
 * Creates initial game statistics
 * @param gameState Current game state
 * @returns Game statistics object
 */
export const getGameStatistics = (gameState: GameState) => {
  const currentPlayer = gameState.players[gameState.round.currentPlayerIndex];
  
  return {
    // Basic game info
    gameId: gameState.gameId,
    phase: gameState.round.phase,
    currentRound: gameState.match.currentRound,
    turnNumber: gameState.round.turnNumber,
    
    // Player info
    playerCount: gameState.players.length,
    currentPlayerName: currentPlayer?.name || 'None',
    currentPlayerId: currentPlayer?.id || null,
    
    // Deck info
    cardsInDeck: gameState.deck.drawPile.length,
    cardsInDiscard: gameState.deck.discardPile.length,
    deckEmpty: isDeckEmpty(gameState.deck.drawPile),
    
    // Round info
    roundsToWin: gameState.match.roundsToWin,
    stopCalled: gameState.round.stopCalled,
    stopCalledBy: gameState.round.stopCalledBy,
    remainingTurns: gameState.round.remainingTurns,
    
    // Match info
    matchWinner: gameState.match.winner,
    roundWins: gameState.match.roundWins,
    
    // Player scores (only available during/after scoring)
    playerScores: gameState.round.phase === GamePhase.SCORING || 
                 gameState.round.phase === GamePhase.FINISHED
      ? gameState.players.map(p => ({ id: p.id, name: p.name, score: p.score }))
      : null,
  };
};

/**
 * Checks if a player can draw from a specific source
 * @param gameState Current game state
 * @param playerId Player ID
 * @param source Draw source
 * @returns True if draw is allowed
 */
export const canDrawFromSource = (
  gameState: GameState, 
  playerId: string, 
  source: 'deck' | 'discard'
): boolean => {
  // Must be able to act
  if (!canPlayerAct(gameState, playerId)) {
    return false;
  }
  
  // Must not have already drawn a card this turn
  if (gameState.ui.selectedCard) {
    return false;
  }
  
  // Check if source has cards
  if (source === 'deck') {
    return gameState.deck.drawPile.length > 0;
  } else {
    return gameState.deck.discardPile.length > 0;
  }
};

/**
 * Checks if a card replacement is valid
 * @param gameState Current game state
 * @param playerId Player ID
 * @param cardIndex Index of card to replace
 * @returns True if replacement is valid
 */
export const canReplaceCardAt = (
  gameState: GameState,
  playerId: string,
  cardIndex: number
): boolean => {
  // Must be able to act
  if (!canPlayerAct(gameState, playerId)) {
    return false;
  }
  
  // Must have a drawn card selected
  if (!gameState.ui.selectedCard) {
    return false;
  }
  
  // Card index must be valid
  if (cardIndex < 0 || cardIndex >= GAME_CONFIG.CARDS_PER_PLAYER) {
    return false;
  }
  
  return true;
};

/**
 * Gets available actions for the current player
 * @param gameState Current game state
 * @returns Array of available action types
 */
export const getAvailableActions = (gameState: GameState): string[] => {
  const actions: string[] = [];
  const currentPlayer = gameState.players[gameState.round.currentPlayerIndex];
  
  if (!currentPlayer || gameState.round.phase !== GamePhase.PLAYING) {
    return actions;
  }
  
  const hasDrawnCard = !!gameState.ui.selectedCard;
  
  if (!hasDrawnCard) {
    // Can draw from sources
    if (canDrawFromSource(gameState, currentPlayer.id, 'deck')) {
      actions.push('DRAW_FROM_DECK');
    }
    if (canDrawFromSource(gameState, currentPlayer.id, 'discard')) {
      actions.push('DRAW_FROM_DISCARD');
    }
  } else {
    // Can replace cards or discard
    for (let i = 0; i < GAME_CONFIG.CARDS_PER_PLAYER; i++) {
      if (canReplaceCardAt(gameState, currentPlayer.id, i)) {
        actions.push(`REPLACE_CARD_${i}`);
      }
    }
    actions.push('DISCARD_DRAWN_CARD');
    
    // Check for special abilities
    const drawnCard = gameState.ui.selectedCard ? gameState.cards[gameState.ui.selectedCard] : null;
    if (drawnCard && detectSpecialCard(drawnCard, 'deck')) {
      actions.push('USE_SPECIAL_ABILITY');
    }
  }
  
  // Can call stop (if conditions are met)
  if (canCallStop(gameState, currentPlayer.id)) {
    actions.push('CALL_STOP');
  }
  
  return actions;
};

/**
 * Detects if a card has special abilities
 * @param card The card to check
 * @param drawSource Where the card was drawn from
 * @returns True if card has special abilities
 */
export const detectSpecialCard = (
  card: Card, 
  drawSource: 'deck' | 'discard' | 'swap'
): boolean => {
  // Special abilities only trigger when drawn from the main deck
  if (drawSource !== 'deck') {
    return false;
  }
  
  return card.isSpecial && (card.rank === Rank.QUEEN || card.rank === Rank.JACK);
};

/**
 * Validates if a turn action is legal
 * @param gameState Current game state
 * @param playerId Player attempting the action
 * @param actionType Type of action being attempted
 * @returns True if action is valid
 */
export const validateTurnAction = (
  gameState: GameState,
  playerId: string,
  actionType: string
): boolean => {
  // Must be player's turn
  if (!canPlayerAct(gameState, playerId)) {
    return false;
  }
  
  const hasDrawnCard = !!gameState.ui.selectedCard;
  
  switch (actionType) {
    case 'DRAW_FROM_DECK':
    case 'DRAW_FROM_DISCARD':
      // Can only draw if haven't drawn this turn
      return !hasDrawnCard;
      
    case 'REPLACE_CARD':
    case 'DISCARD_DRAWN_CARD':
      // Can only replace/discard if have drawn a card
      return hasDrawnCard;
      
    case 'CALL_STOP':
      // Can call stop if conditions are met
      return canCallStop(gameState, playerId);
      
    case 'USE_SPECIAL_ABILITY': {
      // Can use special ability if have drawn special card
      if (!hasDrawnCard) return false;
      const drawnCard = gameState.cards[gameState.ui.selectedCard!];
      return detectSpecialCard(drawnCard, 'deck');
    }
      
    default:
      return false;
  }
};

/**
 * Enhanced version of getGameStatistics with comprehensive analysis
 * @param gameState Current game state
 * @returns Comprehensive game statistics
 */
export const calculateGameStatistics = (gameState: GameState) => {
  const currentPlayer = gameState.players[gameState.round.currentPlayerIndex];
  const activePlayers = gameState.players.filter(p => p.isActive);
  
  // Calculate turn progress
  const totalTurns = gameState.round.turnNumber;
  const averageTurnsPerPlayer = totalTurns / gameState.players.length;
  
  // Calculate score statistics
  const playerScores = gameState.players.map(p => p.score).filter(score => score > 0);
  const averageScore = playerScores.length > 0 
    ? playerScores.reduce((sum, score) => sum + score, 0) / playerScores.length 
    : 0;
  
  // Calculate deck progress
  const totalCards = GAME_CONFIG.DECK_SIZE;
  const cardsRemaining = gameState.deck.drawPile.length;
  const deckProgress = ((totalCards - cardsRemaining) / totalCards) * 100;
  
  return {
    // Basic game info
    gameId: gameState.gameId,
    phase: gameState.round.phase,
    currentRound: gameState.match.currentRound,
    turnNumber: gameState.round.turnNumber,
    
    // Player info
    playerCount: gameState.players.length,
    activePlayers: activePlayers.length,
    currentPlayerName: currentPlayer?.name || 'None',
    currentPlayerId: currentPlayer?.id || null,
    
    // Deck info
    cardsInDeck: gameState.deck.drawPile.length,
    cardsInDiscard: gameState.deck.discardPile.length,
    deckEmpty: isDeckEmpty(gameState.deck.drawPile),
    deckProgress: Math.round(deckProgress),
    
    // Turn progression
    totalTurns,
    averageTurnsPerPlayer: Math.round(averageTurnsPerPlayer * 100) / 100,
    
    // Round info
    roundsToWin: gameState.match.roundsToWin,
    stopCalled: gameState.round.stopCalled,
    stopCalledBy: gameState.round.stopCalledBy,
    remainingTurns: gameState.round.remainingTurns,
    
    // Match info
    matchWinner: gameState.match.winner,
    roundWins: gameState.match.roundWins,
    
    // Score statistics
    averageScore: Math.round(averageScore * 100) / 100,
    playerScores: gameState.round.phase === GamePhase.SCORING || 
                 gameState.round.phase === GamePhase.FINISHED
      ? gameState.players.map(p => ({ id: p.id, name: p.name, score: p.score }))
      : null,
      
    // Game state validation
    isValidState: validateGameState(gameState).length === 0,
    stateErrors: validateGameState(gameState),
  };
};

/**
 * Provides detailed turn analysis for debugging
 * @param gameState Current game state
 * @returns Turn analysis object
 */
export const analyzeTurn = (gameState: GameState) => {
  const currentPlayer = gameState.players[gameState.round.currentPlayerIndex];
  const availableActions = getAvailableActions(gameState);
  const hasDrawnCard = !!gameState.ui.selectedCard;
  
  return {
    currentPlayer: {
      id: currentPlayer?.id || null,
      name: currentPlayer?.name || 'None',
      type: currentPlayer?.type || null,
      isActive: currentPlayer?.isActive || false,
      cardCount: currentPlayer?.cards.length || 0,
      score: currentPlayer?.score || 0,
    },
    
    turnState: {
      hasDrawnCard,
      drawnCardId: gameState.ui.selectedCard,
      availableActions,
      canCallStop: currentPlayer ? canCallStop(gameState, currentPlayer.id) : false,
      validActionsCount: availableActions.length,
    },
    
    gameProgression: {
      phase: gameState.round.phase,
      turnNumber: gameState.round.turnNumber,
      roundNumber: gameState.match.currentRound,
      stopCalled: gameState.round.stopCalled,
      remainingTurns: gameState.round.remainingTurns,
      shouldEnd: checkRoundEnd(gameState),
    },
    
    deckState: {
      drawPileSize: gameState.deck.drawPile.length,
      discardPileSize: gameState.deck.discardPile.length,
      isEmpty: gameState.deck.isEmpty,
      topDiscardCard: gameState.deck.discardPile.length > 0 
        ? gameState.deck.discardPile[gameState.deck.discardPile.length - 1]
        : null,
    },
  };
};