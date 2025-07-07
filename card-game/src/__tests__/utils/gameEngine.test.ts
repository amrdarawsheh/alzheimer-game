// Unit tests for game engine utilities
import { describe, it, expect, beforeEach } from 'vitest'
import {
  calculatePlayerScore,
  determineRoundWinner,
  checkMatchWinner,
  canPlayerAct,
  canCallStop,
  shouldEndRound,
  checkRoundEnd,
  detectSpecialCard,
  validateTurnAction,
  calculateGameStatistics,
  getAvailableActions,
  validateGameState,
} from '../../utils/gameEngine'
import { GamePhase, Rank, Suit, PlayerType } from '../../types'
import type { GameState, Player, Card } from '../../types'

describe('gameEngine', () => {
  let mockGameState: GameState
  let mockPlayers: Player[]
  let mockCards: Record<string, Card>

  beforeEach(() => {
    // Create a complete deck with proper card count
    mockCards = {}
    for (let i = 1; i <= 54; i++) {
      mockCards[`card${i}`] = {
        id: `card${i}`,
        rank: Rank.ACE,
        suit: Suit.HEARTS,
        value: 1,
        isSpecial: false,
      }
    }

    mockPlayers = [
      {
        id: 'player-1',
        name: 'Player 1',
        type: PlayerType.HUMAN,
        cards: [
          { cardId: 'card1', isRevealed: false, isKnownToPlayer: true },
          { cardId: 'card2', isRevealed: false, isKnownToPlayer: true },
          { cardId: 'card4', isRevealed: false, isKnownToPlayer: false },
          { cardId: 'card5', isRevealed: false, isKnownToPlayer: false },
        ],
        score: 0,
        isActive: true,
        roundWins: 0,
      },
      {
        id: 'player-2',
        name: 'Player 2',
        type: PlayerType.BOT,
        cards: [
          { cardId: 'card3', isRevealed: false, isKnownToPlayer: false },
          { cardId: 'card6', isRevealed: false, isKnownToPlayer: false },
          { cardId: 'card7', isRevealed: false, isKnownToPlayer: false },
          { cardId: 'card8', isRevealed: false, isKnownToPlayer: false },
        ],
        score: 0,
        isActive: true,
        roundWins: 0,
      },
    ]

    mockGameState = {
      gameId: 'test-game',
      gameMode: 'local',
      maxPlayers: 4,
      match: {
        currentRound: 1,
        roundsToWin: 3,
        roundWins: { 'player-1': 0, 'player-2': 0 },
        winner: null,
      },
      round: {
        phase: GamePhase.PLAYING,
        currentPlayerIndex: 0,
        stopCalled: false,
        stopCalledBy: null,
        remainingTurns: 0,
        autoStopped: false,
        turnNumber: 1,
      },
      players: mockPlayers,
      cards: mockCards,
      deck: {
        drawPile: Array.from({ length: 45 }, (_, i) => `card${i + 9}`), // 45 remaining cards  
        discardPile: ['card54'],
        isEmpty: false,
      },
      lastAction: null,
      ui: {
        selectedCard: null,
        showingPeekCard: null,
        animationQueue: [],
        isActionInProgress: false,
        currentModal: null,
      },
    }
  })

  describe('calculatePlayerScore', () => {
    it('should calculate correct score for player cards', () => {
      const playerCards = mockPlayers[0].cards
      const score = calculatePlayerScore(playerCards, mockCards)
      
      expect(score).toBe(4) // All cards have value 1, so 4 cards = 4
    })

    it('should handle empty cards array', () => {
      const score = calculatePlayerScore([], mockCards)
      expect(score).toBe(0)
    })
  })

  describe('determineRoundWinner', () => {
    it('should return player with lowest score', () => {
      const players: Player[] = [
        { ...mockPlayers[0], score: 15 },
        { ...mockPlayers[1], score: 8 },
      ]
      
      const winner = determineRoundWinner(players)
      expect(winner.id).toBe('player-2')
      expect(winner.score).toBe(8)
    })

    it('should handle tie by returning first player', () => {
      const players: Player[] = [
        { ...mockPlayers[0], score: 10 },
        { ...mockPlayers[1], score: 10 },
      ]
      
      const winner = determineRoundWinner(players)
      expect(winner.id).toBe('player-1')
    })

    it('should throw error for empty players array', () => {
      expect(() => determineRoundWinner([])).toThrow('Cannot determine winner with no players')
    })
  })

  describe('checkMatchWinner', () => {
    it('should return winner when rounds to win reached', () => {
      const roundWins = { 'player-1': 3, 'player-2': 1 }
      const winner = checkMatchWinner(roundWins, 3)
      
      expect(winner).toBe('player-1')
    })

    it('should return null when no winner yet', () => {
      const roundWins = { 'player-1': 2, 'player-2': 1 }
      const winner = checkMatchWinner(roundWins, 3)
      
      expect(winner).toBeNull()
    })
  })

  describe('canPlayerAct', () => {
    it('should return true for current player in playing phase', () => {
      const canAct = canPlayerAct(mockGameState, 'player-1')
      expect(canAct).toBe(true)
    })

    it('should return false for non-current player', () => {
      const canAct = canPlayerAct(mockGameState, 'player-2')
      expect(canAct).toBe(false)
    })

    it('should return false in non-playing phase', () => {
      const setupState = {
        ...mockGameState,
        round: { ...mockGameState.round, phase: GamePhase.SETUP },
      }
      
      const canAct = canPlayerAct(setupState, 'player-1')
      expect(canAct).toBe(false)
    })

    it('should return false for inactive player', () => {
      const inactivePlayerState = {
        ...mockGameState,
        players: [
          { ...mockPlayers[0], isActive: false },
          mockPlayers[1],
        ],
      }
      
      const canAct = canPlayerAct(inactivePlayerState, 'player-1')
      expect(canAct).toBe(false)
    })
  })

  describe('canCallStop', () => {
    it('should return true when conditions are met', () => {
      const canCall = canCallStop(mockGameState, 'player-1')
      expect(canCall).toBe(true)
    })

    it('should return false when stop already called', () => {
      const stopCalledState = {
        ...mockGameState,
        round: { ...mockGameState.round, stopCalled: true },
      }
      
      const canCall = canCallStop(stopCalledState, 'player-1')
      expect(canCall).toBe(false)
    })

    it('should return false for non-current player', () => {
      const canCall = canCallStop(mockGameState, 'player-2')
      expect(canCall).toBe(false)
    })
  })

  describe('shouldEndRound', () => {
    it('should return true when deck is empty', () => {
      const emptyDeckState = {
        ...mockGameState,
        deck: { ...mockGameState.deck, drawPile: [] },
      }
      
      expect(shouldEndRound(emptyDeckState)).toBe(true)
    })

    it('should return true when stop called and no remaining turns', () => {
      const stopState = {
        ...mockGameState,
        round: { 
          ...mockGameState.round, 
          stopCalled: true, 
          remainingTurns: 0 
        },
      }
      
      expect(shouldEndRound(stopState)).toBe(true)
    })

    it('should return false in normal play', () => {
      expect(shouldEndRound(mockGameState)).toBe(false)
    })
  })

  describe('checkRoundEnd', () => {
    it('should be an alias for shouldEndRound', () => {
      const result1 = shouldEndRound(mockGameState)
      const result2 = checkRoundEnd(mockGameState)
      
      expect(result1).toBe(result2)
    })
  })

  describe('detectSpecialCard', () => {
    const queenCard: Card = {
      id: 'queen',
      rank: Rank.QUEEN,
      suit: Suit.HEARTS,
      value: 12,
      isSpecial: true,
    }

    const normalCard: Card = {
      id: 'normal',
      rank: Rank.ACE,
      suit: Suit.CLUBS,
      value: 1,
      isSpecial: false,
    }

    it('should return true for special cards from deck', () => {
      expect(detectSpecialCard(queenCard, 'deck')).toBe(true)
    })

    it('should return false for special cards from discard', () => {
      expect(detectSpecialCard(queenCard, 'discard')).toBe(false)
    })

    it('should return false for normal cards', () => {
      expect(detectSpecialCard(normalCard, 'deck')).toBe(false)
    })
  })

  describe('validateTurnAction', () => {
    it('should validate draw actions correctly', () => {
      expect(validateTurnAction(mockGameState, 'player-1', 'DRAW_FROM_DECK')).toBe(true)
      expect(validateTurnAction(mockGameState, 'player-2', 'DRAW_FROM_DECK')).toBe(false)
    })

    it('should validate actions based on game state', () => {
      const withSelectedCard = {
        ...mockGameState,
        ui: { ...mockGameState.ui, selectedCard: 'card1' },
      }
      
      expect(validateTurnAction(withSelectedCard, 'player-1', 'DRAW_FROM_DECK')).toBe(false)
      expect(validateTurnAction(withSelectedCard, 'player-1', 'REPLACE_CARD')).toBe(true)
    })
  })

  describe('getAvailableActions', () => {
    it('should return draw actions when no card selected', () => {
      const actions = getAvailableActions(mockGameState)
      
      expect(actions).toContain('DRAW_FROM_DECK')
      expect(actions).toContain('DRAW_FROM_DISCARD')
      expect(actions).toContain('CALL_STOP')
    })

    it('should return replacement actions when card selected', () => {
      const withSelectedCard = {
        ...mockGameState,
        ui: { ...mockGameState.ui, selectedCard: 'card1' },
      }
      
      const actions = getAvailableActions(withSelectedCard)
      
      expect(actions).toContain('REPLACE_CARD_0')
      expect(actions).toContain('REPLACE_CARD_1')
      expect(actions).toContain('DISCARD_DRAWN_CARD')
    })

    it('should return empty array for non-playing phase', () => {
      const setupState = {
        ...mockGameState,
        round: { ...mockGameState.round, phase: GamePhase.SETUP },
      }
      
      const actions = getAvailableActions(setupState)
      expect(actions).toEqual([])
    })
  })

  describe('calculateGameStatistics', () => {
    it('should return comprehensive game statistics', () => {
      const stats = calculateGameStatistics(mockGameState)
      
      expect(stats).toHaveProperty('gameId')
      expect(stats).toHaveProperty('phase')
      expect(stats).toHaveProperty('currentRound')
      expect(stats).toHaveProperty('playerCount')
      expect(stats).toHaveProperty('cardsInDeck')
      expect(stats).toHaveProperty('isValidState')
      
      expect(stats.gameId).toBe('test-game')
      expect(stats.phase).toBe(GamePhase.PLAYING)
      expect(stats.playerCount).toBe(2)
    })

    it('should calculate deck progress correctly', () => {
      const stats = calculateGameStatistics(mockGameState)
      
      // Started with some cards, deck progress should be calculated
      expect(typeof stats.deckProgress).toBe('number')
      expect(stats.deckProgress).toBeGreaterThanOrEqual(0)
      expect(stats.deckProgress).toBeLessThanOrEqual(100)
    })
  })

  describe('validateGameState', () => {
    it('should return empty array for valid state', () => {
      const errors = validateGameState(mockGameState)
      expect(errors).toEqual([])
    })

    it('should detect invalid player count', () => {
      const invalidState = {
        ...mockGameState,
        players: [],
      }
      
      const errors = validateGameState(invalidState)
      expect(errors.length).toBeGreaterThan(0)
      expect(errors[0]).toContain('Invalid player count')
    })

    it('should detect invalid current player index', () => {
      const invalidState = {
        ...mockGameState,
        round: { ...mockGameState.round, currentPlayerIndex: 99 },
      }
      
      const errors = validateGameState(invalidState)
      expect(errors.length).toBeGreaterThan(0)
      expect(errors.some(e => e.includes('Invalid current player index'))).toBe(true)
    })
  })
})