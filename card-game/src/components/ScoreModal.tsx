import React, { useEffect, useRef } from 'react'
import { useGame } from '../hooks/useGame'

interface ScoreModalProps {
  onContinue: () => void
}

export const ScoreModal: React.FC<ScoreModalProps> = ({ onContinue }) => {
  const { gameState } = useGame()
  const buttonRef = useRef<HTMLButtonElement>(null)

  // Focus management and keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        // Escape should not continue - let modal remain open for explicit user action
        return
      } else if (event.key === 'Enter') {
        onContinue()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    
    // Focus the button when modal opens
    if (buttonRef.current) {
      buttonRef.current.focus()
    }

    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onContinue])
  
  // Calculate round winner and scores
  const playersWithScores = gameState.players.map(player => ({
    ...player,
    roundScore: player.score // Use the score that's already calculated
  })).sort((a, b) => a.roundScore - b.roundScore)
  
  const roundWinner = playersWithScores[0]
  const isMatchComplete = gameState.match.winner !== null
  const matchWinner = isMatchComplete 
    ? gameState.players.find(p => p.id === gameState.match.winner)
    : null

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center z-50 p-2 sm:p-4 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="bg-white rounded-lg shadow-xl max-w-lg w-full my-2 sm:my-4 min-h-fit max-h-[calc(100vh-1rem)] sm:max-h-[calc(100vh-2rem)] overflow-y-auto">
        
        {/* Header */}
        <div className={`
          text-white p-6 rounded-t-lg
          ${isMatchComplete 
            ? 'bg-gradient-to-r from-yellow-500 to-orange-500' 
            : 'bg-gradient-to-r from-blue-500 to-purple-500'
          }
        `}>
          <h2 id="modal-title" className="text-2xl font-bold text-center">
            {isMatchComplete ? '🎉 Match Complete! 🎉' : `Round ${gameState.match.currentRound} Results`}
          </h2>
          {isMatchComplete && matchWinner && (
            <p className="text-center text-lg mt-2">
              {matchWinner.name} wins the match!
            </p>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          
          {/* Round Winner */}
          {!isMatchComplete && (
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 border-4 border-yellow-400 rounded-full mb-3">
                <span className="text-2xl">👑</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800">
                {roundWinner.name} wins Round {gameState.match.currentRound}!
              </h3>
              <p className="text-gray-600">
                With {roundWinner.roundScore} points
              </p>
            </div>
          )}

          {/* Detailed Scores */}
          <div className="space-y-3">
            <h4 className="font-semibold text-gray-800 border-b border-gray-200 pb-2">
              {isMatchComplete ? 'Final Standings' : 'Round Scores'}
            </h4>
            
            {playersWithScores.map((player, index) => (
              <div 
                key={player.id}
                className={`
                  flex items-center justify-between p-3 rounded-lg
                  ${index === 0 && !isMatchComplete
                    ? 'bg-yellow-50 border border-yellow-200'
                    : 'bg-gray-50'
                  }
                `}
              >
                <div className="flex items-center gap-3">
                  <div className={`
                    w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold
                    ${index === 0 
                      ? 'bg-yellow-500 text-white' 
                      : 'bg-gray-400 text-white'
                    }
                  `}>
                    {index + 1}
                  </div>
                  
                  <div>
                    <div className="font-semibold text-gray-800">
                      {player.name}
                      {player.type === 'bot' && (
                        <span className="ml-2 text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                          BOT
                        </span>
                      )}
                    </div>
                    {isMatchComplete && (
                      <div className="text-sm text-gray-600">
                        {player.roundWins} round{player.roundWins !== 1 ? 's' : ''} won
                      </div>
                    )}
                  </div>
                </div>

                <div className="text-right">
                  <div className="font-bold text-lg">
                    {isMatchComplete ? `${player.roundWins} wins` : `${player.roundScore} pts`}
                  </div>
                  {!isMatchComplete && index === 0 && (
                    <div className="text-xs text-yellow-600 font-semibold">
                      Round Winner!
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Match Progress */}
          {!isMatchComplete && (
            <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-2">Match Progress</h4>
              <div className="space-y-2">
                {gameState.players.map(player => (
                  <div key={player.id} className="flex items-center justify-between">
                    <span className="text-sm text-blue-700">{player.name}</span>
                    <div className="flex items-center gap-1">
                      {Array.from({ length: gameState.match.roundsToWin }, (_, i) => (
                        <div
                          key={i}
                          className={`
                            w-3 h-3 rounded-full
                            ${i < player.roundWins 
                              ? 'bg-blue-500' 
                              : 'bg-gray-200'
                            }
                          `}
                        />
                      ))}
                      <span className="ml-2 text-sm text-blue-700">
                        {player.roundWins}/{gameState.match.roundsToWin}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Game Statistics */}
          <div className="mt-4 text-center">
            <div className="grid grid-cols-3 gap-4 text-sm text-gray-600">
              <div>
                <div className="font-semibold">Round</div>
                <div>{gameState.match.currentRound}</div>
              </div>
              <div>
                <div className="font-semibold">Total Turns</div>
                <div>{gameState.round.turnNumber}</div>
              </div>
              <div>
                <div className="font-semibold">Cards Left</div>
                <div>{gameState.deck.drawPile.length}</div>
              </div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-6 py-4 rounded-b-lg">
          <button
            ref={buttonRef}
            onClick={onContinue}
            className={`
              w-full px-6 py-3 rounded font-semibold transition-colors focus:outline-none focus:ring-4 focus:ring-opacity-50
              ${isMatchComplete
                ? 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-300'
                : 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-300'
              }
            `}
            aria-label={isMatchComplete ? 'Start a new game' : 'Continue to the next round'}
          >
            {isMatchComplete ? 'New Game' : 'Continue to Next Round'}
          </button>
        </div>

      </div>
    </div>
  )
}