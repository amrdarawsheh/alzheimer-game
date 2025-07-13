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
`

const TableEdge = styled.div`
  background: linear-gradient(135deg, #ffc107 0%, #ff9800 100%);
  border-radius: 16px;
  padding: 8px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  border: 4px solid #ffeb3b;
`

const FeltSurface = styled.div`
  background: linear-gradient(135deg, #4caf50 0%, #2e7d32 100%);
  border-radius: 12px;
  padding: 12px;
  box-shadow: inset 0 0 30px rgba(0, 0, 0, 0.3), 0 2px 8px rgba(0, 0, 0, 0.2);
  border: 4px solid #8bc34a;
  position: relative;
  overflow: hidden;
  
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
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              
              {/* Top Player Area (Opponents) */}
              {gameState.players.length > 1 && (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
                  {gameState.players.slice(1).map((player, index) => (
                    <PlayerArea 
                      key={player.id} 
                      player={player} 
                      isCurrentPlayer={gameState.round.currentPlayerIndex === index + 1}
                      showAsOpponent={true}
                    />
                  ))}
                </div>
              )}

              {/* Center Game Area */}
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
                
                {/* Deck and Discard */}
                <DeckArea />
                
                {/* Drawn Card Display */}
                <DrawnCard />
                
              </div>

              {/* Bottom Player Area (Human Player) */}
              {gameState.players.length > 0 && (
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <PlayerArea 
                    player={gameState.players[0]} 
                    isCurrentPlayer={gameState.round.currentPlayerIndex === 0}
                    showAsOpponent={false}
                  />
                </div>
              )}

              {/* Game Controls */}
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <GameControls />
              </div>

              {/* Game Status at bottom */}
              <div style={{ textAlign: 'center', marginTop: '16px' }}>
                <GameStatus />
              </div>

            </div>
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