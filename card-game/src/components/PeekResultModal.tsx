import React from 'react'
import styled from 'styled-components'
import type { Card } from '../types'

interface PeekResultModalProps {
  card: Card
  onClose: () => void
}

// Styled Components for Peek Result Modal
const PeekModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
  animation: peekFadeIn 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  
  @keyframes peekFadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
`

const PeekModalContainer = styled.div`
  background: linear-gradient(135deg, #1A1A2E 0%, #16213E 100%);
  border-radius: 20px;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.7), 0 0 40px rgba(52, 211, 153, 0.3);
  max-width: 24rem;
  width: 95%;
  border: 3px solid rgba(52, 211, 153, 0.4);
  position: relative;
  animation: peekSlideUp 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  
  @keyframes peekSlideUp {
    0% {
      opacity: 0;
      transform: scale(0.8) translateY(30px);
    }
    100% {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  }
  
  @media (max-width: 768px) {
    width: 90%;
    border-radius: 16px;
    border-width: 2px;
  }
`

const PeekModalHeader = styled.div`
  background: linear-gradient(135deg, #10B981 0%, #059669 50%, #047857 100%);
  color: white;
  padding: 20px;
  border-radius: 17px 17px 0 0;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 0%, transparent 100%);
    pointer-events: none;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent 0%, rgba(52, 211, 153, 0.8) 50%, transparent 100%);
  }
  
  @media (max-width: 768px) {
    padding: 16px;
    border-radius: 13px 13px 0 0;
  }
`

const PeekHeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 10;
`

const PeekHeaderTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  font-family: 'Playfair Display', serif;
  margin: 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 768px) {
    font-size: 18px;
  }
`

const PeekCloseButton = styled.button`
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.3);
  color: white;
  font-size: 20px;
  font-weight: bold;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  
  &:hover {
    background: rgba(255, 255, 255, 0.3);
    border-color: rgba(255, 255, 255, 0.5);
    transform: scale(1.1);
  }
  
  &:active {
    transform: scale(0.95);
    transition: all 0.1s ease;
  }
  
  @media (max-width: 768px) {
    width: 32px;
    height: 32px;
    font-size: 18px;
  }
`

const PeekModalContent = styled.div`
  padding: 32px;
  color: white;
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 24px;
  }
`

const PeekedCardContainer = styled.div`
  margin-bottom: 24px;
  display: flex;
  justify-content: center;
  
  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`

const PeekedCard = styled.div<{ suit: string }>`
  width: 128px;
  height: 176px;
  background: ${props => {
    switch (props.suit) {
      case 'hearts': return 'linear-gradient(135deg, #F8F9FA 0%, #E9ECEF 100%)';
      case 'diamonds': return 'linear-gradient(135deg, #F8F9FA 0%, #E9ECEF 100%)';
      case 'clubs': return 'linear-gradient(135deg, #F8F9FA 0%, #E9ECEF 100%)';
      case 'spades': return 'linear-gradient(135deg, #F8F9FA 0%, #E9ECEF 100%)';
      default: return 'linear-gradient(135deg, #F8F9FA 0%, #E9ECEF 100%)';
    }
  }};
  border-radius: 12px;
  border: 3px solid rgba(52, 211, 153, 0.6);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4), 0 0 20px rgba(52, 211, 153, 0.3);
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  animation: cardRevealGlow 2s infinite;
  
  @keyframes cardRevealGlow {
    0%, 100% {
      box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4), 0 0 20px rgba(52, 211, 153, 0.3);
    }
    50% {
      box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4), 0 0 30px rgba(52, 211, 153, 0.5);
    }
  }
  
  @media (max-width: 768px) {
    width: 112px;
    height: 154px;
    padding: 10px;
    border-radius: 10px;
    border-width: 2px;
  }
`

const CardCorner = styled.div<{ color: string; rotated?: boolean }>`
  text-align: ${props => props.rotated ? 'right' : 'left'};
  color: ${props => props.color};
  transform: ${props => props.rotated ? 'rotate(180deg)' : 'none'};
  
  .rank {
    font-size: 16px;
    font-weight: bold;
    line-height: 0.9;
    font-family: 'JetBrains Mono', monospace;
    
    @media (max-width: 768px) {
      font-size: 14px;
    }
  }
  
  .suit {
    font-size: 20px;
    line-height: 0.9;
    
    @media (max-width: 768px) {
      font-size: 18px;
    }
  }
`

const CardCenter = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  
  .points-badge {
    background: linear-gradient(135deg, #1F2937 0%, #374151 100%);
    color: white;
    font-size: 12px;
    font-weight: bold;
    padding: 4px 8px;
    border-radius: 8px;
    border: 2px solid #6B7280;
    font-family: 'JetBrains Mono', monospace;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    
    @media (max-width: 768px) {
      font-size: 11px;
      padding: 3px 6px;
    }
  }
`

const SpecialIndicator = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 16px;
  height: 16px;
  background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
  border-radius: 50%;
  border: 2px solid #FF8C00;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    width: 14px;
    height: 14px;
    top: 6px;
    right: 6px;
    border-width: 1px;
  }
`

const CardInfoSection = styled.div`
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    margin-bottom: 16px;
  }
`

const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: #34D399;
  margin: 0 0 8px 0;
  font-family: 'Playfair Display', serif;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 6px;
  }
`

const CardPoints = styled.p`
  color: rgba(255, 255, 255, 0.9);
  margin: 0 0 8px 0;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  
  .points-value {
    font-weight: bold;
    color: #FFD700;
  }
  
  @media (max-width: 768px) {
    font-size: 13px;
    margin-bottom: 6px;
  }
`

const SpecialCardNote = styled.p`
  color: #FFD700;
  font-weight: bold;
  margin: 0;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  
  @media (max-width: 768px) {
    font-size: 13px;
  }
`

const TipSection = styled.div`
  background: linear-gradient(135deg, rgba(52, 211, 153, 0.15) 0%, rgba(16, 185, 129, 0.1) 100%);
  border: 2px solid rgba(52, 211, 153, 0.3);
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 24px;
  
  p {
    color: rgba(52, 211, 153, 0.9);
    font-size: 13px;
    margin: 0;
    font-family: 'Inter', sans-serif;
    font-weight: 500;
  }
  
  @media (max-width: 768px) {
    padding: 12px;
    margin-bottom: 20px;
    border-radius: 10px;
    
    p {
      font-size: 12px;
    }
  }
`

const PeekModalFooter = styled.div`
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.5) 100%);
  padding: 20px 32px;
  border-radius: 0 0 17px 17px;
  border-top: 2px solid rgba(52, 211, 153, 0.2);
  
  @media (max-width: 768px) {
    padding: 16px 24px;
    border-radius: 0 0 13px 13px;
  }
`

const GotItButton = styled.button`
  width: 100%;
  background: linear-gradient(135deg, #10B981 0%, #059669 100%);
  color: white;
  border: 2px solid #047857;
  padding: 12px 24px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: bold;
  font-family: 'Inter', sans-serif;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    background: linear-gradient(135deg, #059669 0%, #047857 100%);
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(16, 185, 129, 0.4);
    border-color: #065F46;
  }
  
  &:active {
    transform: translateY(0);
    transition: all 0.1s ease;
  }
  
  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 13px;
  }
`

export const PeekResultModal: React.FC<PeekResultModalProps> = ({ card, onClose }) => {
  const getCardColor = () => {
    return (card.suit === 'hearts' || card.suit === 'diamonds') 
      ? '#DC2626' 
      : '#1F2937'
  }

  const getSuitSymbol = () => {
    if (!card.suit) return ''
    switch (card.suit) {
      case 'hearts': return '♥'
      case 'diamonds': return '♦'
      case 'clubs': return '♣'
      case 'spades': return '♠'
      default: return ''
    }
  }

  const getDisplayRank = () => {
    if (card.rank === 'joker') return 'JOK'
    if (card.rank === 'ace') return 'A'
    if (card.rank === 'king') return 'K'
    if (card.rank === 'queen') return 'Q'
    if (card.rank === 'jack') return 'J'
    return card.rank
  }

  return (
    <PeekModalOverlay>
      <PeekModalContainer>
        
        {/* Header */}
        <PeekModalHeader>
          <PeekHeaderContent>
            <PeekHeaderTitle>👀 Peek Result</PeekHeaderTitle>
            <PeekCloseButton onClick={onClose}>
              ×
            </PeekCloseButton>
          </PeekHeaderContent>
        </PeekModalHeader>

        {/* Content */}
        <PeekModalContent>
          
          {/* Peeked Card Display */}
          <PeekedCardContainer>
            <PeekedCard suit={card.suit || 'default'}>
              
              {/* Top Corner */}
              <CardCorner color={getCardColor()}>
                <div className="rank">{getDisplayRank()}</div>
                {card.suit && (
                  <div className="suit">{getSuitSymbol()}</div>
                )}
              </CardCorner>

              {/* Center */}
              <CardCenter>
                <div className="points-badge">
                  {card.value} pts
                </div>
              </CardCenter>

              {/* Bottom Corner (rotated) */}
              <CardCorner color={getCardColor()} rotated>
                <div className="rank">{getDisplayRank()}</div>
                {card.suit && (
                  <div className="suit">{getSuitSymbol()}</div>
                )}
              </CardCorner>

              {/* Special Card Indicator */}
              {card.isSpecial && <SpecialIndicator />}

            </PeekedCard>
          </PeekedCardContainer>

          {/* Card Info */}
          <CardInfoSection>
            <CardTitle>
              {card.rank === 'joker' ? 'Joker' : `${getDisplayRank()} of ${card.suit}`}
            </CardTitle>
            <CardPoints>
              Worth <span className="points-value">{card.value} points</span>
            </CardPoints>
            {card.isSpecial && (
              <SpecialCardNote>
                ✨ Special Card
              </SpecialCardNote>
            )}
          </CardInfoSection>

          {/* Tip */}
          <TipSection>
            <p>💡 Remember this card for your strategy!</p>
          </TipSection>

        </PeekModalContent>

        {/* Footer */}
        <PeekModalFooter>
          <GotItButton onClick={onClose}>
            Got it!
          </GotItButton>
        </PeekModalFooter>

      </PeekModalContainer>
    </PeekModalOverlay>
  )
}