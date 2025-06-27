# START HERE - Card Game Development Guide

## 🎮 Project Overview

You're building a **competitive memory-based card game** where 2-4 players aim to collect the **lowest points** possible. Players start with 4 face-down cards, can only see 2 initially, and must use memory and strategy to win.

**Key Features:**

- 54-card deck (52 standard + 2 jokers)
- Hidden information mechanics (face-down cards)
- Special action cards (Queen = peek, Jack = swap)
- Multiple rounds (first to win 3 rounds wins match)
- AI bot opponents

## 🗂️ Documentation Structure

### **Primary Documents (Read These First)**

1. **📋 Milestone 1: Sprint Planning** - YOUR IMPLEMENTATION ROADMAP

   - details are under development_roadmap.md
   - 4 weekly sprints with 28 detailed tasks
   - Exact time estimates and acceptance criteria
   - **START WITH THIS DOCUMENT**

2. **🎯 Game Design Document** - COMPLETE GAME RULES

   - details are under game_design_document.md
   - All mechanics, scoring, win conditions
   - Reference for rule implementation

3. **🏗️ Technical Architecture Document** - SYSTEM DESIGN
   - details are under technical_architecture_document.md
   - Component structure, state management
   - TypeScript interfaces and data flow

### **Supporting Documents**

4. **🎨 UI/UX Wireframes** - VISUAL SPECIFICATIONS

   - details are under ui_ux_wireframes.md
   - Layout designs, component mockups
   - Animation and interaction specs

5. **🗓️ Development Roadmap** - LONG-TERM PLANNING
   - details are under development_roadmap.md
   - 16-week timeline for all milestones
   - Future multiplayer and feature plans

## 🚀 Implementation Strategy

### **Phase 1: Foundation (Week 1)**

**Goal:** Working React app with core architecture

**Start Here:**

```
Sprint Planning → Task 1.1: Initialize React Project
- React + Vite + TypeScript + Tailwind CSS
- Folder structure from Technical Architecture Document
- Development tools setup
```

**Critical First Tasks:**

1. Task 1.1-1.2: Project setup
2. Task 1.3: TypeScript interfaces
3. Task 1.4-1.5: Game context & state management
4. Task 1.6-1.8: Core game engine

### **Phase 2: Game Logic (Week 2)**

**Goal:** All game rules implemented

**Key Areas:**

- Player actions (draw, replace, special abilities)
- Round management (stop calling, scoring)
- Match progression (first to 3 wins)

### **Phase 3: User Interface (Week 3)**

**Goal:** Complete playable UI

**Key Areas:**

- Game board layout
- Card components with graphics
- Player interaction system

### **Phase 4: Polish (Week 4)**

**Goal:** Bot AI and final testing

**Key Areas:**

- Easy bot implementation
- Animations and polish
- Quality assurance

## 🎯 Key Decisions Already Made

### **Technology Stack**

- ✅ **Frontend:** React 18+ with TypeScript
- ✅ **Styling:** Tailwind CSS
- ✅ **Build Tool:** Vite
- ✅ **State Management:** React Context + useReducer
- ✅ **Target:** Web-first, landscape orientation

### **Game Rules Summary**

- ✅ **Deck:** 54 cards (52 standard + 2 jokers)
- ✅ **Players:** 2-4 (starting with bots)
- ✅ **Goal:** Lowest score wins
- ✅ **Cards per player:** 4 face-down (see 2 initially)
- ✅ **Special cards:** Queen (peek), Jack (swap) - only when drawn from deck
- ✅ **Scoring:** Ace=1, Numbers=face value, 10=0, Jack=11, Queen=12, King=-2, Joker=-4
- ✅ **Round end:** Player calls "Stop" OR deck runs empty
- ✅ **Match win:** First to win 3 rounds

### **Architecture Decisions**

- ✅ **State Structure:** Defined in Technical Architecture Document
- ✅ **Component Hierarchy:** Specified in wireframes
- ✅ **File Organization:** Clear folder structure provided

## 📋 Implementation Checklist

### **Sprint 1: Foundation** ⏳

- [ ] Task 1.1: React + Vite + TypeScript + Tailwind setup
- [ ] Task 1.2: Folder structure + dev tools (ESLint, Prettier)
- [ ] Task 1.3: TypeScript interfaces (Card, Player, GameState)
- [ ] Task 1.4: Game context setup
- [ ] Task 1.5: Game reducer implementation
- [ ] Task 1.6: Deck management utilities
- [ ] Task 1.7: Core game engine logic
- [ ] Task 1.8: Game flow integration

### **Validation Points**

After each task, verify:

- ✅ Code compiles without TypeScript errors
- ✅ Follows patterns from Technical Architecture Document
- ✅ Matches game rules from Game Design Document
- ✅ Acceptance criteria from Sprint Planning met

## 🔧 Getting Started Commands

### **Step 1: Project Initialization**

```bash
npm create vite@latest card-game -- --template react-ts
cd card-game
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### **Step 2: Folder Structure**

Create this structure (from Technical Architecture Document):

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

### **Step 3: Development Workflow**

```bash
npm run dev          # Start development server
npm run build        # Production build
npm run lint         # Code quality check
```

## 🎯 First Implementation Prompt

**Suggested Claude Code prompt:**

```
"I'm building a card game using React, TypeScript, and Tailwind CSS. I have detailed planning documents.

Please implement Sprint 1, Task 1.1 from my Sprint Planning document: Initialize React project with Vite, TypeScript, and Tailwind CSS. Use the exact folder structure from my Technical Architecture Document.

Context: This is a 4-player card game where players aim for lowest score. Complete rules are in my Game Design Document.

After setup, I'll ask you to implement the TypeScript interfaces next."
```

## ⚠️ Important Notes

### **Document References**

- Always reference specific documents by name
- Cite task numbers from Sprint Planning
- Cross-reference rules with Game Design Document

### **Quality Standards**

- All code must be TypeScript (no 'any' types)
- Follow React best practices
- Maintain immutable state updates
- Include proper error handling

### **Common Pitfalls**

- ❌ Don't implement all features at once
- ❌ Don't skip TypeScript interface definition
- ❌ Don't ignore the sprint task order
- ✅ Follow the incremental approach
- ✅ Validate each step against acceptance criteria
- ✅ Test each component as you build

## 🆘 If You Get Stuck

### **For Game Rules Questions**

→ Check **Game Design Document** sections:

- Game Components
- Gameplay rules
- Scoring System

### **For Technical Architecture**

→ Check **Technical Architecture Document** sections:

- State Management Architecture
- Component Architecture
- Game Logic Architecture

### **For Implementation Details**

→ Check **Sprint Planning Document** sections:

- Specific task acceptance criteria
- Implementation steps
- Definition of done

### **For UI/UX Questions**

→ Check **UI/UX Wireframes** sections:

- Component designs
- Layout specifications
- Animation requirements

## 🎯 Success Metrics

**You're on track if:**

- ✅ Each task takes roughly the estimated time
- ✅ Code passes all acceptance criteria
- ✅ No major architectural rework needed
- ✅ Game rules are correctly implemented
- ✅ UI matches wireframe specifications

**Red flags:**

- ❌ Tasks taking much longer than estimated
- ❌ Frequent need to rewrite large portions
- ❌ Game behavior doesn't match design document
- ❌ UI significantly different from wireframes

## 🚀 Ready to Code!

1. **Read Sprint Planning document** (focus on Sprint 1)
2. **Start with Task 1.1** (project setup)
3. **Follow task order exactly**
4. **Validate each step** against acceptance criteria
5. **Reference other docs** as needed for details

Good luck building your card game! 🎮
