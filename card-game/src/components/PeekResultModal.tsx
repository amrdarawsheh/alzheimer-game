import React from 'react'
import type { Card } from '../types'

interface PeekResultModalProps {
  card: Card
  onClose: () => void
}

export const PeekResultModal: React.FC<PeekResultModalProps> = ({ card, onClose }) => {
  const getCardColor = () => {
    return (card.suit === 'hearts' || card.suit === 'diamonds') 
      ? 'text-red-600' 
      : 'text-black'
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-4 rounded-t-lg">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">👀 Peek Result</h2>
            <button
              onClick={onClose}
              className="text-white hover:text-gray-200 text-2xl font-bold"
            >
              ×
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 text-center">
          
          {/* Peeked Card Display */}
          <div className="mb-4">
            <div className="w-32 h-44 mx-auto bg-white rounded-lg border-2 border-gray-300 shadow-lg">
              
              <div className={`p-3 h-full flex flex-col justify-between ${getCardColor()}`}>
                
                {/* Top Corner */}
                <div className="text-left">
                  <div className="text-lg font-bold leading-none">
                    {card.rank === 'joker' ? 'J' : card.rank}
                  </div>
                  {card.suit && (
                    <div className="text-2xl leading-none">
                      {card.suit === 'hearts' && '♥'}
                      {card.suit === 'diamonds' && '♦'}
                      {card.suit === 'clubs' && '♣'}
                      {card.suit === 'spades' && '♠'}
                    </div>
                  )}
                </div>

                {/* Center */}
                <div className="text-center flex-1 flex items-center justify-center">
                  <div className="text-sm font-bold bg-gray-100 rounded px-2 py-1">
                    {card.value} pts
                  </div>
                </div>

                {/* Bottom Corner (rotated) */}
                <div className="text-right transform rotate-180">
                  <div className="text-lg font-bold leading-none">
                    {card.rank === 'joker' ? 'J' : card.rank}
                  </div>
                  {card.suit && (
                    <div className="text-2xl leading-none">
                      {card.suit === 'hearts' && '♥'}
                      {card.suit === 'diamonds' && '♦'}
                      {card.suit === 'clubs' && '♣'}
                      {card.suit === 'spades' && '♠'}
                    </div>
                  )}
                </div>

              </div>

              {/* Special Card Indicator */}
              {card.isSpecial && (
                <div className="absolute top-2 right-2 w-4 h-4 bg-yellow-400 rounded-full border border-yellow-600"></div>
              )}

            </div>
          </div>

          {/* Card Info */}
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-gray-800">
              {card.rank} of {card.suit || 'none'}
            </h3>
            <p className="text-gray-600">
              Worth <span className="font-semibold">{card.value} points</span>
            </p>
            {card.isSpecial && (
              <p className="text-yellow-600 font-semibold">
                ✨ Special Card
              </p>
            )}
          </div>

          {/* Tip */}
          <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-3">
            <p className="text-sm text-blue-800">
              💡 Remember this card for your strategy!
            </p>
          </div>

        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-6 py-4 rounded-b-lg">
          <button
            onClick={onClose}
            className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors font-semibold"
          >
            Got it!
          </button>
        </div>

      </div>
    </div>
  )
}