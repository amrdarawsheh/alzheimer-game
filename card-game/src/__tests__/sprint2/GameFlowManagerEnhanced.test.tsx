// Sprint 2 TDD: GameFlowManager Enhanced Tests
import { describe, it, expect, beforeEach } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { GameProvider } from '../../contexts/GameContext'
import { useGame } from '../../hooks/useGame'
import { GamePhase } from '../../types'
import type { ReactNode } from 'react'

const wrapper = ({ children }: { children: ReactNode }) => (
  <GameProvider>{children}</GameProvider>
)

describe('Sprint 2: GameFlowManager Enhanced', () => {
  describe('Automated Game Flow Control', () => {
    let hookResult: any

    beforeEach(() => {
      const { result } = renderHook(() => useGame(), { wrapper })
      hookResult = result

      act(() => {
        result.current.actions.startGame(3, ['Human', 'Bot1', 'Bot2'])
      })
    })

    it('should automatically advance game flow through phases', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Enable automatic flow management
      act(() => {
        actions.enableGameFlowManager(true)
      })
      
      expect(gameState.round.phase).toBe(GamePhase.PLAYING)
      
      // Simulate conditions that should trigger phase transitions
      act(() => {
        actions.callStop()
      })
      
      // Complete remaining turns automatically
      act(() => {
        actions.processAutomaticFlow()
      })
      
      gameState = hookResult.current.gameState
      
      // Should automatically transition to scoring when conditions are met
      expect(gameState.round.phase).toBe(GamePhase.SCORING)
      expect(gameState.flowManager.lastTransition).toBeDefined()
      expect(gameState.flowManager.autoTransitionsEnabled).toBe(true)
    })

    it('should manage bot turn automation', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Skip to bot turn
      act(() => {
        actions.endTurn()
      })
      
      gameState = hookResult.current.gameState
      const currentPlayer = gameState.players[gameState.round.currentPlayerIndex]
      expect(currentPlayer.type).toBe('bot')
      
      // Enable bot automation
      act(() => {
        actions.enableBotAutomation(true)
      })
      
      // Should automatically process bot turn
      act(() => {
        actions.processAutomaticBotTurn()
      })
      
      gameState = hookResult.current.gameState
      
      // Bot should have completed their turn
      expect(gameState.round.currentPlayerIndex).toBe(2) // Next player
      expect(gameState.flowManager.botActionsProcessed).toBeGreaterThan(0)
    })

    it('should handle automatic deck management', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Enable automatic deck management
      act(() => {
        actions.enableAutomaticDeckManagement(true)
      })
      
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
      
      gameState = hookResult.current.gameState
      expect(gameState.deck.drawPile.length).toBeLessThanOrEqual(2)
      
      // Should automatically handle round end when deck is exhausted
      act(() => {
        actions.processAutomaticFlow()
      })
      
      gameState = hookResult.current.gameState
      if (gameState.deck.drawPile.length === 0) {
        expect(gameState.round.phase).toBe(GamePhase.SCORING)
        expect(gameState.round.endReason).toBe('deck_exhausted')
      }
    })

    it('should provide flow state information and control', () => {
      const actions = hookResult.current.actions
      
      // Get flow manager state
      const flowState = actions.getGameFlowState()
      expect(flowState).toBeDefined()
      expect(flowState.isEnabled).toBeDefined()
      expect(flowState.currentPhase).toBe(GamePhase.PLAYING)
      expect(flowState.nextTransition).toBeDefined()
      expect(flowState.automationLevel).toBeDefined()
      
      // Test flow control
      act(() => {
        actions.setFlowAutomationLevel('high')
      })
      
      const updatedFlowState = actions.getGameFlowState()
      expect(updatedFlowState.automationLevel).toBe('high')
      
      // Test pausing/resuming flow
      act(() => {
        actions.pauseGameFlow()
      })
      
      expect(actions.getGameFlowState().isPaused).toBe(true)
      
      act(() => {
        actions.resumeGameFlow()
      })
      
      expect(actions.getGameFlowState().isPaused).toBe(false)
    })
  })

  describe('Bot Behavior Management', () => {
    let hookResult: any

    beforeEach(() => {
      const { result } = renderHook(() => useGame(), { wrapper })
      hookResult = result

      act(() => {
        result.current.actions.startGame(4, ['Human', 'Bot1', 'Bot2', 'Bot3'])
      })
    })

    it('should orchestrate multiple bot behaviors', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Enable comprehensive bot management
      act(() => {
        actions.enableBotManagement({
          decisionTiming: 'realistic',
          difficultyLevel: 'medium',
          personalityVariation: true
        })
      })
      
      // Skip to all bot turns
      act(() => {
        actions.endTurn() // Skip human
      })
      
      // Process multiple bot turns with flow manager
      for (let i = 0; i < 3; i++) {
        gameState = hookResult.current.gameState
        const currentBot = gameState.players[gameState.round.currentPlayerIndex]
        expect(currentBot.type).toBe('bot')
        
        // Process bot turn with timing
        act(() => {
          actions.processBotTurnWithTiming(currentBot.id)
        })
        
        // Verify bot made decisions
        const botDecision = actions.getLastBotDecision(currentBot.id)
        expect(botDecision).toBeDefined()
        expect(botDecision.timeTaken).toBeGreaterThan(0)
        expect(botDecision.actions).toBeDefined()
        
        act(() => {
          actions.endTurn()
        })
      }
      
      // All bots should have acted
      const botStats = actions.getBotStatistics()
      expect(botStats.totalBotActions).toBe(3)
      expect(botStats.averageDecisionTime).toBeGreaterThan(0)
    })

    it('should handle bot difficulty scaling', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Test different difficulty levels
      const difficulties = ['easy', 'medium', 'hard', 'expert']
      
      difficulties.forEach(difficulty => {
        act(() => {
          actions.setBotDifficulty(difficulty)
        })
        
        // Skip to bot turn
        act(() => {
          actions.forcePlayerTurn(gameState.players[1].id)
        })
        
        // Process bot decision
        act(() => {
          actions.processBotDecision(gameState.players[1].id)
        })
        
        const decision = actions.getLastBotDecision(gameState.players[1].id)
        
        // Decision quality should reflect difficulty
        expect(decision.difficultyLevel).toBe(difficulty)
        expect(decision.decisionQuality).toBeDefined()
        
        if (difficulty === 'easy') {
          expect(decision.mistakeProbability).toBeGreaterThan(0.1)
        } else if (difficulty === 'expert') {
          expect(decision.optimality).toBeGreaterThan(0.8)
        }
      })
    })

    it('should manage bot coordination and interaction', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Enable bot coordination
      act(() => {
        actions.enableBotCoordination({
          shareInformation: true,
          coordinateStrategies: true,
          avoidRedundancy: true
        })
      })
      
      // Set up scenario where bots might coordinate
      act(() => {
        actions.setupBotCoordinationScenario()
      })
      
      // Process multiple bot turns
      for (let i = 1; i < 4; i++) { // Bots 1, 2, 3
        act(() => {
          actions.forcePlayerTurn(gameState.players[i].id)
        })
        
        act(() => {
          actions.processBotTurnWithCoordination(gameState.players[i].id)
        })
        
        gameState = hookResult.current.gameState
      }
      
      // Check coordination results
      const coordination = actions.getBotCoordinationAnalysis()
      expect(coordination.activeCoordination).toBe(true)
      expect(coordination.informationShared).toBeGreaterThan(0)
      expect(coordination.coordinatedActions).toBeGreaterThan(0)
      
      // Bots should not have made redundant moves
      expect(coordination.redundantActions).toBe(0)
    })

    it('should handle bot personality and decision variation', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Assign different personalities to bots
      const personalities = [
        { type: 'aggressive', riskTolerance: 0.8 },
        { type: 'conservative', riskTolerance: 0.2 },
        { type: 'analytical', calculationTime: 'high' }
      ]
      
      personalities.forEach((personality, index) => {
        act(() => {
          actions.setBotPersonality(gameState.players[index + 1].id, personality)
        })
      })
      
      // Process decisions and verify personality influence
      const decisions = []
      
      for (let i = 1; i < 4; i++) {
        act(() => {
          actions.forcePlayerTurn(gameState.players[i].id)
        })
        
        act(() => {
          actions.processBotTurnWithPersonality(gameState.players[i].id)
        })
        
        const decision = actions.getLastBotDecision(gameState.players[i].id)
        decisions.push(decision)
      }
      
      // Verify personality differences
      expect(decisions[0].riskLevel).toBeGreaterThan(decisions[1].riskLevel) // Aggressive vs Conservative
      expect(decisions[2].calculationComplexity).toBeGreaterThan(decisions[0].calculationComplexity) // Analytical
    })
  })

  describe('Game State Monitoring and Validation', () => {
    let hookResult: any

    beforeEach(() => {
      const { result } = renderHook(() => useGame(), { wrapper })
      hookResult = result

      act(() => {
        result.current.actions.startGame(3, ['Human', 'Bot1', 'Bot2'])
      })
    })

    it('should continuously monitor game state integrity', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Enable continuous monitoring
      act(() => {
        actions.enableContinuousMonitoring(true)
      })
      
      const monitoring = actions.getMonitoringState()
      expect(monitoring.isActive).toBe(true)
      expect(monitoring.checksPerformed).toBe(0)
      
      // Perform actions and monitor
      act(() => {
        actions.drawFromDeck()
      })
      
      act(() => {
        actions.replaceCard(0)
      })
      
      act(() => {
        actions.endTurn()
      })
      
      // Check monitoring results
      const updatedMonitoring = actions.getMonitoringState()
      expect(updatedMonitoring.checksPerformed).toBeGreaterThan(0)
      expect(updatedMonitoring.violations).toHaveLength(0) // No violations expected
      expect(updatedMonitoring.lastCheck).toBeDefined()
    })

    it('should detect and handle game state violations', () => {
      const actions = hookResult.current.actions
      
      // Enable strict validation
      act(() => {
        actions.enableStrictValidation(true)
      })
      
      // Introduce intentional violation
      act(() => {
        actions.introduceStateViolation('invalid_card_count')
      })
      
      // Should detect the violation
      const violations = actions.detectStateViolations()
      expect(violations.length).toBeGreaterThan(0)
      expect(violations[0].type).toBe('invalid_card_count')
      expect(violations[0].severity).toBeDefined()
      
      // Should attempt automatic correction
      act(() => {
        actions.attemptAutomaticCorrection()
      })
      
      const correctionResult = actions.getLastCorrectionAttempt()
      expect(correctionResult.attempted).toBe(true)
      expect(correctionResult.successful).toBeDefined()
    })

    it('should validate game flow transitions', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Test valid transition
      expect(gameState.round.phase).toBe(GamePhase.PLAYING)
      
      const canTransitionToScoring = actions.canTransitionToPhase(GamePhase.SCORING)
      expect(canTransitionToScoring.allowed).toBe(false) // Not yet time
      expect(canTransitionToScoring.requirements).toBeDefined()
      
      // Create conditions for valid transition
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
      
      // Now transition should be valid
      const canTransition = actions.canTransitionToPhase(GamePhase.SCORING)
      expect(canTransition.allowed).toBe(true)
      
      // Test invalid transition
      const canTransitionToSetup = actions.canTransitionToPhase('setup')
      expect(canTransitionToSetup.allowed).toBe(false)
      expect(canTransitionToSetup.reason).toBeDefined()
    })

    it('should provide comprehensive game state diagnostics', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Generate some game activity for diagnostics
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
      
      // Get comprehensive diagnostics
      const diagnostics = actions.getGameStateDiagnostics()
      
      expect(diagnostics.overview).toBeDefined()
      expect(diagnostics.overview.isValid).toBe(true)
      expect(diagnostics.overview.phase).toBe(GamePhase.PLAYING)
      
      // Player diagnostics
      expect(diagnostics.players).toHaveLength(3)
      diagnostics.players.forEach(playerDiag => {
        expect(playerDiag.cardCount).toBe(4)
        expect(playerDiag.knowledgeState).toBeDefined()
        expect(playerDiag.isValid).toBe(true)
      })
      
      // Deck diagnostics
      expect(diagnostics.deck.totalCards).toBe(54) // Should account for all cards
      expect(diagnostics.deck.distribution).toBeDefined()
      
      // Flow diagnostics
      expect(diagnostics.flow.currentPhase).toBe(GamePhase.PLAYING)
      expect(diagnostics.flow.possibleTransitions).toBeDefined()
      expect(diagnostics.flow.blockers).toBeDefined()
    })
  })

  describe('Performance Optimization and Scaling', () => {
    let hookResult: any

    beforeEach(() => {
      const { result } = renderHook(() => useGame(), { wrapper })
      hookResult = result

      act(() => {
        result.current.actions.startGame(4, ['Human', 'Bot1', 'Bot2', 'Bot3'])
      })
    })

    it('should optimize bot decision-making performance', () => {
      const actions = hookResult.current.actions
      
      // Enable performance optimization
      act(() => {
        actions.enablePerformanceOptimization({
          cacheDecisions: true,
          parallelProcessing: true,
          reducedCalculations: false
        })
      })
      
      // Measure bot decision performance
      const startTime = Date.now()
      
      for (let i = 0; i < 20; i++) {
        act(() => {
          actions.forcePlayerTurn(hookResult.current.gameState.players[1].id)
        })
        
        act(() => {
          actions.processBotDecisionOptimized(hookResult.current.gameState.players[1].id)
        })
      }
      
      const endTime = Date.now()
      const duration = endTime - startTime
      
      // Should complete within reasonable time
      expect(duration).toBeLessThan(2000) // 2 seconds for 20 decisions
      
      // Check optimization metrics
      const metrics = actions.getOptimizationMetrics()
      expect(metrics.cacheHitRate).toBeGreaterThan(0)
      expect(metrics.averageDecisionTime).toBeLessThan(100) // milliseconds
    })

    it('should handle concurrent game operations efficiently', () => {
      const actions = hookResult.current.actions
      
      // Test concurrent operations
      const operations = []
      
      for (let i = 0; i < 50; i++) {
        operations.push(() => actions.validateGameState())
        operations.push(() => actions.getGameStatistics())
        operations.push(() => actions.getPlayerAvailableActions())
      }
      
      const startTime = Date.now()
      
      // Execute operations concurrently
      operations.forEach(operation => {
        expect(() => operation()).not.toThrow()
      })
      
      const endTime = Date.now()
      const duration = endTime - startTime
      
      // Should handle concurrent access efficiently
      expect(duration).toBeLessThan(1000) // 1 second for 150 operations
    })

    it('should manage memory usage during extended gameplay', () => {
      const actions = hookResult.current.actions
      
      // Enable memory management
      act(() => {
        actions.enableMemoryManagement({
          automaticCleanup: true,
          historyLimit: 100,
          cacheLimit: 50
        })
      })
      
      // Generate extensive gameplay data
      for (let round = 1; round <= 5; round++) {
        for (let turn = 0; turn < 20; turn++) {
          act(() => {
            actions.generateGameplayData()
          })
        }
        
        act(() => {
          actions.forceRoundEnd()
        })
        
        act(() => {
          actions.processRoundResults()
        })
      }
      
      // Check memory management
      const memoryStats = actions.getMemoryStatistics()
      expect(memoryStats.historySize).toBeLessThanOrEqual(100)
      expect(memoryStats.cacheSize).toBeLessThanOrEqual(50)
      expect(memoryStats.cleanupOperations).toBeGreaterThan(0)
    })

    it('should scale performance with different game configurations', () => {
      const actions = hookResult.current.actions
      
      // Test different configurations
      const configurations = [
        { players: 2, difficulty: 'easy' },
        { players: 3, difficulty: 'medium' },
        { players: 4, difficulty: 'hard' }
      ]
      
      const performanceResults = []
      
      configurations.forEach(config => {
        act(() => {
          actions.resetGame()
        })
        
        act(() => {
          actions.startGame(config.players, Array(config.players).fill('Bot'), {
            difficulty: config.difficulty
          })
        })
        
        const startTime = Date.now()
        
        // Simulate gameplay
        for (let i = 0; i < 10; i++) {
          act(() => {
            actions.processBotTurn()
          })
        }
        
        const endTime = Date.now()
        
        performanceResults.push({
          config,
          duration: endTime - startTime,
          operationsPerSecond: 10000 / (endTime - startTime)
        })
      })
      
      // Performance should scale reasonably
      performanceResults.forEach(result => {
        expect(result.duration).toBeLessThan(5000) // 5 seconds max
        expect(result.operationsPerSecond).toBeGreaterThan(1) // At least 1 op/sec
      })
    })
  })

  describe('Error Handling and Recovery', () => {
    let hookResult: any

    beforeEach(() => {
      const { result } = renderHook(() => useGame(), { wrapper })
      hookResult = result

      act(() => {
        result.current.actions.startGame(3, ['Human', 'Bot1', 'Bot2'])
      })
    })

    it('should handle flow manager errors gracefully', () => {
      const actions = hookResult.current.actions
      
      // Enable error handling
      act(() => {
        actions.enableErrorHandling({
          autoRecovery: true,
          fallbackModes: true,
          errorReporting: true
        })
      })
      
      // Introduce flow manager error
      act(() => {
        actions.introduceFlowError('infinite_loop')
      })
      
      // Should detect and handle error
      const errorState = actions.getErrorState()
      expect(errorState.hasErrors).toBe(true)
      expect(errorState.lastError.type).toBe('infinite_loop')
      
      // Should attempt recovery
      act(() => {
        actions.attemptErrorRecovery()
      })
      
      const recoveryResult = actions.getRecoveryResult()
      expect(recoveryResult.attempted).toBe(true)
      expect(recoveryResult.successful).toBeDefined()
    })

    it('should handle bot behavior failures', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Introduce bot behavior failure
      act(() => {
        actions.introduceBotFailure(gameState.players[1].id, 'decision_timeout')
      })
      
      // Skip to bot turn
      act(() => {
        actions.forcePlayerTurn(gameState.players[1].id)
      })
      
      // Should handle bot failure
      const botResult = actions.processBotTurnWithFailureHandling(gameState.players[1].id)
      expect(botResult.error).toBeDefined()
      expect(botResult.fallbackUsed).toBe(true)
      expect(botResult.completed).toBe(true) // Should complete despite error
    })

    it('should maintain game integrity during errors', () => {
      const actions = hookResult.current.actions
      
      // Record initial game state
      const initialState = actions.captureGameStateSnapshot()
      
      // Introduce multiple errors
      act(() => {
        actions.introduceMultipleErrors([
          'state_corruption',
          'invalid_transition',
          'memory_leak'
        ])
      })
      
      // Process error handling
      act(() => {
        actions.processErrorHandling()
      })
      
      // Game should remain playable
      const finalState = actions.captureGameStateSnapshot()
      expect(actions.isGameStateValid(finalState)).toBe(true)
      
      // Critical state should be preserved
      expect(finalState.players.length).toBe(initialState.players.length)
      expect(finalState.match.currentRound).toBeGreaterThanOrEqual(initialState.match.currentRound)
    })

    it('should provide comprehensive error reporting', () => {
      const actions = hookResult.current.actions
      
      // Generate various errors
      const errorTypes = ['validation', 'flow', 'bot', 'network', 'memory']
      
      errorTypes.forEach(errorType => {
        act(() => {
          actions.introduceError(errorType)
        })
        
        act(() => {
          actions.processError()
        })
      })
      
      // Get error report
      const errorReport = actions.getErrorReport()
      
      expect(errorReport.totalErrors).toBe(errorTypes.length)
      expect(errorReport.errorsByType).toBeDefined()
      expect(errorReport.recoveryAttempts).toBeGreaterThan(0)
      expect(errorReport.successfulRecoveries).toBeGreaterThanOrEqual(0)
      
      // Error details
      errorReport.errors.forEach(error => {
        expect(error.type).toBeDefined()
        expect(error.timestamp).toBeDefined()
        expect(error.severity).toBeDefined()
        expect(error.resolved).toBeDefined()
      })
    })

    it('should handle critical system failures', () => {
      const actions = hookResult.current.actions
      
      // Simulate critical system failure
      act(() => {
        actions.simulateCriticalFailure('complete_state_loss')
      })
      
      // Should activate emergency protocols
      const emergencyState = actions.getEmergencyState()
      expect(emergencyState.activated).toBe(true)
      expect(emergencyState.protocol).toBe('complete_state_loss')
      
      // Should attempt system recovery
      act(() => {
        actions.executeEmergencyRecovery()
      })
      
      const recoveryState = actions.getEmergencyRecoveryState()
      expect(recoveryState.completed).toBe(true)
      
      // Should restore minimal working state
      const restoredState = actions.getGameState()
      expect(actions.isGameStateValid(restoredState)).toBe(true)
      expect(restoredState.emergency.recoveryMode).toBe(true)
    })
  })
})