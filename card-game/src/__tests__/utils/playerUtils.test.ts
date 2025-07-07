// Unit tests for player utilities
import { describe, it, expect, beforeEach } from 'vitest'
import {
  createPlayer,
  createPlayers,
  getPlayerById,
  getCurrentPlayer,
  isBot,
  isHuman,
  estimatePlayerScore,
  EasyBot,
  validatePlayer,
} from '../../utils/playerUtils'
import { PlayerType, GamePhase } from '../../types'
import type { GameState, Player } from '../../types'

describe('playerUtils', () => {
  describe('createPlayer', () => {
    it('should create player with basic properties', () => {
      const player = createPlayer('Test Player', PlayerType.HUMAN)
      
      expect(player.name).toBe('Test Player')
      expect(player.type).toBe(PlayerType.HUMAN)
      expect(player.cards).toEqual([])
      expect(player.score).toBe(0)
      expect(player.isActive).toBe(true)
      expect(player.roundWins).toBe(0)
      expect(player.id).toBeDefined()
    })

    it('should use provided index for ID', () => {
      const player = createPlayer('Test', PlayerType.BOT, 2)
      expect(player.id).toBe('player-2')
    })

    it('should generate unique IDs when no index provided', () => {
      const player1 = createPlayer('Test1', PlayerType.HUMAN)
      const player2 = createPlayer('Test2', PlayerType.HUMAN)
      
      expect(player1.id).not.toBe(player2.id)
    })
  })

  describe('createPlayers', () => {
    it('should create correct number of players', () => {
      const players = createPlayers(3, ['Human', 'Bot1', 'Bot2'])
      expect(players).toHaveLength(3)
    })

    it('should make first player human, rest bots', () => {
      const players = createPlayers(3, ['Human', 'Bot1', 'Bot2'])
      
      expect(players[0].type).toBe(PlayerType.HUMAN)
      expect(players[1].type).toBe(PlayerType.BOT)
      expect(players[2].type).toBe(PlayerType.BOT)
    })

    it('should use provided names', () => {
      const players = createPlayers(2, ['Alice', 'Bob'])
      
      expect(players[0].name).toBe('Alice')
      expect(players[1].name).toBe('Bob')
    })

    it('should use default names when not provided', () => {
      const players = createPlayers(2, [])
      
      expect(players[0].name).toBe('Player')
      expect(players[1].name).toBe('Bot 1')
    })
  })

  describe('getPlayerById', () => {
    let players: Player[]

    beforeEach(() => {
      players = createPlayers(2, ['Alice', 'Bob'])
    })

    it('should find player by ID', () => {
      const player = getPlayerById(players, players[0].id)
      expect(player).toBe(players[0])
    })

    it('should return null for non-existent ID', () => {
      const player = getPlayerById(players, 'non-existent')
      expect(player).toBeNull()
    })
  })

  describe('getCurrentPlayer', () => {
    let gameState: GameState

    beforeEach(() => {
      const players = createPlayers(2, ['Alice', 'Bob'])
      gameState = {
        players,
        round: { currentPlayerIndex: 0 } as any,
      } as GameState
    })

    it('should return current player', () => {
      const current = getCurrentPlayer(gameState)
      expect(current).toBe(gameState.players[0])
    })

    it('should return null for invalid index', () => {
      gameState.round.currentPlayerIndex = 99
      const current = getCurrentPlayer(gameState)
      expect(current).toBeNull()
    })
  })

  describe('isBot and isHuman', () => {
    it('should correctly identify bot players', () => {
      const botPlayer = createPlayer('Bot', PlayerType.BOT)
      const humanPlayer = createPlayer('Human', PlayerType.HUMAN)
      
      expect(isBot(botPlayer)).toBe(true)
      expect(isBot(humanPlayer)).toBe(false)
      
      expect(isHuman(botPlayer)).toBe(false)
      expect(isHuman(humanPlayer)).toBe(true)
    })
  })

  describe('estimatePlayerScore', () => {
    it('should calculate score from known cards', () => {
      const player: Player = {
        id: 'test',
        name: 'Test',
        type: PlayerType.HUMAN,
        cards: [
          { cardId: 'card1', isKnownToPlayer: true, isRevealed: false },
          { cardId: 'card2', isKnownToPlayer: true, isRevealed: false },
          { cardId: 'card3', isKnownToPlayer: false, isRevealed: false },
        ],
        score: 0,
        isActive: true,
        roundWins: 0,
      }
      
      const allCards = {
        'card1': { value: 5 } as any,
        'card2': { value: 3 } as any,
        'card3': { value: 10 } as any,
      }
      
      const estimate = estimatePlayerScore(player, allCards)
      // Known: 5 + 3 = 8, Unknown: 1 * 5.5 = 5.5, Total: 13.5
      expect(estimate).toBe(13.5)
    })

    it('should handle all unknown cards', () => {
      const player: Player = {
        id: 'test',
        name: 'Test',
        type: PlayerType.HUMAN,
        cards: [
          { cardId: 'card1', isKnownToPlayer: false, isRevealed: false },
          { cardId: 'card2', isKnownToPlayer: false, isRevealed: false },
        ],
        score: 0,
        isActive: true,
        roundWins: 0,
      }
      
      const estimate = estimatePlayerScore(player, {})
      // 2 unknown cards * 5.5 = 11
      expect(estimate).toBe(11)
    })
  })

  describe('EasyBot', () => {
    let gameState: GameState

    beforeEach(() => {
      const players = createPlayers(2, ['Human', 'Bot'])
      gameState = {
        players,
        round: {
          phase: GamePhase.PLAYING,
          currentPlayerIndex: 1, // Bot's turn
        },
        deck: {
          drawPile: ['card1', 'card2'],
          discardPile: ['card3'],
        },
        ui: {
          selectedCard: null,
        },
      } as GameState
    })

    describe('decideDraw', () => {
      it('should return valid draw source', () => {
        const decision = EasyBot.decideDraw(gameState)
        expect(['deck', 'discard', null]).toContain(decision)
      })

      it('should return null when no valid sources', () => {
        gameState.deck.drawPile = []
        gameState.deck.discardPile = []
        
        const decision = EasyBot.decideDraw(gameState)
        expect(decision).toBeNull()
      })
    })

    describe('decideReplace', () => {
      it('should return valid card index or null', () => {
        gameState.ui.selectedCard = 'drawnCard'
        const decision = EasyBot.decideReplace(gameState)
        
        if (decision !== null) {
          expect(decision).toBeGreaterThanOrEqual(0)
          expect(decision).toBeLessThan(4)
        }
      })

      it('should return null when no card selected', () => {
        gameState.ui.selectedCard = null
        const decision = EasyBot.decideReplace(gameState)
        expect(decision).toBeNull()
      })
    })

    describe('decideStop', () => {
      it('should return boolean', () => {
        const decision = EasyBot.decideStop(gameState)
        expect(typeof decision).toBe('boolean')
      })

      it('should return false when cannot call stop', () => {
        gameState.round.currentPlayerIndex = 0 // Not bot's turn
        gameState = { ...gameState, round: { ...gameState.round, currentPlayerIndex: 0 } }
        const decision = EasyBot.decideStop(gameState)
        expect(decision).toBe(false)
      })
    })

    describe('decideSpecialAbility', () => {
      it('should return boolean', () => {
        const decision = EasyBot.decideSpecialAbility()
        expect(typeof decision).toBe('boolean')
      })
    })

    describe('generateMove', () => {
      it('should generate valid move when no card drawn', () => {
        const move = EasyBot.generateMove(gameState)
        
        if (move) {
          expect(['draw_deck', 'draw_discard']).toContain(move.action)
        }
      })

      it('should generate valid move when card drawn', () => {
        gameState.ui.selectedCard = 'drawnCard'
        const move = EasyBot.generateMove(gameState)
        
        if (move) {
          expect(['replace_card', 'discard_card', 'call_stop']).toContain(move.action)
        }
      })

      it('should return null for non-bot player', () => {
        gameState.round.currentPlayerIndex = 0 // Human player
        const move = EasyBot.generateMove(gameState)
        expect(move).toBeNull()
      })
    })
  })

  describe('validatePlayer', () => {
    it('should return empty array for valid player', () => {
      const player = createPlayer('Valid Player', PlayerType.HUMAN)
      const errors = validatePlayer(player)
      expect(errors).toEqual([])
    })

    it('should detect missing ID', () => {
      const player = { ...createPlayer('Test', PlayerType.HUMAN), id: '' }
      const errors = validatePlayer(player)
      expect(errors.some(e => e.includes('must have an ID'))).toBe(true)
    })

    it('should detect empty name', () => {
      const player = { ...createPlayer('Test', PlayerType.HUMAN), name: '' }
      const errors = validatePlayer(player)
      expect(errors.some(e => e.includes('must have a name'))).toBe(true)
    })

    it('should detect negative score', () => {
      const player = { ...createPlayer('Test', PlayerType.HUMAN), score: -1 }
      const errors = validatePlayer(player)
      expect(errors.some(e => e.includes('cannot be negative'))).toBe(true)
    })

    it('should detect too many cards', () => {
      const player = createPlayer('Test', PlayerType.HUMAN)
      player.cards = new Array(10).fill({ cardId: 'test', isRevealed: false, isKnownToPlayer: false })
      
      const errors = validatePlayer(player)
      expect(errors.some(e => e.includes('too many cards'))).toBe(true)
    })
  })
})