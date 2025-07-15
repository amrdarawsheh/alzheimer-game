import React from 'react'
import styled from 'styled-components'
import type { Player } from '../types'
import { PlayingCard } from './PlayingCard'
import { useGame } from '../hooks/useGame'

interface PlayerAreaProps {
  player: Player
  isCurrentPlayer: boolean
  showAsOpponent: boolean
}

// Styled Components for Enhanced Player Area
const PlayerContainer = styled.div<{ isCurrentPlayer: boolean; showAsOpponent: boolean }>`
  background: ${props => props.isCurrentPlayer 
    ? 'linear-gradient(135deg, rgba(255, 215, 0, 0.15) 0%, rgba(255, 165, 0, 0.1) 100%)' 
    : 'rgba(255, 255, 255, 0.08)'};
  backdrop-filter: blur(12px);
  border-radius: 16px;
  padding: ${props => props.showAsOpponent ? '16px' : '20px'};
  border: 2px solid ${props => props.isCurrentPlayer ? '#FFD700' : 'rgba(255, 255, 255, 0.2)'};
  box-shadow: ${props => props.isCurrentPlayer 
    ? '0 8px 32px rgba(255, 215, 0, 0.3), 0 0 20px rgba(255, 215, 0, 0.2)' 
    : '0 4px 16px rgba(0, 0, 0, 0.2)'};
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: ${props => props.isCurrentPlayer 
      ? 'linear-gradient(90deg, #FFD700 0%, #FFA500 50%, #FFD700 100%)'
      : 'transparent'};
    animation: ${props => props.isCurrentPlayer ? 'shimmer 2s infinite' : 'none'};
  }
  
  @keyframes shimmer {
    0% { opacity: 0.5; }
    50% { opacity: 1; }
    100% { opacity: 0.5; }
  }
  
  @media (max-width: 768px) {
    padding: ${props => props.showAsOpponent ? '12px' : '16px'};
    border-radius: 12px;
  }
`

const PlayerHeader = styled.div<{ showAsOpponent: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${props => props.showAsOpponent ? '12px' : '16px'};
  gap: 12px;
  
  @media (max-width: 768px) {
    margin-bottom: 12px;
    gap: 8px;
  }
`

const PlayerInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
`

const PlayerName = styled.h3<{ showAsOpponent: boolean }>`
  font-family: 'Playfair Display', serif;
  font-weight: bold;
  color: white;
  font-size: ${props => props.showAsOpponent ? '16px' : '18px'};
  margin: 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  
  @media (max-width: 768px) {
    font-size: ${props => props.showAsOpponent ? '14px' : '16px'};
  }
`

const Badge = styled.span<{ variant: 'bot' | 'turn' }>`
  font-size: 10px;
  font-weight: bold;
  padding: 4px 8px;
  border-radius: 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  white-space: nowrap;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  border: 1px solid;
  
  ${props => props.variant === 'bot' && `
    background: linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%);
    color: white;
    border-color: #1E40AF;
  `}
  
  ${props => props.variant === 'turn' && `
    background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
    color: #000;
    border-color: #FF8C00;
    animation: turnPulse 2s infinite;
  `}
  
  @keyframes turnPulse {
    0%, 100% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.05); opacity: 0.9; }
  }
  
  @media (max-width: 768px) {
    font-size: 9px;
    padding: 3px 6px;
  }
`

const PlayerStats = styled.div<{ showAsOpponent: boolean }>`
  text-align: right;
  color: white;
  min-width: 0;
  
  .score {
    font-size: ${props => props.showAsOpponent ? '13px' : '14px'};
    margin-bottom: 2px;
    font-family: 'JetBrains Mono', monospace;
    
    .label {
      opacity: 0.8;
      margin-right: 4px;
    }
    
    .value {
      font-weight: bold;
      color: #FFD700;
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
    }
  }
  
  .wins {
    font-size: ${props => props.showAsOpponent ? '11px' : '12px'};
    opacity: 0.7;
    font-family: 'Inter', sans-serif;
  }
  
  @media (max-width: 768px) {
    .score {
      font-size: ${props => props.showAsOpponent ? '12px' : '13px'};
    }
    
    .wins {
      font-size: ${props => props.showAsOpponent ? '10px' : '11px'};
    }
  }
`

const CardsContainer = styled.div<{ showAsOpponent: boolean }>`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: ${props => props.showAsOpponent ? '8px' : '20px'};
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-1px);
  }
  
  @media (max-width: 768px) {
    gap: ${props => props.showAsOpponent ? '6px' : '16px'};
  }
  
  @media (max-width: 480px) {
    gap: ${props => props.showAsOpponent ? '4px' : '12px'};
  }
`

const BotStatus = styled.div`
  margin-top: 12px;
  text-align: center;
  
  .thinking {
    background: linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%);
    color: white;
    font-size: 12px;
    font-weight: 500;
    padding: 8px 16px;
    border-radius: 20px;
    border: 2px solid #1E40AF;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
    animation: thinkingPulse 1.5s infinite;
  }
  
  .thinking::before {
    content: '🤖';
    font-size: 14px;
  }
  
  @keyframes thinkingPulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.8; transform: scale(1.02); }
  }
  
  @media (max-width: 768px) {
    margin-top: 8px;
    
    .thinking {
      font-size: 11px;
      padding: 6px 12px;
    }
  }
`

export const PlayerArea: React.FC<PlayerAreaProps> = ({ 
  player, 
  isCurrentPlayer, 
  showAsOpponent 
}) => {
  const { gameState } = useGame()
  const playerScore = player.score > 0 ? player.score : null
  const isBotThinking = gameState.ui.isBotThinking && isCurrentPlayer && player.type === 'bot'

  return (
    <PlayerContainer isCurrentPlayer={isCurrentPlayer} showAsOpponent={showAsOpponent}>
      
      {/* Player Header */}
      <PlayerHeader showAsOpponent={showAsOpponent}>
        <PlayerInfo>
          <PlayerName showAsOpponent={showAsOpponent}>{player.name}</PlayerName>
          {player.type === 'bot' && (
            <Badge variant="bot">BOT</Badge>
          )}
          {isCurrentPlayer && (
            <Badge variant="turn">TURN</Badge>
          )}
        </PlayerInfo>
        
        {/* Player Stats */}
        <PlayerStats showAsOpponent={showAsOpponent}>
          {playerScore !== null && (
            <div className="score">
              <span className="label">Score:</span>
              <span className="value">{playerScore}</span>
            </div>
          )}
          <div className="wins">
            Round wins: {player.roundWins}
          </div>
        </PlayerStats>
      </PlayerHeader>

      {/* Player Cards */}
      <CardsContainer showAsOpponent={showAsOpponent}>
        {player.cards.map((playerCard, index) => (
          <PlayingCard
            key={index}
            playerCard={playerCard}
            cardIndex={index}
            playerId={player.id}
            showAsOpponent={showAsOpponent}
            isCurrentPlayer={isCurrentPlayer}
            isHumanPlayer={player.type === 'human'}
          />
        ))}
      </CardsContainer>

      {/* Bot Status */}
      {isBotThinking && (
        <BotStatus>
          <div className="thinking">
            Bot is thinking...
          </div>
        </BotStatus>
      )}

    </PlayerContainer>
  )
}