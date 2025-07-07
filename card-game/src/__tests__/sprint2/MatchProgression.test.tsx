// Sprint 2 TDD: Match Progression Tests
import { describe, it, expect, beforeEach } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { GameProvider } from '../../contexts/GameContext'
import { useGame } from '../../hooks/useGame'
import { GamePhase } from '../../types'
import type { ReactNode } from 'react'

const wrapper = ({ children }: { children: ReactNode }) => (
  <GameProvider>{children}</GameProvider>
)

describe('Sprint 2: Match Progression', () => {
  describe('Multi-Round Match Flow', () => {
    let hookResult: any

    beforeEach(() => {
      const { result } = renderHook(() => useGame(), { wrapper })
      hookResult = result

      act(() => {
        result.current.actions.startGame(3, ['Human', 'Bot1', 'Bot2'])
      })
    })

    it('should progress through multiple rounds correctly', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Initially should be round 1
      expect(gameState.match.currentRound).toBe(1)
      expect(gameState.match.roundsToWin).toBe(3) // First to 3 round wins
      
      // Complete first round
      act(() => {
        actions.forceRoundEnd()
      })
      
      act(() => {
        actions.processRoundResults()
      })
      
      // Should advance to round 2
      gameState = hookResult.current.gameState
      expect(gameState.match.currentRound).toBe(2)
      expect(gameState.round.phase).toBe(GamePhase.PLAYING)
      
      // Cards should be reset for new round
      gameState.players.forEach(player => {
        expect(player.cards.length).toBe(4)
        // First 2 cards should be known again
        expect(player.cards[0].isKnownToPlayer).toBe(true)
        expect(player.cards[1].isKnownToPlayer).toBe(true)
        expect(player.cards[2].isKnownToPlayer).toBe(false)
        expect(player.cards[3].isKnownToPlayer).toBe(false)
      })
    })

    it('should track round wins across multiple rounds', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Round 1: Human wins
      act(() => {
        actions.forcePlayerScore(gameState.players[0].id, 5)  // Human wins (lowest)
        actions.forcePlayerScore(gameState.players[1].id, 10)
        actions.forcePlayerScore(gameState.players[2].id, 15)
      })
      
      act(() => {
        actions.forceRoundEnd()
      })
      
      act(() => {
        actions.processRoundResults()
      })
      
      gameState = hookResult.current.gameState
      expect(gameState.players[0].roundWins).toBe(1)
      expect(gameState.players[1].roundWins).toBe(0)
      expect(gameState.players[2].roundWins).toBe(0)
      
      // Round 2: Bot1 wins
      act(() => {
        actions.forcePlayerScore(gameState.players[0].id, 12)
        actions.forcePlayerScore(gameState.players[1].id, 3)  // Bot1 wins (lowest)
        actions.forcePlayerScore(gameState.players[2].id, 8)
      })
      
      act(() => {
        actions.forceRoundEnd()
      })
      
      act(() => {
        actions.processRoundResults()
      })
      
      gameState = hookResult.current.gameState
      expect(gameState.players[0].roundWins).toBe(1)
      expect(gameState.players[1].roundWins).toBe(1)
      expect(gameState.players[2].roundWins).toBe(0)
      expect(gameState.match.currentRound).toBe(3)
    })

    it('should reset game state properly between rounds', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Make some changes during round 1
      act(() => {
        actions.drawFromDeck()
      })
      
      act(() => {
        actions.replaceCard(0)
      })
      
      act(() => {
        actions.callStop()
      })
      
      // End round 1
      act(() => {
        actions.forceRoundEnd()
      })
      
      act(() => {
        actions.processRoundResults()
      })
      
      gameState = hookResult.current.gameState
      
      // Round state should be reset
      expect(gameState.round.stopCalled).toBe(false)
      expect(gameState.round.stopCalledBy).toBeNull()
      expect(gameState.round.remainingTurns).toBe(0)
      expect(gameState.round.currentPlayerIndex).toBe(0) // Back to first player
      expect(gameState.round.turnNumber).toBe(1) // Reset turn counter
      
      // UI state should be reset
      expect(gameState.ui.selectedCard).toBeNull()
      expect(gameState.ui.showingPeekAbility).toBe(false)
      expect(gameState.ui.showingSwapAbility).toBe(false)
      
      // Deck should be reshuffled
      expect(gameState.deck.drawPile.length).toBeGreaterThan(40) // Full deck minus dealt cards
      expect(gameState.deck.discardPile.length).toBe(1) // Just the initial discard
    })

    it('should maintain match statistics across rounds', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Track statistics through multiple rounds
      const matchStats = []
      
      for (let round = 1; round <= 3; round++) {
        // Generate some activity in the round
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
        
        // End the round
        act(() => {
          actions.forceRoundEnd()
        })
        
        // Capture round statistics
        const roundStats = actions.getRoundStatistics()
        matchStats.push(roundStats)
        
        act(() => {
          actions.processRoundResults()
        })
        
        gameState = hookResult.current.gameState
      }
      
      // Verify match statistics accumulation
      const fullMatchStats = actions.getMatchStatistics()
      expect(fullMatchStats.totalRoundsPlayed).toBe(3)
      expect(fullMatchStats.totalTurns).toBeGreaterThan(15) // At least 5 turns per round
      expect(fullMatchStats.totalCardsDrawn).toBeGreaterThan(15)
      
      // Individual round stats should be preserved
      expect(fullMatchStats.roundBreakdown).toHaveLength(3)
      fullMatchStats.roundBreakdown.forEach((round, index) => {
        expect(round.roundNumber).toBe(index + 1)
        expect(round.statistics).toBeDefined()
      })
    })
  })

  describe('Match Winner Determination', () => {
    let hookResult: any

    beforeEach(() => {
      const { result } = renderHook(() => useGame(), { wrapper })
      hookResult = result

      act(() => {
        result.current.actions.startGame(4, ['Human', 'Bot1', 'Bot2', 'Bot3'])
      })
    })

    it('should determine match winner when player reaches target round wins', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Simulate Human winning 3 rounds (target: first to 3)
      for (let round = 1; round <= 3; round++) {
        // Human wins each round
        act(() => {
          actions.forcePlayerScore(gameState.players[0].id, 1)  // Human wins (lowest)
          actions.forcePlayerScore(gameState.players[1].id, 10)
          actions.forcePlayerScore(gameState.players[2].id, 15)
          actions.forcePlayerScore(gameState.players[3].id, 20)
        })
        
        act(() => {
          actions.forceRoundEnd()
        })
        
        act(() => {
          actions.processRoundResults()
        })
        
        gameState = hookResult.current.gameState
      }
      
      // Match should be complete
      expect(gameState.match.isComplete).toBe(true)
      expect(gameState.match.winner).toBe(gameState.players[0].id)
      expect(gameState.players[0].roundWins).toBe(3)
      expect(gameState.round.phase).toBe(GamePhase.FINISHED)
    })

    it('should handle competitive match scenarios', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Simulate competitive match where different players win rounds
      const roundResults = [
        { winner: 0, scores: [5, 10, 15, 20] },   // Human wins round 1
        { winner: 1, scores: [15, 3, 12, 18] },   // Bot1 wins round 2  
        { winner: 0, scores: [4, 8, 12, 16] },    // Human wins round 3
        { winner: 2, scores: [12, 15, 2, 18] },   // Bot2 wins round 4
        { winner: 0, scores: [3, 8, 10, 15] },    // Human wins round 5 (match winner)
      ]
      
      roundResults.forEach((result, index) => {
        // Set scores for the round
        result.scores.forEach((score, playerIndex) => {
          act(() => {
            actions.forcePlayerScore(gameState.players[playerIndex].id, score)
          })
        })
        
        act(() => {
          actions.forceRoundEnd()
        })
        
        act(() => {
          actions.processRoundResults()
        })
        
        gameState = hookResult.current.gameState
        
        // Check if match should be complete
        if (index === roundResults.length - 1) {
          expect(gameState.match.isComplete).toBe(true)
          expect(gameState.match.winner).toBe(gameState.players[0].id) // Human with 3 wins
          expect(gameState.players[0].roundWins).toBe(3)
        } else {
          expect(gameState.match.isComplete).toBe(false)
          expect(gameState.match.currentRound).toBe(index + 2)
        }
      })
    })

    it('should handle match tie scenarios', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Set up scenario where multiple players could reach 3 wins simultaneously
      // This tests edge case handling
      
      // Give Human and Bot1 each 2 wins
      act(() => {
        actions.forcePlayerRoundWins(gameState.players[0].id, 2)
        actions.forcePlayerRoundWins(gameState.players[1].id, 2)
        actions.setMatchRound(3)
      })
      
      gameState = hookResult.current.gameState
      expect(gameState.players[0].roundWins).toBe(2)
      expect(gameState.players[1].roundWins).toBe(2)
      
      // Create a tie in the decisive round
      act(() => {
        actions.forcePlayerScore(gameState.players[0].id, 10) // Tied score
        actions.forcePlayerScore(gameState.players[1].id, 10) // Tied score
        actions.forcePlayerScore(gameState.players[2].id, 15)
        actions.forcePlayerScore(gameState.players[3].id, 20)
      })
      
      act(() => {
        actions.forceRoundEnd()
      })
      
      act(() => {
        actions.processRoundResults()
      })
      
      gameState = hookResult.current.gameState
      
      // Should handle tie-breaking appropriately
      if (gameState.match.isComplete) {
        expect(gameState.match.tieBreaker).toBeDefined()
        expect(gameState.match.winner).toBeDefined()
      } else {
        // If no tie-breaker, both players should have 3 wins and continue
        expect(gameState.players[0].roundWins).toBe(3)
        expect(gameState.players[1].roundWins).toBe(3)
        expect(gameState.match.currentRound).toBe(4) // Sudden death round
      }
    })

    it('should track detailed match progression history', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Play through several rounds with varied winners
      const expectedProgression = []
      
      for (let round = 1; round <= 4; round++) {
        const winnerIndex = round % 4 // Rotate winners
        const scores = [10, 12, 8, 15]
        scores[winnerIndex] = 3 // Make this player win
        
        scores.forEach((score, playerIndex) => {
          act(() => {
            actions.forcePlayerScore(gameState.players[playerIndex].id, score)
          })
        })
        
        act(() => {
          actions.forceRoundEnd()
        })
        
        expectedProgression.push({
          round: round,
          winner: gameState.players[winnerIndex].id,
          scores: [...scores]
        })
        
        act(() => {
          actions.processRoundResults()
        })
        
        gameState = hookResult.current.gameState
      }
      
      // Verify match history
      const matchHistory = actions.getMatchHistory()
      expect(matchHistory.rounds).toHaveLength(4)
      
      matchHistory.rounds.forEach((roundData, index) => {
        expect(roundData.roundNumber).toBe(index + 1)
        expect(roundData.winner).toBe(expectedProgression[index].winner)
        expect(roundData.finalScores).toBeDefined()
      })
      
      // Verify progression tracking
      expect(matchHistory.winProgression).toBeDefined()
      gameState.players.forEach(player => {
        const playerProgression = matchHistory.winProgression[player.id]
        expect(Array.isArray(playerProgression)).toBe(true)
        expect(playerProgression.length).toBe(4) // One entry per round
      })
    })
  })

  describe('Match Configuration and Variants', () => {
    let hookResult: any

    beforeEach(() => {
      const { result } = renderHook(() => useGame(), { wrapper })
      hookResult = result
    })

    it('should support different match length configurations', () => {
      const actions = hookResult.current.actions
      
      // Test short match (first to 2 wins)
      act(() => {
        actions.startGame(3, ['Human', 'Bot1', 'Bot2'], { roundsToWin: 2 })
      })
      
      let gameState = hookResult.current.gameState
      expect(gameState.match.roundsToWin).toBe(2)
      
      // Complete 2 rounds with same winner
      for (let round = 1; round <= 2; round++) {
        act(() => {
          actions.forcePlayerScore(gameState.players[0].id, 5)  // Human wins
          actions.forcePlayerScore(gameState.players[1].id, 10)
          actions.forcePlayerScore(gameState.players[2].id, 15)
        })
        
        act(() => {
          actions.forceRoundEnd()
        })
        
        act(() => {
          actions.processRoundResults()
        })
        
        gameState = hookResult.current.gameState
      }
      
      // Match should be complete after 2 wins
      expect(gameState.match.isComplete).toBe(true)
      expect(gameState.players[0].roundWins).toBe(2)
    })

    it('should support different player count configurations', () => {
      const actions = hookResult.current.actions
      
      // Test 2-player match
      act(() => {
        actions.startGame(2, ['Human', 'Bot'])
      })
      
      let gameState = hookResult.current.gameState
      expect(gameState.players.length).toBe(2)
      expect(gameState.match.playerCount).toBe(2)
      
      // Complete a round
      act(() => {
        actions.forcePlayerScore(gameState.players[0].id, 8)
        actions.forcePlayerScore(gameState.players[1].id, 12)
      })
      
      act(() => {
        actions.forceRoundEnd()
      })
      
      act(() => {
        actions.processRoundResults()
      })
      
      gameState = hookResult.current.gameState
      expect(gameState.players[0].roundWins).toBe(1)
      expect(gameState.match.currentRound).toBe(2)
    })

    it('should handle custom match rules and variants', () => {
      const actions = hookResult.current.actions
      
      // Test match with custom rules
      const customRules = {
        roundsToWin: 5,
        allowDraws: true,
        suddenDeathTieBreaker: true,
        maxRounds: 10
      }
      
      act(() => {
        actions.startGame(3, ['Human', 'Bot1', 'Bot2'], customRules)
      })
      
      let gameState = hookResult.current.gameState
      expect(gameState.match.rules).toEqual(customRules)
      expect(gameState.match.roundsToWin).toBe(5)
      expect(gameState.match.maxRounds).toBe(10)
    })

    it('should enforce maximum round limits', () => {
      const actions = hookResult.current.actions
      
      // Set up match with max round limit
      act(() => {
        actions.startGame(4, ['Human', 'Bot1', 'Bot2', 'Bot3'], { maxRounds: 3 })
      })
      
      let gameState = hookResult.current.gameState
      
      // Play 3 rounds without anyone reaching the win target
      for (let round = 1; round <= 3; round++) {
        // Distribute wins so no one gets majority
        const winnerIndex = (round - 1) % 4
        const scores = [10, 10, 10, 10]
        scores[winnerIndex] = 5
        
        scores.forEach((score, playerIndex) => {
          act(() => {
            actions.forcePlayerScore(gameState.players[playerIndex].id, score)
          })
        })
        
        act(() => {
          actions.forceRoundEnd()
        })
        
        act(() => {
          actions.processRoundResults()
        })
        
        gameState = hookResult.current.gameState
      }
      
      // Should end match due to round limit
      expect(gameState.match.isComplete).toBe(true)
      expect(gameState.match.endReason).toBe('max_rounds_reached')
      expect(gameState.match.winner).toBeDefined() // Highest round wins or tie-breaker
    })
  })

  describe('Match State Persistence and Recovery', () => {
    let hookResult: any

    beforeEach(() => {
      const { result } = renderHook(() => useGame(), { wrapper })
      hookResult = result

      act(() => {
        result.current.actions.startGame(3, ['Human', 'Bot1', 'Bot2'])
      })
    })

    it('should persist match state across round transitions', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Build up match state over multiple rounds
      const matchData = {
        roundsPlayed: 0,
        totalActions: 0,
        playerStats: {}
      }
      
      for (let round = 1; round <= 3; round++) {
        // Record pre-round state
        const preRoundStats = actions.getMatchStatistics()
        
        // Play the round
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
          
          matchData.totalActions += 3 // Draw, replace, end turn
        }
        
        act(() => {
          actions.forceRoundEnd()
        })
        
        act(() => {
          actions.processRoundResults()
        })
        
        matchData.roundsPlayed++
        gameState = hookResult.current.gameState
        
        // Verify persistence
        const postRoundStats = actions.getMatchStatistics()
        expect(postRoundStats.totalRoundsPlayed).toBe(matchData.roundsPlayed)
        expect(postRoundStats.totalTurns).toBeGreaterThan(preRoundStats.totalTurns)
      }
      
      // Final match state should reflect all accumulated data
      const finalStats = actions.getMatchStatistics()
      expect(finalStats.totalRoundsPlayed).toBe(3)
      expect(finalStats.totalTurns).toBeGreaterThan(15) // At least 5 per round
    })

    it('should handle match state serialization and recovery', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Build up some match state
      act(() => {
        actions.forcePlayerRoundWins(gameState.players[0].id, 2)
        actions.forcePlayerRoundWins(gameState.players[1].id, 1)
        actions.setMatchRound(4)
      })
      
      const originalState = {
        currentRound: gameState.match.currentRound,
        playerWins: gameState.players.map(p => ({ id: p.id, wins: p.roundWins }))
      }
      
      // Serialize match state
      const serialized = actions.serializeMatchState()
      expect(serialized).toBeDefined()
      expect(serialized.version).toBeDefined()
      expect(serialized.matchData).toBeDefined()
      
      // Corrupt current state
      act(() => {
        actions.corruptMatchState()
      })
      
      // Restore from serialized state
      act(() => {
        actions.deserializeMatchState(serialized)
      })
      
      gameState = hookResult.current.gameState
      
      // Should match original state
      expect(gameState.match.currentRound).toBe(originalState.currentRound)
      originalState.playerWins.forEach(original => {
        const restored = gameState.players.find(p => p.id === original.id)
        expect(restored.roundWins).toBe(original.wins)
      })
    })

    it('should handle match state corruption gracefully', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Establish valid match state
      act(() => {
        actions.forcePlayerRoundWins(gameState.players[0].id, 1)
        actions.setMatchRound(2)
      })
      
      // Corrupt match state
      act(() => {
        actions.corruptMatchData()
      })
      
      // Should detect corruption
      const isValid = actions.validateMatchState()
      expect(isValid.isValid).toBe(false)
      expect(isValid.errors).toBeDefined()
      
      // Should attempt recovery
      const recovery = actions.attemptMatchStateRecovery()
      expect(recovery.attempted).toBe(true)
      
      if (recovery.successful) {
        gameState = hookResult.current.gameState
        expect(actions.validateMatchState().isValid).toBe(true)
      } else {
        expect(recovery.fallbackApplied).toBe(true)
      }
    })

    it('should maintain match statistics consistency', () => {
      const actions = hookResult.current.actions
      
      // Generate statistics through normal gameplay
      for (let round = 1; round <= 3; round++) {
        // Varied gameplay patterns
        for (let turn = 0; turn < 8; turn++) {
          act(() => {
            actions.drawFromDeck()
          })
          
          if (turn % 3 === 0) {
            act(() => {
              actions.forceDrawQueen()
            })
            
            act(() => {
              actions.peekAtCard(hookResult.current.gameState.players[1].id, 0)
            })
          }
          
          act(() => {
            actions.replaceCard(turn % 4)
          })
          
          act(() => {
            actions.endTurn()
          })
        }
        
        act(() => {
          actions.forceRoundEnd()
        })
        
        act(() => {
          actions.processRoundResults()
        })
      }
      
      // Verify statistical consistency
      const stats = actions.getMatchStatistics()
      
      // Basic consistency checks
      expect(stats.totalRoundsPlayed).toBe(3)
      expect(stats.totalTurns).toBe(24) // 8 turns × 3 rounds
      expect(stats.totalCardsDrawn).toBe(24)
      expect(stats.specialAbilitiesUsed).toBeGreaterThan(0)
      
      // Player-specific statistics
      stats.playerStats.forEach(playerStat => {
        expect(playerStat.turnsPlayed).toBeGreaterThan(0)
        expect(playerStat.cardsDrawn).toBeGreaterThan(0)
        expect(playerStat.averageScore).toBeDefined()
      })
      
      // Cross-validation
      const totalPlayerTurns = stats.playerStats.reduce((sum, p) => sum + p.turnsPlayed, 0)
      expect(totalPlayerTurns).toBe(stats.totalTurns)
    })
  })

  describe('Match Performance and Scalability', () => {
    let hookResult: any

    beforeEach(() => {
      const { result } = renderHook(() => useGame(), { wrapper })
      hookResult = result

      act(() => {
        result.current.actions.startGame(4, ['Human', 'Bot1', 'Bot2', 'Bot3'])
      })
    })

    it('should handle long matches efficiently', () => {
      const actions = hookResult.current.actions
      
      // Simulate a very long match
      const startTime = Date.now()
      
      for (let round = 1; round <= 20; round++) {
        // Quick round simulation
        act(() => {
          actions.forcePlayerScore(hookResult.current.gameState.players[round % 4].id, 5)
          actions.forcePlayerScore(hookResult.current.gameState.players[(round + 1) % 4].id, 10)
          actions.forcePlayerScore(hookResult.current.gameState.players[(round + 2) % 4].id, 15)
          actions.forcePlayerScore(hookResult.current.gameState.players[(round + 3) % 4].id, 20)
        })
        
        act(() => {
          actions.forceRoundEnd()
        })
        
        act(() => {
          actions.processRoundResults()
        })
        
        // Break if match is complete
        const gameState = hookResult.current.gameState
        if (gameState.match.isComplete) {
          break
        }
      }
      
      const endTime = Date.now()
      const duration = endTime - startTime
      
      // Should complete within reasonable time
      expect(duration).toBeLessThan(5000) // 5 seconds for long match
      
      // Match should be complete or have reasonable progression
      const gameState = hookResult.current.gameState
      expect(gameState.match.currentRound).toBeGreaterThan(1)
    })

    it('should manage memory efficiently during long matches', () => {
      const actions = hookResult.current.actions
      
      // Track memory usage over extended play
      const memorySnapshots = []
      
      for (let round = 1; round <= 10; round++) {
        // Simulate round with memory-intensive operations
        for (let i = 0; i < 20; i++) {
          act(() => {
            actions.generateTemporaryData()
          })
        }
        
        act(() => {
          actions.forceRoundEnd()
        })
        
        act(() => {
          actions.processRoundResults()
        })
        
        // Take memory snapshot
        const memoryUsage = actions.getMemoryUsage()
        memorySnapshots.push({
          round: round,
          total: memoryUsage.total,
          temporary: memoryUsage.temporary,
          persistent: memoryUsage.persistent
        })
        
        // Memory should be cleaned up between rounds
        expect(memoryUsage.temporary).toBeLessThan(1000) // Reasonable limit
      }
      
      // Memory growth should be controlled
      const firstSnapshot = memorySnapshots[0]
      const lastSnapshot = memorySnapshots[memorySnapshots.length - 1]
      
      // Persistent memory can grow, but temporary should be bounded
      expect(lastSnapshot.temporary).toBeLessThan(firstSnapshot.temporary * 2)
    })

    it('should handle concurrent match operations', () => {
      const actions = hookResult.current.actions
      
      // Simulate concurrent operations that might occur
      const operations = []
      
      for (let i = 0; i < 100; i++) {
        operations.push(() => actions.getMatchStatistics())
        operations.push(() => actions.validateMatchState())
        operations.push(() => actions.getPlayerRankings())
      }
      
      const startTime = Date.now()
      
      // Execute all operations
      operations.forEach(operation => {
        expect(() => operation()).not.toThrow()
      })
      
      const endTime = Date.now()
      const duration = endTime - startTime
      
      // Should handle concurrent access efficiently
      expect(duration).toBeLessThan(1000) // 1 second for 300 operations
    })

    it('should validate match state consistency under stress', () => {
      const actions = hookResult.current.actions
      
      // Stress test with rapid state changes
      for (let i = 0; i < 50; i++) {
        // Rapid round progression
        act(() => {
          actions.forceRoundEnd()
        })
        
        act(() => {
          actions.processRoundResults()
        })
        
        // Validate state after each transition
        const isValid = actions.validateMatchState()
        expect(isValid.isValid).toBe(true)
        
        // Check for state corruption
        const gameState = hookResult.current.gameState
        expect(gameState.match.currentRound).toBeGreaterThan(0)
        expect(gameState.players.every(p => p.roundWins >= 0)).toBe(true)
        
        // Break if match completes
        if (gameState.match.isComplete) {
          break
        }
      }
    })
  })
})