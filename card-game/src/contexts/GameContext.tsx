import React, { useReducer, useMemo, useCallback, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { GameAction, GameContextType } from '../types';
import { GamePhase } from '../types';
import { gameReducer, initialGameState } from './gameReducer';
import { GameContext } from './context';
import { 
  calculateGameStatistics, 
  analyzeTurn, 
  getAvailableActions,
  validateTurnAction 
} from '../utils/gameEngine';
import { createGameFlowManager } from '../utils/gameFlowManager';

// Game Provider component
export const GameProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [gameState, dispatch] = useReducer(gameReducer, initialGameState);
  
  // Game flow manager for bot automation
  const gameFlowManager = useMemo(() => {
    try {
      return createGameFlowManager(dispatch, gameState);
    } catch (error) {
      console.error('Error creating GameFlowManager:', error);
      return null;
    }
  }, [dispatch]);
  
  const processFlow = useCallback(() => {
    if (gameFlowManager) {
      try {
        gameFlowManager.updateGameState(gameState);
        gameFlowManager.processGameFlow();
      } catch (error) {
        console.error('Error processing game flow:', error);
      }
    } else {
      console.warn('GameFlowManager is not available');
    }
  }, [gameFlowManager, gameState]);

  useEffect(() => {
    if (gameFlowManager) {
      const timer = setTimeout(processFlow, 100);
      return () => clearTimeout(timer);
    }
  }, [gameState.round.phase, gameState.round.currentPlayerIndex, gameState.ui.selectedCard, processFlow]);

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
      // Automatically end turn after calling stop
      setTimeout(() => {
        dispatch({
          type: 'END_TURN',
          payload: { playerId: currentPlayer.id },
        });
      }, 500);
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
    const drawnCardId = gameState.ui.selectedCard;
    if (currentPlayer && drawnCardId) {
      dispatch({
        type: 'REPLACE_CARD',
        payload: {
          playerId: currentPlayer.id,
          cardIndex,
          drawnCardId,
        },
      });
      // Automatically end turn after replacing card
      setTimeout(() => {
        dispatch({
          type: 'END_TURN',
          payload: { playerId: currentPlayer.id },
        });
      }, 500);
    }
  };

  const discardDrawnCard = () => {
    const currentPlayer = getCurrentPlayer();
    const drawnCardId = gameState.ui.selectedCard;
    if (currentPlayer && drawnCardId) {
      dispatch({
        type: 'DISCARD_DRAWN_CARD',
        payload: {
          playerId: currentPlayer.id,
          cardId: drawnCardId,
        },
      });
      // Automatically end turn after discarding
      setTimeout(() => {
        dispatch({
          type: 'END_TURN',
          payload: { playerId: currentPlayer.id },
        });
      }, 500);
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
    if (gameFlowManager) {
      gameFlowManager.processBotTurn();
    } else {
      console.log('Bot automation temporarily disabled - GameFlowManager initialization issue');
    }
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
    return gameState.deck.drawPile.length > 0 && gameState.round.phase === GamePhase.PLAYING;
  };

  const canDrawFromDiscard = () => {
    return gameState.deck.discardPile.length > 0 && gameState.round.phase === GamePhase.PLAYING;
  };

  const canCallStop = () => {
    const currentPlayer = getCurrentPlayer();
    return (
      currentPlayer &&
      !gameState.round.stopCalled &&
      gameState.round.phase === GamePhase.PLAYING
    );
  };

  const isPlayerTurn = (playerId: string) => {
    const currentPlayer = getCurrentPlayer();
    return currentPlayer?.id === playerId;
  };

  // Enhanced game engine functions
  const getGameStatistics = () => {
    return calculateGameStatistics(gameState);
  };

  const getTurnAnalysis = () => {
    return analyzeTurn(gameState);
  };

  const getPlayerAvailableActions = () => {
    return getAvailableActions(gameState);
  };

  const isValidAction = (playerId: string, actionType: string) => {
    return validateTurnAction(gameState, playerId, actionType);
  };

  // Game flow control functions (temporarily disabled)
  const forceEndTurn = () => {
    // gameFlowManager.endTurn();
    dispatch({ type: 'END_TURN', payload: { playerId: getCurrentPlayer()?.id || '' } });
  };

  const forceNextRound = () => {
    // gameFlowManager.nextRound();
    dispatch({ type: 'START_ROUND', payload: {} });
  };

  const getGameFlowInfo = () => {
    // return gameFlowManager.getGameStateInfo();
    return {
      phase: gameState.round.phase,
      currentPlayer: getCurrentPlayer(),
      turnNumber: gameState.round.turnNumber,
      availableActions: getAvailableActions(gameState),
      validationErrors: [],
    };
  };

  const forceProgressScoring = () => {
    // gameFlowManager.forceProgressScoring();
    dispatch({ type: 'END_ROUND', payload: {} });
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
    getGameStatistics,
    getTurnAnalysis,
    getPlayerAvailableActions,
    isValidAction,
    forceEndTurn,
    forceNextRound,
    getGameFlowInfo,
    forceProgressScoring,
  };

  return (
    <GameContext.Provider value={contextValue}>{children}</GameContext.Provider>
  );
};

// Note: useGame hook is in hooks/useGame.ts
// GameContext is imported from context.ts and exported via index.ts