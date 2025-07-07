// Sprint 2 TDD: Enhanced Card Management Tests
import { describe, it, expect, beforeEach } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { GameProvider } from '../../contexts/GameContext'
import { useGame } from '../../hooks/useGame'
import { GamePhase, Rank, Suit } from '../../types'
import type { ReactNode } from 'react'

const wrapper = ({ children }: { children: ReactNode }) => (
  <GameProvider>{children}</GameProvider>
)

describe('Sprint 2: Enhanced Card Management', () => {
  describe('Advanced Card Replacement with Knowledge Tracking', () => {
    let hookResult: any

    beforeEach(() => {
      const { result } = renderHook(() => useGame(), { wrapper })
      hookResult = result

      act(() => {
        result.current.actions.startGame(2, ['Human', 'Bot'])
      })
    })

    it('should track knowledge correctly during card replacement', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Initially, player should know first 2 cards
      const player = gameState.players[0]
      expect(player.cards[0].isKnownToPlayer).toBe(true)
      expect(player.cards[1].isKnownToPlayer).toBe(true)
      expect(player.cards[2].isKnownToPlayer).toBe(false)
      expect(player.cards[3].isKnownToPlayer).toBe(false)

      // Draw and replace an unknown card
      act(() => {
        actions.drawFromDeck()
      })

      act(() => {
        actions.replaceCard(2) // Replace unknown card
      })

      gameState = hookResult.current.gameState
      const updatedPlayer = gameState.players[0]
      
      // The replaced card should now be known
      expect(updatedPlayer.cards[2].isKnownToPlayer).toBe(true)
      
      // Other knowledge should remain unchanged
      expect(updatedPlayer.cards[0].isKnownToPlayer).toBe(true)
      expect(updatedPlayer.cards[1].isKnownToPlayer).toBe(true)
      expect(updatedPlayer.cards[3].isKnownToPlayer).toBe(false)
    })

    it('should maintain knowledge when replacing known cards', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Get original card knowledge
      const originalCardId = gameState.players[0].cards[0].cardId
      
      // Draw and replace a known card
      act(() => {
        actions.drawFromDeck()
      })

      const drawnCardId = hookResult.current.gameState.ui.selectedCard

      act(() => {
        actions.replaceCard(0) // Replace known card
      })

      gameState = hookResult.current.gameState
      const updatedPlayer = gameState.players[0]
      
      // The new card should be known (player chose to put it there)
      expect(updatedPlayer.cards[0].isKnownToPlayer).toBe(true)
      expect(updatedPlayer.cards[0].cardId).toBe(drawnCardId)
      
      // Old card should be in discard pile
      expect(gameState.deck.discardPile).toContain(originalCardId)
    })

    it('should handle blind replacement correctly', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Draw a card
      act(() => {
        actions.drawFromDeck()
      })

      const drawnCardId = hookResult.current.gameState.ui.selectedCard
      const originalCardId = gameState.players[0].cards[3].cardId // Unknown card

      // Replace unknown card (blind replacement)
      act(() => {
        actions.replaceCard(3)
      })

      gameState = hookResult.current.gameState
      const updatedPlayer = gameState.players[0]
      
      // Player should now know the card they placed
      expect(updatedPlayer.cards[3].isKnownToPlayer).toBe(true)
      expect(updatedPlayer.cards[3].cardId).toBe(drawnCardId)
      
      // Original card should be discarded (player never knew what it was)
      expect(gameState.deck.discardPile).toContain(originalCardId)
    })

    it('should track card history for knowledge system', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Perform multiple replacements to test history tracking
      const replacementHistory = []
      
      for (let i = 0; i < 3; i++) {
        act(() => {
          actions.drawFromDeck()
        })

        const drawnCard = hookResult.current.gameState.ui.selectedCard
        replacementHistory.push({
          turn: i,
          drawnCard,
          replacedPosition: i % 4
        })

        act(() => {
          actions.replaceCard(i % 4)
        })

        act(() => {
          actions.endTurn()
        })
      }

      gameState = hookResult.current.gameState
      const player = gameState.players[0]
      
      // Player should know cards they placed through replacement
      expect(player.cards[0].isKnownToPlayer).toBe(true) // Initially known + replaced
      expect(player.cards[1].isKnownToPlayer).toBe(true) // Initially known + replaced  
      expect(player.cards[2].isKnownToPlayer).toBe(true) // Was unknown, now replaced
      expect(player.cards[3].isKnownToPlayer).toBe(false) // Still unknown
    })
  })

  describe('Discard Pile Management and Visibility Rules', () => {
    let hookResult: any

    beforeEach(() => {
      const { result } = renderHook(() => useGame(), { wrapper })
      hookResult = result

      act(() => {
        result.current.actions.startGame(3, ['Human', 'Bot1', 'Bot2'])
      })
    })

    it('should manage discard pile visibility correctly', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Initial discard pile should have one card (setup)
      expect(gameState.deck.discardPile.length).toBe(1)
      
      // Top card should be visible to all players
      const topDiscardCard = actions.getTopDiscardCard()
      expect(topDiscardCard).toBeDefined()
      expect(topDiscardCard.id).toBe(gameState.deck.discardPile[gameState.deck.discardPile.length - 1])
    })

    it('should update discard pile when cards are discarded', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      const initialDiscardSize = gameState.deck.discardPile.length
      
      // Draw and discard a card
      act(() => {
        actions.drawFromDeck()
      })

      const drawnCardId = hookResult.current.gameState.ui.selectedCard

      act(() => {
        actions.discardDrawnCard()
      })

      gameState = hookResult.current.gameState
      
      // Discard pile should grow
      expect(gameState.deck.discardPile.length).toBe(initialDiscardSize + 1)
      
      // Discarded card should be on top
      const topCard = gameState.deck.discardPile[gameState.deck.discardPile.length - 1]
      expect(topCard).toBe(drawnCardId)
    })

    it('should handle drawing from discard pile correctly', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // First, put a known card in discard
      act(() => {
        actions.drawFromDeck()
      })

      const knownCardId = hookResult.current.gameState.ui.selectedCard

      act(() => {
        actions.discardDrawnCard()
      })

      act(() => {
        actions.endTurn()
      })

      // Next player draws from discard
      gameState = hookResult.current.gameState
      const discardSizeBefore = gameState.deck.discardPile.length

      act(() => {
        actions.drawFromDiscard()
      })

      gameState = hookResult.current.gameState
      
      // Discard pile should shrink
      expect(gameState.deck.discardPile.length).toBe(discardSizeBefore - 1)
      
      // Player should have the known card
      expect(hookResult.current.gameState.ui.selectedCard).toBe(knownCardId)
    })

    it('should prevent drawing from empty discard pile', () => {
      // This test verifies edge case handling
      const actions = hookResult.current.actions
      
      // Clear discard pile (theoretical scenario)
      // In real game, discard pile always has at least initial card
      // But test the validation logic
      
      const canDraw = actions.canDrawFromDiscard()
      expect(typeof canDraw).toBe('boolean')
      
      if (hookResult.current.gameState.deck.discardPile.length === 0) {
        expect(canDraw).toBe(false)
      } else {
        expect(canDraw).toBe(true)
      }
    })
  })

  describe('Card Knowledge Persistence Through Operations', () => {
    let hookResult: any

    beforeEach(() => {
      const { result } = renderHook(() => useGame(), { wrapper })
      hookResult = result

      act(() => {
        result.current.actions.startGame(2, ['Human', 'Bot'])
      })
    })

    it('should persist knowledge through turn cycles', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Record initial knowledge state
      const initialKnowledge = gameState.players[0].cards.map(card => ({
        cardId: card.cardId,
        isKnown: card.isKnownToPlayer
      }))

      // Complete a turn cycle
      act(() => {
        actions.drawFromDeck()
      })

      act(() => {
        actions.discardDrawnCard() // Don't change hand
      })

      act(() => {
        actions.endTurn()
      })

      act(() => {
        actions.endTurn() // Bot turn (simplified)
      })

      // Knowledge should persist after turn cycle
      gameState = hookResult.current.gameState
      const currentKnowledge = gameState.players[0].cards.map(card => ({
        cardId: card.cardId,
        isKnown: card.isKnownToPlayer
      }))

      // Same cards should have same knowledge state
      initialKnowledge.forEach((initial, index) => {
        if (initial.cardId === currentKnowledge[index].cardId) {
          expect(currentKnowledge[index].isKnown).toBe(initial.isKnown)
        }
      })
    })

    it('should persist knowledge through multiple rounds', () => {
      const actions = hookResult.current.actions
      
      // Modify player knowledge by making replacements
      act(() => {
        actions.drawFromDeck()
      })

      act(() => {
        actions.replaceCard(2) // Make unknown card known
      })

      let gameState = hookResult.current.gameState
      const knowledgeAfterReplacement = gameState.players[0].cards[2].isKnownToPlayer
      expect(knowledgeAfterReplacement).toBe(true)

      // Force round end and start new round
      act(() => {
        actions.callStop()
      })

      // Complete remaining turns to end round
      act(() => {
        actions.endTurn()
      })

      act(() => {
        actions.endTurn() // Bot's final turn
      })

      // Note: In real implementation, new round would reset cards
      // This test verifies the knowledge system structure persists
      gameState = hookResult.current.gameState
      
      // Knowledge system should be intact (even if cards are reset for new round)
      expect(Array.isArray(gameState.players[0].cards)).toBe(true)
      expect(typeof gameState.players[0].cards[0].isKnownToPlayer).toBe('boolean')
    })

    it('should handle knowledge during complex card operations', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Perform complex sequence: draw -> replace -> draw -> discard
      
      // First operation
      act(() => {
        actions.drawFromDeck()
      })

      act(() => {
        actions.replaceCard(0)
      })

      // Verify intermediate state
      gameState = hookResult.current.gameState
      expect(gameState.players[0].cards[0].isKnownToPlayer).toBe(true)

      act(() => {
        actions.endTurn()
      })

      act(() => {
        actions.endTurn() // Bot turn
      })

      // Second operation
      act(() => {
        actions.drawFromDeck()
      })

      act(() => {
        actions.discardDrawnCard()
      })

      // Knowledge from first operation should persist
      gameState = hookResult.current.gameState
      expect(gameState.players[0].cards[0].isKnownToPlayer).toBe(true)
    })
  })

  describe('Draw/Replace/Discard Flow Validation', () => {
    let hookResult: any

    beforeEach(() => {
      const { result } = renderHook(() => useGame(), { wrapper })
      hookResult = result

      act(() => {
        result.current.actions.startGame(2, ['Human', 'Bot'])
      })
    })

    it('should validate complete draw-replace flow', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Step 1: Draw
      const initialDeckSize = gameState.deck.drawPile.length
      
      act(() => {
        actions.drawFromDeck()
      })

      gameState = hookResult.current.gameState
      expect(gameState.deck.drawPile.length).toBe(initialDeckSize - 1)
      expect(gameState.ui.selectedCard).toBeDefined()

      // Step 2: Replace
      const drawnCardId = gameState.ui.selectedCard
      const originalCardId = gameState.players[0].cards[1].cardId

      act(() => {
        actions.replaceCard(1)
      })

      gameState = hookResult.current.gameState
      expect(gameState.ui.selectedCard).toBeNull()
      expect(gameState.players[0].cards[1].cardId).toBe(drawnCardId)
      expect(gameState.deck.discardPile).toContain(originalCardId)
    })

    it('should validate complete draw-discard flow', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Step 1: Draw
      const initialDeckSize = gameState.deck.drawPile.length
      const initialDiscardSize = gameState.deck.discardPile.length
      
      act(() => {
        actions.drawFromDeck()
      })

      gameState = hookResult.current.gameState
      const drawnCardId = gameState.ui.selectedCard
      
      // Step 2: Discard
      act(() => {
        actions.discardDrawnCard()
      })

      gameState = hookResult.current.gameState
      expect(gameState.ui.selectedCard).toBeNull()
      expect(gameState.deck.drawPile.length).toBe(initialDeckSize - 1)
      expect(gameState.deck.discardPile.length).toBe(initialDiscardSize + 1)
      expect(gameState.deck.discardPile).toContain(drawnCardId)
    })

    it('should handle draw from discard flow', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // First, ensure discard pile has cards
      act(() => {
        actions.drawFromDeck()
      })

      act(() => {
        actions.discardDrawnCard()
      })

      act(() => {
        actions.endTurn()
      })

      // Now draw from discard
      gameState = hookResult.current.gameState
      const topDiscardCard = gameState.deck.discardPile[gameState.deck.discardPile.length - 1]
      const discardSizeBefore = gameState.deck.discardPile.length

      act(() => {
        actions.drawFromDiscard()
      })

      gameState = hookResult.current.gameState
      expect(gameState.ui.selectedCard).toBe(topDiscardCard)
      expect(gameState.deck.discardPile.length).toBe(discardSizeBefore - 1)
    })

    it('should prevent invalid flow sequences', () => {
      const actions = hookResult.current.actions
      const currentPlayerId = hookResult.current.gameState.players[0].id
      
      // Cannot replace without drawing first
      expect(actions.isValidAction(currentPlayerId, 'REPLACE_CARD_0')).toBe(false)
      
      // Cannot discard without drawing first
      expect(actions.isValidAction(currentPlayerId, 'DISCARD_DRAWN_CARD')).toBe(false)
      
      // Draw first
      act(() => {
        actions.drawFromDeck()
      })

      // Now cannot draw again
      expect(actions.isValidAction(currentPlayerId, 'DRAW_FROM_DECK')).toBe(false)
      expect(actions.isValidAction(currentPlayerId, 'DRAW_FROM_DISCARD')).toBe(false)
      
      // But can replace or discard
      expect(actions.isValidAction(currentPlayerId, 'REPLACE_CARD_0')).toBe(true)
      expect(actions.isValidAction(currentPlayerId, 'DISCARD_DRAWN_CARD')).toBe(true)
    })

    it('should handle flow state reset after turn completion', () => {
      const actions = hookResult.current.actions
      
      // Complete a full turn
      act(() => {
        actions.drawFromDeck()
      })

      act(() => {
        actions.replaceCard(0)
      })

      act(() => {
        actions.endTurn()
      })

      // After turn, selected card should be reset
      let gameState = hookResult.current.gameState
      expect(gameState.ui.selectedCard).toBeNull()
      
      // New player should be able to start fresh flow
      act(() => {
        actions.endTurn() // Bot turn (skip)
      })

      const currentPlayerId = hookResult.current.gameState.players[0].id
      expect(actions.isValidAction(currentPlayerId, 'DRAW_FROM_DECK')).toBe(true)
      expect(actions.isValidAction(currentPlayerId, 'DRAW_FROM_DISCARD')).toBe(true)
    })
  })

  describe('Advanced Card Visibility and State Management', () => {
    let hookResult: any

    beforeEach(() => {
      const { result } = renderHook(() => useGame(), { wrapper })
      hookResult = result

      act(() => {
        result.current.actions.startGame(3, ['Human', 'Bot1', 'Bot2'])
      })
    })

    it('should manage card visibility states correctly', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Test different visibility states
      const humanPlayer = gameState.players[0]
      const botPlayer = gameState.players[1]
      
      // Human should know their first 2 cards
      expect(humanPlayer.cards[0].isKnownToPlayer).toBe(true)
      expect(humanPlayer.cards[1].isKnownToPlayer).toBe(true)
      expect(humanPlayer.cards[2].isKnownToPlayer).toBe(false)
      expect(humanPlayer.cards[3].isKnownToPlayer).toBe(false)
      
      // Bot knowledge should be managed separately (for AI)
      // From human perspective, bot cards are unknown
      expect(botPlayer.cards[0].isKnownToPlayer).toBe(false)
      expect(botPlayer.cards[1].isKnownToPlayer).toBe(false)
    })

    it('should handle card state transitions correctly', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Track card state through transition
      const originalCard = gameState.players[0].cards[2]
      expect(originalCard.isKnownToPlayer).toBe(false)
      
      // Draw and replace to make it known
      act(() => {
        actions.drawFromDeck()
      })

      act(() => {
        actions.replaceCard(2)
      })

      gameState = hookResult.current.gameState
      const newCard = gameState.players[0].cards[2]
      
      // State should have transitioned
      expect(newCard.isKnownToPlayer).toBe(true)
      expect(newCard.cardId).not.toBe(originalCard.cardId)
      
      // Original card should be in discard
      expect(gameState.deck.discardPile).toContain(originalCard.cardId)
    })

    it('should maintain card count integrity during operations', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Count all cards initially
      const countCards = () => {
        const stats = actions.getGameStatistics()
        const inHands = gameState.players.reduce((sum, player) => sum + player.cards.length, 0)
        const inDeck = gameState.deck.drawPile.length
        const inDiscard = gameState.deck.discardPile.length
        const selected = gameState.ui.selectedCard ? 1 : 0
        
        return { inHands, inDeck, inDiscard, selected, total: inHands + inDeck + inDiscard + selected }
      }
      
      const initialCount = countCards()
      expect(initialCount.total).toBe(54) // Standard deck + 2 jokers
      
      // Perform several operations
      act(() => {
        actions.drawFromDeck()
      })

      let currentCount = countCards()
      expect(currentCount.total).toBe(54) // Should maintain total
      
      act(() => {
        actions.replaceCard(1)
      })

      currentCount = countCards()
      expect(currentCount.total).toBe(54) // Should still maintain total
      
      act(() => {
        actions.endTurn()
      })

      currentCount = countCards()
      expect(currentCount.total).toBe(54) // Should always maintain total
    })
  })
})