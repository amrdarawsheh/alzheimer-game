import React, { useState } from 'react'
import styled from 'styled-components'
import { useGame } from '../hooks/useGame'
import type { Card, Player } from '../types'

interface SpecialAbilityModalProps {
  card: Card
  abilityType: 'peek' | 'swap'
  onClose: () => void
  onUse: (params: any) => void
  onSkip: () => void
}

// Styled Components for Special Ability Modal
const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
  animation: modalSlideIn 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  
  @keyframes modalSlideIn {
    0% {
      opacity: 0;
      backdrop-filter: blur(0px);
    }
    100% {
      opacity: 1;
      backdrop-filter: blur(8px);
    }
  }
`

const ModalContainer = styled.div`
  background: linear-gradient(135deg, #1A1A2E 0%, #16213E 100%);
  border-radius: 20px;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.6), 0 0 40px rgba(255, 215, 0, 0.2);
  max-width: 42rem;
  width: 95%;
  max-height: 90vh;
  overflow-y: auto;
  border: 3px solid rgba(255, 215, 0, 0.4);
  position: relative;
  animation: modalContentSlide 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  
  @keyframes modalContentSlide {
    0% {
      opacity: 0;
      transform: scale(0.9) translateY(20px);
    }
    100% {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  }
  
  @media (max-width: 768px) {
    width: 98%;
    border-radius: 16px;
    border-width: 2px;
  }
`

const ModalHeader = styled.div<{ abilityType: 'peek' | 'swap' }>`
  background: ${props => props.abilityType === 'peek' 
    ? 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 50%, #6D28D9 100%)'
    : 'linear-gradient(135deg, #10B981 0%, #059669 50%, #047857 100%)'};
  color: white;
  padding: 24px;
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
    background: linear-gradient(45deg, rgba(255, 255, 255, 0.1) 0%, transparent 100%);
    pointer-events: none;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent 0%, rgba(255, 215, 0, 0.8) 50%, transparent 100%);
  }
  
  @media (max-width: 768px) {
    padding: 20px;
    border-radius: 13px 13px 0 0;
  }
`

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  z-index: 10;
`

const HeaderTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  font-family: 'Playfair Display', serif;
  margin: 0 0 8px 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 768px) {
    font-size: 20px;
  }
`

const HeaderDescription = styled.p`
  font-size: 14px;
  opacity: 0.95;
  margin: 0;
  font-family: 'Inter', sans-serif;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 768px) {
    font-size: 13px;
  }
`

const CloseButton = styled.button`
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.3);
  color: white;
  font-size: 24px;
  font-weight: bold;
  width: 40px;
  height: 40px;
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
    width: 36px;
    height: 36px;
    font-size: 20px;
  }
`

const ModalContent = styled.div`
  padding: 32px;
  color: white;
  
  @media (max-width: 768px) {
    padding: 24px;
  }
  
  @media (max-width: 480px) {
    padding: 20px;
  }
`

const DrawnCardInfo = styled.div`
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.15) 0%, rgba(255, 165, 0, 0.1) 100%);
  border: 2px solid rgba(255, 215, 0, 0.3);
  border-radius: 16px;
  padding: 20px;
  margin-bottom: 32px;
  backdrop-filter: blur(8px);
  
  @media (max-width: 768px) {
    padding: 16px;
    margin-bottom: 24px;
    border-radius: 12px;
  }
`

const DrawnCardTitle = styled.h3`
  font-family: 'Playfair Display', serif;
  font-weight: bold;
  font-size: 18px;
  color: #FFD700;
  margin: 0 0 8px 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
`

const DrawnCardDescription = styled.p`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
  font-family: 'Inter', sans-serif;
  
  @media (max-width: 768px) {
    font-size: 13px;
  }
`

const SectionContainer = styled.div`
  margin-bottom: 32px;
  
  @media (max-width: 768px) {
    margin-bottom: 24px;
  }
`

const SectionTitle = styled.h3`
  font-family: 'Playfair Display', serif;
  font-weight: bold;
  font-size: 20px;
  color: white;
  margin: 0 0 20px 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 16px;
  }
`

const PlayerSection = styled.div`
  margin-bottom: 24px;
  
  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`

const PlayerLabel = styled.h4`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: rgba(255, 215, 0, 0.9);
  margin: 0 0 12px 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  
  @media (max-width: 768px) {
    font-size: 13px;
    margin-bottom: 10px;
  }
`

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  
  @media (max-width: 768px) {
    gap: 10px;
  }
  
  @media (max-width: 480px) {
    gap: 8px;
  }
`

const CardSlot = styled.div<{ isSelected: boolean }>`
  aspect-ratio: 3/4;
  border-radius: 10px;
  border: 2px solid ${props => props.isSelected ? '#FFD700' : 'rgba(255, 255, 255, 0.3)'};
  background: ${props => props.isSelected 
    ? 'linear-gradient(135deg, rgba(255, 215, 0, 0.2) 0%, rgba(255, 165, 0, 0.1) 100%)'
    : 'rgba(255, 255, 255, 0.1)'};
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(4px);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 100%);
    opacity: ${props => props.isSelected ? 1 : 0};
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    border-color: ${props => props.isSelected ? '#FFA500' : 'rgba(255, 215, 0, 0.6)'};
    background: ${props => props.isSelected 
      ? 'linear-gradient(135deg, rgba(255, 215, 0, 0.3) 0%, rgba(255, 165, 0, 0.2) 100%)'
      : 'rgba(255, 255, 255, 0.15)'};
    transform: scale(1.05) translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  }
  
  &:active {
    transform: scale(1.02) translateY(0);
    transition: all 0.1s ease;
  }
  
  @media (max-width: 768px) {
    border-radius: 8px;
    border-width: 1px;
  }
`

const CardSlotContent = styled.div`
  padding: 8px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  z-index: 10;
  
  @media (max-width: 768px) {
    padding: 6px;
  }
`

const CardStatus = styled.div<{ isKnown: boolean }>`
  font-size: 12px;
  font-weight: 600;
  font-family: 'Inter', sans-serif;
  color: ${props => props.isKnown ? '#10B981' : 'rgba(255, 255, 255, 0.8)'};
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
  
  @media (max-width: 768px) {
    font-size: 11px;
  }
  
  @media (max-width: 480px) {
    font-size: 10px;
  }
`

const StepLabel = styled.h4`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: rgba(255, 215, 0, 0.9);
  margin: 0 0 12px 0;
  display: flex;
  align-items: center;
  gap: 8px;
  
  @media (max-width: 768px) {
    font-size: 13px;
    margin-bottom: 10px;
  }
`

const StatusCheck = styled.span`
  color: #10B981;
  font-weight: bold;
`

const OpponentSection = styled.div`
  margin-bottom: 20px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  @media (max-width: 768px) {
    padding: 12px;
    border-radius: 10px;
  }
`

const OpponentLabel = styled.h5`
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.7);
  margin: 0 0 8px 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  
  @media (max-width: 768px) {
    font-size: 11px;
    margin-bottom: 6px;
  }
`

const ModalFooter = styled.div`
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.5) 100%);
  padding: 24px 32px;
  border-radius: 0 0 17px 17px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 2px solid rgba(255, 215, 0, 0.2);
  
  @media (max-width: 768px) {
    padding: 20px 24px;
    border-radius: 0 0 13px 13px;
  }
  
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 12px;
  }
`

const SkipButton = styled.button`
  background: linear-gradient(135deg, #6B7280 0%, #4B5563 100%);
  color: white;
  border: 2px solid #374151;
  padding: 12px 24px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 600;
  font-family: 'Inter', sans-serif;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    background: linear-gradient(135deg, #4B5563 0%, #374151 100%);
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(107, 114, 128, 0.4);
  }
  
  &:active {
    transform: translateY(0);
    transition: all 0.1s ease;
  }
  
  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 13px;
  }
  
  @media (max-width: 480px) {
    width: 100%;
  }
`

const UseAbilityButton = styled.button<{ disabled: boolean }>`
  background: ${props => props.disabled 
    ? 'linear-gradient(135deg, #9CA3AF 0%, #6B7280 100%)'
    : 'linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%)'};
  color: white;
  border: 2px solid ${props => props.disabled ? '#6B7280' : '#1E40AF'};
  padding: 12px 32px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: bold;
  font-family: 'Inter', sans-serif;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: ${props => props.disabled ? 0.6 : 1};
  
  ${props => !props.disabled && `
    &:hover {
      background: linear-gradient(135deg, #1E40AF 0%, #1E3A8A 100%);
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(59, 130, 246, 0.4);
      border-color: #1E3A8A;
    }
    
    &:active {
      transform: translateY(0);
      transition: all 0.1s ease;
    }
  `}
  
  @media (max-width: 768px) {
    padding: 10px 24px;
    font-size: 13px;
  }
  
  @media (max-width: 480px) {
    width: 100%;
  }
`

export const SpecialAbilityModal: React.FC<SpecialAbilityModalProps> = ({
  card,
  abilityType,
  onClose,
  onUse,
  onSkip
}) => {
  const { gameState, actions } = useGame()
  const [selectedPeekCard, setSelectedPeekCard] = useState<string | null>(null)
  const [selectedSwapData, setSelectedSwapData] = useState<{
    playerCardIndex: number | null
    targetPlayerId: string | null
    targetCardIndex: number | null
  }>({
    playerCardIndex: null,
    targetPlayerId: null,
    targetCardIndex: null
  })

  const currentPlayer = actions.getCurrentPlayer()
  const otherPlayers = gameState.players.filter(p => p.id !== currentPlayer?.id)

  const getAbilityDescription = () => {
    switch (abilityType) {
      case 'peek':
        return 'Look at any card on the table (yours or an opponent\'s)'
      case 'swap':
        return 'Swap one of your cards with an opponent\'s card'
      default:
        return ''
    }
  }

  const handlePeekSelect = (cardId: string) => {
    setSelectedPeekCard(cardId)
  }

  const handleSwapSelect = (type: 'player' | 'target', playerId?: string, cardIndex?: number) => {
    if (type === 'player') {
      setSelectedSwapData(prev => ({ ...prev, playerCardIndex: cardIndex! }))
    } else {
      setSelectedSwapData(prev => ({ 
        ...prev, 
        targetPlayerId: playerId!, 
        targetCardIndex: cardIndex! 
      }))
    }
  }

  const canConfirm = () => {
    if (abilityType === 'peek') {
      return selectedPeekCard !== null
    } else if (abilityType === 'swap') {
      return selectedSwapData.playerCardIndex !== null && 
             selectedSwapData.targetPlayerId !== null && 
             selectedSwapData.targetCardIndex !== null
    }
    return false
  }

  const handleConfirm = () => {
    if (abilityType === 'peek' && selectedPeekCard) {
      onUse({ targetCardId: selectedPeekCard })
    } else if (abilityType === 'swap' && canConfirm()) {
      onUse({
        playerCardIndex: selectedSwapData.playerCardIndex,
        targetPlayerId: selectedSwapData.targetPlayerId,
        targetCardIndex: selectedSwapData.targetCardIndex
      })
    }
    onClose()
  }

  const renderPlayerCards = (player: Player, isCurrentPlayer: boolean, selectionType: 'peek' | 'player' | 'target') => {
    return (
      <CardsGrid>
        {player.cards.map((playerCard, index) => {
          const isSelected = 
            (selectionType === 'peek' && selectedPeekCard === playerCard.cardId) ||
            (selectionType === 'player' && selectedSwapData.playerCardIndex === index) ||
            (selectionType === 'target' && selectedSwapData.targetPlayerId === player.id && selectedSwapData.targetCardIndex === index)

          return (
            <CardSlot
              key={index}
              isSelected={isSelected}
              onClick={() => {
                if (abilityType === 'peek') {
                  handlePeekSelect(playerCard.cardId)
                } else if (abilityType === 'swap') {
                  if (isCurrentPlayer) {
                    handleSwapSelect('player', undefined, index)
                  } else {
                    handleSwapSelect('target', player.id, index)
                  }
                }
              }}
            >
              <CardSlotContent>
                {isCurrentPlayer && playerCard.isKnownToPlayer ? (
                  <CardStatus isKnown={true}>Known</CardStatus>
                ) : (
                  <CardStatus isKnown={false}>
                    Card {index + 1}
                  </CardStatus>
                )}
              </CardSlotContent>
            </CardSlot>
          )
        })}
      </CardsGrid>
    )
  }

  return (
    <ModalOverlay>
      <ModalContainer>
        
        {/* Header */}
        <ModalHeader abilityType={abilityType}>
          <HeaderContent>
            <div>
              <HeaderTitle>
                ✨ Special Ability: {abilityType === 'peek' ? 'Peek' : 'Swap'}
              </HeaderTitle>
              <HeaderDescription>
                {getAbilityDescription()}
              </HeaderDescription>
            </div>
            <CloseButton onClick={onClose}>
              ×
            </CloseButton>
          </HeaderContent>
        </ModalHeader>

        {/* Content */}
        <ModalContent>
          
          {/* Drawn Card Info */}
          <DrawnCardInfo>
            <DrawnCardTitle>
              You drew: {card.rank === 'joker' ? 'joker' : `${card.rank} of ${card.suit}`}
            </DrawnCardTitle>
            <DrawnCardDescription>
              This card has a special ability. Choose to use it or skip it.
            </DrawnCardDescription>
          </DrawnCardInfo>

          {/* Peek Interface */}
          {abilityType === 'peek' && (
            <SectionContainer>
              <SectionTitle>Choose a card to peek at:</SectionTitle>
              
              {/* Your Cards */}
              {currentPlayer && (
                <PlayerSection>
                  <PlayerLabel>Your Cards:</PlayerLabel>
                  {renderPlayerCards(currentPlayer, true, 'peek')}
                </PlayerSection>
              )}

              {/* Opponent Cards */}
              {otherPlayers.map(player => (
                <PlayerSection key={player.id}>
                  <PlayerLabel>{player.name}'s Cards:</PlayerLabel>
                  {renderPlayerCards(player, false, 'peek')}
                </PlayerSection>
              ))}
            </SectionContainer>
          )}

          {/* Swap Interface */}
          {abilityType === 'swap' && (
            <SectionContainer>
              <SectionTitle>Choose cards to swap:</SectionTitle>
              
              {/* Step 1: Select your card */}
              {currentPlayer && (
                <PlayerSection>
                  <StepLabel>
                    Step 1: Select one of your cards
                    {selectedSwapData.playerCardIndex !== null && (
                      <StatusCheck>✓ Card {selectedSwapData.playerCardIndex + 1} selected</StatusCheck>
                    )}
                  </StepLabel>
                  {renderPlayerCards(currentPlayer, true, 'player')}
                </PlayerSection>
              )}

              {/* Step 2: Select opponent's card */}
              <PlayerSection>
                <StepLabel>
                  Step 2: Select an opponent's card to swap with
                  {selectedSwapData.targetPlayerId && selectedSwapData.targetCardIndex !== null && (
                    <StatusCheck>
                      ✓ {otherPlayers.find(p => p.id === selectedSwapData.targetPlayerId)?.name}'s card {selectedSwapData.targetCardIndex! + 1} selected
                    </StatusCheck>
                  )}
                </StepLabel>
                {otherPlayers.map(player => (
                  <OpponentSection key={player.id}>
                    <OpponentLabel>{player.name}:</OpponentLabel>
                    {renderPlayerCards(player, false, 'target')}
                  </OpponentSection>
                ))}
              </PlayerSection>
            </SectionContainer>
          )}

        </ModalContent>

        {/* Footer */}
        <ModalFooter>
          <SkipButton
            onClick={() => {
              onSkip()
              onClose()
            }}
          >
            Skip Ability
          </SkipButton>
          
          <UseAbilityButton
            onClick={handleConfirm}
            disabled={!canConfirm()}
          >
            Use Ability
          </UseAbilityButton>
        </ModalFooter>

      </ModalContainer>
    </ModalOverlay>
  )
}