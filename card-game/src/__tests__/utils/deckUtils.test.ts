// Unit tests for deck management utilities
import { describe, it, expect, beforeEach } from 'vitest'
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
  isDeckEmpty,
  canReplaceCard,
} from '../../utils/deckUtils'
import { Rank, Suit } from '../../types'
import type { Player, Card, PlayerCard } from '../../types'

describe('deckUtils', () => {
  describe('createDeck', () => {
    it('should create a deck with 54 cards', () => {
      const deck = createDeck()
      const cardIds = Object.keys(deck)
      
      expect(cardIds).toHaveLength(54)
    })

    it('should create 52 standard cards + 2 jokers', () => {
      const deck = createDeck()
      const cards = Object.values(deck)
      
      const jokers = cards.filter(card => card.rank === Rank.JOKER)
      const standardCards = cards.filter(card => card.rank !== Rank.JOKER)
      
      expect(jokers).toHaveLength(2)
      expect(standardCards).toHaveLength(52)
    })

    it('should create cards with correct properties', () => {
      const deck = createDeck()
      const cards = Object.values(deck)
      
      cards.forEach(card => {
        expect(card).toHaveProperty('id')
        expect(card).toHaveProperty('rank')
        expect(card).toHaveProperty('value')
        expect(card).toHaveProperty('isSpecial')
        expect(typeof card.id).toBe('string')
        expect(typeof card.value).toBe('number')
        expect(typeof card.isSpecial).toBe('boolean')
      })
    })

    it('should mark Queens and Jacks as special', () => {
      const deck = createDeck()
      const cards = Object.values(deck)
      
      const queens = cards.filter(card => card.rank === Rank.QUEEN)
      const jacks = cards.filter(card => card.rank === Rank.JACK)
      
      queens.forEach(queen => expect(queen.isSpecial).toBe(true))
      jacks.forEach(jack => expect(jack.isSpecial).toBe(true))
    })
  })

  describe('shuffleDeck', () => {
    it('should return the same number of cards', () => {
      const deck = createDeck()
      const originalIds = Object.keys(deck)
      const shuffledIds = shuffleDeck(deck)
      
      expect(shuffledIds).toHaveLength(originalIds.length)
    })

    it('should contain all original card IDs', () => {
      const deck = createDeck()
      const originalIds = Object.keys(deck)
      const shuffledIds = shuffleDeck(deck)
      
      originalIds.forEach(id => {
        expect(shuffledIds).toContain(id)
      })
    })

    it('should produce different orders (with high probability)', () => {
      const deck = createDeck()
      const shuffle1 = shuffleDeck(deck)
      const shuffle2 = shuffleDeck(deck)
      
      // Very unlikely to be identical unless shuffle is broken
      expect(shuffle1).not.toEqual(shuffle2)
    })
  })

  describe('dealInitialCards', () => {
    let players: Player[]
    let cardIds: string[]

    beforeEach(() => {
      const deck = createDeck()
      cardIds = Object.keys(deck)
      players = [
        {
          id: 'player-1',
          name: 'Player 1',
          type: 'human',
          cards: [],
          score: 0,
          isActive: true,
          roundWins: 0,
        },
        {
          id: 'player-2',
          name: 'Player 2',
          type: 'bot',
          cards: [],
          score: 0,
          isActive: true,
          roundWins: 0,
        },
      ]
    })

    it('should deal 4 cards to each player', () => {
      const { updatedPlayers } = dealInitialCards(players, cardIds)
      
      updatedPlayers.forEach(player => {
        expect(player.cards).toHaveLength(4)
      })
    })

    it('should mark first 2 cards as known to player', () => {
      const { updatedPlayers } = dealInitialCards(players, cardIds)
      
      updatedPlayers.forEach(player => {
        expect(player.cards[0].isKnownToPlayer).toBe(true)
        expect(player.cards[1].isKnownToPlayer).toBe(true)
        expect(player.cards[2].isKnownToPlayer).toBe(false)
        expect(player.cards[3].isKnownToPlayer).toBe(false)
      })
    })

    it('should return remaining cards after dealing', () => {
      const { remainingCards } = dealInitialCards(players, cardIds)
      
      // Started with 54, dealt 8 (4 per player), should have 46 remaining
      expect(remainingCards).toHaveLength(46)
    })

    it('should not mutate original players array', () => {
      const originalPlayers = [...players]
      dealInitialCards(players, cardIds)
      
      expect(players).toEqual(originalPlayers)
    })
  })

  describe('calculatePlayerScore', () => {
    let allCards: Record<string, Card>

    beforeEach(() => {
      allCards = {
        'ace': { id: 'ace', rank: Rank.ACE, suit: Suit.HEARTS, value: 1, isSpecial: false },
        'king': { id: 'king', rank: Rank.KING, suit: Suit.SPADES, value: -2, isSpecial: false },
        'ten': { id: 'ten', rank: Rank.TEN, suit: Suit.CLUBS, value: 0, isSpecial: false },
        'five': { id: 'five', rank: Rank.FIVE, suit: Suit.DIAMONDS, value: 5, isSpecial: false },
      }
    })

    it('should calculate correct total score', () => {
      const playerCards: PlayerCard[] = [
        { cardId: 'ace', isRevealed: false, isKnownToPlayer: true },
        { cardId: 'king', isRevealed: false, isKnownToPlayer: true },
        { cardId: 'ten', isRevealed: false, isKnownToPlayer: false },
        { cardId: 'five', isRevealed: false, isKnownToPlayer: false },
      ]
      
      const score = calculatePlayerScore(playerCards, allCards)
      expect(score).toBe(4) // 1 + (-2) + 0 + 5 = 4
    })

    it('should handle empty hand', () => {
      const score = calculatePlayerScore([], allCards)
      expect(score).toBe(0)
    })

    it('should handle missing cards gracefully', () => {
      const playerCards: PlayerCard[] = [
        { cardId: 'nonexistent', isRevealed: false, isKnownToPlayer: true },
      ]
      
      const score = calculatePlayerScore(playerCards, allCards)
      expect(score).toBe(0)
    })
  })

  describe('hasSpecialAbility', () => {
    const queenCard: Card = {
      id: 'queen',
      rank: Rank.QUEEN,
      suit: Suit.HEARTS,
      value: 12,
      isSpecial: true,
    }

    const aceCard: Card = {
      id: 'ace',
      rank: Rank.ACE,
      suit: Suit.CLUBS,
      value: 1,
      isSpecial: false,
    }

    it('should return true for special cards drawn from deck', () => {
      expect(hasSpecialAbility(queenCard, 'deck')).toBe(true)
    })

    it('should return false for special cards drawn from discard', () => {
      expect(hasSpecialAbility(queenCard, 'discard')).toBe(false)
    })

    it('should return false for non-special cards', () => {
      expect(hasSpecialAbility(aceCard, 'deck')).toBe(false)
    })
  })

  describe('drawCard', () => {
    it('should draw from deck correctly', () => {
      const drawPile = ['card1', 'card2', 'card3']
      const discardPile = ['discard1']
      
      const result = drawCard(drawPile, discardPile, 'deck')
      
      expect(result.drawnCardId).toBe('card3')
      expect(result.newDrawPile).toEqual(['card1', 'card2'])
      expect(result.newDiscardPile).toEqual(['discard1'])
    })

    it('should draw from discard correctly', () => {
      const drawPile = ['card1', 'card2']
      const discardPile = ['discard1', 'discard2']
      
      const result = drawCard(drawPile, discardPile, 'discard')
      
      expect(result.drawnCardId).toBe('discard2')
      expect(result.newDrawPile).toEqual(['card1', 'card2'])
      expect(result.newDiscardPile).toEqual(['discard1'])
    })

    it('should handle empty piles', () => {
      const result = drawCard([], [], 'deck')
      
      expect(result.drawnCardId).toBeNull()
      expect(result.newDrawPile).toEqual([])
      expect(result.newDiscardPile).toEqual([])
    })
  })

  describe('isDeckEmpty', () => {
    it('should return true for empty array', () => {
      expect(isDeckEmpty([])).toBe(true)
    })

    it('should return false for non-empty array', () => {
      expect(isDeckEmpty(['card1'])).toBe(false)
    })
  })

  describe('addToDiscardPile', () => {
    it('should add card to end of discard pile', () => {
      const discardPile = ['card1', 'card2']
      const result = addToDiscardPile(discardPile, 'card3')
      
      expect(result).toEqual(['card1', 'card2', 'card3'])
      expect(discardPile).toEqual(['card1', 'card2']) // original unchanged
    })
  })
})