import React from 'react'
import styled from 'styled-components'
import { useGame } from '../hooks/useGame'
import { GamePhase } from '../types'
import { PlayerArea } from './PlayerArea'
import { DeckArea } from './DeckArea'
import { GameControls } from './GameControls'
import { GameStatus } from './GameStatus'
import { DrawnCard } from './DrawnCard'
import { SpecialAbilityModal } from './SpecialAbilityModal'
import { PeekResultModal } from './PeekResultModal'
import { ScoreModal } from './ScoreModal'

// Styled Components with vibrant colors
const VibrantBackground = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, 
    #6a1b9a 0%,    /* Purple */
    #d32f2f 25%,   /* Red */
    #ff6f00 50%,   /* Orange */
    #388e3c 75%,   /* Green */
    #1976d2 100%   /* Blue */
  );
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg,
      rgba(255, 193, 7, 0.3) 0%,
      rgba(233, 30, 99, 0.3) 25%,
      rgba(76, 175, 80, 0.3) 50%,
      rgba(33, 150, 243, 0.3) 75%,
      rgba(156, 39, 176, 0.3) 100%
    );
  }
`

const GameContainer = styled.div`
  max-width: 800px;
  width: 100%;
  position: relative;
  z-index: 10;
  
  @media (max-width: 768px) {
    max-width: 100%;
    padding: 4px;
  }
  
  @media (max-width: 480px) {
    padding: 8px;
  }
`

const TableEdge = styled.div`
  background: linear-gradient(135deg, #ffc107 0%, #ff9800 100%);
  border-radius: 16px;
  padding: 8px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  border: 4px solid #ffeb3b;
  
  @media (max-width: 768px) {
    border-radius: 12px;
    padding: 6px;
    border-width: 3px;
  }
  
  @media (max-width: 480px) {
    border-radius: 8px;
    padding: 4px;
    border-width: 2px;
  }
`

const FeltSurface = styled.div`
  background: linear-gradient(135deg, #4caf50 0%, #2e7d32 100%);
  border-radius: 12px;
  padding: 12px;
  box-shadow: inset 0 0 30px rgba(0, 0, 0, 0.3), 0 2px 8px rgba(0, 0, 0, 0.2);
  border: 4px solid #8bc34a;
  position: relative;
  overflow: hidden;
  
  @media (max-width: 768px) {
    border-radius: 8px;
    padding: 8px;
    border-width: 3px;
  }
  
  @media (max-width: 480px) {
    border-radius: 6px;
    padding: 6px;
    border-width: 2px;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg,
      rgba(76, 175, 80, 0.2) 25%,
      transparent 25%
    ),
    linear-gradient(-45deg,
      rgba(76, 175, 80, 0.2) 25%,
      transparent 25%
    );
    background-size: 20px 20px;
    opacity: 0.3;
    
    @media (max-width: 480px) {
      background-size: 15px 15px;
    }
  }
`

const GameTitle = styled.h1<{ isPlaying?: boolean }>`
  font-size: ${props => props.isPlaying ? '2rem' : '3rem'};
  font-family: 'Playfair Display', serif;
  font-weight: bold;
  background: linear-gradient(135deg, #ffeb3b 0%, #ff9800 50%, #f44336 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: ${props => props.isPlaying ? '8px' : '16px'};
  text-align: center;
  letter-spacing: ${props => props.isPlaying ? '1px' : '2px'};
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    font-size: ${props => props.isPlaying ? '1.5rem' : '2rem'};
    letter-spacing: ${props => props.isPlaying ? '0.5px' : '1px'};
    margin-bottom: ${props => props.isPlaying ? '6px' : '12px'};
  }
  
  @media (max-width: 480px) {
    font-size: ${props => props.isPlaying ? '1.25rem' : '1.5rem'};
    letter-spacing: 0.5px;
    margin-bottom: ${props => props.isPlaying ? '4px' : '8px'};
  }
`

const TitleDivider = styled.div`
  border-top: 4px solid #ffeb3b;
  width: 160px;
  margin: 0 auto 24px;
  opacity: 0.9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`

const WelcomePanel = styled.div`
  background: linear-gradient(135deg, #00bcd4 0%, #2196f3 50%, #9c27b0 100%);
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  max-width: 450px;
  margin: 0 auto;
  border: 4px solid #e91e63;
  backdrop-filter: blur(8px);
  overflow: visible;
`

const WelcomeTitle = styled.h2`
  font-size: 2rem;
  font-family: 'Playfair Display', serif;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 16px;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`

const WelcomeText = styled.p`
  color: #ffffff;
  margin-bottom: 24px;
  font-size: 1.125rem;
  font-weight: 600;
  text-align: center;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
`

// New responsive layout components
const GameLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  
  @media (max-width: 768px) {
    gap: 12px;
  }
  
  @media (max-width: 480px) {
    gap: 8px;
  }
`

const OpponentsGrid = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }
  
  @media (max-width: 480px) {
    gap: 8px;
  }
`

const CenterGameArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
  }
  
  @media (max-width: 480px) {
    gap: 12px;
  }
`

const PlayerContainer = styled.div`
  display: flex;
  justify-content: center;
`

const ControlsContainer = styled.div`
  display: flex;
  justify-content: center;
`

const StatusContainer = styled.div`
  text-align: center;
  margin-top: 16px;
  
  @media (max-width: 768px) {
    margin-top: 12px;
  }
  
  @media (max-width: 480px) {
    margin-top: 8px;
  }
`

export const GameBoard: React.FC = () => {
  const { gameState, actions } = useGame()
  
  // Check for special ability modals
  const drawnCardId = gameState.ui.selectedCard
  const drawnCard = drawnCardId ? actions.getCardById(drawnCardId) : null
  const showSpecialAbility = drawnCard?.isSpecial && gameState.ui.currentModal === 'special-ability'
  const showPeekResult = gameState.ui.currentModal === 'peek-result' && gameState.ui.showingPeekCard
  const peekCard = showPeekResult ? actions.getCardById(gameState.ui.showingPeekCard!) : null
  const showScoreModal = gameState.round.phase === GamePhase.SCORING
  
  const handleUseSpecialAbility = (params: any) => {
    if (!drawnCard) return
    
    if (drawnCard.rank === 'queen') {
      // Peek ability
      actions.peekCard(params.targetCardId)
    } else if (drawnCard.rank === 'jack') {
      // Swap ability
      actions.swapCards(
        params.playerCardIndex,
        params.targetPlayerId, 
        params.targetCardIndex
      )
    }
  }
  
  const handleSkipSpecialAbility = () => {
    if (!drawnCard) return
    actions.skipSpecialAbility(drawnCard.id)
  }

  return (
    <VibrantBackground>
      <GameContainer>
        <TableEdge>
          <FeltSurface>
            
          {/* Game Header */}
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <GameTitle isPlaying={gameState.round.phase !== GamePhase.SETUP}>
              Alzheimer's Card Game
            </GameTitle>
            <TitleDivider />
          </div>

          {/* Game Setup */}
          {gameState.round.phase === GamePhase.SETUP && (
            <div style={{ textAlign: 'center' }}>
              <WelcomePanel>
                <WelcomeTitle>Welcome to the Table!</WelcomeTitle>
                <WelcomeText>Ready to test your memory? Start a new game to begin playing.</WelcomeText>
                <GameControls />
              </WelcomePanel>
            </div>
          )}

          {/* Main Game Area */}
          {(gameState.round.phase === GamePhase.CARD_VIEWING || gameState.round.phase === GamePhase.PLAYING || gameState.round.phase === GamePhase.SCORING || gameState.round.phase === GamePhase.FINISHED) && (
            <GameLayout>
              
              {/* Top Player Area (Opponents) */}
              {gameState.players.length > 1 && (
                <OpponentsGrid>
                  {gameState.players.slice(1).map((player, index) => (
                    <PlayerArea 
                      key={player.id} 
                      player={player} 
                      isCurrentPlayer={gameState.round.currentPlayerIndex === index + 1}
                      showAsOpponent={true}
                    />
                  ))}
                </OpponentsGrid>
              )}

              {/* Center Game Area */}
              <CenterGameArea>
                {/* Deck and Discard */}
                <DeckArea />
                
                {/* Drawn Card Display */}
                <DrawnCard />
              </CenterGameArea>

              {/* Bottom Player Area (Human Player) */}
              {gameState.players.length > 0 && (
                <PlayerContainer>
                  <PlayerArea 
                    player={gameState.players[0]} 
                    isCurrentPlayer={gameState.round.currentPlayerIndex === 0}
                    showAsOpponent={false}
                  />
                </PlayerContainer>
              )}

              {/* Game Controls */}
              <ControlsContainer>
                <GameControls />
              </ControlsContainer>

              {/* Game Status at bottom */}
              <StatusContainer>
                <GameStatus />
              </StatusContainer>

            </GameLayout>
          )}

          </FeltSurface>
        </TableEdge>

      {/* Special Ability Modal */}
      {showSpecialAbility && drawnCard && (
        <SpecialAbilityModal
          card={drawnCard}
          abilityType={drawnCard.rank === 'queen' ? 'peek' : 'swap'}
          onClose={() => actions.hideModal()}
          onUse={handleUseSpecialAbility}
          onSkip={handleSkipSpecialAbility}
        />
      )}

      {/* Peek Result Modal */}
      {showPeekResult && peekCard && (
        <PeekResultModal
          card={peekCard}
          onClose={() => {
            actions.hideModal()
            // Also clear the peek result
            if (gameState.ui.showingPeekCard) {
              actions.makeMove({ type: 'HIDE_PEEK_RESULT', payload: {} })
            }
          }}
        />
      )}

      {/* Score Modal */}
      {showScoreModal && (
        <ScoreModal
          onContinue={() => actions.forceProgressScoring()}
        />
      )}


      </GameContainer>
    </VibrantBackground>
  )
}