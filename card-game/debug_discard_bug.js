// Debug script to verify the discard bug
// This script will trace through the REPLACE_CARD action step by step

console.log('=== DEBUG: Discard Bug Investigation ===')

// Simulate the bug scenario
const mockPlayer = {
  id: 'player1',
  cards: [
    { cardId: 'card1', isKnownToPlayer: true },   // 10♠ - position 0
    { cardId: 'card2', isKnownToPlayer: true },   // 2♠ - position 1  
    { cardId: 'card3', isKnownToPlayer: false },  // Unknown card - position 2
    { cardId: 'card4', isKnownToPlayer: false },  // Unknown card - position 3
  ]
}

const drawnCardId = 'card5' // 3♣ - the drawn card
const cardIndex = 2 // Replacing position 2

console.log('BEFORE REPLACEMENT:')
console.log('Player cards:', mockPlayer.cards.map(c => c.cardId))
console.log('Drawn card:', drawnCardId)
console.log('Replacing index:', cardIndex)

// Simulate replacePlayerCard function
const replacedCardId = mockPlayer.cards[cardIndex].cardId
console.log('Original card at position', cardIndex, ':', replacedCardId)

const updatedPlayer = {
  ...mockPlayer,
  cards: mockPlayer.cards.map((card, index) => 
    index === cardIndex 
      ? { ...card, cardId: drawnCardId, isKnownToPlayer: true }
      : card
  )
}

console.log('\nAFTER REPLACEMENT:')
console.log('Player cards:', updatedPlayer.cards.map(c => c.cardId))
console.log('Card that should go to discard:', replacedCardId)

// The bug would be if replacedCardId === drawnCardId
if (replacedCardId === drawnCardId) {
  console.log('🐛 BUG DETECTED: replacedCardId same as drawnCardId!')
} else {
  console.log('✅ Logic is correct: different cards')
}

console.log('\nEXPECTED RESULT:')
console.log('- Position', cardIndex, 'should have:', drawnCardId)
console.log('- Discard pile should have:', replacedCardId)
console.log('- These should be DIFFERENT cards')