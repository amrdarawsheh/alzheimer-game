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

const mockActions = {
  getCardById: vi.fn(() => ({ 
    id: 'test-card',
    rank: 'ace',
    suit: 'spades',
    value: 1,
    isSpecial: false
  })),
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

describe('Card Back Design', () => {
  const mockPlayerCard = {
    cardId: 'test-card',
    isRevealed: false,
    isKnownToPlayer: false
  };

  test('card back renders without CARD text', () => {
    render(
      <TestWrapper>
        <PlayingCard
          playerCard={mockPlayerCard}
          cardIndex={0}
          playerId="player1"
          showAsOpponent={true}
          isCurrentPlayer={false}
          isHumanPlayer={false}
        />
      </TestWrapper>
    );
    
    expect(screen.queryByText('CARD')).not.toBeInTheDocument();
    expect(screen.getByTestId('card-back')).toBeInTheDocument();
  });

  test('card back has proper gradient background', () => {
    render(
      <TestWrapper>
        <PlayingCard
          playerCard={mockPlayerCard}
          cardIndex={0}
          playerId="player1"
          showAsOpponent={true}
          isCurrentPlayer={false}
          isHumanPlayer={false}
        />
      </TestWrapper>
    );
    
    const cardBack = screen.getByTestId('card-back');
    const cardBackInner = cardBack.querySelector('.back-inner');
    
    expect(cardBackInner).toBeInTheDocument();
    expect(cardBackInner).toHaveClass('back-inner');
  });

  test('card back maintains consistent dimensions across sizes', () => {
    const { container, rerender } = render(
      <TestWrapper>
        <div className="w-12 h-16">
          <PlayingCard
            playerCard={mockPlayerCard}
            cardIndex={0}
            playerId="player1"
            showAsOpponent={true}
            isCurrentPlayer={false}
            isHumanPlayer={false}
          />
        </div>
      </TestWrapper>
    );
    
    const smallCard = container.querySelector('[data-testid="card-back"]');
    expect(smallCard).toBeInTheDocument();

    rerender(
      <TestWrapper>
        <div className="w-20 h-28">
          <PlayingCard
            playerCard={mockPlayerCard}
            cardIndex={0}
            playerId="player1"
            showAsOpponent={true}
            isCurrentPlayer={false}
            isHumanPlayer={false}
          />
        </div>
      </TestWrapper>
    );
    
    const largeCard = container.querySelector('[data-testid="card-back"]');
    expect(largeCard).toBeInTheDocument();
  });

  test('card back has proper border and styling', () => {
    render(
      <TestWrapper>
        <PlayingCard
          playerCard={mockPlayerCard}
          cardIndex={0}
          playerId="player1"
          showAsOpponent={true}
          isCurrentPlayer={false}
          isHumanPlayer={false}
        />
      </TestWrapper>
    );
    
    const cardBack = screen.getByTestId('card-back');
    const cardBackInner = cardBack.querySelector('.back-inner');
    
    expect(cardBackInner).toBeInTheDocument();
    expect(cardBackInner).toHaveClass('back-inner');
  });

  test('card back has decorative pattern elements', () => {
    render(
      <TestWrapper>
        <PlayingCard
          playerCard={mockPlayerCard}
          cardIndex={0}
          playerId="player1"
          showAsOpponent={true}
          isCurrentPlayer={false}
          isHumanPlayer={false}
        />
      </TestWrapper>
    );
    
    const cardBack = screen.getByTestId('card-back');
    
    // Check for nested border pattern
    const borderPattern = cardBack.querySelector('.back-inner');
    expect(borderPattern).toBeInTheDocument();
    
    // Check for diamond pattern
    const diamondPattern = cardBack.querySelector('.main-diamond');
    expect(diamondPattern).toBeInTheDocument();
  });

  test('card back pattern is visible and well-structured', () => {
    render(
      <TestWrapper>
        <PlayingCard
          playerCard={mockPlayerCard}
          cardIndex={0}
          playerId="player1"
          showAsOpponent={true}
          isCurrentPlayer={false}
          isHumanPlayer={false}
        />
      </TestWrapper>
    );
    
    const cardBack = screen.getByTestId('card-back');
    
    // Should have nested structure for depth
    const nestedElements = cardBack.querySelectorAll('.corner-accent');
    expect(nestedElements.length).toBeGreaterThan(0);
    
    // Should have diamond elements
    const diamondElements = cardBack.querySelectorAll('.main-diamond');
    expect(diamondElements.length).toBeGreaterThan(0);
  });

  test('card back vs card face rendering', () => {
    // Test hidden card (card back)
    const { rerender } = render(
      <TestWrapper>
        <PlayingCard
          playerCard={{ ...mockPlayerCard, isRevealed: false }}
          cardIndex={0}
          playerId="player1"
          showAsOpponent={true}
          isCurrentPlayer={false}
          isHumanPlayer={false}
        />
      </TestWrapper>
    );
    
    expect(screen.getByTestId('card-back')).toBeInTheDocument();
    expect(screen.queryByText('A')).not.toBeInTheDocument(); // No rank showing
    
    // Test revealed card (card face)
    rerender(
      <TestWrapper>
        <PlayingCard
          playerCard={{ ...mockPlayerCard, isRevealed: true }}
          cardIndex={0}
          playerId="player1"
          showAsOpponent={false}
          isCurrentPlayer={false}
          isHumanPlayer={true}
        />
      </TestWrapper>
    );
    
    expect(screen.queryByTestId('card-back')).not.toBeInTheDocument();
    expect(screen.getByTestId('card-rank-tl')).toHaveTextContent('A'); // Rank should show
  });

  test('card back appearance is professional and casino-like', () => {
    render(
      <TestWrapper>
        <PlayingCard
          playerCard={mockPlayerCard}
          cardIndex={0}
          playerId="player1"
          showAsOpponent={true}
          isCurrentPlayer={false}
          isHumanPlayer={false}
        />
      </TestWrapper>
    );
    
    const cardBack = screen.getByTestId('card-back');
    
    // Should use blue color scheme (classic card back colors)
    const innerElement = cardBack.querySelector('.back-inner');
    expect(innerElement).toBeInTheDocument();
    
    // Should have proper casino-style styling
    const gradientElement = cardBack.querySelector('.back-inner');
    expect(gradientElement).toBeInTheDocument();
    
    // Should have diamond pattern for professional appearance
    const diamondElement = cardBack.querySelector('.main-diamond');
    expect(diamondElement).toBeInTheDocument();
  });

  test('card back design enhances user experience', () => {
    render(
      <TestWrapper>
        <PlayingCard
          playerCard={mockPlayerCard}
          cardIndex={0}
          playerId="player1"
          showAsOpponent={true}
          isCurrentPlayer={false}
          isHumanPlayer={false}
        />
      </TestWrapper>
    );
    
    const cardBack = screen.getByTestId('card-back');
    
    // Should be visually interesting (not plain)
    const decorativeElements = cardBack.querySelectorAll('.corner-accent, .main-diamond');
    expect(decorativeElements.length).toBeGreaterThan(2);
    
    // Should have diamond pattern structure
    const diamondPattern = cardBack.querySelector('.main-diamond');
    expect(diamondPattern).toBeInTheDocument();
  });

  test('card back works with casino color system', () => {
    render(
      <TestWrapper>
        <PlayingCard
          playerCard={mockPlayerCard}
          cardIndex={0}
          playerId="player1"
          showAsOpponent={true}
          isCurrentPlayer={false}
          isHumanPlayer={false}
        />
      </TestWrapper>
    );
    
    const cardBack = screen.getByTestId('card-back');
    
    // Should integrate with casino gradient background
    const gradientBg = cardBack.querySelector('.back-inner');
    expect(gradientBg).toBeInTheDocument();
    
    // Blue theme should complement casino green table
    const diamondAccents = cardBack.querySelectorAll('.corner-accent');
    expect(diamondAccents.length).toBeGreaterThan(0);
  });
});