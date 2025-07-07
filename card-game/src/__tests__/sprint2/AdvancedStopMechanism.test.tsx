// Sprint 2 TDD: Advanced Stop Mechanism Tests
import { describe, it, expect, beforeEach } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { GameProvider } from '../../contexts/GameContext'
import { useGame } from '../../hooks/useGame'
import { GamePhase } from '../../types'
import type { ReactNode } from 'react'

const wrapper = ({ children }: { children: ReactNode }) => (
  <GameProvider>{children}</GameProvider>
)

describe('Sprint 2: Advanced Stop Mechanism', () => {
  describe('Stop Call Validation and Timing', () => {
    let hookResult: any

    beforeEach(() => {
      const { result } = renderHook(() => useGame(), { wrapper })
      hookResult = result

      act(() => {
        result.current.actions.startGame(3, ['Human', 'Bot1', 'Bot2'])
      })
    })

    it('should validate stop call availability during different turn states', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      const currentPlayerId = gameState.players[0].id
      
      // Should be able to call stop at start of turn
      expect(actions.canCallStop()).toBe(true)
      expect(actions.isValidAction(currentPlayerId, 'CALL_STOP')).toBe(true)
      
      // Draw a card
      act(() => {
        actions.drawFromDeck()
      })
      
      // Should still be able to call stop after drawing
      expect(actions.canCallStop()).toBe(true)
      
      // Replace the card
      act(() => {
        actions.replaceCard(0)
      })
      
      // Should still be able to call stop during same turn (before ending)
      expect(actions.canCallStop()).toBe(true)
      
      // End turn
      act(() => {
        actions.endTurn()
      })
      
      // Should not be able to call stop when it's not player's turn
      gameState = hookResult.current.gameState
      expect(actions.canCallStop()).toBe(false)
    })

    it('should prevent multiple stop calls in same round', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // First stop call should succeed
      act(() => {
        actions.callStop()
      })
      
      gameState = hookResult.current.gameState
      expect(gameState.round.stopCalled).toBe(true)
      expect(gameState.round.stopCalledBy).toBe(gameState.players[0].id)
      
      // Subsequent stop calls should be invalid
      expect(actions.canCallStop()).toBe(false)
      expect(actions.isValidAction(gameState.players[0].id, 'CALL_STOP')).toBe(false)
      
      // Other players should also not be able to call stop
      act(() => {
        actions.endTurn()
      })
      
      gameState = hookResult.current.gameState
      const nextPlayerId = gameState.players[gameState.round.currentPlayerIndex].id
      expect(actions.isValidAction(nextPlayerId, 'CALL_STOP')).toBe(false)
    })

    it('should handle stop call timing restrictions', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Cannot call stop during certain phases
      act(() => {
        actions.forcePhaseTransition(GamePhase.SCORING)
      })
      
      gameState = hookResult.current.gameState
      expect(actions.canCallStop()).toBe(false)
      
      // Reset to playing phase
      act(() => {
        actions.forcePhaseTransition(GamePhase.PLAYING)
      })
      
      expect(actions.canCallStop()).toBe(true)
      
      // Cannot call stop if minimum turns not completed
      act(() => {
        actions.setMinimumTurnsBeforeStop(5)
      })
      
      // If current turn number is less than minimum
      if (gameState.round.turnNumber < 5) {
        expect(actions.canCallStop()).toBe(false)
      }
    })

    it('should validate stop call permissions for different player types', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Human player should be able to call stop on their turn
      expect(actions.canPlayerCallStop(gameState.players[0].id)).toBe(true)
      
      // Bot players should also be able to call stop on their turn
      act(() => {
        actions.endTurn() // Switch to bot turn
      })
      
      gameState = hookResult.current.gameState
      const botPlayerId = gameState.players[gameState.round.currentPlayerIndex].id
      expect(actions.canPlayerCallStop(botPlayerId)).toBe(true)
      
      // Non-current players should not be able to call stop
      const nonCurrentPlayerId = gameState.players[(gameState.round.currentPlayerIndex + 1) % gameState.players.length].id
      expect(actions.canPlayerCallStop(nonCurrentPlayerId)).toBe(false)
    })
  })

  describe('Remaining Turns Calculation and Management', () => {
    let hookResult: any

    beforeEach(() => {
      const { result } = renderHook(() => useGame(), { wrapper })
      hookResult = result

      act(() => {
        result.current.actions.startGame(4, ['Human', 'Bot1', 'Bot2', 'Bot3'])
      })
    })

    it('should correctly calculate remaining turns after stop call', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      const playerCount = gameState.players.length
      const currentPlayerIndex = gameState.round.currentPlayerIndex
      
      // Call stop
      act(() => {
        actions.callStop()
      })
      
      gameState = hookResult.current.gameState
      
      // Remaining turns should equal number of other players
      const expectedRemainingTurns = playerCount - 1
      expect(gameState.round.remainingTurns).toBe(expectedRemainingTurns)
      
      // Should track which player called stop
      expect(gameState.round.stopCalledBy).toBe(gameState.players[currentPlayerIndex].id)
      expect(gameState.round.stopCalledOnTurn).toBe(gameState.round.turnNumber)
    })

    it('should handle remaining turns countdown correctly', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Call stop
      act(() => {
        actions.callStop()
      })
      
      gameState = hookResult.current.gameState
      const initialRemainingTurns = gameState.round.remainingTurns
      
      // Complete one turn
      act(() => {
        actions.endTurn()
      })
      
      act(() => {
        actions.endTurn() // Bot turn (simplified)
      })
      
      gameState = hookResult.current.gameState
      
      // Remaining turns should decrease
      expect(gameState.round.remainingTurns).toBe(initialRemainingTurns - 1)
      
      // Continue until no remaining turns
      while (gameState.round.remainingTurns > 0) {
        act(() => {
          actions.endTurn()
        })
        gameState = hookResult.current.gameState
      }
      
      // Round should end when remaining turns reach 0
      expect(gameState.round.remainingTurns).toBe(0)
      expect(gameState.round.phase).toBe(GamePhase.SCORING)
    })

    it('should handle stop call by different players correctly', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Human turn - don't call stop
      act(() => {
        actions.drawFromDeck()
      })
      
      act(() => {
        actions.replaceCard(0)
      })
      
      act(() => {
        actions.endTurn()
      })
      
      // Bot1 calls stop
      act(() => {
        actions.forceBotCallStop(gameState.players[1].id)
      })
      
      gameState = hookResult.current.gameState
      
      // Should have 3 remaining turns (Human + Bot2 + Bot3)
      expect(gameState.round.remainingTurns).toBe(3)
      expect(gameState.round.stopCalledBy).toBe(gameState.players[1].id)
      
      // Verify turn order continues correctly
      const turnOrder = []
      while (gameState.round.remainingTurns > 0) {
        turnOrder.push(gameState.players[gameState.round.currentPlayerIndex].id)
        act(() => {
          actions.endTurn()
        })
        gameState = hookResult.current.gameState
      }
      
      // Should include Bot2, Bot3, and Human
      expect(turnOrder).toHaveLength(3)
      expect(turnOrder).toContain(gameState.players[2].id) // Bot2
      expect(turnOrder).toContain(gameState.players[3].id) // Bot3
      expect(turnOrder).toContain(gameState.players[0].id) // Human
    })

    it('should handle edge case: stop call on last possible turn', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Exhaust deck to near empty
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
      
      // Call stop when deck is nearly empty
      gameState = hookResult.current.gameState
      if (gameState.deck.drawPile.length <= 2) {
        act(() => {
          actions.callStop()
        })
        
        gameState = hookResult.current.gameState
        
        // Should still calculate remaining turns correctly
        expect(gameState.round.remainingTurns).toBeGreaterThan(0)
        expect(gameState.round.stopCalled).toBe(true)
      }
    })
  })

  describe('Stop Call Strategic Implications', () => {
    let hookResult: any

    beforeEach(() => {
      const { result } = renderHook(() => useGame(), { wrapper })
      hookResult = result

      act(() => {
        result.current.actions.startGame(3, ['Human', 'Bot1', 'Bot2'])
      })
    })

    it('should track stop call strategic impact', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Record pre-stop game state
      const preStopState = {
        currentPlayer: gameState.round.currentPlayerIndex,
        turnNumber: gameState.round.turnNumber,
        deckSize: gameState.deck.drawPile.length
      }
      
      // Call stop
      act(() => {
        actions.callStop()
      })
      
      gameState = hookResult.current.gameState
      
      // Analyze strategic impact
      const strategicImpact = actions.analyzeStopCallImpact()
      expect(strategicImpact).toBeDefined()
      expect(strategicImpact.calledBy).toBe(gameState.players[preStopState.currentPlayer].id)
      expect(strategicImpact.advantageGained).toBeDefined()
      expect(strategicImpact.opponentsAffected).toHaveLength(2)
      
      // Should track timing advantage
      expect(strategicImpact.timingAdvantage).toBeDefined()
      expect(strategicImpact.preventedOpponentTurns).toBeGreaterThan(0)
    })

    it('should handle stop call denial scenarios', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Set up scenario where stop call might be denied
      act(() => {
        actions.enableStopCallValidation(true)
      })
      
      // Try to call stop under invalid conditions
      act(() => {
        actions.forceInvalidStopConditions()
      })
      
      // Attempt stop call
      const stopResult = actions.attemptStopCall()
      
      if (!stopResult.success) {
        expect(stopResult.reason).toBeDefined()
        expect(['too_early', 'invalid_phase', 'already_called']).toContain(stopResult.reason)
        
        // Game state should remain unchanged
        gameState = hookResult.current.gameState
        expect(gameState.round.stopCalled).toBe(false)
      }
    })

    it('should calculate stop call optimal timing', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Analyze optimal stop timing for current player
      const optimalTiming = actions.calculateOptimalStopTiming(gameState.players[0].id)
      
      expect(optimalTiming).toBeDefined()
      expect(optimalTiming.shouldCallStop).toBeDefined()
      expect(optimalTiming.confidence).toBeGreaterThanOrEqual(0)
      expect(optimalTiming.confidence).toBeLessThanOrEqual(1)
      
      if (optimalTiming.shouldCallStop) {
        expect(optimalTiming.reasons).toBeDefined()
        expect(Array.isArray(optimalTiming.reasons)).toBe(true)
      }
      
      // Should consider hand strength
      expect(optimalTiming.handStrength).toBeDefined()
      expect(optimalTiming.relativePossition).toBeDefined()
    })

    it('should handle stop call bluffing mechanics', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Set up bluffing scenario (player has weak hand but calls stop)
      act(() => {
        actions.forcePlayerWeakHand(gameState.players[0].id)
      })
      
      // Call stop with weak hand
      act(() => {
        actions.callStop()
      })
      
      gameState = hookResult.current.gameState
      
      // Should track bluff attempt
      const bluffAnalysis = actions.analyzeStopCallBluff()
      expect(bluffAnalysis.isBluff).toBe(true)
      expect(bluffAnalysis.handStrength).toBeLessThan(0.5) // Weak hand
      expect(bluffAnalysis.riskLevel).toBeGreaterThan(0.5) // High risk
      
      // Should affect opponent behavior
      const opponentReactions = actions.getOpponentStopReactions()
      expect(opponentReactions).toBeDefined()
      expect(opponentReactions.length).toBe(2) // 2 opponents
    })
  })

  describe('Stop Call Integration with Special Abilities', () => {
    let hookResult: any

    beforeEach(() => {
      const { result } = renderHook(() => useGame(), { wrapper })
      hookResult = result

      act(() => {
        result.current.actions.startGame(2, ['Human', 'Bot'])
      })
    })

    it('should handle stop call during special ability usage', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Draw Queen and start peek ability
      act(() => {
        actions.forceDrawQueen()
      })
      
      act(() => {
        actions.beginPeekSelection()
      })
      
      gameState = hookResult.current.gameState
      
      // Should be able to call stop even during special ability
      expect(actions.canCallStop()).toBe(true)
      
      // Call stop during peek selection
      act(() => {
        actions.callStop()
      })
      
      gameState = hookResult.current.gameState
      
      // Stop should be registered
      expect(gameState.round.stopCalled).toBe(true)
      
      // Should be able to complete special ability
      expect(actions.canUseSpecialAbility()).toBe(true)
      
      act(() => {
        actions.peekAtCard(gameState.players[1].id, 0)
      })
      
      act(() => {
        actions.replaceCard(0)
      })
      
      // Turn should end normally
      act(() => {
        actions.endTurn()
      })
      
      gameState = hookResult.current.gameState
      expect(gameState.round.remainingTurns).toBe(1) // Bot gets one more turn
    })

    it('should handle stop call affecting special ability strategies', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Human calls stop
      act(() => {
        actions.callStop()
      })
      
      act(() => {
        actions.endTurn()
      })
      
      // Bot's final turn with special card
      act(() => {
        actions.forceBotDrawJack()
      })
      
      gameState = hookResult.current.gameState
      
      // Bot should adjust swap strategy based on stop being called
      const botStrategy = actions.getBotSpecialAbilityStrategy(gameState.players[1].id)
      expect(botStrategy.considerStopCalled).toBe(true)
      expect(botStrategy.finalTurnPressure).toBe(true)
      
      // Bot might be more aggressive with swaps
      if (botStrategy.useSpecialAbility) {
        expect(botStrategy.aggressiveness).toBeGreaterThan(0.7)
      }
    })

    it('should validate stop call with pending special abilities', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Draw Jack but don't use ability yet
      act(() => {
        actions.forceDrawJack()
      })
      
      gameState = hookResult.current.gameState
      
      // Should be able to call stop even with pending special ability
      expect(actions.canCallStop()).toBe(true)
      
      act(() => {
        actions.callStop()
      })
      
      // Should still be able to use the special ability
      expect(actions.canUseSpecialAbility()).toBe(true)
      
      // Skip the special ability
      act(() => {
        actions.skipSpecialAbility(gameState.ui.selectedCard!)
      })
      
      act(() => {
        actions.replaceCard(0)
      })
      
      act(() => {
        actions.endTurn()
      })
      
      gameState = hookResult.current.gameState
      expect(gameState.round.stopCalled).toBe(true)
      expect(gameState.round.remainingTurns).toBe(1)
    })
  })

  describe('Stop Call with Bot AI Decision Making', () => {
    let hookResult: any

    beforeEach(() => {
      const { result } = renderHook(() => useGame(), { wrapper })
      hookResult = result

      act(() => {
        result.current.actions.startGame(4, ['Human', 'Bot1', 'Bot2', 'Bot3'])
      })
    })

    it('should handle bot stop call decision making', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Skip to bot turn
      act(() => {
        actions.endTurn()
      })
      
      gameState = hookResult.current.gameState
      const botPlayerId = gameState.players[gameState.round.currentPlayerIndex].id
      
      // Analyze bot's stop call decision
      const stopDecision = actions.analyzeBotStopDecision(botPlayerId)
      expect(stopDecision).toBeDefined()
      expect(stopDecision.shouldCallStop).toBeDefined()
      expect(stopDecision.confidence).toBeGreaterThanOrEqual(0)
      expect(stopDecision.factors).toBeDefined()
      
      // Factors should include hand strength, position, opponent analysis
      expect(stopDecision.factors.handStrength).toBeDefined()
      expect(stopDecision.factors.position).toBeDefined()
      expect(stopDecision.factors.opponentThreats).toBeDefined()
      
      // Execute bot decision
      if (stopDecision.shouldCallStop && stopDecision.confidence > 0.6) {
        act(() => {
          actions.executeBotStopDecision(botPlayerId)
        })
        
        gameState = hookResult.current.gameState
        expect(gameState.round.stopCalled).toBe(true)
        expect(gameState.round.stopCalledBy).toBe(botPlayerId)
      }
    })

    it('should handle multiple bots reacting to stop calls', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Human calls stop
      act(() => {
        actions.callStop()
      })
      
      gameState = hookResult.current.gameState
      const botReactions = []
      
      // Process each bot's remaining turn
      while (gameState.round.remainingTurns > 0) {
        const currentBot = gameState.players[gameState.round.currentPlayerIndex]
        
        if (currentBot.type === 'bot') {
          const reaction = actions.getBotReactionToStop(currentBot.id)
          botReactions.push({
            botId: currentBot.id,
            reaction: reaction
          })
          
          // Bot should adjust strategy
          expect(reaction.strategyAdjustment).toBeDefined()
          expect(reaction.urgency).toBeGreaterThan(0.5) // Higher urgency due to stop
        }
        
        act(() => {
          actions.processBotTurn()
        })
        
        gameState = hookResult.current.gameState
      }
      
      // All bots should have reacted to the stop
      expect(botReactions.length).toBe(3) // 3 bots
      botReactions.forEach(reaction => {
        expect(reaction.reaction.acknowledgedStop).toBe(true)
      })
    })

    it('should handle bot coordination during stop scenarios', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Set up scenario where bots might coordinate
      act(() => {
        actions.enableBotCoordination(true)
      })
      
      // Bot1 calls stop
      act(() => {
        actions.endTurn() // Skip human
      })
      
      act(() => {
        actions.forceBotCallStop(gameState.players[1].id)
      })
      
      gameState = hookResult.current.gameState
      
      // Other bots should coordinate response
      const coordination = actions.analyzeBotCoordination()
      expect(coordination.isActive).toBe(true)
      expect(coordination.stopResponseStrategy).toBeDefined()
      
      // Bots should share information about stop timing
      const sharedInformation = actions.getBotSharedInformation()
      expect(sharedInformation.stopCalledBy).toBe(gameState.players[1].id)
      expect(sharedInformation.coordinatedResponse).toBe(true)
    })

    it('should validate bot stop call timing algorithms', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Test bot stop timing across multiple scenarios
      const scenarios = [
        { name: 'early_game', turnNumber: 3 },
        { name: 'mid_game', turnNumber: 8 },
        { name: 'late_game', turnNumber: 15 },
        { name: 'low_deck', deckSize: 5 }
      ]
      
      scenarios.forEach(scenario => {
        // Set up scenario
        act(() => {
          actions.setupTestScenario(scenario)
        })
        
        gameState = hookResult.current.gameState
        const botId = gameState.players[1].id
        
        // Analyze bot timing
        const timing = actions.analyzeBotStopTiming(botId, scenario)
        expect(timing).toBeDefined()
        expect(timing.scenario).toBe(scenario.name)
        expect(timing.optimalTiming).toBeDefined()
        
        // Timing should be contextually appropriate
        if (scenario.name === 'early_game') {
          expect(timing.shouldCallStop).toBe(false) // Too early
        } else if (scenario.name === 'low_deck') {
          expect(timing.urgency).toBeGreaterThan(0.8) // High urgency
        }
      })
    })
  })

  describe('Stop Call Edge Cases and Error Handling', () => {
    let hookResult: any

    beforeEach(() => {
      const { result } = renderHook(() => useGame(), { wrapper })
      hookResult = result

      act(() => {
        result.current.actions.startGame(2, ['Human', 'Bot'])
      })
    })

    it('should handle simultaneous stop call attempts', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Simulate rapid stop call attempts
      const results = []
      
      act(() => {
        // Multiple rapid calls
        results.push(actions.attemptStopCall())
        results.push(actions.attemptStopCall())
        results.push(actions.attemptStopCall())
      })
      
      // Only first call should succeed
      expect(results[0].success).toBe(true)
      expect(results[1].success).toBe(false)
      expect(results[2].success).toBe(false)
      
      gameState = hookResult.current.gameState
      expect(gameState.round.stopCalled).toBe(true)
    })

    it('should handle stop call with corrupted game state', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Corrupt game state
      act(() => {
        actions.corruptRoundState()
      })
      
      // Should handle stop call gracefully
      expect(() => {
        act(() => {
          actions.callStop()
        })
      }).not.toThrow()
      
      // Should attempt state recovery
      const recovery = actions.attemptStopCallStateRecovery()
      expect(recovery.attempted).toBe(true)
    })

    it('should handle stop call during network issues', () => {
      const actions = hookResult.current.actions
      
      // Simulate network latency
      act(() => {
        actions.simulateNetworkLatency(500) // 500ms delay
      })
      
      // Stop call should be queued and processed
      const stopPromise = new Promise(resolve => {
        setTimeout(() => {
          act(() => {
            actions.callStop()
          })
          resolve(true)
        }, 100)
      })
      
      return stopPromise.then(() => {
        const gameState = hookResult.current.gameState
        expect(gameState.round.stopCalled).toBe(true)
      })
    })

    it('should validate stop call state persistence', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Call stop
      act(() => {
        actions.callStop()
      })
      
      const stopState = {
        called: gameState.round.stopCalled,
        calledBy: gameState.round.stopCalledBy,
        remainingTurns: gameState.round.remainingTurns
      }
      
      // Simulate game state serialization/deserialization
      act(() => {
        actions.serializeGameState()
      })
      
      act(() => {
        actions.deserializeGameState()
      })
      
      gameState = hookResult.current.gameState
      
      // Stop state should persist
      expect(gameState.round.stopCalled).toBe(stopState.called)
      expect(gameState.round.stopCalledBy).toBe(stopState.calledBy)
      expect(gameState.round.remainingTurns).toBe(stopState.remainingTurns)
    })

    it('should handle stop call performance under load', () => {
      const actions = hookResult.current.actions
      
      // Performance test: many stop call validations
      const startTime = Date.now()
      
      for (let i = 0; i < 1000; i++) {
        // Rapid stop call checks should be fast
        const canStop = actions.canCallStop()
        expect(typeof canStop).toBe('boolean')
        
        if (i % 100 === 0) {
          // Occasional state updates
          act(() => {
            actions.refreshGameState()
          })
        }
      }
      
      const endTime = Date.now()
      const duration = endTime - startTime
      
      // Should complete within reasonable time
      expect(duration).toBeLessThan(1000) // 1 second for 1000 checks
      
      // Game state should remain valid
      expect(actions.validateGameState()).toBe(true)
    })

    it('should handle stop call with invalid player states', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Create invalid player state
      act(() => {
        actions.invalidatePlayer(gameState.players[0].id)
      })
      
      // Stop call should handle invalid state
      const result = actions.attemptStopCallWithValidation()
      
      if (!result.success) {
        expect(result.error).toBe('invalid_player_state')
      } else {
        // If successful, state should be recovered
        expect(actions.validatePlayerState(gameState.players[0].id)).toBe(true)
      }
    })
  })
})