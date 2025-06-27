# UI/UX Wireframes & Design Specifications

## Design Principles

### Visual Hierarchy
- **Primary Focus**: Player's cards (bottom area)
- **Secondary Focus**: Central game area (deck/discard)
- **Tertiary Focus**: Opponent cards and game status
- **Supporting Elements**: Turn indicators, round counter, controls

### Color Scheme
- **Background**: Dark green felt texture (classic card table)
- **Card Backgrounds**: White/cream with subtle shadows
- **Accent Colors**: 
  - Blue for current player highlights
  - Red for stop/danger actions
  - Gold for special abilities
  - Green for positive actions
- **Text**: High contrast for accessibility

### Typography
- **Headers**: Bold, clear game information
- **Body**: Readable card values and game text
- **Accessibility**: Minimum 16px font size

## Layout Specifications

### Screen Dimensions
- **Target**: 1024x768 minimum (landscape)
- **Responsive**: Scales up to 1920x1080
- **Mobile**: 667x375 (iPhone landscape) minimum

### Grid System
```
┌─────────────────────────────────────────┐
│  Header: Game Status & Round Info       │
├─────────────────────────────────────────┤
│                                         │
│    [Opponent 2]    [Opponent 3]        │
│        ┌─┐┌─┐        ┌─┐┌─┐            │
│        │ ││ │        │ ││ │            │
│        └─┘└─┘        └─┘└─┘            │
│                                         │
│ [Opp 1]              Central           │
│  ┌─┐┌─┐               Area              │
│  │ ││ │            ┌─────┐             │
│  └─┘└─┘            │ 🂠  │             │
│                     │Deck │             │
│                     └─────┘             │
│                     ┌─────┐             │
│                     │ 7♦  │             │
│                     │Disc │             │
│                     └─────┘             │
│                                         │
│              [Your Cards]               │
│        ┌─┐  ┌─┐  ┌─┐  ┌─┐              │
│        │?│  │5│  │?│  │K│              │
│        │ │  │♥│  │ │  │♠│              │
│        └─┘  └─┘  └─┘  └─┘              │
├─────────────────────────────────────────┤
│  Footer: Action Buttons & Game Controls │
└─────────────────────────────────────────┘
```

## Component Wireframes

### 1. Game Header
```
┌─────────────────────────────────────────┐
│ Round 2/3    Turn: Alice    Stop: [Btn] │
│ Alice: 2 wins  •  Bot1: 1 win  •  You: 0│
└─────────────────────────────────────────┘
```

**Elements:**
- Current round progress
- Active player indicator
- Round wins tracker
- Stop game button

### 2. Player Card Area (Your Cards - Bottom)
```
      Known Cards      Unknown Cards
┌─────────────────────────────────────────┐
│     ┌─────┐  ┌─────┐  ┌─────┐  ┌─────┐ │
│     │  5  │  │  ?  │  │  K  │  │  ?  │ │ 
│     │  ♥  │  │ 🂠  │  │  ♠  │  │ 🂠  │ │
│     │     │  │     │  │     │  │     │ │
│     └─────┘  └─────┘  └─────┘  └─────┘ │
│       Known   Hidden   Known   Hidden  │
│                                         │
│    [Draw Deck] [Draw Discard] [Replace]│
└─────────────────────────────────────────┘
```

**Interactions:**
- Click known cards to select for replacement
- Hover effects on selectable cards
- Visual feedback for available actions
- Card position indicators (1st, 2nd, 3rd, 4th)

### 3. Opponent Card Areas
```
Top Player:
     PlayerName (Bot/Human)
┌─┐ ┌─┐ ┌─┐ ┌─┐    Score: ??
│🂠│ │🂠│ │🂠│ │🂠│    Status: Thinking...
└─┘ └─┘ └─┘ └─┘

Side Players:
PlayerName     ┌─┐
(Bot/Human)    │🂠│
Score: ??      │ │  
Status: Active └─┘
               ┌─┐
               │🂠│
               │ │
               └─┘
               ┌─┐
               │🂠│
               │ │
               └─┘
               ┌─┐
               │🂠│
               │ │
               └─┘
```

**Features:**
- Player name and type (Bot/Human)
- Current score (hidden during play)
- Player status (Active, Waiting, Thinking)
- Card count and face-down representation

### 4. Central Game Area
```
┌─────────────────────────────────────────┐
│                                         │
│     Draw Pile          Discard Pile     │
│    ┌─────────┐        ┌─────────┐       │
│    │    🂠   │        │    7    │       │
│    │         │        │    ♦    │       │
│    │  [42]   │        │         │       │
│    └─────────┘        └─────────┘       │
│    Cards Left          Last Played      │
│                                         │
│          Game Status Message            │
│     "Your turn - Draw a card"           │
│                                         │
└─────────────────────────────────────────┘
```

**Features:**
- Draw pile with card count
- Discard pile showing top card
- Clear visual separation
- Game status messaging
- Click handlers for drawing

### 5. Action Buttons Area
```
┌─────────────────────────────────────────┐
│  [Draw from Deck]  [Draw from Discard]  │
│  [Replace Card 1]  [Replace Card 3]     │
│  [Keep Drawn Card] [Use Special Ability]│
│                                 [Stop]  │
└─────────────────────────────────────────┘
```

**Button States:**
- **Enabled**: Available action
- **Disabled**: Not available (grayed out)
- **Highlighted**: Recommended action
- **Danger**: Stop button (red)

## Modal Designs

### 1. Special Ability Modal (Peek)
```
┌─────────────────────────────────────────┐
│               Peek at Card              │
├─────────────────────────────────────────┤
│                                         │
│  You drew a Queen! Choose a card to     │
│  peek at:                               │
│                                         │
│  Your Cards:                            │
│  [Card 1] [Card 2] [Card 3] [Card 4]   │
│                                         │
│  Opponent Cards:                        │
│  Alice: [Card 1] [Card 2] [Card 3] [Card 4] │
│  Bot1:  [Card 1] [Card 2] [Card 3] [Card 4] │
│                                         │
│         [Cancel] [Skip Ability]         │
└─────────────────────────────────────────┘
```

### 2. Special Ability Modal (Swap)
```
┌─────────────────────────────────────────┐
│               Swap Cards                │
├─────────────────────────────────────────┤
│                                         │
│  You drew a Jack! Choose cards to swap: │
│                                         │
│  Your Card:                             │
│  [Card 1] [Card 2] [Card 3] [Card 4]   │
│                                         │
│  Opponent's Card:                       │
│  Alice: [Card 1] [Card 2] [Card 3] [Card 4] │
│  Bot1:  [Card 1] [Card 2] [Card 3] [Card 4] │
│                                         │
│  Selected: Your Card 2 ↔ Alice Card 1   │
│                                         │
│         [Cancel] [Confirm Swap]         │
└─────────────────────────────────────────┘
```

### 3. Round End Score Modal
```
┌─────────────────────────────────────────┐
│              Round 2 Results            │
├─────────────────────────────────────────┤
│                                         │
│  Player     Cards              Score    │
│  ─────────────────────────────────────  │
│  You        K♠ 5♥ 2♣ 7♦        12     │
│  Alice      A♠ 10♥ 3♣ 6♦        10     │ ← Winner
│  Bot1       Q♠ 8♥ 9♣ 4♦        33     │
│                                         │
│  Alice wins this round!                 │
│                                         │
│  Match Progress:                        │
│  Alice: ●●○  Bot1: ●○○  You: ○○○       │
│                                         │
│            [Continue to Round 3]        │
└─────────────────────────────────────────┘
```

### 4. Game End Modal
```
┌─────────────────────────────────────────┐
│               Game Over!                │
├─────────────────────────────────────────┤
│                                         │
│           🎉 Alice Wins! 🎉            │
│                                         │
│  Final Match Score:                     │
│  Alice: 3 rounds won                    │
│  You: 1 round won                       │
│  Bot1: 0 rounds won                     │
│                                         │
│  Game Duration: 12 minutes              │
│  Total Rounds: 4                        │
│                                         │
│     [Play Again] [Main Menu]            │
└─────────────────────────────────────────┘
```

## Animation Specifications

### Card Animations
- **Card Draw**: Slide from deck to center (300ms ease-out)
- **Card Replace**: Flip animation (400ms) + slide to discard
- **Card Peek**: Quick flip reveal (200ms) + fade back
- **Card Swap**: Cross-fade positions (500ms ease-in-out)

### UI Transitions
- **Turn Change**: Highlight animation around active player (500ms)
- **Button States**: Smooth color transitions (150ms)
- **Modal Appearance**: Fade in + scale up (250ms)
- **Score Update**: Number counting animation (800ms)

### Feedback Animations
- **Valid Action**: Green pulse effect
- **Invalid Action**: Red shake effect
- **Special Ability**: Golden glow effect
- **Game End**: Confetti/celebration animation

## Responsive Breakpoints

### Mobile Landscape (667x375 - 768x432)
- Smaller card sizes (48x64px)
- Compressed spacing
- Single row opponent layout
- Simplified action buttons

### Tablet Landscape (768x432 - 1024x576)
- Medium card sizes (64x88px)
- Standard spacing
- Two-row opponent layout
- Full action button set

### Desktop (1024x576+)
- Large card sizes (80x112px)
- Generous spacing
- Optimal positioning
- Enhanced animations

## Accessibility Features

### Visual Accessibility
- High contrast mode support
- Colorblind-friendly indicators
- Large text options
- Clear focus indicators

### Keyboard Navigation
- Tab order: Cards → Actions → Game Controls
- Enter/Space for card selection
- Arrow keys for card navigation
- Escape for modal closing

### Screen Reader Support
- Semantic HTML structure
- ARIA labels for game state
- Announced turn changes
- Card value descriptions

## State Visual Indicators

### Card States
- **Known Card**: Normal appearance with value
- **Unknown Card**: Card back pattern
- **Selectable**: Hover glow effect
- **Selected**: Blue border highlight
- **Recently Changed**: Brief yellow highlight

### Player States
- **Active Turn**: Blue name highlight + pulsing border
- **Waiting**: Gray/dimmed appearance
- **Bot Thinking**: Loading spinner + "thinking..." text
- **Disconnected**: Red indicator (future multiplayer)

### Game States
- **Round Start**: "Round X starting..." message
- **Stop Called**: "Stop called! Final turns..." warning
- **Deck Empty**: "Deck empty! Round ending..." alert
- **Round End**: Score calculation display

## Error States & Edge Cases

### Network Issues (Future)
```
┌─────────────────────────────────────────┐
│          Connection Lost                │
├─────────────────────────────────────────┤
│  Attempting to reconnect...             │
│  [●○○] Retry in 3 seconds              │
│                                         │
│  [Retry Now] [Return to Menu]           │
└─────────────────────────────────────────┘
```

### Invalid Actions
- Grayed out unavailable buttons
- Tooltip explanations for disabled actions
- Clear error messages for invalid moves

### Loading States
- Skeleton loading for game setup
- Card dealing animation on game start
- Smooth transitions between game phases

## Design Assets Needed

### Card Graphics
- 54 individual card images (52 + 2 jokers)
- Card back design
- Placeholder/unknown card design
- Damaged/worn effect (optional)

### UI Elements
- Button styles (primary, secondary, danger)
- Background textures (felt table)
- Icons (settings, help, profile)
- Loading spinners

### Sound Effects (Future)
- Card shuffle
- Card flip
- Card place
- Button clicks
- Round win/lose
- Special ability activation

This wireframe specification provides a complete visual guide for implementing the game interface, ensuring consistency and usability across all game states and interactions.