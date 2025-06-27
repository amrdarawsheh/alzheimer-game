# Milestone 1: Sprint Planning & Task Breakdown

## Sprint Overview

**Milestone**: Local Play vs Bots  
**Duration**: 4 weeks (28 days)  
**Effort**: 10-15 hours/week = 40-60 total hours  
**Team Size**: 1 developer (solo project)  

## Sprint Goals

### Primary Objectives
- ✅ Complete, playable card game against AI bots
- ✅ All game rules correctly implemented
- ✅ Responsive UI with card graphics
- ✅ Smooth user experience with animations
- ✅ Bug-free core gameplay loop

### Success Criteria
- [ ] Game playable from start to finish
- [ ] All 4 game phases work correctly (setup, playing, scoring, next round)
- [ ] Bot makes reasonable decisions
- [ ] UI responsive on desktop and mobile landscape
- [ ] No critical bugs in happy path scenarios

## Sprint Structure

### Sprint 1: Foundation (Week 1)
**Theme**: Project setup and core architecture  
**Duration**: 7 days  
**Effort**: 12-15 hours  

### Sprint 2: Game Logic (Week 2)  
**Theme**: Implement all game rules and mechanics  
**Duration**: 7 days  
**Effort**: 12-15 hours  

### Sprint 3: User Interface (Week 3)  
**Theme**: Build complete UI with card graphics  
**Duration**: 7 days  
**Effort**: 12-15 hours  

### Sprint 4: Polish & Testing (Week 4)  
**Theme**: Bot AI, animations, and quality assurance  
**Duration**: 7 days  
**Effort**: 12-15 hours  

---

## Sprint 1: Foundation (Week 1)

### Day 1-2: Project Setup & Architecture

#### Task 1.1: Initialize React Project (2 hours)
**Priority**: Critical  
**Assignee**: Developer  

**Acceptance Criteria:**
- [ ] React project created with Vite
- [ ] TypeScript configured
- [ ] Tailwind CSS installed and configured
- [ ] Project runs successfully on localhost
- [ ] Git repository initialized with .gitignore

**Implementation Steps:**
```bash
npm create vite@latest card-game -- --template react-ts
cd card-game
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

**Definition of Done:**
- Project builds without errors
- Tailwind classes work in components
- Hot reload functioning
- Git history shows initial commit

#### Task 1.2: Project Structure & Development Tools (2 hours)
**Priority**: Critical  
**Dependencies**: Task 1.1  

**Acceptance Criteria:**
- [ ] Folder structure matches Technical Architecture Document
- [ ] ESLint and Prettier configured
- [ ] Basic folder structure with placeholder files
- [ ] Development scripts working

**Folder Structure:**
```
src/
├── components/
│   ├── game/
│   ├── ui/
│   └── common/
├── contexts/
├── hooks/
├── utils/
├── types/
├── constants/
└── assets/
```

**Implementation Steps:**
1. Create folder structure
2. Configure ESLint with React/TypeScript rules
3. Set up Prettier with project standards
4. Create index files for each directory
5. Update package.json scripts

#### Task 1.3: TypeScript Interfaces & Types (3 hours)
**Priority**: Critical  
**Dependencies**: Task 1.2  

**Acceptance Criteria:**
- [ ] Complete Card interface with all properties
- [ ] Player interface with bot/human differentiation
- [ ] GameState interface matching architecture document
- [ ] Action types for useReducer
- [ ] Enum types for suits, ranks, phases

**Key Interfaces:**
```typescript
// types/game.ts
export interface Card {
  id: string;
  suit: Suit;
  rank: Rank;
  value: number;
  isSpecial: boolean;
}

export interface Player {
  id: string;
  name: string;
  type: 'human' | 'bot';
  cards: PlayerCard[];
  score: number;
  isActive: boolean;
  roundWins: number;
}

export interface GameState {
  // ... complete implementation
}
```

**Definition of Done:**
- All interfaces compile without errors
- Types exported correctly from index files
- No 'any' types used
- Interfaces match architecture document

### Day 3-4: Game Context & State Management

#### Task 1.4: Game Context Setup (3 hours)
**Priority**: Critical  
**Dependencies**: Task 1.3  

**Acceptance Criteria:**
- [ ] GameContext created with React Context
- [ ] GameProvider component implemented
- [ ] useGame custom hook created
- [ ] Context provides all necessary functions
- [ ] Initial state properly structured

**Implementation:**
```typescript
// contexts/GameContext.tsx
export const GameContext = createContext<GameContextType | null>(null);

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const [gameState, dispatch] = useReducer(gameReducer, initialGameState);
  
  // Game action functions
  const startGame = () => { /* ... */ };
  const makeMove = (action: GameAction) => { /* ... */ };
  
  return (
    <GameContext.Provider value={{ gameState, dispatch, startGame, makeMove }}>
      {children}
    </GameContext.Provider>
  );
};
```

#### Task 1.5: Game Reducer Implementation (4 hours)
**Priority**: Critical  
**Dependencies**: Task 1.4  

**Acceptance Criteria:**
- [ ] All action types defined
- [ ] Reducer handles all game actions
- [ ] State transitions are immutable
- [ ] Reducer logic is pure (no side effects)
- [ ] Each action properly tested

**Action Types:**
```typescript
export type GameAction =
  | { type: 'START_GAME'; payload: { playerCount: number } }
  | { type: 'DRAW_CARD'; payload: { source: 'deck' | 'discard' } }
  | { type: 'REPLACE_CARD'; payload: { cardIndex: number } }
  | { type: 'CALL_STOP'; payload: { playerId: string } }
  // ... all other actions
```

**Definition of Done:**
- Reducer handles all defined actions
- State updates are immutable
- No console errors when dispatching actions
- Type safety maintained throughout

### Day 5-7: Core Game Engine

#### Task 1.6: Deck Management Utilities (3 hours)
**Priority**: Critical  
**Dependencies**: Task 1.3  

**Acceptance Criteria:**
- [ ] Create standard 54-card deck function
- [ ] Shuffle algorithm implemented
- [ ] Card dealing logic
- [ ] Deck empty detection
- [ ] Card value calculation utility

**Implementation:**
```typescript
// utils/deckUtils.ts
export const createDeck = (): Card[] => {
  // Generate 52 standard cards + 2 jokers
};

export const shuffleDeck = (deck: Card[]): Card[] => {
  // Fisher-Yates shuffle algorithm
};

export const dealCards = (deck: Card[], playerCount: number) => {
  // Deal 4 cards to each player
};
```

#### Task 1.7: Game Engine Core Logic (4 hours)
**Priority**: Critical  
**Dependencies**: Task 1.6  

**Acceptance Criteria:**
- [ ] Score calculation function
- [ ] Turn validation logic
- [ ] Round end detection
- [ ] Match winner determination
- [ ] Special card detection

**Key Functions:**
```typescript
// utils/gameEngine.ts
export const calculatePlayerScore = (cards: Card[]): number => {
  // Sum card values with special scoring rules
};

export const checkRoundEnd = (gameState: GameState): boolean => {
  // Check if stop called or deck empty
};

export const determineRoundWinner = (players: Player[]): string => {
  // Find player with lowest score
};
```

#### Task 1.8: Game Flow Integration (2 hours)
**Priority**: High  
**Dependencies**: Task 1.5, Task 1.7  

**Acceptance Criteria:**
- [ ] Game context uses game engine
- [ ] State transitions trigger correct calculations
- [ ] Turn progression works correctly
- [ ] Round and match progression functional

**Definition of Done:**
- Game can progress through all phases
- State calculations are correct
- No infinite loops or stuck states
- Console logs show correct game progression

---

## Sprint 2: Game Logic (Week 2)

### Day 8-9: Player Actions Implementation

#### Task 2.1: Draw Actions (3 hours)
**Priority**: Critical  
**Dependencies**: Sprint 1 completion  

**Acceptance Criteria:**
- [ ] Draw from deck action works
- [ ] Draw from discard pile action works
- [ ] Card visibility rules enforced
- [ ] Deck empty handling
- [ ] Action validation prevents invalid draws

**Implementation Focus:**
- Player can see drawn card before decision
- Discard pile shows only top card
- Draw pile count updates correctly
- Invalid actions are prevented

#### Task 2.2: Card Replacement Logic (3 hours)
**Priority**: Critical  
**Dependencies**: Task 2.1  

**Acceptance Criteria:**
- [ ] Player can replace any of their 4 cards
- [ ] Replaced card goes to discard pile
- [ ] Card knowledge tracking works
- [ ] Blind replacement (player doesn't see replaced card)
- [ ] Can choose to discard drawn card instead

**Edge Cases:**
- Player tries to replace during wrong phase
- Attempting to replace with invalid card
- Multiple rapid replacement attempts

#### Task 2.3: Memory & Knowledge Tracking (3 hours)
**Priority**: High  
**Dependencies**: Task 2.2  

**Acceptance Criteria:**
- [ ] Track which cards player initially saw
- [ ] Update knowledge when cards are replaced
- [ ] Handle knowledge transfer during swaps
- [ ] Separate player knowledge from actual cards
- [ ] Memory system works across turns

**Knowledge System:**
```typescript
interface PlayerKnowledge {
  cardIndex: number;
  knownCard: Card | null;
  lastSeenTurn: number;
  confidence: 'certain' | 'probable' | 'unknown';
}
```

### Day 10-11: Special Card Abilities

#### Task 2.4: Queen Peek Ability (3 hours)
**Priority**: Critical  
**Dependencies**: Task 2.3  

**Acceptance Criteria:**
- [ ] Queen drawn from deck triggers peek option
- [ ] Player can choose to use or skip ability
- [ ] Can peek at own or opponent cards
- [ ] Peek updates player knowledge
- [ ] Only works when drawn from deck (not discard/swap)

**Implementation:**
- Modal for target selection
- Knowledge system integration
- Animation for peek reveal
- Proper state cleanup after peek

#### Task 2.5: Jack Swap Ability (3 hours)
**Priority**: Critical  
**Dependencies**: Task 2.4  

**Acceptance Criteria:**
- [ ] Jack drawn from deck triggers swap option
- [ ] Player selects one of their cards
- [ ] Player selects opponent's card
- [ ] Cards swap positions blind
- [ ] Knowledge transfers appropriately
- [ ] Animation shows card movement

**Complex Logic:**
- Knowledge state during swaps
- Validation of swap targets
- Handling swap cancellation
- Multiple player swap selection

#### Task 2.6: Special Ability Integration (2 hours)
**Priority**: High  
**Dependencies**: Task 2.5  

**Acceptance Criteria:**
- [ ] Special abilities integrate with turn flow
- [ ] Player can choose to use as regular card
- [ ] Abilities don't activate from discard pile
- [ ] Proper turn progression after abilities
- [ ] State management handles all edge cases

### Day 12-14: Round & Match Management

#### Task 2.7: Stop Mechanism (3 hours)
**Priority**: Critical  
**Dependencies**: Task 2.6  

**Acceptance Criteria:**
- [ ] Any player can call stop during their turn
- [ ] Stop caller completes their turn normally
- [ ] All other players get exactly one more turn
- [ ] Round proceeds to scoring after final turns
- [ ] Turn counter tracks remaining turns correctly

**Implementation Details:**
- Stop button availability logic
- Final turn counting system
- Phase transition after stop
- UI indicators for final turns

#### Task 2.8: Automatic Round End (2 hours)
**Priority**: Critical  
**Dependencies**: Task 2.7  

**Acceptance Criteria:**
- [ ] Round ends immediately when deck is empty
- [ ] No additional turns after deck empty
- [ ] Proper transition to scoring phase
- [ ] Clear messaging about automatic end
- [ ] Integration with manual stop logic

#### Task 2.9: Scoring System (3 hours)
**Priority**: Critical  
**Dependencies**: Task 2.8  

**Acceptance Criteria:**
- [ ] All cards revealed at round end
- [ ] Correct point calculation per card
- [ ] Lowest score wins round
- [ ] Round winner tracking
- [ ] Match progression (first to 3 wins)
- [ ] Tie handling mechanism

**Scoring Rules Implementation:**
- Ace = 1, Numbers = face value, 10 = 0
- Jack = 11, Queen = 12, King = -2, Joker = -4
- Sum calculation with special cases
- Winner determination logic

#### Task 2.10: Match Progression (2 hours)
**Priority**: High  
**Dependencies**: Task 2.9  

**Acceptance Criteria:**
- [ ] Track round wins per player
- [ ] Determine match winner (first to 3)
- [ ] Reset for new rounds
- [ ] Maintain match state across rounds
- [ ] End game when match complete

---

## Sprint 3: User Interface (Week 3)

### Day 15-16: Layout & Basic Components

#### Task 3.1: Responsive Game Board Layout (4 hours)
**Priority**: Critical  
**Dependencies**: Sprint 2 completion  

**Acceptance Criteria:**
- [ ] Landscape orientation layout
- [ ] Player positioned at bottom
- [ ] 2-4 opponents positioned around board
- [ ] Central area for deck/discard
- [ ] Responsive to different screen sizes
- [ ] Follows wireframe specifications

**Layout Implementation:**
```tsx
// components/game/GameBoard.tsx
export const GameBoard = () => {
  return (
    <div className="min-h-screen bg-green-800 p-4">
      <div className="grid grid-cols-3 grid-rows-3 h-full">
        {/* Opponent areas */}
        {/* Central area */}
        {/* Player area */}
      </div>
    </div>
  );
};
```

#### Task 3.2: Card Component Implementation (4 hours)
**Priority**: Critical  
**Dependencies**: Task 3.1  

**Acceptance Criteria:**
- [ ] Card displays correctly face-up and face-down
- [ ] Proper sizing for different screen sizes
- [ ] Hover effects and selection states
- [ ] Integration with card graphics
- [ ] Handles all card types (including jokers)
- [ ] Smooth transitions between states

**Card States:**
- Face-up with suit and rank
- Face-down with card back
- Selected/highlighted
- Selectable/hover
- Disabled/non-interactive

### Day 17-18: Player Areas & Interactions

#### Task 3.3: Player Card Area (3 hours)
**Priority**: Critical  
**Dependencies**: Task 3.2  

**Acceptance Criteria:**
- [ ] Display 4 cards for human player
- [ ] Show known vs unknown cards correctly
- [ ] Card selection for replacement
- [ ] Visual feedback for interactions
- [ ] Position indicators (1st, 2nd, 3rd, 4th)

#### Task 3.4: Opponent Display Areas (3 hours)
**Priority**: High  
**Dependencies**: Task 3.3  

**Acceptance Criteria:**
- [ ] Opponent cards shown face-down
- [ ] Player names and types displayed
- [ ] Turn indicators
- [ ] Positioning for 2-4 players
- [ ] Bot status indicators

#### Task 3.5: Action Button System (3 hours)
**Priority**: Critical  
**Dependencies**: Task 3.4  

**Acceptance Criteria:**
- [ ] Draw from deck button
- [ ] Draw from discard button
- [ ] Replace card buttons (1-4)
- [ ] Stop button
- [ ] Button states (enabled/disabled/highlighted)
- [ ] Tooltips for unavailable actions

**Button State Logic:**
```tsx
const ActionButtons = () => {
  const { gameState, makeMove } = useGame();
  
  const canDrawDeck = gameState.deck.drawPile.length > 0;
  const canDrawDiscard = gameState.deck.discardPile.length > 0;
  const canStop = gameState.currentPlayer.id === 'human';
  
  return (
    <div className="flex gap-2">
      <Button disabled={!canDrawDeck} onClick={() => makeMove({type: 'DRAW_DECK'})}>
        Draw Deck ({gameState.deck.drawPile.length})
      </Button>
      {/* ... other buttons */}
    </div>
  );
};
```

### Day 19-21: Central Area & Game Status

#### Task 3.6: Central Game Area (3 hours)
**Priority**: Critical  
**Dependencies**: Task 3.5  

**Acceptance Criteria:**
- [ ] Draw pile with card count
- [ ] Discard pile showing top card
- [ ] Click handlers for drawing
- [ ] Visual separation of piles
- [ ] Game status messaging area

#### Task 3.7: Game Status & Information (2 hours)
**Priority**: High  
**Dependencies**: Task 3.6  

**Acceptance Criteria:**
- [ ] Current round display
- [ ] Turn indicator
- [ ] Round wins tracking
- [ ] Game phase messaging
- [ ] Action guidance for players

#### Task 3.8: Card Graphics Integration (4 hours)
**Priority**: Critical  
**Dependencies**: Task 3.7  

**Acceptance Criteria:**
- [ ] Source free card graphics (52 + 2 jokers)
- [ ] Integrate graphics into Card component
- [ ] Proper card back design
- [ ] High-quality scaling for different sizes
- [ ] Fallback for missing graphics

**Graphics Tasks:**
1. Research and download open-source card set
2. Optimize images for web (WebP format)
3. Create sprite sheet or individual files
4. Implement loading states
5. Add fallback text representations

---

## Sprint 4: Polish & Testing (Week 4)

### Day 22-23: Bot AI Implementation

#### Task 4.1: Easy Bot Decision Making (4 hours)
**Priority**: Critical  
**Dependencies**: Sprint 3 completion  

**Acceptance Criteria:**
- [ ] Bot makes random but valid moves
- [ ] Random decision for draw source
- [ ] Random card replacement choices
- [ ] Random special ability usage
- [ ] Random stop calling (with some logic)
- [ ] Realistic thinking delays

**Bot Behavior:**
```typescript
// utils/botAI.ts
export const easyBotMove = (gameState: GameState): BotAction => {
  // Random but valid move generation
  const drawSource = Math.random() > 0.5 ? 'deck' : 'discard';
  const replaceIndex = Math.floor(Math.random() * 4);
  const shouldStop = Math.random() > 0.8; // 20% chance
  
  return {
    type: 'bot_move',
    drawSource,
    replaceIndex,
    shouldStop
  };
};
```

#### Task 4.2: Bot Integration & Turn Processing (3 hours)
**Priority**: Critical  
**Dependencies**: Task 4.1  

**Acceptance Criteria:**
- [ ] Bot turns trigger automatically
- [ ] Proper delays for realistic gameplay
- [ ] Bot actions update game state correctly
- [ ] Visual feedback for bot actions
- [ ] Turn progression after bot moves

### Day 24-25: Animations & Visual Polish

#### Task 4.3: Card Animation System (4 hours)
**Priority**: High  
**Dependencies**: Task 4.2  

**Acceptance Criteria:**
- [ ] Card flip animations (face up/down)
- [ ] Card movement animations (deck to hand)
- [ ] Draw and discard transitions
- [ ] Smooth hover effects
- [ ] Selection state animations

**Animation Library:**
```tsx
// hooks/useCardAnimation.ts
export const useCardAnimation = () => {
  const flipCard = (cardId: string) => {
    // CSS transition or Framer Motion
  };
  
  const moveCard = (from: Position, to: Position) => {
    // Smooth position transition
  };
  
  return { flipCard, moveCard };
};
```

#### Task 4.4: UI Transitions & Feedback (3 hours)
**Priority**: Medium  
**Dependencies**: Task 4.3  

**Acceptance Criteria:**
- [ ] Button state transitions
- [ ] Turn change animations
- [ ] Game phase transitions
- [ ] Loading states for bot thinking
- [ ] Success/error visual feedback

### Day 26-28: Testing & Quality Assurance

#### Task 4.5: Game Flow Testing (4 hours)
**Priority**: Critical  
**Dependencies**: Task 4.4  

**Acceptance Criteria:**
- [ ] Complete game scenarios tested
- [ ] All player counts (2, 3, 4) work
- [ ] Special ability edge cases handled
- [ ] Round and match progression correct
- [ ] Bot behavior reasonable

**Test Scenarios:**
1. Complete 2-player game
2. Game with all special abilities used
3. Round end by stop vs deck empty
4. Match completion (first to 3 wins)
5. Edge cases (all jokers, all face cards, etc.)

#### Task 4.6: Bug Fixes & Edge Cases (4 hours)
**Priority**: Critical  
**Dependencies**: Task 4.5  

**Acceptance Criteria:**
- [ ] All identified bugs fixed
- [ ] Edge case handling implemented
- [ ] Error boundaries for crash prevention
- [ ] Input validation throughout
- [ ] Graceful error messaging

**Common Edge Cases:**
- Deck runs out during special abilities
- Multiple special cards in sequence
- Player tries invalid actions
- Rapid clicking/button mashing
- Browser refresh during game

#### Task 4.7: Performance Optimization (2 hours)
**Priority**: Medium  
**Dependencies**: Task 4.6  

**Acceptance Criteria:**
- [ ] Component re-render optimization
- [ ] Animation performance smooth
- [ ] Memory leak prevention
- [ ] Bundle size optimization
- [ ] Mobile performance acceptable

**Optimization Tasks:**
- React.memo for Card components
- useCallback for event handlers
- useMemo for expensive calculations
- Lazy loading for non-critical components

#### Task 4.8: Final Polish & Documentation (2 hours)
**Priority**: Low  
**Dependencies**: Task 4.7  

**Acceptance Criteria:**
- [ ] Code comments and documentation
- [ ] README with setup instructions
- [ ] Game rules accessible in UI
- [ ] Clean console (no errors/warnings)
- [ ] Deployment-ready build

---

## Definition of Done (Milestone 1)

### Functional Requirements
- [ ] ✅ Complete card game playable from start to finish
- [ ] ✅ All game rules correctly implemented
- [ ] ✅ Bot AI makes reasonable decisions
- [ ] ✅ 2-4 players supported
- [ ] ✅ Special abilities work correctly
- [ ] ✅ Scoring and match progression accurate

### Technical Requirements
- [ ] ✅ Responsive design (desktop + mobile landscape)
- [ ] ✅ TypeScript with proper typing
- [ ] ✅ No console errors in production build
- [ ] ✅ Performance acceptable on target devices
- [ ] ✅ Code follows established patterns

### Quality Requirements
- [ ] ✅ No critical bugs in normal gameplay
- [ ] ✅ Edge cases handled gracefully
- [ ] ✅ User experience is smooth and intuitive
- [ ] ✅ Visual design matches wireframes
- [ ] ✅ Accessibility basics implemented

## Risk Mitigation

### High-Risk Areas
1. **Complex Game State Management**
   - Mitigation: Thorough testing of reducer logic
   - Backup: Implement state debugging tools

2. **Special Ability Interactions**
   - Mitigation: Isolated testing of each ability
   - Backup: Simplified ability implementation if needed

3. **Bot AI Integration**
   - Mitigation: Start with simple random bot
   - Backup: Manual testing mode if bot fails

4. **Card Graphics Integration**
   - Mitigation: Source graphics early in sprint 3
   - Backup: Text-based card representation

### Contingency Plans
- **Behind Schedule**: Cut non-critical animations
- **Technical Blockers**: Implement workarounds, document for later
- **Scope Creep**: Defer enhancements to Milestone 2
- **Major Bugs**: Create minimal viable version for deadline

## Sprint Ceremonies

### Daily Standups (Self-Check)
- What did I complete yesterday?
- What will I work on today?
- Any blockers or challenges?
- Am I on track for sprint goals?

### Sprint Reviews (Weekly)
- Demo completed functionality
- Review against acceptance criteria
- Identify any scope adjustments
- Plan next sprint priorities

### Sprint Retrospectives (Weekly)
- What went well this sprint?
- What could be improved?
- Any process changes needed?
- Technical debt to address?

## Tools & Tracking

### Task Management
- GitHub Issues for task tracking
- Project board for sprint visualization
- Time tracking for effort estimation
- Progress updates in commits

### Quality Assurance
- ESLint for code quality
- TypeScript for type safety
- Manual testing checklist
- Performance monitoring

This sprint plan provides a detailed roadmap for delivering a complete, playable card game in 4 weeks with clear tasks, acceptance criteria, and risk management strategies.