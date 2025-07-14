// Game Flow Manager - handles automatic game progression and state transitions

import type { GameState, GameAction } from '../types';
import { GamePhase, PlayerType } from '../types';
import { 
  shouldEndRound, 
  getAvailableActions
} from './gameEngine';
import { EasyBot, addBotThinkingDelay } from './playerUtils';

/**
 * Manages automatic game flow and state transitions
 */
export class GameFlowManager {
  private dispatch: (action: GameAction) => void;
  private gameState: GameState;

  constructor(dispatch: (action: GameAction) => void, gameState: GameState) {
    this.dispatch = dispatch;
    this.gameState = gameState;
  }

  /**
   * Updates the game state reference
   */
  public updateGameState(gameState: GameState): void {
    this.gameState = gameState;
  }

  /**
   * Processes the current game state and triggers appropriate actions
   */
  public processGameFlow(): void {
    switch (this.gameState.round.phase) {
      case GamePhase.SETUP:
        // Game setup complete, ready for player to start
        break;
        
      case GamePhase.CARD_VIEWING:
        this.handleCardViewingPhase();
        break;
        
      case GamePhase.PLAYING:
        this.handlePlayingPhase();
        break;
        
      case GamePhase.SCORING:
        this.handleScoringPhase();
        break;
        
      case GamePhase.FINISHED:
        this.handleFinishedPhase();
        break;
    }
  }

  /**
   * Handles card viewing phase logic
   */
  private handleCardViewingPhase(): void {
    // Stay in card viewing phase - let user click "Ready to Play" button
    // The START_PLAYING action will be dispatched when user clicks the button
  }

  /**
   * Handles playing phase logic
   */
  private handlePlayingPhase(): void {
    // Check if round should end
    if (shouldEndRound(this.gameState)) {
      this.dispatch({ type: 'END_ROUND', payload: {} });
      return;
    }

    // Process bot turns if current player is a bot
    const currentPlayer = this.getCurrentPlayer();
    if (currentPlayer && currentPlayer.type === PlayerType.BOT && !this.gameState.ui.isBotThinking) {
      // Set bot thinking state
      this.dispatch({ type: 'SET_BOT_THINKING', payload: { thinking: true } });
      
      // Add thinking delay then process bot turn
      addBotThinkingDelay().then(() => {
        this.dispatch({ type: 'CLEAR_BOT_THINKING', payload: {} });
        this.processBotTurn();
      });
    }
  }

  /**
   * Handles scoring phase logic
   */
  private handleScoringPhase(): void {
    // Scoring is handled by the END_ROUND action
    // This phase is mainly for UI display
    console.log('Round scoring completed. Waiting for user to continue.');
  }

  /**
   * Handles finished phase logic
   */
  private handleFinishedPhase(): void {
    console.log('Game finished. Winner:', this.gameState.match.winner);
  }

  /**
   * Processes a bot turn
   */
  public processBotTurn(): void {
    const currentPlayer = this.getCurrentPlayer();
    if (!currentPlayer || currentPlayer.type !== PlayerType.BOT) {
      return;
    }

    const botMove = EasyBot.generateMove(this.gameState);
    if (!botMove) {
      console.warn('Bot could not generate a valid move');
      this.endTurn();
      return;
    }

    console.log(`Bot ${currentPlayer.name} making move:`, botMove.action);

    // Execute bot move
    switch (botMove.action) {
      case 'draw_deck':
        this.dispatch({
          type: 'DRAW_FROM_DECK',
          payload: { playerId: currentPlayer.id },
        });
        break;

      case 'draw_discard':
        this.dispatch({
          type: 'DRAW_FROM_DISCARD',
          payload: { playerId: currentPlayer.id },
        });
        break;

      case 'replace_card':
        if (botMove.cardIndex !== undefined && this.gameState.ui.selectedCard) {
          this.dispatch({
            type: 'REPLACE_CARD',
            payload: {
              playerId: currentPlayer.id,
              cardIndex: botMove.cardIndex,
              drawnCardId: this.gameState.ui.selectedCard,
            },
          });
          // End turn after replacement
          setTimeout(() => this.endTurn(), 500);
        }
        break;

      case 'discard_card':
        if (this.gameState.ui.selectedCard) {
          this.dispatch({
            type: 'DISCARD_DRAWN_CARD',
            payload: {
              playerId: currentPlayer.id,
              cardId: this.gameState.ui.selectedCard,
            },
          });
          // End turn after discard
          setTimeout(() => this.endTurn(), 500);
        }
        break;

      case 'call_stop':
        this.dispatch({
          type: 'CALL_STOP',
          payload: { playerId: currentPlayer.id },
        });
        // End turn after calling stop
        setTimeout(() => this.endTurn(), 500);
        break;

      default:
        console.warn('Unknown bot action:', botMove.action);
        this.endTurn();
    }
  }

  /**
   * Ends the current turn
   */
  public endTurn(): void {
    const currentPlayer = this.getCurrentPlayer();
    if (currentPlayer) {
      this.dispatch({
        type: 'END_TURN',
        payload: { playerId: currentPlayer.id },
      });
    }
  }

  /**
   * Advances to the next round
   */
  public nextRound(): void {
    this.dispatch({ type: 'START_ROUND', payload: {} });
  }

  /**
   * Resets the game
   */
  public resetGame(): void {
    this.dispatch({ type: 'RESET_GAME', payload: {} });
  }

  /**
   * Validates the current game state
   */
  public validateGameState(): string[] {
    const errors: string[] = [];

    // Check basic state consistency
    if (this.gameState.players.length === 0) {
      errors.push('No players in game');
    }

    if (this.gameState.round.currentPlayerIndex >= this.gameState.players.length) {
      errors.push('Invalid current player index');
    }

    // Check deck consistency
    const totalCards = this.gameState.deck.drawPile.length + 
                      this.gameState.deck.discardPile.length +
                      this.gameState.players.reduce((sum, player) => sum + player.cards.length, 0);

    if (totalCards !== 54) {
      errors.push(`Total cards in game: ${totalCards}, expected: 54`);
    }

    return errors;
  }

  /**
   * Gets detailed game state information
   */
  public getGameStateInfo(): Record<string, unknown> {
    const currentPlayer = this.getCurrentPlayer();
    const availableActions = getAvailableActions(this.gameState);
    
    return {
      phase: this.gameState.round.phase,
      currentPlayer: currentPlayer ? {
        id: currentPlayer.id,
        name: currentPlayer.name,
        type: currentPlayer.type,
      } : null,
      turnNumber: this.gameState.round.turnNumber,
      round: this.gameState.match.currentRound,
      availableActions,
      deckSize: this.gameState.deck.drawPile.length,
      discardSize: this.gameState.deck.discardPile.length,
      stopCalled: this.gameState.round.stopCalled,
      remainingTurns: this.gameState.round.remainingTurns,
      validationErrors: this.validateGameState(),
    };
  }

  /**
   * Forces progression through scoring phase
   */
  public forceProgressScoring(): void {
    if (this.gameState.round.phase === GamePhase.SCORING) {
      // Check if someone won the match
      if (this.gameState.match.winner) {
        this.dispatch({
          type: 'END_GAME',
          payload: { winnerId: this.gameState.match.winner },
        });
      } else {
        // Start next round
        this.nextRound();
      }
    }
  }

  /**
   * Gets the current player
   */
  private getCurrentPlayer() {
    return this.gameState.players[this.gameState.round.currentPlayerIndex] || null;
  }
}

/**
 * Creates a game flow manager instance
 */
export const createGameFlowManager = (
  dispatch: (action: GameAction) => void,
  gameState: GameState
): GameFlowManager => {
  return new GameFlowManager(dispatch, gameState);
};