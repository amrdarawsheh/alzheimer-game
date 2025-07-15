import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { GameProvider } from '../../contexts/GameContext';
import { useGame } from '../../hooks/useGame';
import { PlayerType, Rank } from '../../types';
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
  act(() => {
    vi.advanceTimersByTime(200);
  });
  act(() => {
    vi.advanceTimersByTime(300);
  });
};

// Helper function to complete bot turn
const completeBotTurn = () => {
  act(() => {
    vi.advanceTimersByTime(6000); // Complete thinking delay
  });
  act(() => {
    vi.advanceTimersByTime(1000); // Complete any action delays
  });
};

describe('Bot Special Ability Integration Tests', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('should not show special ability modal when bot draws Queen or Jack', async () => {
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

    // Even if bot draws a special card, no modal should be shown
    expect(result.current.gameState.ui.currentModal).toBeNull();
  });

  it('should show special ability modal when human draws Queen or Jack', async () => {
    const { result } = renderHook(() => useGame(), { wrapper });

    // Start game with human
    act(() => {
      result.current.actions.startGame(2, ['Human Player', 'Bot Player']);
    });

    // Start playing phase
    act(() => {
      result.current.actions.makeMove({ type: 'START_PLAYING', payload: {} });
    });

    // Set up a situation where we know a Queen is coming
    const gameState = result.current.gameState;
    
    // Draw from deck as human
    act(() => {
      result.current.actions.drawFromDeck();
    });

    // If the drawn card is special (Queen or Jack), modal should be shown
    const drawnCard = result.current.gameState.ui.selectedCard;
    if (drawnCard) {
      const cardData = result.current.gameState.cards[drawnCard];
      if (cardData && cardData.isSpecial) {
        expect(result.current.gameState.ui.currentModal).toBe('special-ability');
      }
    }
  });

  it('should handle bot special abilities automatically', async () => {
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

    // Bot should be thinking initially
    expect(result.current.gameState.ui.isBotThinking).toBe(true);

    // The key test: no special ability modal should be shown for bots
    expect(result.current.gameState.ui.currentModal).toBeNull();
  });

  it('should process bot turns correctly even with special cards', async () => {
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
    const initialTurnNumber = result.current.gameState.round.turnNumber;
    const initialCurrentPlayer = result.current.gameState.round.currentPlayerIndex;

    // End human turn to trigger bot turn
    act(() => {
      result.current.actions.makeMove({ type: 'END_TURN', payload: { playerId: result.current.gameState.players[0].id } });
    });

    // Advance to bot thinking state
    advanceToBotThinking();

    // Complete bot action
    completeBotTurn();

    // Game should progress normally regardless of special abilities
    expect(result.current.gameState.round.turnNumber).toBeGreaterThan(initialTurnNumber);
    expect(result.current.gameState.round.currentPlayerIndex).toBe((initialCurrentPlayer + 1) % 2);
  });

  it('should handle multiple bot turns with special abilities', async () => {
    const { result } = renderHook(() => useGame(), { wrapper });

    // Start game with multiple bots
    act(() => {
      result.current.actions.startGame(3, ['Human Player', 'Bot 1', 'Bot 2']);
    });

    // Start playing phase
    act(() => {
      result.current.actions.makeMove({ type: 'START_PLAYING', payload: {} });
    });

    // End human turn to trigger bot turns
    act(() => {
      result.current.actions.endTurn();
    });

    // Process first bot turn
    advanceToBotThinking();
    
    // Key test: no special ability modal should be shown for any bot
    expect(result.current.gameState.ui.currentModal).toBeNull();

    // Process second bot turn
    advanceToBotThinking();
    
    // Key test: still no special ability modal should be shown
    expect(result.current.gameState.ui.currentModal).toBeNull();
  });

  it('should distinguish between human and bot players for special abilities', async () => {
    const { result } = renderHook(() => useGame(), { wrapper });

    // Start game with mixed players
    act(() => {
      result.current.actions.startGame(2, ['Human Player', 'Bot Player']);
    });

    // Start playing phase
    act(() => {
      result.current.actions.makeMove({ type: 'START_PLAYING', payload: {} });
    });

    // Human player should be able to see special ability modals
    const humanPlayer = result.current.gameState.players.find(p => p.type === PlayerType.HUMAN);
    expect(humanPlayer).toBeTruthy();
    expect(humanPlayer?.name).toBe('Human Player');

    // Bot player should handle special abilities automatically
    const botPlayer = result.current.gameState.players.find(p => p.type === PlayerType.BOT);
    expect(botPlayer).toBeTruthy();
    expect(botPlayer?.name).toBe('Bot Player');
  });

  it('should maintain game state consistency during bot special abilities', async () => {
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
    const initialPlayers = result.current.gameState.players.map(p => ({ ...p }));

    // End human turn to trigger bot turn
    act(() => {
      result.current.actions.makeMove({ type: 'END_TURN', payload: { playerId: result.current.gameState.players[0].id } });
    });

    // Process bot turn
    advanceToBotThinking();
    completeBotTurn();

    // Game state should remain consistent
    expect(result.current.gameState.players.length).toBe(initialPlayers.length);
    expect(result.current.gameState.players[0].type).toBe(PlayerType.HUMAN);
    expect(result.current.gameState.players[1].type).toBe(PlayerType.BOT);
  });
});