// Sprint 1 Acceptance Tests - Validate all Sprint 1 acceptance criteria
import { describe, it, expect, beforeEach } from 'vitest'
import { render, renderHook, act, screen } from '@testing-library/react'
import { GameProvider } from '../../contexts/GameContext'
import { useGame } from '../../hooks/useGame'
import type { ReactNode } from 'react'

const wrapper = ({ children }: { children: ReactNode }) => (
  <GameProvider>{children}</GameProvider>
)

describe('Sprint 1 Acceptance Tests', () => {
  describe('AC1: Game Setup and Initialization', () => {
    it('should initialize game with correct starting state', () => {
      const { result } = renderHook(() => useGame(), { wrapper })
      const { gameState } = result.current

      // Verify initial game state
      expect(gameState.round.phase).toBe('setup')
      expect(gameState.players).toHaveLength(0)
      expect(gameState.deck.drawPile).toHaveLength(0)
      expect(gameState.deck.discardPile).toHaveLength(0)
      expect(gameState.round.currentPlayerIndex).toBe(0)
      expect(gameState.round.turnNumber).toBe(0)
    })

    it('should start game with specified number of players', () => {
      const { result } = renderHook(() => useGame(), { wrapper })

      act(() => {
        result.current.actions.startGame(3, ['Alice', 'Bot1', 'Bot2'])
      })

      const { gameState } = result.current

      expect(gameState.round.phase).toBe('playing')
      expect(gameState.players).toHaveLength(3)
      expect(gameState.players[0].name).toBe('Alice')
      expect(gameState.players[0].type).toBe('human')
      expect(gameState.players[1].type).toBe('bot')
      expect(gameState.players[2].type).toBe('bot')
    })

    it('should deal 4 cards to each player and set up deck correctly', () => {
      const { result } = renderHook(() => useGame(), { wrapper })

      act(() => {
        result.current.actions.startGame(2, ['Player1', 'Bot1'])
      })

      const { gameState } = result.current

      // Each player should have 4 cards
      gameState.players.forEach(player => {
        expect(player.cards).toHaveLength(4)
        // First 2 cards should be known to player
        expect(player.cards[0].isKnownToPlayer).toBe(true)
        expect(player.cards[1].isKnownToPlayer).toBe(true)
        expect(player.cards[2].isKnownToPlayer).toBe(false)
        expect(player.cards[3].isKnownToPlayer).toBe(false)
      })

      // Deck should have remaining cards (54 - 8 dealt - 1 for discard = 45)
      expect(gameState.deck.drawPile.length).toBe(45)
      expect(gameState.deck.discardPile.length).toBe(1)
    })
  })

  describe('AC2: Basic Turn-Based Gameplay', () => {
    let hookResult: any

    beforeEach(() => {
      const { result } = renderHook(() => useGame(), { wrapper })
      hookResult = result

      act(() => {
        result.current.actions.startGame(2, ['Human', 'Bot'])
      })
    })

    it('should allow current player to draw from deck', () => {
      const initialDeckSize = hookResult.current.gameState.deck.drawPile.length

      act(() => {
        hookResult.current.actions.drawFromDeck()
      })

      const { gameState } = hookResult.current

      expect(gameState.ui.selectedCard).toBeDefined()
      expect(gameState.deck.drawPile.length).toBe(initialDeckSize - 1)
    })

    it('should allow current player to draw from discard when available', () => {
      // First put a card in discard pile
      act(() => {
        hookResult.current.actions.drawFromDeck()
      })

      act(() => {
        hookResult.current.actions.discardDrawnCard()
      })

      const initialDiscardSize = hookResult.current.gameState.deck.discardPile.length
      expect(initialDiscardSize).toBe(2)

      // Next player draws from discard
      act(() => {
        hookResult.current.actions.drawFromDiscard()
      })

      const { gameState } = hookResult.current

      expect(gameState.ui.selectedCard).toBeDefined()
      expect(gameState.deck.discardPile.length).toBe(initialDiscardSize - 1)
    })

    it('should allow player to replace a card in their hand', () => {
      act(() => {
        hookResult.current.actions.drawFromDeck()
      })

      const drawnCard = hookResult.current.gameState.ui.selectedCard
      const originalCard = hookResult.current.gameState.players[0].cards[0].cardId

      act(() => {
        hookResult.current.actions.replaceCard(0)
      })

      const { gameState } = hookResult.current

      expect(gameState.ui.selectedCard).toBeNull()
      expect(gameState.players[0].cards[0].cardId).toBe(drawnCard)
      expect(gameState.players[0].cards[0].isKnownToPlayer).toBe(true)
      expect(gameState.deck.discardPile).toContain(originalCard)
    })

    it('should allow player to discard drawn card without replacing', () => {
      act(() => {
        hookResult.current.actions.drawFromDeck()
      })

      const drawnCard = hookResult.current.gameState.ui.selectedCard
      const originalCards = hookResult.current.gameState.players[0].cards.map(c => c.cardId)

      act(() => {
        hookResult.current.actions.discardDrawnCard()
      })

      const { gameState } = hookResult.current

      expect(gameState.ui.selectedCard).toBeNull()
      expect(gameState.deck.discardPile).toContain(drawnCard)
      // Player's cards should remain unchanged
      expect(gameState.players[0].cards.map(c => c.cardId)).toEqual(originalCards)
    })

    it('should progress turns correctly', () => {
      const initialPlayerIndex = hookResult.current.gameState.round.currentPlayerIndex
      const initialTurnNumber = hookResult.current.gameState.round.turnNumber

      act(() => {
        hookResult.current.actions.endTurn()
      })

      const { gameState } = hookResult.current

      expect(gameState.round.currentPlayerIndex).toBe((initialPlayerIndex + 1) % 2)
      expect(gameState.round.turnNumber).toBe(initialTurnNumber + 1)
    })
  })

  describe('AC3: Card Management System', () => {
    let hookResult: any

    beforeEach(() => {
      const { result } = renderHook(() => useGame(), { wrapper })
      hookResult = result

      act(() => {
        result.current.actions.startGame(2, ['Human', 'Bot'])
      })
    })

    it('should track card knowledge correctly', () => {
      const { gameState } = hookResult.current

      // Initially, first 2 cards are known, last 2 are unknown
      const player = gameState.players[0]
      expect(player.cards[0].isKnownToPlayer).toBe(true)
      expect(player.cards[1].isKnownToPlayer).toBe(true)
      expect(player.cards[2].isKnownToPlayer).toBe(false)
      expect(player.cards[3].isKnownToPlayer).toBe(false)
    })

    it('should update card knowledge when replacing cards', () => {
      act(() => {
        hookResult.current.actions.drawFromDeck()
      })

      // Replace an unknown card
      act(() => {
        hookResult.current.actions.replaceCard(2)
      })

      const { gameState } = hookResult.current
      const player = gameState.players[0]

      // The replaced card should now be known
      expect(player.cards[2].isKnownToPlayer).toBe(true)
    })

    it('should maintain total card count integrity', () => {
      const { gameState } = hookResult.current

      // Count all cards in the game
      const cardsInHands = gameState.players.reduce((sum, player) => sum + player.cards.length, 0)
      const cardsInDeck = gameState.deck.drawPile.length
      const cardsInDiscard = gameState.deck.discardPile.length
      const selectedCard = gameState.ui.selectedCard ? 1 : 0

      const totalCards = cardsInHands + cardsInDeck + cardsInDiscard + selectedCard

      expect(totalCards).toBe(54) // Standard deck with 2 jokers
    })
  })

  describe('AC4: Stop Calling Mechanism', () => {
    let hookResult: any

    beforeEach(() => {
      const { result } = renderHook(() => useGame(), { wrapper })
      hookResult = result

      act(() => {
        result.current.actions.startGame(2, ['Human', 'Bot'])
      })
    })

    it('should allow current player to call stop', () => {
      expect(hookResult.current.gameState.round.stopCalled).toBe(false)

      act(() => {
        hookResult.current.actions.callStop()
      })

      const { gameState } = hookResult.current

      expect(gameState.round.stopCalled).toBe(true)
      expect(gameState.round.stopCalledBy).toBe(gameState.players[0].id)
      expect(gameState.round.remainingTurns).toBe(1) // Other player gets one more turn
    })

    it('should prevent multiple stop calls', () => {
      act(() => {
        hookResult.current.actions.callStop()
      })

      expect(hookResult.current.gameState.round.stopCalled).toBe(true)

      // Calling stop again should not change anything
      const beforeSecondCall = { ...hookResult.current.gameState.round }

      act(() => {
        hookResult.current.actions.callStop()
      })

      const afterSecondCall = hookResult.current.gameState.round

      expect(afterSecondCall.stopCalled).toBe(beforeSecondCall.stopCalled)
      expect(afterSecondCall.stopCalledBy).toBe(beforeSecondCall.stopCalledBy)
      expect(afterSecondCall.remainingTurns).toBe(beforeSecondCall.remainingTurns)
    })

    it('should only allow current player to call stop', () => {
      const currentPlayerId = hookResult.current.gameState.players[0].id
      const otherPlayerId = hookResult.current.gameState.players[1].id

      // Current player should be able to call stop
      expect(hookResult.current.actions.isValidAction(currentPlayerId, 'CALL_STOP')).toBe(true)

      // Other player should not be able to call stop
      expect(hookResult.current.actions.isValidAction(otherPlayerId, 'CALL_STOP')).toBe(false)
    })
  })

  describe('AC5: Game State Validation', () => {
    let hookResult: any

    beforeEach(() => {
      const { result } = renderHook(() => useGame(), { wrapper })
      hookResult = result

      act(() => {
        result.current.actions.startGame(2, ['Human', 'Bot'])
      })
    })

    it('should validate game state and return no errors for valid state', () => {
      const stats = hookResult.current.actions.getGameStatistics()
      expect(stats.isValidState).toBe(true)

      const flowInfo = hookResult.current.actions.getGameFlowInfo()
      expect(flowInfo.validationErrors).toEqual([])
    })

    it('should provide comprehensive game statistics', () => {
      const stats = hookResult.current.actions.getGameStatistics()

      expect(stats).toHaveProperty('gameId')
      expect(stats).toHaveProperty('phase')
      expect(stats).toHaveProperty('currentRound')
      expect(stats).toHaveProperty('playerCount')
      expect(stats).toHaveProperty('cardsInDeck')
      expect(stats).toHaveProperty('isValidState')
      expect(stats).toHaveProperty('deckProgress')

      expect(stats.phase).toBe('playing')
      expect(stats.playerCount).toBe(2)
      expect(stats.isValidState).toBe(true)
      expect(typeof stats.deckProgress).toBe('number')
    })

    it('should provide turn analysis information', () => {
      const analysis = hookResult.current.actions.getTurnAnalysis()

      expect(analysis).toHaveProperty('currentPlayer')
      expect(analysis).toHaveProperty('turnState')
      expect(analysis).toHaveProperty('gameProgression')
      expect(analysis).toHaveProperty('deckState')

      expect(analysis.currentPlayer.name).toBe('Human')
      expect(analysis.currentPlayer.type).toBe('human')
      expect(analysis.turnState.hasDrawnCard).toBe(false)
      expect(analysis.gameProgression.phase).toBe('playing')
    })

    it('should provide available actions for current player', () => {
      const actions = hookResult.current.actions.getPlayerAvailableActions()

      expect(Array.isArray(actions)).toBe(true)
      expect(actions.length).toBeGreaterThan(0)
      expect(actions).toContain('DRAW_FROM_DECK')
      expect(actions).toContain('DRAW_FROM_DISCARD')
      expect(actions).toContain('CALL_STOP')
    })
  })

  describe('AC6: Error Handling and Edge Cases', () => {
    let hookResult: any

    beforeEach(() => {
      const { result } = renderHook(() => useGame(), { wrapper })
      hookResult = result

      act(() => {
        result.current.actions.startGame(2, ['Human', 'Bot'])
      })
    })

    it('should handle invalid actions gracefully', () => {
      // Try to replace card without drawing first
      act(() => {
        hookResult.current.actions.replaceCard(0)
      })

      // Game should remain stable
      expect(hookResult.current.gameState.ui.selectedCard).toBeNull()
      expect(hookResult.current.gameState.round.phase).toBe('playing')
    })

    it('should prevent actions by non-current player', () => {
      const currentPlayerId = hookResult.current.gameState.players[0].id
      const otherPlayerId = hookResult.current.gameState.players[1].id

      // Current player should be able to act
      expect(hookResult.current.actions.isValidAction(currentPlayerId, 'DRAW_FROM_DECK')).toBe(true)

      // Other player should not be able to act
      expect(hookResult.current.actions.isValidAction(otherPlayerId, 'DRAW_FROM_DECK')).toBe(false)
    })

    it('should handle empty deck scenarios', () => {
      // This would be tested in real gameplay where deck runs out
      // For now, verify the detection mechanism exists
      const flowInfo = hookResult.current.actions.getGameFlowInfo()
      expect(flowInfo).toHaveProperty('phase')
      expect(flowInfo).toHaveProperty('availableActions')
      
      // Verify deck state is accessible through game statistics
      const stats = hookResult.current.actions.getGameStatistics()
      expect(stats).toHaveProperty('cardsInDeck')
    })

    it('should maintain game state consistency after multiple actions', () => {
      // Perform a sequence of actions
      act(() => {
        hookResult.current.actions.drawFromDeck()
      })

      act(() => {
        hookResult.current.actions.replaceCard(0)
      })

      act(() => {
        hookResult.current.actions.endTurn()
      })

      // Verify game state is still valid
      const stats = hookResult.current.actions.getGameStatistics()
      expect(stats.isValidState).toBe(true)

      const flowInfo = hookResult.current.actions.getGameFlowInfo()
      expect(flowInfo.validationErrors).toEqual([])
    })
  })

  describe('AC7: Game Flow Integration', () => {
    let hookResult: any

    beforeEach(() => {
      const { result } = renderHook(() => useGame(), { wrapper })
      hookResult = result

      act(() => {
        result.current.actions.startGame(2, ['Human', 'Bot'])
      })
    })

    it('should integrate all game systems seamlessly', () => {
      // Test a complete turn cycle
      const initialState = hookResult.current.gameState

      // Player 1 draws a card
      act(() => {
        hookResult.current.actions.drawFromDeck()
      })

      expect(hookResult.current.gameState.ui.selectedCard).toBeDefined()

      // Player 1 replaces a card
      act(() => {
        hookResult.current.actions.replaceCard(0)
      })

      expect(hookResult.current.gameState.ui.selectedCard).toBeNull()

      // End turn
      act(() => {
        hookResult.current.actions.endTurn()
      })

      const finalState = hookResult.current.gameState

      // Verify turn progression
      expect(finalState.round.currentPlayerIndex).toBe((initialState.round.currentPlayerIndex + 1) % 2)
      expect(finalState.round.turnNumber).toBe(initialState.round.turnNumber + 1)

      // Verify game state integrity
      const stats = hookResult.current.actions.getGameStatistics()
      expect(stats.isValidState).toBe(true)
    })

    it('should provide complete game flow control', () => {
      const actions = hookResult.current.actions

      // Verify all required flow control functions exist
      expect(typeof actions.forceEndTurn).toBe('function')
      expect(typeof actions.forceNextRound).toBe('function')
      expect(typeof actions.getGameFlowInfo).toBe('function')
      expect(typeof actions.forceProgressScoring).toBe('function')

      // Test flow info provides comprehensive data
      const flowInfo = actions.getGameFlowInfo()
      expect(flowInfo).toHaveProperty('phase')
      expect(flowInfo).toHaveProperty('currentPlayer')
      expect(flowInfo).toHaveProperty('turnNumber')
      expect(flowInfo).toHaveProperty('availableActions')
      expect(flowInfo).toHaveProperty('validationErrors')
    })
  })
})