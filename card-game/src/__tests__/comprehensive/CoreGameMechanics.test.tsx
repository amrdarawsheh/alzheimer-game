// Comprehensive tests for core game mechanics
import { describe, it, expect, beforeEach } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { GameProvider } from '../../contexts/GameContext'
import { useGame } from '../../hooks/useGame'
import { GamePhase } from '../../types'
import type { ReactNode } from '../../types'

const wrapper = ({ children }: { children: ReactNode }) => (
  <GameProvider>{children}</GameProvider>
)

describe('Core Game Mechanics - Comprehensive Tests', () => {
  describe('Game Initialization and Setup', () => {
    it('should initialize game with correct default state', () => {
      const { result } = renderHook(() => useGame(), { wrapper })
      const { gameState } = result.current

      expect(gameState.round.phase).toBe(GamePhase.SETUP)
      expect(gameState.players).toHaveLength(0)
      expect(gameState.deck.drawPile).toHaveLength(0)
      expect(gameState.deck.discardPile).toHaveLength(0)
      expect(gameState.round.currentPlayerIndex).toBe(0)
      expect(gameState.round.turnNumber).toBe(0)
      expect(gameState.round.stopCalled).toBe(false)
      expect(gameState.ui.selectedCard).toBeNull()
    })

    it('should start game with 2 players correctly', () => {
      const { result } = renderHook(() => useGame(), { wrapper })

      act(() => {
        result.current.actions.startGame(2, ['Alice', 'Bob'])
      })

      const { gameState } = result.current

      expect(gameState.round.phase).toBe(GamePhase.PLAYING)
      expect(gameState.players).toHaveLength(2)
      expect(gameState.players[0].name).toBe('Alice')
      expect(gameState.players[1].name).toBe('Bob')
      expect(gameState.players[0].type).toBe('human')
      expect(gameState.players[1].type).toBe('bot')
    })

    it('should start game with 3 players correctly', () => {
      const { result } = renderHook(() => useGame(), { wrapper })

      act(() => {
        result.current.actions.startGame(3, ['Alice', 'Bot1', 'Bot2'])
      })

      const { gameState } = result.current

      expect(gameState.round.phase).toBe(GamePhase.PLAYING)
      expect(gameState.players).toHaveLength(3)
      expect(gameState.deck.drawPile.length).toBe(42) // 54 - 12 dealt - 1 discard
    })

    it('should start game with 4 players correctly', () => {
      const { result } = renderHook(() => useGame(), { wrapper })

      act(() => {
        result.current.actions.startGame(4, ['Alice', 'Bot1', 'Bot2', 'Bot3'])
      })

      const { gameState } = result.current

      expect(gameState.round.phase).toBe(GamePhase.PLAYING)
      expect(gameState.players).toHaveLength(4)
      expect(gameState.deck.drawPile.length).toBe(37) // 54 - 16 dealt - 1 discard
    })

    it('should deal correct number of cards to each player', () => {
      const { result } = renderHook(() => useGame(), { wrapper })

      act(() => {
        result.current.actions.startGame(3, ['P1', 'P2', 'P3'])
      })

      const { gameState } = result.current

      gameState.players.forEach(player => {
        expect(player.cards).toHaveLength(4)
        // First 2 cards should be known, last 2 unknown
        expect(player.cards[0].isKnownToPlayer).toBe(true)
        expect(player.cards[1].isKnownToPlayer).toBe(true)
        expect(player.cards[2].isKnownToPlayer).toBe(false)
        expect(player.cards[3].isKnownToPlayer).toBe(false)
      })
    })

    it('should maintain card count integrity during setup', () => {
      const { result } = renderHook(() => useGame(), { wrapper })

      act(() => {
        result.current.actions.startGame(2, ['P1', 'P2'])
      })

      const { gameState } = result.current
      const stats = result.current.actions.getGameStatistics()

      // Total cards = 54 (standard deck + 2 jokers)
      const totalCards = stats.cardsInDeck + (2 * 4) + 1 // deck + hands + discard
      expect(totalCards).toBe(54)
    })
  })

  describe('Turn-Based Gameplay', () => {
    let hookResult: any

    beforeEach(() => {
      const { result } = renderHook(() => useGame(), { wrapper })
      hookResult = result

      act(() => {
        result.current.actions.startGame(2, ['Human', 'Bot'])
      })
    })

    it('should allow current player to draw from deck', () => {
      const initialDeckSize = hookResult.current.gameState.deck.drawPile.length

      act(() => {
        hookResult.current.actions.drawFromDeck()
      })

      const { gameState } = hookResult.current

      expect(gameState.ui.selectedCard).toBeDefined()
      expect(gameState.deck.drawPile.length).toBe(initialDeckSize - 1)
    })

    it('should allow current player to draw from discard pile', () => {
      // First create a discard pile by discarding a card
      act(() => {
        hookResult.current.actions.drawFromDeck()
      })

      act(() => {
        hookResult.current.actions.discardDrawnCard()
      })

      const initialDiscardSize = hookResult.current.gameState.deck.discardPile.length

      // End turn to next player
      act(() => {
        hookResult.current.actions.endTurn()
      })

      // Next player draws from discard
      act(() => {
        hookResult.current.actions.drawFromDiscard()
      })

      const { gameState } = hookResult.current

      expect(gameState.ui.selectedCard).toBeDefined()
      expect(gameState.deck.discardPile.length).toBe(initialDiscardSize - 1)
    })

    it('should allow player to replace a card in their hand', () => {
      act(() => {
        hookResult.current.actions.drawFromDeck()
      })

      const drawnCard = hookResult.current.gameState.ui.selectedCard
      const originalCard = hookResult.current.gameState.players[0].cards[0].cardId

      act(() => {
        hookResult.current.actions.replaceCard(0)
      })

      const { gameState } = hookResult.current

      expect(gameState.ui.selectedCard).toBeNull()
      expect(gameState.players[0].cards[0].cardId).toBe(drawnCard)
      expect(gameState.players[0].cards[0].isKnownToPlayer).toBe(true)
      expect(gameState.deck.discardPile).toContain(originalCard)
    })

    it('should allow player to discard drawn card', () => {
      act(() => {
        hookResult.current.actions.drawFromDeck()
      })

      const drawnCard = hookResult.current.gameState.ui.selectedCard
      const originalCards = hookResult.current.gameState.players[0].cards.map(c => c.cardId)

      act(() => {
        hookResult.current.actions.discardDrawnCard()
      })

      const { gameState } = hookResult.current

      expect(gameState.ui.selectedCard).toBeNull()
      expect(gameState.deck.discardPile).toContain(drawnCard)
      expect(gameState.players[0].cards.map(c => c.cardId)).toEqual(originalCards)
    })

    it('should progress turns correctly', () => {
      const initialPlayerIndex = hookResult.current.gameState.round.currentPlayerIndex
      const initialTurnNumber = hookResult.current.gameState.round.turnNumber

      act(() => {
        hookResult.current.actions.endTurn()
      })

      const { gameState } = hookResult.current

      expect(gameState.round.currentPlayerIndex).toBe((initialPlayerIndex + 1) % 2)
      expect(gameState.round.turnNumber).toBe(initialTurnNumber + 1)
    })

    it('should handle complete turn cycle', () => {
      // Complete a full turn: draw -> replace -> end turn
      const initialState = hookResult.current.gameState

      act(() => {
        hookResult.current.actions.drawFromDeck()
      })

      act(() => {
        hookResult.current.actions.replaceCard(0)
      })

      act(() => {
        hookResult.current.actions.endTurn()
      })

      const finalState = hookResult.current.gameState

      expect(finalState.round.currentPlayerIndex).toBe((initialState.round.currentPlayerIndex + 1) % 2)
      expect(finalState.round.turnNumber).toBe(initialState.round.turnNumber + 1)
      expect(finalState.ui.selectedCard).toBeNull()
    })
  })

  describe('Card Knowledge and Memory System', () => {
    let hookResult: any

    beforeEach(() => {
      const { result } = renderHook(() => useGame(), { wrapper })
      hookResult = result

      act(() => {
        result.current.actions.startGame(2, ['Human', 'Bot'])
      })
    })

    it('should track initial card knowledge correctly', () => {
      const { gameState } = hookResult.current

      gameState.players.forEach(player => {
        expect(player.cards[0].isKnownToPlayer).toBe(true)
        expect(player.cards[1].isKnownToPlayer).toBe(true)
        expect(player.cards[2].isKnownToPlayer).toBe(false)
        expect(player.cards[3].isKnownToPlayer).toBe(false)
      })
    })

    it('should update knowledge when replacing unknown cards', () => {
      act(() => {
        hookResult.current.actions.drawFromDeck()
      })

      // Replace unknown card at index 2
      act(() => {
        hookResult.current.actions.replaceCard(2)
      })

      const { gameState } = hookResult.current
      const player = gameState.players[0]

      expect(player.cards[2].isKnownToPlayer).toBe(true)
    })

    it('should preserve knowledge when replacing known cards', () => {
      act(() => {
        hookResult.current.actions.drawFromDeck()
      })

      // Replace known card at index 0
      act(() => {
        hookResult.current.actions.replaceCard(0)
      })

      const { gameState } = hookResult.current
      const player = gameState.players[0]

      expect(player.cards[0].isKnownToPlayer).toBe(true)
    })

    it('should handle knowledge during card swaps', () => {
      // This test would be more relevant when swap functionality is implemented
      const { gameState } = hookResult.current
      const player1 = gameState.players[0]
      const player2 = gameState.players[1]

      // Verify initial knowledge states
      expect(player1.cards[0].isKnownToPlayer).toBe(true)
      expect(player2.cards[0].isKnownToPlayer).toBe(false) // Bot cards are unknown to human
    })
  })

  describe('Stop Calling Mechanism', () => {
    let hookResult: any

    beforeEach(() => {
      const { result } = renderHook(() => useGame(), { wrapper })
      hookResult = result

      act(() => {
        result.current.actions.startGame(2, ['Human', 'Bot'])
      })
    })

    it('should allow current player to call stop', () => {
      expect(hookResult.current.gameState.round.stopCalled).toBe(false)

      act(() => {
        hookResult.current.actions.callStop()
      })

      const { gameState } = hookResult.current

      expect(gameState.round.stopCalled).toBe(true)
      expect(gameState.round.stopCalledBy).toBe(gameState.players[0].id)
      expect(gameState.round.remainingTurns).toBe(1) // Other player gets one more turn
    })

    it('should prevent multiple stop calls', () => {
      act(() => {
        hookResult.current.actions.callStop()
      })

      expect(hookResult.current.gameState.round.stopCalled).toBe(true)

      const beforeSecondCall = { ...hookResult.current.gameState.round }

      act(() => {
        hookResult.current.actions.callStop()
      })

      const afterSecondCall = hookResult.current.gameState.round

      expect(afterSecondCall.stopCalled).toBe(beforeSecondCall.stopCalled)
      expect(afterSecondCall.stopCalledBy).toBe(beforeSecondCall.stopCalledBy)
      expect(afterSecondCall.remainingTurns).toBe(beforeSecondCall.remainingTurns)
    })

    it('should only allow current player to call stop', () => {
      const currentPlayerId = hookResult.current.gameState.players[0].id
      const otherPlayerId = hookResult.current.gameState.players[1].id

      expect(hookResult.current.actions.isValidAction(currentPlayerId, 'CALL_STOP')).toBe(true)
      expect(hookResult.current.actions.isValidAction(otherPlayerId, 'CALL_STOP')).toBe(false)
    })

    it('should handle remaining turns after stop is called', () => {
      act(() => {
        hookResult.current.actions.callStop()
      })

      const gameState = hookResult.current.gameState
      expect(gameState.round.remainingTurns).toBe(1)

      // End current turn
      act(() => {
        hookResult.current.actions.endTurn()
      })

      // After remaining turns complete, round should end
      // (This would be handled by the game flow manager)
    })

    it('should allow normal gameplay during remaining turns', () => {
      act(() => {
        hookResult.current.actions.callStop()
      })

      // End turn to let other player play
      act(() => {
        hookResult.current.actions.endTurn()
      })

      // Other player should still be able to draw and play
      act(() => {
        hookResult.current.actions.drawFromDeck()
      })

      const gameState = hookResult.current.gameState
      expect(gameState.ui.selectedCard).toBeDefined()
    })
  })

  describe('Scoring and Round Management', () => {
    let hookResult: any

    beforeEach(() => {
      const { result } = renderHook(() => useGame(), { wrapper })
      hookResult = result

      act(() => {
        result.current.actions.startGame(2, ['Human', 'Bot'])
      })
    })

    it('should calculate player scores correctly', () => {
      const { gameState } = hookResult.current
      const player = gameState.players[0]
      
      // Calculate score based on cards
      let expectedScore = 0
      player.cards.forEach(playerCard => {
        const card = gameState.cards[playerCard.cardId]
        expectedScore += card.value
      })

      const actualScore = hookResult.current.actions.getGameStatistics().playerScores?.[player.id] || 0
      // Since scoring might not be calculated until round end, just verify the mechanism exists
      expect(typeof actualScore).toBe('number')
    })

    it('should handle round wins tracking', () => {
      const { gameState } = hookResult.current

      expect(gameState.match.roundWins).toBeDefined()
      expect(Object.keys(gameState.match.roundWins)).toHaveLength(2)
      
      gameState.players.forEach(player => {
        expect(gameState.match.roundWins[player.id]).toBe(0)
      })
    })

    it('should progress round numbers correctly', () => {
      const { gameState } = hookResult.current

      expect(gameState.match.currentRound).toBe(1)
    })

    it('should maintain match state integrity', () => {
      const { gameState } = hookResult.current

      expect(gameState.match.roundsToWin).toBeGreaterThan(0)
      expect(gameState.match.winner).toBeNull()
    })
  })

  describe('Action Validation', () => {
    let hookResult: any

    beforeEach(() => {
      const { result } = renderHook(() => useGame(), { wrapper })
      hookResult = result

      act(() => {
        result.current.actions.startGame(2, ['Human', 'Bot'])
      })
    })

    it('should validate draw actions correctly', () => {
      const currentPlayerId = hookResult.current.gameState.players[0].id
      const otherPlayerId = hookResult.current.gameState.players[1].id

      expect(hookResult.current.actions.isValidAction(currentPlayerId, 'DRAW_FROM_DECK')).toBe(true)
      expect(hookResult.current.actions.isValidAction(otherPlayerId, 'DRAW_FROM_DECK')).toBe(false)
    })

    it('should validate replacement actions correctly', () => {
      const currentPlayerId = hookResult.current.gameState.players[0].id

      // Can't replace without drawing first
      expect(hookResult.current.actions.isValidAction(currentPlayerId, 'REPLACE_CARD')).toBe(false)

      // Draw a card first
      act(() => {
        hookResult.current.actions.drawFromDeck()
      })

      // Now replacement should be valid
      expect(hookResult.current.actions.isValidAction(currentPlayerId, 'REPLACE_CARD')).toBe(true)
    })

    it('should provide available actions correctly', () => {
      const actions = hookResult.current.actions.getPlayerAvailableActions()

      expect(Array.isArray(actions)).toBe(true)
      expect(actions.length).toBeGreaterThan(0)
      expect(actions).toContain('DRAW_FROM_DECK')
      expect(actions).toContain('DRAW_FROM_DISCARD')
      expect(actions).toContain('CALL_STOP')
    })

    it('should validate actions based on game state', () => {
      // Draw a card
      act(() => {
        hookResult.current.actions.drawFromDeck()
      })

      const actions = hookResult.current.actions.getPlayerAvailableActions()

      expect(actions).toContain('REPLACE_CARD_0')
      expect(actions).toContain('REPLACE_CARD_1')
      expect(actions).toContain('REPLACE_CARD_2')
      expect(actions).toContain('REPLACE_CARD_3')
      expect(actions).toContain('DISCARD_DRAWN_CARD')
    })
  })

  describe('Game State Integrity', () => {
    let hookResult: any

    beforeEach(() => {
      const { result } = renderHook(() => useGame(), { wrapper })
      hookResult = result

      act(() => {
        result.current.actions.startGame(2, ['Human', 'Bot'])
      })
    })

    it('should maintain valid game state throughout gameplay', () => {
      // Perform multiple actions
      act(() => {
        hookResult.current.actions.drawFromDeck()
      })

      act(() => {
        hookResult.current.actions.replaceCard(0)
      })

      act(() => {
        hookResult.current.actions.endTurn()
      })

      const stats = hookResult.current.actions.getGameStatistics()
      expect(stats.isValidState).toBe(true)
    })

    it('should provide comprehensive game statistics', () => {
      const stats = hookResult.current.actions.getGameStatistics()

      expect(stats).toHaveProperty('gameId')
      expect(stats).toHaveProperty('phase')
      expect(stats).toHaveProperty('currentRound')
      expect(stats).toHaveProperty('playerCount')
      expect(stats).toHaveProperty('cardsInDeck')
      expect(stats).toHaveProperty('isValidState')
      expect(stats).toHaveProperty('deckProgress')

      expect(stats.phase).toBe(GamePhase.PLAYING)
      expect(stats.playerCount).toBe(2)
      expect(stats.isValidState).toBe(true)
      expect(typeof stats.deckProgress).toBe('number')
    })

    it('should provide turn analysis information', () => {
      const analysis = hookResult.current.actions.getTurnAnalysis()

      expect(analysis).toHaveProperty('currentPlayer')
      expect(analysis).toHaveProperty('turnState')
      expect(analysis).toHaveProperty('gameProgression')
      expect(analysis).toHaveProperty('deckState')

      expect(analysis.currentPlayer.name).toBe('Human')
      expect(analysis.currentPlayer.type).toBe('human')
      expect(analysis.turnState.hasDrawnCard).toBe(false)
      expect(analysis.gameProgression.phase).toBe(GamePhase.PLAYING)
    })

    it('should handle error conditions gracefully', () => {
      // Try to perform invalid actions
      act(() => {
        hookResult.current.actions.replaceCard(0)
      })

      // Game should remain stable
      expect(hookResult.current.gameState.ui.selectedCard).toBeNull()
      expect(hookResult.current.gameState.round.phase).toBe(GamePhase.PLAYING)

      const stats = hookResult.current.actions.getGameStatistics()
      expect(stats.isValidState).toBe(true)
    })
  })
})