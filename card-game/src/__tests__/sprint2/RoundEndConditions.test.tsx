// Sprint 2 TDD: Round End Conditions Tests
import { describe, it, expect, beforeEach } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { GameProvider } from '../../contexts/GameContext'
import { useGame } from '../../hooks/useGame'
import { GamePhase } from '../../types'
import type { ReactNode } from 'react'

const wrapper = ({ children }: { children: ReactNode }) => (
  <GameProvider>{children}</GameProvider>
)

describe('Sprint 2: Round End Conditions', () => {
  describe('Stop-Called Round Ending', () => {
    let hookResult: any

    beforeEach(() => {
      const { result } = renderHook(() => useGame(), { wrapper })
      hookResult = result

      act(() => {
        result.current.actions.startGame(3, ['Human', 'Bot1', 'Bot2'])
      })
    })

    it('should end round correctly after stop called and all remaining turns completed', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Human calls stop
      act(() => {
        actions.callStop()
      })
      
      gameState = hookResult.current.gameState
      expect(gameState.round.stopCalled).toBe(true)
      expect(gameState.round.remainingTurns).toBe(2) // Bot1 + Bot2
      
      // Complete remaining turns
      act(() => {
        actions.endTurn() // End human turn
      })
      
      act(() => {
        actions.endTurn() // Bot1 turn
      })
      
      gameState = hookResult.current.gameState
      expect(gameState.round.remainingTurns).toBe(1)
      expect(gameState.round.phase).toBe(GamePhase.PLAYING)
      
      act(() => {
        actions.endTurn() // Bot2 turn (final)
      })
      
      gameState = hookResult.current.gameState
      
      // Round should end and transition to scoring
      expect(gameState.round.remainingTurns).toBe(0)
      expect(gameState.round.phase).toBe(GamePhase.SCORING)
      expect(gameState.round.endReason).toBe('stop_called')
    })

    it('should handle early round end when stop called by last player', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Complete turns until last player
      act(() => {
        actions.endTurn() // Human
      })
      
      act(() => {
        actions.endTurn() // Bot1
      })
      
      // Bot2 (last player) calls stop
      gameState = hookResult.current.gameState
      const lastPlayerId = gameState.players[gameState.round.currentPlayerIndex].id
      
      act(() => {
        actions.forceBotCallStop(lastPlayerId)
      })
      
      gameState = hookResult.current.gameState
      
      // Should have no remaining turns (everyone already played)
      expect(gameState.round.remainingTurns).toBe(0)
      
      act(() => {
        actions.endTurn() // Complete last player's turn
      })
      
      gameState = hookResult.current.gameState
      
      // Round should end immediately
      expect(gameState.round.phase).toBe(GamePhase.SCORING)
      expect(gameState.round.endReason).toBe('stop_called')
    })

    it('should track turn completion order after stop call', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Bot1 calls stop
      act(() => {
        actions.endTurn() // Human
      })
      
      act(() => {
        actions.forceBotCallStop(gameState.players[1].id)
      })
      
      gameState = hookResult.current.gameState
      const turnOrder = []
      
      // Track remaining turns
      while (gameState.round.remainingTurns > 0) {
        const currentPlayer = gameState.players[gameState.round.currentPlayerIndex]
        turnOrder.push({
          playerId: currentPlayer.id,
          remainingTurns: gameState.round.remainingTurns
        })
        
        act(() => {
          actions.endTurn()
        })
        
        gameState = hookResult.current.gameState
      }
      
      // Should have correct turn order: Bot2, Human
      expect(turnOrder).toHaveLength(2)
      expect(turnOrder[0].playerId).toBe(gameState.players[2].id) // Bot2
      expect(turnOrder[1].playerId).toBe(gameState.players[0].id) // Human
      
      // Round should end properly
      expect(gameState.round.phase).toBe(GamePhase.SCORING)
    })

    it('should handle stop call validation during remaining turns', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Human calls stop
      act(() => {
        actions.callStop()
      })
      
      act(() => {
        actions.endTurn()
      })
      
      // During remaining turns, no additional stops should be allowed
      gameState = hookResult.current.gameState
      const botPlayerId = gameState.players[gameState.round.currentPlayerIndex].id
      
      expect(actions.canPlayerCallStop(botPlayerId)).toBe(false)
      expect(actions.isValidAction(botPlayerId, 'CALL_STOP')).toBe(false)
      
      // Complete remaining turns normally
      while (gameState.round.remainingTurns > 0) {
        act(() => {
          actions.endTurn()
        })
        gameState = hookResult.current.gameState
      }
      
      expect(gameState.round.phase).toBe(GamePhase.SCORING)
    })
  })

  describe('Deck Exhaustion Round Ending', () => {
    let hookResult: any

    beforeEach(() => {
      const { result } = renderHook(() => useGame(), { wrapper })
      hookResult = result

      act(() => {
        result.current.actions.startGame(2, ['Human', 'Bot'])
      })
    })

    it('should end round when deck is exhausted', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      const initialDeckSize = gameState.deck.drawPile.length
      
      // Exhaust the deck completely
      for (let i = 0; i < initialDeckSize; i++) {
        gameState = hookResult.current.gameState
        
        if (gameState.deck.drawPile.length > 0) {
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
      }
      
      gameState = hookResult.current.gameState
      
      // Deck should be empty
      expect(gameState.deck.drawPile.length).toBe(0)
      
      // Round should end due to deck exhaustion
      expect(gameState.round.phase).toBe(GamePhase.SCORING)
      expect(gameState.round.endReason).toBe('deck_exhausted')
    })

    it('should handle deck exhaustion during player turn', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Reduce deck to 1 card
      const initialDeckSize = gameState.deck.drawPile.length
      for (let i = 0; i < initialDeckSize - 1; i++) {
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
      
      gameState = hookResult.current.gameState
      expect(gameState.deck.drawPile.length).toBe(1)
      
      // Draw the last card
      act(() => {
        actions.drawFromDeck()
      })
      
      gameState = hookResult.current.gameState
      expect(gameState.deck.drawPile.length).toBe(0)
      
      // Player should still be able to complete their turn
      expect(gameState.round.phase).toBe(GamePhase.PLAYING)
      expect(gameState.ui.selectedCard).toBeDefined()
      
      act(() => {
        actions.replaceCard(0)
      })
      
      act(() => {
        actions.endTurn()
      })
      
      gameState = hookResult.current.gameState
      
      // Round should end after turn completion
      expect(gameState.round.phase).toBe(GamePhase.SCORING)
      expect(gameState.round.endReason).toBe('deck_exhausted')
    })

    it('should prevent drawing from empty deck', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Exhaust deck
      const initialDeckSize = gameState.deck.drawPile.length
      for (let i = 0; i < initialDeckSize; i++) {
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
      
      gameState = hookResult.current.gameState
      
      // Should not be able to draw from empty deck
      expect(actions.canDrawFromDeck()).toBe(false)
      expect(actions.isValidAction(gameState.players[0].id, 'DRAW_FROM_DECK')).toBe(false)
      
      // Should still be able to draw from discard if available
      if (gameState.deck.discardPile.length > 0) {
        expect(actions.canDrawFromDiscard()).toBe(true)
      }
    })

    it('should handle deck exhaustion with discard pile management', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Track deck and discard pile sizes
      const cardTracking = []
      
      while (gameState.deck.drawPile.length > 0 && gameState.round.phase === GamePhase.PLAYING) {
        cardTracking.push({
          deckSize: gameState.deck.drawPile.length,
          discardSize: gameState.deck.discardPile.length,
          turn: gameState.round.turnNumber
        })
        
        act(() => {
          actions.drawFromDeck()
        })
        
        act(() => {
          actions.discardDrawnCard()
        })
        
        act(() => {
          actions.endTurn()
        })
        
        gameState = hookResult.current.gameState
      }
      
      // Verify deck was properly exhausted
      expect(gameState.deck.drawPile.length).toBe(0)
      expect(gameState.deck.discardPile.length).toBeGreaterThan(0)
      
      // All cards should still be accounted for
      const totalCards = gameState.deck.discardPile.length + 
        gameState.players.reduce((sum, player) => sum + player.cards.length, 0)
      
      expect(totalCards).toBe(54) // Total deck size
    })
  })

  describe('Round End Phase Transitions', () => {
    let hookResult: any

    beforeEach(() => {
      const { result } = renderHook(() => useGame(), { wrapper })
      hookResult = result

      act(() => {
        result.current.actions.startGame(3, ['Human', 'Bot1', 'Bot2'])
      })
    })

    it('should transition correctly from playing to scoring phase', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Force round end
      act(() => {
        actions.callStop()
      })
      
      // Complete remaining turns
      while (gameState.round.remainingTurns > 0) {
        act(() => {
          actions.endTurn()
        })
        gameState = hookResult.current.gameState
      }
      
      // Should transition to scoring
      expect(gameState.round.phase).toBe(GamePhase.SCORING)
      
      // Should calculate scores
      const scores = actions.calculateRoundScores()
      expect(scores).toBeDefined()
      expect(scores.length).toBe(3) // 3 players
      
      scores.forEach(score => {
        expect(score.playerId).toBeDefined()
        expect(typeof score.totalScore).toBe('number')
        expect(Array.isArray(score.cardScores)).toBe(true)
      })
    })

    it('should handle round end cleanup properly', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Record pre-round-end state
      const preEndState = {
        selectedCard: gameState.ui.selectedCard,
        currentPlayerIndex: gameState.round.currentPlayerIndex,
        turnNumber: gameState.round.turnNumber
      }
      
      // Force round end
      act(() => {
        actions.forceRoundEnd()
      })
      
      gameState = hookResult.current.gameState
      
      // UI should be cleaned up
      expect(gameState.ui.selectedCard).toBeNull()
      expect(gameState.ui.showingPeekAbility).toBe(false)
      expect(gameState.ui.showingSwapAbility).toBe(false)
      
      // Round metadata should be preserved
      expect(gameState.round.endReason).toBeDefined()
      expect(gameState.round.finalTurnNumber).toBe(preEndState.turnNumber)
      
      // Phase should be scoring
      expect(gameState.round.phase).toBe(GamePhase.SCORING)
    })

    it('should preserve special ability history through round end', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Use some special abilities during round
      act(() => {
        actions.forceDrawQueen()
      })
      
      act(() => {
        actions.peekAtCard(gameState.players[1].id, 0)
      })
      
      act(() => {
        actions.replaceCard(0)
      })
      
      act(() => {
        actions.endTurn()
      })
      
      const specialAbilityHistory = actions.getSpecialAbilityHistory()
      expect(specialAbilityHistory.length).toBe(1)
      
      // Force round end
      act(() => {
        actions.forceRoundEnd()
      })
      
      gameState = hookResult.current.gameState
      
      // Special ability history should be preserved
      const preservedHistory = actions.getSpecialAbilityHistory()
      expect(preservedHistory.length).toBe(1)
      expect(preservedHistory[0].type).toBe('peek')
    })

    it('should handle concurrent round end conditions', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Set up scenario where multiple end conditions could trigger
      // Reduce deck to very low
      const initialDeckSize = gameState.deck.drawPile.length
      for (let i = 0; i < initialDeckSize - 2; i++) {
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
      
      gameState = hookResult.current.gameState
      expect(gameState.deck.drawPile.length).toBeLessThanOrEqual(2)
      
      // Call stop with low deck
      act(() => {
        actions.callStop()
      })
      
      // Complete remaining turns (might exhaust deck)
      while (gameState.round.remainingTurns > 0 && gameState.round.phase === GamePhase.PLAYING) {
        act(() => {
          actions.endTurn()
        })
        gameState = hookResult.current.gameState
      }
      
      // Should end with appropriate reason
      expect(gameState.round.phase).toBe(GamePhase.SCORING)
      expect(['stop_called', 'deck_exhausted']).toContain(gameState.round.endReason)
    })
  })

  describe('Round End Scoring Preparation', () => {
    let hookResult: any

    beforeEach(() => {
      const { result } = renderHook(() => useGame(), { wrapper })
      hookResult = result

      act(() => {
        result.current.actions.startGame(4, ['Human', 'Bot1', 'Bot2', 'Bot3'])
      })
    })

    it('should prepare all player hands for scoring', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Force round end
      act(() => {
        actions.forceRoundEnd()
      })
      
      gameState = hookResult.current.gameState
      
      // All players should have complete hands for scoring
      gameState.players.forEach(player => {
        expect(player.cards.length).toBe(4)
        
        // All cards should be face-up for scoring
        player.cards.forEach(card => {
          expect(card.isFaceUp).toBe(true)
        })
      })
      
      // Should generate scoring data
      const scoringData = actions.getRoundScoringData()
      expect(scoringData).toBeDefined()
      expect(scoringData.players.length).toBe(4)
      expect(scoringData.endReason).toBeDefined()
    })

    it('should calculate preliminary scores correctly', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Force specific card values for testing
      act(() => {
        actions.forcePlayerHand(gameState.players[0].id, [
          { rank: 'ACE', suit: 'HEARTS', value: 1 },
          { rank: 'TWO', suit: 'SPADES', value: 2 },
          { rank: 'KING', suit: 'CLUBS', value: -2 },
          { rank: 'JOKER', suit: 'JOKER', value: -4 }
        ])
      })
      
      act(() => {
        actions.forceRoundEnd()
      })
      
      const scores = actions.calculateRoundScores()
      const humanScore = scores.find(s => s.playerId === gameState.players[0].id)
      
      expect(humanScore).toBeDefined()
      expect(humanScore!.totalScore).toBe(-3) // 1 + 2 + (-2) + (-4) = -3
      expect(humanScore!.cardScores).toHaveLength(4)
    })

    it('should handle incomplete hands during round end', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Simulate edge case where player might have incomplete hand
      act(() => {
        actions.simulateIncompleteHand(gameState.players[1].id)
      })
      
      act(() => {
        actions.forceRoundEnd()
      })
      
      // Should handle gracefully
      const scoringData = actions.getRoundScoringData()
      expect(scoringData.errors).toBeDefined()
      
      if (scoringData.errors.length > 0) {
        expect(scoringData.errors[0].type).toBe('incomplete_hand')
        expect(scoringData.recovered).toBe(true)
      }
    })

    it('should preserve round statistics for analysis', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Play through some of the round to generate statistics
      for (let i = 0; i < 5; i++) {
        act(() => {
          actions.drawFromDeck()
        })
        
        act(() => {
          actions.replaceCard(i % 4)
        })
        
        act(() => {
          actions.endTurn()
        })
      }
      
      act(() => {
        actions.forceRoundEnd()
      })
      
      gameState = hookResult.current.gameState
      
      // Should preserve round statistics
      const roundStats = actions.getRoundStatistics()
      expect(roundStats).toBeDefined()
      expect(roundStats.totalTurns).toBeGreaterThan(0)
      expect(roundStats.cardsDrawn).toBeGreaterThan(0)
      expect(roundStats.specialAbilitiesUsed).toBeGreaterThanOrEqual(0)
      expect(roundStats.stopCalled).toBeDefined()
      
      // Statistics should be available for scoring analysis
      expect(roundStats.playerActions).toBeDefined()
      expect(Array.isArray(roundStats.playerActions)).toBe(true)
    })
  })

  describe('Round End Error Handling and Edge Cases', () => {
    let hookResult: any

    beforeEach(() => {
      const { result } = renderHook(() => useGame(), { wrapper })
      hookResult = result

      act(() => {
        result.current.actions.startGame(2, ['Human', 'Bot'])
      })
    })

    it('should handle forced round end during active turn', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Start a turn with drawn card
      act(() => {
        actions.drawFromDeck()
      })
      
      gameState = hookResult.current.gameState
      expect(gameState.ui.selectedCard).toBeDefined()
      
      // Force round end mid-turn
      act(() => {
        actions.forceRoundEnd()
      })
      
      gameState = hookResult.current.gameState
      
      // Should handle gracefully
      expect(gameState.round.phase).toBe(GamePhase.SCORING)
      expect(gameState.ui.selectedCard).toBeNull() // Should clean up
      
      // Should note the forced end
      expect(gameState.round.endReason).toBe('forced')
      expect(gameState.round.forcedEnd).toBe(true)
    })

    it('should handle round end with corrupted game state', () => {
      const actions = hookResult.current.actions
      
      // Corrupt some game state
      act(() => {
        actions.corruptPlayerHand(hookResult.current.gameState.players[0].id)
      })
      
      // Should handle round end gracefully
      expect(() => {
        act(() => {
          actions.forceRoundEnd()
        })
      }).not.toThrow()
      
      // Should attempt recovery
      const gameState = hookResult.current.gameState
      expect(gameState.round.phase).toBe(GamePhase.SCORING)
      
      const recovery = actions.getRecoveryLog()
      expect(recovery.attemptedRecovery).toBe(true)
    })

    it('should handle round end state transitions under load', () => {
      const actions = hookResult.current.actions
      
      // Performance test: rapid round end operations
      const startTime = Date.now()
      
      for (let i = 0; i < 50; i++) {
        // Reset to playing state
        act(() => {
          actions.resetToPlayingState()
        })
        
        // Force round end
        act(() => {
          actions.forceRoundEnd()
        })
        
        // Verify clean transition
        const gameState = hookResult.current.gameState
        expect(gameState.round.phase).toBe(GamePhase.SCORING)
      }
      
      const endTime = Date.now()
      const duration = endTime - startTime
      
      // Should complete within reasonable time
      expect(duration).toBeLessThan(3000) // 3 seconds for 50 transitions
    })

    it('should validate round end state consistency', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Record pre-end state
      const preEndValidation = actions.validateGameState()
      expect(preEndValidation).toBe(true)
      
      // End round
      act(() => {
        actions.forceRoundEnd()
      })
      
      gameState = hookResult.current.gameState
      
      // Validate post-end state
      const postEndValidation = actions.validateGameState()
      expect(postEndValidation).toBe(true)
      
      // Specific round end validations
      expect(gameState.round.phase).toBe(GamePhase.SCORING)
      expect(gameState.round.endReason).toBeDefined()
      
      // All players should have valid states
      gameState.players.forEach(player => {
        expect(player.cards.length).toBe(4)
        expect(player.id).toBeDefined()
      })
      
      // UI should be in clean state
      expect(gameState.ui.selectedCard).toBeNull()
      expect(gameState.ui.showingPeekAbility).toBe(false)
      expect(gameState.ui.showingSwapAbility).toBe(false)
    })

    it('should handle round end with network synchronization', () => {
      const actions = hookResult.current.actions
      
      // Simulate network synchronization delay
      act(() => {
        actions.enableNetworkSimulation(true)
      })
      
      // Round end with network delay
      const roundEndPromise = new Promise(resolve => {
        setTimeout(() => {
          act(() => {
            actions.forceRoundEnd()
          })
          resolve(true)
        }, 200)
      })
      
      return roundEndPromise.then(() => {
        const gameState = hookResult.current.gameState
        expect(gameState.round.phase).toBe(GamePhase.SCORING)
        
        // Network sync should be handled
        const syncStatus = actions.getNetworkSyncStatus()
        expect(syncStatus.roundEndSynced).toBe(true)
      })
    })

    it('should handle round end memory cleanup', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Generate lots of temporary data during round
      for (let i = 0; i < 100; i++) {
        act(() => {
          actions.generateTemporaryRoundData()
        })
      }
      
      // Check memory usage before round end
      const preEndMemory = actions.getMemoryUsage()
      
      // End round
      act(() => {
        actions.forceRoundEnd()
      })
      
      // Check memory usage after round end
      const postEndMemory = actions.getMemoryUsage()
      
      // Memory should be cleaned up
      expect(postEndMemory.temporary).toBeLessThan(preEndMemory.temporary)
      expect(postEndMemory.cleanupPerformed).toBe(true)
      
      gameState = hookResult.current.gameState
      expect(gameState.round.phase).toBe(GamePhase.SCORING)
    })
  })
})