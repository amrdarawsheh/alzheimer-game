import React, { useReducer } from 'react';
import type { ReactNode } from 'react';
import type { GameAction, GameContextType } from '../types';
import { gameReducer, initialGameState } from './gameReducer';
import { GameContext } from './context';

// Game Provider component
export const GameProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [gameState, dispatch] = useReducer(gameReducer, initialGameState);

  // Game control functions
  const startGame = (playerCount: number, playerNames: string[]) => {
    dispatch({
      type: 'START_GAME',
      payload: { playerCount, playerNames },
    });
  };

  const makeMove = (action: GameAction) => {
    dispatch(action);
  };

  const endTurn = () => {
    const currentPlayer = getCurrentPlayer();
    if (currentPlayer) {
      dispatch({
        type: 'END_TURN',
        payload: { playerId: currentPlayer.id },
      });
    }
  };

  const callStop = () => {
    const currentPlayer = getCurrentPlayer();
    if (currentPlayer && canCallStop()) {
      dispatch({
        type: 'CALL_STOP',
        payload: { playerId: currentPlayer.id },
      });
    }
  };

  // Player action functions
  const drawFromDeck = () => {
    const currentPlayer = getCurrentPlayer();
    if (currentPlayer && canDrawFromDeck()) {
      dispatch({
        type: 'DRAW_FROM_DECK',
        payload: { playerId: currentPlayer.id },
      });
    }
  };

  const drawFromDiscard = () => {
    const currentPlayer = getCurrentPlayer();
    if (currentPlayer && canDrawFromDiscard()) {
      dispatch({
        type: 'DRAW_FROM_DISCARD',
        payload: { playerId: currentPlayer.id },
      });
    }
  };

  const replaceCard = (cardIndex: number) => {
    const currentPlayer = getCurrentPlayer();
    if (currentPlayer) {
      // This will be implemented when we have the drawn card logic
      // For now, we'll dispatch a placeholder action
      dispatch({
        type: 'REPLACE_CARD',
        payload: {
          playerId: currentPlayer.id,
          cardIndex,
          drawnCardId: '', // Will be set by reducer logic
        },
      });
    }
  };

  const discardDrawnCard = () => {
    const currentPlayer = getCurrentPlayer();
    if (currentPlayer) {
      dispatch({
        type: 'DISCARD_DRAWN_CARD',
        payload: {
          playerId: currentPlayer.id,
          cardId: '', // Will be set by reducer logic
        },
      });
    }
  };

  // Special ability functions
  const peekCard = (targetCardId: string) => {
    const currentPlayer = getCurrentPlayer();
    if (currentPlayer) {
      dispatch({
        type: 'PEEK_CARD',
        payload: { playerId: currentPlayer.id, targetCardId },
      });
    }
  };

  const swapCards = (
    playerCardIndex: number,
    targetPlayerId: string,
    targetCardIndex: number
  ) => {
    const currentPlayer = getCurrentPlayer();
    if (currentPlayer) {
      dispatch({
        type: 'SWAP_CARDS',
        payload: {
          playerId: currentPlayer.id,
          playerCardIndex,
          targetPlayerId,
          targetCardIndex,
        },
      });
    }
  };

  const useSpecialAbility = (cardId: string, abilityType: 'peek' | 'swap') => {
    const currentPlayer = getCurrentPlayer();
    if (currentPlayer) {
      dispatch({
        type: 'USE_SPECIAL_ABILITY',
        payload: { playerId: currentPlayer.id, cardId, abilityType },
      });
    }
  };

  const skipSpecialAbility = (cardId: string) => {
    const currentPlayer = getCurrentPlayer();
    if (currentPlayer) {
      dispatch({
        type: 'SKIP_SPECIAL_ABILITY',
        payload: { playerId: currentPlayer.id, cardId },
      });
    }
  };

  // UI functions
  const selectCard = (cardId: string) => {
    dispatch({
      type: 'SELECT_CARD',
      payload: { cardId },
    });
  };

  const clearSelection = () => {
    dispatch({
      type: 'CLEAR_SELECTION',
      payload: {},
    });
  };

  const showModal = (modalType: string, data?: unknown) => {
    dispatch({
      type: 'SHOW_MODAL',
      payload: { modalType, data },
    });
  };

  const hideModal = () => {
    dispatch({
      type: 'HIDE_MODAL',
      payload: {},
    });
  };

  // Bot functions
  const processBotTurn = () => {
    // This will be implemented in Task 1.8 with bot AI
    console.log('Bot turn processing not implemented yet');
  };

  // Utility functions
  const getCurrentPlayer = () => {
    return gameState.players[gameState.round.currentPlayerIndex] || null;
  };

  const getPlayerById = (playerId: string) => {
    return gameState.players.find(player => player.id === playerId) || null;
  };

  const getCardById = (cardId: string) => {
    return gameState.cards[cardId] || null;
  };

  const canDrawFromDeck = () => {
    return gameState.deck.drawPile.length > 0;
  };

  const canDrawFromDiscard = () => {
    return gameState.deck.discardPile.length > 0;
  };

  const canCallStop = () => {
    const currentPlayer = getCurrentPlayer();
    return (
      currentPlayer &&
      !gameState.round.stopCalled &&
      gameState.round.phase === 'playing'
    );
  };

  const isPlayerTurn = (playerId: string) => {
    const currentPlayer = getCurrentPlayer();
    return currentPlayer?.id === playerId;
  };

  // Create the context value
  const contextValue: GameContextType = {
    gameState,
    dispatch,
    startGame,
    makeMove,
    endTurn,
    callStop,
    drawFromDeck,
    drawFromDiscard,
    replaceCard,
    discardDrawnCard,
    peekCard,
    swapCards,
    useSpecialAbility,
    skipSpecialAbility,
    selectCard,
    clearSelection,
    showModal,
    hideModal,
    processBotTurn,
    getCurrentPlayer,
    getPlayerById,
    getCardById,
    canDrawFromDeck,
    canDrawFromDiscard,
    canCallStop,
    isPlayerTurn,
  };

  return (
    <GameContext.Provider value={contextValue}>{children}</GameContext.Provider>
  );
};

// Note: useGame hook is in hooks/useGame.ts
// GameContext is imported from context.ts and exported via index.ts