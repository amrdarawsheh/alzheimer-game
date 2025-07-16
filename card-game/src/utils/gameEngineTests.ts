// Game Engine Test Utility
// This file provides test functions to verify game engine functionality

import type { GameState, Player } from '../types';
import { GamePhase, Rank, Suit } from '../types';
import { 
  calculatePlayerScore,
  determineRoundWinner,
  checkMatchWinner,
  canPlayerAct,
  shouldEndRound,
  checkRoundEnd,
  detectSpecialCard,
  calculateGameStatistics,
  getAvailableActions
} from './gameEngine';
import { createDeck } from './deckUtils';
import { createPlayers } from './playerUtils';

/**
 * Creates a mock game state for testing
 */
export const createMockGameState = (): GameState => {
  const players = createPlayers(2, ['Player 1', 'Bot 1']);
  const cards = createDeck();
  
  return {
    gameId: 'test-game-1',
    gameMode: 'local',
    maxPlayers: 4,
    
    match: {
      currentRound: 1,
      roundsToWin: 3,
      roundWins: { 'player-0': 0, 'player-1': 0 },
      winner: null,
    },
    
    round: {
      phase: GamePhase.PLAYING,
      currentPlayerIndex: 0,
      stopCalled: false,
      stopCalledBy: null,
      remainingTurns: 0,
      autoStopped: false,
      turnNumber: 1,
    },
    
    players,
    cards,
    
    deck: {
      drawPile: Object.keys(cards).slice(0, 44), // 44 cards remaining
      discardPile: [Object.keys(cards)[53]], // 1 card in discard
      isEmpty: false,
    },
    
    lastAction: null,
    
    ui: {
      selectedCard: null,
      showingPeekCard: null,
      animationQueue: [],
      isActionInProgress: false,
      currentModal: null,
      isBotThinking: false,
      botThinkingStartTime: null,
      turnTimer: null,
      startCountdown: null,
    },
  };
};

/**
 * Test score calculation functionality
 */
export const testScoreCalculation = (): void => {
  console.log('🧪 Testing Score Calculation...');
  
  const mockCards = {
    'card1': { id: 'card1', rank: Rank.ACE, suit: Suit.HEARTS, value: 1, isSpecial: false },
    'card2': { id: 'card2', rank: Rank.KING, suit: Suit.SPADES, value: -2, isSpecial: false },
    'card3': { id: 'card3', rank: Rank.TEN, suit: Suit.CLUBS, value: 0, isSpecial: false },
    'card4': { id: 'card4', rank: Rank.FIVE, suit: Suit.DIAMONDS, value: 5, isSpecial: false },
  };
  
  const playerCards = [
    { cardId: 'card1', isRevealed: false, isKnownToPlayer: true },
    { cardId: 'card2', isRevealed: false, isKnownToPlayer: true },
    { cardId: 'card3', isRevealed: false, isKnownToPlayer: false },
    { cardId: 'card4', isRevealed: false, isKnownToPlayer: false },
  ];
  
  const score = calculatePlayerScore(playerCards, mockCards);
  console.log(`   Score for cards [A♥, K♠, 10♣, 5♦]: ${score} (expected: 4)`);
  
  if (score === 4) {
    console.log('   ✅ Score calculation PASSED');
  } else {
    console.log('   ❌ Score calculation FAILED');
  }
};

/**
 * Test round winner determination
 */
export const testRoundWinnerDetermination = (): void => {
  console.log('🧪 Testing Round Winner Determination...');
  
  const players: Player[] = [
    { id: 'p1', name: 'Player 1', type: 'human', cards: [], score: 15, isActive: true, roundWins: 0 },
    { id: 'p2', name: 'Player 2', type: 'bot', cards: [], score: 8, isActive: true, roundWins: 0 },
    { id: 'p3', name: 'Player 3', type: 'bot', cards: [], score: 12, isActive: true, roundWins: 0 },
  ];
  
  const winner = determineRoundWinner(players);
  console.log(`   Winner: ${winner.name} with score ${winner.score} (expected: Player 2 with score 8)`);
  
  if (winner.id === 'p2' && winner.score === 8) {
    console.log('   ✅ Round winner determination PASSED');
  } else {
    console.log('   ❌ Round winner determination FAILED');
  }
};

/**
 * Test match winner check
 */
export const testMatchWinnerCheck = (): void => {
  console.log('🧪 Testing Match Winner Check...');
  
  const roundWins = {
    'p1': 2,
    'p2': 3,
    'p3': 1,
  };
  
  const winner = checkMatchWinner(roundWins, 3);
  console.log(`   Match winner: ${winner} (expected: p2)`);
  
  if (winner === 'p2') {
    console.log('   ✅ Match winner check PASSED');
  } else {
    console.log('   ❌ Match winner check FAILED');
  }
  
  // Test no winner scenario
  const noWinnerRounds = { 'p1': 1, 'p2': 2, 'p3': 1 };
  const noWinner = checkMatchWinner(noWinnerRounds, 3);
  console.log(`   No winner scenario: ${noWinner} (expected: null)`);
  
  if (noWinner === null) {
    console.log('   ✅ No winner scenario PASSED');
  } else {
    console.log('   ❌ No winner scenario FAILED');
  }
};

/**
 * Test player action validation
 */
export const testPlayerActionValidation = (): void => {
  console.log('🧪 Testing Player Action Validation...');
  
  const gameState = createMockGameState();
  
  // Test current player can act
  const canAct = canPlayerAct(gameState, 'player-0');
  console.log(`   Current player can act: ${canAct} (expected: true)`);
  
  // Test non-current player cannot act
  const cannotAct = canPlayerAct(gameState, 'player-1');
  console.log(`   Non-current player can act: ${cannotAct} (expected: false)`);
  
  // Test player cannot act in wrong phase
  const setupGameState = { ...gameState, round: { ...gameState.round, phase: GamePhase.SETUP } };
  const cannotActSetup = canPlayerAct(setupGameState, 'player-0');
  console.log(`   Player can act in setup phase: ${cannotActSetup} (expected: false)`);
  
  if (canAct && !cannotAct && !cannotActSetup) {
    console.log('   ✅ Player action validation PASSED');
  } else {
    console.log('   ❌ Player action validation FAILED');
  }
};

/**
 * Test special card detection
 */
export const testSpecialCardDetection = (): void => {
  console.log('🧪 Testing Special Card Detection...');
  
  const queenCard = { id: 'q1', rank: Rank.QUEEN, suit: Suit.HEARTS, value: 12, isSpecial: true };
  const jackCard = { id: 'j1', rank: Rank.JACK, suit: Suit.SPADES, value: 11, isSpecial: true };
  const normalCard = { id: 'n1', rank: Rank.ACE, suit: Suit.CLUBS, value: 1, isSpecial: false };
  
  // Test special cards from deck
  const queenFromDeck = detectSpecialCard(queenCard, 'deck');
  const jackFromDeck = detectSpecialCard(jackCard, 'deck');
  const normalFromDeck = detectSpecialCard(normalCard, 'deck');
  
  console.log(`   Queen from deck: ${queenFromDeck} (expected: true)`);
  console.log(`   Jack from deck: ${jackFromDeck} (expected: true)`);
  console.log(`   Normal card from deck: ${normalFromDeck} (expected: false)`);
  
  // Test special cards from discard (should not trigger)
  const queenFromDiscard = detectSpecialCard(queenCard, 'discard');
  console.log(`   Queen from discard: ${queenFromDiscard} (expected: false)`);
  
  if (queenFromDeck && jackFromDeck && !normalFromDeck && !queenFromDiscard) {
    console.log('   ✅ Special card detection PASSED');
  } else {
    console.log('   ❌ Special card detection FAILED');
  }
};

/**
 * Test round end detection
 */
export const testRoundEndDetection = (): void => {
  console.log('🧪 Testing Round End Detection...');
  
  const gameState = createMockGameState();
  
  // Test normal game state (should not end)
  const shouldNotEnd = shouldEndRound(gameState);
  console.log(`   Normal game should end: ${shouldNotEnd} (expected: false)`);
  
  // Test empty deck (should end)
  const emptyDeckState = { ...gameState, deck: { ...gameState.deck, drawPile: [] } };
  const shouldEndEmptyDeck = shouldEndRound(emptyDeckState);
  console.log(`   Empty deck should end: ${shouldEndEmptyDeck} (expected: true)`);
  
  // Test stop called with no remaining turns (should end)
  const stopCalledState = { 
    ...gameState, 
    round: { ...gameState.round, stopCalled: true, remainingTurns: 0 } 
  };
  const shouldEndStopCalled = shouldEndRound(stopCalledState);
  console.log(`   Stop called with 0 turns should end: ${shouldEndStopCalled} (expected: true)`);
  
  // Test alias function
  const aliasResult = checkRoundEnd(gameState);
  console.log(`   Alias function result: ${aliasResult} (expected: false)`);
  
  if (!shouldNotEnd && shouldEndEmptyDeck && shouldEndStopCalled && !aliasResult) {
    console.log('   ✅ Round end detection PASSED');
  } else {
    console.log('   ❌ Round end detection FAILED');
  }
};

/**
 * Test available actions
 */
export const testAvailableActions = (): void => {
  console.log('🧪 Testing Available Actions...');
  
  const gameState = createMockGameState();
  
  // Test actions without drawn card
  const actionsNoDraw = getAvailableActions(gameState);
  console.log(`   Actions without drawn card: [${actionsNoDraw.join(', ')}]`);
  console.log(`   Should include DRAW_FROM_DECK and DRAW_FROM_DISCARD`);
  
  // Test actions with drawn card
  const withDrawnCard = { 
    ...gameState, 
    ui: { ...gameState.ui, selectedCard: Object.keys(gameState.cards)[0] } 
  };
  const actionsWithDraw = getAvailableActions(withDrawnCard);
  console.log(`   Actions with drawn card: [${actionsWithDraw.join(', ')}]`);
  console.log(`   Should include REPLACE_CARD_X and DISCARD_DRAWN_CARD`);
  
  const hasDrawActions = actionsNoDraw.includes('DRAW_FROM_DECK') && actionsNoDraw.includes('DRAW_FROM_DISCARD');
  const hasReplaceActions = actionsWithDraw.some(a => a.startsWith('REPLACE_CARD_')) && 
                           actionsWithDraw.includes('DISCARD_DRAWN_CARD');
  
  if (hasDrawActions && hasReplaceActions) {
    console.log('   ✅ Available actions PASSED');
  } else {
    console.log('   ❌ Available actions FAILED');
  }
};

/**
 * Test game statistics calculation
 */
export const testGameStatistics = (): void => {
  console.log('🧪 Testing Game Statistics...');
  
  const gameState = createMockGameState();
  const stats = calculateGameStatistics(gameState);
  
  console.log(`   Game ID: ${stats.gameId}`);
  console.log(`   Phase: ${stats.phase}`);
  console.log(`   Current Round: ${stats.currentRound}`);
  console.log(`   Player Count: ${stats.playerCount}`);
  console.log(`   Cards in Deck: ${stats.cardsInDeck}`);
  console.log(`   Deck Progress: ${stats.deckProgress}%`);
  console.log(`   Is Valid State: ${stats.isValidState}`);
  
  if (stats.gameId && stats.phase && stats.playerCount === 2) {
    console.log('   ✅ Game statistics PASSED');
  } else {
    console.log('   ❌ Game statistics FAILED');
  }
};

/**
 * Run all game engine tests
 */
export const runAllGameEngineTests = (): void => {
  console.log('🚀 Running Game Engine Tests...\n');
  
  testScoreCalculation();
  console.log('');
  
  testRoundWinnerDetermination();
  console.log('');
  
  testMatchWinnerCheck();
  console.log('');
  
  testPlayerActionValidation();
  console.log('');
  
  testSpecialCardDetection();
  console.log('');
  
  testRoundEndDetection();
  console.log('');
  
  testAvailableActions();
  console.log('');
  
  testGameStatistics();
  console.log('');
  
  console.log('✅ All Game Engine Tests Completed!');
};