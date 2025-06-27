# Card Game Design Document

## Game Overview

### Core Concept
A competitive memory-based card game where players aim to collect the **lowest points** possible through strategic card management and memory skills.

### Key Features
- 2-4 players (starting with AI bots)
- Hidden information mechanics (face-down cards)
- Memory and strategy elements
- Special action cards
- Multiple rounds with match-based scoring

## Game Components

### Deck Composition
- **54 cards total**: Standard 52-card deck + 2 Jokers
- All standard suits: Hearts (♥), Diamonds (♦), Clubs (♣), Spades (♠)
- Ranks: Ace, 2-10, Jack, Queen, King + 2 Jokers

### Card Types

#### Point Cards
All cards have point values for scoring:
- **Ace**: 1 point
- **Numbers (2-9)**: Face value (2 = 2 points, 3 = 3 points, etc.)
- **10**: 0 points ⭐
- **Jack**: 11 points
- **Queen**: 12 points
- **King**: -2 points ⭐
- **Joker**: -4 points ⭐

#### Special Action Cards
Only when drawn from the main deck (not discard pile or swapped):
- **Queen**: Peek at any card (your own or opponent's)
- **Jack**: Swap one of your cards with any opponent's card

## Game Setup

### Initial Deal
1. Each player receives **4 face-down cards**
2. Players may **look at only 2** of their starting cards
3. Remaining deck becomes the draw pile
4. Top card of draw pile starts the discard pile

### Player Knowledge
- Players know 2 of their 4 cards initially
- Must remember card positions throughout the game
- Can see opponents' face-down cards but not their values

## Gameplay

### Turn Structure
On each turn, a player must:
1. **Draw a card** from either:
   - Draw pile (see the card before deciding)
   - Discard pile (only the top/visible card)
2. **Choose action**:
   - Replace one of their 4 cards with the drawn card
   - Discard the drawn card (no replacement)
3. **Reveal replaced card** (if any) to discard pile
4. **Execute special ability** (if drew Queen/Jack from draw pile)

### Special Card Actions
- **Queen (Peek)**: Look at any single card (yours or opponent's)
- **Jack (Swap)**: Exchange one of your face-down cards with any opponent's face-down card
- **Choice**: Player can choose to use the ability or treat as regular point card
- **Timing**: Abilities only activate when drawn from main deck, not from discard pile or through swapping

### Ending the Round

#### Manual Stop
- Any player can call "Stop" during their turn
- After calling "Stop", the player completes their turn normally
- All other players get **one final turn**
- Then proceed to scoring phase

#### Automatic Stop
- **If the draw pile is empty**, the round ends immediately
- No additional turns after the last card is drawn
- Proceed directly to scoring phase
- This prevents infinite gameplay loops

## Scoring System

### Round Scoring
1. All players reveal their 4 cards
2. Calculate total points using card values above
3. **Lowest total score wins the round**
4. Record round winner

### Match Scoring (Milestone 1)
- **First to win 3 rounds wins the match**
- Simple win/loss tracking per round

### Future Scoring Modes (Milestone 3-4)
- **Cumulative Mode**: Points accumulate across rounds
- **Elimination Mode**: Players eliminated when exceeding point threshold
- **Last Player Standing**: Continue until one player remains

## Win Conditions

### Round Victory
- Player with lowest point total wins the round
- Ties handled by replay or sharing victory (TBD)

### Match Victory
- First player to win 3 rounds wins the match

## AI Bot Behavior (Milestone 1)

### Easy Bot Strategy
- Makes random legal moves
- Randomly chooses to use or ignore special card abilities
- Random timing for calling "Stop"
- No memory of seen cards

### Future Bot Difficulties (Milestone 2-3)
- **Medium**: Basic memory, simple strategy
- **Hard**: Advanced memory, optimal play patterns

## User Stories

### Core Gameplay
1. **As a player**, I want to see my 4 face-down cards so I can track my hand
2. **As a player**, I want to peek at 2 cards initially so I have starting information
3. **As a player**, I want to draw from deck or discard pile so I can make strategic choices
4. **As a player**, I want to replace cards blindly so memory becomes important
5. **As a player**, I want to use special abilities so I can gain information or disrupt opponents

### Game Flow
6. **As a player**, I want to call "Stop" when I think I have low points
7. **As a player**, I want to see all cards revealed at round end so I can verify scoring
8. **As a player**, I want to track round wins so I know match progress

### Interface
9. **As a player**, I want clear turn indicators so I know when to act
10. **As a player**, I want to see the discard pile so I can make informed draws
11. **As a player**, I want visual feedback for special card abilities

## Technical Requirements

### Game State Management
- Track each player's 4 cards (face-up/face-down status)
- Manage draw pile and discard pile
- Handle turn rotation and game phases
- Store player memory/knowledge state

### UI Requirements
- Landscape orientation focus
- Cards positioned around screen (player at bottom)
- Central area for deck and discard pile
- Clear turn indicators and game status
- Smooth card animations for actions

### Data Persistence (Milestone 1)
- Local storage for match statistics
- No user authentication required initially

## Future Enhancements

### Milestone 2: Multiplayer
- Real-time gameplay with Socket.io
- User authentication and profiles
- Lobby system for finding games

### Milestone 3: Enhanced Features
- Multiple bot difficulties
- Cumulative scoring mode
- Portrait orientation support

### Milestone 4: Polish
- Advanced animations
- Game statistics and history
- Performance optimizations
- Sound effects and music

## Questions & Decisions

### Resolved
- ✅ Card replacement is blind (memory element)
- ✅ Special abilities only from draw pile
- ✅ Stop can be called anytime during turn
- ✅ First to 3 rounds wins match

### To Be Decided
- Tie-breaking mechanism for equal scores
- Exact UI layout and card sizing
- Animation timing and effects
- Bot naming and personalities