import React, { useState } from 'react'
import styled from 'styled-components'
import { useGame } from '../hooks/useGame'
import { ActionIndicator } from './ActionIndicator'

// Styled Components for Enhanced Deck Area
const DeckContainer = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  backdrop-filter: blur(8px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255, 215, 0, 0.05) 0%, rgba(255, 165, 0, 0.02) 100%);
    border-radius: 18px;
    pointer-events: none;
  }
  
  @media (max-width: 768px) {
    gap: 24px;
    padding: 20px;
    border-radius: 16px;
  }
  
  @media (max-width: 480px) {
    gap: 16px;
    padding: 16px;
    border-radius: 12px;
  }
`

const PileContainer = styled.div`
  text-align: center;
  position: relative;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
  }
`

const CardPile = styled.div<{ canDraw: boolean; isEmpty: boolean; isDiscard?: boolean }>`
  width: 120px;
  height: 160px;
  border-radius: 12px;
  border: 3px solid ${props => {
    if (props.isEmpty) return '#6B7280';
    if (props.isDiscard) return props.canDraw ? '#8B5CF6' : '#D1D5DB';
    return props.canDraw ? '#3B82F6' : '#1E40AF';
  }};
  position: relative;
  cursor: ${props => props.canDraw ? 'pointer' : 'default'};
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  background: ${props => {
    if (props.isEmpty) return 'linear-gradient(135deg, #6B7280 0%, #4B5563 100%)';
    if (props.isDiscard) return 'linear-gradient(135deg, #F8F9FA 0%, #E9ECEF 100%)';
    return 'linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)';
  }};
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  
  /* Draw animation pulse */
  ${props => props.canDraw && `
    animation: drawPulse 2s infinite;
    
    @keyframes drawPulse {
      0%, 100% {
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2), 
                    0 0 0 0 ${props.isDiscard ? 'rgba(139, 92, 246, 0.7)' : 'rgba(59, 130, 246, 0.7)'};
      }
      50% {
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2), 
                    0 0 0 8px ${props.isDiscard ? 'rgba(139, 92, 246, 0)' : 'rgba(59, 130, 246, 0)'};
      }
    }
  `}
  
  @media (max-width: 768px) {
    width: 80px;
    height: 107px;
    border-radius: 8px;
    border-width: 2px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
  
  @media (max-width: 480px) {
    width: 60px;
    height: 80px;
    border-radius: 6px;
    border-width: 1px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  }
  
  ${props => props.canDraw && `
    &:hover {
      transform: scale(1.05) translateY(-4px);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
      border-color: ${props.isDiscard ? '#A855F7' : '#60A5FA'};
    }
  `}
  
  ${props => props.isEmpty && `
    border-style: dashed;
    opacity: 0.6;
  `}
`

const StackEffect = styled.div<{ layer: number }>`
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #1E40AF 0%, #3730A3 100%);
  border-radius: 12px;
  transform: ${props => `translate(${props.layer * 4}px, ${props.layer * 4}px)`};
  z-index: ${props => -props.layer};
`

const DeckFace = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%);
  border-radius: 10px;
  border: 2px solid #60A5FA;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    inset: 8px;
    border: 2px solid rgba(147, 197, 253, 0.5);
    border-radius: 6px;
  }
`

const DeckContent = styled.div`
  color: white;
  text-align: center;
  z-index: 10;
  
  .deck-label {
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 4px;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  }
  
  .deck-count {
    font-size: 24px;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    
    @media (max-width: 768px) {
      font-size: 18px;
    }
    
    @media (max-width: 480px) {
      font-size: 14px;
    }
  }
  
  .empty-label {
    color: #9CA3AF;
    font-size: 12px;
  }
`

const DiscardContent = styled.div<{ color: string }>`
  width: 100%;
  height: 100%;
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;
  color: ${props => props.color};
  position: relative;
  border-radius: 10px;
  border: 2px solid rgba(255, 215, 0, 0.3);
  background: linear-gradient(135deg, #F8F9FA 0%, #E9ECEF 100%);
  box-sizing: border-box;
  
  .rank {
    font-size: 16px;
    font-weight: bold;
    font-family: 'JetBrains Mono', monospace;
    
    @media (max-width: 768px) {
      font-size: 12px;
    }
    
    @media (max-width: 480px) {
      font-size: 10px;
    }
  }
  
  .suit {
    font-size: 20px;
    line-height: 1;
  }
  
  .center {
    font-size: 32px;
    font-weight: bold;
    
    @media (max-width: 768px) {
      font-size: 24px;
    }
    
    @media (max-width: 480px) {
      font-size: 18px;
    }
  }
  
  .value {
    font-size: 12px;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    padding: 2px 4px;
    font-weight: bold;
  }
`

const DrawIndicator = styled.div<{ color: string }>`
  position: absolute;
  top: -12px;
  right: -12px;
  background: ${props => props.color};
  color: white;
  font-size: 10px;
  padding: 4px 6px;
  border-radius: 8px;
  font-weight: bold;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  animation: pulse 2s infinite;
  z-index: 20;
  
  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
  }
  
  @media (max-width: 768px) {
    top: -8px;
    right: -8px;
    font-size: 8px;
    padding: 2px 4px;
  }
`

const PileLabel = styled.div`
  color: white;
  font-size: 14px;
  font-weight: 600;
  margin-top: 16px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  font-family: 'Playfair Display', serif;
  letter-spacing: 0.5px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
  padding: 8px 16px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(4px);
  transition: all 0.3s ease;
  
  &:hover {
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.1) 100%);
    border-color: rgba(255, 215, 0, 0.3);
  }
  
  @media (max-width: 768px) {
    font-size: 12px;
    margin-top: 12px;
    padding: 6px 12px;
    border-radius: 8px;
  }
  
  @media (max-width: 480px) {
    font-size: 11px;
    margin-top: 8px;
    padding: 4px 8px;
    border-radius: 6px;
  }
`

const SpecialIndicator = styled.div`
  position: absolute;
  top: 4px;
  right: 4px;
  width: 12px;
  height: 12px;
  background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
  border-radius: 50%;
  border: 1px solid #FF8C00;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`

const PointBadge = styled.div`
  position: absolute;
  top: 3px;
  right: 3px;
  font-size: 10px;
  font-weight: bold;
  background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #FF8C00;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  z-index: 10;
  
  @media (max-width: 768px) {
    width: 18px;
    height: 18px;
    font-size: 10px;
    top: 2px;
    right: 2px;
    border-width: 1px;
  }
  
  @media (max-width: 480px) {
    width: 14px;
    height: 14px;
    font-size: 8px;
    top: 1px;
    right: 1px;
  }
`

const DeckProgressBar = styled.div<{ percentage: number }>`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 0 0 10px 10px;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${props => props.percentage}%;
    background: ${props => {
      if (props.percentage > 66) return 'linear-gradient(90deg, #10B981 0%, #34D399 100%)'; // Green when plenty left
      if (props.percentage > 33) return 'linear-gradient(90deg, #F59E0B 0%, #FBBF24 100%)'; // Yellow when moderate
      return 'linear-gradient(90deg, #EF4444 0%, #F87171 100%)'; // Red when running low
    }};
    transition: width 0.3s ease, background 0.3s ease;
    animation: ${props => props.percentage <= 33 ? 'lowDeckPulse 1.5s infinite' : 'none'};
  }
  
  @keyframes lowDeckPulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.7; }
  }
`

const DeckStatusIndicator = styled.div<{ cardsLeft: number; total: number }>`
  position: absolute;
  top: -8px;
  right: -8px;
  background: ${props => {
    const percentage = (props.cardsLeft / props.total) * 100;
    if (percentage > 66) return 'linear-gradient(135deg, #10B981 0%, #059669 100%)';
    if (percentage > 33) return 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)';
    return 'linear-gradient(135deg, #EF4444 0%, #DC2626 100%)';
  }};
  color: white;
  font-size: 10px;
  font-weight: bold;
  padding: 2px 6px;
  border-radius: 10px;
  border: 2px solid white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  font-family: 'JetBrains Mono', monospace;
  
  ${props => {
    const percentage = (props.cardsLeft / props.total) * 100;
    return percentage <= 33 ? `
      animation: urgentBlink 1s infinite;
      
      @keyframes urgentBlink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.6; }
      }
    ` : '';
  }}
  
  @media (max-width: 768px) {
    font-size: 9px;
    padding: 1px 4px;
    top: -6px;
    right: -6px;
  }
`

export const DeckArea: React.FC = () => {
  const { gameState, actions } = useGame()
  const [hoveredPile, setHoveredPile] = useState<'deck' | 'discard' | null>(null)
  
  const currentPlayer = actions.getCurrentPlayer()
  const isHumanTurn = currentPlayer?.type === 'human'
  const hasDrawnCard = !!gameState.ui.selectedCard
  
  const canDrawFromDeck = actions.canDrawFromDeck() && isHumanTurn && !hasDrawnCard
  const canDrawFromDiscard = actions.canDrawFromDiscard() && isHumanTurn && !hasDrawnCard

  // Get top discard card for display
  const topDiscardCardId = gameState.deck.discardPile[gameState.deck.discardPile.length - 1]
  const topDiscardCard = topDiscardCardId ? actions.getCardById(topDiscardCardId) : null

  // Get card color based on suit
  const getCardColor = (suit?: string) => {
    if (!suit) return '#374151'
    return (suit === 'hearts' || suit === 'diamonds') ? '#DC2626' : '#1F2937'
  }

  // Get suit symbol
  const getSuitSymbol = (suit?: string) => {
    if (!suit) return ''
    switch (suit) {
      case 'hearts': return '♥'
      case 'diamonds': return '♦'
      case 'clubs': return '♣'
      case 'spades': return '♠'
      default: return ''
    }
  }

  // Get display rank
  const getDisplayRank = (rank?: string) => {
    if (!rank) return ''
    if (rank === 'joker') return 'JOK'
    if (rank === 'ace') return 'A'
    if (rank === 'king') return 'K'
    if (rank === 'queen') return 'Q'
    if (rank === 'jack') return 'J'
    return rank
  }

  return (
    <DeckContainer>
      
      {/* Draw Pile */}
      <PileContainer>
        <CardPile 
          canDraw={canDrawFromDeck}
          isEmpty={gameState.deck.drawPile.length === 0}
          onClick={canDrawFromDeck ? () => actions.drawFromDeck() : undefined}
          onMouseEnter={() => setHoveredPile('deck')}
          onMouseLeave={() => setHoveredPile(null)}
        >
        
          {/* Action Indicator */}
          {canDrawFromDeck && (
            <ActionIndicator
              action="Click to draw"
              visible={hoveredPile === 'deck'}
              position="top"
              variant="primary"
            />
          )}
          
          {/* Deck Stack Effect */}
          {gameState.deck.drawPile.length > 0 && (
            <>
              <StackEffect layer={1} />
              <StackEffect layer={2} />
            </>
          )}
          
          {/* Deck Face */}
          <DeckFace>
            <DeckContent>
              {gameState.deck.drawPile.length > 0 ? (
                <>
                  <div className="deck-label">DECK</div>
                  <div className="deck-count">{gameState.deck.drawPile.length}</div>
                </>
              ) : (
                <div className="empty-label">EMPTY</div>
              )}
            </DeckContent>
            
            {/* Deck Progress Indicators */}
            {gameState.deck.drawPile.length > 0 && (
              <>
                <DeckProgressBar 
                  percentage={(gameState.deck.drawPile.length / 54) * 100}
                />
                <DeckStatusIndicator 
                  cardsLeft={gameState.deck.drawPile.length}
                  total={54}
                >
                  {Math.round((gameState.deck.drawPile.length / 54) * 100)}%
                </DeckStatusIndicator>
              </>
            )}
          </DeckFace>

          {/* Draw Indicator */}
          {canDrawFromDeck && (
            <DrawIndicator color="#10B981">
              DRAW
            </DrawIndicator>
          )}

        </CardPile>
        
        <PileLabel>
          Draw Pile
        </PileLabel>
      </PileContainer>

      {/* Discard Pile */}
      <PileContainer>
        <CardPile 
          canDraw={canDrawFromDiscard}
          isEmpty={gameState.deck.discardPile.length === 0}
          isDiscard={true}
          onClick={canDrawFromDiscard ? () => actions.drawFromDiscard() : undefined}
          onMouseEnter={() => setHoveredPile('discard')}
          onMouseLeave={() => setHoveredPile(null)}
        >
        
          {/* Action Indicator */}
          {canDrawFromDiscard && (
            <ActionIndicator
              action="Click to draw"
              visible={hoveredPile === 'discard'}
              position="top"
              variant="info"
            />
          )}
          
          {gameState.deck.discardPile.length > 0 && topDiscardCard ? (
            /* Top Discard Card */
            <DiscardContent color={getCardColor(topDiscardCard.suit)}>
              
              {/* Top Left Corner */}
              <div style={{ 
                position: 'absolute',
                top: '8px',
                left: '8px',
                textAlign: 'left',
                lineHeight: '1'
              }}>
                <div className="rank">{getDisplayRank(topDiscardCard.rank)}</div>
                {topDiscardCard.suit && (
                  <div className="suit">{getSuitSymbol(topDiscardCard.suit)}</div>
                )}
              </div>

              {/* Center */}
              <div className="center" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                {topDiscardCard.rank === 'joker' ? '🃏' : getSuitSymbol(topDiscardCard.suit)}
              </div>

              {/* Bottom Corner - positioned absolutely */}
              <div style={{ 
                position: 'absolute', 
                bottom: '8px', 
                right: '8px', 
                transform: 'rotate(180deg)', 
                textAlign: 'right',
                lineHeight: '1'
              }}>
                <div className="rank">{getDisplayRank(topDiscardCard.rank)}</div>
                {topDiscardCard.suit && (
                  <div className="suit">{getSuitSymbol(topDiscardCard.suit)}</div>
                )}
              </div>

              {/* Special Card Indicator */}
              {topDiscardCard.isSpecial && <SpecialIndicator />}

            </DiscardContent>
          ) : (
            /* Empty Discard Pile */
            <DeckContent>
              <div className="empty-label">
                <div>DISCARD</div>
                <div>PILE</div>
              </div>
            </DeckContent>
          )}

          {/* Draw Indicator */}
          {canDrawFromDiscard && (
            <DrawIndicator color="#8B5CF6">
              DRAW
            </DrawIndicator>
          )}

        </CardPile>
        
        <PileLabel>
          Discard ({gameState.deck.discardPile.length})
        </PileLabel>
      </PileContainer>

    </DeckContainer>
  )
}