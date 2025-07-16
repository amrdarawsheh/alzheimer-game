// Sprint 2 TDD: Complete Scoring System Tests
import { describe, it, expect, beforeEach } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { GameProvider } from '../../contexts/GameContext'
import { useGame } from '../../hooks/useGame'
import { Rank, Suit } from '../../types'
import type { ReactNode } from 'react'

const wrapper = ({ children }: { children: ReactNode }) => (
  <GameProvider>{children}</GameProvider>
)

describe.skip('Sprint 2: Complete Scoring System', () => {
  describe('Individual Card Scoring', () => {
    let hookResult: any

    beforeEach(() => {
      const { result } = renderHook(() => useGame(), { wrapper })
      hookResult = result

      act(() => {
        result.current.actions.startGame(2, ['Human', 'Bot'])
      })
    })

    it('should calculate correct values for all card types', () => {
      const actions = hookResult.current.actions
      
      // Test all card values according to game rules
      const cardValues = [
        { rank: Rank.ACE, expectedValue: 1 },
        { rank: Rank.TWO, expectedValue: 2 },
        { rank: Rank.THREE, expectedValue: 3 },
        { rank: Rank.FOUR, expectedValue: 4 },
        { rank: Rank.FIVE, expectedValue: 5 },
        { rank: Rank.SIX, expectedValue: 6 },
        { rank: Rank.SEVEN, expectedValue: 7 },
        { rank: Rank.EIGHT, expectedValue: 8 },
        { rank: Rank.NINE, expectedValue: 9 },
        { rank: Rank.TEN, expectedValue: 0 },
        { rank: Rank.JACK, expectedValue: 11 },
        { rank: Rank.QUEEN, expectedValue: 12 },
        { rank: Rank.KING, expectedValue: -2 },
        { rank: Rank.JOKER, expectedValue: -4 }
      ]
      
      cardValues.forEach(({ rank, expectedValue }) => {
        const cardValue = actions.calculateCardValue(rank)
        expect(cardValue).toBe(expectedValue)
      })
    })

    it('should handle special card scoring edge cases', () => {
      const actions = hookResult.current.actions
      
      // Test Joker variations if any
      const jokerValue = actions.calculateCardValue(Rank.JOKER)
      expect(jokerValue).toBe(-4)
      
      // Test King negative value
      const kingValue = actions.calculateCardValue(Rank.KING)
      expect(kingValue).toBe(-2)
      
      // Test Ten as zero
      const tenValue = actions.calculateCardValue(Rank.TEN)
      expect(tenValue).toBe(0)
      
      // Verify negative values contribute correctly to total
      const testHand = [
        { rank: Rank.KING, value: -2 },
        { rank: Rank.JOKER, value: -4 },
        { rank: Rank.ACE, value: 1 },
        { rank: Rank.TWO, value: 2 }
      ]
      
      const totalScore = actions.calculateHandScore(testHand)
      expect(totalScore).toBe(-3) // -2 + (-4) + 1 + 2 = -3
    })

    it('should validate card scoring consistency', () => {
      const actions = hookResult.current.actions
      
      // Create a full deck and verify all cards have valid scores
      const fullDeck = actions.createFullDeck()
      
      fullDeck.forEach(card => {
        const score = actions.calculateCardValue(card.rank)
        expect(typeof score).toBe('number')
        expect(score).toBeGreaterThanOrEqual(-4) // Minimum (Joker)
        expect(score).toBeLessThanOrEqual(12) // Maximum (Queen)
      })
      
      // Verify specific counts
      const jokers = fullDeck.filter(card => card.rank === Rank.JOKER)
      expect(jokers.length).toBe(2) // 2 jokers in deck
      
      const kings = fullDeck.filter(card => card.rank === Rank.KING)
      expect(kings.length).toBe(4) // 4 kings in deck
    })

    it('should handle invalid card scoring gracefully', () => {
      const actions = hookResult.current.actions
      
      // Test with invalid/undefined rank
      const invalidScore = actions.calculateCardValue(undefined)
      expect(invalidScore).toBe(0) // Default fallback
      
      // Test with empty hand
      const emptyHandScore = actions.calculateHandScore([])
      expect(emptyHandScore).toBe(0)
      
      // Test with null hand
      const nullHandScore = actions.calculateHandScore(null)
      expect(nullHandScore).toBe(0)
    })
  })

  describe('Player Hand Scoring', () => {
    let hookResult: any

    beforeEach(() => {
      const { result } = renderHook(() => useGame(), { wrapper })
      hookResult = result

      act(() => {
        result.current.actions.startGame(3, ['Human', 'Bot1', 'Bot2'])
      })
    })

    it('should calculate total hand scores correctly', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Force specific hand for testing
      const testHand = [
        { rank: Rank.ACE, suit: Suit.HEARTS, value: 1 },
        { rank: Rank.FIVE, suit: Suit.SPADES, value: 5 },
        { rank: Rank.KING, suit: Suit.CLUBS, value: -2 },
        { rank: Rank.TEN, suit: Suit.DIAMONDS, value: 0 }
      ]
      
      act(() => {
        actions.forcePlayerHand(gameState.players[0].id, testHand)
      })
      
      const playerScore = actions.calculatePlayerScore(gameState.players[0].id)
      expect(playerScore.totalScore).toBe(4) // 1 + 5 + (-2) + 0 = 4
      expect(playerScore.cardScores).toHaveLength(4)
      expect(playerScore.cardScores[0].value).toBe(1)
      expect(playerScore.cardScores[2].value).toBe(-2)
    })

    it('should handle optimal and worst-case hand scenarios', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Best possible hand (most negative)
      const bestHand = [
        { rank: Rank.JOKER, suit: Suit.JOKER, value: -4 },
        { rank: Rank.JOKER, suit: Suit.JOKER, value: -4 },
        { rank: Rank.KING, suit: Suit.HEARTS, value: -2 },
        { rank: Rank.KING, suit: Suit.SPADES, value: -2 }
      ]
      
      act(() => {
        actions.forcePlayerHand(gameState.players[0].id, bestHand)
      })
      
      const bestScore = actions.calculatePlayerScore(gameState.players[0].id)
      expect(bestScore.totalScore).toBe(-12) // -4 + (-4) + (-2) + (-2) = -12
      
      // Worst possible hand (most positive)
      const worstHand = [
        { rank: Rank.QUEEN, suit: Suit.HEARTS, value: 12 },
        { rank: Rank.QUEEN, suit: Suit.SPADES, value: 12 },
        { rank: Rank.JACK, suit: Suit.CLUBS, value: 11 },
        { rank: Rank.JACK, suit: Suit.DIAMONDS, value: 11 }
      ]
      
      act(() => {
        actions.forcePlayerHand(gameState.players[1].id, worstHand)
      })
      
      const worstScore = actions.calculatePlayerScore(gameState.players[1].id)
      expect(worstScore.totalScore).toBe(46) // 12 + 12 + 11 + 11 = 46
    })

    it('should track individual card contributions to score', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      const mixedHand = [
        { rank: Rank.SEVEN, suit: Suit.HEARTS, value: 7 },
        { rank: Rank.KING, suit: Suit.SPADES, value: -2 },
        { rank: Rank.ACE, suit: Suit.CLUBS, value: 1 },
        { rank: Rank.JOKER, suit: Suit.JOKER, value: -4 }
      ]
      
      act(() => {
        actions.forcePlayerHand(gameState.players[0].id, mixedHand)
      })
      
      const detailedScore = actions.calculateDetailedPlayerScore(gameState.players[0].id)
      
      expect(detailedScore.totalScore).toBe(2) // 7 + (-2) + 1 + (-4) = 2
      expect(detailedScore.positiveContribution).toBe(8) // 7 + 1 = 8
      expect(detailedScore.negativeContribution).toBe(-6) // (-2) + (-4) = -6
      expect(detailedScore.neutralContribution).toBe(0) // No tens
      
      // Individual card breakdown
      expect(detailedScore.cardBreakdown).toHaveLength(4)
      expect(detailedScore.cardBreakdown[0].contribution).toBe(7)
      expect(detailedScore.cardBreakdown[1].contribution).toBe(-2)
    })

    it('should handle scoring with incomplete hands', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Simulate incomplete hand (edge case)
      const incompleteHand = [
        { rank: Rank.FIVE, suit: Suit.HEARTS, value: 5 },
        { rank: Rank.TWO, suit: Suit.SPADES, value: 2 }
        // Missing 2 cards
      ]
      
      act(() => {
        actions.forcePlayerHand(gameState.players[0].id, incompleteHand)
      })
      
      const score = actions.calculatePlayerScore(gameState.players[0].id)
      
      // Should handle gracefully with penalty or error indication
      expect(score.isComplete).toBe(false)
      expect(score.totalScore).toBeDefined()
      expect(score.penalty).toBeDefined() // Penalty for incomplete hand
    })
  })

  describe('Round Winner Determination', () => {
    let hookResult: any

    beforeEach(() => {
      const { result } = renderHook(() => useGame(), { wrapper })
      hookResult = result

      act(() => {
        result.current.actions.startGame(4, ['Human', 'Bot1', 'Bot2', 'Bot3'])
      })
    })

    it('should determine round winner correctly (lowest score wins)', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Set up specific scores for testing
      const playerHands = [
        { playerId: gameState.players[0].id, score: 15 }, // Human
        { playerId: gameState.players[1].id, score: 8 },  // Bot1 (winner)
        { playerId: gameState.players[2].id, score: 12 }, // Bot2
        { playerId: gameState.players[3].id, score: 20 }  // Bot3
      ]
      
      playerHands.forEach(({ playerId, score }) => {
        act(() => {
          actions.forcePlayerScore(playerId, score)
        })
      })
      
      act(() => {
        actions.forceRoundEnd()
      })
      
      const roundResult = actions.calculateRoundWinner()
      
      expect(roundResult.winnerId).toBe(gameState.players[1].id) // Bot1
      expect(roundResult.winningScore).toBe(8)
      expect(roundResult.margin).toBe(4) // 12 - 8 = 4 (difference to second place)
    })

    it('should handle tie-breaking scenarios', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Create a tie scenario
      const tiedScores = [
        { playerId: gameState.players[0].id, score: 10 },
        { playerId: gameState.players[1].id, score: 10 }, // Tied for first
        { playerId: gameState.players[2].id, score: 15 },
        { playerId: gameState.players[3].id, score: 18 }
      ]
      
      tiedScores.forEach(({ playerId, score }) => {
        act(() => {
          actions.forcePlayerScore(playerId, score)
        })
      })
      
      act(() => {
        actions.forceRoundEnd()
      })
      
      const roundResult = actions.calculateRoundWinner()
      
      expect(roundResult.isTie).toBe(true)
      expect(roundResult.tiedPlayers).toHaveLength(2)
      expect(roundResult.tiedPlayers).toContain(gameState.players[0].id)
      expect(roundResult.tiedPlayers).toContain(gameState.players[1].id)
      expect(roundResult.tieBreakingMethod).toBeDefined()
    })

    it('should apply tie-breaking rules consistently', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Set up tie with different card compositions
      act(() => {
        actions.forcePlayerDetailedScore(gameState.players[0].id, {
          totalScore: 5,
          cardBreakdown: [
            { rank: Rank.ACE, value: 1 },
            { rank: Rank.TWO, value: 2 },
            { rank: Rank.TEN, value: 0 },
            { rank: Rank.TWO, value: 2 }
          ]
        })
      })
      
      act(() => {
        actions.forcePlayerDetailedScore(gameState.players[1].id, {
          totalScore: 5,
          cardBreakdown: [
            { rank: Rank.KING, value: -2 },
            { rank: Rank.SEVEN, value: 7 },
            { rank: Rank.TEN, value: 0 },
            { rank: Rank.TEN, value: 0 }
          ]
        })
      })
      
      act(() => {
        actions.forceRoundEnd()
      })
      
      const tieBreaker = actions.resolveTieBreaking()
      
      // Tie-breaking rules (example: fewer high-value cards wins)
      expect(tieBreaker.method).toBeDefined()
      expect(tieBreaker.winner).toBeDefined()
      expect(tieBreaker.reasoning).toBeDefined()
    })

    it('should track round win statistics', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Player 0 wins this round
      act(() => {
        actions.forcePlayerScore(gameState.players[0].id, 3)  // Winner
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
      
      // Check round win tracking
      expect(gameState.players[0].roundWins).toBe(1)
      expect(gameState.players[1].roundWins).toBe(0)
      expect(gameState.players[2].roundWins).toBe(0)
      expect(gameState.players[3].roundWins).toBe(0)
      
      // Check match progression
      expect(gameState.match.currentRound).toBe(2) // Should advance to round 2
    })
  })

  describe('Score Display and Formatting', () => {
    let hookResult: any

    beforeEach(() => {
      const { result } = renderHook(() => useGame(), { wrapper })
      hookResult = result

      act(() => {
        result.current.actions.startGame(3, ['Human', 'Bot1', 'Bot2'])
      })
    })

    it('should format scores for display correctly', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Set up various score scenarios
      const scores = [
        { playerId: gameState.players[0].id, score: -5 },  // Negative (good)
        { playerId: gameState.players[1].id, score: 0 },   // Zero
        { playerId: gameState.players[2].id, score: 23 }   // Positive (bad)
      ]
      
      scores.forEach(({ playerId, score }) => {
        act(() => {
          actions.forcePlayerScore(playerId, score)
        })
      })
      
      const displayData = actions.getScoreDisplayData()
      
      expect(displayData.players).toHaveLength(3)
      
      // Check formatting
      const negativePlayer = displayData.players.find(p => p.score === -5)
      expect(negativePlayer.displayScore).toBe('-5')
      expect(negativePlayer.isGoodScore).toBe(true)
      
      const zeroPlayer = displayData.players.find(p => p.score === 0)
      expect(zeroPlayer.displayScore).toBe('0')
      expect(zeroPlayer.isGoodScore).toBe(true)
      
      const positivePlayer = displayData.players.find(p => p.score === 23)
      expect(positivePlayer.displayScore).toBe('23')
      expect(positivePlayer.isGoodScore).toBe(false)
    })

    it('should provide detailed score breakdowns for UI', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      const testHand = [
        { rank: Rank.ACE, suit: Suit.HEARTS, value: 1 },
        { rank: Rank.KING, suit: Suit.SPADES, value: -2 },
        { rank: Rank.QUEEN, suit: Suit.CLUBS, value: 12 },
        { rank: Rank.TEN, suit: Suit.DIAMONDS, value: 0 }
      ]
      
      act(() => {
        actions.forcePlayerHand(gameState.players[0].id, testHand)
      })
      
      const breakdown = actions.getScoreBreakdownForDisplay(gameState.players[0].id)
      
      expect(breakdown.totalScore).toBe(11) // 1 + (-2) + 12 + 0 = 11
      expect(breakdown.cards).toHaveLength(4)
      
      // Each card should have display information
      breakdown.cards.forEach(card => {
        expect(card.rank).toBeDefined()
        expect(card.suit).toBeDefined()
        expect(card.value).toBeDefined()
        expect(card.displayName).toBeDefined()
        expect(card.contribution).toBeDefined()
      })
      
      // Should categorize contributions
      expect(breakdown.positiveCards).toBeGreaterThan(0)
      expect(breakdown.negativeCards).toBeGreaterThan(0)
      expect(breakdown.neutralCards).toBeGreaterThan(0)
    })

    it('should sort players by score for leaderboard display', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Set up unsorted scores
      act(() => {
        actions.forcePlayerScore(gameState.players[0].id, 15) // 3rd place
        actions.forcePlayerScore(gameState.players[1].id, 5)  // 1st place (lowest)
        actions.forcePlayerScore(gameState.players[2].id, 10) // 2nd place
      })
      
      const leaderboard = actions.getScoreLeaderboard()
      
      expect(leaderboard).toHaveLength(3)
      
      // Should be sorted by score (lowest first)
      expect(leaderboard[0].playerId).toBe(gameState.players[1].id) // Score: 5
      expect(leaderboard[0].rank).toBe(1)
      expect(leaderboard[1].playerId).toBe(gameState.players[2].id) // Score: 10
      expect(leaderboard[1].rank).toBe(2)
      expect(leaderboard[2].playerId).toBe(gameState.players[0].id) // Score: 15
      expect(leaderboard[2].rank).toBe(3)
      
      // Should include score differences
      expect(leaderboard[1].behindLeader).toBe(5) // 10 - 5 = 5
      expect(leaderboard[2].behindLeader).toBe(10) // 15 - 5 = 10
    })

    it('should handle score animations and transitions', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Set up scoring animation
      act(() => {
        actions.beginScoreReveal()
      })
      
      const animationData = actions.getScoreAnimationData()
      
      expect(animationData.revealOrder).toBeDefined()
      expect(animationData.cardRevealTimings).toBeDefined()
      expect(animationData.totalDuration).toBeGreaterThan(0)
      
      // Should reveal cards in sequence
      expect(animationData.revealOrder).toHaveLength(gameState.players.length * 4) // All cards
      
      // Should have dramatic pauses for good/bad scores
      const dramaticPauses = animationData.revealOrder.filter(reveal => reveal.dramaticPause)
      expect(dramaticPauses.length).toBeGreaterThan(0)
    })
  })

  describe('Scoring System Performance and Edge Cases', () => {
    let hookResult: any

    beforeEach(() => {
      const { result } = renderHook(() => useGame(), { wrapper })
      hookResult = result

      act(() => {
        result.current.actions.startGame(4, ['Human', 'Bot1', 'Bot2', 'Bot3'])
      })
    })

    it('should handle scoring performance under load', () => {
      const actions = hookResult.current.actions
      
      // Performance test: calculate many scores rapidly
      const startTime = Date.now()
      
      for (let i = 0; i < 1000; i++) {
        // Generate random hands and calculate scores
        const randomHand = actions.generateRandomHand()
        const score = actions.calculateHandScore(randomHand)
        expect(typeof score).toBe('number')
      }
      
      const endTime = Date.now()
      const duration = endTime - startTime
      
      // Should complete within reasonable time
      expect(duration).toBeLessThan(2000) // 2 seconds for 1000 calculations
    })

    it('should validate scoring mathematical accuracy', () => {
      const actions = hookResult.current.actions
      
      // Test mathematical properties
      const testCases = [
        {
          hand: [
            { rank: Rank.FIVE, value: 5 },
            { rank: Rank.THREE, value: 3 },
            { rank: Rank.TWO, value: 2 },
            { rank: Rank.ONE, value: 1 }
          ],
          expected: 11
        },
        {
          hand: [
            { rank: Rank.KING, value: -2 },
            { rank: Rank.KING, value: -2 },
            { rank: Rank.JOKER, value: -4 },
            { rank: Rank.TEN, value: 0 }
          ],
          expected: -8
        }
      ]
      
      testCases.forEach(({ hand, expected }) => {
        const calculated = actions.calculateHandScore(hand)
        expect(calculated).toBe(expected)
      })
      
      // Test commutative property (order shouldn't matter)
      const hand1 = [
        { rank: Rank.ACE, value: 1 },
        { rank: Rank.FIVE, value: 5 },
        { rank: Rank.KING, value: -2 },
        { rank: Rank.TEN, value: 0 }
      ]
      
      const hand2 = [
        { rank: Rank.KING, value: -2 },
        { rank: Rank.TEN, value: 0 },
        { rank: Rank.ACE, value: 1 },
        { rank: Rank.FIVE, value: 5 }
      ]
      
      expect(actions.calculateHandScore(hand1)).toBe(actions.calculateHandScore(hand2))
    })

    it('should handle corrupted scoring data gracefully', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Corrupt player hand data
      act(() => {
        actions.corruptPlayerHand(gameState.players[0].id)
      })
      
      // Should handle scoring gracefully
      expect(() => {
        const score = actions.calculatePlayerScore(gameState.players[0].id)
        expect(score.error).toBeDefined()
        expect(score.recovered).toBeDefined()
      }).not.toThrow()
      
      // Should attempt data recovery
      const recovery = actions.attemptScoringDataRecovery()
      expect(recovery.attempted).toBe(true)
    })

    it('should maintain scoring consistency across game sessions', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Set up consistent test hand
      const consistentHand = [
        { rank: Rank.SEVEN, suit: Suit.HEARTS, value: 7 },
        { rank: Rank.KING, suit: Suit.SPADES, value: -2 },
        { rank: Rank.ACE, suit: Suit.CLUBS, value: 1 },
        { rank: Rank.TEN, suit: Suit.DIAMONDS, value: 0 }
      ]
      
      // Calculate score multiple times
      const scores = []
      for (let i = 0; i < 10; i++) {
        scores.push(actions.calculateHandScore(consistentHand))
      }
      
      // All scores should be identical
      expect(scores.every(score => score === scores[0])).toBe(true)
      expect(scores[0]).toBe(6) // 7 + (-2) + 1 + 0 = 6
    })

    it('should handle extreme score scenarios', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Test absolute minimum possible score
      const minHand = [
        { rank: Rank.JOKER, value: -4 },
        { rank: Rank.JOKER, value: -4 },
        { rank: Rank.KING, value: -2 },
        { rank: Rank.KING, value: -2 }
      ]
      
      const minScore = actions.calculateHandScore(minHand)
      expect(minScore).toBe(-12)
      
      // Test absolute maximum possible score
      const maxHand = [
        { rank: Rank.QUEEN, value: 12 },
        { rank: Rank.QUEEN, value: 12 },
        { rank: Rank.QUEEN, value: 12 },
        { rank: Rank.QUEEN, value: 12 }
      ]
      
      const maxScore = actions.calculateHandScore(maxHand)
      expect(maxScore).toBe(48)
      
      // Verify range validation
      expect(actions.isValidScoreRange(minScore)).toBe(true)
      expect(actions.isValidScoreRange(maxScore)).toBe(true)
      expect(actions.isValidScoreRange(-50)).toBe(false) // Below minimum
      expect(actions.isValidScoreRange(100)).toBe(false) // Above maximum
    })

    it('should provide scoring statistics and analytics', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Generate diverse scoring scenarios
      const scoringScenarios = [
        { playerId: gameState.players[0].id, score: -5 },
        { playerId: gameState.players[1].id, score: 8 },
        { playerId: gameState.players[2].id, score: 15 },
        { playerId: gameState.players[3].id, score: 0 }
      ]
      
      scoringScenarios.forEach(({ playerId, score }) => {
        act(() => {
          actions.forcePlayerScore(playerId, score)
        })
      })
      
      const statistics = actions.getScoringStatistics()
      
      expect(statistics.averageScore).toBe(4.5) // (-5 + 8 + 15 + 0) / 4 = 4.5
      expect(statistics.medianScore).toBe(4) // Middle values: 0, 8
      expect(statistics.scoreRange).toBe(20) // 15 - (-5) = 20
      expect(statistics.standardDeviation).toBeGreaterThan(0)
      
      // Distribution analysis
      expect(statistics.scoresBelow0).toBe(1) // Player 0
      expect(statistics.scoresAt0).toBe(1) // Player 3
      expect(statistics.scoresAbove0).toBe(2) // Players 1, 2
    })
  })
})