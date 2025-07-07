import React from 'react'
import { useGame } from '../hooks/useGame'

export const DeckArea: React.FC = () => {
  const { gameState, actions } = useGame()
  const currentPlayer = actions.getCurrentPlayer()
  const isHumanTurn = currentPlayer?.type === 'human'
  const hasDrawnCard = !!gameState.ui.selectedCard
  
  const canDrawFromDeck = actions.canDrawFromDeck() && isHumanTurn && !hasDrawnCard
  const canDrawFromDiscard = actions.canDrawFromDiscard() && isHumanTurn && !hasDrawnCard

  // Get top discard card for display
  const topDiscardCardId = gameState.deck.discardPile[gameState.deck.discardPile.length - 1]
  const topDiscardCard = topDiscardCardId ? actions.getCardById(topDiscardCardId) : null

  return (
    <div className="flex gap-6 items-center">
      
      {/* Draw Pile */}
      <div className="text-center">
        <div className="mb-2">
          <div 
            className={`
              w-20 h-28 rounded-lg border-2 relative cursor-pointer transition-all duration-300
              ${canDrawFromDeck 
                ? 'bg-blue-900 border-blue-700 hover:scale-105 hover:shadow-lg ring-2 ring-blue-400 ring-opacity-50' 
                : 'bg-blue-800 border-blue-600'
              }
              ${gameState.deck.drawPile.length === 0 ? 'opacity-50' : ''}
            `}
            onClick={canDrawFromDeck ? () => actions.drawFromDeck() : undefined}
          >
            
            {/* Deck Stack Effect */}
            {gameState.deck.drawPile.length > 0 && (
              <>
                <div className="absolute inset-0 bg-blue-900 rounded-lg transform translate-x-1 translate-y-1 -z-10"></div>
                <div className="absolute inset-0 bg-blue-800 rounded-lg transform translate-x-2 translate-y-2 -z-20"></div>
              </>
            )}
            
            {/* Deck Face */}
            <div className="w-full h-full bg-gradient-to-br from-blue-800 to-blue-900 rounded-lg border-2 border-blue-600 flex items-center justify-center">
              {gameState.deck.drawPile.length > 0 ? (
                <div className="text-white text-center">
                  <div className="text-xs font-bold">DECK</div>
                  <div className="text-xl font-bold">{gameState.deck.drawPile.length}</div>
                </div>
              ) : (
                <div className="text-gray-400 text-xs text-center">
                  <div>EMPTY</div>
                </div>
              )}
            </div>

            {/* Draw Indicator */}
            {canDrawFromDeck && (
              <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                DRAW
              </div>
            )}

          </div>
        </div>
        
        <div className="text-white text-sm font-medium">
          Draw Pile
        </div>
      </div>

      {/* Discard Pile */}
      <div className="text-center">
        <div className="mb-2">
          <div 
            className={`
              w-20 h-28 rounded-lg border-2 relative cursor-pointer transition-all duration-300
              ${gameState.deck.discardPile.length === 0 
                ? 'bg-gray-600 border-gray-500 border-dashed' 
                : canDrawFromDiscard
                  ? 'bg-white border-gray-300 hover:scale-105 hover:shadow-lg ring-2 ring-purple-400 ring-opacity-50'
                  : 'bg-white border-gray-300'
              }
            `}
            onClick={canDrawFromDiscard ? () => actions.drawFromDiscard() : undefined}
          >
            
            {gameState.deck.discardPile.length > 0 && topDiscardCard ? (
              /* Top Discard Card */
              <div className="w-full h-full p-1 flex flex-col justify-between text-center">
                
                {/* Card Content */}
                <div className={`
                  ${(topDiscardCard.suit === 'hearts' || topDiscardCard.suit === 'diamonds') 
                    ? 'text-red-600' 
                    : 'text-black'
                  }
                `}>
                  <div className="text-xs font-bold">
                    {topDiscardCard.rank === 'joker' ? 'J' : topDiscardCard.rank}
                  </div>
                  {topDiscardCard.suit && (
                    <div className="text-sm">
                      {topDiscardCard.suit === 'hearts' && '♥'}
                      {topDiscardCard.suit === 'diamonds' && '♦'}
                      {topDiscardCard.suit === 'clubs' && '♣'}
                      {topDiscardCard.suit === 'spades' && '♠'}
                    </div>
                  )}
                </div>

                <div className="text-xs bg-gray-100 rounded px-1 font-bold">
                  {topDiscardCard.value}
                </div>

                {/* Special Card Indicator */}
                {topDiscardCard.isSpecial && (
                  <div className="absolute top-1 right-1 w-2 h-2 bg-yellow-400 rounded-full"></div>
                )}

              </div>
            ) : (
              /* Empty Discard Pile */
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-gray-400 text-xs text-center">
                  <div>DISCARD</div>
                  <div>PILE</div>
                </div>
              </div>
            )}

            {/* Draw Indicator */}
            {canDrawFromDiscard && (
              <div className="absolute -top-2 -right-2 bg-purple-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                DRAW
              </div>
            )}

          </div>
        </div>
        
        <div className="text-white text-sm font-medium">
          Discard ({gameState.deck.discardPile.length})
        </div>
      </div>

    </div>
  )
}