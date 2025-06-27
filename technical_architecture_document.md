# Technical Architecture Document

## Technology Stack

### Frontend (Milestone 1)
- **Framework**: React 18+
- **Language**: JavaScript/TypeScript (recommend TypeScript for type safety)
- **Styling**: Tailwind CSS
- **State Management**: React Context API + useReducer
- **Build Tool**: Vite (fast development and building)
- **Deployment**: Vercel/Netlify for web hosting

### Backend (Milestone 2)
- **Runtime**: Node.js
- **Framework**: Express.js
- **Real-time**: Socket.io
- **Database**: PostgreSQL
- **Authentication**: JWT tokens
- **Hosting**: Railway/Render/Heroku

### Development Tools
- **Version Control**: Git
- **Package Manager**: npm/yarn
- **Code Quality**: ESLint + Prettier
- **Testing**: Jest + React Testing Library

## Application Architecture

### High-Level Structure
```
src/
├── components/           # Reusable UI components
├── contexts/            # React Context providers
├── hooks/               # Custom React hooks
├── utils/               # Helper functions
├── constants/           # Game constants and enums
├── types/               # TypeScript type definitions
├── assets/              # Images, fonts, static files
└── styles/              # Global CSS and Tailwind config
```

## State Management Architecture

### Game State Structure
```javascript
const gameState = {
  // Game Configuration
  gameId: string,
  gameMode: 'local' | 'multiplayer',
  maxPlayers: number,
  
  // Match Progress
  match: {
    currentRound: number,
    roundsToWin: number,
    roundWins: { [playerId]: number },
    winner: playerId | null
  },
  
  // Current Round State
  round: {
    phase: 'setup' | 'playing' | 'scoring' | 'finished',
    currentPlayerIndex: number,
    stopCalled: boolean,
    stopCalledBy: playerId | null,
    remainingTurns: number,
    autoStopped: boolean
  },
  
  // Players
  players: [{
    id: string,
    name: string,
    type: 'human' | 'bot',
    cards: [
      {
        cardId: string,
        isRevealed: boolean,
        isKnownToPlayer: boolean
      }
    ],
    score: number,
    isActive: boolean
  }],
  
  // Deck Management
  deck: {
    drawPile: [cardId],
    discardPile: [cardId],
    isEmpty: boolean
  },
  
  // Game Actions
  lastAction: {
    type: string,
    playerId: string,
    details: object,
    timestamp: number
  },
  
  // UI State
  ui: {
    selectedCard: cardId | null,
    showingPeekCard: cardId | null,
    animationQueue: [],
    isActionInProgress: boolean
  }
}
```

### Actions (useReducer)
```javascript
// Game Flow Actions
'START_GAME'
'START_ROUND'
'END_ROUND'
'END_GAME'

// Turn Actions
'DRAW_FROM_DECK'
'DRAW_FROM_DISCARD'
'REPLACE_CARD'
'DISCARD_DRAWN_CARD'
'END_TURN'

// Special Actions
'PEEK_CARD'
'SWAP_CARDS'
'CALL_STOP'

// UI Actions
'SELECT_CARD'
'CLEAR_SELECTION'
'SHOW_PEEK_RESULT'
'HIDE_PEEK_RESULT'
'ADD_ANIMATION'
'COMPLETE_ANIMATION'

// Bot Actions
'BOT_MAKE_MOVE'
```

## Component Architecture

### Component Hierarchy
```
App
├── GameProvider (Context)
├── GameBoard
│   ├── PlayerArea (x4)
│   │   ├── PlayerInfo
│   │   ├── PlayerCards
│   │   │   └── Card (x4)
│   │   └── PlayerActions
│   ├── CentralArea
│   │   ├── DrawPile
│   │   ├── DiscardPile
│   │   └── GameStatus
│   ├── ActionModal (peek/swap)
│   └── ScoreModal
├── GameControls
│   ├── StopButton
│   ├── TurnIndicator
│   └── RoundTracker
└── GameHistory
```

### Key Components

#### GameProvider
```javascript
// Manages global game state and actions
const GameProvider = ({ children }) => {
  const [gameState, dispatch] = useReducer(gameReducer, initialState);
  
  // Game logic functions
  const startGame = () => { /* ... */ };
  const makeMove = (action) => { /* ... */ };
  const processBotTurn = () => { /* ... */ };
  
  return (
    <GameContext.Provider value={{
      gameState,
      dispatch,
      startGame,
      makeMove,
      processBotTurn
    }}>
      {children}
    </GameContext.Provider>
  );
};
```

#### Card Component
```javascript
const Card = ({ 
  cardId, 
  isRevealed, 
  isKnownToPlayer, 
  isSelectable,
  onClick,
  size = 'normal' 
}) => {
  // Handle card display logic
  // Animate card flips and movements
  // Show card back or face based on state
};
```

#### PlayerArea Component
```javascript
const PlayerArea = ({ 
  player, 
  position, // 'bottom', 'top', 'left', 'right'
  isCurrentPlayer,
  isHuman 
}) => {
  // Position cards around the game board
  // Handle human player interactions
  // Display bot thinking indicators
};
```

## Game Logic Architecture

### Core Game Engine
```javascript
// utils/gameEngine.js
export const GameEngine = {
  // Deck Management
  createDeck: () => Card[],
  shuffleDeck: (deck) => Card[],
  dealInitialCards: (players, deck) => {},
  
  // Card Logic
  calculateScore: (cards) => number,
  getCardValue: (card) => number,
  isSpecialCard: (card) => boolean,
  
  // Game State Validation
  canDrawFromDeck: (gameState) => boolean,
  canDrawFromDiscard: (gameState) => boolean,
  canCallStop: (gameState, playerId) => boolean,
  canUseSpecialAbility: (card, drawSource) => boolean,
  
  // Turn Processing
  processPlayerAction: (gameState, action) => newGameState,
  checkRoundEnd: (gameState) => boolean,
  calculateRoundWinner: (players) => playerId,
  
  // Bot AI
  generateBotMove: (gameState, botPlayer) => action
};
```

### Bot AI Architecture
```javascript
// utils/botAI.js
export const BotAI = {
  // Easy Bot (Milestone 1)
  easyBot: {
    decideDraw: (gameState) => 'deck' | 'discard',
    decideReplace: (gameState, drawnCard) => cardIndex | null,
    decideStop: (gameState) => boolean,
    decideSpecialAbility: (card) => boolean
  },
  
  // Future Bot Difficulties
  mediumBot: { /* ... */ },
  hardBot: { /* ... */ }
};
```

## Data Flow

### Action Flow
1. **User Interaction** → Component event handler
2. **Component** → Calls context action function
3. **Context** → Dispatches action to reducer
4. **Reducer** → Processes action, returns new state
5. **Context** → Provides updated state to components
6. **Components** → Re-render with new state

### Bot Turn Flow
1. **Game State** → Bot AI analyzes current state
2. **Bot AI** → Generates optimal move
3. **Game Context** → Processes bot action
4. **UI** → Animates bot move
5. **Game State** → Updates with bot action result

## Responsive Design Strategy

### Layout Breakpoints (Tailwind)
- **Mobile**: 320px - 768px (landscape mode)
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

### Card Sizing Strategy
```css
/* Dynamic card sizing based on screen */
.card-small { @apply w-12 h-16; }    /* Mobile */
.card-medium { @apply w-16 h-24; }   /* Tablet */
.card-large { @apply w-20 h-28; }    /* Desktop */
```

### Player Positioning
- **2 Players**: Bottom vs Top
- **3 Players**: Bottom, Top-Left, Top-Right
- **4 Players**: Bottom, Left, Top, Right

## Performance Optimization

### React Optimization
- `useMemo` for expensive calculations
- `useCallback` for event handlers
- `React.memo` for card components
- Virtual scrolling for game history (if needed)

### Animation Performance
- CSS transforms over position changes
- `will-change` property for animated elements
- Debounced resize handlers
- RAF for smooth animations

## Future Architecture (Multiplayer)

### Real-time Communication
```javascript
// Socket.io Events
// Client → Server
'join-game'
'make-move'
'call-stop'
'use-special-ability'
'leave-game'

// Server → Client
'game-state-update'
'player-joined'
'player-left'
'move-made'
'round-ended'
'game-ended'
```

### Backend API Structure
```
/api/auth
  POST /login
  POST /register
  POST /logout

/api/games
  POST /create
  GET /:gameId
  POST /:gameId/join
  DELETE /:gameId/leave

/api/players
  GET /profile
  GET /stats
  PUT /profile
```

### Database Schema
```sql
-- Users
users (id, username, email, created_at)

-- Games
games (id, created_by, status, settings, created_at)

-- Game Participants
game_players (game_id, user_id, position, joined_at)

-- Game History
game_rounds (id, game_id, round_number, winner_id, scores)
game_moves (id, round_id, player_id, action_type, details)
```

## Security Considerations

### Client-Side (Milestone 1)
- Input validation for all user actions
- Prevent game state tampering through dev tools
- Secure card state management (hidden cards stay hidden)

### Server-Side (Milestone 2)
- JWT token validation
- Rate limiting for API calls
- Game state validation on server
- Prevent cheating through packet manipulation

## Testing Strategy

### Unit Tests
- Game engine functions
- Bot AI decision making
- Score calculation
- Card utilities

### Integration Tests
- Full game flow scenarios
- Player interaction sequences
- Round end conditions
- Match completion

### E2E Tests
- Complete game playthrough
- Multiple player scenarios
- Error handling and edge cases

## Deployment Strategy

### Milestone 1 (Static Web App)
- Build optimized bundle with Vite
- Deploy to Vercel/Netlify
- CDN for static assets
- Environment-based configuration

### Milestone 2 (Full Stack)
- Frontend: Same as Milestone 1
- Backend: Deploy to Railway/Render
- Database: Managed PostgreSQL
- WebSocket scaling considerations

## Monitoring & Analytics

### Performance Monitoring
- Core Web Vitals tracking
- Bundle size monitoring
- Runtime performance profiling

### Game Analytics (Future)
- Player engagement metrics
- Game completion rates
- Bot difficulty effectiveness
- Feature usage statistics