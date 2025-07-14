import React from 'react'
import styled from 'styled-components'
import { useGame } from '../hooks/useGame'

// Styled Components for Drawn Card
const DrawnCardContainer = styled.div`
  text-align: center;
  position: relative;
`

const DrawnCardDisplay = styled.div`
  margin-bottom: 16px;
`

const CardWrapper = styled.div`
  width: 120px;
  height: 160px;
  background: white;
  border-radius: 12px;
  border: 3px solid #FFD700;
  box-shadow: 0 8px 25px rgba(255, 215, 0, 0.4), 0 4px 10px rgba(0, 0, 0, 0.2);
  position: relative;
  animation: cardPulse 2s infinite;
  
  @keyframes cardPulse {
    0%, 100% { 
      transform: scale(1);
      box-shadow: 0 8px 25px rgba(255, 215, 0, 0.4), 0 4px 10px rgba(0, 0, 0, 0.2);
    }
    50% { 
      transform: scale(1.05);
      box-shadow: 0 12px 35px rgba(255, 215, 0, 0.6), 0 6px 15px rgba(0, 0, 0, 0.3);
    }
  }
  
  @media (max-width: 768px) {
    width: 80px;
    height: 107px;
    border-width: 2px;
  }
  
  @media (max-width: 480px) {
    width: 60px;
    height: 80px;
    border-width: 1px;
  }
`

const CardContent = styled.div<{ color: string }>`
  padding: 8px;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${props => props.color};
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 6px;
  }
  
  @media (max-width: 480px) {
    padding: 4px;
  }
`

const CardCorner = styled.div`
  position: absolute;
  top: 8px;
  left: 8px;
  text-align: left;
  line-height: 1;
  
  @media (max-width: 768px) {
    top: 6px;
    left: 6px;
  }
  
  @media (max-width: 480px) {
    top: 4px;
    left: 4px;
  }
`

const CardRank = styled.div`
  font-size: 16px;
  font-family: 'JetBrains Mono', monospace;
  font-weight: bold;
  line-height: 1;
  
  @media (max-width: 768px) {
    font-size: 12px;
  }
  
  @media (max-width: 480px) {
    font-size: 10px;
  }
`

const CardSuit = styled.div`
  font-size: 20px;
  line-height: 1;
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
  
  @media (max-width: 480px) {
    font-size: 12px;
  }
`

const CardCenter = styled.div`
  text-align: center;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`

const PointBadge = styled.div`
  font-size: 12px;
  font-weight: bold;
  background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
  color: white;
  border-radius: 6px;
  padding: 4px 8px;
  border: 2px solid #FF8C00;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    font-size: 10px;
    padding: 2px 6px;
    border-width: 1px;
  }
  
  @media (max-width: 480px) {
    font-size: 8px;
    padding: 2px 4px;
  }
`

const CardBottomCorner = styled.div`
  position: absolute;
  bottom: 8px;
  right: 8px;
  text-align: right;
  transform: rotate(180deg);
  line-height: 1;
  
  @media (max-width: 768px) {
    bottom: 6px;
    right: 6px;
  }
  
  @media (max-width: 480px) {
    bottom: 4px;
    right: 4px;
  }
`

const SpecialIndicator = styled.div`
  position: absolute;
  top: 6px;
  right: 6px;
  width: 16px;
  height: 16px;
  background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
  border-radius: 50%;
  border: 2px solid white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    width: 12px;
    height: 12px;
    top: 4px;
    right: 4px;
    border-width: 1px;
  }
  
  @media (max-width: 480px) {
    width: 10px;
    height: 10px;
    top: 2px;
    right: 2px;
  }
`

const CardInfo = styled.div`
  color: white;
  text-align: center;
`

const CardTitle = styled.div`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 8px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 6px;
  }
  
  @media (max-width: 480px) {
    font-size: 14px;
    margin-bottom: 4px;
  }
`


export const DrawnCard: React.FC = () => {
  const { gameState, actions } = useGame()
  const drawnCardId = gameState.ui.selectedCard
  const drawnCard = drawnCardId ? actions.getCardById(drawnCardId) : null

  if (!drawnCard) {
    return null
  }

  const getCardColor = () => {
    return (drawnCard.suit === 'hearts' || drawnCard.suit === 'diamonds') 
      ? '#DC2626' 
      : '#1F2937'
  }

  const getSuitSymbol = () => {
    switch (drawnCard.suit) {
      case 'hearts': return '♥'
      case 'diamonds': return '♦'
      case 'clubs': return '♣'
      case 'spades': return '♠'
      default: return ''
    }
  }

  const getDisplayRank = () => {
    if (drawnCard.rank === 'joker') return 'JOK'
    if (drawnCard.rank === 'ace') return 'A'
    if (drawnCard.rank === 'king') return 'K'
    if (drawnCard.rank === 'queen') return 'Q'
    if (drawnCard.rank === 'jack') return 'J'
    return drawnCard.rank?.toUpperCase() || ''
  }

  return (
    <DrawnCardContainer>
      
      {/* Drawn Card Display */}
      <DrawnCardDisplay>
        <CardWrapper>
          
          {/* Card Content */}
          <CardContent color={getCardColor()}>
            
            {/* Top Corner */}
            <CardCorner>
              <CardRank>
                {getDisplayRank()}
              </CardRank>
              {drawnCard.suit && (
                <CardSuit>
                  {getSuitSymbol()}
                </CardSuit>
              )}
            </CardCorner>

            {/* Center */}
            <CardCenter>
              <PointBadge>
                {drawnCard.value} pts
              </PointBadge>
            </CardCenter>

            {/* Bottom Corner (rotated) */}
            <CardBottomCorner>
              <CardRank>
                {getDisplayRank()}
              </CardRank>
              {drawnCard.suit && (
                <CardSuit>
                  {getSuitSymbol()}
                </CardSuit>
              )}
            </CardBottomCorner>

          </CardContent>

          {/* Special Card Indicator */}
          {drawnCard.isSpecial && (
            <SpecialIndicator />
          )}

        </CardWrapper>
      </DrawnCardDisplay>

      {/* Card Info */}
      <CardInfo>
        <CardTitle>Drawn Card</CardTitle>
      </CardInfo>

    </DrawnCardContainer>
  )
}