import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { vi } from 'vitest';
import { PlayingCard } from '../../components/PlayingCard';

// Mock game state for testing
const mockGameState = {
  round: { phase: 'playing' as const },
  ui: { selectedCard: null, showingPeekCard: null },
  players: []
};

const createMockCard = (rank: string, suit: string, value: number, isSpecial = false) => ({
  id: `test-card-${rank}-${suit}`,
  rank,
  suit,
  value,
  isSpecial
});

const mockActions = {
  getCardById: vi.fn(),
  replaceCard: vi.fn()
};

// Wrapper component for testing
const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <div data-testid="test-wrapper">
    {children}
  </div>
);

// Mock useGame hook
vi.mock('../../hooks/useGame', () => ({
  useGame: () => ({
    gameState: mockGameState,
    actions: mockActions
  })
}));

describe('Card Face Design', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('card displays correct suit symbols with proper colors', () => {
    // Test hearts (red)
    const heartsCard = createMockCard('ace', 'hearts', 1);
    mockActions.getCardById.mockReturnValue(heartsCard);
    
    const heartsPlayerCard = {
      cardId: heartsCard.id,
      isRevealed: true,
      isKnownToPlayer: true
    };

    render(
      <TestWrapper>
        <PlayingCard
          playerCard={heartsPlayerCard}
          cardIndex={0}
          playerId="player1"
          showAsOpponent={false}
          isCurrentPlayer={false}
          isHumanPlayer={true}
        />
      </TestWrapper>
    );

    const suitSymbols = screen.getAllByTestId('card-suit');
    expect(suitSymbols[0]).toHaveTextContent('♥');
    expect(suitSymbols[0]).toHaveClass('text-red-600');
  });

  test('card displays spades with black color', () => {
    // Test spades (black)
    const spadesCard = createMockCard('king', 'spades', -2);
    mockActions.getCardById.mockReturnValue(spadesCard);
    
    render(
      <TestWrapper>
        <PlayingCard
          playerCard={{ cardId: spadesCard.id, isRevealed: true, isKnownToPlayer: true }}
          cardIndex={0}
          playerId="player1"
          showAsOpponent={false}
          isCurrentPlayer={false}
          isHumanPlayer={true}
        />
      </TestWrapper>
    );

    const spadesSuits = screen.getAllByTestId('card-suit');
    expect(spadesSuits[0]).toHaveTextContent('♠');
    expect(spadesSuits[0]).toHaveClass('text-black');
  });

  test('card rank displays correctly in corners', () => {
    const aceCard = createMockCard('ace', 'hearts', 1);
    mockActions.getCardById.mockReturnValue(aceCard);
    
    const playerCard = {
      cardId: aceCard.id,
      isRevealed: true,
      isKnownToPlayer: true
    };

    render(
      <TestWrapper>
        <PlayingCard
          playerCard={playerCard}
          cardIndex={0}
          playerId="player1"
          showAsOpponent={false}
          isCurrentPlayer={false}
          isHumanPlayer={true}
        />
      </TestWrapper>
    );

    const topLeftRank = screen.getByTestId('card-rank-tl');
    const bottomRightRank = screen.getByTestId('card-rank-br');

    expect(topLeftRank).toHaveTextContent('A');
    expect(bottomRightRank).toHaveTextContent('A');
    expect(bottomRightRank.parentElement).toHaveClass('rotate-180');
  });

  test('point value displays in center with proper styling', () => {
    const kingCard = createMockCard('king', 'spades', -2);
    mockActions.getCardById.mockReturnValue(kingCard);
    
    const playerCard = {
      cardId: kingCard.id,
      isRevealed: true,
      isKnownToPlayer: true
    };

    render(
      <TestWrapper>
        <PlayingCard
          playerCard={playerCard}
          cardIndex={0}
          playerId="player1"
          showAsOpponent={false}
          isCurrentPlayer={false}
          isHumanPlayer={true}
        />
      </TestWrapper>
    );

    const pointValue = screen.getByTestId('card-point-value');
    expect(pointValue).toHaveTextContent('-2');
    expect(pointValue).toHaveClass('bg-gold-500', 'text-white', 'rounded-full');
  });

  test('special cards have unique styling', () => {
    const queenCard = createMockCard('queen', 'hearts', 12, true);
    mockActions.getCardById.mockReturnValue(queenCard);
    
    const playerCard = {
      cardId: queenCard.id,
      isRevealed: true,
      isKnownToPlayer: true
    };

    render(
      <TestWrapper>
        <PlayingCard
          playerCard={playerCard}
          cardIndex={0}
          playerId="player1"
          showAsOpponent={false}
          isCurrentPlayer={false}
          isHumanPlayer={true}
        />
      </TestWrapper>
    );

    const specialIndicator = screen.getByTestId('special-card-indicator');
    expect(specialIndicator).toBeInTheDocument();
    expect(specialIndicator).toHaveClass('bg-gold-500');
    
    const innerGlow = specialIndicator.querySelector('.animate-pulse');
    expect(innerGlow).toBeInTheDocument();
  });

  test('joker cards display correctly', () => {
    const jokerCard = createMockCard('joker', null, -4, true);
    mockActions.getCardById.mockReturnValue(jokerCard);
    
    const playerCard = {
      cardId: jokerCard.id,
      isRevealed: true,
      isKnownToPlayer: true
    };

    render(
      <TestWrapper>
        <PlayingCard
          playerCard={playerCard}
          cardIndex={0}
          playerId="player1"
          showAsOpponent={false}
          isCurrentPlayer={false}
          isHumanPlayer={true}
        />
      </TestWrapper>
    );

    expect(screen.getByText('🃏')).toBeInTheDocument();
    expect(screen.getByTestId('card-rank-tl')).toHaveTextContent('JOK');
    expect(screen.getByTestId('card-point-value')).toHaveTextContent('-4');
  });

  test('all card types render correctly', () => {
    const testCards = [
      { rank: 'ace', suit: 'hearts', value: 1, expectedRank: 'A' },
      { rank: '10', suit: 'diamonds', value: 0, expectedRank: '10' },
      { rank: 'jack', suit: 'clubs', value: 11, expectedRank: 'J' },
      { rank: 'queen', suit: 'spades', value: 12, expectedRank: 'Q' },
      { rank: 'king', suit: 'hearts', value: -2, expectedRank: 'K' },
      { rank: 'joker', suit: null, value: -4, expectedRank: 'JOK' }
    ];

    testCards.forEach(cardData => {
      const card = createMockCard(cardData.rank, cardData.suit, cardData.value);
      mockActions.getCardById.mockReturnValue(card);
      
      const playerCard = {
        cardId: card.id,
        isRevealed: true,
        isKnownToPlayer: true
      };

      const { container } = render(
        <TestWrapper>
          <PlayingCard
            playerCard={playerCard}
            cardIndex={0}
            playerId="player1"
            showAsOpponent={false}
            isCurrentPlayer={false}
            isHumanPlayer={true}
          />
        </TestWrapper>
      );

      const rankElement = container.querySelector('[data-testid="card-rank-tl"]');
      expect(rankElement).toHaveTextContent(cardData.expectedRank);
      
      const pointElement = container.querySelector('[data-testid="card-point-value"]');
      expect(pointElement).toHaveTextContent(cardData.value.toString());

      // Cleanup for next iteration
      container.remove();
    });
  });

  test('card layout is properly structured', () => {
    const testCard = createMockCard('7', 'diamonds', 7);
    mockActions.getCardById.mockReturnValue(testCard);
    
    const playerCard = {
      cardId: testCard.id,
      isRevealed: true,
      isKnownToPlayer: true
    };

    render(
      <TestWrapper>
        <PlayingCard
          playerCard={playerCard}
          cardIndex={0}
          playerId="player1"
          showAsOpponent={false}
          isCurrentPlayer={false}
          isHumanPlayer={true}
        />
      </TestWrapper>
    );

    expect(screen.getByTestId('card-corner-tl')).toBeInTheDocument();
    expect(screen.getByTestId('card-center')).toBeInTheDocument();
    expect(screen.getByTestId('card-corner-br')).toBeInTheDocument();
    expect(screen.getByTestId('card-face')).toBeInTheDocument();
  });

  test('card typography uses casino fonts', () => {
    const testCard = createMockCard('queen', 'clubs', 12);
    mockActions.getCardById.mockReturnValue(testCard);
    
    const playerCard = {
      cardId: testCard.id,
      isRevealed: true,
      isKnownToPlayer: true
    };

    render(
      <TestWrapper>
        <PlayingCard
          playerCard={playerCard}
          cardIndex={0}
          playerId="player1"
          showAsOpponent={false}
          isCurrentPlayer={false}
          isHumanPlayer={true}
        />
      </TestWrapper>
    );

    const rankElements = screen.getAllByTestId(/card-rank-/);
    rankElements.forEach(element => {
      expect(element).toHaveClass('font-mono');
    });
  });

  test('card center symbols are large and prominent', () => {
    const testCard = createMockCard('5', 'hearts', 5);
    mockActions.getCardById.mockReturnValue(testCard);
    
    const playerCard = {
      cardId: testCard.id,
      isRevealed: true,
      isKnownToPlayer: true
    };

    render(
      <TestWrapper>
        <PlayingCard
          playerCard={playerCard}
          cardIndex={0}
          playerId="player1"
          showAsOpponent={false}
          isCurrentPlayer={false}
          isHumanPlayer={true}
        />
      </TestWrapper>
    );

    const centerArea = screen.getByTestId('card-center');
    const suitSymbol = centerArea.querySelector('.text-5xl');
    
    expect(suitSymbol).toBeInTheDocument();
    expect(suitSymbol).toHaveClass('font-bold', 'drop-shadow-sm');
  });

  test('card contrast and readability', () => {
    const redCard = createMockCard('ace', 'hearts', 1);
    mockActions.getCardById.mockReturnValue(redCard);
    
    const playerCard = {
      cardId: redCard.id,
      isRevealed: true,
      isKnownToPlayer: true
    };

    render(
      <TestWrapper>
        <PlayingCard
          playerCard={playerCard}
          cardIndex={0}
          playerId="player1"
          showAsOpponent={false}
          isCurrentPlayer={false}
          isHumanPlayer={true}
        />
      </TestWrapper>
    );

    const cardFace = screen.getByTestId('card-face');
    expect(cardFace).toHaveClass('bg-white'); // White background for contrast
    
    const suitSymbols = screen.getAllByTestId('card-suit');
    expect(suitSymbols[0]).toHaveClass('text-red-600'); // Red for hearts/diamonds
  });

  test('card face vs card back rendering', () => {
    const testCard = createMockCard('king', 'spades', -2);
    mockActions.getCardById.mockReturnValue(testCard);
    
    // Test revealed card (should show face)
    const revealedCard = {
      cardId: testCard.id,
      isRevealed: true,
      isKnownToPlayer: true
    };

    const { rerender } = render(
      <TestWrapper>
        <PlayingCard
          playerCard={revealedCard}
          cardIndex={0}
          playerId="player1"
          showAsOpponent={false}
          isCurrentPlayer={false}
          isHumanPlayer={true}
        />
      </TestWrapper>
    );

    expect(screen.getByTestId('card-face')).toBeInTheDocument();
    expect(screen.queryByTestId('card-back')).not.toBeInTheDocument();

    // Test hidden card (should show back)
    const hiddenCard = {
      cardId: testCard.id,
      isRevealed: false,
      isKnownToPlayer: false
    };

    rerender(
      <TestWrapper>
        <PlayingCard
          playerCard={hiddenCard}
          cardIndex={0}
          playerId="player1"
          showAsOpponent={true}
          isCurrentPlayer={false}
          isHumanPlayer={false}
        />
      </TestWrapper>
    );

    expect(screen.queryByTestId('card-face')).not.toBeInTheDocument();
    expect(screen.getByTestId('card-back')).toBeInTheDocument();
  });

  test('special card indicator animation', () => {
    const specialCard = createMockCard('jack', 'clubs', 11, true);
    mockActions.getCardById.mockReturnValue(specialCard);
    
    const playerCard = {
      cardId: specialCard.id,
      isRevealed: true,
      isKnownToPlayer: true
    };

    render(
      <TestWrapper>
        <PlayingCard
          playerCard={playerCard}
          cardIndex={0}
          playerId="player1"
          showAsOpponent={false}
          isCurrentPlayer={false}
          isHumanPlayer={true}
        />
      </TestWrapper>
    );

    const indicator = screen.getByTestId('special-card-indicator');
    const innerGlow = indicator.querySelector('.animate-pulse');
    
    expect(innerGlow).toBeInTheDocument();
    expect(innerGlow).toHaveClass('bg-gold-300');
  });
});