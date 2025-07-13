import React from 'react'
import styled from 'styled-components'
import { useGame } from '../hooks/useGame'

interface MemoryTimelineProps {
  isVisible: boolean
  onToggle: () => void
}

const TimelineContainer = styled.div<{ isVisible: boolean }>`
  position: fixed;
  top: 20px;
  right: 20px;
  width: 300px;
  max-height: 400px;
  background: rgba(0, 0, 0, 0.9);
  border-radius: 12px;
  border: 2px solid #FFD700;
  padding: 16px;
  z-index: 1000;
  transform: ${props => props.isVisible ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(8px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
  
  @media (max-width: 768px) {
    width: 280px;
    top: 10px;
    right: 10px;
    max-height: 350px;
    padding: 12px;
  }
  
  @media (max-width: 480px) {
    width: calc(100vw - 20px);
    max-height: 300px;
    padding: 10px;
  }
`

const TimelineHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  
  h3 {
    color: #FFD700;
    font-size: 16px;
    font-weight: bold;
    margin: 0;
    font-family: 'Playfair Display', serif;
  }
  
  @media (max-width: 768px) {
    h3 {
      font-size: 14px;
    }
  }
`

const CloseButton = styled.button`
  background: none;
  border: none;
  color: #FFD700;
  font-size: 20px;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(255, 215, 0, 0.1);
    transform: scale(1.1);
  }
  
  @media (max-width: 768px) {
    font-size: 18px;
  }
`

const TimelineContent = styled.div`
  max-height: 320px;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #FFD700 transparent;
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #FFD700;
    border-radius: 3px;
  }
  
  @media (max-width: 768px) {
    max-height: 280px;
  }
  
  @media (max-width: 480px) {
    max-height: 220px;
  }
`

const MemoryEntry = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 8px;
  border-left: 4px solid #34D399;
  
  .entry-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 6px;
    
    .position {
      background: linear-gradient(135deg, #6366F1 0%, #4F46E5 100%);
      color: white;
      font-size: 10px;
      font-weight: bold;
      padding: 2px 6px;
      border-radius: 10px;
      font-family: 'JetBrains Mono', monospace;
    }
    
    .turn {
      color: #9CA3AF;
      font-size: 11px;
      font-family: 'JetBrains Mono', monospace;
    }
  }
  
  .card-info {
    color: white;
    font-size: 13px;
    font-weight: 500;
    
    .card-name {
      color: #FFD700;
      font-weight: bold;
    }
    
    .card-value {
      color: ${props => (value: number) => {
        if (value <= 0) return '#10B981';
        if (value <= 3) return '#34D399';
        if (value <= 6) return '#F59E0B';
        if (value <= 9) return '#FB923C';
        return '#EF4444';
      }};
      font-weight: bold;
    }
  }
  
  .strategy-hint {
    color: #D1D5DB;
    font-size: 11px;
    margin-top: 4px;
    font-style: italic;
  }
  
  @media (max-width: 768px) {
    padding: 10px;
    
    .card-info {
      font-size: 12px;
    }
    
    .strategy-hint {
      font-size: 10px;
    }
  }
`

const EmptyState = styled.div`
  text-align: center;
  color: #9CA3AF;
  font-style: italic;
  padding: 20px;
  
  .icon {
    font-size: 32px;
    margin-bottom: 8px;
    opacity: 0.5;
  }
  
  .text {
    font-size: 14px;
  }
  
  @media (max-width: 768px) {
    padding: 16px;
    
    .icon {
      font-size: 28px;
    }
    
    .text {
      font-size: 12px;
    }
  }
`

const ToggleButton = styled.button<{ isVisible: boolean }>`
  position: fixed;
  top: 20px;
  right: ${props => props.isVisible ? '340px' : '20px'};
  background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
  border: none;
  color: white;
  padding: 12px 16px;
  border-radius: 8px;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 12px rgba(255, 215, 0, 0.3);
  z-index: 999;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(255, 215, 0, 0.4);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (max-width: 768px) {
    right: ${props => props.isVisible ? '290px' : '10px'};
    top: 10px;
    padding: 10px 12px;
    font-size: 12px;
  }
  
  @media (max-width: 480px) {
    right: 10px;
    padding: 8px 10px;
    font-size: 11px;
  }
`

export const MemoryTimeline: React.FC<MemoryTimelineProps> = ({ isVisible, onToggle }) => {
  const { gameState, actions } = useGame()
  
  // Get memory entries for the human player
  const humanPlayer = gameState.players.find(p => p.type === 'human')
  if (!humanPlayer) return null
  
  // Create memory entries from known cards
  const memoryEntries = humanPlayer.cards
    .map((playerCard, index) => {
      if (!playerCard.isKnownToPlayer) return null
      
      const card = actions.getCardById(playerCard.cardId)
      if (!card) return null
      
      return {
        position: index + 1,
        card,
        turn: playerCard.turnSeen || 1, // Fallback to turn 1 if not tracked
        isCurrently: !playerCard.isRevealed
      }
    })
    .filter(Boolean)
    .sort((a, b) => (b?.turn || 0) - (a?.turn || 0)) // Most recent first
  
  const getCardColor = (value: number) => {
    if (value <= 0) return '#10B981'
    if (value <= 3) return '#34D399'
    if (value <= 6) return '#F59E0B'
    if (value <= 9) return '#FB923C'
    return '#EF4444'
  }
  
  const getStrategyHint = (value: number) => {
    if (value <= 0) return 'Excellent card - definitely keep!'
    if (value <= 3) return 'Great card - probably keep'
    if (value <= 6) return 'Decent card - consider keeping'
    if (value <= 9) return 'High value - consider replacing'
    return 'Very high value - replace if possible'
  }
  
  return (
    <>
      <ToggleButton isVisible={isVisible} onClick={onToggle}>
        {isVisible ? '✕' : '🧠'} Memory
      </ToggleButton>
      
      <TimelineContainer isVisible={isVisible}>
        <TimelineHeader>
          <h3>🧠 Memory Timeline</h3>
          <CloseButton onClick={onToggle}>✕</CloseButton>
        </TimelineHeader>
        
        <TimelineContent>
          {memoryEntries.length === 0 ? (
            <EmptyState>
              <div className="icon">👁️</div>
              <div className="text">No cards seen yet.<br />Start viewing your cards to build memory!</div>
            </EmptyState>
          ) : (
            memoryEntries.map((entry, index) => (
              <MemoryEntry key={`${entry?.position}-${entry?.turn}`}>
                <div className="entry-header">
                  <span className="position">Pos {entry?.position}</span>
                  <span className="turn">Turn {entry?.turn}</span>
                </div>
                <div className="card-info">
                  <span className="card-name">
                    {entry?.card.rank === 'joker' ? 'Joker' : 
                     `${entry?.card.rank?.toUpperCase()} of ${entry?.card.suit}`}
                  </span>
                  {' '}
                  <span className="card-value" style={{ color: getCardColor(entry?.card.value || 0) }}>
                    ({entry?.card.value} pts)
                  </span>
                  {entry?.isCurrently && <span> • Currently hidden</span>}
                </div>
                <div className="strategy-hint">
                  {getStrategyHint(entry?.card.value || 0)}
                </div>
              </MemoryEntry>
            ))
          )}
        </TimelineContent>
      </TimelineContainer>
    </>
  )
}