// Debug script to test card replacement logic

const mockPlayer = {
  id: 'player1',
  cards: [
    { cardId: 'card-a', isKnownToPlayer: true },
    { cardId: 'card-b', isKnownToPlayer: true },
    { cardId: 'card-c', isKnownToPlayer: false }, // This will be replaced
    { cardId: 'card-d', isKnownToPlayer: false }
  ]
};

const drawnCardId = 'card-4-of-spades';
const cardIndex = 2; // Replace card at position 3 (0-indexed)

// Simulate the replacePlayerCard function logic
const replacedCardId = mockPlayer.cards[cardIndex].cardId; // Should be 'card-c'

console.log('REPLACE CARD DEBUG:');
console.log('- Drew card:', drawnCardId);
console.log('- Replacing card at index:', cardIndex);
console.log('- Card being replaced:', replacedCardId);
console.log('- Should add to discard pile:', replacedCardId);
console.log('- Should NOT add to discard pile:', drawnCardId);