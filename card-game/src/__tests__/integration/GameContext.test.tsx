// Integration tests for Game Context
import { describe, it, expect, beforeEach } from 'vitest'
import { render, renderHook, act } from '@testing-library/react'
import { GameProvider } from '../../contexts/GameContext'
import { useGame } from '../../hooks/useGame'
import type { ReactNode } from 'react'

const wrapper = ({ children }: { children: ReactNode }) => (
  <GameProvider>{children}</GameProvider>
)

describe('GameContext Integration', () => {
  describe('GameProvider', () => {
    it('should provide game context to children', () => {
      const TestComponent = () => {
        const { gameState } = useGame()
        return <div data-testid="game-phase">{gameState.round.phase}</div>
      }

      const { getByTestId } = render(
        <GameProvider>
          <TestComponent />
        </GameProvider>
      )

      expect(getByTestId('game-phase')).toHaveTextContent('setup')
    })

    it('should provide all context functions', () => {
      const { result } = renderHook(() => useGame(), { wrapper })

      const { actions } = result.current

      // Test that all expected functions are provided
      expect(typeof actions.startGame).toBe('function')
      expect(typeof actions.makeMove).toBe('function')
      expect(typeof actions.endTurn).toBe('function')
      expect(typeof actions.callStop).toBe('function')
      expect(typeof actions.drawFromDeck).toBe('function')
      expect(typeof actions.drawFromDiscard).toBe('function')
      expect(typeof actions.replaceCard).toBe('function')
      expect(typeof actions.discardDrawnCard).toBe('function')
      expect(typeof actions.getCurrentPlayer).toBe('function')
      expect(typeof actions.getGameStatistics).toBe('function')
      expect(typeof actions.getTurnAnalysis).toBe('function')
    })
  })

  describe('Game Flow Integration', () => {
    it('should start game correctly', () => {
      const { result } = renderHook(() => useGame(), { wrapper })

      act(() => {
        result.current.actions.startGame(2, ['Player 1', 'Bot 1'])
      })

      const { gameState } = result.current

      expect(gameState.round.phase).toBe('playing')
      expect(gameState.players).toHaveLength(2)
      expect(gameState.players[0].name).toBe('Player 1')
      expect(gameState.players[1].name).toBe('Bot 1')
      expect(gameState.players[0].type).toBe('human')
      expect(gameState.players[1].type).toBe('bot')
    })

    it('should handle card drawing', () => {
      const { result } = renderHook(() => useGame(), { wrapper })

      // Start game first
      act(() => {
        result.current.actions.startGame(2, ['Player 1', 'Bot 1'])
      })

      const initialDeckSize = result.current.gameState.deck.drawPile.length

      // Draw a card
      act(() => {
        result.current.actions.drawFromDeck()
      })

      const { gameState } = result.current

      expect(gameState.ui.selectedCard).toBeDefined()
      expect(gameState.deck.drawPile.length).toBe(initialDeckSize - 1)
    })

    it('should handle card replacement', () => {
      const { result } = renderHook(() => useGame(), { wrapper })

      // Start game and draw card
      act(() => {
        result.current.actions.startGame(2, ['Player 1', 'Bot 1'])
      })

      act(() => {
        result.current.actions.drawFromDeck()
      })

      const drawnCard = result.current.gameState.ui.selectedCard
      expect(drawnCard).toBeDefined()

      // Replace card at index 0
      act(() => {
        result.current.actions.replaceCard(0)
      })

      const { gameState } = result.current

      expect(gameState.ui.selectedCard).toBeNull()
      expect(gameState.players[0].cards[0].cardId).toBe(drawnCard)
      expect(gameState.players[0].cards[0].isKnownToPlayer).toBe(true)
    })

    it('should handle turn progression', () => {
      const { result } = renderHook(() => useGame(), { wrapper })

      // Start game
      act(() => {
        result.current.actions.startGame(2, ['Player 1', 'Bot 1'])
      })

      const initialPlayerIndex = result.current.gameState.round.currentPlayerIndex
      const initialTurnNumber = result.current.gameState.round.turnNumber

      // End turn
      act(() => {
        result.current.actions.endTurn()
      })

      const { gameState } = result.current

      expect(gameState.round.currentPlayerIndex).toBe((initialPlayerIndex + 1) % 2)
      expect(gameState.round.turnNumber).toBe(initialTurnNumber + 1)
    })

    it('should handle stop calling', () => {
      const { result } = renderHook(() => useGame(), { wrapper })

      // Start game
      act(() => {
        result.current.actions.startGame(2, ['Player 1', 'Bot 1'])
      })

      expect(result.current.gameState.round.stopCalled).toBe(false)

      // Call stop
      act(() => {
        result.current.actions.callStop()
      })

      const { gameState } = result.current

      expect(gameState.round.stopCalled).toBe(true)
      expect(gameState.round.stopCalledBy).toBe(gameState.players[0].id)
      expect(gameState.round.remainingTurns).toBe(1) // Other players get one turn
    })
  })

  describe('Game Statistics Integration', () => {
    it('should provide game statistics', () => {
      const { result } = renderHook(() => useGame(), { wrapper })

      act(() => {
        result.current.actions.startGame(2, ['Player 1', 'Bot 1'])
      })

      const stats = result.current.actions.getGameStatistics()

      expect(stats).toHaveProperty('gameId')
      expect(stats).toHaveProperty('phase')
      expect(stats).toHaveProperty('currentRound')
      expect(stats).toHaveProperty('playerCount')
      expect(stats).toHaveProperty('cardsInDeck')
      expect(stats).toHaveProperty('isValidState')

      expect(stats.phase).toBe('playing')
      expect(stats.playerCount).toBe(2)
      expect(stats.isValidState).toBe(true)
    })

    it('should provide turn analysis', () => {
      const { result } = renderHook(() => useGame(), { wrapper })

      act(() => {
        result.current.actions.startGame(2, ['Player 1', 'Bot 1'])
      })

      const analysis = result.current.actions.getTurnAnalysis()

      expect(analysis).toHaveProperty('currentPlayer')
      expect(analysis).toHaveProperty('turnState')
      expect(analysis).toHaveProperty('gameProgression')
      expect(analysis).toHaveProperty('deckState')

      expect(analysis.currentPlayer.name).toBe('Player 1')
      expect(analysis.currentPlayer.type).toBe('human')
      expect(analysis.turnState.hasDrawnCard).toBe(false)
      expect(analysis.gameProgression.phase).toBe('playing')
    })

    it('should provide available actions', () => {
      const { result } = renderHook(() => useGame(), { wrapper })

      act(() => {
        result.current.actions.startGame(2, ['Player 1', 'Bot 1'])
      })

      const actions = result.current.actions.getPlayerAvailableActions()

      expect(Array.isArray(actions)).toBe(true)
      expect(actions.length).toBeGreaterThan(0)
      expect(actions).toContain('DRAW_FROM_DECK')
      expect(actions).toContain('DRAW_FROM_DISCARD')
      expect(actions).toContain('CALL_STOP')
    })
  })

  describe('Game Flow Control Integration', () => {
    it('should provide flow control functions', () => {
      const { result } = renderHook(() => useGame(), { wrapper })

      expect(typeof result.current.actions.forceEndTurn).toBe('function')
      expect(typeof result.current.actions.forceNextRound).toBe('function')
      expect(typeof result.current.actions.getGameFlowInfo).toBe('function')
      expect(typeof result.current.actions.forceProgressScoring).toBe('function')
    })

    it('should provide game flow info', () => {
      const { result } = renderHook(() => useGame(), { wrapper })

      act(() => {
        result.current.actions.startGame(2, ['Player 1', 'Bot 1'])
      })

      const flowInfo = result.current.actions.getGameFlowInfo()

      expect(flowInfo).toHaveProperty('phase')
      expect(flowInfo).toHaveProperty('currentPlayer')
      expect(flowInfo).toHaveProperty('turnNumber')
      expect(flowInfo).toHaveProperty('availableActions')
      expect(flowInfo).toHaveProperty('validationErrors')

      expect(flowInfo.phase).toBe('playing')
      expect(flowInfo.validationErrors).toEqual([])
    })

    it('should validate actions correctly', () => {
      const { result } = renderHook(() => useGame(), { wrapper })

      act(() => {
        result.current.actions.startGame(2, ['Player 1', 'Bot 1'])
      })

      const currentPlayerId = result.current.gameState.players[0].id
      const otherPlayerId = result.current.gameState.players[1].id

      // Current player should be able to draw
      expect(result.current.actions.isValidAction(currentPlayerId, 'DRAW_FROM_DECK')).toBe(true)
      
      // Other player should not be able to draw (not their turn)
      expect(result.current.actions.isValidAction(otherPlayerId, 'DRAW_FROM_DECK')).toBe(false)
    })
  })

  describe('Error Handling', () => {
    it('should handle invalid actions gracefully', () => {
      const { result } = renderHook(() => useGame(), { wrapper })

      // Try to draw without starting game
      act(() => {
        result.current.actions.drawFromDeck()
      })

      // Should not crash, game state should remain in setup
      expect(result.current.gameState.round.phase).toBe('setup')
    })

    it('should handle invalid card replacement', () => {
      const { result } = renderHook(() => useGame(), { wrapper })

      act(() => {
        result.current.actions.startGame(2, ['Player 1', 'Bot 1'])
      })

      // Try to replace card without drawing first
      act(() => {
        result.current.actions.replaceCard(0)
      })

      // Should not crash or change game state inappropriately
      expect(result.current.gameState.ui.selectedCard).toBeNull()
    })
  })
})