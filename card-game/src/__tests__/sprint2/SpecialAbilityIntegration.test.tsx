// Sprint 2 TDD: Special Ability Integration Tests
import { describe, it, expect, beforeEach } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { GameProvider } from '../../contexts/GameContext'
import { useGame } from '../../hooks/useGame'
import { Rank, GamePhase } from '../../types'
import type { ReactNode } from 'react'

const wrapper = ({ children }: { children: ReactNode }) => (
  <GameProvider>{children}</GameProvider>
)

describe('Sprint 2: Special Ability Integration', () => {
  describe('Queen Peek and Jack Swap Interaction', () => {
    let hookResult: any

    beforeEach(() => {
      const { result } = renderHook(() => useGame(), { wrapper })
      hookResult = result

      act(() => {
        result.current.actions.startGame(3, ['Human', 'Bot1', 'Bot2'])
      })
    })

    it('should handle peek followed by swap in same round', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Turn 1: Human draws Queen and peeks
      act(() => {
        actions.forceDrawQueen()
      })
      
      const targetPlayerId = gameState.players[1].id
      const targetCardIndex = 0
      
      act(() => {
        actions.peekAtCard(targetPlayerId, targetCardIndex)
      })
      
      const peekResult = actions.getLastPeekResult()
      const peekedCardValue = peekResult.cardValue
      
      act(() => {
        actions.replaceCard(0) // Use the Queen
      })
      
      act(() => {
        actions.endTurn()
      })
      
      // Turn 2: Bot turn (skip)
      act(() => {
        actions.endTurn()
      })
      
      // Turn 3: Human draws Jack and swaps
      act(() => {
        actions.forceDrawJack()
      })
      
      act(() => {
        actions.swapCards(gameState.players[0].id, 1, targetPlayerId, targetCardIndex)
      })
      
      gameState = hookResult.current.gameState
      
      // Human should now have the card they peeked at
      const humanCard = gameState.players[0].cards[1]
      expect(humanCard.value).toBe(peekedCardValue)
      
      // Knowledge system should track this correctly
      expect(humanCard.isKnownToPlayer).toBe(true) // Human knows what they swapped for
    })

    it('should handle swap affecting previously peeked cards', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Human peeks at bot's card
      act(() => {
        actions.forceDrawQueen()
      })
      
      const targetPlayerId = gameState.players[1].id
      const targetCardIndex = 2
      
      act(() => {
        actions.peekAtCard(targetPlayerId, targetCardIndex)
      })
      
      const peekResult = actions.getLastPeekResult()
      
      act(() => {
        actions.replaceCard(0)
      })
      
      act(() => {
        actions.endTurn()
      })
      
      // Bot draws Jack and swaps the peeked card
      act(() => {
        actions.forceBotDrawJack()
      })
      
      act(() => {
        actions.forceBotSwap(targetPlayerId, targetCardIndex, gameState.players[2].id, 1)
      })
      
      gameState = hookResult.current.gameState
      
      // Human's peek knowledge should be updated
      const peekKnowledge = actions.getPeekedCardKnowledge(gameState.players[0].id, targetPlayerId, targetCardIndex)
      expect(peekKnowledge.isStale).toBe(true)
      expect(peekKnowledge.originalValue).toBe(peekResult.cardValue)
      
      // The peeked card should now be at bot2's position
      const newPeekKnowledge = actions.getPeekedCardKnowledge(gameState.players[0].id, gameState.players[2].id, 1)
      expect(newPeekKnowledge.isKnown).toBe(true)
      expect(newPeekKnowledge.cardValue).toBe(peekResult.cardValue)
    })

    it('should handle multiple special abilities in sequence', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Set up scenario with multiple special cards
      const specialSequence = []
      
      // Turn 1: Queen peek
      act(() => {
        actions.forceDrawQueen()
      })
      
      act(() => {
        actions.peekAtCard(gameState.players[1].id, 0)
      })
      
      specialSequence.push({ type: 'peek', result: actions.getLastPeekResult() })
      
      act(() => {
        actions.replaceCard(0)
      })
      
      act(() => {
        actions.endTurn()
      })
      
      // Turn 2: Bot1 Jack swap
      act(() => {
        actions.forceBotDrawJack()
      })
      
      act(() => {
        actions.forceBotSwap(gameState.players[1].id, 1, gameState.players[2].id, 0)
      })
      
      specialSequence.push({ type: 'swap', players: [gameState.players[1].id, gameState.players[2].id] })
      
      act(() => {
        actions.endTurn()
      })
      
      // Turn 3: Bot2 Queen peek
      act(() => {
        actions.forceBotDrawQueen()
      })
      
      act(() => {
        actions.forceBotPeek(gameState.players[2].id, gameState.players[0].id, 3)
      })
      
      specialSequence.push({ type: 'peek', peeker: gameState.players[2].id })
      
      act(() => {
        actions.endTurn()
      })
      
      // Turn 4: Human Jack swap
      act(() => {
        actions.forceDrawJack()
      })
      
      act(() => {
        actions.swapCards(gameState.players[0].id, 2, gameState.players[1].id, 3)
      })
      
      specialSequence.push({ type: 'swap', players: [gameState.players[0].id, gameState.players[1].id] })
      
      gameState = hookResult.current.gameState
      
      // All special abilities should be tracked
      expect(specialSequence.length).toBe(4)
      
      const gameHistory = actions.getSpecialAbilityHistory()
      expect(gameHistory.length).toBe(4)
      expect(gameHistory.filter(h => h.type === 'peek').length).toBe(2)
      expect(gameHistory.filter(h => h.type === 'swap').length).toBe(2)
    })

    it('should validate special ability combinations', () => {
      const actions = hookResult.current.actions
      
      // Cannot use multiple special abilities in same turn
      act(() => {
        actions.forceDrawQueen()
      })
      
      act(() => {
        actions.peekAtCard(hookResult.current.gameState.players[1].id, 0)
      })
      
      // After using peek, should not be able to use another special ability
      expect(actions.canUseSpecialAbility()).toBe(false)
      
      // Even if given another special card (theoretical scenario)
      expect(actions.canActivateSecondSpecialAbility()).toBe(false)
    })
  })

  describe('Special Abilities with Game Phase Integration', () => {
    let hookResult: any

    beforeEach(() => {
      const { result } = renderHook(() => useGame(), { wrapper })
      hookResult = result

      act(() => {
        result.current.actions.startGame(2, ['Human', 'Bot'])
      })
    })

    it('should handle special abilities during normal game phase', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      expect(gameState.round.phase).toBe(GamePhase.PLAYING)
      
      // Draw Queen and use peek
      act(() => {
        actions.forceDrawQueen()
      })
      
      expect(actions.canUseSpecialAbility()).toBe(true)
      
      act(() => {
        actions.peekAtCard(gameState.players[1].id, 0)
      })
      
      // Game should remain in playing phase
      gameState = hookResult.current.gameState
      expect(gameState.round.phase).toBe(GamePhase.PLAYING)
      
      act(() => {
        actions.replaceCard(0)
      })
      
      // Turn should complete normally
      act(() => {
        actions.endTurn()
      })
      
      gameState = hookResult.current.gameState
      expect(gameState.round.currentPlayerIndex).toBe(1)
    })

    it('should handle special abilities during stop-called phase', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Call stop
      act(() => {
        actions.callStop()
      })
      
      expect(gameState.round.stopCalled).toBe(true)
      
      // Draw special card after stop
      act(() => {
        actions.forceDrawJack()
      })
      
      // Should still be able to use special ability
      expect(actions.canUseSpecialAbility()).toBe(true)
      
      act(() => {
        actions.swapCards(gameState.players[0].id, 0, gameState.players[1].id, 0)
      })
      
      act(() => {
        actions.replaceCard(1)
      })
      
      act(() => {
        actions.endTurn()
      })
      
      // Game should continue with remaining turns
      gameState = hookResult.current.gameState
      expect(gameState.round.stopCalled).toBe(true)
      expect(gameState.round.remainingTurns).toBeGreaterThan(0)
    })

    it('should not allow special abilities during scoring phase', () => {
      const actions = hookResult.current.actions
      
      // Force game to scoring phase
      act(() => {
        actions.forcePhaseTransition(GamePhase.SCORING)
      })
      
      let gameState = hookResult.current.gameState
      expect(gameState.round.phase).toBe(GamePhase.SCORING)
      
      // Should not be able to use special abilities
      expect(actions.canUseSpecialAbility()).toBe(false)
      expect(actions.canDrawFromDeck()).toBe(false)
      
      // UI should not show special ability options
      expect(gameState.ui.showingPeekAbility).toBe(false)
      expect(gameState.ui.showingSwapAbility).toBe(false)
    })

    it('should handle special abilities during round transitions', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Get to end of round
      act(() => {
        actions.callStop()
      })
      
      // Complete all turns except last
      while (gameState.round.remainingTurns > 1) {
        act(() => {
          actions.endTurn()
        })
        gameState = hookResult.current.gameState
      }
      
      // Last turn with special card
      act(() => {
        actions.forceDrawQueen()
      })
      
      // Should be able to use special ability on final turn
      expect(actions.canUseSpecialAbility()).toBe(true)
      
      act(() => {
        actions.peekAtCard(gameState.players[1].id, 2)
      })
      
      act(() => {
        actions.replaceCard(0)
      })
      
      act(() => {
        actions.endTurn()
      })
      
      // Should transition to scoring
      gameState = hookResult.current.gameState
      expect(gameState.round.phase).toBe(GamePhase.SCORING)
      
      // Peek result should be preserved for scoring
      const peekHistory = actions.getPeekHistory(gameState.players[0].id)
      expect(peekHistory.length).toBe(1)
    })
  })

  describe('Special Abilities with Knowledge System Integration', () => {
    let hookResult: any

    beforeEach(() => {
      const { result } = renderHook(() => useGame(), { wrapper })
      hookResult = result

      act(() => {
        result.current.actions.startGame(3, ['Human', 'Bot1', 'Bot2'])
      })
    })

    it('should integrate peek knowledge with existing card knowledge', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Initial knowledge state
      const humanPlayer = gameState.players[0]
      const initialKnownCards = humanPlayer.cards.filter(card => card.isKnownToPlayer).length
      expect(initialKnownCards).toBe(2) // Initially knows first 2 cards
      
      // Use peek to gain knowledge
      act(() => {
        actions.forceDrawQueen()
      })
      
      act(() => {
        actions.peekAtCard(gameState.players[1].id, 0)
      })
      
      // Knowledge count should increase
      const newKnowledgeCount = actions.getPlayerKnowledgeCount(humanPlayer.id)
      expect(newKnowledgeCount).toBeGreaterThan(initialKnownCards)
      
      // Peek knowledge should be accessible
      const peekKnowledge = actions.getPeekedCardKnowledge(humanPlayer.id, gameState.players[1].id, 0)
      expect(peekKnowledge.isKnown).toBe(true)
      
      act(() => {
        actions.replaceCard(2) // Replace unknown card
      })
      
      act(() => {
        actions.endTurn()
      })
      
      // Total knowledge should account for both peek and replacement
      gameState = hookResult.current.gameState
      const finalKnowledgeCount = actions.getPlayerKnowledgeCount(gameState.players[0].id)
      expect(finalKnowledgeCount).toBe(newKnowledgeCount + 1) // +1 for replacement
    })

    it('should handle knowledge transfer during swaps', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Human knows their cards 0 and 1, doesn't know 2 and 3
      const humanPlayer = gameState.players[0]
      expect(humanPlayer.cards[0].isKnownToPlayer).toBe(true)
      expect(humanPlayer.cards[1].isKnownToPlayer).toBe(true)
      expect(humanPlayer.cards[2].isKnownToPlayer).toBe(false)
      expect(humanPlayer.cards[3].isKnownToPlayer).toBe(false)
      
      // Use Jack to swap known card with unknown card
      act(() => {
        actions.forceDrawJack()
      })
      
      act(() => {
        actions.swapCards(humanPlayer.id, 0, humanPlayer.id, 2)
      })
      
      gameState = hookResult.current.gameState
      const updatedHuman = gameState.players[0]
      
      // Knowledge should transfer with cards
      expect(updatedHuman.cards[0].isKnownToPlayer).toBe(false) // Unknown card moved here
      expect(updatedHuman.cards[2].isKnownToPlayer).toBe(true)  // Known card moved here
      
      // Total knowledge count should remain same
      const knowledgeAfterSwap = actions.getPlayerKnowledgeCount(updatedHuman.id)
      expect(knowledgeAfterSwap).toBe(2) // Still knows 2 cards, just different positions
    })

    it('should handle complex knowledge scenarios with multiple abilities', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Scenario: Peek, then swap the peeked card
      
      // Step 1: Peek at opponent's card
      act(() => {
        actions.forceDrawQueen()
      })
      
      const targetPlayer = gameState.players[1]
      const targetCardIndex = 1
      
      act(() => {
        actions.peekAtCard(targetPlayer.id, targetCardIndex)
      })
      
      const peekResult = actions.getLastPeekResult()
      
      act(() => {
        actions.replaceCard(0)
      })
      
      act(() => {
        actions.endTurn()
      })
      
      // Step 2: Get Jack and swap for the peeked card
      act(() => {
        actions.endTurn() // Bot turn
      })
      
      act(() => {
        actions.forceDrawJack()
      })
      
      act(() => {
        actions.swapCards(gameState.players[0].id, 3, targetPlayer.id, targetCardIndex)
      })
      
      gameState = hookResult.current.gameState
      const humanPlayer = gameState.players[0]
      
      // Human should now have the peeked card and know its value
      expect(humanPlayer.cards[3].isKnownToPlayer).toBe(true)
      expect(humanPlayer.cards[3].value).toBe(peekResult.cardValue)
      
      // Knowledge system should track this complex interaction
      const knowledgeSnapshot = actions.getPlayerKnowledgeSnapshot(humanPlayer.id)
      expect(knowledgeSnapshot.peekAndSwapIntegration).toBe(true)
    })

    it('should maintain knowledge consistency across special ability chains', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Complex chain: Peek -> Swap -> Another player peeks the swapped card
      
      // Human peeks Bot1's card
      act(() => {
        actions.forceDrawQueen()
      })
      
      act(() => {
        actions.peekAtCard(gameState.players[1].id, 0)
      })
      
      const initialPeek = actions.getLastPeekResult()
      
      act(() => {
        actions.replaceCard(1)
      })
      
      act(() => {
        actions.endTurn()
      })
      
      // Bot1 swaps the peeked card with Bot2
      act(() => {
        actions.forceBotDrawJack()
      })
      
      act(() => {
        actions.forceBotSwap(gameState.players[1].id, 0, gameState.players[2].id, 2)
      })
      
      act(() => {
        actions.endTurn()
      })
      
      // Bot2 peeks Human's card
      act(() => {
        actions.forceBotDrawQueen()
      })
      
      act(() => {
        actions.forceBotPeek(gameState.players[2].id, gameState.players[0].id, 2)
      })
      
      act(() => {
        actions.endTurn()
      })
      
      gameState = hookResult.current.gameState
      
      // Knowledge consistency check
      const consistencyReport = actions.validateKnowledgeConsistency()
      expect(consistencyReport.isConsistent).toBe(true)
      
      // Human should still know about the card they originally peeked
      const updatedPeekKnowledge = actions.getPeekedCardKnowledge(gameState.players[0].id, gameState.players[2].id, 2)
      expect(updatedPeekKnowledge.cardValue).toBe(initialPeek.cardValue)
      expect(updatedPeekKnowledge.trackingSwaps).toBe(true)
    })
  })

  describe('Special Abilities with Bot AI Integration', () => {
    let hookResult: any

    beforeEach(() => {
      const { result } = renderHook(() => useGame(), { wrapper })
      hookResult = result

      act(() => {
        result.current.actions.startGame(3, ['Human', 'Bot1', 'Bot2'])
      })
    })

    it('should handle bot special ability decision making', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Human turn first
      act(() => {
        actions.drawFromDeck()
      })
      
      act(() => {
        actions.replaceCard(0)
      })
      
      act(() => {
        actions.endTurn()
      })
      
      // Bot1 draws Queen
      act(() => {
        actions.forceBotDrawQueen()
      })
      
      gameState = hookResult.current.gameState
      
      // Bot should be able to use peek ability
      expect(actions.canBotUseSpecialAbility(gameState.players[1].id)).toBe(true)
      
      // Process bot decision
      act(() => {
        actions.processBotSpecialAbility(gameState.players[1].id)
      })
      
      // Bot should make a decision (peek or skip)
      const botDecision = actions.getLastBotSpecialAbilityDecision()
      expect(botDecision).toBeDefined()
      expect(['peek', 'skip']).toContain(botDecision.action)
      
      if (botDecision.action === 'peek') {
        expect(botDecision.targetPlayer).toBeDefined()
        expect(botDecision.targetCardIndex).toBeGreaterThanOrEqual(0)
        expect(botDecision.targetCardIndex).toBeLessThan(4)
      }
    })

    it('should handle bot swap decisions based on game state', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Set up scenario where bot has advantage from swapping
      act(() => {
        actions.setupBotAdvantageScenario()
      })
      
      // Bot draws Jack
      act(() => {
        actions.forceBotDrawJack()
      })
      
      // Process bot swap decision
      act(() => {
        actions.processBotSpecialAbility(gameState.players[1].id)
      })
      
      const botDecision = actions.getLastBotSpecialAbilityDecision()
      expect(botDecision.action).toBe('swap')
      expect(botDecision.sourcePlayer).toBeDefined()
      expect(botDecision.sourceCardIndex).toBeGreaterThanOrEqual(0)
      expect(botDecision.targetPlayer).toBeDefined()
      expect(botDecision.targetCardIndex).toBeGreaterThanOrEqual(0)
      
      // Swap should be strategically beneficial
      const swapBenefit = actions.evaluateSwapBenefit(botDecision)
      expect(swapBenefit.isAdvantageous).toBe(true)
    })

    it('should handle bot special ability timing and prioritization', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Set up scenario with multiple bots having special cards
      act(() => {
        actions.forceMultipleBotsWithSpecialCards()
      })
      
      // Bot1 has Queen, Bot2 has Jack
      gameState = hookResult.current.gameState
      
      // Process turns in sequence
      act(() => {
        actions.endTurn() // Skip human
      })
      
      // Bot1 processes Queen ability
      act(() => {
        actions.processBotTurn()
      })
      
      const bot1Decision = actions.getBotDecisionLog(gameState.players[1].id)
      expect(bot1Decision.specialAbilityUsed).toBeDefined()
      
      // Bot2 processes Jack ability
      act(() => {
        actions.processBotTurn()
      })
      
      const bot2Decision = actions.getBotDecisionLog(gameState.players[2].id)
      expect(bot2Decision.specialAbilityUsed).toBeDefined()
      
      // Bots should coordinate reasonably (not interfere with each other)
      const coordinationScore = actions.evaluateBotCoordination()
      expect(coordinationScore).toBeGreaterThan(0.5) // Reasonable coordination
    })

    it('should handle bot reactions to human special abilities', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Human uses Queen to peek at Bot1
      act(() => {
        actions.forceDrawQueen()
      })
      
      act(() => {
        actions.peekAtCard(gameState.players[1].id, 0)
      })
      
      act(() => {
        actions.replaceCard(2)
      })
      
      act(() => {
        actions.endTurn()
      })
      
      // Bot1 should adjust strategy based on being peeked
      act(() => {
        actions.processBotTurn()
      })
      
      const botReaction = actions.getBotReactionToBeingPeeked(gameState.players[1].id)
      expect(botReaction).toBeDefined()
      expect(botReaction.awarenessLevel).toBeGreaterThan(0)
      
      // Bot might be more likely to replace the peeked card
      if (botReaction.shouldReplacePeekedCard) {
        expect(botReaction.replacementPriority).toBeGreaterThan(0.7)
      }
    })
  })

  describe('Special Abilities Performance and Edge Cases', () => {
    let hookResult: any

    beforeEach(() => {
      const { result } = renderHook(() => useGame(), { wrapper })
      hookResult = result

      act(() => {
        result.current.actions.startGame(4, ['Human', 'Bot1', 'Bot2', 'Bot3'])
      })
    })

    it('should handle high frequency special ability usage', () => {
      const actions = hookResult.current.actions
      
      // Performance test: multiple special abilities in quick succession
      const startTime = Date.now()
      
      for (let i = 0; i < 25; i++) {
        // Alternate between Queen and Jack abilities
        if (i % 2 === 0) {
          act(() => {
            actions.forceDrawQueen()
          })
          
          act(() => {
            actions.peekAtCard(
              hookResult.current.gameState.players[(i + 1) % 4].id,
              i % 4
            )
          })
        } else {
          act(() => {
            actions.forceDrawJack()
          })
          
          act(() => {
            actions.swapCards(
              hookResult.current.gameState.players[i % 4].id,
              i % 4,
              hookResult.current.gameState.players[(i + 1) % 4].id,
              (i + 1) % 4
            )
          })
        }
        
        act(() => {
          actions.replaceCard(0)
        })
        
        act(() => {
          actions.endTurn()
        })
      }
      
      const endTime = Date.now()
      const duration = endTime - startTime
      
      // Should complete within reasonable time
      expect(duration).toBeLessThan(8000) // 8 seconds
      
      // Game state should remain valid
      expect(actions.validateGameState()).toBe(true)
      
      // Special ability history should be maintained
      const history = actions.getSpecialAbilityHistory()
      expect(history.length).toBe(25)
    })

    it('should handle special ability memory management', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Generate extensive special ability history
      for (let round = 0; round < 5; round++) {
        for (let turn = 0; turn < 16; turn++) { // 4 players × 4 turns each
          act(() => {
            if (turn % 3 === 0) {
              actions.forceDrawQueen()
              actions.peekAtCard(gameState.players[(turn + 1) % 4].id, turn % 4)
            } else if (turn % 3 === 1) {
              actions.forceDrawJack()
              actions.swapCards(
                gameState.players[turn % 4].id, 
                turn % 4,
                gameState.players[(turn + 2) % 4].id,
                (turn + 1) % 4
              )
            }
            
            actions.replaceCard(0)
            actions.endTurn()
          })
          
          gameState = hookResult.current.gameState
        }
        
        // Force round end
        act(() => {
          actions.forceEndRound()
        })
      }
      
      // Memory usage should be reasonable
      const memoryStats = actions.getMemoryUsageStats()
      expect(memoryStats.specialAbilityHistory).toBeLessThan(1000) // Reasonable limit
      expect(memoryStats.knowledgeTracking).toBeLessThan(2000)
      
      // Essential data should be preserved
      const essentialHistory = actions.getEssentialSpecialAbilityHistory()
      expect(essentialHistory.length).toBeGreaterThan(0)
    })

    it('should handle corrupted special ability state gracefully', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Draw Queen
      act(() => {
        actions.forceDrawQueen()
      })
      
      // Corrupt the special ability state
      act(() => {
        actions.corruptSpecialAbilityState()
      })
      
      // Should handle gracefully without crashing
      expect(() => {
        actions.canUseSpecialAbility()
      }).not.toThrow()
      
      expect(() => {
        actions.peekAtCard(gameState.players[1].id, 0)
      }).not.toThrow()
      
      // Should attempt recovery
      const recoveryAttempt = actions.attemptSpecialAbilityStateRecovery()
      expect(recoveryAttempt.success).toBe(true)
    })

    it('should handle special abilities with network latency simulation', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Simulate network latency in special ability operations
      act(() => {
        actions.enableLatencySimulation(100) // 100ms delay
      })
      
      // Draw Queen
      act(() => {
        actions.forceDrawQueen()
      })
      
      // Peek operation with simulated latency
      const peekPromise = new Promise(resolve => {
        setTimeout(() => {
          act(() => {
            actions.peekAtCard(gameState.players[1].id, 0)
          })
          resolve(true)
        }, 100)
      })
      
      // Should handle delayed operations properly
      return peekPromise.then(() => {
        gameState = hookResult.current.gameState
        expect(actions.getLastPeekResult()).toBeDefined()
        
        // Game state should remain consistent despite latency
        expect(actions.validateGameState()).toBe(true)
      })
    })

    it('should validate special ability state transitions', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Test all possible state transitions
      const stateTransitions = []
      
      // Normal -> Peek
      act(() => {
        actions.forceDrawQueen()
      })
      
      stateTransitions.push({
        from: 'normal',
        to: 'peek_available',
        valid: actions.canUseSpecialAbility()
      })
      
      // Peek Available -> Peeking
      act(() => {
        actions.beginPeekSelection()
      })
      
      stateTransitions.push({
        from: 'peek_available',
        to: 'peeking',
        valid: gameState.ui.showingPeekTargetSelection
      })
      
      // Peeking -> Peek Complete
      act(() => {
        actions.peekAtCard(gameState.players[1].id, 0)
      })
      
      stateTransitions.push({
        from: 'peeking',
        to: 'peek_complete',
        valid: !gameState.ui.showingPeekTargetSelection
      })
      
      // All transitions should be valid
      stateTransitions.forEach(transition => {
        expect(transition.valid).toBe(true)
      })
      
      // State machine should be in consistent state
      const stateMachine = actions.getSpecialAbilityStateMachine()
      expect(stateMachine.isConsistent).toBe(true)
    })
  })
})