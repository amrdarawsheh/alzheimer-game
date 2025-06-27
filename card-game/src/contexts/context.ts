import { createContext } from 'react';
import type { GameContextType } from '../types';

// Create the game context
export const GameContext = createContext<GameContextType | null>(null);