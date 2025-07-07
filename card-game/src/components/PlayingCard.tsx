import React from 'react'
import type { PlayerCard } from '../types'
import { useGame } from '../hooks/useGame'

interface PlayingCardProps {
  playerCard: PlayerCard
  cardIndex: number
  playerId: string
  showAsOpponent: boolean
  isCurrentPlayer: boolean
  isHumanPlayer: boolean
}

export const PlayingCard: React.FC<PlayingCardProps> = ({
  playerCard,
  cardIndex,
  showAsOpponent,
  isCurrentPlayer,
  isHumanPlayer
}) => {
  const { gameState, actions } = useGame()
  const card = actions.getCardById(playerCard.cardId)
  const drawnCard = gameState.ui.selectedCard

  // Determine if card should be face up
  const shouldShowCard = playerCard.isRevealed || 
    (!showAsOpponent && playerCard.isKnownToPlayer && gameState.round.phase === 'card-viewing') ||
    (!showAsOpponent && playerCard.isKnownToPlayer && gameState.ui.showingPeekCard === playerCard.cardId)

  // Handle card replacement
  const handleCardClick = () => {
    if (drawnCard && isCurrentPlayer && isHumanPlayer) {
      actions.replaceCard(cardIndex)
    }
  }

  // Determine if card is clickable for replacement
  const isClickable = drawnCard && isCurrentPlayer && isHumanPlayer

  // Get card color based on suit
  const getCardColor = () => {
    if (!card) return 'text-gray-600'
    return (card.suit === 'hearts' || card.suit === 'diamonds') 
      ? 'text-red-600' 
      : 'text-black'
  }

  return (
    <div 
      className={`
        relative aspect-[3/4] rounded-lg border-2 transition-all duration-300 cursor-pointer
        ${shouldShowCard 
          ? 'bg-white border-gray-300 shadow-card hover:shadow-card-hover' 
          : 'bg-card-back border-blue-700'
        }
        ${isClickable 
          ? 'hover:scale-105 hover:shadow-card-hover ring-2 ring-gold-400 ring-opacity-70 hover:ring-opacity-100' 
          : shouldShowCard 
            ? 'hover:shadow-card-hover' 
            : ''
        }
        ${playerCard.isRevealed ? 'ring-2 ring-casino-400' : ''}
      `}
      onClick={handleCardClick}
    >
      
      {/* Card Face */}
      {shouldShowCard && card ? (
        <div className="p-2 h-full flex flex-col justify-between bg-white rounded border border-gray-300 shadow-card relative">
          
          {/* Top Corner */}
          <div className="text-left">
            <div className={`text-lg font-bold leading-none ${getCardColor()}`}>
              {card.rank === 'joker' ? 'JOK' : 
               card.rank === 'ace' ? 'A' :
               card.rank === 'king' ? 'K' :
               card.rank === 'queen' ? 'Q' :
               card.rank === 'jack' ? 'J' :
               card.rank}
            </div>
            {card.suit && (
              <div className={`text-xl leading-none ${getCardColor()}`}>
                {card.suit === 'hearts' && '♥'}
                {card.suit === 'diamonds' && '♦'}
                {card.suit === 'clubs' && '♣'}
                {card.suit === 'spades' && '♠'}
              </div>
            )}
          </div>

          {/* Center - Large suit symbol or special content */}
          <div className="text-center flex-1 flex items-center justify-center relative">
            {card.rank === 'joker' ? (
              <div className="text-4xl">🃏</div>
            ) : (
              <div className={`text-4xl ${getCardColor()}`}>
                {card.suit === 'hearts' && '♥'}
                {card.suit === 'diamonds' && '♦'}
                {card.suit === 'clubs' && '♣'}
                {card.suit === 'spades' && '♠'}
              </div>
            )}
            
            {/* Point value in corner */}
            <div className="absolute bottom-0 right-0 text-xs font-bold bg-felt-200 text-casino-800 rounded px-1 py-0.5">
              {card.value}pt
            </div>
          </div>

          {/* Bottom Corner (rotated) */}
          <div className="text-right transform rotate-180">
            <div className={`text-lg font-bold leading-none ${getCardColor()}`}>
              {card.rank === 'joker' ? 'JOK' : 
               card.rank === 'ace' ? 'A' :
               card.rank === 'king' ? 'K' :
               card.rank === 'queen' ? 'Q' :
               card.rank === 'jack' ? 'J' :
               card.rank}
            </div>
            {card.suit && (
              <div className={`text-xl leading-none ${getCardColor()}`}>
                {card.suit === 'hearts' && '♥'}
                {card.suit === 'diamonds' && '♦'}
                {card.suit === 'clubs' && '♣'}
                {card.suit === 'spades' && '♠'}
              </div>
            )}
          </div>

          {/* Special Card Indicator */}
          {card.isSpecial && (
            <div className="absolute top-1 right-1 w-3 h-3 bg-gold-500 rounded-full border border-gold-700 shadow-sm">
              <div className="absolute inset-0.5 bg-gold-300 rounded-full"></div>
            </div>
          )}

        </div>
      ) : (
        /* Card Back */
        <div className="h-full flex items-center justify-center p-1">
          <div className="w-full h-full bg-card-back rounded border-2 border-blue-700 flex items-center justify-center relative overflow-hidden">
            {/* Card back pattern */}
            <div className="absolute inset-2 border-2 border-blue-300 rounded opacity-80">
              <div className="absolute inset-1 border border-blue-200 rounded opacity-60"></div>
              <div className="absolute inset-2 border border-blue-100 rounded opacity-40"></div>
            </div>
            {/* Center diamond pattern */}
            <div className="relative z-10 w-8 h-8 bg-blue-200 transform rotate-45 border border-blue-300 opacity-70"></div>
            <div className="absolute z-10 w-4 h-4 bg-blue-100 transform rotate-45 border border-blue-200"></div>
          </div>
        </div>
      )}

      {/* Knowledge Indicator */}
      {!showAsOpponent && (
        <div className="absolute -top-2 -right-2">
          {playerCard.isKnownToPlayer ? (
            <div className="w-4 h-4 bg-casino-500 rounded-full border-2 border-white shadow-sm" 
                 title="Known card" />
          ) : (
            <div className="w-4 h-4 bg-felt-400 rounded-full border-2 border-white shadow-sm" 
                 title="Unknown card" />
          )}
        </div>
      )}

      {/* Replacement Indicator */}
      {isClickable && (
        <div className="absolute inset-0 bg-gold-400 bg-opacity-30 rounded-lg border-2 border-gold-500 border-dashed flex items-center justify-center backdrop-blur-sm">
          <div className="bg-gold-500 text-white text-xs font-bold px-2 py-1 rounded shadow-sm border border-gold-600">
            Click to Replace
          </div>
        </div>
      )}

    </div>
  )
}