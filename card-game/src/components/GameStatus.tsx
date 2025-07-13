import React from 'react'
import styled from 'styled-components'
import { useGame } from '../hooks/useGame'
import { GamePhase } from '../types'

// Styled Components for Enhanced Game Status
const StatusContainer = styled.div`
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0.25) 100%);
  border-radius: 16px;
  padding: 24px;
  backdrop-filter: blur(12px);
  border: 2px solid rgba(255, 215, 0, 0.3);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3), 0 4px 12px rgba(255, 215, 0, 0.1);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255, 215, 0, 0.05) 0%, rgba(255, 165, 0, 0.02) 100%);
    pointer-events: none;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent 0%, rgba(255, 215, 0, 0.6) 50%, transparent 100%);
    animation: statusShimmer 3s infinite;
  }
  
  @keyframes statusShimmer {
    0%, 100% { opacity: 0.5; }
    50% { opacity: 1; }
  }
  
  @media (max-width: 768px) {
    padding: 20px;
    border-radius: 12px;
    border-width: 1px;
  }
  
  @media (max-width: 480px) {
    padding: 16px;
    border-radius: 10px;
  }
`

const StatusGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  text-align: center;
  color: white;
  position: relative;
  z-index: 10;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
  }
  
  @media (max-width: 480px) {
    gap: 16px;
  }
`

const StatusItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 16px 12px;
  border: 1px solid rgba(255, 215, 0, 0.2);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  
  &:hover {
    background: rgba(255, 255, 255, 0.12);
    border-color: rgba(255, 215, 0, 0.4);
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }
  
  @media (max-width: 768px) {
    padding: 12px 8px;
    border-radius: 10px;
  }
  
  @media (max-width: 480px) {
    padding: 10px 6px;
    border-radius: 8px;
  }
`

const StatusLabel = styled.div`
  font-size: 13px;
  opacity: 0.85;
  margin-bottom: 6px;
  font-weight: 600;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
  font-family: 'Inter', sans-serif;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: rgba(255, 215, 0, 0.9);
  
  @media (max-width: 768px) {
    font-size: 12px;
    margin-bottom: 4px;
  }
  
  @media (max-width: 480px) {
    font-size: 11px;
    margin-bottom: 3px;
  }
`

const StatusValue = styled.div`
  font-weight: bold;
  font-size: 18px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  font-family: 'Playfair Display', serif;
  color: white;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
  
  @media (max-width: 480px) {
    font-size: 14px;
  }
`

const PlayerInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 480px) {
    gap: 4px;
    flex-direction: column;
  }
`

const BotBadge = styled.span`
  font-size: 12px;
  background: linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%);
  color: white;
  padding: 4px 8px;
  border-radius: 12px;
  font-weight: bold;
  text-shadow: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  border: 1px solid #1E40AF;
  
  @media (max-width: 768px) {
    font-size: 10px;
    padding: 2px 6px;
    border-radius: 8px;
  }
  
  @media (max-width: 480px) {
    font-size: 9px;
    padding: 2px 4px;
    border-radius: 6px;
  }
`

const StopCallAlert = styled.div`
  grid-column: span 2;
  background: linear-gradient(135deg, #EF4444 0%, #DC2626 100%);
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 8px 25px rgba(239, 68, 68, 0.4);
  border: 2px solid #B91C1C;
  animation: alertPulse 2s infinite;
  
  @keyframes alertPulse {
    0%, 100% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.02); opacity: 0.95; }
  }
  
  @media (min-width: 768px) {
    grid-column: span 4;
  }
  
  @media (max-width: 768px) {
    padding: 12px;
    border-radius: 8px;
    border-width: 1px;
  }
  
  @media (max-width: 480px) {
    padding: 8px;
    border-radius: 6px;
  }
`

const StopTitle = styled.div`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 4px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
  
  @media (max-width: 480px) {
    font-size: 14px;
    margin-bottom: 2px;
  }
`

const StopDetails = styled.div`
  font-size: 14px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 768px) {
    font-size: 12px;
  }
  
  @media (max-width: 480px) {
    font-size: 11px;
  }
`

const TurnProgressBar = styled.div<{ progress: number }>`
  position: relative;
  width: 100%;
  height: 8px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  overflow: hidden;
  margin-top: 8px;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${props => props.progress}%;
    background: linear-gradient(90deg, #10B981 0%, #34D399 100%);
    border-radius: 4px;
    transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  @media (max-width: 768px) {
    height: 6px;
    margin-top: 6px;
  }
`

const TurnCounter = styled.div<{ isUrgent: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  font-family: 'JetBrains Mono', monospace;
  
  .turn-number {
    font-size: 18px;
    font-weight: bold;
    color: ${props => props.isUrgent ? '#EF4444' : '#34D399'};
    animation: ${props => props.isUrgent ? 'urgentTurn 1s infinite' : 'none'};
  }
  
  @keyframes urgentTurn {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
  }
  
  @media (max-width: 768px) {
    .turn-number {
      font-size: 16px;
    }
  }
`

const DeckProgressContainer = styled.div`
  grid-column: span 2;
  
  @media (min-width: 768px) {
    grid-column: span 4;
  }
`

const ProgressLabel = styled.div`
  font-size: 14px;
  opacity: 0.9;
  margin-bottom: 8px;
  font-weight: 500;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 768px) {
    font-size: 12px;
    margin-bottom: 6px;
  }
  
  @media (max-width: 480px) {
    font-size: 11px;
    margin-bottom: 4px;
  }
`

const ProgressBarContainer = styled.div`
  background: rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  height: 8px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.3);
  
  @media (max-width: 768px) {
    height: 6px;
    border-radius: 6px;
  }
  
  @media (max-width: 480px) {
    height: 4px;
    border-radius: 4px;
  }
`

const ProgressBar = styled.div<{ progress: number }>`
  background: ${props => {
    if (props.progress > 80) return 'linear-gradient(90deg, #EF4444 0%, #DC2626 100%)'; // Red when nearly complete
    if (props.progress > 60) return 'linear-gradient(90deg, #F59E0B 0%, #D97706 100%)'; // Yellow when getting close
    return 'linear-gradient(90deg, #10B981 0%, #059669 100%)'; // Green when plenty left
  }};
  border-radius: 8px;
  height: 100%;
  width: ${props => props.progress}%;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: ${props => {
    if (props.progress > 80) return '0 2px 8px rgba(239, 68, 68, 0.4), 0 0 12px rgba(239, 68, 68, 0.2)';
    if (props.progress > 60) return '0 2px 8px rgba(245, 158, 11, 0.4), 0 0 12px rgba(245, 158, 11, 0.2)';
    return '0 2px 8px rgba(16, 185, 129, 0.4), 0 0 12px rgba(16, 185, 129, 0.2)';
  }};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.3) 50%, transparent 100%);
    animation: progressShine 2s infinite;
  }
  
  @keyframes progressShine {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
  
  @media (max-width: 768px) {
    border-radius: 6px;
  }
  
  @media (max-width: 480px) {
    border-radius: 4px;
  }
`

const ProgressText = styled.div`
  font-size: 12px;
  margin-top: 8px;
  opacity: 0.9;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
  font-family: 'JetBrains Mono', monospace;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
  
  @media (max-width: 768px) {
    font-size: 11px;
    margin-top: 6px;
  }
  
  @media (max-width: 480px) {
    font-size: 10px;
    margin-top: 4px;
  }
`

export const GameStatus: React.FC = () => {
  const { gameState, actions } = useGame()
  const currentPlayer = actions.getCurrentPlayer()
  const stats = actions.getGameStatistics()

  const getPhaseDisplay = (phase: GamePhase) => {
    switch (phase) {
      case GamePhase.SETUP: return 'Game Setup'
      case GamePhase.CARD_VIEWING: return 'Card Viewing'
      case GamePhase.PLAYING: return 'Playing'
      case GamePhase.SCORING: return 'Round Complete'
      case GamePhase.FINISHED: return 'Game Finished'
      default: return phase
    }
  }

  return (
    <StatusContainer>
      <StatusGrid>
        
        {/* Phase and Round */}
        <StatusItem>
          <StatusLabel>Phase</StatusLabel>
          <StatusValue>{getPhaseDisplay(gameState.round.phase)}</StatusValue>
        </StatusItem>

        <StatusItem>
          <StatusLabel>Round</StatusLabel>
          <StatusValue>{gameState.match.currentRound}</StatusValue>
        </StatusItem>

        {/* Current Player */}
        {(gameState.round.phase === GamePhase.PLAYING || gameState.round.phase === GamePhase.CARD_VIEWING) && currentPlayer && (
          <StatusItem>
            <StatusLabel>Current Player</StatusLabel>
            <PlayerInfo>
              <span>{currentPlayer.name}</span>
              {currentPlayer.type === 'bot' && (
                <BotBadge>BOT</BotBadge>
              )}
            </PlayerInfo>
          </StatusItem>
        )}

        {/* Turn Number with Progress */}
        {gameState.round.phase === GamePhase.PLAYING && (
          <StatusItem>
            <StatusLabel>Turn</StatusLabel>
            <TurnCounter isUrgent={gameState.round.stopCalled && gameState.round.remainingTurns <= 2}>
              <span className="turn-number">{gameState.round.turnNumber}</span>
            </TurnCounter>
            {gameState.round.stopCalled && (
              <TurnProgressBar 
                progress={((gameState.players.length - gameState.round.remainingTurns) / gameState.players.length) * 100}
              />
            )}
          </StatusItem>
        )}

        {/* Stop Called Indicator */}
        {gameState.round.stopCalled && (
          <StopCallAlert>
            <StopTitle>STOP CALLED!</StopTitle>
            <StopDetails>
              {gameState.round.remainingTurns} turn{gameState.round.remainingTurns !== 1 ? 's' : ''} remaining
            </StopDetails>
          </StopCallAlert>
        )}

        {/* Deck Progress */}
        {gameState.round.phase === GamePhase.PLAYING && (
          <DeckProgressContainer>
            <ProgressLabel>Deck Progress</ProgressLabel>
            <ProgressBarContainer>
              <ProgressBar progress={((54 - gameState.deck.drawPile.length) / 54) * 100} />
            </ProgressBarContainer>
            <ProgressText>
              {gameState.deck.drawPile.length} cards remaining • Turn {gameState.round.turnNumber}
            </ProgressText>
          </DeckProgressContainer>
        )}

        {/* Match Progress */}
        {gameState.match.roundsToWin > 1 && (
          <DeckProgressContainer>
            <ProgressLabel>Match Progress</ProgressLabel>
            <ProgressBarContainer>
              <ProgressBar progress={(gameState.match.currentRound / gameState.match.roundsToWin) * 100} />
            </ProgressBarContainer>
            <ProgressText>
              Round {gameState.match.currentRound} of {gameState.match.roundsToWin}
            </ProgressText>
          </DeckProgressContainer>
        )}

      </StatusGrid>
    </StatusContainer>
  )
}