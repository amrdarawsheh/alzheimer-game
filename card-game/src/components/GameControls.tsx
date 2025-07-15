import React, { useState } from 'react'
import styled from 'styled-components'
import { useGame } from '../hooks/useGame'
import { GamePhase } from '../types'

// Styled Components for Game Controls
const SetupContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`

const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: #1F2937;
  margin-bottom: 8px;
`

const Select = styled.select`
  width: 100%;
  padding: 12px 16px;
  border: 3px solid #FFD700;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  background: white;
  color: #1F2937;
  transition: all 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: #FFA500;
    box-shadow: 0 0 0 3px rgba(255, 165, 0, 0.3);
  }
`

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 12px;
`

const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 12px 16px;
  border: 3px solid #FFD700;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  background: white;
  color: #1F2937;
  transition: all 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: #FFA500;
    box-shadow: inset 0 0 0 2px rgba(255, 165, 0, 0.3);
  }
  
  &::placeholder {
    color: #9CA3AF;
    font-weight: 400;
  }
`

const StartGameButton = styled.button`
  width: 100%;
  padding: 16px 32px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 14px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 3px solid;
  position: relative;
  z-index: 100;
  font-family: 'Inter', sans-serif;
  letter-spacing: 0.5px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  
  background: linear-gradient(135deg, #10B981 0%, #059669 100%);
  color: white;
  border-color: #047857;
  box-shadow: 0 6px 20px rgba(16, 185, 129, 0.4), 0 3px 8px rgba(0, 0, 0, 0.2);
  
  /* Enhanced accessibility */
  &:focus {
    outline: none;
    ring: 3px solid rgba(16, 185, 129, 0.5);
    ring-offset: 2px;
  }
  
  /* Ripple effect */
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
    pointer-events: none;
  }
  
  &:active::before {
    width: 300px;
    height: 300px;
  }
  
  &:hover {
    background: linear-gradient(135deg, #059669 0%, #047857 100%);
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 10px 30px rgba(16, 185, 129, 0.6), 0 5px 15px rgba(0, 0, 0, 0.3);
    border-color: #065F46;
  }
  
  &:active {
    transform: translateY(-1px) scale(1.01);
    transition: all 0.1s ease;
  }
  
  @media (max-width: 768px) {
    padding: 14px 28px;
    font-size: 16px;
    border-radius: 12px;
  }
  
  @media (max-width: 480px) {
    padding: 12px 24px;
    font-size: 15px;
    border-radius: 10px;
  }
`

const ControlsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
`

const ActionButton = styled.button<{ variant: 'discard' | 'stop' | 'dev' }>`
  padding: 14px 28px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 14px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 3px solid;
  position: relative;
  z-index: 100;
  font-family: 'Inter', sans-serif;
  letter-spacing: 0.5px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  
  /* Enhanced accessibility */
  &:focus {
    outline: none;
    ring: 3px solid rgba(255, 255, 255, 0.5);
    ring-offset: 2px;
  }
  
  /* Ripple effect */
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
    pointer-events: none;
  }
  
  &:active::before {
    width: 300px;
    height: 300px;
  }
  
  ${props => {
    switch (props.variant) {
      case 'discard':
        return `
          background: linear-gradient(135deg, #EF4444 0%, #DC2626 100%);
          color: white;
          border-color: #B91C1C;
          box-shadow: 0 6px 20px rgba(239, 68, 68, 0.4), 0 3px 8px rgba(0, 0, 0, 0.2);
          
          &:hover {
            background: linear-gradient(135deg, #DC2626 0%, #B91C1C 100%);
            transform: translateY(-3px) scale(1.02);
            box-shadow: 0 10px 30px rgba(239, 68, 68, 0.6), 0 5px 15px rgba(0, 0, 0, 0.3);
            border-color: #991B1B;
          }
          
          &:focus {
            ring-color: rgba(239, 68, 68, 0.7);
          }
        `;
      case 'stop':
        return `
          background: linear-gradient(135deg, #F59E0B 0%, #D97706 100%);
          color: white;
          border-color: #B45309;
          box-shadow: 0 6px 20px rgba(245, 158, 11, 0.4), 0 3px 8px rgba(0, 0, 0, 0.2);
          animation: stopPulse 3s infinite;
          
          &:hover {
            background: linear-gradient(135deg, #D97706 0%, #B45309 100%);
            transform: translateY(-3px) scale(1.02);
            box-shadow: 0 10px 30px rgba(245, 158, 11, 0.6), 0 5px 15px rgba(0, 0, 0, 0.3);
            border-color: #92400E;
            animation: none;
          }
          
          &:focus {
            ring-color: rgba(245, 158, 11, 0.7);
          }
          
          @keyframes stopPulse {
            0%, 100% { 
              box-shadow: 0 6px 20px rgba(245, 158, 11, 0.4), 0 3px 8px rgba(0, 0, 0, 0.2);
            }
            50% { 
              box-shadow: 0 8px 25px rgba(245, 158, 11, 0.6), 0 4px 12px rgba(0, 0, 0, 0.3);
            }
          }
        `;
      case 'dev':
        return `
          background: linear-gradient(135deg, #6B7280 0%, #4B5563 100%);
          color: white;
          border-color: #374151;
          font-size: 14px;
          padding: 10px 20px;
          box-shadow: 0 4px 12px rgba(107, 114, 128, 0.3), 0 2px 6px rgba(0, 0, 0, 0.2);
          opacity: 0.8;
          
          &:hover {
            background: linear-gradient(135deg, #4B5563 0%, #374151 100%);
            transform: translateY(-2px) scale(1.02);
            box-shadow: 0 6px 18px rgba(107, 114, 128, 0.4), 0 3px 9px rgba(0, 0, 0, 0.3);
            opacity: 1;
          }
          
          &:focus {
            ring-color: rgba(107, 114, 128, 0.7);
          }
        `;
    }
  }}
  
  &:active {
    transform: translateY(-1px) scale(1.01);
    transition: all 0.1s ease;
  }
  
  @media (max-width: 768px) {
    padding: 12px 24px;
    font-size: 15px;
    border-radius: 12px;
    
    ${props => props.variant === 'dev' && `
      padding: 8px 16px;
      font-size: 13px;
    `}
  }
  
  @media (max-width: 480px) {
    padding: 10px 20px;
    font-size: 14px;
    border-radius: 10px;
    
    ${props => props.variant === 'dev' && `
      padding: 6px 12px;
      font-size: 12px;
    `}
  }
`

const ViewingPanel = styled.div`
  text-align: center;
  
  .panel {
    background: rgba(255, 255, 255, 0.15);
    border-radius: 12px;
    padding: 24px;
    backdrop-filter: blur(8px);
    border: 2px solid rgba(255, 255, 255, 0.2);
  }
  
  .title {
    color: white;
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 12px;
  }
  
  .description {
    color: rgba(255, 255, 255, 0.9);
    font-size: 14px;
    margin-bottom: 16px;
  }
`

const FinishedPanel = styled.div`
  text-align: center;
  
  .panel {
    background: rgba(255, 255, 255, 0.15);
    border-radius: 12px;
    padding: 32px;
    backdrop-filter: blur(8px);
    border: 2px solid rgba(255, 255, 255, 0.2);
    margin-bottom: 16px;
  }
  
  .title {
    color: white;
    font-weight: bold;
    font-size: 24px;
    margin-bottom: 16px;
  }
  
  .winner {
    color: #FEF08A;
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 16px;
  }
  
  .standings {
    color: white;
    
    .standings-title {
      font-weight: bold;
      margin-bottom: 8px;
    }
    
    .player-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 14px;
      margin-bottom: 4px;
    }
  }
`

export const GameControls: React.FC = () => {
  const { gameState, actions } = useGame()
  const [playerCount, setPlayerCount] = useState(2)
  const [playerNames, setPlayerNames] = useState(['You', 'Bot 1', 'Bot 2', 'Bot 3'])
  
  const currentPlayer = actions.getCurrentPlayer()
  const isHumanTurn = currentPlayer?.type === 'human'
  const hasDrawnCard = !!gameState.ui.selectedCard
  
  const canCallStop = actions.canCallStop() && isHumanTurn

  // Setup Phase Controls
  if (gameState.round.phase === GamePhase.SETUP) {
    return (
      <SetupContainer>
        
        {/* Player Count Selection */}
        <FormGroup>
          <Label>
            Number of Players
          </Label>
          <Select 
            value={playerCount}
            onChange={(e) => setPlayerCount(Number(e.target.value))}
          >
            <option value={2}>2 Players</option>
            <option value={3}>3 Players</option>
            <option value={4}>4 Players</option>
          </Select>
        </FormGroup>

        {/* Player Names */}
        <FormGroup>
          <Label>
            Player Names
          </Label>
          <InputContainer>
            {Array.from({ length: playerCount }, (_, i) => (
              <Input
                key={i}
                type="text"
                value={playerNames[i]}
                onChange={(e) => {
                  const newNames = [...playerNames]
                  newNames[i] = e.target.value
                  setPlayerNames(newNames)
                }}
                placeholder={i === 0 ? 'Your name' : `Bot ${i}`}
              />
            ))}
          </InputContainer>
        </FormGroup>

        {/* Start Game Button */}
        <StartGameButton
          onClick={() => actions.startGame(playerCount, playerNames.slice(0, playerCount))}
        >
          🎮 Start Game 🎮
        </StartGameButton>

      </SetupContainer>
    )
  }

  // Card Viewing Phase Controls
  if (gameState.round.phase === GamePhase.CARD_VIEWING) {
    return (
      <ViewingPanel>
        <div className="panel">
          <h3 className="title">Memorize Your Cards!</h3>
          <p className="description">
            Look at your face-up cards and remember them. They will be hidden once the game starts.
          </p>
          <StartGameButton
            onClick={() => actions.makeMove({ type: 'START_PLAYING', payload: {} })}
          >
            🚀 Start Playing
          </StartGameButton>
        </div>
      </ViewingPanel>
    )
  }

  // Playing Phase Controls
  if (gameState.round.phase === GamePhase.PLAYING) {
    return (
      <ControlsContainer>
        
        {/* Discard Button (when card is drawn) */}
        {hasDrawnCard && isHumanTurn && (
          <ActionButton
            variant="discard"
            onClick={() => actions.discardDrawnCard()}
          >
            🗑️ Discard Card
          </ActionButton>
        )}

        {/* Call Stop Button */}
        {canCallStop && (
          <ActionButton
            variant="stop"
            onClick={() => actions.callStop()}
          >
            ✋ Call Stop
          </ActionButton>
        )}

        {/* End Turn Button (available for human players) */}
        {isHumanTurn && !hasDrawnCard && (
          <ActionButton
            variant="dev"
            onClick={() => actions.forceEndTurn()}
          >
            ⏭️ End Turn
          </ActionButton>
        )}

        {/* Development Controls (only in development) */}
        {import.meta.env.DEV && (
          <>
            {currentPlayer?.type === 'bot' && (
              <ActionButton
                variant="dev"
                onClick={() => actions.processBotTurn()}
              >
                🤖 Process Bot
              </ActionButton>
            )}
          </>
        )}

      </ControlsContainer>
    )
  }

  // Scoring Phase Controls - handled by ScoreModal now
  if (gameState.round.phase === GamePhase.SCORING) {
    return null // ScoreModal will handle this
  }

  // Finished Phase Controls
  if (gameState.round.phase === GamePhase.FINISHED) {
    return (
      <FinishedPanel>
        
        {/* Game Results */}
        <div className="panel">
          <h2 className="title">🎉 Game Complete! 🎉</h2>
          
          {gameState.match.winner && (
            <div className="winner">
              {gameState.players.find(p => p.id === gameState.match.winner)?.name} wins the match!
            </div>
          )}

          {/* Final Standings */}
          <div className="standings">
            <h4 className="standings-title">Final Standings:</h4>
            {gameState.players
              .sort((a, b) => b.roundWins - a.roundWins)
              .map((player, index) => (
                <div key={player.id} className="player-row">
                  <span>{index + 1}. {player.name}</span>
                  <span>{player.roundWins} round{player.roundWins !== 1 ? 's' : ''}</span>
                </div>
              ))
            }
          </div>
        </div>

        {/* New Game Button */}
        <StartGameButton
          onClick={() => window.location.reload()}
        >
          🔄 New Game
        </StartGameButton>

      </FinishedPanel>
    )
  }

  return null
}