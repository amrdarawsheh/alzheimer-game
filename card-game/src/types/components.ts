// Component prop type definitions

import type { Player, GamePhase } from './game';

export interface CardProps {
  cardId: string;
  isRevealed: boolean;
  isKnownToPlayer: boolean;
  isSelectable?: boolean;
  isSelected?: boolean;
  size?: 'small' | 'medium' | 'large';
  position?: 'hand' | 'deck' | 'discard';
  onClick?: (cardId: string) => void;
  onHover?: (cardId: string) => void;
  className?: string;
}

export interface PlayerAreaProps {
  player: Player;
  position: 'bottom' | 'top' | 'left' | 'right';
  isCurrentPlayer: boolean;
  isHuman: boolean;
  onCardClick?: (cardId: string) => void;
  onCardHover?: (cardId: string) => void;
  className?: string;
}

export interface GameBoardProps {
  className?: string;
}

export interface CentralAreaProps {
  drawPileCount: number;
  discardPileTopCard: string | null;
  onDrawFromDeck: () => void;
  onDrawFromDiscard: () => void;
  canDrawFromDeck: boolean;
  canDrawFromDiscard: boolean;
  className?: string;
}

export interface ActionButtonProps {
  variant?: 'primary' | 'secondary' | 'danger' | 'success';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}

export interface GameStatusProps {
  currentRound: number;
  currentPlayerName: string;
  gamePhase: GamePhase;
  stopCalled: boolean;
  remainingTurns: number;
  className?: string;
}

export interface RoundTrackerProps {
  players: Player[];
  roundsToWin: number;
  className?: string;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export interface PeekModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPeekCard: (cardId: string) => void;
  availableCards: { playerId: string; playerName: string; cards: string[] }[];
}

export interface SwapModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwapCards: (
    playerCardIndex: number,
    targetPlayerId: string,
    targetCardIndex: number
  ) => void;
  currentPlayer: Player;
  otherPlayers: Player[];
}


export interface GameEndModalProps {
  isOpen: boolean;
  onClose: () => void;
  winner: Player;
  finalScores: Array<{
    player: Player;
    roundsWon: number;
  }>;
  gameDuration: number;
  totalRounds: number;
  onPlayAgain: () => void;
  onMainMenu: () => void;
}

export interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary' | 'white';
  className?: string;
}

export interface TooltipProps {
  content: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  children: React.ReactNode;
  className?: string;
}

// Hook return types
export interface UseGameReturn {
  gameState: import('./game').GameState;
  actions: import('./actions').GameContextType;
  isLoading: boolean;
  error: string | null;
}

export interface UseCardAnimationReturn {
  flipCard: (cardId: string, duration?: number) => Promise<void>;
  moveCard: (
    cardId: string,
    fromPosition: Position,
    toPosition: Position,
    duration?: number
  ) => Promise<void>;
  highlightCard: (cardId: string, duration?: number) => Promise<void>;
  fadeCard: (
    cardId: string,
    opacity: number,
    duration?: number
  ) => Promise<void>;
  animateScore: (
    playerId: string,
    newScore: number,
    duration?: number
  ) => Promise<void>;
}

export interface Position {
  x: number;
  y: number;
}

// Form types
export interface GameSetupForm {
  playerCount: number;
  playerNames: string[];
  difficulty: 'easy' | 'medium' | 'hard';
  roundsToWin: number;
}

// Utility types
export type CardSize = 'small' | 'medium' | 'large';
export type PlayerPosition = 'bottom' | 'top' | 'left' | 'right';
export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success';
export type ModalSize = 'small' | 'medium' | 'large';
