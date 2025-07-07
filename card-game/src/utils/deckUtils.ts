// Deck management utilities

import type { Card, Player, PlayerCard } from '../types';
import { Rank } from '../types';
import { GAME_CONFIG, CARD_VALUES, STANDARD_RANKS, ALL_SUITS } from '../constants';

/**
 * Generates a unique card ID
 */
export const generateCardId = (): string => {
  return `card-${Math.random().toString(36).substr(2, 9)}-${Date.now()}`;
};

/**
 * Creates a complete deck of 54 cards (52 standard + 2 jokers)
 * @returns Record of cardId -> Card
 */
export const createDeck = (): Record<string, Card> => {
  const cards: Record<string, Card> = {};
  
  // Create standard cards (4 suits × 13 ranks = 52 cards)
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

  // Create jokers (2 cards)
  for (let i = 0; i < GAME_CONFIG.JOKER_COUNT; i++) {
    const id = generateCardId();
    cards[id] = {
      id,
      suit: null, // Jokers have no suit
      rank: Rank.JOKER,
      value: CARD_VALUES[Rank.JOKER],
      isSpecial: false, // Jokers don't have special abilities
    };
  }

  return cards;
};

/**
 * Shuffles an array using Fisher-Yates algorithm
 * @param array Array to shuffle
 * @returns New shuffled array
 */
export const shuffleArray = <T>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

/**
 * Creates shuffled array of card IDs from a deck
 * @param cards Record of cards
 * @returns Shuffled array of card IDs
 */
export const shuffleDeck = (cards: Record<string, Card>): string[] => {
  const cardIds = Object.keys(cards);
  return shuffleArray(cardIds);
};

/**
 * Deals initial cards to players
 * @param players Array of players
 * @param cardIds Shuffled array of card IDs
 * @returns Object with updated players and remaining cards
 */
export const dealInitialCards = (
  players: Player[],
  cardIds: string[]
): { updatedPlayers: Player[]; remainingCards: string[] } => {
  const updatedPlayers = [...players];
  const remainingCards = [...cardIds];
  
  // Deal cards to each player
  updatedPlayers.forEach(player => {
    const playerCards: PlayerCard[] = [];
    
    for (let i = 0; i < GAME_CONFIG.CARDS_PER_PLAYER; i++) {
      const cardId = remainingCards.pop();
      if (!cardId) {
        throw new Error('Not enough cards in deck to deal to all players');
      }
      
      playerCards.push({
        cardId,
        isRevealed: false,
        isKnownToPlayer: i < GAME_CONFIG.INITIAL_KNOWN_CARDS, // First 2 cards are known
        lastSeenTurn: i < GAME_CONFIG.INITIAL_KNOWN_CARDS ? 0 : undefined,
      });
    }
    
    player.cards = playerCards;
  });
  
  return { updatedPlayers, remainingCards };
};

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
 * Determines if a card has a special ability when drawn from deck
 * @param card The card to check
 * @param drawSource Where the card was drawn from
 * @returns True if the card should trigger a special ability
 */
export const hasSpecialAbility = (
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
 * Validates if a card draw action is legal
 * @param drawPile Current draw pile
 * @param discardPile Current discard pile
 * @param source Source to draw from
 * @returns True if the draw is valid
 */
export const canDrawFrom = (
  drawPile: string[],
  discardPile: string[],
  source: 'deck' | 'discard'
): boolean => {
  if (source === 'deck') {
    return drawPile.length > 0;
  } else {
    return discardPile.length > 0;
  }
};

/**
 * Draws a card from the specified source
 * @param drawPile Current draw pile
 * @param discardPile Current discard pile
 * @param source Source to draw from
 * @returns Object with drawn card ID and updated piles
 */
export const drawCard = (
  drawPile: string[],
  discardPile: string[],
  source: 'deck' | 'discard'
): { 
  drawnCardId: string | null; 
  newDrawPile: string[]; 
  newDiscardPile: string[] 
} => {
  if (!canDrawFrom(drawPile, discardPile, source)) {
    return {
      drawnCardId: null,
      newDrawPile: drawPile,
      newDiscardPile: discardPile,
    };
  }
  
  if (source === 'deck') {
    const drawnCardId = drawPile[drawPile.length - 1];
    const newDrawPile = drawPile.slice(0, -1);
    return {
      drawnCardId,
      newDrawPile,
      newDiscardPile: discardPile,
    };
  } else {
    const drawnCardId = discardPile[discardPile.length - 1];
    const newDiscardPile = discardPile.slice(0, -1);
    return {
      drawnCardId,
      newDrawPile: drawPile,
      newDiscardPile,
    };
  }
};

/**
 * Adds a card to the discard pile
 * @param discardPile Current discard pile
 * @param cardId Card to add
 * @returns New discard pile
 */
export const addToDiscardPile = (
  discardPile: string[],
  cardId: string
): string[] => {
  return [...discardPile, cardId];
};

/**
 * Checks if the deck is empty (used for automatic round end)
 * @param drawPile Current draw pile
 * @returns True if deck is empty
 */
export const isDeckEmpty = (drawPile: string[]): boolean => {
  return drawPile.length === 0;
};

/**
 * Gets the top card of the discard pile
 * @param discardPile Current discard pile
 * @returns Card ID of top card, or null if empty
 */
export const getTopDiscardCard = (discardPile: string[]): string | null => {
  return discardPile.length > 0 ? discardPile[discardPile.length - 1] : null;
};

/**
 * Validates a card replacement action
 * @param player The player making the replacement
 * @param cardIndex Index of card to replace
 * @returns True if the replacement is valid
 */
export const canReplaceCard = (player: Player, cardIndex: number): boolean => {
  return (
    cardIndex >= 0 && 
    cardIndex < GAME_CONFIG.CARDS_PER_PLAYER && 
    player.cards.length === GAME_CONFIG.CARDS_PER_PLAYER
  );
};

/**
 * Replaces a card in a player's hand
 * @param player The player
 * @param cardIndex Index of card to replace
 * @param newCardId ID of new card
 * @param turnNumber Current turn number for tracking
 * @returns Object with updated player and replaced card ID
 */
export const replacePlayerCard = (
  player: Player,
  cardIndex: number,
  newCardId: string,
  turnNumber: number
): { updatedPlayer: Player; replacedCardId: string } => {
  if (!canReplaceCard(player, cardIndex)) {
    throw new Error(`Cannot replace card at index ${cardIndex}`);
  }
  
  const replacedCardId = player.cards[cardIndex].cardId;
  
  const updatedPlayer: Player = {
    ...player,
    cards: player.cards.map((card, index) => 
      index === cardIndex 
        ? { 
            ...card, 
            cardId: newCardId, 
            isKnownToPlayer: true,
            lastSeenTurn: turnNumber 
          }
        : card
    ),
  };
  
  return { updatedPlayer, replacedCardId };
};

/**
 * Updates player knowledge when they peek at a card
 * @param players Array of all players
 * @param peekingPlayerId ID of player doing the peeking
 * @param targetCardId ID of card being peeked at
 * @param turnNumber Current turn number
 * @returns Updated players array
 */
export const updateCardKnowledge = (
  players: Player[],
  peekingPlayerId: string,
  targetCardId: string,
  turnNumber: number
): Player[] => {
  return players.map(player => ({
    ...player,
    cards: player.cards.map(card => 
      card.cardId === targetCardId && player.id === peekingPlayerId
        ? { 
            ...card, 
            isKnownToPlayer: true,
            lastSeenTurn: turnNumber 
          }
        : card
    ),
  }));
};

/**
 * Swaps cards between two players
 * @param players Array of all players
 * @param currentPlayerId ID of current player
 * @param currentPlayerCardIndex Index of current player's card
 * @param targetPlayerId ID of target player
 * @param targetPlayerCardIndex Index of target player's card
 * @returns Updated players array
 */
export const swapPlayerCards = (
  players: Player[],
  currentPlayerId: string,
  currentPlayerCardIndex: number,
  targetPlayerId: string,
  targetPlayerCardIndex: number
): Player[] => {
  const currentPlayerIndex = players.findIndex(p => p.id === currentPlayerId);
  const targetPlayerIndex = players.findIndex(p => p.id === targetPlayerId);
  
  if (currentPlayerIndex === -1 || targetPlayerIndex === -1) {
    throw new Error('Player not found for card swap');
  }
  
  const currentPlayer = players[currentPlayerIndex];
  const targetPlayer = players[targetPlayerIndex];
  
  if (!canReplaceCard(currentPlayer, currentPlayerCardIndex) || 
      !canReplaceCard(targetPlayer, targetPlayerCardIndex)) {
    throw new Error('Invalid card indices for swap');
  }
  
  const currentPlayerCard = currentPlayer.cards[currentPlayerCardIndex];
  const targetPlayerCard = targetPlayer.cards[targetPlayerCardIndex];
  
  const updatedPlayers = [...players];
  
  // Update current player's cards
  updatedPlayers[currentPlayerIndex] = {
    ...currentPlayer,
    cards: currentPlayer.cards.map((card, index) =>
      index === currentPlayerCardIndex 
        ? { ...targetPlayerCard, isKnownToPlayer: false, lastSeenTurn: undefined }
        : card
    ),
  };
  
  // Update target player's cards
  updatedPlayers[targetPlayerIndex] = {
    ...targetPlayer,
    cards: targetPlayer.cards.map((card, index) =>
      index === targetPlayerCardIndex 
        ? { ...currentPlayerCard, isKnownToPlayer: false, lastSeenTurn: undefined }
        : card
    ),
  };
  
  return updatedPlayers;
};