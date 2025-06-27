import { useContext } from 'react';
import { GameContext } from '../contexts/context';
import type { UseGameReturn } from '../types';

// Custom hook for using the game context with additional features
export const useGame = (): UseGameReturn => {
  const context = useContext(GameContext);

  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }

  // Extract game state and actions
  const { gameState, ...actions } = context;

  // Add loading and error state (will be expanded in future tasks)
  const isLoading = gameState.ui.isActionInProgress;
  const error = null; // Will be implemented when we add error handling

  return {
    gameState,
    actions: { gameState, ...actions },
    isLoading,
    error,
  };
};

export default useGame;