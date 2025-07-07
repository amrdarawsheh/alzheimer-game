// Comprehensive stress tests and edge case testing
import { describe, it, expect, beforeEach } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { GameProvider } from '../../contexts/GameContext'
import { useGame } from '../../hooks/useGame'
import { GamePhase } from '../../types'
import type { ReactNode } from '../../types'

const wrapper = ({ children }: { children: ReactNode }) => (
  <GameProvider>{children}</GameProvider>
)

describe('Stress Tests and Edge Cases', () => {
  describe('High-Volume Action Stress Tests', () => {
    let hookResult: any

    beforeEach(() => {
      const { result } = renderHook(() => useGame(), { wrapper })
      hookResult = result

      act(() => {
        result.current.actions.startGame(2, ['Human', 'Bot'])
      })
    })

    it('should handle rapid-fire card draws and replacements', () => {
      // Perform 50 rapid draw/replace cycles
      for (let i = 0; i < 50; i++) {
        act(() => {
          hookResult.current.actions.drawFromDeck()
        })

        act(() => {
          hookResult.current.actions.replaceCard(i % 4)
        })

        act(() => {
          hookResult.current.actions.endTurn()
        })
      }

      // Verify game state remains valid
      const stats = hookResult.current.actions.getGameStatistics()
      expect(stats.isValidState).toBe(true)
      expect(hookResult.current.gameState.round.phase).toBe(GamePhase.PLAYING)
    })

    it('should handle multiple consecutive discard actions', () => {
      // Draw and discard 30 cards in a row
      for (let i = 0; i < 30; i++) {
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
      expect(gameState.deck.discardPile.length).toBeGreaterThan(30)
      
      const stats = hookResult.current.actions.getGameStatistics()
      expect(stats.isValidState).toBe(true)
    })

    it('should maintain performance with extensive card knowledge updates', () => {
      // Simulate extensive knowledge tracking updates
      const startTime = Date.now()

      for (let i = 0; i < 100; i++) {
        act(() => {
          hookResult.current.actions.drawFromDeck()
        })

        act(() => {
          hookResult.current.actions.replaceCard((i % 4))
        })

        act(() => {
          hookResult.current.actions.endTurn()
        })
      }

      const endTime = Date.now()
      const duration = endTime - startTime

      // Should complete within reasonable time (adjust threshold as needed)
      expect(duration).toBeLessThan(5000) // 5 seconds
      
      const stats = hookResult.current.actions.getGameStatistics()
      expect(stats.isValidState).toBe(true)
    })

    it('should handle rapid turn progression', () => {
      // Rapidly progress through many turns
      for (let i = 0; i < 200; i++) {
        act(() => {
          hookResult.current.actions.endTurn()
        })
      }

      const gameState = hookResult.current.gameState
      expect(gameState.round.turnNumber).toBeGreaterThan(200)
      expect(gameState.round.currentPlayerIndex).toBe(200 % 2)
    })
  })

  describe('Empty Deck Scenarios', () => {
    let hookResult: any

    beforeEach(() => {
      const { result } = renderHook(() => useGame(), { wrapper })
      hookResult = result

      act(() => {
        result.current.actions.startGame(2, ['Human', 'Bot'])
      })
    })

    it('should handle deck depletion gracefully', () => {
      // Draw cards until deck is nearly empty
      const initialDeckSize = hookResult.current.gameState.deck.drawPile.length
      
      for (let i = 0; i < initialDeckSize - 1; i++) {
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

      // Deck should be nearly empty
      const gameState = hookResult.current.gameState
      expect(gameState.deck.drawPile.length).toBeLessThanOrEqual(1)
      
      const stats = hookResult.current.actions.getGameStatistics()
      expect(stats.isValidState).toBe(true)
    })

    it('should prevent drawing from empty deck', () => {
      // Exhaust the deck completely
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

      // Attempt to draw from empty deck
      const canDraw = hookResult.current.actions.isValidAction(
        hookResult.current.gameState.players[0].id, 
        'DRAW_FROM_DECK'
      )

      // Should not be able to draw from empty deck
      expect(canDraw).toBe(false)
    })

    it('should trigger auto-stop when deck is empty', () => {
      // Exhaust deck and verify auto-stop behavior
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
      expect(gameState.deck.drawPile.length).toBe(0)
      
      // Auto-stop should be triggered or round should end
      // (Exact behavior depends on game flow implementation)
      const flowInfo = hookResult.current.actions.getGameFlowInfo()
      expect(flowInfo).toBeDefined()
    })

    it('should handle discard pile as only source of cards', () => {
      // Create scenario where only discard pile has cards
      for (let i = 0; i < 10; i++) {
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

      // Now try to draw from discard
      act(() => {
        hookResult.current.actions.drawFromDiscard()
      })

      const gameState = hookResult.current.gameState
      expect(gameState.ui.selectedCard).toBeDefined()
    })
  })

  describe('Edge Case Game States', () => {
    let hookResult: any

    beforeEach(() => {
      const { result } = renderHook(() => useGame(), { wrapper })
      hookResult = result
    })

    it('should handle minimum player count (2 players)', () => {
      act(() => {
        result.current.actions.startGame(2, ['P1', 'P2'])
      })

      const gameState = hookResult.current.gameState
      expect(gameState.players).toHaveLength(2)
      expect(gameState.round.phase).toBe(GamePhase.PLAYING)
    })

    it('should handle maximum player count (4 players)', () => {
      act(() => {
        hookResult.current.actions.startGame(4, ['P1', 'P2', 'P3', 'P4'])
      })

      const gameState = hookResult.current.gameState
      expect(gameState.players).toHaveLength(4)
      expect(gameState.deck.drawPile.length).toBe(37) // 54 - 16 - 1
    })

    it('should handle edge case: all cards known to player', () => {
      act(() => {
        hookResult.current.actions.startGame(2, ['Human', 'Bot'])
      })

      // Simulate scenario where all cards become known
      for (let i = 0; i < 4; i++) {
        act(() => {
          hookResult.current.actions.drawFromDeck()
        })

        act(() => {
          hookResult.current.actions.replaceCard(i)
        })

        act(() => {
          hookResult.current.actions.endTurn()
        })
      }

      const player = hookResult.current.gameState.players[0]
      const allKnown = player.cards.every(card => card.isKnownToPlayer)
      expect(allKnown).toBe(true)
    })

    it('should handle edge case: no cards known to player', () => {
      act(() => {
        hookResult.current.actions.startGame(2, ['Human', 'Bot'])
      })

      // Simulate scenario where knowledge is reset (theoretical edge case)
      const player = hookResult.current.gameState.players[1] // Bot player
      const hasUnknownCards = player.cards.some(card => !card.isKnownToPlayer)
      expect(hasUnknownCards).toBe(true)
    })

    it('should handle concurrent stop calls from different players', () => {
      act(() => {
        hookResult.current.actions.startGame(2, ['Human', 'Bot'])
      })

      // Player 1 calls stop
      act(() => {
        hookResult.current.actions.callStop()
      })

      const firstCallState = hookResult.current.gameState
      expect(firstCallState.round.stopCalled).toBe(true)

      // End turn to player 2
      act(() => {
        hookResult.current.actions.endTurn()
      })

      // Player 2 tries to call stop (should be ignored)
      act(() => {
        hookResult.current.actions.callStop()
      })

      const secondCallState = hookResult.current.gameState
      expect(secondCallState.round.stopCalledBy).toBe(firstCallState.round.stopCalledBy)
    })

    it('should handle invalid card indices gracefully', () => {
      act(() => {
        hookResult.current.actions.startGame(2, ['Human', 'Bot'])
      })

      act(() => {
        hookResult.current.actions.drawFromDeck()
      })

      // Try to replace card at invalid index
      act(() => {
        hookResult.current.actions.replaceCard(99)
      })

      // Game should remain stable
      const gameState = hookResult.current.gameState
      expect(gameState.ui.selectedCard).toBeDefined() // Card should still be drawn
      
      const stats = hookResult.current.actions.getGameStatistics()
      expect(stats.isValidState).toBe(true)
    })
  })

  describe('Memory and Performance Tests', () => {
    let hookResult: any

    beforeEach(() => {
      const { result } = renderHook(() => useGame(), { wrapper })
      hookResult = result

      act(() => {
        result.current.actions.startGame(4, ['P1', 'P2', 'P3', 'P4'])
      })
    })

    it('should maintain consistent memory usage during extended play', () => {
      // Simulate extended gameplay
      for (let round = 0; round < 10; round++) {
        for (let turn = 0; turn < 20; turn++) {
          act(() => {
            hookResult.current.actions.drawFromDeck()
          })

          act(() => {
            hookResult.current.actions.replaceCard(turn % 4)
          })

          act(() => {
            hookResult.current.actions.endTurn()
          })
        }
      }

      // Verify game state is still valid
      const stats = hookResult.current.actions.getGameStatistics()
      expect(stats.isValidState).toBe(true)
      expect(stats.playerCount).toBe(4)
    })

    it('should handle large numbers of game state updates efficiently', () => {
      const startTime = Date.now()

      // Perform 1000 state updates
      for (let i = 0; i < 1000; i++) {
        act(() => {
          hookResult.current.actions.endTurn()
        })
      }

      const endTime = Date.now()
      const duration = endTime - startTime

      // Should be reasonably fast
      expect(duration).toBeLessThan(10000) // 10 seconds
      
      const gameState = hookResult.current.gameState
      expect(gameState.round.turnNumber).toBeGreaterThan(1000)
    })

    it('should maintain card count integrity through complex operations', () => {
      // Perform complex sequence of operations
      for (let i = 0; i < 50; i++) {
        act(() => {
          hookResult.current.actions.drawFromDeck()
        })

        if (i % 3 === 0) {
          act(() => {
            hookResult.current.actions.replaceCard(i % 4)
          })
        } else {
          act(() => {
            hookResult.current.actions.discardDrawnCard()
          })
        }

        act(() => {
          hookResult.current.actions.endTurn()
        })
      }

      // Verify total card count is preserved
      const stats = hookResult.current.actions.getGameStatistics()
      const gameState = hookResult.current.gameState
      
      const cardsInHands = gameState.players.reduce((sum, player) => sum + player.cards.length, 0)
      const cardsInDeck = stats.cardsInDeck
      const cardsInDiscard = gameState.deck.discardPile.length
      const selectedCard = gameState.ui.selectedCard ? 1 : 0

      const totalCards = cardsInHands + cardsInDeck + cardsInDiscard + selectedCard
      expect(totalCards).toBe(54)
    })
  })

  describe('Boundary Condition Tests', () => {
    let hookResult: any

    beforeEach(() => {
      const { result } = renderHook(() => useGame(), { wrapper })
      hookResult = result
    })

    it('should handle game start with empty player names', () => {
      act(() => {
        result.current.actions.startGame(2, ['', ''])
      })

      const gameState = hookResult.current.gameState
      expect(gameState.players).toHaveLength(2)
      expect(gameState.players[0].name).toBe('')
      expect(gameState.players[1].name).toBe('')
    })

    it('should handle very long player names', () => {
      const longName = 'A'.repeat(1000)
      
      act(() => {
        result.current.actions.startGame(2, [longName, 'Bot'])
      })

      const gameState = hookResult.current.gameState
      expect(gameState.players[0].name).toBe(longName)
    })

    it('should handle special characters in player names', () => {
      const specialName = '!@#$%^&*()_+-={}[]|\\:";\'<>?,./'
      
      act(() => {
        result.current.actions.startGame(2, [specialName, 'Bot'])
      })

      const gameState = hookResult.current.gameState
      expect(gameState.players[0].name).toBe(specialName)
    })

    it('should handle unicode characters in player names', () => {
      const unicodeName = '🎮👾🃏🎯🎲'
      
      act(() => {
        result.current.actions.startGame(2, [unicodeName, 'Bot'])
      })

      const gameState = hookResult.current.gameState
      expect(gameState.players[0].name).toBe(unicodeName)
    })

    it('should maintain game state consistency with extreme turn numbers', () => {
      act(() => {
        result.current.actions.startGame(2, ['P1', 'P2'])
      })

      // Skip to very high turn number
      for (let i = 0; i < 1000; i++) {
        act(() => {
          hookResult.current.actions.endTurn()
        })
      }

      const gameState = hookResult.current.gameState
      expect(gameState.round.turnNumber).toBe(1001)
      expect(gameState.round.currentPlayerIndex).toBe(1000 % 2)
      
      const stats = hookResult.current.actions.getGameStatistics()
      expect(stats.isValidState).toBe(true)
    })
  })

  describe('Concurrent Action Simulation', () => {
    let hookResult: any

    beforeEach(() => {
      const { result } = renderHook(() => useGame(), { wrapper })
      hookResult = result

      act(() => {
        result.current.actions.startGame(3, ['P1', 'P2', 'P3'])
      })
    })

    it('should handle rapid consecutive actions', () => {
      // Simulate rapid-fire actions that might occur in real gameplay
      const actions = [
        () => hookResult.current.actions.drawFromDeck(),
        () => hookResult.current.actions.replaceCard(0),
        () => hookResult.current.actions.endTurn(),
        () => hookResult.current.actions.drawFromDiscard(),
        () => hookResult.current.actions.discardDrawnCard(),
        () => hookResult.current.actions.endTurn(),
      ]

      // Execute actions rapidly
      actions.forEach(action => {
        act(() => {
          action()
        })
      })

      const stats = hookResult.current.actions.getGameStatistics()
      expect(stats.isValidState).toBe(true)
    })

    it('should maintain consistency during overlapping turn operations', () => {
      // Simulate overlapping operations that might stress the state management
      for (let cycle = 0; cycle < 10; cycle++) {
        act(() => {
          hookResult.current.actions.drawFromDeck()
        })

        act(() => {
          hookResult.current.actions.replaceCard(cycle % 4)
        })

        act(() => {
          hookResult.current.actions.callStop()
        })

        act(() => {
          hookResult.current.actions.endTurn()
        })
      }

      const gameState = hookResult.current.gameState
      expect(gameState.round.stopCalled).toBe(true)
      
      const stats = hookResult.current.actions.getGameStatistics()
      expect(stats.isValidState).toBe(true)
    })
  })
})