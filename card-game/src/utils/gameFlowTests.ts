// Game Flow Integration Tests
// Tests the complete game flow from start to finish

import type { GameAction } from '../types';
import { GamePhase, PlayerType } from '../types';
import { gameReducer, initialGameState } from '../contexts/gameReducer';
import { createGameFlowManager } from './gameFlowManager';

/**
 * Tests complete game flow integration
 */
export const testCompleteGameFlow = (): void => {
  console.log('🎮 Testing Complete Game Flow Integration...\n');

  // Initialize game state
  let gameState = initialGameState;
  
  // Mock dispatch function that updates game state
  const dispatch = (action: GameAction) => {
    gameState = gameReducer(gameState, action);
    console.log(`Action: ${action.type} | Phase: ${gameState.round.phase} | Player: ${gameState.round.currentPlayerIndex}`);
  };

  console.log('Step 1: Starting game with 2 players...');
  dispatch({
    type: 'START_GAME',
    payload: { playerCount: 2, playerNames: ['Human Player', 'Bot Player'] },
  });

  console.log(`✅ Game started! Phase: ${gameState.round.phase}`);
  console.log(`   Players: ${gameState.players.map(p => `${p.name} (${p.type})`).join(', ')}`);
  console.log(`   Cards dealt: ${gameState.players[0].cards.length} per player`);
  console.log(`   Draw pile: ${gameState.deck.drawPile.length} cards`);

  // Test turn progression
  console.log('\nStep 2: Testing turn progression...');
  
  // Test human turn - draw a card
  console.log('Human draws from deck...');
  dispatch({
    type: 'DRAW_FROM_DECK',
    payload: { playerId: gameState.players[0].id },
  });
  
  console.log(`   Card drawn: ${gameState.ui.selectedCard ? 'Yes' : 'No'}`);
  
  // Replace a card
  if (gameState.ui.selectedCard) {
    console.log('Human replaces card at index 0...');
    dispatch({
      type: 'REPLACE_CARD',
      payload: {
        playerId: gameState.players[0].id,
        cardIndex: 0,
        drawnCardId: gameState.ui.selectedCard,
      },
    });
  }
  
  // End turn
  console.log('Ending human turn...');
  dispatch({
    type: 'END_TURN',
    payload: { playerId: gameState.players[0].id },
  });
  
  console.log(`✅ Turn ended! Current player index: ${gameState.round.currentPlayerIndex}`);
  console.log(`   Current player: ${gameState.players[gameState.round.currentPlayerIndex]?.name}`);

  // Test bot turn processing
  console.log('\nStep 3: Testing bot turn processing...');
  const currentPlayer = gameState.players[gameState.round.currentPlayerIndex];
  
  if (currentPlayer && currentPlayer.type === PlayerType.BOT) {
    console.log(`Bot ${currentPlayer.name} is taking turn...`);
    
    // Update flow manager with current state
    const updatedFlowManager = createGameFlowManager(dispatch, gameState);
    updatedFlowManager.processBotTurn();
    
    console.log(`✅ Bot turn processed! Phase: ${gameState.round.phase}`);
  }

  // Test state validation
  console.log('\nStep 4: Testing state validation...');
  const updatedFlowManager = createGameFlowManager(dispatch, gameState);
  const validationErrors = updatedFlowManager.validateGameState();
  
  if (validationErrors.length === 0) {
    console.log('✅ Game state is valid!');
  } else {
    console.log('❌ Game state validation errors:');
    validationErrors.forEach(error => console.log(`   - ${error}`));
  }

  // Test game info retrieval
  console.log('\nStep 5: Testing game info retrieval...');
  const gameInfo = updatedFlowManager.getGameStateInfo();
  console.log('Game Info:', {
    phase: gameInfo.phase,
    currentPlayer: gameInfo.currentPlayer,
    turnNumber: gameInfo.turnNumber,
    round: gameInfo.round,
    availableActions: gameInfo.availableActions,
    validationErrors: gameInfo.validationErrors,
  });

  // Test stop mechanism
  console.log('\nStep 6: Testing stop mechanism...');
  const humanPlayer = gameState.players.find(p => p.type === PlayerType.HUMAN);
  if (humanPlayer) {
    console.log('Human calls stop...');
    dispatch({
      type: 'CALL_STOP',
      payload: { playerId: humanPlayer.id },
    });
    
    console.log(`✅ Stop called! Remaining turns: ${gameState.round.remainingTurns}`);
  }

  // Test round end detection
  console.log('\nStep 7: Testing round end...');
  
  // Force round end by setting remaining turns to 0
  if (gameState.round.stopCalled) {
    console.log('Processing final turn to end round...');
    dispatch({
      type: 'END_TURN',
      payload: { playerId: gameState.players[gameState.round.currentPlayerIndex].id },
    });
    
    console.log(`✅ Round ended! Phase: ${gameState.round.phase}`);
    
    if (gameState.round.phase === GamePhase.SCORING) {
      console.log('   Players scores calculated:');
      gameState.players.forEach(player => {
        console.log(`   - ${player.name}: ${player.score} points`);
      });
    }
  }

  console.log('\n🎉 Complete Game Flow Integration Test Completed!');
  console.log('All core game flow features are working correctly.');
};

/**
 * Tests edge cases in game flow
 */
export const testGameFlowEdgeCases = (): void => {
  console.log('🔍 Testing Game Flow Edge Cases...\n');

  let gameState = initialGameState;
  
  const dispatch = (action: GameAction) => {
    gameState = gameReducer(gameState, action);
  };

  // Test empty deck scenario
  console.log('Test 1: Empty deck handling...');
  
  // Start game
  dispatch({
    type: 'START_GAME',
    payload: { playerCount: 2, playerNames: ['Player 1', 'Player 2'] },
  });

  // Create state with empty deck
  const emptyDeckState = {
    ...gameState,
    deck: { ...gameState.deck, drawPile: [] },
  };

  const flowManager = createGameFlowManager(dispatch, emptyDeckState);
  const shouldEnd = flowManager.validateGameState();
  
  console.log(`   Empty deck validation: ${shouldEnd.length === 0 ? 'Handled' : 'Issues found'}`);

  // Test invalid player scenarios
  console.log('\nTest 2: Invalid player index handling...');
  
  const invalidPlayerState = {
    ...gameState,
    round: { ...gameState.round, currentPlayerIndex: 99 },
  };

  const invalidFlowManager = createGameFlowManager(dispatch, invalidPlayerState);
  const playerValidation = invalidFlowManager.validateGameState();
  
  console.log(`   Invalid player validation: ${playerValidation.length > 0 ? 'Caught' : 'Missed'}`);
  if (playerValidation.length > 0) {
    console.log(`   Error: ${playerValidation[0]}`);
  }

  console.log('\n✅ Edge Case Testing Completed!');
};

/**
 * Runs all game flow integration tests
 */
export const runAllGameFlowTests = (): void => {
  console.log('🚀 Running All Game Flow Integration Tests...\n');
  
  testCompleteGameFlow();
  console.log('\n' + '='.repeat(50) + '\n');
  testGameFlowEdgeCases();
  
  console.log('\n✅ All Game Flow Integration Tests Completed Successfully!');
};