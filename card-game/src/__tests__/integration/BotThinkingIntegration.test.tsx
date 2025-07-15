import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { renderHook, act, waitFor } from '@testing-library/react';
import { GameProvider } from '../../contexts/GameContext';
import { useGame } from '../../hooks/useGame';
import { PlayerType } from '../../types';
import { BOT_CONFIG } from '../../constants/gameRules';
import type { ReactNode } from 'react';

// Mock the bot thinking delay to speed up tests
vi.mock('../../utils/playerUtils', async () => {
  const actual = await vi.importActual('../../utils/playerUtils');
  return {
    ...actual,
    addBotThinkingDelay: vi.fn(() => new Promise(resolve => setTimeout(resolve, 50))),
  };
});

const wrapper = ({ children }: { children: ReactNode }) => (
  <GameProvider>{children}</GameProvider>
);

// Helper function to advance to bot thinking state
const advanceToBotThinking = () => {
  // Advance timers to trigger processFlow useEffect
  act(() => {
    vi.advanceTimersByTime(200);
  });

  // Allow state updates to process and trigger another processFlow
  act(() => {
    vi.advanceTimersByTime(300);
  });
};

describe('Bot Thinking Integration Tests', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('should show bot thinking state when bot turn starts', async () => {
    const { result } = renderHook(() => useGame(), { wrapper });

    // Start game with bot
    act(() => {
      result.current.actions.startGame(2, ['Human Player', 'Bot Player']);
    });

    // Start playing phase
    act(() => {
      result.current.actions.makeMove({ type: 'START_PLAYING', payload: {} });
    });

    // End human turn to trigger bot turn
    act(() => {
      result.current.actions.makeMove({ type: 'END_TURN', payload: { playerId: result.current.gameState.players[0].id } });
    });

    // Advance to bot thinking state
    advanceToBotThinking();

    // Now the bot thinking state should be set
    expect(result.current.gameState.ui.isBotThinking).toBe(true);
  });

  it('should clear bot thinking state after bot completes turn', async () => {
    const { result } = renderHook(() => useGame(), { wrapper });

    // Start game with bot
    act(() => {
      result.current.actions.startGame(2, ['Human Player', 'Bot Player']);
    });

    // Start playing phase
    act(() => {
      result.current.actions.makeMove({ type: 'START_PLAYING', payload: {} });
    });

    // End human turn to trigger bot turn
    act(() => {
      result.current.actions.makeMove({ type: 'END_TURN', payload: { playerId: result.current.gameState.players[0].id } });
    });

    // Advance to bot thinking state
    advanceToBotThinking();

    // Bot thinking should be active
    expect(result.current.gameState.ui.isBotThinking).toBe(true);

    // Advance timers to complete bot thinking
    act(() => {
      vi.advanceTimersByTime(BOT_CONFIG.THINKING_DELAY.max + 1000);
    });

    // Bot thinking should be cleared
    expect(result.current.gameState.ui.isBotThinking).toBe(false);
  });

  it('should track bot thinking start time', async () => {
    const { result } = renderHook(() => useGame(), { wrapper });

    // Start game with bot
    act(() => {
      result.current.actions.startGame(2, ['Human Player', 'Bot Player']);
    });

    // Start playing phase
    act(() => {
      result.current.actions.makeMove({ type: 'START_PLAYING', payload: {} });
    });

    // End human turn to trigger bot turn
    act(() => {
      result.current.actions.makeMove({ type: 'END_TURN', payload: { playerId: result.current.gameState.players[0].id } });
    });

    // Advance to bot thinking state
    advanceToBotThinking();

    // Bot thinking should be active with start time
    expect(result.current.gameState.ui.isBotThinking).toBe(true);
    expect(result.current.gameState.ui.botThinkingStartTime).toBeTypeOf('number');
  });

  it('should handle bot thinking for correct player type', async () => {
    const { result } = renderHook(() => useGame(), { wrapper });

    // Start game with bot
    act(() => {
      result.current.actions.startGame(2, ['Human Player', 'Bot Player']);
    });

    // Start playing phase
    act(() => {
      result.current.actions.makeMove({ type: 'START_PLAYING', payload: {} });
    });

    // Initially should be human player's turn, no bot thinking
    expect(result.current.gameState.ui.isBotThinking).toBe(false);

    // Current player should be human
    const currentPlayer = result.current.gameState.players[result.current.gameState.round.currentPlayerIndex];
    expect(currentPlayer.type).toBe(PlayerType.HUMAN);

    // End human turn to trigger bot turn
    act(() => {
      result.current.actions.makeMove({ type: 'END_TURN', payload: { playerId: result.current.gameState.players[0].id } });
    });

    // Advance to bot thinking state
    advanceToBotThinking();

    // Now should be bot's turn and thinking should be active
    expect(result.current.gameState.ui.isBotThinking).toBe(true);
    const newCurrentPlayer = result.current.gameState.players[result.current.gameState.round.currentPlayerIndex];
    expect(newCurrentPlayer.type).toBe(PlayerType.BOT);
  });

  it('should prevent concurrent bot thinking states', async () => {
    const { result } = renderHook(() => useGame(), { wrapper });

    // Start game with bot
    act(() => {
      result.current.actions.startGame(2, ['Human Player', 'Bot Player']);
    });

    // Start playing phase
    act(() => {
      result.current.actions.makeMove({ type: 'START_PLAYING', payload: {} });
    });

    // End human turn to trigger bot turn
    act(() => {
      result.current.actions.makeMove({ type: 'END_TURN', payload: { playerId: result.current.gameState.players[0].id } });
    });

    // Advance to bot thinking state
    advanceToBotThinking();

    // Bot thinking should be active
    expect(result.current.gameState.ui.isBotThinking).toBe(true);

    // Try to trigger another bot action while thinking (should be prevented)
    const initialThinkingTime = result.current.gameState.ui.botThinkingStartTime;
    
    // This should not change the thinking state since bot is already thinking
    act(() => {
      result.current.actions.makeMove({ type: 'END_TURN', payload: { playerId: result.current.gameState.players[0].id } });
    });

    // Should still be in thinking state with same start time
    expect(result.current.gameState.ui.isBotThinking).toBe(true);
    expect(result.current.gameState.ui.botThinkingStartTime).toBe(initialThinkingTime);
  });

  it('should maintain game state consistency during bot thinking', async () => {
    const { result } = renderHook(() => useGame(), { wrapper });

    // Start game with bot
    act(() => {
      result.current.actions.startGame(2, ['Human Player', 'Bot Player']);
    });

    // Start playing phase
    act(() => {
      result.current.actions.makeMove({ type: 'START_PLAYING', payload: {} });
    });

    // Record initial state
    const initialDeckSize = result.current.gameState.deck.drawPile.length;
    const initialTurnNumber = result.current.gameState.round.turnNumber;

    // End human turn to trigger bot turn
    act(() => {
      result.current.actions.makeMove({ type: 'END_TURN', payload: { playerId: result.current.gameState.players[0].id } });
    });

    // Advance to bot thinking state
    advanceToBotThinking();

    // During bot thinking, deck should not change yet
    expect(result.current.gameState.ui.isBotThinking).toBe(true);
    expect(result.current.gameState.deck.drawPile.length).toBe(initialDeckSize);

    // Complete bot thinking
    act(() => {
      vi.advanceTimersByTime(BOT_CONFIG.THINKING_DELAY.max + 1000);
    });

    // After bot completes turn, state should be updated
    expect(result.current.gameState.ui.isBotThinking).toBe(false);
    expect(result.current.gameState.round.turnNumber).toBeGreaterThan(initialTurnNumber);
  });

  it('should respect bot thinking delay configuration', async () => {
    const { result } = renderHook(() => useGame(), { wrapper });

    // Start game with bot
    act(() => {
      result.current.actions.startGame(2, ['Human Player', 'Bot Player']);
    });

    // Start playing phase
    act(() => {
      result.current.actions.makeMove({ type: 'START_PLAYING', payload: {} });
    });

    // End human turn to trigger bot turn
    act(() => {
      result.current.actions.makeMove({ type: 'END_TURN', payload: { playerId: result.current.gameState.players[0].id } });
    });

    // Advance to bot thinking state
    advanceToBotThinking();

    // Bot thinking should be active
    expect(result.current.gameState.ui.isBotThinking).toBe(true);

    // Advance by less than minimum delay - should still be thinking
    act(() => {
      vi.advanceTimersByTime(BOT_CONFIG.THINKING_DELAY.min - 1000);
    });

    expect(result.current.gameState.ui.isBotThinking).toBe(true);

    // Advance beyond maximum delay - should complete
    act(() => {
      vi.advanceTimersByTime(BOT_CONFIG.THINKING_DELAY.max + 1000);
    });

    expect(result.current.gameState.ui.isBotThinking).toBe(false);
  });

  it('should handle multiple bots in sequence', async () => {
    const { result } = renderHook(() => useGame(), { wrapper });

    // Start game with multiple bots
    act(() => {
      result.current.actions.startGame(3, ['Human Player', 'Bot 1', 'Bot 2']);
    });

    // Start playing phase
    act(() => {
      result.current.actions.makeMove({ type: 'START_PLAYING', payload: {} });
    });

    // End human turn to trigger first bot
    act(() => {
      result.current.actions.endTurn();
    });

    // Advance to first bot thinking state
    advanceToBotThinking();

    // First bot should be thinking
    expect(result.current.gameState.ui.isBotThinking).toBe(true);

    // Complete first bot turn
    act(() => {
      vi.advanceTimersByTime(BOT_CONFIG.THINKING_DELAY.max + 1000);
    });

    // Allow time for second bot to start thinking
    advanceToBotThinking();

    // First bot should complete, second bot should start thinking
    expect(result.current.gameState.ui.isBotThinking).toBe(true);

    // Complete second bot turn
    act(() => {
      vi.advanceTimersByTime(BOT_CONFIG.THINKING_DELAY.max + 1000);
    });

    // All bots should be done
    expect(result.current.gameState.ui.isBotThinking).toBe(false);
  });

  it('should update deck pile when bot draws from deck', async () => {
    const { result } = renderHook(() => useGame(), { wrapper });

    // Start game with bot
    act(() => {
      result.current.actions.startGame(2, ['Human Player', 'Bot Player']);
    });

    // Start playing phase
    act(() => {
      result.current.actions.makeMove({ type: 'START_PLAYING', payload: {} });
    });

    // Record initial deck sizes
    const initialDrawPileSize = result.current.gameState.deck.drawPile.length;
    const initialDiscardPileSize = result.current.gameState.deck.discardPile.length;

    // End human turn to trigger bot turn
    act(() => {
      result.current.actions.makeMove({ type: 'END_TURN', payload: { playerId: result.current.gameState.players[0].id } });
    });

    // Advance to bot thinking state
    advanceToBotThinking();

    // Complete bot thinking and action
    act(() => {
      vi.advanceTimersByTime(BOT_CONFIG.THINKING_DELAY.max + 1000);
    });

    // Deck should have changed (bot drew a card)
    const newDrawPileSize = result.current.gameState.deck.drawPile.length;
    const newDiscardPileSize = result.current.gameState.deck.discardPile.length;

    // Either draw pile decreased or discard pile changed (depending on bot's choice)
    expect(newDrawPileSize !== initialDrawPileSize || newDiscardPileSize !== initialDiscardPileSize).toBe(true);
  });

  it('should automatically progress bot turns without manual intervention', async () => {
    const { result } = renderHook(() => useGame(), { wrapper });

    // Start game with bot
    act(() => {
      result.current.actions.startGame(2, ['Human Player', 'Bot Player']);
    });

    // Start playing phase
    act(() => {
      result.current.actions.makeMove({ type: 'START_PLAYING', payload: {} });
    });

    // Record initial turn number
    const initialTurnNumber = result.current.gameState.round.turnNumber;

    // End human turn to trigger bot turn
    act(() => {
      result.current.actions.makeMove({ type: 'END_TURN', payload: { playerId: result.current.gameState.players[0].id } });
    });

    // Advance to bot thinking state
    advanceToBotThinking();

    // Bot should be thinking
    expect(result.current.gameState.ui.isBotThinking).toBe(true);

    // Complete bot thinking and action
    act(() => {
      vi.advanceTimersByTime(BOT_CONFIG.THINKING_DELAY.max + 1000);
    });

    // Bot should complete its turn automatically
    expect(result.current.gameState.ui.isBotThinking).toBe(false);
    expect(result.current.gameState.round.turnNumber).toBeGreaterThan(initialTurnNumber);
  });

  it('should handle bot actions that affect game state', async () => {
    const { result } = renderHook(() => useGame(), { wrapper });

    // Start game with bot
    act(() => {
      result.current.actions.startGame(2, ['Human Player', 'Bot Player']);
    });

    // Start playing phase
    act(() => {
      result.current.actions.makeMove({ type: 'START_PLAYING', payload: {} });
    });

    // Track initial state
    const initialCurrentPlayerIndex = result.current.gameState.round.currentPlayerIndex;

    // End human turn to trigger bot turn
    act(() => {
      result.current.actions.makeMove({ type: 'END_TURN', payload: { playerId: result.current.gameState.players[0].id } });
    });

    // Advance to bot thinking state
    advanceToBotThinking();

    // Bot should be thinking
    expect(result.current.gameState.ui.isBotThinking).toBe(true);

    // Complete bot thinking and action
    act(() => {
      vi.advanceTimersByTime(BOT_CONFIG.THINKING_DELAY.max + 1000);
    });

    // Bot should complete its turn and clear selections
    expect(result.current.gameState.ui.isBotThinking).toBe(false);
    expect(result.current.gameState.ui.selectedCard).toBeNull();
    expect(result.current.gameState.round.currentPlayerIndex).toBe((initialCurrentPlayerIndex + 1) % 2);
  });

  it('should respect bot thinking delay timing in real scenario', async () => {
    // Remove the mock for this test to test actual timing
    vi.unmock('../../utils/playerUtils');
    
    const { result } = renderHook(() => useGame(), { wrapper });

    // Start game with bot
    act(() => {
      result.current.actions.startGame(2, ['Human Player', 'Bot Player']);
    });

    // Start playing phase
    act(() => {
      result.current.actions.makeMove({ type: 'START_PLAYING', payload: {} });
    });

    // End human turn to trigger bot turn
    act(() => {
      result.current.actions.makeMove({ type: 'END_TURN', payload: { playerId: result.current.gameState.players[0].id } });
    });

    // Advance to bot thinking state
    advanceToBotThinking();

    // Bot should be thinking
    expect(result.current.gameState.ui.isBotThinking).toBe(true);

    // Advance by less than minimum delay - should still be thinking
    act(() => {
      vi.advanceTimersByTime(BOT_CONFIG.THINKING_DELAY.min - 500);
    });

    expect(result.current.gameState.ui.isBotThinking).toBe(true);

    // Re-mock for cleanup
    vi.doMock('../../utils/playerUtils', async () => {
      const actual = await vi.importActual('../../utils/playerUtils');
      return {
        ...actual,
        addBotThinkingDelay: vi.fn(() => new Promise(resolve => setTimeout(resolve, 50))),
      };
    });
  });
});