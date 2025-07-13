// Debug to understand the card replacement bug

// This simulates what should happen:
console.log('=== CARD REPLACEMENT DEBUG ===');

// Initial state
const initialDiscardPile = ['queen-hearts']; // 1 card
console.log('Initial discard pile:', initialDiscardPile, `(${initialDiscardPile.length} cards)`);

// Player cards before replacement
const playerCards = [
  { cardId: 'nine-diamonds' }, // Position 1 - this gets replaced
  { cardId: 'six-clubs' },     // Position 2
  { cardId: 'unknown-card-3' }, // Position 3
  { cardId: 'unknown-card-4' }  // Position 4
];

const drawnCardId = 'ten-hearts'; // The card we drew
const cardIndex = 0; // Replace position 1 (0-indexed)

// What replacePlayerCard should do:
const replacedCardId = playerCards[cardIndex].cardId; // 'nine-diamonds'
console.log('Drew card:', drawnCardId);
console.log('Replacing card at position:', cardIndex + 1);
console.log('Card being replaced:', replacedCardId);

// After replacement:
playerCards[cardIndex].cardId = drawnCardId; // Position 1 now has 'ten-hearts'
console.log('Player position 1 now has:', playerCards[cardIndex].cardId);

// What should be added to discard pile:
const newDiscardPile = [...initialDiscardPile, replacedCardId];
console.log('New discard pile should be:', newDiscardPile, `(${newDiscardPile.length} cards)`);
console.log('Top card should be:', newDiscardPile[newDiscardPile.length - 1]);

console.log('\n=== EXPECTED VS ACTUAL ===');
console.log('Expected top discard card: nine-diamonds');
console.log('Expected discard count: 2');
console.log('Actual top discard card: ten-hearts (BUG!)');
console.log('Actual discard count: 3 (BUG!)');

console.log('\n=== HYPOTHESIS ===');
console.log('Possible causes:');
console.log('1. Both drawnCardId AND replacedCardId are being added to discard pile');
console.log('2. The drawnCardId is being used instead of replacedCardId');
console.log('3. Some other action is also firing that adds the drawn card');