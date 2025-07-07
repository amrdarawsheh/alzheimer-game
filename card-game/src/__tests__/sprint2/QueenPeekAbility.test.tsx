// Sprint 2 TDD: Queen Peek Ability Tests
import { describe, it, expect, beforeEach } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { GameProvider } from '../../contexts/GameContext'
import { useGame } from '../../hooks/useGame'
import { Rank } from '../../types'
import type { ReactNode } from 'react'

const wrapper = ({ children }: { children: ReactNode }) => (
  <GameProvider>{children}</GameProvider>
)

describe('Sprint 2: Queen Peek Ability', () => {
  describe('Queen Card Detection and Ability Triggering', () => {
    let hookResult: any

    beforeEach(() => {
      const { result } = renderHook(() => useGame(), { wrapper })
      hookResult = result

      act(() => {
        result.current.actions.startGame(3, ['Human', 'Bot1', 'Bot2'])
      })
    })

    it('should detect Queen cards and trigger peek ability', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Find or create a Queen card in the deck
      const queenCards = Object.values(gameState.cards).filter(card => card.rank === Rank.QUEEN)
      expect(queenCards.length).toBeGreaterThan(0)
      
      // Simulate drawing a Queen from deck
      // This test assumes we can manipulate the deck to have a Queen on top
      const queenCard = queenCards[0]
      
      // Mock drawing a Queen
      act(() => {
        actions.forceDrawCard(queenCard.id)
      })
      
      gameState = hookResult.current.gameState
      
      // UI should show peek ability is available
      expect(actions.canUseSpecialAbility()).toBe(true)
      expect(actions.getSpecialAbilityType()).toBe('peek')
      
      // Should trigger peek modal or selection UI
      expect(gameState.ui.showingPeekAbility).toBe(true)
    })

    it('should only trigger peek ability when Queen is drawn from deck', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Place a Queen in discard pile
      const queenCard = Object.values(gameState.cards).find(card => card.rank === Rank.QUEEN)
      expect(queenCard).toBeDefined()
      
      act(() => {
        actions.forceCardToDiscard(queenCard!.id)
      })
      
      // Draw the Queen from discard
      act(() => {
        actions.drawFromDiscard()
      })
      
      gameState = hookResult.current.gameState
      
      // Peek ability should NOT be available (Queen from discard)
      expect(actions.canUseSpecialAbility()).toBe(false)
      expect(gameState.ui.showingPeekAbility).toBe(false)
    })

    it('should handle Queen peek ability during card swaps', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Give player a Queen card through swap
      const queenCard = Object.values(gameState.cards).find(card => card.rank === Rank.QUEEN)
      expect(queenCard).toBeDefined()
      
      // Simulate Jack swap that gives player a Queen
      act(() => {
        actions.forceSwapPlayerCard(0, queenCard!.id)
      })
      
      gameState = hookResult.current.gameState
      
      // Queen from swap should NOT trigger peek ability
      expect(actions.canUseSpecialAbility()).toBe(false)
      expect(gameState.ui.showingPeekAbility).toBe(false)
    })

    it('should validate Queen peek ability availability', () => {
      const actions = hookResult.current.actions
      
      // Initially no special ability
      expect(actions.canUseSpecialAbility()).toBe(false)
      
      // Draw a non-Queen card
      act(() => {
        actions.drawFromDeck()
      })
      
      let gameState = hookResult.current.gameState
      const drawnCard = gameState.cards[gameState.ui.selectedCard!]
      
      if (drawnCard.rank !== Rank.QUEEN) {
        expect(actions.canUseSpecialAbility()).toBe(false)
      } else {
        expect(actions.canUseSpecialAbility()).toBe(true)
      }
    })
  })

  describe('Peek Target Selection and Validation', () => {
    let hookResult: any

    beforeEach(() => {
      const { result } = renderHook(() => useGame(), { wrapper })
      hookResult = result

      act(() => {
        result.current.actions.startGame(4, ['Human', 'Bot1', 'Bot2', 'Bot3'])
      })
    })

    it('should allow peeking at any opponent card', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Simulate having drawn a Queen
      act(() => {
        actions.forceDrawQueen()
      })
      
      gameState = hookResult.current.gameState
      
      // Should be able to peek at any opponent's card
      for (let playerIndex = 1; playerIndex < gameState.players.length; playerIndex++) {
        const targetPlayer = gameState.players[playerIndex]
        
        for (let cardIndex = 0; cardIndex < 4; cardIndex++) {
          expect(actions.canPeekAtCard(targetPlayer.id, cardIndex)).toBe(true)
        }
      }
    })

    it('should not allow peeking at own cards', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Simulate having drawn a Queen
      act(() => {
        actions.forceDrawQueen()
      })
      
      const humanPlayer = gameState.players[0]
      
      // Should not be able to peek at own cards
      for (let cardIndex = 0; cardIndex < 4; cardIndex++) {
        expect(actions.canPeekAtCard(humanPlayer.id, cardIndex)).toBe(false)
      }
    })

    it('should validate peek target parameters', () => {
      const actions = hookResult.current.actions
      
      // Simulate having drawn a Queen
      act(() => {
        actions.forceDrawQueen()
      })
      
      let gameState = hookResult.current.gameState
      const targetPlayer = gameState.players[1]
      
      // Valid parameters
      expect(actions.canPeekAtCard(targetPlayer.id, 0)).toBe(true)
      expect(actions.canPeekAtCard(targetPlayer.id, 3)).toBe(true)
      
      // Invalid parameters
      expect(actions.canPeekAtCard(targetPlayer.id, -1)).toBe(false)
      expect(actions.canPeekAtCard(targetPlayer.id, 4)).toBe(false)
      expect(actions.canPeekAtCard('invalid-player', 0)).toBe(false)
      expect(actions.canPeekAtCard(targetPlayer.id, 999)).toBe(false)
    })

    it('should handle peek target selection UI', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Simulate having drawn a Queen
      act(() => {
        actions.forceDrawQueen()
      })
      
      gameState = hookResult.current.gameState
      
      // UI should show peek target selection
      expect(gameState.ui.showingPeekTargetSelection).toBe(true)
      expect(gameState.ui.availablePeekTargets).toBeDefined()
      
      // Available targets should include all opponent cards
      const availableTargets = gameState.ui.availablePeekTargets
      expect(availableTargets.length).toBe(12) // 3 opponents × 4 cards each
      
      // Each target should specify player and card index
      availableTargets.forEach(target => {
        expect(target.playerId).toBeDefined()
        expect(target.cardIndex).toBeGreaterThanOrEqual(0)
        expect(target.cardIndex).toBeLessThan(4)
        expect(target.playerId).not.toBe(gameState.players[0].id) // Not human player
      })
    })
  })

  describe('Peek Execution and Information Gathering', () => {
    let hookResult: any

    beforeEach(() => {
      const { result } = renderHook(() => useGame(), { wrapper })
      hookResult = result

      act(() => {
        result.current.actions.startGame(2, ['Human', 'Bot'])
      })
    })

    it('should execute peek and reveal target card information', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Draw a Queen
      act(() => {
        actions.forceDrawQueen()
      })
      
      const targetPlayer = gameState.players[1]
      const targetCardIndex = 0
      const targetCard = targetPlayer.cards[targetCardIndex]
      
      // Execute peek
      act(() => {
        actions.peekAtCard(targetPlayer.id, targetCardIndex)
      })
      
      gameState = hookResult.current.gameState
      
      // Should reveal card information
      const peekResult = actions.getLastPeekResult()
      expect(peekResult).toBeDefined()
      expect(peekResult.targetPlayerId).toBe(targetPlayer.id)
      expect(peekResult.targetCardIndex).toBe(targetCardIndex)
      expect(peekResult.cardValue).toBe(targetCard.value)
      expect(peekResult.cardRank).toBe(targetCard.rank)
      expect(peekResult.cardSuit).toBe(targetCard.suit)
    })

    it('should update player knowledge after peek', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Draw a Queen
      act(() => {
        actions.forceDrawQueen()
      })
      
      const humanPlayer = gameState.players[0]
      const targetPlayer = gameState.players[1]
      const targetCardIndex = 1
      
      // Record initial knowledge
      const initialKnowledge = actions.getPlayerKnowledgeCount(humanPlayer.id)
      
      // Execute peek
      act(() => {
        actions.peekAtCard(targetPlayer.id, targetCardIndex)
      })
      
      gameState = hookResult.current.gameState
      
      // Knowledge should increase (human now knows about opponent's card)
      const finalKnowledge = actions.getPlayerKnowledgeCount(humanPlayer.id)
      expect(finalKnowledge).toBeGreaterThan(initialKnowledge)
      
      // Specific peeked card should be marked as known
      const peekKnowledge = actions.getPeekedCardKnowledge(humanPlayer.id, targetPlayer.id, targetCardIndex)
      expect(peekKnowledge.isKnown).toBe(true)
      expect(peekKnowledge.turnSeen).toBe(gameState.round.turnNumber)
    })

    it('should handle peek information persistence', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Draw a Queen and peek
      act(() => {
        actions.forceDrawQueen()
      })
      
      const targetPlayer = gameState.players[1]
      const targetCardIndex = 2
      
      act(() => {
        actions.peekAtCard(targetPlayer.id, targetCardIndex)
      })
      
      const peekResult = actions.getLastPeekResult()
      const originalCardValue = peekResult.cardValue
      
      // Complete the turn
      act(() => {
        actions.replaceCard(0) // Use the Queen
      })
      
      act(() => {
        actions.endTurn()
      })
      
      // Go through several turns
      for (let i = 0; i < 3; i++) {
        act(() => {
          actions.endTurn()
        })
      }
      
      gameState = hookResult.current.gameState
      
      // Peek knowledge should persist
      const persistedKnowledge = actions.getPeekedCardKnowledge(gameState.players[0].id, targetPlayer.id, targetCardIndex)
      expect(persistedKnowledge.isKnown).toBe(true)
      expect(persistedKnowledge.cardValue).toBe(originalCardValue)
    })

    it('should handle peek information when target card changes', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Draw a Queen and peek
      act(() => {
        actions.forceDrawQueen()
      })
      
      const targetPlayer = gameState.players[1]
      const targetCardIndex = 3
      
      act(() => {
        actions.peekAtCard(targetPlayer.id, targetCardIndex)
      })
      
      const originalPeekResult = actions.getLastPeekResult()
      
      // Complete human turn
      act(() => {
        actions.replaceCard(0)
      })
      
      act(() => {
        actions.endTurn()
      })
      
      // Bot replaces the peeked card
      act(() => {
        actions.forceBotReplaceCard(targetPlayer.id, targetCardIndex)
      })
      
      gameState = hookResult.current.gameState
      
      // Peek knowledge should be updated/invalidated
      const updatedKnowledge = actions.getPeekedCardKnowledge(gameState.players[0].id, targetPlayer.id, targetCardIndex)
      expect(updatedKnowledge.isStale).toBe(true)
      expect(updatedKnowledge.originalValue).toBe(originalPeekResult.cardValue)
      expect(updatedKnowledge.lastValidTurn).toBeDefined()
    })
  })

  describe('Peek Ability Choice and Skipping', () => {
    let hookResult: any

    beforeEach(() => {
      const { result } = renderHook(() => useGame(), { wrapper })
      hookResult = result

      act(() => {
        result.current.actions.startGame(3, ['Human', 'Bot1', 'Bot2'])
      })
    })

    it('should allow player to skip peek ability', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Draw a Queen
      act(() => {
        actions.forceDrawQueen()
      })
      
      gameState = hookResult.current.gameState
      const queenCardId = gameState.ui.selectedCard!
      
      // Skip the peek ability
      act(() => {
        actions.skipSpecialAbility(queenCardId)
      })
      
      gameState = hookResult.current.gameState
      
      // Peek UI should be closed
      expect(gameState.ui.showingPeekAbility).toBe(false)
      expect(gameState.ui.showingPeekTargetSelection).toBe(false)
      
      // Should proceed to normal card replacement/discard
      expect(actions.canReplaceCard(0)).toBe(true)
      expect(actions.canDiscardDrawnCard()).toBe(true)
    })

    it('should handle peek ability timeout', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Draw a Queen
      act(() => {
        actions.forceDrawQueen()
      })
      
      gameState = hookResult.current.gameState
      
      // Wait for timeout (simulated)
      act(() => {
        actions.simulateSpecialAbilityTimeout()
      })
      
      gameState = hookResult.current.gameState
      
      // Should automatically skip peek ability
      expect(gameState.ui.showingPeekAbility).toBe(false)
      expect(actions.canReplaceCard(0)).toBe(true)
    })

    it('should validate peek ability usage restrictions', () => {
      const actions = hookResult.current.actions
      
      // Cannot use peek ability without drawing a Queen
      expect(actions.canUseSpecialAbility()).toBe(false)
      
      // Draw a non-Queen card
      act(() => {
        actions.drawFromDeck()
      })
      
      let gameState = hookResult.current.gameState
      const drawnCard = gameState.cards[gameState.ui.selectedCard!]
      
      if (drawnCard.rank !== Rank.QUEEN) {
        expect(actions.canUseSpecialAbility()).toBe(false)
      }
      
      // Replace the card and end turn
      act(() => {
        actions.replaceCard(0)
      })
      
      act(() => {
        actions.endTurn()
      })
      
      // Cannot use peek ability after turn ends
      expect(actions.canUseSpecialAbility()).toBe(false)
    })

    it('should handle multiple Queen cards in hand', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Give player multiple Queens through setup
      act(() => {
        actions.forceGivePlayerQueens(gameState.players[0].id, 2)
      })
      
      gameState = hookResult.current.gameState
      
      // Draw a Queen from deck
      act(() => {
        actions.forceDrawQueen()
      })
      
      // Should only trigger peek for the drawn Queen
      expect(actions.canUseSpecialAbility()).toBe(true)
      
      // Use the peek ability
      act(() => {
        actions.peekAtCard(gameState.players[1].id, 0)
      })
      
      // Queens in hand should not trigger additional peek abilities
      const handQueens = gameState.players[0].cards.filter(card => card.rank === Rank.QUEEN)
      expect(handQueens.length).toBeGreaterThan(0)
      expect(actions.canUseSpecialAbility()).toBe(false) // Only drawn Queen triggers ability
    })
  })

  describe('Peek Integration with Game Flow', () => {
    let hookResult: any

    beforeEach(() => {
      const { result } = renderHook(() => useGame(), { wrapper })
      hookResult = result

      act(() => {
        result.current.actions.startGame(2, ['Human', 'Bot'])
      })
    })

    it('should integrate peek into normal turn flow', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Normal turn sequence with peek
      act(() => {
        actions.forceDrawQueen()
      })
      
      // Peek phase
      act(() => {
        actions.peekAtCard(gameState.players[1].id, 0)
      })
      
      // Normal card action phase
      act(() => {
        actions.replaceCard(1)
      })
      
      // Turn should end normally
      act(() => {
        actions.endTurn()
      })
      
      gameState = hookResult.current.gameState
      
      // Should advance to next player
      expect(gameState.round.currentPlayerIndex).toBe(1)
      expect(gameState.ui.selectedCard).toBeNull()
    })

    it('should handle peek during stop-called rounds', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Call stop first
      act(() => {
        actions.callStop()
      })
      
      act(() => {
        actions.endTurn()
      })
      
      // Bot's turn - simulate bot drawing Queen
      act(() => {
        actions.forceBotDrawQueen()
      })
      
      gameState = hookResult.current.gameState
      
      // Bot should be able to use peek ability even during stop-called round
      expect(actions.canBotUseSpecialAbility(gameState.players[1].id)).toBe(true)
      
      // Process bot peek
      act(() => {
        actions.processBotPeek()
      })
      
      // Round should continue normally
      expect(gameState.round.stopCalled).toBe(true)
      expect(gameState.round.remainingTurns).toBeGreaterThan(0)
    })

    it('should handle peek near end of deck', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Exhaust most of the deck
      const initialDeckSize = gameState.deck.drawPile.length
      for (let i = 0; i < initialDeckSize - 3; i++) {
        act(() => {
          actions.drawFromDeck()
        })
        
        act(() => {
          actions.discardDrawnCard()
        })
        
        act(() => {
          actions.endTurn()
        })
      }
      
      // Draw a Queen near end of deck
      act(() => {
        actions.forceDrawQueen()
      })
      
      gameState = hookResult.current.gameState
      
      // Peek should still work normally
      expect(actions.canUseSpecialAbility()).toBe(true)
      
      act(() => {
        actions.peekAtCard(gameState.players[1].id, 2)
      })
      
      // Should complete normally even with low deck count
      act(() => {
        actions.replaceCard(0)
      })
      
      gameState = hookResult.current.gameState
      expect(gameState.deck.drawPile.length).toBeGreaterThanOrEqual(0)
    })

    it('should handle peek ability during round transitions', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Get close to round end
      act(() => {
        actions.callStop()
      })
      
      // Complete remaining turns except last
      while (gameState.round.remainingTurns > 1) {
        act(() => {
          actions.endTurn()
        })
        gameState = hookResult.current.gameState
      }
      
      // Last turn - draw Queen
      act(() => {
        actions.forceDrawQueen()
      })
      
      // Should be able to use peek even on final turn
      expect(actions.canUseSpecialAbility()).toBe(true)
      
      act(() => {
        actions.peekAtCard(gameState.players[1].id, 3)
      })
      
      act(() => {
        actions.replaceCard(0)
      })
      
      act(() => {
        actions.endTurn()
      })
      
      // Round should end and transition to scoring
      gameState = hookResult.current.gameState
      expect(gameState.round.phase).toBe('scoring')
    })
  })

  describe('Peek Ability Edge Cases and Error Handling', () => {
    let hookResult: any

    beforeEach(() => {
      const { result } = renderHook(() => useGame(), { wrapper })
      hookResult = result

      act(() => {
        result.current.actions.startGame(2, ['Human', 'Bot'])
      })
    })

    it('should handle invalid peek targets gracefully', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Draw a Queen
      act(() => {
        actions.forceDrawQueen()
      })
      
      // Attempt invalid peek operations
      const invalidOperations = [
        () => actions.peekAtCard('invalid-player', 0),
        () => actions.peekAtCard(gameState.players[1].id, -1),
        () => actions.peekAtCard(gameState.players[1].id, 4),
        () => actions.peekAtCard(gameState.players[0].id, 0), // Own card
      ]
      
      invalidOperations.forEach(operation => {
        expect(() => {
          act(() => {
            operation()
          })
        }).not.toThrow()
      })
      
      // Game state should remain consistent
      gameState = hookResult.current.gameState
      expect(gameState.ui.selectedCard).toBeDefined()
      expect(actions.canUseSpecialAbility()).toBe(true)
    })

    it('should handle peek when target player has no cards', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Simulate edge case where target player has no cards (theoretical)
      act(() => {
        actions.forceDrawQueen()
      })
      
      // This should be prevented by game validation
      expect(actions.canPeekAtCard(gameState.players[1].id, 0)).toBe(true)
      expect(gameState.players[1].cards.length).toBe(4) // Players always have 4 cards
    })

    it('should handle multiple rapid peek attempts', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Draw a Queen
      act(() => {
        actions.forceDrawQueen()
      })
      
      // Rapid peek attempts
      act(() => {
        actions.peekAtCard(gameState.players[1].id, 0)
        actions.peekAtCard(gameState.players[1].id, 1) // Should be ignored
        actions.peekAtCard(gameState.players[1].id, 2) // Should be ignored
      })
      
      // Only first peek should succeed
      const peekHistory = actions.getPeekHistory(gameState.players[0].id)
      expect(peekHistory.length).toBe(1)
      expect(peekHistory[0].targetCardIndex).toBe(0)
    })

    it('should handle peek ability with corrupted game state', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Draw a Queen
      act(() => {
        actions.forceDrawQueen()
      })
      
      // Simulate state corruption (should be handled gracefully)
      act(() => {
        actions.corruptGameState('ui.selectedCard')
      })
      
      // Should handle gracefully without crashing
      expect(() => {
        actions.canUseSpecialAbility()
      }).not.toThrow()
      
      // Should validate state and recover if possible
      const isValid = actions.validateGameState()
      expect(typeof isValid).toBe('boolean')
    })

    it('should handle peek ability performance under load', () => {
      const actions = hookResult.current.actions
      
      // Performance test: many peek operations
      const startTime = Date.now()
      
      for (let i = 0; i < 50; i++) {
        act(() => {
          actions.forceDrawQueen()
        })
        
        act(() => {
          actions.peekAtCard(hookResult.current.gameState.players[1].id, i % 4)
        })
        
        act(() => {
          actions.replaceCard(0)
        })
        
        act(() => {
          actions.endTurn()
        })
        
        act(() => {
          actions.endTurn() // Bot turn
        })
      }
      
      const endTime = Date.now()
      const duration = endTime - startTime
      
      // Should complete within reasonable time
      expect(duration).toBeLessThan(5000) // 5 seconds
      
      // Game state should remain valid
      const finalState = hookResult.current.gameState
      expect(actions.validateGameState()).toBe(true)
      
      // Peek history should be maintained
      const peekHistory = actions.getPeekHistory(finalState.players[0].id)
      expect(peekHistory.length).toBe(50)
    })
  })
})