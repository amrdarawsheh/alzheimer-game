// Unit tests for game flow manager
import { describe, it, expect, beforeEach, vi } from 'vitest'
import { GameFlowManager, createGameFlowManager } from '../../utils/gameFlowManager'
import { GamePhase, PlayerType } from '../../types'
import type { GameState, GameAction } from '../../types'

describe('GameFlowManager', () => {
  let mockGameState: GameState
  let mockDispatch: ReturnType<typeof vi.fn>
  let flowManager: GameFlowManager

  beforeEach(() => {
    mockDispatch = vi.fn()
    
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
      players: [
        {
          id: 'player-1',
          name: 'Human Player',
          type: PlayerType.HUMAN,
          cards: [
            { cardId: 'card1', isRevealed: false, isKnownToPlayer: true },
            { cardId: 'card2', isRevealed: false, isKnownToPlayer: true },
            { cardId: 'card3', isRevealed: false, isKnownToPlayer: false },
            { cardId: 'card4', isRevealed: false, isKnownToPlayer: false },
          ],
          score: 0,
          isActive: true,
          roundWins: 0,
        },
        {
          id: 'player-2',
          name: 'Bot Player',
          type: PlayerType.BOT,
          cards: [
            { cardId: 'card5', isRevealed: false, isKnownToPlayer: false },
            { cardId: 'card6', isRevealed: false, isKnownToPlayer: false },
            { cardId: 'card7', isRevealed: false, isKnownToPlayer: false },
            { cardId: 'card8', isRevealed: false, isKnownToPlayer: false },
          ],
          score: 0,
          isActive: true,
          roundWins: 0,
        },
      ],
      cards: {},
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

    flowManager = createGameFlowManager(mockDispatch, mockGameState)
  })

  describe('createGameFlowManager', () => {
    it('should create a game flow manager instance', () => {
      expect(flowManager).toBeInstanceOf(GameFlowManager)
    })
  })

  describe('processGameFlow', () => {
    it('should not process in setup phase', () => {
      const setupState = {
        ...mockGameState,
        round: { ...mockGameState.round, phase: GamePhase.SETUP },
      }
      const setupManager = createGameFlowManager(mockDispatch, setupState)
      
      setupManager.processGameFlow()
      expect(mockDispatch).not.toHaveBeenCalled()
    })

    it('should handle playing phase', () => {
      // Human player turn - should not auto-process
      flowManager.processGameFlow()
      expect(mockDispatch).not.toHaveBeenCalled()
    })

    it('should handle scoring phase', () => {
      const scoringState = {
        ...mockGameState,
        round: { ...mockGameState.round, phase: GamePhase.SCORING },
      }
      const scoringManager = createGameFlowManager(mockDispatch, scoringState)
      
      scoringManager.processGameFlow()
      // Should not auto-dispatch in scoring phase (waiting for user input)
      expect(mockDispatch).not.toHaveBeenCalled()
    })
  })

  describe('processBotTurn', () => {
    beforeEach(() => {
      // Set current player to bot
      mockGameState.round.currentPlayerIndex = 1
      flowManager = createGameFlowManager(mockDispatch, mockGameState)
    })

    it('should process bot turn when current player is bot', () => {
      flowManager.processBotTurn()
      expect(mockDispatch).toHaveBeenCalled()
    })

    it('should not process when current player is human', () => {
      mockGameState.round.currentPlayerIndex = 0
      flowManager = createGameFlowManager(mockDispatch, mockGameState)
      
      flowManager.processBotTurn()
      expect(mockDispatch).not.toHaveBeenCalled()
    })

    it('should handle bot with drawn card', () => {
      mockGameState.ui.selectedCard = 'drawnCard'
      flowManager = createGameFlowManager(mockDispatch, mockGameState)
      
      flowManager.processBotTurn()
      expect(mockDispatch).toHaveBeenCalled()
    })
  })

  describe('endTurn', () => {
    it('should dispatch END_TURN action', () => {
      flowManager.endTurn()
      
      expect(mockDispatch).toHaveBeenCalledWith({
        type: 'END_TURN',
        payload: { playerId: 'player-1' },
      })
    })
  })

  describe('nextRound', () => {
    it('should dispatch START_ROUND action', () => {
      flowManager.nextRound()
      
      expect(mockDispatch).toHaveBeenCalledWith({
        type: 'START_ROUND',
        payload: {},
      })
    })
  })

  describe('resetGame', () => {
    it('should dispatch RESET_GAME action', () => {
      flowManager.resetGame()
      
      expect(mockDispatch).toHaveBeenCalledWith({
        type: 'RESET_GAME',
        payload: {},
      })
    })
  })

  describe('validateGameState', () => {
    it('should return empty array for valid state', () => {
      const errors = flowManager.validateGameState()
      expect(errors).toEqual([])
    })

    it('should detect no players', () => {
      mockGameState.players = []
      flowManager = createGameFlowManager(mockDispatch, mockGameState)
      
      const errors = flowManager.validateGameState()
      expect(errors).toContain('No players in game')
    })

    it('should detect invalid player index', () => {
      mockGameState.round.currentPlayerIndex = 99
      flowManager = createGameFlowManager(mockDispatch, mockGameState)
      
      const errors = flowManager.validateGameState()
      expect(errors).toContain('Invalid current player index')
    })

    it('should detect incorrect card count', () => {
      mockGameState.deck.drawPile = []
      mockGameState.deck.discardPile = []
      flowManager = createGameFlowManager(mockDispatch, mockGameState)
      
      const errors = flowManager.validateGameState()
      expect(errors.some(e => e.includes('Total cards in game'))).toBe(true)
    })
  })

  describe('getGameStateInfo', () => {
    it('should return comprehensive game state information', () => {
      const info = flowManager.getGameStateInfo()
      
      expect(info).toHaveProperty('phase')
      expect(info).toHaveProperty('currentPlayer')
      expect(info).toHaveProperty('turnNumber')
      expect(info).toHaveProperty('round')
      expect(info).toHaveProperty('availableActions')
      expect(info).toHaveProperty('deckSize')
      expect(info).toHaveProperty('validationErrors')

      expect(info.phase).toBe(GamePhase.PLAYING)
      expect(info.currentPlayer).toEqual({
        id: 'player-1',
        name: 'Human Player',
        type: PlayerType.HUMAN,
      })
      expect(info.turnNumber).toBe(1)
      expect(info.round).toBe(1)
      expect(Array.isArray(info.availableActions)).toBe(true)
      expect(info.deckSize).toBe(45)
    })
  })

  describe('forceProgressScoring', () => {
    it('should start next round when no match winner', () => {
      const scoringState = {
        ...mockGameState,
        round: { ...mockGameState.round, phase: GamePhase.SCORING },
      }
      const scoringManager = createGameFlowManager(mockDispatch, scoringState)
      
      scoringManager.forceProgressScoring()
      
      expect(mockDispatch).toHaveBeenCalledWith({
        type: 'START_ROUND',
        payload: {},
      })
    })

    it('should end game when match winner exists', () => {
      const finishedState = {
        ...mockGameState,
        round: { ...mockGameState.round, phase: GamePhase.SCORING },
        match: { ...mockGameState.match, winner: 'player-1' },
      }
      const finishedManager = createGameFlowManager(mockDispatch, finishedState)
      
      finishedManager.forceProgressScoring()
      
      expect(mockDispatch).toHaveBeenCalledWith({
        type: 'END_GAME',
        payload: { winnerId: 'player-1' },
      })
    })

    it('should not progress when not in scoring phase', () => {
      flowManager.forceProgressScoring()
      expect(mockDispatch).not.toHaveBeenCalled()
    })
  })
})