import React from 'react'
import styled from 'styled-components'
import type { PlayerCard } from '../types'
import { GamePhase } from '../types'
import { useGame } from '../hooks/useGame'
import { Tooltip } from './Tooltip'

interface PlayingCardProps {
  playerCard: PlayerCard
  cardIndex: number
  playerId: string
  showAsOpponent: boolean
  isCurrentPlayer: boolean
  isHumanPlayer: boolean
}

// Styled Components for Cards
const CardContainer = styled.div<{ 
  isClickable: boolean; 
  shouldShowCard: boolean; 
  isRevealed: boolean;
  isKnownToPlayer: boolean;
  showAsOpponent: boolean;
  isReplacing: boolean;
  replacementPhase: 'swapping-out' | 'swapping-in' | null;
}>`
  position: relative;
  aspect-ratio: 3/4;
  width: 100px;
  height: 133px;
  border-radius: 10px;
  border: 2px solid ${props => {
    if (props.shouldShowCard) return '#FFD700';
    if (!props.showAsOpponent && props.isKnownToPlayer) return '#34D399'; // Green for known cards
    return '#1E40AF'; // Default blue for unknown cards
  }};
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  transform: perspective(1000px) rotateY(0deg);
  background: ${props => props.shouldShowCard ? 'white' : 'linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)'};
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2), 0 3px 8px rgba(0, 0, 0, 0.1);
  
  /* Smooth card entrance animation */
  animation: cardEntrance 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  
  @keyframes cardEntrance {
    0% {
      opacity: 0;
      transform: perspective(1000px) rotateY(-90deg) scale(0.8);
    }
    100% {
      opacity: 1;
      transform: perspective(1000px) rotateY(0deg) scale(1);
    }
  }
  
  /* Enhanced card flip animation for revealed cards */
  ${props => props.isRevealed && `
    animation: cardReveal 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    
    @keyframes cardReveal {
      0% {
        transform: perspective(1000px) rotateY(0deg) scale(1);
      }
      50% {
        transform: perspective(1000px) rotateY(90deg) scale(1.05);
      }
      100% {
        transform: perspective(1000px) rotateY(0deg) scale(1);
      }
    }
  `}
  
  /* Card replacement animations handled by global CSS */
  
  /* Pulse animation for available actions */
  ${props => props.isClickable && `
    animation: actionPulse 2s infinite;
    
    @keyframes actionPulse {
      0%, 100% {
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2), 0 3px 8px rgba(0, 0, 0, 0.1),
                    0 0 0 0 rgba(255, 215, 0, 0.7);
      }
      50% {
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2), 0 3px 8px rgba(0, 0, 0, 0.1),
                    0 0 0 8px rgba(255, 215, 0, 0);
      }
    }
  `}
  
  /* Memory indicator glow for known cards */
  ${props => !props.showAsOpponent && props.isKnownToPlayer && !props.shouldShowCard && `
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2), 0 3px 8px rgba(0, 0, 0, 0.1), 
                0 0 15px rgba(52, 211, 153, 0.3);
  `}
  
  @media (max-width: 768px) {
    width: 70px;
    height: 93px;
    border-radius: 8px;
    border-width: 2px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2), 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: 480px) {
    width: 55px;
    height: 73px;
    border-radius: 6px;
    border-width: 1px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  }
  
  ${props => props.isClickable && `
    &:hover {
      transform: perspective(1000px) rotateY(5deg) translateY(-8px) scale(1.05);
      box-shadow: 0 20px 40px rgba(255, 215, 0, 0.4), 0 8px 16px rgba(0, 0, 0, 0.2);
      border-color: #FFA500;
      filter: brightness(1.1);
    }
    
    &:active {
      transform: perspective(1000px) rotateY(5deg) translateY(-4px) scale(1.02);
      box-shadow: 0 12px 25px rgba(255, 215, 0, 0.6), 0 4px 8px rgba(0, 0, 0, 0.3);
      transition: all 0.1s ease;
    }
  `}
  
  ${props => props.shouldShowCard && !props.isClickable && `
    &:hover {
      transform: perspective(1000px) rotateY(2deg) translateY(-2px);
      box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);
      filter: brightness(1.05);
    }
    
    &:active {
      transform: perspective(1000px) rotateY(1deg) translateY(-1px);
      transition: all 0.1s ease;
    }
  `}
  
  /* Enhanced hidden card hover for non-opponents */
  ${props => !props.shouldShowCard && !props.showAsOpponent && `
    &:hover {
      transform: perspective(1000px) translateY(-4px) scale(1.02);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
      border-color: ${props.isKnownToPlayer ? '#10B981' : '#3B82F6'};
      filter: brightness(1.1);
    }
    
    &:active {
      transform: perspective(1000px) translateY(-2px) scale(1.01);
      transition: all 0.1s ease;
    }
  `}
  
  ${props => props.isRevealed && `
    border-color: #FF6B6B;
    box-shadow: 0 0 20px rgba(255, 107, 107, 0.5);
  `}
`

const CardFace = styled.div<{ suit: string }>`
  padding: 0px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
  position: relative;
  background: ${props => {
    switch (props.suit) {
      case 'hearts': return 'linear-gradient(135deg, #F8F9FA 0%, #E9ECEF 100%)';
      case 'diamonds': return 'linear-gradient(135deg, #F8F9FA 0%, #E9ECEF 100%)';
      case 'clubs': return 'linear-gradient(135deg, #F8F9FA 0%, #E9ECEF 100%)';
      case 'spades': return 'linear-gradient(135deg, #F8F9FA 0%, #E9ECEF 100%)';
      default: return 'linear-gradient(135deg, #F8F9FA 0%, #E9ECEF 100%)';
    }
  }};
  border: 2px solid rgba(255, 215, 0, 0.3);
`

const CardRank = styled.div<{ color: string }>`
  font-size: 10px;
  font-family: 'JetBrains Mono', monospace;
  font-weight: bold;
  line-height: 0.9;
  color: ${props => props.color};
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    font-size: 8px;
  }
  
  @media (max-width: 480px) {
    font-size: 7px;
  }
`

const CardSuit = styled.div<{ color: string }>`
  font-size: 12px;
  line-height: 0.9;
  color: ${props => props.color};
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    font-size: 10px;
  }
  
  @media (max-width: 480px) {
    font-size: 8px;
  }
`

const CardBottomCorner = styled.div`
  position: absolute;
  bottom: 8px;
  right: 8px;
  transform: rotate(180deg);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  line-height: 0.8;
  margin: 0;
  padding: 0;
`

const CardCenter = styled.div<{ color: string }>`
  text-align: center;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  
  .large-suit {
    font-size: 64px;
    font-weight: bold;
    color: ${props => props.color};
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
    
    @media (max-width: 768px) {
      font-size: 40px;
    }
    
    @media (max-width: 480px) {
      font-size: 28px;
    }
  }
  
  .joker {
    font-size: 48px;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
  }
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

const CardBack = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px;
  
  .back-inner {
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #1E3A8A 0%, #3B82F6 50%, #1E40AF 100%);
    border-radius: 8px;
    border: 3px solid #60A5FA;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.2);
    
    &::before {
      content: '';
      position: absolute;
      inset: 8px;
      border: 2px solid rgba(147, 197, 253, 0.7);
      border-radius: 4px;
    }
    
    &::after {
      content: '';
      position: absolute;
      inset: 12px;
      border: 1px solid rgba(191, 219, 254, 0.5);
      border-radius: 4px;
    }
  }
`

const DiamondPattern = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  
  .main-diamond {
    width: 40px;
    height: 40px;
    background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
    transform: rotate(45deg);
    border: 2px solid #FF8C00;
    position: relative;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    
    &::before {
      content: '';
      position: absolute;
      inset: 4px;
      background: linear-gradient(135deg, #E6F3FF 0%, #CCE7FF 100%);
      border: 1px solid #FFD700;
      border-radius: 2px;
    }
    
    &::after {
      content: '';
      position: absolute;
      inset: 8px;
      background: linear-gradient(135deg, #FFFFFF 0%, #F0F8FF 100%);
      border-radius: 2px;
    }
  }
  
  .corner-accent {
    position: absolute;
    width: 12px;
    height: 12px;
    background: #FFA500;
    transform: rotate(45deg);
    border: 1px solid #FF8C00;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    
    &.top-left { top: -8px; left: -8px; }
    &.top-right { top: -8px; right: -8px; }
    &.bottom-left { bottom: -8px; left: -8px; }
    &.bottom-right { bottom: -8px; right: -8px; }
  }
`


const ReplacementOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(255, 165, 0, 0.4);
  border-radius: 12px;
  border: 3px dashed #FFA500;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(2px);
  cursor: pointer;
  z-index: 20;
  animation: overlaySlideIn 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  @keyframes overlaySlideIn {
    0% {
      opacity: 0;
      transform: scale(0.9);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
  
  @keyframes borderPulse {
    0%, 100% { 
      border-color: #FFA500;
      box-shadow: 0 0 0 0 rgba(255, 165, 0, 0.7);
    }
    50% { 
      border-color: #FFD700;
      box-shadow: 0 0 0 4px rgba(255, 165, 0, 0);
    }
  }
  
  animation: overlaySlideIn 0.3s cubic-bezier(0.4, 0, 0.2, 1), 
             borderPulse 2s infinite;
             
  &:hover {
    background: rgba(255, 165, 0, 0.6);
    border-color: #FFD700;
    animation: overlaySlideIn 0.3s cubic-bezier(0.4, 0, 0.2, 1), 
               borderPulse 1s infinite;
  }
  
  &:active {
    background: rgba(255, 165, 0, 0.8);
    transform: scale(0.98);
    animation: none;
    transition: all 0.1s ease;
  }
  
  .replace-text {
    background: linear-gradient(135deg, #FF8C00 0%, #FFA500 100%);
    color: white;
    font-size: 14px;
    font-weight: bold;
    padding: 0px 12px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    border: 2px solid #FF6B00;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    pointer-events: auto;
    cursor: pointer;
    transform: translateY(0);
    
    &:hover {
      transform: scale(1.08) translateY(-2px);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4);
      background: linear-gradient(135deg, #FFA500 0%, #FFB733 100%);
    }
    
    &:active {
      transform: scale(1.02) translateY(0);
      transition: all 0.1s ease;
    }
  }
`

const SpecialIndicator = styled.div`
  position: absolute;
  top: 4px;
  right: 4px;
  width: 18px;
  height: 18px;
  background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
  border-radius: 50%;
  border: 2px solid white;
  box-shadow: 0 3px 6px rgba(255, 215, 0, 0.4), 0 0 12px rgba(255, 215, 0, 0.3);
  animation: specialPulse 2s infinite;
  
  &::after {
    content: '⭐';
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    color: white;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  }
  
  @keyframes specialPulse {
    0%, 100% { 
      opacity: 1;
      transform: scale(1);
      box-shadow: 0 3px 6px rgba(255, 215, 0, 0.4), 0 0 12px rgba(255, 215, 0, 0.3);
    }
    50% { 
      opacity: 0.8;
      transform: scale(1.1);
      box-shadow: 0 4px 8px rgba(255, 215, 0, 0.6), 0 0 16px rgba(255, 215, 0, 0.5);
    }
  }
  
  @media (max-width: 768px) {
    width: 16px;
    height: 16px;
    top: 3px;
    right: 3px;
    
    &::after {
      font-size: 8px;
    }
  }
  
  @media (max-width: 480px) {
    width: 14px;
    height: 14px;
    top: 2px;
    right: 2px;
    
    &::after {
      font-size: 7px;
    }
  }
`


const CardPositionIndicator = styled.div<{ position: number }>`
  position: absolute;
  bottom: 4px;
  left: 4px;
  width: 18px;
  height: 18px;
  background: linear-gradient(135deg, #6366F1 0%, #4F46E5 100%);
  border-radius: 50%;
  border: 2px solid white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: bold;
  font-family: 'JetBrains Mono', monospace;
  color: white;
  z-index: 15;
  
  &::after {
    content: '${props => props.position}';
  }
  
  @media (max-width: 768px) {
    width: 16px;
    height: 16px;
    font-size: 10px;
    bottom: 3px;
    left: 3px;
    border-width: 1px;
  }
  
  @media (max-width: 480px) {
    width: 14px;
    height: 14px;
    font-size: 9px;
    bottom: 2px;
    left: 2px;
  }
`


export const PlayingCard: React.FC<PlayingCardProps> = ({
  playerCard,
  cardIndex,
  playerId,
  showAsOpponent,
  isCurrentPlayer,
  isHumanPlayer
}) => {
  const { gameState, actions } = useGame()
  const card = actions.getCardById(playerCard.cardId)
  const drawnCard = gameState.ui.selectedCard

  // Check if this card is being replaced
  const replacingCard = gameState.ui.replacingCard
  const isReplacing = replacingCard && 
    replacingCard.cardIndex === cardIndex &&
    replacingCard.playerId === playerId // Check by player ID from props
  const replacementPhase = isReplacing ? replacingCard.phase : null

  // Debug logging
  React.useEffect(() => {
    if (isReplacing) {
      console.log(`Card ${cardIndex} is replacing! Phase: ${replacementPhase}`, {
        cardIndex,
        replacingCard,
        isReplacing,
        replacementPhase,
        playerId
      })
    }
  }, [isReplacing, replacementPhase, cardIndex])

  // Get Jack swap mode state
  const jackSwapMode = gameState.ui.jackSwapMode;


  // Handle animation completion
  React.useEffect(() => {
    if (isReplacing && replacementPhase === 'swapping-in') {
      // Complete the replacement animation after the duration
      const timer = setTimeout(() => {
        actions.makeMove({ type: 'COMPLETE_CARD_REPLACEMENT', payload: {} })
      }, 400) // Animation duration (0.4s)
      
      return () => clearTimeout(timer)
    }
  }, [isReplacing, replacementPhase, actions])

  // Determine if card should be face up
  const shouldShowCard = playerCard.isRevealed || 
    (!showAsOpponent && playerCard.isKnownToPlayer && gameState.round.phase === GamePhase.CARD_VIEWING) ||
    (!showAsOpponent && playerCard.isKnownToPlayer && gameState.ui.showingPeekCard === playerCard.cardId) ||
    (gameState.round.phase === GamePhase.SCORING || gameState.round.phase === GamePhase.FINISHED)

  // Handle card clicks (replacement or Jack swap)
  const handleCardClick = () => {
    
    if (jackSwapMode?.isActive && isHumanPlayer) {
      // Jack swap mode logic
      if (!showAsOpponent && isCurrentPlayer) {
        // Clicking on own card - select it for swapping
        actions.makeMove({ 
          type: 'SELECT_OWN_CARD_FOR_SWAP', 
          payload: { cardIndex } 
        });
      } else if (showAsOpponent && jackSwapMode.selectedOwnCardIndex !== null) {
        // Clicking on opponent's card - complete the swap
        actions.makeMove({ 
          type: 'COMPLETE_JACK_SWAP', 
          payload: { 
            targetPlayerId: playerId, 
            targetCardIndex: cardIndex 
          } 
        });
      }
    } else if (drawnCard && isCurrentPlayer && isHumanPlayer) {
      // Normal card replacement
      actions.replaceCard(cardIndex);
    }
  }

  // Determine if card is clickable
  const isClickable = 
    // Normal replacement
    (drawnCard && isCurrentPlayer && isHumanPlayer) ||
    // Jack swap mode - own cards are clickable
    (jackSwapMode?.isActive && !showAsOpponent && isCurrentPlayer && isHumanPlayer) ||
    // Jack swap mode - opponent cards are clickable if own card is selected (current player must be human)
    (jackSwapMode?.isActive && showAsOpponent && jackSwapMode.selectedOwnCardIndex !== null && 
     gameState.players[gameState.round.currentPlayerIndex]?.type === 'human')

  // Get card color based on suit
  const getCardColor = () => {
    if (!card) return '#6B7280'
    return (card.suit === 'hearts' || card.suit === 'diamonds') 
      ? '#DC2626' 
      : '#1F2937'
  }

  // Get suit symbol
  const getSuitSymbol = () => {
    if (!card?.suit) return ''
    switch (card.suit) {
      case 'hearts': return '♥'
      case 'diamonds': return '♦'
      case 'clubs': return '♣'
      case 'spades': return '♠'
      default: return ''
    }
  }

  // Get display rank
  const getDisplayRank = () => {
    if (!card) return ''
    if (card.rank === 'joker') return 'JOK'
    if (card.rank === 'ace') return 'A'
    if (card.rank === 'king') return 'K'
    if (card.rank === 'queen') return 'Q'
    if (card.rank === 'jack') return 'J'
    return card.rank
  }

  // Strategy guidance functions

  const getStrategyTooltip = () => {
    // Only show tooltips during CARD_VIEWING phase to help players learn their cards
    if (gameState.round.phase === GamePhase.CARD_VIEWING) {
      if (!card) return 'Unknown card'
      
      if (shouldShowCard) {
        return card.rank === 'joker' 
          ? `Joker (${card.value} pts)`
          : `${getDisplayRank()} of ${card.suit} (${card.value} pts)`
      } else {
        return showAsOpponent 
          ? 'Opponent\'s hidden card'
          : 'Your hidden card'
      }
    }
    
    // During PLAYING phase and beyond, no tooltips - players must rely on memory
    return ''
  }

  // const getReplacementAdvice = () => {
  //   if (!drawnCard || !card || !playerCard.isKnownToPlayer) return ''
  //   
  //   const drawnCardData = actions.getCardById(drawnCard)
  //   if (!drawnCardData) return ''
  //   
  //   const currentValue = card.value
  //   const newValue = drawnCardData.value
  //   
  //   if (newValue < currentValue) {
  //     const savings = currentValue - newValue
  //     return `Good trade! Save ${savings} point${savings !== 1 ? 's' : ''}`
  //   } else if (newValue > currentValue) {
  //     const cost = newValue - currentValue
  //     return `Bad trade! Costs ${cost} extra point${cost !== 1 ? 's' : ''}`
  //   } else {
  //     return 'Same value - no advantage'
  //   }
  // }

  const tooltipContent = getStrategyTooltip()
  
  const cardElement = (
    <CardContainer 
      isClickable={Boolean(isClickable)} 
      shouldShowCard={Boolean(shouldShowCard)} 
      isRevealed={Boolean(playerCard.isRevealed)}
      isKnownToPlayer={Boolean(playerCard.isKnownToPlayer)}
      showAsOpponent={showAsOpponent}
      isReplacing={Boolean(isReplacing)}
      replacementPhase={replacementPhase}
      onClick={handleCardClick}
      className={`
        ${isReplacing && replacementPhase === 'swapping-out' ? 'card-swapping-out' : ''}
        ${isReplacing && replacementPhase === 'swapping-in' ? 'card-swapping-in' : ''}
      `.trim()}
      style={{
        animation: isReplacing && replacementPhase === 'swapping-out' 
          ? 'cardSwapOut 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards' 
          : isReplacing && replacementPhase === 'swapping-in'
          ? 'cardSwapIn 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards'
          : undefined
      }}
    >
      
      {/* Card Face */}
      {shouldShowCard && card ? (
        <CardFace suit={card.suit || 'default'} data-testid="card-face">
          
          {/* Top Corner */}
          <div style={{ textAlign: 'left' }} data-testid="card-corner-tl">
            <CardRank color={getCardColor()} data-testid="card-rank-tl">
              {getDisplayRank()}
            </CardRank>
            {card.suit && (
              <CardSuit color={getCardColor()} data-testid="card-suit">
                {getSuitSymbol()}
              </CardSuit>
            )}
          </div>

          {/* Center - Large suit symbol or special content */}
          <CardCenter color={getCardColor()} data-testid="card-center">
            {card.rank === 'joker' ? (
              <div className="joker">🃏</div>
            ) : (
              <div className="large-suit">
                {getSuitSymbol()}
              </div>
            )}
            
            {/* Point value badge */}
            <PointBadge data-testid="card-point-value">
              {card.value}
            </PointBadge>
          </CardCenter>

          {/* Bottom Corner (rotated) */}
          <CardBottomCorner data-testid="card-corner-br">
            <CardRank color={getCardColor()} data-testid="card-rank-br">
              {getDisplayRank()}
            </CardRank>
            {card.suit && (
              <CardSuit color={getCardColor()}>
                {getSuitSymbol()}
              </CardSuit>
            )}
          </CardBottomCorner>

          {/* Special Card Indicator */}
          {card.isSpecial && (
            <SpecialIndicator data-testid="special-card-indicator" />
          )}

        </CardFace>
      ) : (
        /* Enhanced Card Back */
        <CardBack data-testid="card-back">
          <div className="back-inner">
            <DiamondPattern>
              <div className="main-diamond" />
              <div className="corner-accent top-left" />
              <div className="corner-accent top-right" />
              <div className="corner-accent bottom-left" />
              <div className="corner-accent bottom-right" />
            </DiamondPattern>
          </div>
        </CardBack>
      )}


      {/* Enhanced Replacement/Swap Indicator */}
      {isClickable && (
        <ReplacementOverlay onClick={handleCardClick}>
          <div className="replace-text">
            {jackSwapMode?.isActive
              ? !showAsOpponent && isCurrentPlayer
                ? jackSwapMode.selectedOwnCardIndex === cardIndex
                  ? "Selected for Swap"
                  : "Click to Select"
                : "Click to Swap"
              : "Click to Replace"
            }
          </div>
        </ReplacementOverlay>
      )}



      {/* Card Position Indicator - show position numbers for player's own cards in bottom-left */}
      {!showAsOpponent && (
        <CardPositionIndicator position={cardIndex + 1} data-testid="card-position" />
      )}

    </CardContainer>
  )

  return tooltipContent ? (
    <Tooltip 
      content={tooltipContent}
      position="top"
      delay={300}
    >
      {cardElement}
    </Tooltip>
  ) : cardElement
}