// Sprint 2 TDD: Memory System Enhancement Tests
import { describe, it, expect, beforeEach } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { GameProvider } from '../../contexts/GameContext'
import { useGame } from '../../hooks/useGame'
import type { ReactNode } from 'react'

const wrapper = ({ children }: { children: ReactNode }) => (
  <GameProvider>{children}</GameProvider>
)

describe('Sprint 2: Memory System Enhancement', () => {
  describe('Card Knowledge Tracking Accuracy', () => {
    let hookResult: any

    beforeEach(() => {
      const { result } = renderHook(() => useGame(), { wrapper })
      hookResult = result

      act(() => {
        result.current.actions.startGame(2, ['Human', 'Bot'])
      })
    })

    it('should accurately track initial card knowledge', () => {
      const actions = hookResult.current.actions
      const gameState = hookResult.current.gameState
      
      // Human player should know first 2 cards initially
      const humanPlayer = gameState.players[0]
      expect(actions.getPlayerKnowledgeCount(humanPlayer.id)).toBe(2)
      
      // Bot player should also know first 2 cards (from bot's perspective)
      const botPlayer = gameState.players[1]
      expect(actions.getPlayerKnowledgeCount(botPlayer.id)).toBe(2)
      
      // Verify specific knowledge states
      expect(humanPlayer.cards[0].isKnownToPlayer).toBe(true)
      expect(humanPlayer.cards[1].isKnownToPlayer).toBe(true)
      expect(humanPlayer.cards[2].isKnownToPlayer).toBe(false)
      expect(humanPlayer.cards[3].isKnownToPlayer).toBe(false)
    })

    it('should track knowledge gained through card replacement', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Initial knowledge count
      const humanPlayer = gameState.players[0]
      expect(actions.getPlayerKnowledgeCount(humanPlayer.id)).toBe(2)
      
      // Draw and replace unknown card
      act(() => {
        actions.drawFromDeck()
      })

      act(() => {
        actions.replaceCard(2) // Replace unknown card
      })

      gameState = hookResult.current.gameState
      const updatedHuman = gameState.players[0]
      
      // Knowledge count should increase
      expect(actions.getPlayerKnowledgeCount(updatedHuman.id)).toBe(3)
      expect(updatedHuman.cards[2].isKnownToPlayer).toBe(true)
    })

    it('should track knowledge during peek operations', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Simulate drawing a Queen (peek ability)
      // This test defines the expected behavior for peek knowledge tracking
      
      // Initial state
      const humanPlayer = gameState.players[0]
      const initialKnowledge = actions.getPlayerKnowledgeCount(humanPlayer.id)
      
      // Peek at opponent's card (simulated)
      const targetPlayerId = gameState.players[1].id
      const targetCardIndex = 0
      
      // Use enhanced peek action that tracks knowledge
      act(() => {
        actions.peekAtCard(targetPlayerId, targetCardIndex)
      })

      gameState = hookResult.current.gameState
      
      // Knowledge should be updated to include peeked card
      const peekedCardInfo = actions.getPeekedCardKnowledge(humanPlayer.id, targetPlayerId, targetCardIndex)
      expect(peekedCardInfo).toBeDefined()
      expect(peekedCardInfo.isKnown).toBe(true)
      expect(peekedCardInfo.turnSeen).toBe(gameState.round.turnNumber)
    })

    it('should maintain knowledge accuracy across multiple turns', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Perform actions across multiple turns and track knowledge
      const knowledgeHistory = []
      
      for (let turn = 0; turn < 3; turn++) {
        // Record knowledge before action
        const beforeKnowledge = actions.getPlayerKnowledgeCount(gameState.players[0].id)
        
        act(() => {
          actions.drawFromDeck()
        })

        act(() => {
          actions.replaceCard(turn % 4)
        })

        act(() => {
          actions.endTurn()
        })

        act(() => {
          actions.endTurn() // Bot turn (simplified)
        })

        gameState = hookResult.current.gameState
        const afterKnowledge = actions.getPlayerKnowledgeCount(gameState.players[0].id)
        
        knowledgeHistory.push({
          turn,
          before: beforeKnowledge,
          after: afterKnowledge,
          gained: afterKnowledge - beforeKnowledge
        })
      }
      
      // Each turn should potentially increase knowledge
      knowledgeHistory.forEach(history => {
        expect(history.after).toBeGreaterThanOrEqual(history.before)
      })
    })
  })

  describe('Knowledge Persistence Through Game Operations', () => {
    let hookResult: any

    beforeEach(() => {
      const { result } = renderHook(() => useGame(), { wrapper })
      hookResult = result

      act(() => {
        result.current.actions.startGame(3, ['Human', 'Bot1', 'Bot2'])
      })
    })

    it('should persist knowledge through normal game operations', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Establish some knowledge
      act(() => {
        actions.drawFromDeck()
      })

      act(() => {
        actions.replaceCard(2)
      })

      const knowledgeAfterReplacement = actions.getPlayerKnowledgeSnapshot(gameState.players[0].id)
      
      // Perform non-knowledge-affecting operations
      act(() => {
        actions.endTurn()
      })

      act(() => {
        actions.endTurn() // Bot turn
      })

      act(() => {
        actions.endTurn() // Another bot turn
      })

      // Knowledge should persist
      gameState = hookResult.current.gameState
      const knowledgeAfterTurns = actions.getPlayerKnowledgeSnapshot(gameState.players[0].id)
      
      expect(knowledgeAfterTurns.knownCardCount).toBe(knowledgeAfterReplacement.knownCardCount)
      expect(knowledgeAfterTurns.cards[2].isKnown).toBe(true)
    })

    it('should persist peek knowledge across turns', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Peek at a card (simulated)
      const targetPlayerId = gameState.players[1].id
      const targetCardIndex = 1
      
      act(() => {
        actions.peekAtCard(targetPlayerId, targetCardIndex)
      })

      const peekedCard = actions.getPeekedCardKnowledge(gameState.players[0].id, targetPlayerId, targetCardIndex)
      expect(peekedCard.isKnown).toBe(true)
      
      // Go through several turns
      for (let i = 0; i < 5; i++) {
        act(() => {
          actions.endTurn()
        })
      }

      // Peek knowledge should persist
      gameState = hookResult.current.gameState
      const persistedPeek = actions.getPeekedCardKnowledge(gameState.players[0].id, targetPlayerId, targetCardIndex)
      expect(persistedPeek.isKnown).toBe(true)
      expect(persistedPeek.cardValue).toBe(peekedCard.cardValue)
    })

    it('should handle knowledge through round transitions', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Build up knowledge during round
      act(() => {
        actions.drawFromDeck()
      })

      act(() => {
        actions.replaceCard(3)
      })

      const knowledgeBeforeRoundEnd = actions.getPlayerKnowledgeSnapshot(gameState.players[0].id)
      
      // End the round
      act(() => {
        actions.callStop()
      })

      // Complete remaining turns
      act(() => {
        actions.endTurn()
      })

      act(() => {
        actions.endTurn()
      })

      act(() => {
        actions.endTurn()
      })

      // In new round, knowledge structure should be maintained
      // (Even though cards are reset, the knowledge system should be intact)
      gameState = hookResult.current.gameState
      const knowledgeAfterRound = actions.getPlayerKnowledgeSnapshot(gameState.players[0].id)
      
      // Knowledge system should be functioning
      expect(typeof knowledgeAfterRound.knownCardCount).toBe('number')
      expect(Array.isArray(knowledgeAfterRound.cards)).toBe(true)
    })
  })

  describe('Knowledge Transfer During Card Swaps', () => {
    let hookResult: any

    beforeEach(() => {
      const { result } = renderHook(() => useGame(), { wrapper })
      hookResult = result

      act(() => {
        result.current.actions.startGame(2, ['Human', 'Bot'])
      })
    })

    it('should transfer knowledge correctly during card swaps', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Establish knowledge states
      const humanPlayer = gameState.players[0]
      const botPlayer = gameState.players[1]
      
      // Human knows their first card, bot knows their first card
      const humanCard0Knowledge = humanPlayer.cards[0].isKnownToPlayer
      const botCard0Knowledge = actions.getCardKnowledgeFromBotPerspective(botPlayer.id, 0)
      
      // Simulate swap between human card 0 and bot card 0
      act(() => {
        actions.swapCards(humanPlayer.id, 0, botPlayer.id, 0)
      })

      gameState = hookResult.current.gameState
      const updatedHuman = gameState.players[0]
      const updatedBot = gameState.players[1]
      
      // Knowledge should transfer with the cards
      // Human should now know what the bot's card was (if bot knew it)
      const newHumanCard0Knowledge = actions.getSwappedCardKnowledge(
        humanPlayer.id, 0, botPlayer.id, 0, botCard0Knowledge
      )
      
      // Bot should know what human's card was (if human knew it)  
      const newBotCard0Knowledge = actions.getSwappedCardKnowledge(
        botPlayer.id, 0, humanPlayer.id, 0, humanCard0Knowledge
      )
      
      expect(newHumanCard0Knowledge).toBe(botCard0Knowledge)
      expect(newBotCard0Knowledge).toBe(humanCard0Knowledge)
    })

    it('should handle knowledge transfer between known and unknown cards', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Human knows card 0, doesn't know card 2
      const humanPlayer = gameState.players[0]
      expect(humanPlayer.cards[0].isKnownToPlayer).toBe(true)
      expect(humanPlayer.cards[2].isKnownToPlayer).toBe(false)
      
      // Swap known card with unknown card
      act(() => {
        actions.swapCards(humanPlayer.id, 0, humanPlayer.id, 2)
      })

      gameState = hookResult.current.gameState
      const updatedHuman = gameState.players[0]
      
      // Position 0 should now be unknown (unknown card moved there)
      // Position 2 should now be known (known card moved there)
      expect(updatedHuman.cards[0].isKnownToPlayer).toBe(false)
      expect(updatedHuman.cards[2].isKnownToPlayer).toBe(true)
    })

    it('should preserve swap knowledge across multiple operations', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Perform initial swap
      const humanPlayer = gameState.players[0]
      const originalCard0Id = humanPlayer.cards[0].cardId
      const originalCard1Id = humanPlayer.cards[1].cardId
      
      act(() => {
        actions.swapCards(humanPlayer.id, 0, humanPlayer.id, 1)
      })

      gameState = hookResult.current.gameState
      const swappedHuman = gameState.players[0]
      
      // Verify swap occurred
      expect(swappedHuman.cards[0].cardId).toBe(originalCard1Id)
      expect(swappedHuman.cards[1].cardId).toBe(originalCard0Id)
      
      // Both positions should still be known
      expect(swappedHuman.cards[0].isKnownToPlayer).toBe(true)
      expect(swappedHuman.cards[1].isKnownToPlayer).toBe(true)
      
      // Perform additional operations
      act(() => {
        actions.drawFromDeck()
      })

      act(() => {
        actions.replaceCard(3)
      })

      // Original swap knowledge should persist
      gameState = hookResult.current.gameState
      const finalHuman = gameState.players[0]
      expect(finalHuman.cards[0].isKnownToPlayer).toBe(true)
      expect(finalHuman.cards[1].isKnownToPlayer).toBe(true)
    })

    it('should handle complex multi-player swap scenarios', () => {
      // Set up 3-player game for complex swaps
      const { result } = renderHook(() => useGame(), { wrapper })
      hookResult = result

      act(() => {
        result.current.actions.startGame(3, ['Human', 'Bot1', 'Bot2'])
      })

      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      const humanPlayer = gameState.players[0]
      const bot1Player = gameState.players[1]
      const bot2Player = gameState.players[2]
      
      // Human knows their cards 0,1
      // Bots know their cards 0,1 (from their perspective)
      
      // Swap human card 0 with bot1 card 0
      act(() => {
        actions.swapCards(humanPlayer.id, 0, bot1Player.id, 0)
      })

      gameState = hookResult.current.gameState
      
      // Swap bot1 card 1 with bot2 card 0  
      act(() => {
        actions.swapCards(bot1Player.id, 1, bot2Player.id, 0)
      })

      gameState = hookResult.current.gameState
      
      // Knowledge tracking should handle the complex swap chain
      const finalKnowledgeSnapshot = actions.getPlayerKnowledgeSnapshot(humanPlayer.id)
      expect(finalKnowledgeSnapshot.knownCardCount).toBeGreaterThan(0)
      expect(finalKnowledgeSnapshot.swapHistory).toBeDefined()
      expect(finalKnowledgeSnapshot.swapHistory.length).toBeGreaterThan(0)
    })
  })

  describe('Memory System Edge Cases and Boundary Conditions', () => {
    let hookResult: any

    beforeEach(() => {
      const { result } = renderHook(() => useGame(), { wrapper })
      hookResult = result

      act(() => {
        result.current.actions.startGame(2, ['Human', 'Bot'])
      })
    })

    it('should handle edge case: all cards become known', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Make all cards known through replacements
      for (let i = 2; i < 4; i++) {
        act(() => {
          actions.drawFromDeck()
        })

        act(() => {
          actions.replaceCard(i)
        })

        act(() => {
          actions.endTurn()
        })

        act(() => {
          actions.endTurn() // Bot turn
        })
      }

      gameState = hookResult.current.gameState
      const humanPlayer = gameState.players[0]
      
      // All cards should be known
      expect(actions.getPlayerKnowledgeCount(humanPlayer.id)).toBe(4)
      humanPlayer.cards.forEach(card => {
        expect(card.isKnownToPlayer).toBe(true)
      })
    })

    it('should handle edge case: no cards become known (theoretical)', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // In normal gameplay, player always knows first 2 cards
      // But test the system's handling of minimal knowledge
      const humanPlayer = gameState.players[0]
      const minKnowledge = actions.getPlayerKnowledgeCount(humanPlayer.id)
      
      // Minimum should be 2 (initial known cards)
      expect(minKnowledge).toBeGreaterThanOrEqual(2)
      
      // System should handle low knowledge states gracefully
      const knowledgeSnapshot = actions.getPlayerKnowledgeSnapshot(humanPlayer.id)
      expect(knowledgeSnapshot.knownCardCount).toBe(minKnowledge)
      expect(knowledgeSnapshot.unknownCardCount).toBe(4 - minKnowledge)
    })

    it('should handle memory system under rapid operations', () => {
      const actions = hookResult.current.actions
      
      // Perform rapid operations to stress test memory system
      for (let i = 0; i < 10; i++) {
        act(() => {
          actions.drawFromDeck()
        })

        act(() => {
          actions.replaceCard(i % 4)
        })

        if (i % 2 === 0) {
          act(() => {
            actions.endTurn()
          })

          act(() => {
            actions.endTurn() // Bot turn
          })
        }
      }

      // Memory system should remain consistent
      let gameState = hookResult.current.gameState
      const stats = actions.getGameStatistics()
      expect(stats.isValidState).toBe(true)
      
      const knowledgeSnapshot = actions.getPlayerKnowledgeSnapshot(gameState.players[0].id)
      expect(knowledgeSnapshot.knownCardCount).toBeGreaterThanOrEqual(2)
      expect(knowledgeSnapshot.knownCardCount).toBeLessThanOrEqual(4)
    })

    it('should maintain knowledge integrity during invalid operations', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Record initial knowledge
      const initialKnowledge = actions.getPlayerKnowledgeSnapshot(gameState.players[0].id)
      
      // Attempt invalid operations (should be ignored by validation)
      try {
        act(() => {
          actions.replaceCard(5) // Invalid index
        })
      } catch (e) {
        // Expected to fail
      }

      try {
        act(() => {
          actions.peekAtCard('invalid-player', 0)
        })
      } catch (e) {
        // Expected to fail
      }

      // Knowledge should remain unchanged after invalid operations
      gameState = hookResult.current.gameState
      const finalKnowledge = actions.getPlayerKnowledgeSnapshot(gameState.players[0].id)
      
      expect(finalKnowledge.knownCardCount).toBe(initialKnowledge.knownCardCount)
      expect(finalKnowledge.cards[0].isKnown).toBe(initialKnowledge.cards[0].isKnown)
      expect(finalKnowledge.cards[1].isKnown).toBe(initialKnowledge.cards[1].isKnown)
    })

    it('should handle knowledge system performance under load', () => {
      const actions = hookResult.current.actions
      
      // Performance test: many knowledge operations
      const startTime = Date.now()
      
      for (let i = 0; i < 100; i++) {
        // Knowledge queries should be fast
        actions.getPlayerKnowledgeCount(hookResult.current.gameState.players[0].id)
        actions.getPlayerKnowledgeSnapshot(hookResult.current.gameState.players[0].id)
        
        if (i % 10 === 0) {
          act(() => {
            actions.drawFromDeck()
          })

          act(() => {
            actions.replaceCard(i % 4)
          })

          act(() => {
            actions.endTurn()
          })

          act(() => {
            actions.endTurn()
          })
        }
      }
      
      const endTime = Date.now()
      const duration = endTime - startTime
      
      // Should complete within reasonable time
      expect(duration).toBeLessThan(5000) // 5 seconds
      
      // Knowledge system should still be accurate
      let gameState = hookResult.current.gameState
      const finalSnapshot = actions.getPlayerKnowledgeSnapshot(gameState.players[0].id)
      expect(finalSnapshot.knownCardCount).toBeGreaterThanOrEqual(2)
    })
  })
})