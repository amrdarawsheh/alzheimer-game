import React from 'react'
import { useGame } from '../hooks/useGame'

export const DrawnCard: React.FC = () => {
  const { gameState, actions } = useGame()
  const drawnCardId = gameState.ui.selectedCard
  const drawnCard = drawnCardId ? actions.getCardById(drawnCardId) : null
  const currentPlayer = actions.getCurrentPlayer()
  const isHumanTurn = currentPlayer?.type === 'human'

  if (!drawnCard) {
    return null
  }

  const getCardColor = () => {
    return (drawnCard.suit === 'hearts' || drawnCard.suit === 'diamonds') 
      ? 'text-red-600' 
      : 'text-black'
  }

  return (
    <div className="text-center">
      
      {/* Drawn Card Display */}
      <div className="mb-4">
        <div className="w-24 h-32 bg-white rounded-lg border-2 border-yellow-400 shadow-lg relative animate-pulse">
          
          {/* Card Content */}
          <div className={`p-2 h-full flex flex-col justify-between ${getCardColor()}`}>
            
            {/* Top Corner */}
            <div className="text-left">
              <div className="text-sm font-bold leading-none">
                {drawnCard.rank === 'joker' ? 'J' : drawnCard.rank}
              </div>
              {drawnCard.suit && (
                <div className="text-lg leading-none">
                  {drawnCard.suit === 'hearts' && '♥'}
                  {drawnCard.suit === 'diamonds' && '♦'}
                  {drawnCard.suit === 'clubs' && '♣'}
                  {drawnCard.suit === 'spades' && '♠'}
                </div>
              )}
            </div>

            {/* Center */}
            <div className="text-center flex-1 flex items-center justify-center">
              <div className="text-xs font-bold bg-gray-100 rounded px-1">
                {drawnCard.value} pts
              </div>
            </div>

            {/* Bottom Corner (rotated) */}
            <div className="text-right transform rotate-180">
              <div className="text-sm font-bold leading-none">
                {drawnCard.rank === 'joker' ? 'J' : drawnCard.rank}
              </div>
              {drawnCard.suit && (
                <div className="text-lg leading-none">
                  {drawnCard.suit === 'hearts' && '♥'}
                  {drawnCard.suit === 'diamonds' && '♦'}
                  {drawnCard.suit === 'clubs' && '♣'}
                  {drawnCard.suit === 'spades' && '♠'}
                </div>
              )}
            </div>

          </div>

          {/* Special Card Indicator */}
          {drawnCard.isSpecial && (
            <div className="absolute top-1 right-1 w-3 h-3 bg-yellow-400 rounded-full border border-yellow-600"></div>
          )}

          {/* Glow Effect */}
          <div className="absolute inset-0 bg-yellow-400 bg-opacity-20 rounded-lg animate-pulse"></div>

        </div>
      </div>

      {/* Card Info */}
      <div className="text-white text-center">
        <div className="font-bold text-lg mb-1">Drawn Card</div>
        <div className="text-sm opacity-80">
          {drawnCard.rank} of {drawnCard.suit}
        </div>
        <div className="text-sm opacity-80">
          Value: {drawnCard.value} points
        </div>
        {drawnCard.isSpecial && (
          <div className="text-yellow-300 text-sm font-bold mt-1">
            ✨ Special Card!
          </div>
        )}
      </div>

      {/* Action Instructions */}
      {isHumanTurn && (
        <div className="mt-4 bg-white bg-opacity-20 rounded-lg p-3 backdrop-blur-sm">
          <div className="text-white text-sm text-center">
            <div className="font-bold mb-1">Choose an action:</div>
            <div className="text-xs opacity-80">
              Click a card in your hand to replace it, or discard this card
            </div>
          </div>
        </div>
      )}

    </div>
  )
}