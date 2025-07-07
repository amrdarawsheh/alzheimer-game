// Player utilities for management and bot AI

import type { Player, GameState, BotMove } from '../types';
import { PlayerType } from '../types';
import { GAME_CONFIG, BOT_CONFIG } from '../constants';
import { canDrawFromSource, canReplaceCardAt, canCallStop } from './gameEngine';

/**
 * Generates a unique player ID
 */
export const generatePlayerId = (): string => {
  return `player-${Math.random().toString(36).substr(2, 9)}-${Date.now()}`;
};

/**
 * Creates a new player
 * @param name Player name
 * @param type Player type (human or bot)
 * @param index Player index for ID generation
 * @returns New player object
 */
export const createPlayer = (
  name: string, 
  type: PlayerType, 
  index?: number
): Player => {
  return {
    id: index !== undefined ? `player-${index}` : generatePlayerId(),
    name,
    type,
    cards: [],
    score: 0,
    isActive: true,
    roundWins: 0,
  };
};

/**
 * Creates multiple players for a game
 * @param playerCount Number of players
 * @param playerNames Array of player names
 * @returns Array of players (first is human, rest are bots)
 */
export const createPlayers = (
  playerCount: number, 
  playerNames: string[]
): Player[] => {
  const players: Player[] = [];
  
  for (let i = 0; i < playerCount; i++) {
    const isHuman = i === 0; // First player is human
    const defaultName = isHuman ? 'Player' : `Bot ${i}`;
    const name = playerNames[i] || defaultName;
    
    players.push(createPlayer(name, isHuman ? PlayerType.HUMAN : PlayerType.BOT, i));
  }
  
  return players;
};

/**
 * Gets a player by ID
 * @param players Array of players
 * @param playerId Player ID to find
 * @returns Player or null if not found
 */
export const getPlayerById = (players: Player[], playerId: string): Player | null => {
  return players.find(player => player.id === playerId) || null;
};

/**
 * Gets the current player based on game state
 * @param gameState Current game state
 * @returns Current player or null
 */
export const getCurrentPlayer = (gameState: GameState): Player | null => {
  const currentIndex = gameState.round.currentPlayerIndex;
  return gameState.players[currentIndex] || null;
};

/**
 * Checks if a player is a bot
 * @param player Player to check
 * @returns True if player is a bot
 */
export const isBot = (player: Player): boolean => {
  return player.type === PlayerType.BOT;
};

/**
 * Checks if a player is human
 * @param player Player to check
 * @returns True if player is human
 */
export const isHuman = (player: Player): boolean => {
  return player.type === PlayerType.HUMAN;
};

/**
 * Estimates a player's current score based on known cards
 * @param player Player to estimate score for
 * @param allCards All cards in the game
 * @returns Estimated score
 */
export const estimatePlayerScore = (
  player: Player, 
  allCards: Record<string, unknown>
): number => {
  let knownScore = 0;
  let unknownCards = 0;
  
  player.cards.forEach(playerCard => {
    if (playerCard.isKnownToPlayer) {
      const card = allCards[playerCard.cardId];
      knownScore += (card && typeof card === 'object' && 'value' in card) ? (card as any).value : 0;
    } else {
      unknownCards++;
    }
  });
  
  // Estimate unknown cards as average card value (approximately 5.5)
  const estimatedUnknownScore = unknownCards * 5.5;
  
  return knownScore + estimatedUnknownScore;
};

/**
 * Easy bot decision making (random but valid moves)
 */
export class EasyBot {
  /**
   * Decides whether to draw from deck or discard pile
   * @param gameState Current game state
   * @returns Draw source or null if can't draw
   */
  static decideDraw(gameState: GameState): 'deck' | 'discard' | null {
    const currentPlayer = getCurrentPlayer(gameState);
    if (!currentPlayer) return null;
    
    const canDrawDeck = canDrawFromSource(gameState, currentPlayer.id, 'deck');
    const canDrawDiscard = canDrawFromSource(gameState, currentPlayer.id, 'discard');
    
    if (!canDrawDeck && !canDrawDiscard) return null;
    if (canDrawDeck && !canDrawDiscard) return 'deck';
    if (!canDrawDeck && canDrawDiscard) return 'discard';
    
    // Both available - random choice (slight preference for deck)
    return Math.random() > 0.3 ? 'deck' : 'discard';
  }
  
  /**
   * Decides which card to replace or whether to discard
   * @param gameState Current game state
   * @returns Card index to replace or null to discard
   */
  static decideReplace(gameState: GameState): number | null {
    const currentPlayer = getCurrentPlayer(gameState);
    if (!currentPlayer || !gameState.ui.selectedCard) return null;
    
    // Find valid replacement indices
    const validIndices: number[] = [];
    for (let i = 0; i < GAME_CONFIG.CARDS_PER_PLAYER; i++) {
      if (canReplaceCardAt(gameState, currentPlayer.id, i)) {
        validIndices.push(i);
      }
    }
    
    if (validIndices.length === 0) return null;
    
    // Random choice between replacing and discarding (70% chance to replace)
    if (Math.random() > 0.7) return null; // Discard
    
    // Random card replacement
    return validIndices[Math.floor(Math.random() * validIndices.length)];
  }
  
  /**
   * Decides whether to call stop
   * @param gameState Current game state
   * @returns True if bot should call stop
   */
  static decideStop(gameState: GameState): boolean {
    const currentPlayer = getCurrentPlayer(gameState);
    if (!currentPlayer || !canCallStop(gameState, currentPlayer.id)) {
      return false;
    }
    
    // Easy bot calls stop randomly (low probability)
    return Math.random() < 0.1; // 10% chance per turn
  }
  
  /**
   * Decides whether to use a special ability
   * @returns True if bot should use the ability
   */
  static decideSpecialAbility(): boolean {
    // Easy bot uses abilities randomly (50% chance)
    return Math.random() > 0.5;
  }
  
  /**
   * Generates a complete bot move
   * @param gameState Current game state
   * @returns Bot move object
   */
  static generateMove(gameState: GameState): BotMove | null {
    const currentPlayer = getCurrentPlayer(gameState);
    if (!currentPlayer || !isBot(currentPlayer)) return null;
    
    const hasDrawnCard = !!gameState.ui.selectedCard;
    
    if (!hasDrawnCard) {
      // Decide what to draw
      const drawSource = this.decideDraw(gameState);
      if (!drawSource) return null;
      
      return {
        action: drawSource === 'deck' ? 'draw_deck' : 'draw_discard',
      };
    } else {
      // Decide whether to call stop first
      if (this.decideStop(gameState)) {
        return { action: 'call_stop' };
      }
      
      // Decide whether to replace or discard
      const replaceIndex = this.decideReplace(gameState);
      if (replaceIndex !== null) {
        return {
          action: 'replace_card',
          cardIndex: replaceIndex,
        };
      } else {
        return { action: 'discard_card' };
      }
    }
  }
}

/**
 * Adds thinking delay for bot actions (for realism)
 * @param minDelay Minimum delay in milliseconds
 * @param maxDelay Maximum delay in milliseconds
 * @returns Promise that resolves after the delay
 */
export const addBotThinkingDelay = (
  minDelay: number = BOT_CONFIG.THINKING_DELAY.min,
  maxDelay: number = BOT_CONFIG.THINKING_DELAY.max
): Promise<void> => {
  const delay = Math.random() * (maxDelay - minDelay) + minDelay;
  return new Promise(resolve => setTimeout(resolve, delay));
};

/**
 * Gets player statistics
 * @param player Player to get stats for
 * @param allCards All cards in the game
 * @returns Player statistics object
 */
export const getPlayerStats = (player: Player, allCards: Record<string, unknown>) => {
  const knownCards = player.cards.filter(card => card.isKnownToPlayer).length;
  const revealedCards = player.cards.filter(card => card.isRevealed).length;
  
  return {
    id: player.id,
    name: player.name,
    type: player.type,
    isActive: player.isActive,
    roundWins: player.roundWins,
    currentScore: player.score,
    estimatedScore: estimatePlayerScore(player, allCards),
    knownCards,
    totalCards: player.cards.length,
    revealedCards,
    cardsInHand: player.cards.length - revealedCards,
  };
};

/**
 * Validates player data
 * @param player Player to validate
 * @returns Array of validation errors
 */
export const validatePlayer = (player: Player): string[] => {
  const errors: string[] = [];
  
  if (!player.id) {
    errors.push('Player must have an ID');
  }
  
  if (!player.name || player.name.trim().length === 0) {
    errors.push('Player must have a name');
  }
  
  if (!Object.values(PlayerType).includes(player.type)) {
    errors.push(`Invalid player type: ${player.type}`);
  }
  
  if (player.score < 0) {
    errors.push('Player score cannot be negative');
  }
  
  if (player.roundWins < 0) {
    errors.push('Player round wins cannot be negative');
  }
  
  if (player.cards.length > GAME_CONFIG.CARDS_PER_PLAYER) {
    errors.push(`Player has too many cards: ${player.cards.length}`);
  }
  
  return errors;
};