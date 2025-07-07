// Sprint 2 TDD: Jack Swap Ability Tests
import { describe, it, expect, beforeEach } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { GameProvider } from '../../contexts/GameContext'
import { useGame } from '../../hooks/useGame'
import { Rank } from '../../types'
import type { ReactNode } from 'react'

const wrapper = ({ children }: { children: ReactNode }) => (
  <GameProvider>{children}</GameProvider>
)

describe('Sprint 2: Jack Swap Ability', () => {
  describe('Jack Card Detection and Ability Triggering', () => {
    let hookResult: any

    beforeEach(() => {
      const { result } = renderHook(() => useGame(), { wrapper })
      hookResult = result

      act(() => {
        result.current.actions.startGame(3, ['Human', 'Bot1', 'Bot2'])
      })
    })

    it('should detect Jack cards and trigger swap ability', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Find Jack cards in the deck
      const jackCards = Object.values(gameState.cards).filter(card => card.rank === Rank.JACK)
      expect(jackCards.length).toBe(4) // 4 Jacks in deck
      
      // Simulate drawing a Jack from deck
      const jackCard = jackCards[0]
      
      act(() => {
        actions.forceDrawCard(jackCard.id)
      })
      
      gameState = hookResult.current.gameState
      
      // UI should show swap ability is available
      expect(actions.canUseSpecialAbility()).toBe(true)
      expect(actions.getSpecialAbilityType()).toBe('swap')
      
      // Should trigger swap modal or selection UI
      expect(gameState.ui.showingSwapAbility).toBe(true)
    })

    it('should only trigger swap ability when Jack is drawn from deck', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Place a Jack in discard pile
      const jackCard = Object.values(gameState.cards).find(card => card.rank === Rank.JACK)
      expect(jackCard).toBeDefined()
      
      act(() => {
        actions.forceCardToDiscard(jackCard!.id)
      })
      
      // Draw the Jack from discard
      act(() => {
        actions.drawFromDiscard()
      })
      
      gameState = hookResult.current.gameState
      
      // Swap ability should NOT be available (Jack from discard)
      expect(actions.canUseSpecialAbility()).toBe(false)
      expect(gameState.ui.showingSwapAbility).toBe(false)
    })

    it('should handle Jack swap ability during Queen peek sequences', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Give player a Jack card through replacement
      const jackCard = Object.values(gameState.cards).find(card => card.rank === Rank.JACK)
      expect(jackCard).toBeDefined()
      
      // Simulate replacing a card with Jack
      act(() => {
        actions.forceReplacePlayerCard(0, jackCard!.id)
      })
      
      gameState = hookResult.current.gameState
      
      // Jack from replacement should NOT trigger swap ability
      expect(actions.canUseSpecialAbility()).toBe(false)
      expect(gameState.ui.showingSwapAbility).toBe(false)
    })

    it('should validate Jack swap ability availability', () => {
      const actions = hookResult.current.actions
      
      // Initially no special ability
      expect(actions.canUseSpecialAbility()).toBe(false)
      
      // Draw a non-Jack card
      act(() => {
        actions.drawFromDeck()
      })
      
      let gameState = hookResult.current.gameState
      const drawnCard = gameState.cards[gameState.ui.selectedCard!]
      
      if (drawnCard.rank !== Rank.JACK) {
        expect(actions.canUseSpecialAbility()).toBe(false)
      } else {
        expect(actions.canUseSpecialAbility()).toBe(true)
      }
    })
  })

  describe('Swap Target Selection and Validation', () => {
    let hookResult: any

    beforeEach(() => {
      const { result } = renderHook(() => useGame(), { wrapper })
      hookResult = result

      act(() => {
        result.current.actions.startGame(4, ['Human', 'Bot1', 'Bot2', 'Bot3'])
      })
    })

    it('should allow swapping between any two cards', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Simulate having drawn a Jack
      act(() => {
        actions.forceDrawJack()
      })
      
      gameState = hookResult.current.gameState
      
      // Should be able to swap any card with any other card
      const humanPlayer = gameState.players[0]
      const botPlayer = gameState.players[1]
      
      // Human card with bot card
      expect(actions.canSwapCards(humanPlayer.id, 0, botPlayer.id, 0)).toBe(true)
      expect(actions.canSwapCards(humanPlayer.id, 3, botPlayer.id, 2)).toBe(true)
      
      // Bot card with another bot card
      expect(actions.canSwapCards(botPlayer.id, 1, gameState.players[2].id, 3)).toBe(true)
      
      // Human card with human card (own cards)
      expect(actions.canSwapCards(humanPlayer.id, 0, humanPlayer.id, 1)).toBe(true)
    })

    it('should validate swap target parameters', () => {
      const actions = hookResult.current.actions
      
      // Simulate having drawn a Jack
      act(() => {
        actions.forceDrawJack()
      })
      
      let gameState = hookResult.current.gameState
      const player1 = gameState.players[0]
      const player2 = gameState.players[1]
      
      // Valid parameters
      expect(actions.canSwapCards(player1.id, 0, player2.id, 0)).toBe(true)
      expect(actions.canSwapCards(player1.id, 3, player2.id, 3)).toBe(true)
      
      // Invalid parameters
      expect(actions.canSwapCards(player1.id, -1, player2.id, 0)).toBe(false)
      expect(actions.canSwapCards(player1.id, 0, player2.id, 4)).toBe(false)
      expect(actions.canSwapCards('invalid-player', 0, player2.id, 0)).toBe(false)
      expect(actions.canSwapCards(player1.id, 0, 'invalid-player', 0)).toBe(false)
      expect(actions.canSwapCards(player1.id, 999, player2.id, 0)).toBe(false)
    })

    it('should handle swap target selection UI', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Simulate having drawn a Jack
      act(() => {
        actions.forceDrawJack()
      })
      
      gameState = hookResult.current.gameState
      
      // UI should show swap target selection
      expect(gameState.ui.showingSwapTargetSelection).toBe(true)
      expect(gameState.ui.availableSwapTargets).toBeDefined()
      
      // Available targets should include all cards
      const availableTargets = gameState.ui.availableSwapTargets
      expect(availableTargets.length).toBe(16) // 4 players × 4 cards each
      
      // Each target should specify player and card index
      availableTargets.forEach(target => {
        expect(target.playerId).toBeDefined()
        expect(target.cardIndex).toBeGreaterThanOrEqual(0)
        expect(target.cardIndex).toBeLessThan(4)
      })
    })

    it('should handle two-step swap selection process', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Simulate having drawn a Jack
      act(() => {
        actions.forceDrawJack()
      })
      
      gameState = hookResult.current.gameState
      
      // First selection - choose first card
      act(() => {
        actions.selectSwapCard(gameState.players[0].id, 0)
      })
      
      gameState = hookResult.current.gameState
      
      // Should show second selection UI
      expect(gameState.ui.swapFirstSelection).toBeDefined()
      expect(gameState.ui.swapFirstSelection.playerId).toBe(gameState.players[0].id)
      expect(gameState.ui.swapFirstSelection.cardIndex).toBe(0)
      expect(gameState.ui.showingSwapSecondSelection).toBe(true)
      
      // Second selection - choose second card
      act(() => {
        actions.selectSwapCard(gameState.players[1].id, 2)
      })
      
      gameState = hookResult.current.gameState
      
      // Should execute the swap
      expect(gameState.ui.swapFirstSelection).toBeNull()
      expect(gameState.ui.showingSwapSecondSelection).toBe(false)
      expect(gameState.ui.lastSwapExecuted).toBeDefined()
    })
  })

  describe('Swap Execution and Card Exchange', () => {
    let hookResult: any

    beforeEach(() => {
      const { result } = renderHook(() => useGame(), { wrapper })
      hookResult = result

      act(() => {
        result.current.actions.startGame(2, ['Human', 'Bot'])
      })
    })

    it('should execute swap and exchange cards correctly', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Draw a Jack
      act(() => {
        actions.forceDrawJack()
      })
      
      const humanPlayer = gameState.players[0]
      const botPlayer = gameState.players[1]
      
      // Record original card IDs
      const humanOriginalCard = humanPlayer.cards[0]
      const botOriginalCard = botPlayer.cards[1]
      
      // Execute swap
      act(() => {
        actions.swapCards(humanPlayer.id, 0, botPlayer.id, 1)
      })
      
      gameState = hookResult.current.gameState
      const updatedHuman = gameState.players[0]
      const updatedBot = gameState.players[1]
      
      // Cards should be swapped
      expect(updatedHuman.cards[0].cardId).toBe(botOriginalCard.cardId)
      expect(updatedBot.cards[1].cardId).toBe(humanOriginalCard.cardId)
      
      // Other cards should remain unchanged
      expect(updatedHuman.cards[1].cardId).toBe(humanPlayer.cards[1].cardId)
      expect(updatedBot.cards[0].cardId).toBe(botPlayer.cards[0].cardId)
    })

    it('should handle knowledge transfer during swap', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Draw a Jack
      act(() => {
        actions.forceDrawJack()
      })
      
      const humanPlayer = gameState.players[0]
      const botPlayer = gameState.players[1]
      
      // Human knows their card 0, doesn't know card 2
      expect(humanPlayer.cards[0].isKnownToPlayer).toBe(true)
      expect(humanPlayer.cards[2].isKnownToPlayer).toBe(false)
      
      // Execute swap: human known card with human unknown card
      act(() => {
        actions.swapCards(humanPlayer.id, 0, humanPlayer.id, 2)
      })
      
      gameState = hookResult.current.gameState
      const updatedHuman = gameState.players[0]
      
      // Knowledge should transfer with the cards
      expect(updatedHuman.cards[0].isKnownToPlayer).toBe(false) // Unknown card moved here
      expect(updatedHuman.cards[2].isKnownToPlayer).toBe(true)  // Known card moved here
    })

    it('should handle swap between different players with knowledge tracking', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Draw a Jack
      act(() => {
        actions.forceDrawJack()
      })
      
      const humanPlayer = gameState.players[0]
      const botPlayer = gameState.players[1]
      
      // Human knows their card 1
      const humanKnownCard = humanPlayer.cards[1]
      expect(humanKnownCard.isKnownToPlayer).toBe(true)
      
      // Bot's card 0 (unknown to human)
      const botUnknownCard = botPlayer.cards[0]
      
      // Execute swap
      act(() => {
        actions.swapCards(humanPlayer.id, 1, botPlayer.id, 0)
      })
      
      gameState = hookResult.current.gameState
      const updatedHuman = gameState.players[0]
      const updatedBot = gameState.players[1]
      
      // Human should now have bot's card (unknown to human)
      expect(updatedHuman.cards[1].cardId).toBe(botUnknownCard.cardId)
      expect(updatedHuman.cards[1].isKnownToPlayer).toBe(false)
      
      // Bot should now have human's card (was known to human)
      expect(updatedBot.cards[0].cardId).toBe(humanKnownCard.cardId)
      // Note: Bot's knowledge system is separate, but swap should be tracked
    })

    it('should maintain swap history for knowledge system', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Draw a Jack
      act(() => {
        actions.forceDrawJack()
      })
      
      const humanPlayer = gameState.players[0]
      const botPlayer = gameState.players[1]
      
      // Execute swap
      act(() => {
        actions.swapCards(humanPlayer.id, 2, botPlayer.id, 3)
      })
      
      gameState = hookResult.current.gameState
      
      // Should record swap in history
      const swapHistory = actions.getSwapHistory()
      expect(swapHistory.length).toBe(1)
      
      const swap = swapHistory[0]
      expect(swap.player1Id).toBe(humanPlayer.id)
      expect(swap.player1CardIndex).toBe(2)
      expect(swap.player2Id).toBe(botPlayer.id)
      expect(swap.player2CardIndex).toBe(3)
      expect(swap.turnNumber).toBe(gameState.round.turnNumber)
    })

    it('should handle complex multi-step swap sequences', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Set up 3-player game for complex swaps
      const { result } = renderHook(() => useGame(), { wrapper })
      hookResult = result
      
      act(() => {
        result.current.actions.startGame(3, ['Human', 'Bot1', 'Bot2'])
      })
      
      gameState = hookResult.current.gameState
      
      // Record initial card positions
      const initialPositions = {
        human0: gameState.players[0].cards[0].cardId,
        human1: gameState.players[0].cards[1].cardId,
        bot1_0: gameState.players[1].cards[0].cardId,
        bot2_0: gameState.players[2].cards[0].cardId,
      }
      
      // Execute Jack swap
      act(() => {
        actions.forceDrawJack()
      })
      
      // Swap human card 0 with bot1 card 0
      act(() => {
        actions.swapCards(gameState.players[0].id, 0, gameState.players[1].id, 0)
      })
      
      // Complete turn
      act(() => {
        actions.replaceCard(1) // Use the Jack
      })
      
      act(() => {
        actions.endTurn()
      })
      
      // Bot1 turn - simulate another Jack swap
      act(() => {
        actions.forceBotDrawJack()
      })
      
      // Bot1 swaps with bot2
      act(() => {
        actions.forceBotSwap(gameState.players[1].id, 0, gameState.players[2].id, 0)
      })
      
      gameState = hookResult.current.gameState
      
      // Track the chain of swaps
      const finalPositions = {
        human0: gameState.players[0].cards[0].cardId,
        bot1_0: gameState.players[1].cards[0].cardId,
        bot2_0: gameState.players[2].cards[0].cardId,
      }
      
      // Human should have bot2's original card (through the chain)
      expect(finalPositions.human0).toBe(initialPositions.bot2_0)
      expect(finalPositions.bot1_0).toBe(initialPositions.bot1_0) // Bot1 got human's card, then swapped it away
      expect(finalPositions.bot2_0).toBe(initialPositions.human0) // Bot2 got human's card through the chain
    })
  })

  describe('Swap Ability Choice and Skipping', () => {
    let hookResult: any

    beforeEach(() => {
      const { result } = renderHook(() => useGame(), { wrapper })
      hookResult = result

      act(() => {
        result.current.actions.startGame(3, ['Human', 'Bot1', 'Bot2'])
      })
    })

    it('should allow player to skip swap ability', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Draw a Jack
      act(() => {
        actions.forceDrawJack()
      })
      
      gameState = hookResult.current.gameState
      const jackCardId = gameState.ui.selectedCard!
      
      // Skip the swap ability
      act(() => {
        actions.skipSpecialAbility(jackCardId)
      })
      
      gameState = hookResult.current.gameState
      
      // Swap UI should be closed
      expect(gameState.ui.showingSwapAbility).toBe(false)
      expect(gameState.ui.showingSwapTargetSelection).toBe(false)
      
      // Should proceed to normal card replacement/discard
      expect(actions.canReplaceCard(0)).toBe(true)
      expect(actions.canDiscardDrawnCard()).toBe(true)
    })

    it('should handle swap ability timeout', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Draw a Jack
      act(() => {
        actions.forceDrawJack()
      })
      
      gameState = hookResult.current.gameState
      
      // Wait for timeout (simulated)
      act(() => {
        actions.simulateSpecialAbilityTimeout()
      })
      
      gameState = hookResult.current.gameState
      
      // Should automatically skip swap ability
      expect(gameState.ui.showingSwapAbility).toBe(false)
      expect(actions.canReplaceCard(0)).toBe(true)
    })

    it('should validate swap ability usage restrictions', () => {
      const actions = hookResult.current.actions
      
      // Cannot use swap ability without drawing a Jack
      expect(actions.canUseSpecialAbility()).toBe(false)
      
      // Draw a non-Jack card
      act(() => {
        actions.drawFromDeck()
      })
      
      let gameState = hookResult.current.gameState
      const drawnCard = gameState.cards[gameState.ui.selectedCard!]
      
      if (drawnCard.rank !== Rank.JACK) {
        expect(actions.canUseSpecialAbility()).toBe(false)
      }
      
      // Replace the card and end turn
      act(() => {
        actions.replaceCard(0)
      })
      
      act(() => {
        actions.endTurn()
      })
      
      // Cannot use swap ability after turn ends
      expect(actions.canUseSpecialAbility()).toBe(false)
    })

    it('should handle partial swap selection cancellation', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Draw a Jack
      act(() => {
        actions.forceDrawJack()
      })
      
      // Select first card
      act(() => {
        actions.selectSwapCard(gameState.players[0].id, 0)
      })
      
      gameState = hookResult.current.gameState
      expect(gameState.ui.swapFirstSelection).toBeDefined()
      
      // Cancel swap selection
      act(() => {
        actions.cancelSwapSelection()
      })
      
      gameState = hookResult.current.gameState
      
      // Should reset swap selection
      expect(gameState.ui.swapFirstSelection).toBeNull()
      expect(gameState.ui.showingSwapSecondSelection).toBe(false)
      expect(gameState.ui.showingSwapTargetSelection).toBe(true) // Back to initial selection
    })

    it('should handle invalid swap selection sequences', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Draw a Jack
      act(() => {
        actions.forceDrawJack()
      })
      
      // Select first card
      act(() => {
        actions.selectSwapCard(gameState.players[0].id, 0)
      })
      
      // Try to select the same card again (invalid)
      act(() => {
        actions.selectSwapCard(gameState.players[0].id, 0)
      })
      
      gameState = hookResult.current.gameState
      
      // Should remain in second selection state
      expect(gameState.ui.swapFirstSelection).toBeDefined()
      expect(gameState.ui.showingSwapSecondSelection).toBe(true)
    })
  })

  describe('Swap Integration with Game Flow', () => {
    let hookResult: any

    beforeEach(() => {
      const { result } = renderHook(() => useGame(), { wrapper })
      hookResult = result

      act(() => {
        result.current.actions.startGame(2, ['Human', 'Bot'])
      })
    })

    it('should integrate swap into normal turn flow', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Normal turn sequence with swap
      act(() => {
        actions.forceDrawJack()
      })
      
      // Swap phase
      act(() => {
        actions.swapCards(gameState.players[0].id, 0, gameState.players[1].id, 0)
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

    it('should handle swap during stop-called rounds', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Call stop first
      act(() => {
        actions.callStop()
      })
      
      act(() => {
        actions.endTurn()
      })
      
      // Bot's turn - simulate bot drawing Jack
      act(() => {
        actions.forceBotDrawJack()
      })
      
      gameState = hookResult.current.gameState
      
      // Bot should be able to use swap ability even during stop-called round
      expect(actions.canBotUseSpecialAbility(gameState.players[1].id)).toBe(true)
      
      // Process bot swap
      act(() => {
        actions.processBotSwap()
      })
      
      // Round should continue normally
      expect(gameState.round.stopCalled).toBe(true)
      expect(gameState.round.remainingTurns).toBeGreaterThan(0)
    })

    it('should handle swap near end of deck', () => {
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
      
      // Draw a Jack near end of deck
      act(() => {
        actions.forceDrawJack()
      })
      
      gameState = hookResult.current.gameState
      
      // Swap should still work normally
      expect(actions.canUseSpecialAbility()).toBe(true)
      
      act(() => {
        actions.swapCards(gameState.players[0].id, 0, gameState.players[1].id, 0)
      })
      
      // Should complete normally even with low deck count
      act(() => {
        actions.replaceCard(0)
      })
      
      gameState = hookResult.current.gameState
      expect(gameState.deck.drawPile.length).toBeGreaterThanOrEqual(0)
    })

    it('should handle swap during round transitions', () => {
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
      
      // Last turn - draw Jack
      act(() => {
        actions.forceDrawJack()
      })
      
      // Should be able to use swap even on final turn
      expect(actions.canUseSpecialAbility()).toBe(true)
      
      act(() => {
        actions.swapCards(gameState.players[0].id, 0, gameState.players[1].id, 0)
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

    it('should handle consecutive Jack swaps in same round', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Set up with multiple Jacks available
      act(() => {
        actions.forceMultipleJacksInDeck()
      })
      
      // First Jack swap
      act(() => {
        actions.forceDrawJack()
      })
      
      act(() => {
        actions.swapCards(gameState.players[0].id, 0, gameState.players[1].id, 0)
      })
      
      act(() => {
        actions.replaceCard(1)
      })
      
      act(() => {
        actions.endTurn()
      })
      
      // Second Jack swap (different player)
      act(() => {
        actions.endTurn() // Bot turn
      })
      
      // Human turn again
      act(() => {
        actions.forceDrawJack()
      })
      
      gameState = hookResult.current.gameState
      
      // Should be able to use swap again
      expect(actions.canUseSpecialAbility()).toBe(true)
      
      act(() => {
        actions.swapCards(gameState.players[0].id, 2, gameState.players[1].id, 3)
      })
      
      // Should track multiple swaps in history
      const swapHistory = actions.getSwapHistory()
      expect(swapHistory.length).toBe(2)
    })
  })

  describe('Swap Ability Edge Cases and Error Handling', () => {
    let hookResult: any

    beforeEach(() => {
      const { result } = renderHook(() => useGame(), { wrapper })
      hookResult = result

      act(() => {
        result.current.actions.startGame(2, ['Human', 'Bot'])
      })
    })

    it('should handle invalid swap targets gracefully', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Draw a Jack
      act(() => {
        actions.forceDrawJack()
      })
      
      // Attempt invalid swap operations
      const invalidOperations = [
        () => actions.swapCards('invalid-player', 0, gameState.players[1].id, 0),
        () => actions.swapCards(gameState.players[0].id, -1, gameState.players[1].id, 0),
        () => actions.swapCards(gameState.players[0].id, 0, gameState.players[1].id, 4),
        () => actions.swapCards(gameState.players[0].id, 0, 'invalid-player', 0),
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

    it('should handle swap with corrupted card data', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Draw a Jack
      act(() => {
        actions.forceDrawJack()
      })
      
      // Simulate corrupted card data
      act(() => {
        actions.corruptPlayerCard(gameState.players[1].id, 0)
      })
      
      // Should handle gracefully
      expect(() => {
        act(() => {
          actions.swapCards(gameState.players[0].id, 0, gameState.players[1].id, 0)
        })
      }).not.toThrow()
      
      // Should validate and potentially recover
      const isValid = actions.validateGameState()
      expect(typeof isValid).toBe('boolean')
    })

    it('should handle concurrent swap attempts', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Draw a Jack
      act(() => {
        actions.forceDrawJack()
      })
      
      // Multiple rapid swap attempts
      act(() => {
        actions.swapCards(gameState.players[0].id, 0, gameState.players[1].id, 0)
        actions.swapCards(gameState.players[0].id, 1, gameState.players[1].id, 1) // Should be ignored
        actions.swapCards(gameState.players[0].id, 2, gameState.players[1].id, 2) // Should be ignored
      })
      
      // Only first swap should succeed
      const swapHistory = actions.getSwapHistory()
      expect(swapHistory.length).toBe(1)
      expect(swapHistory[0].player1CardIndex).toBe(0)
      expect(swapHistory[0].player2CardIndex).toBe(0)
    })

    it('should handle swap ability performance under load', () => {
      const actions = hookResult.current.actions
      
      // Performance test: many swap operations
      const startTime = Date.now()
      
      for (let i = 0; i < 50; i++) {
        act(() => {
          actions.forceDrawJack()
        })
        
        act(() => {
          actions.swapCards(
            hookResult.current.gameState.players[0].id, 
            i % 4,
            hookResult.current.gameState.players[1].id,
            (i + 1) % 4
          )
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
      
      // Swap history should be maintained
      const swapHistory = actions.getSwapHistory()
      expect(swapHistory.length).toBe(50)
    })

    it('should handle swap knowledge consistency across complex operations', () => {
      const actions = hookResult.current.actions
      let gameState = hookResult.current.gameState
      
      // Complex sequence: multiple swaps with knowledge tracking
      
      // Initial knowledge state
      const initialKnowledge = actions.getPlayerKnowledgeSnapshot(gameState.players[0].id)
      
      // First swap
      act(() => {
        actions.forceDrawJack()
      })
      
      act(() => {
        actions.swapCards(gameState.players[0].id, 0, gameState.players[1].id, 0)
      })
      
      act(() => {
        actions.replaceCard(1)
      })
      
      act(() => {
        actions.endTurn()
      })
      
      // Second swap (different turn)
      act(() => {
        actions.endTurn() // Bot turn
      })
      
      act(() => {
        actions.forceDrawJack()
      })
      
      act(() => {
        actions.swapCards(gameState.players[0].id, 2, gameState.players[1].id, 3)
      })
      
      act(() => {
        actions.replaceCard(0)
      })
      
      gameState = hookResult.current.gameState
      
      // Knowledge system should maintain consistency
      const finalKnowledge = actions.getPlayerKnowledgeSnapshot(gameState.players[0].id)
      expect(finalKnowledge.isConsistent).toBe(true)
      
      // Should track all swaps
      const swapHistory = actions.getSwapHistory()
      expect(swapHistory.length).toBe(2)
      
      // Knowledge should account for swaps
      expect(finalKnowledge.knownCardCount).toBeGreaterThanOrEqual(initialKnowledge.knownCardCount)
    })
  })
})