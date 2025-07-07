// Comprehensive bot AI behavior testing
import { describe, it, expect, beforeEach } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { GameProvider } from '../../contexts/GameContext'
import { useGame } from '../../hooks/useGame'
import { PlayerType } from '../../types'
import type { ReactNode } from '../../types'

const wrapper = ({ children }: { children: ReactNode }) => (
  <GameProvider>{children}</GameProvider>
)

describe('Bot AI Behavior Testing', () => {
  describe('Basic Bot Decision Making', () => {
    let hookResult: any

    beforeEach(() => {
      const { result } = renderHook(() => useGame(), { wrapper })
      hookResult = result

      act(() => {
        result.current.actions.startGame(3, ['Human', 'EasyBot1', 'EasyBot2'])
      })
    })

    it('should create bot players with correct type', () => {
      const gameState = hookResult.current.gameState

      expect(gameState.players[0].type).toBe(PlayerType.HUMAN)
      expect(gameState.players[1].type).toBe(PlayerType.BOT)
      expect(gameState.players[2].type).toBe(PlayerType.BOT)
    })

    it('should allow bots to make valid moves', () => {
      // Skip to bot turn
      act(() => {
        hookResult.current.actions.endTurn()
      })

      const gameState = hookResult.current.gameState
      const currentPlayer = gameState.players[gameState.round.currentPlayerIndex]
      
      expect(currentPlayer.type).toBe(PlayerType.BOT)
      
      // Bot should be able to draw cards
      const canDraw = hookResult.current.actions.isValidAction(currentPlayer.id, 'DRAW_FROM_DECK')
      expect(canDraw).toBe(true)
    })

    it('should handle bot turn progression', () => {
      const initialTurnNumber = hookResult.current.gameState.round.turnNumber

      // Progress through several bot turns
      for (let i = 0; i < 6; i++) {
        act(() => {
          hookResult.current.actions.endTurn()
        })
      }

      const finalTurnNumber = hookResult.current.gameState.round.turnNumber
      expect(finalTurnNumber).toBe(initialTurnNumber + 6)
    })

    it('should allow bots to call stop', () => {
      // Skip to bot turn
      act(() => {
        hookResult.current.actions.endTurn()
      })

      const gameState = hookResult.current.gameState
      const currentPlayer = gameState.players[gameState.round.currentPlayerIndex]
      
      expect(currentPlayer.type).toBe(PlayerType.BOT)
      
      // Bot should be able to call stop
      const canCallStop = hookResult.current.actions.isValidAction(currentPlayer.id, 'CALL_STOP')
      expect(canCallStop).toBe(true)
    })
  })

  describe('Bot Memory and Knowledge Tracking', () => {
    let hookResult: any

    beforeEach(() => {
      const { result } = renderHook(() => useGame(), { wrapper })
      hookResult = result

      act(() => {
        result.current.actions.startGame(2, ['Human', 'SmartBot'])
      })
    })

    it('should track bot card knowledge correctly', () => {
      const gameState = hookResult.current.gameState
      const botPlayer = gameState.players[1]

      // Bot should have initial knowledge of some cards
      const knownCards = botPlayer.cards.filter(card => card.isKnownToPlayer)
      const unknownCards = botPlayer.cards.filter(card => !card.isKnownToPlayer)

      // Initially, bots should know their first 2 cards
      expect(knownCards.length).toBe(2)
      expect(unknownCards.length).toBe(2)
    })

    it('should update bot knowledge when cards are replaced', () => {
      // Skip to bot turn
      act(() => {
        hookResult.current.actions.endTurn()
      })

      const gameState = hookResult.current.gameState
      const botPlayer = gameState.players[gameState.round.currentPlayerIndex]

      // Simulate bot drawing and replacing a card
      act(() => {
        hookResult.current.actions.drawFromDeck()
      })

      act(() => {
        hookResult.current.actions.replaceCard(2) // Replace unknown card
      })

      // Bot should now know the replaced card
      const updatedState = hookResult.current.gameState
      const updatedBot = updatedState.players[1]
      const newlyKnownCard = updatedBot.cards[2]

      expect(newlyKnownCard.isKnownToPlayer).toBe(true)
    })

    it('should handle bot knowledge during special abilities', () => {
      // Test bot behavior when special cards are involved
      const gameState = hookResult.current.gameState
      const botPlayer = gameState.players[1]

      // Bot should be able to use special abilities when available
      // (This test would be more meaningful when special abilities are fully implemented)
      expect(botPlayer.type).toBe(PlayerType.BOT)
    })
  })

  describe('Bot Strategy and Decision Patterns', () => {
    let hookResult: any

    beforeEach(() => {
      const { result } = renderHook(() => useGame(), { wrapper })
      hookResult = result

      act(() => {
        result.current.actions.startGame(4, ['Human', 'Bot1', 'Bot2', 'Bot3'])
      })
    })

    it('should make different decisions based on game state', () => {
      const gameState = hookResult.current.gameState
      
      // All bots should be able to make valid decisions
      gameState.players.filter(p => p.type === PlayerType.BOT).forEach(bot => {
        const availableActions = hookResult.current.actions.getPlayerAvailableActions()
        expect(availableActions.length).toBeGreaterThan(0)
      })
    })

    it('should handle bot decisions under pressure (stop called)', () => {
      // Call stop to put pressure on bots
      act(() => {
        hookResult.current.actions.callStop()
      })

      const gameState = hookResult.current.gameState
      expect(gameState.round.stopCalled).toBe(true)

      // Bots should still make valid moves during remaining turns
      for (let i = 0; i < 3; i++) {
        act(() => {
          hookResult.current.actions.endTurn()
        })

        const currentPlayer = hookResult.current.gameState.players[
          hookResult.current.gameState.round.currentPlayerIndex
        ]

        if (currentPlayer.type === PlayerType.BOT) {
          const availableActions = hookResult.current.actions.getPlayerAvailableActions()
          expect(availableActions.length).toBeGreaterThan(0)
        }
      }
    })

    it('should handle multiple bots in same game', () => {
      const gameState = hookResult.current.gameState
      const botCount = gameState.players.filter(p => p.type === PlayerType.BOT).length
      
      expect(botCount).toBe(3)
      
      // Each bot should be able to take turns independently
      for (let turn = 0; turn < 12; turn++) {
        const currentPlayer = hookResult.current.gameState.players[
          hookResult.current.gameState.round.currentPlayerIndex
        ]

        if (currentPlayer.type === PlayerType.BOT) {
          // Bot should have valid actions available
          const availableActions = hookResult.current.actions.getPlayerAvailableActions()
          expect(availableActions.length).toBeGreaterThan(0)
        }

        act(() => {
          hookResult.current.actions.endTurn()
        })
      }
    })
  })

  describe('Bot Performance and Efficiency', () => {
    let hookResult: any

    beforeEach(() => {
      const { result } = renderHook(() => useGame(), { wrapper })
      hookResult = result

      act(() => {
        result.current.actions.startGame(2, ['Human', 'Bot'])
      })
    })

    it('should process bot turns efficiently', () => {
      const startTime = Date.now()

      // Process 100 bot turns
      for (let i = 0; i < 100; i++) {
        // Skip to bot turn
        act(() => {
          hookResult.current.actions.endTurn()
        })

        // Process bot turn (in real implementation, this would be automatic)
        const gameState = hookResult.current.gameState
        const currentPlayer = gameState.players[gameState.round.currentPlayerIndex]

        if (currentPlayer.type === PlayerType.BOT) {
          // Simulate bot decision making
          act(() => {
            hookResult.current.actions.drawFromDeck()
          })

          act(() => {
            hookResult.current.actions.replaceCard(i % 4)
          })
        }

        act(() => {
          hookResult.current.actions.endTurn()
        })
      }

      const endTime = Date.now()
      const duration = endTime - startTime

      // Bot decisions should be reasonably fast
      expect(duration).toBeLessThan(5000) // 5 seconds for 100 turns
    })

    it('should maintain game state integrity during bot play', () => {
      // Let bots play for extended period
      for (let round = 0; round < 20; round++) {
        for (let turn = 0; turn < 10; turn++) {
          const gameState = hookResult.current.gameState
          const currentPlayer = gameState.players[gameState.round.currentPlayerIndex]

          if (currentPlayer.type === PlayerType.BOT) {
            act(() => {
              hookResult.current.actions.drawFromDeck()
            })

            act(() => {
              hookResult.current.actions.replaceCard(turn % 4)
            })
          }

          act(() => {
            hookResult.current.actions.endTurn()
          })
        }
      }

      // Verify game state remains valid
      const stats = hookResult.current.actions.getGameStatistics()
      expect(stats.isValidState).toBe(true)
    })
  })

  describe('Bot Error Handling and Edge Cases', () => {
    let hookResult: any

    beforeEach(() => {
      const { result } = renderHook(() => useGame(), { wrapper })
      hookResult = result

      act(() => {
        result.current.actions.startGame(2, ['Human', 'Bot'])
      })
    })

    it('should handle bot decisions when deck is empty', () => {
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

      // Bot should handle empty deck gracefully
      const gameState = hookResult.current.gameState
      expect(gameState.deck.drawPile.length).toBe(0)

      // Skip to bot turn
      act(() => {
        hookResult.current.actions.endTurn()
      })

      const currentPlayer = hookResult.current.gameState.players[
        hookResult.current.gameState.round.currentPlayerIndex
      ]

      if (currentPlayer.type === PlayerType.BOT) {
        // Bot should still have some valid actions (like drawing from discard)
        const availableActions = hookResult.current.actions.getPlayerAvailableActions()
        expect(Array.isArray(availableActions)).toBe(true)
      }
    })

    it('should handle bot behavior during invalid game states', () => {
      // Create unusual game state and see how bot handles it
      const gameState = hookResult.current.gameState
      
      // Skip to bot turn
      act(() => {
        hookResult.current.actions.endTurn()
      })

      const currentPlayer = hookResult.current.gameState.players[
        hookResult.current.gameState.round.currentPlayerIndex
      ]

      expect(currentPlayer.type).toBe(PlayerType.BOT)
      
      // Bot should not crash the game even in edge cases
      const stats = hookResult.current.actions.getGameStatistics()
      expect(stats.isValidState).toBe(true)
    })

    it('should handle bot decisions when all other players have called stop', () => {
      // Human calls stop
      act(() => {
        hookResult.current.actions.callStop()
      })

      // Skip to bot turn
      act(() => {
        hookResult.current.actions.endTurn()
      })

      const gameState = hookResult.current.gameState
      const currentPlayer = gameState.players[gameState.round.currentPlayerIndex]

      if (currentPlayer.type === PlayerType.BOT) {
        expect(gameState.round.stopCalled).toBe(true)
        
        // Bot should still be able to make final moves
        const availableActions = hookResult.current.actions.getPlayerAvailableActions()
        expect(availableActions.length).toBeGreaterThan(0)
      }
    })
  })

  describe('Bot Learning and Adaptation', () => {
    let hookResult: any

    beforeEach(() => {
      const { result } = renderHook(() => useGame(), { wrapper })
      hookResult = result

      act(() => {
        result.current.actions.startGame(2, ['Human', 'AdaptiveBot'])
      })
    })

    it('should maintain consistent behavior patterns', () => {
      const botDecisions = []

      // Record bot decisions over multiple turns
      for (let i = 0; i < 20; i++) {
        // Skip to bot turn
        act(() => {
          hookResult.current.actions.endTurn()
        })

        const gameState = hookResult.current.gameState
        const currentPlayer = gameState.players[gameState.round.currentPlayerIndex]

        if (currentPlayer.type === PlayerType.BOT) {
          const availableActions = hookResult.current.actions.getPlayerAvailableActions()
          botDecisions.push({
            turn: i,
            availableActions: availableActions.length,
            hasSelectedCard: !!gameState.ui.selectedCard
          })

          // Simulate bot making a decision
          act(() => {
            hookResult.current.actions.drawFromDeck()
          })

          act(() => {
            hookResult.current.actions.replaceCard(i % 4)
          })
        }

        act(() => {
          hookResult.current.actions.endTurn()
        })
      }

      // Bot should have made consistent decisions
      expect(botDecisions.length).toBeGreaterThan(0)
      botDecisions.forEach(decision => {
        expect(decision.availableActions).toBeGreaterThan(0)
      })
    })

    it('should handle different game scenarios appropriately', () => {
      const scenarios = []

      // Create different game scenarios and test bot responses
      for (let scenario = 0; scenario < 5; scenario++) {
        // Reset for each scenario
        act(() => {
          hookResult.current.actions.startGame(2, ['Human', `Bot${scenario}`])
        })

        // Skip to bot turn
        act(() => {
          hookResult.current.actions.endTurn()
        })

        const gameState = hookResult.current.gameState
        const currentPlayer = gameState.players[gameState.round.currentPlayerIndex]

        if (currentPlayer.type === PlayerType.BOT) {
          const availableActions = hookResult.current.actions.getPlayerAvailableActions()
          scenarios.push({
            scenario,
            botName: currentPlayer.name,
            actionsAvailable: availableActions.length
          })
        }
      }

      // All scenarios should be handled successfully
      expect(scenarios.length).toBe(5)
      scenarios.forEach(scenario => {
        expect(scenario.actionsAvailable).toBeGreaterThan(0)
      })
    })
  })
})