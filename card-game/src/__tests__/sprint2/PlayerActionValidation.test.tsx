// Sprint 2 TDD: Advanced Player Action Validation Tests
import { describe, it, expect, beforeEach } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { GameProvider } from '../../contexts/GameContext'
import { useGame } from '../../hooks/useGame'
import { GamePhase } from '../../types'
import type { ReactNode } from 'react'

const wrapper = ({ children }: { children: ReactNode }) => (
  <GameProvider>{children}</GameProvider>
)

describe('Sprint 2: Advanced Player Action Validation', () => {
  describe('Comprehensive Action Validation', () => {
    let hookResult: any

    beforeEach(() => {
      const { result } = renderHook(() => useGame(), { wrapper })
      hookResult = result

      act(() => {
        result.current.actions.startGame(3, ['Human', 'Bot1', 'Bot2'])
      })
    })

    it('should validate draw actions based on game state', () => {
      const gameState = hookResult.current.gameState
      const currentPlayerId = gameState.players[0].id

      // Should be able to draw when it's player's turn and no card drawn
      expect(hookResult.current.actions.isValidAction(currentPlayerId, 'DRAW_FROM_DECK')).toBe(true)
      expect(hookResult.current.actions.isValidAction(currentPlayerId, 'DRAW_FROM_DISCARD')).toBe(true)
      
      // Should not be able to replace when no card drawn
      expect(hookResult.current.actions.isValidAction(currentPlayerId, 'REPLACE_CARD')).toBe(false)
    })

    it('should prevent actions when not player turn', () => {
      const gameState = hookResult.current.gameState
      const nonCurrentPlayerId = gameState.players[1].id // Bot player

      // Bot should not be able to act when it's human's turn
      expect(hookResult.current.actions.isValidAction(nonCurrentPlayerId, 'DRAW_FROM_DECK')).toBe(false)
      expect(hookResult.current.actions.isValidAction(nonCurrentPlayerId, 'DRAW_FROM_DISCARD')).toBe(false)
      expect(hookResult.current.actions.isValidAction(nonCurrentPlayerId, 'CALL_STOP')).toBe(false)
    })

    it('should validate replacement actions only after drawing', () => {
      const gameState = hookResult.current.gameState
      const currentPlayerId = gameState.players[0].id

      // Cannot replace before drawing
      expect(hookResult.current.actions.isValidAction(currentPlayerId, 'REPLACE_CARD_0')).toBe(false)
      expect(hookResult.current.actions.isValidAction(currentPlayerId, 'REPLACE_CARD_1')).toBe(false)

      // Draw a card
      act(() => {
        hookResult.current.actions.drawFromDeck()
      })

      // Now should be able to replace or discard
      expect(hookResult.current.actions.isValidAction(currentPlayerId, 'REPLACE_CARD_0')).toBe(true)
      expect(hookResult.current.actions.isValidAction(currentPlayerId, 'REPLACE_CARD_1')).toBe(true)
      expect(hookResult.current.actions.isValidAction(currentPlayerId, 'DISCARD_DRAWN_CARD')).toBe(true)
      
      // But should not be able to draw again
      expect(hookResult.current.actions.isValidAction(currentPlayerId, 'DRAW_FROM_DECK')).toBe(false)
      expect(hookResult.current.actions.isValidAction(currentPlayerId, 'DRAW_FROM_DISCARD')).toBe(false)
    })

    it('should validate stop calling conditions', () => {
      const gameState = hookResult.current.gameState
      const currentPlayerId = gameState.players[0].id

      // Should be able to call stop during playing phase on player's turn
      expect(hookResult.current.actions.isValidAction(currentPlayerId, 'CALL_STOP')).toBe(true)

      // Call stop
      act(() => {
        hookResult.current.actions.callStop()
      })

      // Should not be able to call stop again
      expect(hookResult.current.actions.isValidAction(currentPlayerId, 'CALL_STOP')).toBe(false)
    })

    it('should handle empty deck validation', () => {
      // Exhaust the deck
      const initialDeckSize = hookResult.current.gameState.deck.drawPile.length
      
      for (let i = 0; i < initialDeckSize; i++) {
        act(() => {
          hookResult.current.actions.drawFromDeck()
        })
        act(() => {
          hookResult.current.actions.discardDrawnCard()
        })
        act(() => {
          hookResult.current.actions.endTurn()
        })
      }

      const gameState = hookResult.current.gameState
      const currentPlayerId = gameState.players[gameState.round.currentPlayerIndex].id

      // Should not be able to draw from empty deck
      expect(hookResult.current.actions.isValidAction(currentPlayerId, 'DRAW_FROM_DECK')).toBe(false)
      
      // Should still be able to draw from discard if available
      if (gameState.deck.discardPile.length > 0) {
        expect(hookResult.current.actions.isValidAction(currentPlayerId, 'DRAW_FROM_DISCARD')).toBe(true)
      }
    })

    it('should validate actions during different game phases', () => {
      const currentPlayerId = hookResult.current.gameState.players[0].id

      // Playing phase - actions should be available
      expect(hookResult.current.gameState.round.phase).toBe(GamePhase.PLAYING)
      expect(hookResult.current.actions.isValidAction(currentPlayerId, 'DRAW_FROM_DECK')).toBe(true)

      // Transition to scoring phase (simulated)
      act(() => {
        hookResult.current.actions.forceProgressScoring()
      })

      // During scoring, no game actions should be valid
      const scoringState = hookResult.current.gameState
      if (scoringState.round.phase === GamePhase.SCORING) {
        expect(hookResult.current.actions.isValidAction(currentPlayerId, 'DRAW_FROM_DECK')).toBe(false)
        expect(hookResult.current.actions.isValidAction(currentPlayerId, 'CALL_STOP')).toBe(false)
      }
    })
  })

  describe('Action Precondition Checking', () => {
    let hookResult: any

    beforeEach(() => {
      const { result } = renderHook(() => useGame(), { wrapper })
      hookResult = result

      act(() => {
        result.current.actions.startGame(2, ['Human', 'Bot'])
      })
    })

    it('should check preconditions for draw actions', () => {
      const actions = hookResult.current.actions

      // Test deck availability precondition
      expect(actions.canDrawFromDeck()).toBe(true)
      expect(actions.canDrawFromDiscard()).toBe(true)
      
      // Test turn state precondition
      expect(actions.isPlayerTurn(hookResult.current.gameState.players[0].id)).toBe(true)
      expect(actions.isPlayerTurn(hookResult.current.gameState.players[1].id)).toBe(false)
    })

    it('should check preconditions for replacement actions', () => {
      const actions = hookResult.current.actions
      const currentPlayerId = hookResult.current.gameState.players[0].id

      // Before drawing - replacement should not be available
      expect(actions.hasDrawnCard()).toBe(false)
      expect(actions.canReplaceCard(0)).toBe(false)

      // After drawing - replacement should be available
      act(() => {
        actions.drawFromDeck()
      })

      expect(actions.hasDrawnCard()).toBe(true)
      expect(actions.canReplaceCard(0)).toBe(true)
      expect(actions.canReplaceCard(3)).toBe(true)
      expect(actions.canReplaceCard(4)).toBe(false) // Invalid index
    })

    it('should check preconditions for special abilities', () => {
      const actions = hookResult.current.actions

      // Draw until we get a special card (for testing)
      act(() => {
        actions.drawFromDeck()
      })

      const drawnCardId = hookResult.current.gameState.ui.selectedCard
      if (drawnCardId) {
        const drawnCard = hookResult.current.gameState.cards[drawnCardId]
        
        if (drawnCard.isSpecial) {
          expect(actions.canUseSpecialAbility()).toBe(true)
        } else {
          expect(actions.canUseSpecialAbility()).toBe(false)
        }
      }
    })
  })

  describe('Action Availability Logic', () => {
    let hookResult: any

    beforeEach(() => {
      const { result } = renderHook(() => useGame(), { wrapper })
      hookResult = result

      act(() => {
        result.current.actions.startGame(4, ['Human', 'Bot1', 'Bot2', 'Bot3'])
      })
    })

    it('should provide correct available actions for each turn state', () => {
      const actions = hookResult.current.actions

      // Initial turn state - should be able to draw or call stop
      let availableActions = actions.getPlayerAvailableActions()
      expect(availableActions).toContain('DRAW_FROM_DECK')
      expect(availableActions).toContain('DRAW_FROM_DISCARD')
      expect(availableActions).toContain('CALL_STOP')
      expect(availableActions).not.toContain('REPLACE_CARD_0')

      // After drawing - should be able to replace or discard, not draw
      act(() => {
        actions.drawFromDeck()
      })

      availableActions = actions.getPlayerAvailableActions()
      expect(availableActions).not.toContain('DRAW_FROM_DECK')
      expect(availableActions).not.toContain('DRAW_FROM_DISCARD')
      expect(availableActions).toContain('REPLACE_CARD_0')
      expect(availableActions).toContain('REPLACE_CARD_1')
      expect(availableActions).toContain('REPLACE_CARD_2')
      expect(availableActions).toContain('REPLACE_CARD_3')
      expect(availableActions).toContain('DISCARD_DRAWN_CARD')
    })

    it('should update available actions after stop is called', () => {
      const actions = hookResult.current.actions

      // Call stop
      act(() => {
        actions.callStop()
      })

      // Stop should no longer be available
      const availableActions = actions.getPlayerAvailableActions()
      expect(availableActions).not.toContain('CALL_STOP')
      
      // Other actions should still be available for completing the turn
      expect(availableActions).toContain('DRAW_FROM_DECK')
      expect(availableActions).toContain('DRAW_FROM_DISCARD')
    })

    it('should handle available actions for different player types', () => {
      const actions = hookResult.current.actions
      const gameState = hookResult.current.gameState

      // Human player actions
      const humanActions = actions.getPlayerAvailableActions(gameState.players[0].id)
      expect(Array.isArray(humanActions)).toBe(true)

      // Bot player actions (when it's their turn)
      act(() => {
        actions.endTurn() // Switch to bot turn
      })

      const botActions = actions.getPlayerAvailableActions(gameState.players[1].id)
      expect(Array.isArray(botActions)).toBe(true)
      
      // Bot should have same action types available as human
      expect(botActions).toContain('DRAW_FROM_DECK')
      expect(botActions).toContain('DRAW_FROM_DISCARD')
    })
  })

  describe('Edge Case Validation', () => {
    let hookResult: any

    beforeEach(() => {
      const { result } = renderHook(() => useGame(), { wrapper })
      hookResult = result

      act(() => {
        result.current.actions.startGame(2, ['Human', 'Bot'])
      })
    })

    it('should handle rapid consecutive action attempts', () => {
      const actions = hookResult.current.actions
      const currentPlayerId = hookResult.current.gameState.players[0].id

      // Attempt rapid draws
      act(() => {
        actions.drawFromDeck()
        actions.drawFromDeck() // Should be ignored
        actions.drawFromDiscard() // Should be ignored
      })

      // Should only have one drawn card
      expect(hookResult.current.gameState.ui.selectedCard).toBeDefined()
      
      // Second draws should be invalid
      expect(actions.isValidAction(currentPlayerId, 'DRAW_FROM_DECK')).toBe(false)
    })

    it('should handle invalid action parameters', () => {
      const actions = hookResult.current.actions

      // Draw a card first
      act(() => {
        actions.drawFromDeck()
      })

      // Test invalid card indices
      expect(actions.canReplaceCard(-1)).toBe(false)
      expect(actions.canReplaceCard(4)).toBe(false)
      expect(actions.canReplaceCard(999)).toBe(false)
      
      // Valid indices should work
      expect(actions.canReplaceCard(0)).toBe(true)
      expect(actions.canReplaceCard(3)).toBe(true)
    })

    it('should maintain consistency during game state transitions', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState

      // Record initial validation state
      const initialCanDraw = actions.isValidAction(gameState.players[0].id, 'DRAW_FROM_DECK')
      expect(initialCanDraw).toBe(true)

      // Perform action and check consistency
      act(() => {
        actions.drawFromDeck()
      })

      gameState = hookResult.current.gameState
      expect(actions.isValidAction(gameState.players[0].id, 'DRAW_FROM_DECK')).toBe(false)
      expect(actions.isValidAction(gameState.players[0].id, 'REPLACE_CARD_0')).toBe(true)

      // Complete action and verify state reset
      act(() => {
        actions.replaceCard(0)
      })

      act(() => {
        actions.endTurn()
      })

      // Next player should be able to draw
      gameState = hookResult.current.gameState
      const nextPlayerId = gameState.players[gameState.round.currentPlayerIndex].id
      expect(actions.isValidAction(nextPlayerId, 'DRAW_FROM_DECK')).toBe(true)
    })
  })

  describe('Action Validation with Game Rules', () => {
    let hookResult: any

    beforeEach(() => {
      const { result } = renderHook(() => useGame(), { wrapper })
      hookResult = result

      act(() => {
        result.current.actions.startGame(3, ['Human', 'Bot1', 'Bot2'])
      })
    })

    it('should enforce turn order validation', () => {
      const actions = hookResult.current.actions
      const gameState = hookResult.current.gameState

      // Only current player should be able to act
      const currentPlayerIndex = gameState.round.currentPlayerIndex
      
      for (let i = 0; i < gameState.players.length; i++) {
        const playerId = gameState.players[i].id
        const shouldBeAbleToAct = i === currentPlayerIndex
        
        expect(actions.isValidAction(playerId, 'DRAW_FROM_DECK')).toBe(shouldBeAbleToAct)
        expect(actions.isValidAction(playerId, 'CALL_STOP')).toBe(shouldBeAbleToAct)
      }
    })

    it('should validate remaining turns after stop called', () => {
      const actions = hookResult.current.actions

      // Call stop
      act(() => {
        actions.callStop()
      })

      let gameState = hookResult.current.gameState
      expect(gameState.round.stopCalled).toBe(true)
      expect(gameState.round.remainingTurns).toBeGreaterThan(0)

      // Players should still be able to take their final turns
      const currentPlayerId = gameState.players[gameState.round.currentPlayerIndex].id
      expect(actions.isValidAction(currentPlayerId, 'DRAW_FROM_DECK')).toBe(true)
      
      // But stop should no longer be callable
      expect(actions.isValidAction(currentPlayerId, 'CALL_STOP')).toBe(false)
    })

    it('should validate actions during automatic round end', () => {
      const actions = hookResult.current.actions
      
      // Force round end by exhausting deck
      const initialDeckSize = hookResult.current.gameState.deck.drawPile.length
      
      for (let i = 0; i < initialDeckSize; i++) {
        const gameState = hookResult.current.gameState
        const currentPlayerId = gameState.players[gameState.round.currentPlayerIndex].id
        
        if (gameState.deck.drawPile.length > 0) {
          act(() => {
            actions.drawFromDeck()
            actions.discardDrawnCard()
            actions.endTurn()
          })
        }
      }

      // When round ends automatically, no actions should be valid
      const finalState = hookResult.current.gameState
      const currentPlayerId = finalState.players[finalState.round.currentPlayerIndex].id
      
      if (finalState.round.phase === GamePhase.SCORING) {
        expect(actions.isValidAction(currentPlayerId, 'DRAW_FROM_DECK')).toBe(false)
        expect(actions.isValidAction(currentPlayerId, 'CALL_STOP')).toBe(false)
      }
    })
  })
})