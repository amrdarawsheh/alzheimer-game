# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Setup Commands

This is a React card game project that hasn't been initialized yet. To start development:

```bash
# Initial project setup (Task 1.1)
npm create vite@latest card-game -- --template react-ts
cd card-game
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Development workflow
npm run dev          # Start development server
npm run build        # Production build
npm run lint         # Code quality check (configure ESLint first)
```

## Architecture Overview

### Game Concept
A competitive memory-based card game where 2-4 players aim for the lowest score. Players have 4 face-down cards, can only see 2 initially, and must use memory to track card positions. Special cards (Queen=peek, Jack=swap) add strategic depth.

### Technology Stack
- **Frontend**: React 18 + TypeScript + Tailwind CSS + Vite
- **State Management**: React Context + useReducer pattern
- **Target**: Web-first, landscape orientation optimized

### Core Architecture

**State Management Pattern:**
```typescript
// Central game state with useReducer
const gameState = {
  match: { currentRound, roundsToWin, roundWins, winner },
  round: { phase, currentPlayerIndex, stopCalled, remainingTurns },
  players: [{ id, name, type, cards, score, roundWins }],
  deck: { drawPile, discardPile, isEmpty },
  ui: { selectedCard, showingPeekCard, animationQueue }
}
```

**Component Hierarchy:**
```
App
├── GameProvider (Context)
├── GameBoard
│   ├── PlayerArea (x4) - positioned around screen
│   ├── CentralArea - deck/discard piles
│   ├── ActionModal - special abilities (peek/swap)
│   └── ScoreModal - round end results
└── GameControls - stop button, turn indicator
```

**Folder Structure (create this):**
```
src/
├── components/
│   ├── game/        # GameBoard, PlayerArea, Card
│   ├── ui/          # ActionModal, ScoreModal, buttons
│   └── common/      # reusable components
├── contexts/        # GameContext, GameProvider
├── hooks/           # useGame, useCardAnimation
├── utils/           # gameEngine, deckUtils, botAI
├── types/           # Card, Player, GameState interfaces
├── constants/       # game rules, scoring values
└── assets/          # card graphics, images
```

### Key Game Logic

**Card System:**
- 54 cards: 52 standard + 2 jokers
- Scoring: Ace=1, 2-9=face, 10=0, J=11, Q=12, K=-2, Joker=-4
- Special abilities only trigger when drawn from deck (not discard/swap)

**Memory Mechanics:**
- Players know 2 of 4 starting cards
- Card replacement is blind - creates memory challenge
- Knowledge tracking system maintains what each player has seen

**Game Flow:**
1. Setup: Deal 4 cards, player sees 2
2. Turns: Draw → Replace/Discard → Special ability (if applicable)
3. Round end: Stop called OR deck empty
4. Scoring: Lowest total wins round
5. Match: First to 3 round wins

## Current Sprint: Sprint 1 (Week 1) - Foundation

**Goal**: Project setup and core architecture  
**Status**: Not started - ready to begin  
**Duration**: 7 days, 12-15 hours  

### Current Tasks (Sprint 1):
- [x] **Task 1.1**: Initialize React Project (2 hours) - **COMPLETED**
- [x] **Task 1.2**: Project Structure & Development Tools (2 hours) - **COMPLETED**
- [x] **Task 1.3**: TypeScript Interfaces & Types (3 hours) - **COMPLETED**
- [x] **Task 1.4**: Game Context Setup (3 hours) - **COMPLETED**
- [x] **Task 1.5**: Game Reducer Implementation (4 hours) - **COMPLETED**
- [x] **Task 1.6**: Deck Management Utilities (3 hours) - **COMPLETED**
- [x] **Task 1.7**: Game Engine Core Logic (4 hours) - **COMPLETED**
- [x] **Task 1.8**: Game Flow Integration (2 hours) - **COMPLETED**

**🎉 SPRINT 1 COMPLETE! 🎉**

### Sprint 1 Acceptance Criteria:
- [x] React project with Vite + TypeScript + Tailwind
- [x] Complete folder structure matching architecture  
- [x] All TypeScript interfaces defined
- [x] Game context with useReducer working
- [x] Core game engine utilities implemented
- [x] Basic game flow functional

**🏆 ALL SPRINT 1 OBJECTIVES ACHIEVED! 🏆**

## Implementation Phases

### Sprint 2 (Week 2): Game Logic
- Player actions (draw, replace, special abilities)
- Round management (stop mechanism, scoring)
- Memory/knowledge tracking system

### Sprint 3 (Week 3): User Interface
- Responsive game board layout
- Card components with graphics integration
- Player areas and action buttons

### Sprint 4 (Week 4): Polish
- Easy bot AI (random valid moves)
- Animations and visual feedback
- Testing and bug fixes

## Critical Design Decisions

**State Immutability**: All game state updates must be immutable - use spread operators and avoid mutations.

**Turn Validation**: Validate all player actions - prevent invalid moves, handle edge cases like empty deck.

**Bot Integration**: Bots make moves through same action system as humans, with realistic delays for UX.

**Responsive Design**: Landscape-first with player at bottom, opponents positioned around screen. Mobile support through smaller card sizes.

**Special Abilities**: Complex interaction system - peek allows viewing any card, swap exchanges cards between players. Only activate from deck draws.

## Development Notes

- Follow the exact task order from milestone1_sprint_planning.md
- All code must be TypeScript with proper interfaces (no 'any' types)
- Reference game_design_document.md for rule clarifications
- Use technical_architecture_document.md for detailed state structure
- UI implementation should match ui_ux_wireframes.md specifications
- Test thoroughly - game state bugs are difficult to debug later