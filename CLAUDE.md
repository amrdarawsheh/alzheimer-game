# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Setup Commands

This is a React card game project with complete foundation and UI implemented. To work with the project:

```bash
# Navigate to project directory
cd card-game

# Install dependencies (already configured)
npm install

# Development workflow
npm run dev          # Start development server (http://localhost:5173/)
npm run build        # Production build
npm test             # Run comprehensive test suite (125+ tests)
npm run lint         # Code quality check
```

## Server Management Commands
- Use ./run.sh to run the server and ./stop.sh to stop it

## Architecture Overview

### Game Concept
A competitive memory-based card game where 2-4 players aim for the lowest score. Players have 4 face-down cards, can only see 2 initially, and must use memory to track card positions. Special cards (Queen=peek, Jack=swap) add strategic depth.

### Technology Stack
- **Frontend**: React 18 + TypeScript + Tailwind CSS + Vite
- **State Management**: React Context + useReducer pattern
- **Testing**: Vitest + React Testing Library (125+ tests)
- **Typography**: Playfair Display (casino elegance) + Inter (body) + JetBrains Mono (cards)
- **Styling**: Casino theme with professional color palette and felt table design
- **Target**: Web-first, landscape orientation optimized, mobile responsive

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

**Folder Structure (implemented):**
```
src/
├── components/           # React components
│   ├── GameBoard.tsx    # Main game board with casino theme
│   ├── PlayingCard.tsx  # Professional card component with authentic design
│   ├── PlayerArea.tsx   # Player card areas
│   ├── DeckArea.tsx     # Deck and discard pile
│   ├── GameControls.tsx # Action buttons
│   ├── GameStatus.tsx   # Game state display
│   └── [modals...]      # Special ability and score modals
├── contexts/            # React Context providers
│   └── GameContext.tsx  # Complete game state management
├── hooks/               # Custom React hooks
│   └── useGame.tsx      # Main game hook
├── utils/               # Game logic utilities
│   ├── gameEngine.ts    # Core game rules and validation
│   ├── deckUtils.ts     # 54-card deck management
│   ├── playerUtils.ts   # Player actions and bot AI
│   └── gameFlowManager.ts # Turn progression and automation
├── types/               # TypeScript interfaces
│   └── index.ts         # Complete game type definitions
├── constants/           # Game configuration
├── tests/               # Comprehensive test suite
│   ├── ui/             # UI component tests (Sprint 2)
│   ├── __tests__/      # Core game logic tests
│   └── [categories]/   # Organized by test type
└── assets/             # Static assets
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

## Current Status: Sprint 3 (Week 3) - Enhanced UX & Gameplay Features

**Goal**: Fix critical UX issues and implement special card abilities for complete gameplay experience  
**Status**: IN PROGRESS - 0/8 tasks completed  
**Duration**: 7 days based on comprehensive gameplay testing  

### Sprint 1 COMPLETED ✅ (Week 1) - Foundation
- [x] **Task 1.1**: Initialize React Project (2 hours) - **COMPLETED**
- [x] **Task 1.2**: Project Structure & Development Tools (2 hours) - **COMPLETED**
- [x] **Task 1.3**: TypeScript Interfaces & Types (3 hours) - **COMPLETED**
- [x] **Task 1.4**: Game Context Setup (3 hours) - **COMPLETED**
- [x] **Task 1.5**: Game Reducer Implementation (4 hours) - **COMPLETED**
- [x] **Task 1.6**: Deck Management Utilities (3 hours) - **COMPLETED**
- [x] **Task 1.7**: Game Engine Core Logic (4 hours) - **COMPLETED**
- [x] **Task 1.8**: Game Flow Integration (2 hours) - **COMPLETED**

**🎉 SPRINT 1 COMPLETE! 🎉** - All 125+ tests passing, solid foundation achieved

### Sprint 2 COMPLETED ✅ (Week 2) - UI/UX Implementation
**MAJOR ACHIEVEMENTS:**
- [x] **Professional Casino Theme**: Rich green felt table, gold accents, authentic card styling
- [x] **Authentic Playing Cards**: Real card faces with suit symbols, professional card backs
- [x] **Typography Excellence**: Playfair Display for elegance, proper font hierarchy
- [x] **Visual Polish**: Comprehensive casino-themed interface transformation
- [x] **Enhanced Game Mechanics**: Bot AI with 5-second thinking delays, improved card interactions
- [x] **Quality Assurance**: All existing tests maintained, visual improvements validated

**🎉 SPRINT 2 COMPLETE! 🎉** - Professional casino interface achieved beyond original scope

### Sprint 3 CURRENT PROGRESS ⏳ (Week 3) - Enhanced UX & Gameplay
**CRITICAL UX FIXES (Phase 1):**
- [ ] **3.1**: Fix Modal & Viewport Management - Round results positioning (1 day) - **IN PROGRESS** 🔄
- [ ] **3.2**: Mobile Responsiveness - Portrait orientation optimization (1.5 days) - PENDING
- [ ] **3.3**: Action Button Redesign - Standardize styling across game phases (0.5 days) - PENDING

**SPECIAL ABILITIES (Phase 2):**
- [ ] **3.4**: Queen Peek Ability - Implement peek modal and targeting system (1 day) - PENDING
- [ ] **3.5**: Jack Swap Ability - Create swap interface and card exchange (1.5 days) - PENDING

**ENHANCED INTERACTIONS (Phase 3):**
- [ ] **3.6**: Enhanced Visual Feedback - Hover states and action indicators (0.5 days) - PENDING
- [ ] **3.7**: Accessibility Improvements - Keyboard navigation and ARIA labels (0.5 days) - PENDING
- [ ] **3.8**: Performance Optimization - Animation timing and bundle size (0.5 days) - PENDING

## Implementation Phases

### Sprint 2 (Week 2): UI/UX Implementation ⏳ CURRENT
**5/15 microtasks completed** - Major visual transformation achieved
- ✅ Casino color palette and felt table background  
- ✅ Professional typography system
- ✅ Authentic playing card design (faces and backs)
- 🔄 Continue with buttons, modals, mobile optimization

### Sprint 3 (Week 3): Enhanced Features & Polish
- Action button redesign and interactions
- Special ability modal interfaces  
- Mobile responsiveness and animations
- Advanced game controls and status displays

### Sprint 4 (Week 4): Advanced Features & Deployment
- Enhanced bot AI (multiple difficulty levels)
- Performance optimization and accessibility
- Final testing and quality assurance  
- Production deployment preparation

## Critical Design Decisions

**State Immutability**: All game state updates must be immutable - use spread operators and avoid mutations.

**Turn Validation**: Validate all player actions - prevent invalid moves, handle edge cases like empty deck.

**Bot Integration**: Bots make moves through same action system as humans, with realistic delays for UX.

**Responsive Design**: Landscape-first with player at bottom, opponents positioned around screen. Mobile support with responsive card sizes and touch-friendly interactions.

**Special Abilities**: Complex interaction system - peek allows viewing any card, swap exchanges cards between players. Only activate from deck draws.

**Casino Theme**: Professional appearance with green felt table, gold accents, authentic playing card design, and elegant typography using Playfair Display for headers.

## Development Notes

### Current Development Guidelines (Sprint 2)
- Follow sprint2_microtasks.md for UI implementation order
- All new UI components must include comprehensive tests
- Maintain casino theme consistency across all components
- Use established color palette: casino-green, card-red, gold accents
- Typography: font-casino (Playfair), font-body (Inter), font-mono (JetBrains)
- Test UI components with React Testing Library + Vitest

### Code Quality Standards
- All code must be TypeScript with proper interfaces (no 'any' types)
- Maintain 100% test coverage for new UI components (46 tests added)
- Follow existing architecture patterns (Context + useReducer)
- Reference game_design_document.md for rule clarifications
- Use technical_architecture_document.md for detailed state structure
- UI implementation should enhance ui_ux_wireframes.md specifications

### Testing Strategy
- UI tests in src/tests/ui/ (ColorSystem, Typography, CardBack, CardFace)
- Core game logic tests in src/__tests__/ (125+ existing tests)
- Integration tests for complete game flow
- Performance tests for animations and interactions
- All tests must pass before proceeding to next microtask