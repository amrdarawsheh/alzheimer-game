# Sprint 2: UI/UX Implementation - Microtask Breakdown

## 🎯 **Sprint 2 Overview**

**Goal**: Transform the functional game foundation into a visually appealing, professional card game interface  
**Duration**: Week 2 (7 days)  
**Effort**: 12-15 hours total  
**Focus**: User Interface, User Experience, Visual Design  

---

## 📋 **Day-by-Day Microtask Plan**

### **Day 8-9: Theme & Color Foundation**

#### **Microtask 2.1: Configure Casino Color Palette** 
**Priority**: Critical | **Estimated**: 45 minutes | **Dependencies**: None

**Acceptance Criteria:**
- [ ] Extend Tailwind config with casino-themed colors
- [ ] Define primary (casino green), secondary (card red), accent (gold) colors
- [ ] Add neutral browns and creams for backgrounds
- [ ] Create color variables for consistency
- [ ] Test color accessibility (contrast ratios)

**Implementation Steps:**
```typescript
// tailwind.config.js additions
theme: {
  extend: {
    colors: {
      casino: {
        green: { 50: '#f0fdf4', 500: '#0F7B0F', 900: '#1B5E20' },
        red: { 500: '#D32F2F', 900: '#B71C1C' },
        gold: { 500: '#FFD700', 600: '#FFC107' }
      }
    }
  }
}
```

**Testing:**
```typescript
// tests/ui/ColorSystem.test.tsx
describe('Casino Color System', () => {
  test('casino colors are available in Tailwind', () => {
    const element = render(<div className="bg-casino-green-500" />);
    expect(element.container.firstChild).toHaveClass('bg-casino-green-500');
  });

  test('color contrast meets accessibility standards', () => {
    // Test contrast ratios for all color combinations
    const whiteOnGreen = getContrastRatio('#ffffff', '#0F7B0F');
    expect(whiteOnGreen).toBeGreaterThan(4.5); // AA standard
  });

  test('all casino color variants exist', () => {
    const casinoColors = ['green-50', 'green-500', 'green-900', 'red-500', 'red-900', 'gold-500', 'gold-600'];
    casinoColors.forEach(color => {
      const element = render(<div className={`bg-casino-${color}`} />);
      expect(element.container.firstChild).toHaveClass(`bg-casino-${color}`);
    });
  });
});
```

**Definition of Done:**
- All casino colors available in Tailwind classes
- Color system documented
- Accessibility verified (AA compliance)
- Tests pass confirming color availability

---

#### **Microtask 2.2: Create Felt Table Background**
**Priority**: Critical | **Estimated**: 30 minutes | **Dependencies**: 2.1

**Acceptance Criteria:**
- [ ] Replace white background with casino green felt gradient
- [ ] Add subtle texture or pattern to simulate felt
- [ ] Create wood grain border effect (table edge)
- [ ] Ensure background doesn't interfere with card readability

**Implementation Focus:**
- CSS gradient from dark to light green
- Subtle noise texture or repeating pattern
- Border radius and shadow for table effect
- Background-attachment: fixed for stability

**Testing:**
```typescript
// tests/ui/GameBoard.test.tsx
describe('Casino Table Background', () => {
  test('game board has casino felt background', () => {
    render(<GameBoard />);
    const gameBoard = screen.getByTestId('game-board');
    expect(gameBoard).toHaveClass('casino-felt');
  });

  test('background gradient renders correctly', () => {
    render(<GameBoard />);
    const gameBoard = screen.getByTestId('game-board');
    const styles = window.getComputedStyle(gameBoard);
    expect(styles.background).toContain('gradient');
  });

  test('card readability maintained on new background', () => {
    render(<GameBoard><Card card={mockCard} /></GameBoard>);
    const card = screen.getByTestId('card');
    const cardStyles = window.getComputedStyle(card);
    
    // Verify card has sufficient contrast against background
    const cardBg = cardStyles.backgroundColor;
    const boardBg = window.getComputedStyle(screen.getByTestId('game-board')).backgroundColor;
    expect(getContrastRatio(cardBg, boardBg)).toBeGreaterThan(3); // Sufficient contrast
  });

  test('table border effect visible', () => {
    render(<GameBoard />);
    const gameBoard = screen.getByTestId('game-board');
    const styles = window.getComputedStyle(gameBoard);
    expect(styles.border).toBeDefined();
    expect(styles.borderRadius).toBeDefined();
  });
});
```

**Definition of Done:**
- Game board has realistic casino table appearance
- Background enhances rather than distracts from gameplay
- Responsive across different screen sizes
- Tests confirm visual elements render correctly

---

#### **Microtask 2.3: Enhance Typography System**
**Priority**: Medium | **Estimated**: 30 minutes | **Dependencies**: 2.1

**Acceptance Criteria:**
- [ ] Import casino-appropriate font (serif for elegance)
- [ ] Configure font hierarchy (h1, h2, body, card text)
- [ ] Ensure high contrast on new backgrounds
- [ ] Test readability on different devices

**Font Choices:**
- Headers: Playfair Display or Crimson Text (serif)
- Body: Inter or Open Sans (sans-serif)
- Cards: Roboto Mono (monospace for consistency)

**Testing:**
```typescript
// tests/ui/Typography.test.tsx
describe('Typography System', () => {
  test('custom fonts load correctly', async () => {
    render(<GameBoard />);
    
    // Wait for fonts to load
    await waitFor(() => {
      const heading = screen.getByRole('heading');
      const styles = window.getComputedStyle(heading);
      expect(styles.fontFamily).toContain('Playfair Display');
    });
  });

  test('font hierarchy is consistent', () => {
    render(
      <div>
        <h1>Game Title</h1>
        <h2>Round Info</h2>
        <p>Body text</p>
        <Card card={mockCard} />
      </div>
    );

    const h1 = screen.getByRole('heading', { level: 1 });
    const h2 = screen.getByRole('heading', { level: 2 });
    const p = screen.getByText('Body text');
    const card = screen.getByTestId('card');

    const h1Size = parseInt(window.getComputedStyle(h1).fontSize);
    const h2Size = parseInt(window.getComputedStyle(h2).fontSize);
    const pSize = parseInt(window.getComputedStyle(p).fontSize);

    expect(h1Size).toBeGreaterThan(h2Size);
    expect(h2Size).toBeGreaterThan(pSize);
  });

  test('text contrast meets accessibility standards', () => {
    render(<GameBoard />);
    const textElements = screen.getAllByText(/./);
    
    textElements.forEach(element => {
      const styles = window.getComputedStyle(element);
      const bgColor = styles.backgroundColor || styles.color;
      const textColor = styles.color;
      
      if (bgColor && textColor) {
        expect(getContrastRatio(textColor, bgColor)).toBeGreaterThan(4.5);
      }
    });
  });

  test('responsive font sizes work correctly', () => {
    // Test at different viewport sizes
    Object.defineProperty(window, 'innerWidth', { value: 768 });
    render(<Card card={mockCard} />);
    
    const cardText = screen.getByTestId('card-rank');
    const tabletSize = parseInt(window.getComputedStyle(cardText).fontSize);

    Object.defineProperty(window, 'innerWidth', { value: 1024 });
    render(<Card card={mockCard} />);
    
    const desktopSize = parseInt(window.getComputedStyle(cardText).fontSize);
    expect(desktopSize).toBeGreaterThanOrEqual(tabletSize);
  });
});
```

**Definition of Done:**
- Typography enhances game atmosphere
- All text readable on casino backgrounds
- Consistent font sizing scale
- Tests verify font loading and contrast

---

### **Day 10-11: Card Visual Design**

#### **Microtask 2.4: Design Card Back Pattern**
**Priority**: Critical | **Estimated**: 1 hour | **Dependencies**: 2.2

**Acceptance Criteria:**
- [ ] Replace "CARD" text with proper card back design
- [ ] Create blue/red gradient or geometric pattern
- [ ] Add subtle border and corner rounding
- [ ] Ensure consistent sizing across all card states

**Design Approach:**
```css
.card-back {
  background: linear-gradient(45deg, #1e3a8a, #dc2626);
  border: 2px solid #374151;
  border-radius: 8px;
  position: relative;
}

.card-back::before {
  content: '';
  background: repeating-linear-gradient(
    45deg,
    transparent,
    transparent 10px,
    rgba(255,255,255,0.1) 10px,
    rgba(255,255,255,0.1) 20px
  );
}
```

**Testing:**
```typescript
// tests/ui/CardBack.test.tsx
describe('Card Back Design', () => {
  test('card back renders without CARD text', () => {
    const hiddenCard = { ...mockCard, isRevealed: false };
    render(<Card card={hiddenCard} />);
    
    expect(screen.queryByText('CARD')).not.toBeInTheDocument();
    expect(screen.getByTestId('card-back')).toBeInTheDocument();
  });

  test('card back has proper gradient background', () => {
    const hiddenCard = { ...mockCard, isRevealed: false };
    render(<Card card={hiddenCard} />);
    
    const cardBack = screen.getByTestId('card-back');
    const styles = window.getComputedStyle(cardBack);
    expect(styles.background).toContain('gradient');
  });

  test('card back maintains consistent dimensions', () => {
    const hiddenCard = { ...mockCard, isRevealed: false };
    const { rerender } = render(<Card card={hiddenCard} size="small" />);
    
    const cardSmall = screen.getByTestId('card-back');
    const smallDimensions = {
      width: cardSmall.offsetWidth,
      height: cardSmall.offsetHeight
    };

    rerender(<Card card={hiddenCard} size="large" />);
    const cardLarge = screen.getByTestId('card-back');
    const largeDimensions = {
      width: cardLarge.offsetWidth,
      height: cardLarge.offsetHeight
    };

    expect(largeDimensions.width).toBeGreaterThan(smallDimensions.width);
    expect(largeDimensions.height).toBeGreaterThan(smallDimensions.height);
  });

  test('card back has proper border and border radius', () => {
    const hiddenCard = { ...mockCard, isRevealed: false };
    render(<Card card={hiddenCard} />);
    
    const cardBack = screen.getByTestId('card-back');
    const styles = window.getComputedStyle(cardBack);
    expect(styles.border).toBeDefined();
    expect(styles.borderRadius).toBeDefined();
  });

  test('card back pattern is visible', () => {
    const hiddenCard = { ...mockCard, isRevealed: false };
    render(<Card card={hiddenCard} />);
    
    const cardBack = screen.getByTestId('card-back');
    const pseudoStyles = window.getComputedStyle(cardBack, '::before');
    expect(pseudoStyles.background).toContain('repeating-linear-gradient');
  });
});
```

**Definition of Done:**
- Face-down cards look like real playing card backs
- Pattern is visually appealing but not distracting
- Consistent with casino aesthetic
- Tests verify visual elements and no text fallbacks

---

#### **Microtask 2.5: Implement Card Face Design**
**Priority**: Critical | **Estimated**: 1.5 hours | **Dependencies**: 2.4

**Acceptance Criteria:**
- [ ] Display proper suit symbols (♠♥♦♣) with correct colors
- [ ] Style rank display in corners (A, K, Q, J, 10, 9, etc.)
- [ ] Add point value in center of card
- [ ] Create proper card layout (top-left, bottom-right corners)
- [ ] Handle special cards (Jokers) with unique design

**Card Layout Structure:**
```tsx
<div className="card-face">
  <div className="card-corner-tl">
    <span className="rank">{rank}</span>
    <span className="suit">{suitSymbol}</span>
  </div>
  <div className="card-center">
    <span className="point-value">{pointValue}</span>
  </div>
  <div className="card-corner-br rotated">
    <span className="rank">{rank}</span>
    <span className="suit">{suitSymbol}</span>
  </div>
</div>
```

**Testing:**
```typescript
// tests/ui/CardFace.test.tsx
describe('Card Face Design', () => {
  test('card displays correct suit symbols with proper colors', () => {
    const heartsCard = { ...mockCard, suit: 'hearts', rank: 'A' };
    const spadesCard = { ...mockCard, suit: 'spades', rank: 'K' };
    
    render(<Card card={heartsCard} />);
    const heartsSuit = screen.getByTestId('card-suit');
    expect(heartsSuit).toHaveTextContent('♥');
    expect(heartsSuit).toHaveClass('text-red-600'); // Red suit

    render(<Card card={spadesCard} />);
    const spadesSuit = screen.getByTestId('card-suit');
    expect(spadesSuit).toHaveTextContent('♠');
    expect(spadesSuit).toHaveClass('text-black'); // Black suit
  });

  test('card rank displays correctly in corners', () => {
    const aceCard = { ...mockCard, rank: 'A' };
    render(<Card card={aceCard} />);
    
    const topLeftRank = screen.getByTestId('card-rank-tl');
    const bottomRightRank = screen.getByTestId('card-rank-br');
    
    expect(topLeftRank).toHaveTextContent('A');
    expect(bottomRightRank).toHaveTextContent('A');
    expect(bottomRightRank).toHaveClass('rotated');
  });

  test('point value displays in center', () => {
    const kingCard = { ...mockCard, rank: 'K', value: -2 };
    render(<Card card={kingCard} />);
    
    const pointValue = screen.getByTestId('card-point-value');
    expect(pointValue).toHaveTextContent('-2');
  });

  test('special cards have unique styling', () => {
    const jokerCard = { ...mockCard, rank: 'Joker', value: -4, isSpecial: true };
    render(<Card card={jokerCard} />);
    
    const cardElement = screen.getByTestId('card');
    expect(cardElement).toHaveClass('special-card');
    
    const pointValue = screen.getByTestId('card-point-value');
    expect(pointValue).toHaveTextContent('-4');
    expect(pointValue).toHaveClass('special-value');
  });

  test('all card types render correctly', () => {
    const testCards = [
      { rank: 'A', suit: 'hearts', value: 1 },
      { rank: '10', suit: 'diamonds', value: 0 },
      { rank: 'J', suit: 'clubs', value: 11 },
      { rank: 'Q', suit: 'spades', value: 12 },
      { rank: 'K', suit: 'hearts', value: -2 },
      { rank: 'Joker', suit: null, value: -4, isSpecial: true }
    ];

    testCards.forEach(cardData => {
      const card = { ...mockCard, ...cardData };
      render(<Card card={card} />);
      
      if (card.rank !== 'Joker') {
        expect(screen.getByTestId('card-rank-tl')).toHaveTextContent(card.rank);
        expect(screen.getByTestId('card-suit')).toBeInTheDocument();
      }
      expect(screen.getByTestId('card-point-value')).toHaveTextContent(card.value.toString());
    });
  });

  test('card layout is properly structured', () => {
    render(<Card card={mockCard} />);
    
    expect(screen.getByTestId('card-corner-tl')).toBeInTheDocument();
    expect(screen.getByTestId('card-center')).toBeInTheDocument();
    expect(screen.getByTestId('card-corner-br')).toBeInTheDocument();
  });
});
```

**Definition of Done:**
- Cards look like authentic playing cards
- All suits display with correct colors (red/black)
- Point values clearly visible
- Special cards (King=-2, Joker=-4) highlighted
- Tests verify all card types render correctly

---

#### **Microtask 2.6: Add Card Interaction States**
**Priority**: High | **Estimated**: 45 minutes | **Dependencies**: 2.5

**Acceptance Criteria:**
- [ ] Hover effects for selectable cards (subtle glow)
- [ ] Selection highlighting (yellow/gold border)
- [ ] Disabled state styling (grayed out)
- [ ] Smooth transitions between states (200ms)

**Interaction Design:**
```css
.card-selectable:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(255, 215, 0, 0.3);
  transition: all 0.2s ease;
}

.card-selected {
  border: 3px solid #FFD700;
  box-shadow: 0 0 20px rgba(255, 215, 0, 0.5);
}
```

**Testing:**
```typescript
// tests/ui/CardInteractions.test.tsx
describe('Card Interaction States', () => {
  test('selectable cards have hover effects', async () => {
    const selectableCard = { ...mockCard, isSelectable: true };
    render(<Card card={selectableCard} />);
    
    const cardElement = screen.getByTestId('card');
    expect(cardElement).toHaveClass('card-selectable');
    
    fireEvent.mouseEnter(cardElement);
    await waitFor(() => {
      const styles = window.getComputedStyle(cardElement);
      expect(styles.transform).toContain('translateY');
      expect(styles.boxShadow).toBeDefined();
    });
  });

  test('selected cards show highlighting', () => {
    const selectedCard = { ...mockCard, isSelected: true };
    render(<Card card={selectedCard} />);
    
    const cardElement = screen.getByTestId('card');
    expect(cardElement).toHaveClass('card-selected');
    
    const styles = window.getComputedStyle(cardElement);
    expect(styles.borderColor).toContain('rgb(255, 215, 0)'); // Gold
  });

  test('disabled cards have proper styling', () => {
    const disabledCard = { ...mockCard, isDisabled: true };
    render(<Card card={disabledCard} />);
    
    const cardElement = screen.getByTestId('card');
    expect(cardElement).toHaveClass('card-disabled');
    expect(cardElement).toHaveAttribute('aria-disabled', 'true');
    
    const styles = window.getComputedStyle(cardElement);
    expect(styles.opacity).toBe('0.5');
  });

  test('transitions are smooth and defined', () => {
    const selectableCard = { ...mockCard, isSelectable: true };
    render(<Card card={selectableCard} />);
    
    const cardElement = screen.getByTestId('card');
    const styles = window.getComputedStyle(cardElement);
    expect(styles.transition).toContain('0.2s');
  });

  test('click handlers work correctly', () => {
    const mockOnClick = jest.fn();
    const clickableCard = { ...mockCard, isSelectable: true };
    render(<Card card={clickableCard} onClick={mockOnClick} />);
    
    const cardElement = screen.getByTestId('card');
    fireEvent.click(cardElement);
    expect(mockOnClick).toHaveBeenCalledWith(clickableCard);
  });

  test('disabled cards do not respond to clicks', () => {
    const mockOnClick = jest.fn();
    const disabledCard = { ...mockCard, isDisabled: true };
    render(<Card card={disabledCard} onClick={mockOnClick} />);
    
    const cardElement = screen.getByTestId('card');
    fireEvent.click(cardElement);
    expect(mockOnClick).not.toHaveBeenCalled();
  });

  test('accessibility attributes are correct', () => {
    const selectableCard = { ...mockCard, isSelectable: true };
    render(<Card card={selectableCard} />);
    
    const cardElement = screen.getByTestId('card');
    expect(cardElement).toHaveAttribute('role', 'button');
    expect(cardElement).toHaveAttribute('tabIndex', '0');
    
    // Test keyboard interaction
    fireEvent.keyDown(cardElement, { key: 'Enter' });
    // Should trigger same behavior as click
  });
});
```

**Definition of Done:**
- Clear visual feedback for all card interactions
- Smooth, professional transitions
- Accessibility maintained (focus indicators)
- Tests verify all interaction states

---

### **Day 12-13: Game Board Layout**

#### **Microtask 2.7: Redesign Player Areas**
**Priority**: Critical | **Estimated**: 1.5 hours | **Dependencies**: 2.6

**Acceptance Criteria:**
- [ ] Position human player at bottom with larger, clearer cards
- [ ] Arrange opponents around the table (top, left, right)
- [ ] Add player name styling with current turn indicators
- [ ] Create visual separation between player areas
- [ ] Implement responsive sizing for different screen sizes

**Layout Structure:**
```tsx
<div className="game-board casino-felt">
  <div className="opponent-area opponent-top">
    <PlayerArea position="top" />
  </div>
  <div className="opponent-sides">
    <PlayerArea position="left" />
    <div className="central-area" />
    <PlayerArea position="right" />
  </div>
  <div className="human-player-area">
    <PlayerArea position="bottom" isHuman />
  </div>
</div>
```

**Testing:**
```typescript
// tests/ui/PlayerAreas.test.tsx
describe('Player Areas Layout', () => {
  test('human player positioned at bottom with larger cards', () => {
    const mockGameState = createMockGameWithPlayers(4);
    render(<GameBoard gameState={mockGameState} />);
    
    const humanPlayerArea = screen.getByTestId('player-area-human');
    expect(humanPlayerArea).toHaveClass('human-player-area');
    
    const humanCards = within(humanPlayerArea).getAllByTestId('card');
    const humanCardSize = humanCards[0].offsetWidth;
    
    const opponentArea = screen.getByTestId('player-area-0');
    const opponentCards = within(opponentArea).getAllByTestId('card');
    const opponentCardSize = opponentCards[0].offsetWidth;
    
    expect(humanCardSize).toBeGreaterThan(opponentCardSize);
  });

  test('opponents positioned correctly around table', () => {
    const mockGameState = createMockGameWithPlayers(4);
    render(<GameBoard gameState={mockGameState} />);
    
    expect(screen.getByTestId('opponent-top')).toBeInTheDocument();
    expect(screen.getByTestId('opponent-left')).toBeInTheDocument();
    expect(screen.getByTestId('opponent-right')).toBeInTheDocument();
  });

  test('current turn indicator shows correctly', () => {
    const mockGameState = createMockGameWithPlayers(3);
    mockGameState.round.currentPlayerIndex = 1;
    render(<GameBoard gameState={mockGameState} />);
    
    const currentPlayer = screen.getByTestId('player-area-1');
    expect(currentPlayer).toHaveClass('current-turn');
    
    const indicator = within(currentPlayer).getByTestId('turn-indicator');
    expect(indicator).toBeVisible();
  });

  test('player names display with proper styling', () => {
    const mockGameState = createMockGameWithPlayers(2);
    render(<GameBoard gameState={mockGameState} />);
    
    mockGameState.players.forEach((player, index) => {
      const playerArea = screen.getByTestId(`player-area-${index}`);
      const playerName = within(playerArea).getByTestId('player-name');
      expect(playerName).toHaveTextContent(player.name);
      expect(playerName).toHaveClass('player-name-styling');
    });
  });

  test('visual separation between player areas', () => {
    const mockGameState = createMockGameWithPlayers(4);
    render(<GameBoard gameState={mockGameState} />);
    
    const playerAreas = screen.getAllByTestId(/player-area-/);
    playerAreas.forEach(area => {
      const styles = window.getComputedStyle(area);
      expect(styles.margin || styles.padding).toBeDefined();
    });
  });

  test('responsive sizing works correctly', () => {
    const mockGameState = createMockGameWithPlayers(3);
    
    // Test mobile size
    Object.defineProperty(window, 'innerWidth', { value: 768 });
    const { rerender } = render(<GameBoard gameState={mockGameState} />);
    
    const mobileCard = screen.getAllByTestId('card')[0];
    const mobileSize = mobileCard.offsetWidth;
    
    // Test desktop size
    Object.defineProperty(window, 'innerWidth', { value: 1024 });
    rerender(<GameBoard gameState={mockGameState} />);
    
    const desktopCard = screen.getAllByTestId('card')[0];
    const desktopSize = desktopCard.offsetWidth;
    
    expect(desktopSize).toBeGreaterThanOrEqual(mobileSize);
  });

  test('player areas handle different player counts', () => {
    [2, 3, 4].forEach(playerCount => {
      const mockGameState = createMockGameWithPlayers(playerCount);
      render(<GameBoard gameState={mockGameState} />);
      
      const playerAreas = screen.getAllByTestId(/player-area-/);
      expect(playerAreas).toHaveLength(playerCount);
      
      // Verify layout adapts to player count
      if (playerCount === 2) {
        expect(screen.queryByTestId('opponent-left')).not.toBeInTheDocument();
        expect(screen.queryByTestId('opponent-right')).not.toBeInTheDocument();
      }
    });
  });
});
```

**Definition of Done:**
- Players clearly positioned around casino table
- Human player area prominent and accessible
- Responsive layout works on tablets and mobile
- Visual hierarchy guides attention properly
- Tests verify layout for all player counts

---

#### **Microtask 2.8: Style Central Game Area**
**Priority**: High | **Estimated**: 1 hour | **Dependencies**: 2.7

**Acceptance Criteria:**
- [ ] Position deck and discard pile in table center
- [ ] Style deck with card count display
- [ ] Make discard pile top card clearly visible
- [ ] Add click affordances (subtle hover effects)
- [ ] Create focal point with proper spacing

**Central Design:**
```tsx
<div className="central-area">
  <div className="deck-area">
    <div className="draw-pile" onClick={handleDrawDeck}>
      <CardBack />
      <span className="card-count">{deckCount}</span>
    </div>
    <div className="discard-pile" onClick={handleDrawDiscard}>
      <Card card={topDiscardCard} />
    </div>
  </div>
  <div className="game-status">
    <span className="phase-indicator">{gamePhase}</span>
    <span className="turn-indicator">{currentPlayer}</span>
  </div>
</div>
```

**Testing:**
```typescript
// tests/ui/CentralArea.test.tsx
describe('Central Game Area', () => {
  test('deck and discard pile positioned in center', () => {
    const mockGameState = createMockGameState();
    render(<GameBoard gameState={mockGameState} />);
    
    const centralArea = screen.getByTestId('central-area');
    const drawPile = screen.getByTestId('draw-pile');
    const discardPile = screen.getByTestId('discard-pile');
    
    expect(centralArea).toContainElement(drawPile);
    expect(centralArea).toContainElement(discardPile);
    
    // Verify central positioning
    const centralStyles = window.getComputedStyle(centralArea);
    expect(centralStyles.display).toBe('flex');
    expect(centralStyles.justifyContent).toContain('center');
  });

  test('deck shows card count correctly', () => {
    const mockGameState = createMockGameState();
    mockGameState.deck.drawPile = Array(23).fill('card');
    render(<GameBoard gameState={mockGameState} />);
    
    const cardCount = screen.getByTestId('deck-card-count');
    expect(cardCount).toHaveTextContent('23');
  });

  test('discard pile shows top card', () => {
    const mockGameState = createMockGameState();
    const topCard = { id: 'top-card', rank: 'A', suit: 'hearts', value: 1 };
    mockGameState.deck.discardPile = [topCard];
    render(<GameBoard gameState={mockGameState} />);
    
    const discardPile = screen.getByTestId('discard-pile');
    const topCardElement = within(discardPile).getByTestId('card');
    expect(topCardElement).toBeInTheDocument();
  });

  test('click affordances work for deck interactions', async () => {
    const mockOnDrawDeck = jest.fn();
    const mockOnDrawDiscard = jest.fn();
    const mockGameState = createMockGameState();
    
    render(
      <GameBoard 
        gameState={mockGameState} 
        onDrawDeck={mockOnDrawDeck}
        onDrawDiscard={mockOnDrawDiscard}
      />
    );
    
    const drawPile = screen.getByTestId('draw-pile');
    const discardPile = screen.getByTestId('discard-pile');
    
    // Test hover effects
    fireEvent.mouseEnter(drawPile);
    await waitFor(() => {
      expect(drawPile).toHaveClass('hover:scale-105');
    });
    
    // Test click handlers
    fireEvent.click(drawPile);
    expect(mockOnDrawDeck).toHaveBeenCalled();
    
    fireEvent.click(discardPile);
    expect(mockOnDrawDiscard).toHaveBeenCalled();
  });

  test('game status displays correctly', () => {
    const mockGameState = createMockGameState();
    mockGameState.round.phase = 'playing';
    mockGameState.players[1].isActive = true;
    render(<GameBoard gameState={mockGameState} />);
    
    const phaseIndicator = screen.getByTestId('phase-indicator');
    const turnIndicator = screen.getByTestId('turn-indicator');
    
    expect(phaseIndicator).toHaveTextContent('Playing');
    expect(turnIndicator).toHaveTextContent(mockGameState.players[1].name);
  });

  test('central area creates proper focal point', () => {
    const mockGameState = createMockGameState();
    render(<GameBoard gameState={mockGameState} />);
    
    const centralArea = screen.getByTestId('central-area');
    const styles = window.getComputedStyle(centralArea);
    
    // Should have proper spacing and visual emphasis
    expect(styles.padding).toBeDefined();
    expect(styles.margin).toBeDefined();
    
    // Should be visually distinct
    const backgroundColor = styles.backgroundColor;
    expect(backgroundColor).toBeDefined();
  });

  test('responsive spacing works on different screen sizes', () => {
    const mockGameState = createMockGameState();
    
    // Test mobile
    Object.defineProperty(window, 'innerWidth', { value: 768 });
    const { rerender } = render(<GameBoard gameState={mockGameState} />);
    
    const mobileCentral = screen.getByTestId('central-area');
    const mobileStyles = window.getComputedStyle(mobileCentral);
    
    // Test desktop
    Object.defineProperty(window, 'innerWidth', { value: 1024 });
    rerender(<GameBoard gameState={mockGameState} />);
    
    const desktopCentral = screen.getByTestId('central-area');
    const desktopStyles = window.getComputedStyle(desktopCentral);
    
    // Spacing should adapt to screen size
    expect(desktopStyles.padding).toBeDefined();
    expect(mobileStyles.padding).toBeDefined();
  });
});
```

**Definition of Done:**
- Central area is clear focal point
- Deck and discard piles easily distinguishable
- Game status prominently displayed
- Interactive elements clearly afforded
- Tests verify all central area functionality

---

### **Day 14: Action Buttons & Controls**

#### **Microtask 2.9: Design Action Button System**
**Priority**: Critical | **Estimated**: 1 hour | **Dependencies**: 2.8

**Acceptance Criteria:**
- [ ] Create button hierarchy (primary, secondary, danger)
- [ ] Style "Draw from Deck", "Draw from Discard" buttons
- [ ] Design "Call Stop" as prominent danger button
- [ ] Add "Replace Card" buttons for each position
- [ ] Implement button states (enabled, disabled, highlighted)

**Button Design System:**
```css
.btn-primary {
  @apply bg-casino-green-500 hover:bg-casino-green-600 text-white;
  @apply px-6 py-3 rounded-lg font-semibold shadow-lg;
  @apply transform hover:scale-105 transition-all duration-200;
}

.btn-danger {
  @apply bg-casino-red-500 hover:bg-casino-red-600 text-white;
  @apply border-2 border-casino-red-700 shadow-xl;
}

.btn-disabled {
  @apply bg-gray-400 cursor-not-allowed opacity-50;
}
```

**Testing:**
```typescript
// tests/ui/ActionButtons.test.tsx
describe('Action Button System', () => {
  test('button hierarchy styles correctly', () => {
    render(
      <div>
        <button className="btn-primary" data-testid="primary-btn">Primary</button>
        <button className="btn-secondary" data-testid="secondary-btn">Secondary</button>
        <button className="btn-danger" data-testid="danger-btn">Danger</button>
      </div>
    );
    
    const primaryBtn = screen.getByTestId('primary-btn');
    const secondaryBtn = screen.getByTestId('secondary-btn');
    const dangerBtn = screen.getByTestId('danger-btn');
    
    expect(primaryBtn).toHaveClass('bg-casino-green-500');
    expect(dangerBtn).toHaveClass('bg-casino-red-500');
    expect(secondaryBtn).toHaveClass('btn-secondary');
  });

  test('draw action buttons render correctly', () => {
    const mockGameState = createMockGameState();
    render(<ActionButtons gameState={mockGameState} />);
    
    const drawDeckBtn = screen.getByTestId('draw-deck-btn');
    const drawDiscardBtn = screen.getByTestId('draw-discard-btn');
    
    expect(drawDeckBtn).toHaveTextContent('Draw from Deck');
    expect(drawDiscardBtn).toHaveTextContent('Draw from Discard');
    
    // Verify they have proper styling
    expect(drawDeckBtn).toHaveClass('btn-primary');
    expect(drawDiscardBtn).toHaveClass('btn-primary');
  });

  test('stop button has danger styling', () => {
    const mockGameState = createMockGameState();
    render(<ActionButtons gameState={mockGameState} />);
    
    const stopBtn = screen.getByTestId('stop-btn');
    expect(stopBtn).toHaveTextContent('Call Stop');
    expect(stopBtn).toHaveClass('btn-danger');
  });

  test('replace card buttons show for each position', () => {
    const mockGameState = createMockGameState();
    const humanPlayer = mockGameState.players.find(p => p.type === 'human');
    humanPlayer.cards = Array(4).fill({ id: 'card', isRevealed: false });
    
    render(<ActionButtons gameState={mockGameState} />);
    
    [1, 2, 3, 4].forEach(position => {
      const replaceBtn = screen.getByTestId(`replace-card-${position}-btn`);
      expect(replaceBtn).toHaveTextContent(`Replace Card ${position}`);
    });
  });

  test('button states work correctly', () => {
    const mockGameState = createMockGameState();
    mockGameState.deck.drawPile = []; // Empty deck
    
    render(<ActionButtons gameState={mockGameState} />);
    
    const drawDeckBtn = screen.getByTestId('draw-deck-btn');
    expect(drawDeckBtn).toBeDisabled();
    expect(drawDeckBtn).toHaveClass('btn-disabled');
  });

  test('hover effects work on enabled buttons', async () => {
    const mockGameState = createMockGameState();
    render(<ActionButtons gameState={mockGameState} />);
    
    const drawDeckBtn = screen.getByTestId('draw-deck-btn');
    
    fireEvent.mouseEnter(drawDeckBtn);
    await waitFor(() => {
      const styles = window.getComputedStyle(drawDeckBtn);
      expect(styles.transform).toContain('scale');
    });
  });

  test('disabled buttons do not respond to hover', () => {
    const mockGameState = createMockGameState();
    mockGameState.deck.drawPile = [];
    
    render(<ActionButtons gameState={mockGameState} />);
    
    const drawDeckBtn = screen.getByTestId('draw-deck-btn');
    expect(drawDeckBtn).toHaveClass('cursor-not-allowed');
    
    fireEvent.mouseEnter(drawDeckBtn);
    const styles = window.getComputedStyle(drawDeckBtn);
    expect(styles.transform).not.toContain('scale');
  });

  test('button click handlers work correctly', () => {
    const mockActions = {
      onDrawDeck: jest.fn(),
      onDrawDiscard: jest.fn(),
      onCallStop: jest.fn(),
      onReplaceCard: jest.fn()
    };
    
    const mockGameState = createMockGameState();
    render(<ActionButtons gameState={mockGameState} {...mockActions} />);
    
    fireEvent.click(screen.getByTestId('draw-deck-btn'));
    expect(mockActions.onDrawDeck).toHaveBeenCalled();
    
    fireEvent.click(screen.getByTestId('stop-btn'));
    expect(mockActions.onCallStop).toHaveBeenCalled();
  });

  test('buttons have proper accessibility attributes', () => {
    const mockGameState = createMockGameState();
    render(<ActionButtons gameState={mockGameState} />);
    
    const buttons = screen.getAllByRole('button');
    buttons.forEach(button => {
      expect(button).toHaveAttribute('type', 'button');
      if (button.disabled) {
        expect(button).toHaveAttribute('aria-disabled', 'true');
      }
    });
  });
});
```

**Definition of Done:**
- All game actions have clear, attractive buttons
- Button hierarchy guides user attention
- Disabled states prevent invalid actions
- Hover effects provide immediate feedback
- Tests verify all button states and interactions

---

#### **Microtask 2.10: Implement Game Status Display**
**Priority**: High | **Estimated**: 45 minutes | **Dependencies**: 2.9

**Acceptance Criteria:**
- [ ] Display current round and turn information
- [ ] Show round wins for each player
- [ ] Add phase indicators (Playing, Stop Called, etc.)
- [ ] Style with casino theme and good contrast
- [ ] Position for easy reference during play

**Status Display:**
```tsx
<div className="game-status-bar">
  <div className="round-info">
    Round {currentRound}/3 | Turn: {currentPlayer}
  </div>
  <div className="wins-tracker">
    {players.map(player => (
      <span key={player.id} className="player-wins">
        {player.name}: {player.roundWins}★
      </span>
    ))}
  </div>
  <div className="phase-indicator">
    {gamePhase === 'stop-called' && (
      <span className="stop-warning">STOP CALLED - Final Turns!</span>
    )}
  </div>
</div>
```

**Testing:**
```typescript
// tests/ui/GameStatusDisplay.test.tsx
describe('Game Status Display', () => {
  test('displays current round and turn information', () => {
    const mockGameState = createMockGameState();
    mockGameState.match.currentRound = 2;
    mockGameState.players[1].isActive = true;
    
    render(<GameStatusDisplay gameState={mockGameState} />);
    
    const roundInfo = screen.getByTestId('round-info');
    expect(roundInfo).toHaveTextContent('Round 2/3');
    expect(roundInfo).toHaveTextContent(`Turn: ${mockGameState.players[1].name}`);
  });

  test('shows round wins for each player', () => {
    const mockGameState = createMockGameState();
    mockGameState.players[0].roundWins = 2;
    mockGameState.players[1].roundWins = 1;
    
    render(<GameStatusDisplay gameState={mockGameState} />);
    
    const winsTracker = screen.getByTestId('wins-tracker');
    expect(winsTracker).toHaveTextContent(`${mockGameState.players[0].name}: 2★`);
    expect(winsTracker).toHaveTextContent(`${mockGameState.players[1].name}: 1★`);
  });

  test('displays phase indicators correctly', () => {
    const mockGameState = createMockGameState();
    
    // Test playing phase
    mockGameState.round.phase = 'playing';
    const { rerender } = render(<GameStatusDisplay gameState={mockGameState} />);
    
    expect(screen.queryByTestId('stop-warning')).not.toBeInTheDocument();
    
    // Test stop called phase
    mockGameState.round.phase = 'stop-called';
    rerender(<GameStatusDisplay gameState={mockGameState} />);
    
    const stopWarning = screen.getByTestId('stop-warning');
    expect(stopWarning).toHaveTextContent('STOP CALLED - Final Turns!');
    expect(stopWarning).toHaveClass('stop-warning');
  });

  test('styling has proper contrast and theme', () => {
    const mockGameState = createMockGameState();
    render(<GameStatusDisplay gameState={mockGameState} />);
    
    const statusBar = screen.getByTestId('game-status-bar');
    const styles = window.getComputedStyle(statusBar);
    
    // Should have casino theme styling
    expect(statusBar).toHaveClass('casino-themed');
    
    // Text should have good contrast
    const textColor = styles.color;
    const backgroundColor = styles.backgroundColor;
    if (textColor && backgroundColor) {
      expect(getContrastRatio(textColor, backgroundColor)).toBeGreaterThan(4.5);
    }
  });

  test('positioned for easy reference during play', () => {
    const mockGameState = createMockGameState();
    render(<GameBoard gameState={mockGameState} />);
    
    const statusBar = screen.getByTestId('game-status-bar');
    const styles = window.getComputedStyle(statusBar);
    
    // Should be positioned prominently (top or header area)
    expect(styles.position).toBeDefined();
    expect(statusBar).toBeVisible();
  });

  test('updates dynamically with game state changes', () => {
    const mockGameState = createMockGameState();
    const { rerender } = render(<GameStatusDisplay gameState={mockGameState} />);
    
    // Change current player
    mockGameState.players[0].isActive = false;
    mockGameState.players[1].isActive = true;
    rerender(<GameStatusDisplay gameState={mockGameState} />);
    
    const roundInfo = screen.getByTestId('round-info');
    expect(roundInfo).toHaveTextContent(`Turn: ${mockGameState.players[1].name}`);
    
    // Change round
    mockGameState.match.currentRound = 3;
    rerender(<GameStatusDisplay gameState={mockGameState} />);
    
    expect(roundInfo).toHaveTextContent('Round 3/3');
  });

  test('handles edge cases gracefully', () => {
    const mockGameState = createMockGameState();
    
    // Test with no active player
    mockGameState.players.forEach(p => p.isActive = false);
    render(<GameStatusDisplay gameState={mockGameState} />);
    
    const roundInfo = screen.getByTestId('round-info');
    expect(roundInfo).toHaveTextContent('Turn: -'); // Or similar fallback
    
    // Test with maximum rounds
    mockGameState.match.currentRound = 5;
    const { rerender } = render(<GameStatusDisplay gameState={mockGameState} />);
    
    expect(roundInfo).toHaveTextContent('Round 5/3'); // Shows actual state
  });
});
```

**Definition of Done:**
- Game status always visible and clear
- Important information (stop called) prominently displayed
- Styling consistent with casino theme
- Tests verify all display states and updates

---

### **Day 15-16: Special Abilities & Modals**

#### **Microtask 2.11: Design Special Ability Modals**
**Priority**: High | **Estimated**: 1.5 hours | **Dependencies**: 2.10

**Acceptance Criteria:**
- [ ] Create Queen peek ability modal with card selection
- [ ] Design Jack swap ability modal with source/target selection
- [ ] Add backdrop blur effect and smooth animations
- [ ] Style with casino theme and clear instructions
- [ ] Include cancel and confirm actions

**Modal Structure:**
```tsx
<Modal isOpen={showPeekModal} onClose={cancelPeek}>
  <div className="special-ability-modal">
    <h2 className="modal-title">Queen Peek Ability</h2>
    <p className="instructions">
      Choose a card to peek at:
    </p>
    <div className="card-selection-grid">
      {allSelectableCards.map(card => (
        <CardButton 
          key={card.id}
          card={card}
          onClick={() => handlePeekCard(card)}
          className="selectable-card"
        />
      ))}
    </div>
    <div className="modal-actions">
      <button className="btn-secondary" onClick={cancelPeek}>
        Cancel
      </button>
      <button className="btn-primary" onClick={skipAbility}>
        Skip Ability
      </button>
    </div>
  </div>
</Modal>
```

**Testing:**
```typescript
// tests/ui/SpecialAbilityModals.test.tsx
describe('Special Ability Modals', () => {
  test('Queen peek modal renders correctly', () => {
    const mockGameState = createMockGameState();
    const mockActions = { onPeekCard: jest.fn(), onCancel: jest.fn() };
    
    render(
      <SpecialAbilityModal
        type="peek"
        isOpen={true}
        gameState={mockGameState}
        {...mockActions}
      />
    );
    
    expect(screen.getByText('Queen Peek Ability')).toBeInTheDocument();
    expect(screen.getByText(/Choose a card to peek at/)).toBeInTheDocument();
    
    const cancelBtn = screen.getByText('Cancel');
    const skipBtn = screen.getByText('Skip Ability');
    expect(cancelBtn).toBeInTheDocument();
    expect(skipBtn).toBeInTheDocument();
  });

  test('Jack swap modal renders correctly', () => {
    const mockGameState = createMockGameState();
    const mockActions = { onSwapCards: jest.fn(), onCancel: jest.fn() };
    
    render(
      <SpecialAbilityModal
        type="swap"
        isOpen={true}
        gameState={mockGameState}
        {...mockActions}
      />
    );
    
    expect(screen.getByText('Jack Swap Ability')).toBeInTheDocument();
    expect(screen.getByText(/Choose cards to swap/)).toBeInTheDocument();
  });

  test('card selection works for peek ability', () => {
    const mockGameState = createMockGameState();
    const mockOnPeek = jest.fn();
    
    render(
      <SpecialAbilityModal
        type="peek"
        isOpen={true}
        gameState={mockGameState}
        onPeekCard={mockOnPeek}
      />
    );
    
    const selectableCards = screen.getAllByTestId('selectable-card');
    expect(selectableCards.length).toBeGreaterThan(0);
    
    fireEvent.click(selectableCards[0]);
    expect(mockOnPeek).toHaveBeenCalled();
  });

  test('card selection works for swap ability', () => {
    const mockGameState = createMockGameState();
    const mockOnSwap = jest.fn();
    
    render(
      <SpecialAbilityModal
        type="swap"
        isOpen={true}
        gameState={mockGameState}
        onSwapCards={mockOnSwap}
      />
    );
    
    // Should be able to select two cards (source and target)
    const selectableCards = screen.getAllByTestId('selectable-card');
    
    fireEvent.click(selectableCards[0]); // Select source
    fireEvent.click(selectableCards[1]); // Select target
    
    const confirmBtn = screen.getByText('Confirm Swap');
    fireEvent.click(confirmBtn);
    
    expect(mockOnSwap).toHaveBeenCalled();
  });

  test('backdrop blur effect is applied', () => {
    render(
      <SpecialAbilityModal
        type="peek"
        isOpen={true}
        gameState={createMockGameState()}
      />
    );
    
    const backdrop = screen.getByTestId('modal-backdrop');
    expect(backdrop).toHaveClass('backdrop-blur');
  });

  test('smooth animations work', async () => {
    const { rerender } = render(
      <SpecialAbilityModal
        type="peek"
        isOpen={false}
        gameState={createMockGameState()}
      />
    );
    
    // Modal should not be visible
    expect(screen.queryByTestId('special-ability-modal')).not.toBeInTheDocument();
    
    // Show modal
    rerender(
      <SpecialAbilityModal
        type="peek"
        isOpen={true}
        gameState={createMockGameState()}
      />
    );
    
    const modal = screen.getByTestId('special-ability-modal');
    expect(modal).toHaveClass('modal-enter');
    
    // Should have animation styles
    const styles = window.getComputedStyle(modal);
    expect(styles.animation).toContain('modalEnter');
  });

  test('casino theme styling applied', () => {
    render(
      <SpecialAbilityModal
        type="peek"
        isOpen={true}
        gameState={createMockGameState()}
      />
    );
    
    const modal = screen.getByTestId('special-ability-modal');
    expect(modal).toHaveClass('casino-themed');
    
    const title = screen.getByText('Queen Peek Ability');
    expect(title).toHaveClass('modal-title');
  });

  test('cancel and skip actions work', () => {
    const mockOnCancel = jest.fn();
    const mockOnSkip = jest.fn();
    
    render(
      <SpecialAbilityModal
        type="peek"
        isOpen={true}
        gameState={createMockGameState()}
        onCancel={mockOnCancel}
        onSkip={mockOnSkip}
      />
    );
    
    fireEvent.click(screen.getByText('Cancel'));
    expect(mockOnCancel).toHaveBeenCalled();
    
    fireEvent.click(screen.getByText('Skip Ability'));
    expect(mockOnSkip).toHaveBeenCalled();
  });

  test('accessibility features work correctly', () => {
    render(
      <SpecialAbilityModal
        type="peek"
        isOpen={true}
        gameState={createMockGameState()}
      />
    );
    
    const modal = screen.getByRole('dialog');
    expect(modal).toHaveAttribute('aria-labelledby');
    expect(modal).toHaveAttribute('aria-describedby');
    
    // Should trap focus within modal
    const focusableElements = modal.querySelectorAll('button, [tabindex]');
    expect(focusableElements.length).toBeGreaterThan(0);
    
    // Escape key should close modal
    const mockOnCancel = jest.fn();
    render(
      <SpecialAbilityModal
        type="peek"
        isOpen={true}
        gameState={createMockGameState()}
        onCancel={mockOnCancel}
      />
    );
    
    fireEvent.keyDown(modal, { key: 'Escape' });
    expect(mockOnCancel).toHaveBeenCalled();
  });
});
```

**Definition of Done:**
- Special abilities have intuitive, attractive interfaces
- Clear instructions guide user actions
- Smooth animations enhance user experience
- Cancel/skip options always available
- Tests verify all modal functionality and accessibility

---

#### **Microtask 2.12: Create Round End Score Modal**
**Priority**: High | **Estimated**: 1 hour | **Dependencies**: 2.11

**Acceptance Criteria:**
- [ ] Display all player scores in clear table format
- [ ] Highlight round winner with celebration styling
- [ ] Show detailed card breakdown for each player
- [ ] Add match progress indicators (stars or progress bar)
- [ ] Style continue button prominently

**Score Modal Design:**
```tsx
<Modal isOpen={showScores} className="score-modal">
  <div className="round-results">
    <h2 className="results-title">Round {roundNumber} Results</h2>
    
    <div className="score-table">
      {players.map(player => (
        <div key={player.id} className={`score-row ${player.isWinner ? 'winner' : ''}`}>
          <div className="player-info">
            <span className="player-name">{player.name}</span>
            {player.isWinner && <span className="winner-crown">👑</span>}
          </div>
          <div className="player-cards">
            {player.cards.map(card => (
              <Card key={card.id} card={card} size="small" />
            ))}
          </div>
          <div className="player-score">
            {player.score} points
          </div>
        </div>
      ))}
    </div>
    
    <div className="match-progress">
      <h3>Match Progress (First to 3 wins)</h3>
      {players.map(player => (
        <div key={player.id} className="progress-item">
          <span>{player.name}:</span>
          <div className="win-stars">
            {Array(3).fill(0).map((_, i) => (
              <span key={i} className={i < player.roundWins ? 'filled' : 'empty'}>
                ★
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
    
    <button className="btn-primary continue-btn" onClick={continueToNextRound}>
      Continue to Round {roundNumber + 1}
    </button>
  </div>
</Modal>
```

**Testing:**
```typescript
// tests/ui/ScoreModal.test.tsx
describe('Round End Score Modal', () => {
  test('displays all player scores correctly', () => {
    const mockGameState = createMockGameStateWithScores();
    render(<ScoreModal gameState={mockGameState} isOpen={true} />);
    
    mockGameState.players.forEach(player => {
      expect(screen.getByText(player.name)).toBeInTheDocument();
      expect(screen.getByText(`${player.score} points`)).toBeInTheDocument();
    });
  });

  test('highlights round winner with celebration styling', () => {
    const mockGameState = createMockGameStateWithScores();
    mockGameState.players[0].isRoundWinner = true;
    
    render(<ScoreModal gameState={mockGameState} isOpen={true} />);
    
    const winnerRow = screen.getByTestId(`score-row-${mockGameState.players[0].id}`);
    expect(winnerRow).toHaveClass('winner');
    expect(screen.getByText('👑')).toBeInTheDocument();
  });

  test('shows detailed card breakdown for each player', () => {
    const mockGameState = createMockGameStateWithScores();
    render(<ScoreModal gameState={mockGameState} isOpen={true} />);
    
    mockGameState.players.forEach(player => {
      const playerRow = screen.getByTestId(`score-row-${player.id}`);
      const cards = within(playerRow).getAllByTestId('card');
      expect(cards).toHaveLength(4); // Each player has 4 cards
    });
  });

  test('displays match progress with stars', () => {
    const mockGameState = createMockGameStateWithScores();
    mockGameState.players[0].roundWins = 2;
    mockGameState.players[1].roundWins = 1;
    
    render(<ScoreModal gameState={mockGameState} isOpen={true} />);
    
    const progressSection = screen.getByTestId('match-progress');
    expect(progressSection).toHaveTextContent('Match Progress (First to 3 wins)');
    
    // Check star display for each player
    mockGameState.players.forEach(player => {
      const playerProgress = screen.getByTestId(`progress-${player.id}`);
      const filledStars = within(playerProgress).getAllByText('★').filter(star => 
        star.classList.contains('filled')
      );
      expect(filledStars).toHaveLength(player.roundWins);
    });
  });

  test('continue button works correctly', () => {
    const mockOnContinue = jest.fn();
    const mockGameState = createMockGameStateWithScores();
    mockGameState.match.currentRound = 2;
    
    render(
      <ScoreModal 
        gameState={mockGameState} 
        isOpen={true} 
        onContinue={mockOnContinue}
      />
    );
    
    const continueBtn = screen.getByText('Continue to Round 3');
    expect(continueBtn).toHaveClass('btn-primary');
    
    fireEvent.click(continueBtn);
    expect(mockOnContinue).toHaveBeenCalled();
  });

  test('handles game end scenario', () => {
    const mockGameState = createMockGameStateWithScores();
    mockGameState.players[0].roundWins = 3; // Game winner
    mockGameState.match.isComplete = true;
    
    render(<ScoreModal gameState={mockGameState} isOpen={true} />);
    
    expect(screen.getByText(/Game Over/)).toBeInTheDocument();
    expect(screen.getByText('New Game')).toBeInTheDocument();
    expect(screen.queryByText(/Continue to Round/)).not.toBeInTheDocument();
  });

  test('score table is clear and readable', () => {
    const mockGameState = createMockGameStateWithScores();
    render(<ScoreModal gameState={mockGameState} isOpen={true} />);
    
    const scoreTable = screen.getByTestId('score-table');
    const styles = window.getComputedStyle(scoreTable);
    
    // Should have proper spacing and alignment
    expect(styles.display).toBeDefined();
    
    // Rows should be visually separated
    const scoreRows = screen.getAllByTestId(/score-row-/);
    scoreRows.forEach(row => {
      const rowStyles = window.getComputedStyle(row);
      expect(rowStyles.padding || rowStyles.margin).toBeDefined();
    });
  });

  test('modal has proper casino styling', () => {
    const mockGameState = createMockGameStateWithScores();
    render(<ScoreModal gameState={mockGameState} isOpen={true} />);
    
    const modal = screen.getByTestId('score-modal');
    expect(modal).toHaveClass('casino-themed');
    
    const title = screen.getByText(/Round \d+ Results/);
    expect(title).toHaveClass('results-title');
  });

  test('responsive design works on different screen sizes', () => {
    const mockGameState = createMockGameStateWithScores();
    
    // Test mobile
    Object.defineProperty(window, 'innerWidth', { value: 768 });
    const { rerender } = render(<ScoreModal gameState={mockGameState} isOpen={true} />);
    
    const mobileModal = screen.getByTestId('score-modal');
    const mobileStyles = window.getComputedStyle(mobileModal);
    
    // Test desktop
    Object.defineProperty(window, 'innerWidth', { value: 1024 });
    rerender(<ScoreModal gameState={mockGameState} isOpen={true} />);
    
    const desktopModal = screen.getByTestId('score-modal');
    const desktopStyles = window.getComputedStyle(desktopModal);
    
    // Should adapt sizing
    expect(desktopStyles.width).toBeDefined();
    expect(mobileStyles.width).toBeDefined();
  });
});
```

**Definition of Done:**
- Score display is clear and engaging
- Winner celebration adds excitement
- Match progress visible and motivating
- Easy progression to next round
- Tests verify all scoring display functionality

---

### **Day 17: Mobile Responsiveness & Polish**

#### **Microtask 2.13: Implement Mobile Layout**
**Priority**: High | **Estimated**: 1.5 hours | **Dependencies**: 2.12

**Acceptance Criteria:**
- [ ] Ensure cards are readable on phone screens (landscape)
- [ ] Adjust button sizes for touch interactions
- [ ] Test layout on common mobile screen sizes
- [ ] Optimize spacing and positioning for small screens
- [ ] Verify all interactions work with touch

**Responsive Breakpoints:**
```css
/* Mobile Landscape: 667x375 - 768x432 */
@media (max-width: 768px) and (orientation: landscape) {
  .card { @apply w-12 h-16 text-xs; }
  .btn { @apply px-3 py-2 text-sm; }
  .game-board { @apply p-2; }
}

/* Tablet Landscape: 768x432 - 1024x576 */
@media (min-width: 768px) and (max-width: 1024px) {
  .card { @apply w-16 h-24 text-sm; }
  .btn { @apply px-4 py-2; }
}

/* Desktop: 1024x576+ */
@media (min-width: 1024px) {
  .card { @apply w-20 h-28; }
  .btn { @apply px-6 py-3; }
}
```

**Testing:**
```typescript
// tests/ui/MobileLayout.test.tsx
describe('Mobile Layout', () => {
  beforeEach(() => {
    // Mock mobile viewport
    Object.defineProperty(window, 'innerWidth', { value: 768 });
    Object.defineProperty(window, 'innerHeight', { value: 432 });
  });

  test('cards are readable on mobile screens', () => {
    const mockGameState = createMockGameState();
    render(<GameBoard gameState={mockGameState} />);
    
    const cards = screen.getAllByTestId('card');
    cards.forEach(card => {
      const styles = window.getComputedStyle(card);
      const fontSize = parseInt(styles.fontSize);
      const cardWidth = card.offsetWidth;
      
      // Minimum readable size on mobile
      expect(fontSize).toBeGreaterThanOrEqual(10);
      expect(cardWidth).toBeGreaterThanOrEqual(48); // 48px min for touch
    });
  });

  test('buttons are sized for touch interactions', () => {
    const mockGameState = createMockGameState();
    render(<ActionButtons gameState={mockGameState} />);
    
    const buttons = screen.getAllByRole('button');
    buttons.forEach(button => {
      const height = button.offsetHeight;
      const width = button.offsetWidth;
      
      // Touch target minimum 44px
      expect(height).toBeGreaterThanOrEqual(44);
      expect(width).toBeGreaterThanOrEqual(44);
    });
  });

  test('layout works on common mobile screen sizes', () => {
    const commonSizes = [
      { width: 667, height: 375 }, // iPhone SE landscape
      { width: 736, height: 414 }, // iPhone 8 Plus landscape
      { width: 812, height: 375 }, // iPhone X landscape
    ];

    commonSizes.forEach(size => {
      Object.defineProperty(window, 'innerWidth', { value: size.width });
      Object.defineProperty(window, 'innerHeight', { value: size.height });
      
      const { rerender } = render(<GameBoard gameState={createMockGameState()} />);
      
      const gameBoard = screen.getByTestId('game-board');
      expect(gameBoard).toBeVisible();
      
      // Should not have horizontal scroll
      expect(gameBoard.scrollWidth).toBeLessThanOrEqual(size.width);
    });
  });

  test('spacing optimized for small screens', () => {
    const mockGameState = createMockGameState();
    render(<GameBoard gameState={mockGameState} />);
    
    const gameBoard = screen.getByTestId('game-board');
    const playerAreas = screen.getAllByTestId(/player-area-/);
    
    // Should use minimal padding on mobile
    const boardStyles = window.getComputedStyle(gameBoard);
    const padding = parseInt(boardStyles.padding);
    expect(padding).toBeLessThanOrEqual(16); // 1rem or less
    
    // Player areas should be compact
    playerAreas.forEach(area => {
      const areaStyles = window.getComputedStyle(area);
      const margin = parseInt(areaStyles.margin || '0');
      expect(margin).toBeLessThanOrEqual(8); // 0.5rem or less
    });
  });

  test('touch interactions work correctly', () => {
    const mockOnCardClick = jest.fn();
    const mockGameState = createMockGameState();
    
    render(<GameBoard gameState={mockGameState} onCardClick={mockOnCardClick} />);
    
    const selectableCard = screen.getByTestId('selectable-card');
    
    // Test touch events
    fireEvent.touchStart(selectableCard);
    fireEvent.touchEnd(selectableCard);
    
    expect(mockOnCardClick).toHaveBeenCalled();
  });

  test('viewport meta tag is properly set', () => {
    // This would be tested in the HTML head
    const viewportMeta = document.querySelector('meta[name="viewport"]');
    expect(viewportMeta).toHaveAttribute('content', 
      'width=device-width, initial-scale=1.0, user-scalable=no'
    );
  });

  test('no horizontal scrolling on mobile', () => {
    const mockGameState = createMockGameState();
    render(<GameBoard gameState={mockGameState} />);
    
    const body = document.body;
    const gameBoard = screen.getByTestId('game-board');
    
    expect(body.scrollWidth).toBeLessThanOrEqual(window.innerWidth);
    expect(gameBoard.scrollWidth).toBeLessThanOrEqual(window.innerWidth);
  });

  test('text remains readable at mobile sizes', () => {
    const mockGameState = createMockGameState();
    render(<GameBoard gameState={mockGameState} />);
    
    const textElements = screen.getAllByText(/./);
    textElements.forEach(element => {
      const styles = window.getComputedStyle(element);
      const fontSize = parseInt(styles.fontSize);
      
      // Minimum 12px for mobile readability
      expect(fontSize).toBeGreaterThanOrEqual(12);
    });
  });

  test('game controls accessible on mobile', () => {
    const mockGameState = createMockGameState();
    render(<GameBoard gameState={mockGameState} />);
    
    const actionButtons = screen.getByTestId('action-buttons');
    const styles = window.getComputedStyle(actionButtons);
    
    // Should be positioned for easy thumb access
    expect(actionButtons).toBeVisible();
    
    // Buttons should be in bottom area for thumb reach
    const rect = actionButtons.getBoundingClientRect();
    expect(rect.bottom).toBeLessThanOrEqual(window.innerHeight);
  });
});
```

**Definition of Done:**
- Game fully playable on mobile devices
- Touch interactions smooth and responsive
- No horizontal scrolling required
- Text and buttons appropriately sized
- Tests verify mobile functionality

---

#### **Microtask 2.14: Add Basic Animations**
**Priority**: Medium | **Estimated**: 1 hour | **Dependencies**: 2.13

**Acceptance Criteria:**
- [ ] Smooth card flip animations (face-up/face-down)
- [ ] Button hover and click animations
- [ ] Turn change animations (highlight current player)
- [ ] Modal entrance/exit animations
- [ ] Drawn card appearance animation

**Animation Library:**
```css
.card-flip {
  transform-style: preserve-3d;
  transition: transform 0.4s ease;
}

.card-flip.flipped {
  transform: rotateY(180deg);
}

.turn-indicator {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}

.modal-enter {
  animation: modalEnter 0.3s ease-out;
}

@keyframes modalEnter {
  from { 
    opacity: 0; 
    transform: scale(0.9) translateY(-20px); 
  }
  to { 
    opacity: 1; 
    transform: scale(1) translateY(0); 
  }
}
```

**Testing:**
```typescript
// tests/ui/Animations.test.tsx
describe('Basic Animations', () => {
  test('card flip animation works correctly', async () => {
    const card = { ...mockCard, isRevealed: false };
    const { rerender } = render(<Card card={card} />);
    
    const cardElement = screen.getByTestId('card');
    expect(cardElement).toHaveClass('card-back');
    
    // Flip card
    card.isRevealed = true;
    rerender(<Card card={card} />);
    
    await waitFor(() => {
      expect(cardElement).toHaveClass('card-flip');
      const styles = window.getComputedStyle(cardElement);
      expect(styles.transform).toContain('rotateY');
    });
  });

  test('button hover animations work', async () => {
    render(<button className="btn-primary">Test Button</button>);
    
    const button = screen.getByRole('button');
    
    fireEvent.mouseEnter(button);
    await waitFor(() => {
      const styles = window.getComputedStyle(button);
      expect(styles.transform).toContain('scale');
    });
    
    fireEvent.mouseLeave(button);
    await waitFor(() => {
      const styles = window.getComputedStyle(button);
      expect(styles.transform).not.toContain('scale');
    });
  });

  test('turn change animation highlights current player', () => {
    const mockGameState = createMockGameState();
    mockGameState.players[1].isActive = true;
    
    render(<GameBoard gameState={mockGameState} />);
    
    const currentPlayerArea = screen.getByTestId('player-area-1');
    expect(currentPlayerArea).toHaveClass('current-turn');
    
    const turnIndicator = within(currentPlayerArea).getByTestId('turn-indicator');
    const styles = window.getComputedStyle(turnIndicator);
    expect(styles.animation).toContain('pulse');
  });

  test('modal entrance animation works', async () => {
    const { rerender } = render(
      <SpecialAbilityModal isOpen={false} type="peek" />
    );
    
    // Open modal
    rerender(
      <SpecialAbilityModal isOpen={true} type="peek" />
    );
    
    const modal = screen.getByTestId('special-ability-modal');
    expect(modal).toHaveClass('modal-enter');
    
    await waitFor(() => {
      const styles = window.getComputedStyle(modal);
      expect(styles.animation).toContain('modalEnter');
    });
  });

  test('drawn card appearance animation works', async () => {
    const mockGameState = createMockGameState();
    const { rerender } = render(<DrawnCard drawnCard={null} />);
    
    // Draw a card
    const drawnCard = { ...mockCard, id: 'drawn' };
    rerender(<DrawnCard drawnCard={drawnCard} />);
    
    const cardElement = screen.getByTestId('drawn-card');
    expect(cardElement).toHaveClass('card-enter');
    
    await waitFor(() => {
      const styles = window.getComputedStyle(cardElement);
      expect(styles.animation).toBeDefined();
    });
  });

  test('animations respect user preferences', () => {
    // Mock prefers-reduced-motion
    Object.defineProperty(window, 'matchMedia', {
      value: jest.fn(() => ({
        matches: true, // User prefers reduced motion
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
      })),
    });

    render(<Card card={mockCard} />);
    
    const cardElement = screen.getByTestId('card');
    const styles = window.getComputedStyle(cardElement);
    
    // Animations should be disabled or reduced
    expect(styles.transition).toBe('none' || styles.animationDuration).toBe('0s');
  });

  test('animation performance is smooth', async () => {
    const startTime = performance.now();
    
    render(<Card card={mockCard} />);
    const cardElement = screen.getByTestId('card');
    
    // Trigger animation
    fireEvent.mouseEnter(cardElement);
    
    await waitFor(() => {
      const styles = window.getComputedStyle(cardElement);
      expect(styles.transform).toBeDefined();
    });
    
    const endTime = performance.now();
    const duration = endTime - startTime;
    
    // Animation should start quickly (< 50ms)
    expect(duration).toBeLessThan(50);
  });

  test('animations clean up properly', () => {
    const { unmount } = render(<Card card={mockCard} />);
    
    // Unmount component
    unmount();
    
    // Should not leave any animation timeouts or intervals
    // This is more about ensuring no memory leaks
    expect(document.querySelectorAll('.card-flip')).toHaveLength(0);
  });

  test('multiple animations do not conflict', async () => {
    const mockGameState = createMockGameState();
    render(<GameBoard gameState={mockGameState} />);
    
    // Trigger multiple animations simultaneously
    const buttons = screen.getAllByRole('button');
    const cards = screen.getAllByTestId('card');
    
    // Hover multiple elements
    buttons.forEach(button => fireEvent.mouseEnter(button));
    cards.forEach(card => fireEvent.mouseEnter(card));
    
    await waitFor(() => {
      // All animations should work without interference
      buttons.forEach(button => {
        const styles = window.getComputedStyle(button);
        expect(styles.transition).toBeDefined();
      });
    });
  });
});
```

**Definition of Done:**
- Animations enhance user experience without being distracting
- Performance remains smooth on all target devices
- Animations respect user preferences (prefers-reduced-motion)
- Tests verify animation functionality and performance

---

#### **Microtask 2.15: Final Polish & Testing**
**Priority**: Medium | **Estimated**: 1 hour | **Dependencies**: 2.14

**Acceptance Criteria:**
- [ ] Test complete game flow with new UI
- [ ] Verify all interactions work correctly
- [ ] Check accessibility (keyboard navigation, screen readers)
- [ ] Test on different browsers and devices
- [ ] Fix any visual inconsistencies or bugs

**Testing Checklist:**
- [ ] Complete 2-player game start to finish
- [ ] All special abilities (Queen peek, Jack swap) work
- [ ] Stop mechanism and scoring display correctly
- [ ] Mobile landscape orientation functional
- [ ] Color contrast meets accessibility standards
- [ ] Keyboard navigation possible for all actions

**Testing:**
```typescript
// tests/integration/CompleteGameFlow.test.tsx
describe('Complete Game Flow with New UI', () => {
  test('complete 2-player game works start to finish', async () => {
    const { gameState, actions } = renderFullGame({ playerCount: 2 });
    
    // Start game
    actions.startGame();
    await waitFor(() => {
      expect(screen.getByTestId('game-board')).toBeInTheDocument();
    });
    
    // Verify initial setup
    expect(screen.getAllByTestId('card')).toHaveLength(8); // 4 per player
    expect(screen.getByTestId('draw-pile')).toBeInTheDocument();
    expect(screen.getByTestId('discard-pile')).toBeInTheDocument();
    
    // Play several turns
    for (let turn = 0; turn < 10; turn++) {
      const currentPlayer = getCurrentPlayer(gameState);
      
      if (currentPlayer.type === 'human') {
        // Human player actions
        fireEvent.click(screen.getByTestId('draw-deck-btn'));
        await waitFor(() => {
          expect(screen.getByTestId('drawn-card')).toBeInTheDocument();
        });
        
        fireEvent.click(screen.getByTestId('replace-card-1-btn'));
        await waitFor(() => {
          expect(screen.queryByTestId('drawn-card')).not.toBeInTheDocument();
        });
      } else {
        // Bot actions happen automatically
        await waitFor(() => {
          expect(getCurrentPlayer(gameState)).not.toBe(currentPlayer);
        });
      }
    }
    
    // Call stop and finish round
    fireEvent.click(screen.getByTestId('stop-btn'));
    await waitFor(() => {
      expect(screen.getByTestId('score-modal')).toBeInTheDocument();
    });
    
    // Continue to next round
    fireEvent.click(screen.getByText(/Continue to Round/));
    await waitFor(() => {
      expect(screen.queryByTestId('score-modal')).not.toBeInTheDocument();
    });
  });

  test('special abilities work with new UI', async () => {
    const gameState = createMockGameState();
    const queenCard = { ...mockCard, rank: 'Q', isSpecial: true };
    
    render(<GameBoard gameState={gameState} />);
    
    // Simulate drawing a Queen
    fireEvent.click(screen.getByTestId('draw-deck-btn'));
    // Mock Queen being drawn
    
    await waitFor(() => {
      expect(screen.getByTestId('special-ability-modal')).toBeInTheDocument();
    });
    
    // Use peek ability
    const selectableCard = screen.getAllByTestId('selectable-card')[0];
    fireEvent.click(selectableCard);
    
    await waitFor(() => {
      expect(screen.getByTestId('peek-result-modal')).toBeInTheDocument();
    });
  });

  test('accessibility features work correctly', () => {
    render(<GameBoard gameState={createMockGameState()} />);
    
    // Keyboard navigation
    const firstButton = screen.getAllByRole('button')[0];
    firstButton.focus();
    expect(document.activeElement).toBe(firstButton);
    
    // Tab navigation
    fireEvent.keyDown(firstButton, { key: 'Tab' });
    expect(document.activeElement).not.toBe(firstButton);
    
    // Screen reader support
    const gameBoard = screen.getByTestId('game-board');
    expect(gameBoard).toHaveAttribute('aria-label');
    
    // Color contrast
    const buttons = screen.getAllByRole('button');
    buttons.forEach(button => {
      const styles = window.getComputedStyle(button);
      const bgColor = styles.backgroundColor;
      const textColor = styles.color;
      
      if (bgColor && textColor) {
        expect(getContrastRatio(textColor, bgColor)).toBeGreaterThan(4.5);
      }
    });
  });

  test('cross-browser compatibility', () => {
    // Mock different browsers
    const browsers = ['Chrome', 'Firefox', 'Safari', 'Edge'];
    
    browsers.forEach(browser => {
      Object.defineProperty(navigator, 'userAgent', {
        value: `Mozilla/5.0 (${browser})`,
        configurable: true,
      });
      
      render(<GameBoard gameState={createMockGameState()} />);
      
      // Basic functionality should work
      expect(screen.getByTestId('game-board')).toBeInTheDocument();
      expect(screen.getAllByRole('button').length).toBeGreaterThan(0);
    });
  });

  test('mobile device compatibility', () => {
    const devices = [
      { name: 'iPhone', width: 667, height: 375 },
      { name: 'Android', width: 640, height: 360 },
      { name: 'iPad', width: 1024, height: 768 },
    ];
    
    devices.forEach(device => {
      Object.defineProperty(window, 'innerWidth', { value: device.width });
      Object.defineProperty(window, 'innerHeight', { value: device.height });
      
      render(<GameBoard gameState={createMockGameState()} />);
      
      // Should be playable on all devices
      expect(screen.getByTestId('game-board')).toBeVisible();
      
      const cards = screen.getAllByTestId('card');
      cards.forEach(card => {
        expect(card.offsetWidth).toBeGreaterThan(0);
        expect(card.offsetHeight).toBeGreaterThan(0);
      });
    });
  });

  test('visual consistency across components', () => {
    render(<GameBoard gameState={createMockGameState()} />);
    
    // All cards should have consistent styling
    const cards = screen.getAllByTestId('card');
    const firstCardStyles = window.getComputedStyle(cards[0]);
    
    cards.forEach(card => {
      const styles = window.getComputedStyle(card);
      expect(styles.borderRadius).toBe(firstCardStyles.borderRadius);
      expect(styles.fontFamily).toBe(firstCardStyles.fontFamily);
    });
    
    // All buttons should follow design system
    const buttons = screen.getAllByRole('button');
    buttons.forEach(button => {
      expect(button.className).toMatch(/btn-(primary|secondary|danger)/);
    });
  });

  test('no visual bugs or glitches', () => {
    render(<GameBoard gameState={createMockGameState()} />);
    
    // Check for common visual issues
    const allElements = screen.getByTestId('game-board').querySelectorAll('*');
    
    allElements.forEach(element => {
      const styles = window.getComputedStyle(element);
      
      // No negative z-index issues
      if (styles.zIndex) {
        expect(parseInt(styles.zIndex)).toBeGreaterThanOrEqual(0);
      }
      
      // No overflow issues
      expect(element.scrollWidth).toBeLessThanOrEqual(window.innerWidth);
      
      // No positioning issues
      const rect = element.getBoundingClientRect();
      expect(rect.width).toBeGreaterThanOrEqual(0);
      expect(rect.height).toBeGreaterThanOrEqual(0);
    });
  });

  test('performance remains acceptable', async () => {
    const startTime = performance.now();
    
    render(<GameBoard gameState={createMockGameState()} />);
    
    // Simulate user interactions
    const buttons = screen.getAllByRole('button');
    buttons.forEach(button => {
      if (!button.disabled) {
        fireEvent.click(button);
      }
    });
    
    const endTime = performance.now();
    const duration = endTime - startTime;
    
    // Should render and respond quickly
    expect(duration).toBeLessThan(100); // 100ms threshold
  });
});
```

**Definition of Done:**
- UI transformation complete (no more "CARD" placeholders)
- Professional casino appearance achieved
- All functionality working with new interface
- Game ready for Sprint 3 (advanced features)
- Tests verify complete game flow with new UI

---

## 🎯 **Sprint 2 Success Criteria**

### **Visual Transformation** ✅
- [ ] Casino-themed color palette implemented
- [ ] Professional card design (no more text placeholders)
- [ ] Felt table background with wood trim
- [ ] Elegant typography system

### **User Experience** ✅
- [ ] Intuitive button hierarchy and interactions
- [ ] Clear game status and progress indicators
- [ ] Smooth animations and transitions
- [ ] Mobile-responsive design

### **Game Interface** ✅
- [ ] Special ability modals (Queen peek, Jack swap)
- [ ] Round end scoring display
- [ ] Turn indicators and game flow
- [ ] Accessibility standards met

### **Quality Assurance** ✅
- [ ] All existing functionality preserved
- [ ] No regressions in game logic
- [ ] Cross-browser compatibility
- [ ] Performance acceptable on target devices

### **Testing Coverage** ✅
- [ ] UI component tests (React Testing Library)
- [ ] Integration tests (full game flow)
- [ ] Accessibility tests (keyboard, contrast)
- [ ] Performance tests (animation, responsiveness)
- [ ] Cross-browser/device tests

---

## 🔧 **Development Guidelines**

### **Code Standards**
- Maintain TypeScript strict typing
- Follow existing architecture patterns
- Keep components focused and reusable
- Document complex UI interactions

### **Testing Strategy**
- Test UI components with React Testing Library
- Verify accessibility with automated tools
- Manual testing on multiple devices
- Regression testing of core game mechanics

### **Performance Considerations**
- Optimize CSS for smooth animations
- Use CSS transforms for better performance
- Minimize re-renders with React.memo where appropriate
- Test on slower devices to ensure responsiveness

---

## 📊 **Estimated Timeline**

**Total Effort**: 12-15 hours  
**Critical Path**: Microtasks 2.1 → 2.4 → 2.5 → 2.7 → 2.9  
**Parallel Work**: Typography (2.3) can be done alongside card design  
**Buffer Time**: 1-2 hours for unexpected issues and polish  

**Daily Breakdown:**
- **Day 8-9**: Foundation (3 hours) - Colors, backgrounds, typography
- **Day 10-11**: Cards (4 hours) - Card design and interactions  
- **Day 12-13**: Layout (4 hours) - Game board and controls
- **Day 14**: Buttons (2 hours) - Action system and status
- **Day 15-16**: Modals (3 hours) - Special abilities and scoring
- **Day 17**: Polish (2 hours) - Mobile and animations

This microtask breakdown transforms Sprint 2 into manageable, testable chunks that will systematically upgrade the game from a functional prototype to a polished, professional card game interface with comprehensive test coverage.