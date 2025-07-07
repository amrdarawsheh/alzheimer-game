import React, { useState } from 'react'
import { useGame } from '../hooks/useGame'
import type { Card, Player } from '../types'

interface SpecialAbilityModalProps {
  card: Card
  abilityType: 'peek' | 'swap'
  onClose: () => void
  onUse: (params: any) => void
  onSkip: () => void
}

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
      <div className="grid grid-cols-4 gap-2">
        {player.cards.map((playerCard, index) => {
          const isSelected = 
            (selectionType === 'peek' && selectedPeekCard === playerCard.cardId) ||
            (selectionType === 'player' && selectedSwapData.playerCardIndex === index) ||
            (selectionType === 'target' && selectedSwapData.targetPlayerId === player.id && selectedSwapData.targetCardIndex === index)

          return (
            <div
              key={index}
              className={`
                aspect-[3/4] rounded border-2 cursor-pointer transition-all duration-200
                ${isSelected 
                  ? 'border-yellow-400 bg-yellow-100 scale-105' 
                  : 'border-gray-300 bg-white hover:border-blue-400 hover:scale-105'
                }
              `}
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
              <div className="p-1 h-full flex items-center justify-center text-xs text-center">
                {isCurrentPlayer && playerCard.isKnownToPlayer ? (
                  <div className="text-green-600">Known</div>
                ) : (
                  <div className="text-gray-500">
                    Card {index + 1}
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 rounded-t-lg">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">
              ✨ Special Ability: {abilityType === 'peek' ? 'Peek' : 'Swap'}
            </h2>
            <button
              onClick={onClose}
              className="text-white hover:text-gray-200 text-2xl font-bold"
            >
              ×
            </button>
          </div>
          <p className="text-sm opacity-90 mt-1">
            {getAbilityDescription()}
          </p>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          
          {/* Drawn Card Info */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-800 mb-2">
              You drew: {card.rank} of {card.suit || 'none'}
            </h3>
            <p className="text-sm text-gray-600">
              This card has a special ability. Choose to use it or skip it.
            </p>
          </div>

          {/* Peek Interface */}
          {abilityType === 'peek' && (
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-800">Choose a card to peek at:</h3>
              
              {/* Your Cards */}
              {currentPlayer && (
                <div>
                  <h4 className="text-sm font-medium text-gray-600 mb-2">Your Cards:</h4>
                  {renderPlayerCards(currentPlayer, true, 'peek')}
                </div>
              )}

              {/* Opponent Cards */}
              {otherPlayers.map(player => (
                <div key={player.id}>
                  <h4 className="text-sm font-medium text-gray-600 mb-2">{player.name}'s Cards:</h4>
                  {renderPlayerCards(player, false, 'peek')}
                </div>
              ))}
            </div>
          )}

          {/* Swap Interface */}
          {abilityType === 'swap' && (
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-800">Choose cards to swap:</h3>
              
              {/* Step 1: Select your card */}
              {currentPlayer && (
                <div>
                  <h4 className="text-sm font-medium text-gray-600 mb-2">
                    Step 1: Select one of your cards
                    {selectedSwapData.playerCardIndex !== null && (
                      <span className="text-green-600 ml-2">✓ Card {selectedSwapData.playerCardIndex + 1} selected</span>
                    )}
                  </h4>
                  {renderPlayerCards(currentPlayer, true, 'player')}
                </div>
              )}

              {/* Step 2: Select opponent's card */}
              <div>
                <h4 className="text-sm font-medium text-gray-600 mb-2">
                  Step 2: Select an opponent's card to swap with
                  {selectedSwapData.targetPlayerId && selectedSwapData.targetCardIndex !== null && (
                    <span className="text-green-600 ml-2">
                      ✓ {otherPlayers.find(p => p.id === selectedSwapData.targetPlayerId)?.name}'s card {selectedSwapData.targetCardIndex! + 1} selected
                    </span>
                  )}
                </h4>
                {otherPlayers.map(player => (
                  <div key={player.id} className="mb-4">
                    <h5 className="text-xs text-gray-500 mb-1">{player.name}:</h5>
                    {renderPlayerCards(player, false, 'target')}
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-6 py-4 rounded-b-lg flex justify-between">
          <button
            onClick={() => {
              onSkip()
              onClose()
            }}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
          >
            Skip Ability
          </button>
          
          <button
            onClick={handleConfirm}
            disabled={!canConfirm()}
            className={`
              px-6 py-2 rounded font-semibold transition-colors
              ${canConfirm()
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }
            `}
          >
            Use Ability
          </button>
        </div>

      </div>
    </div>
  )
}