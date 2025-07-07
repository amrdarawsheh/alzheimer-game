import React from 'react'
import { useGame } from '../hooks/useGame'
import { GamePhase } from '../types'

export const GameStatus: React.FC = () => {
  const { gameState, actions } = useGame()
  const currentPlayer = actions.getCurrentPlayer()
  const stats = actions.getGameStatistics()

  const getPhaseDisplay = (phase: GamePhase) => {
    switch (phase) {
      case GamePhase.SETUP: return 'Game Setup'
      case GamePhase.CARD_VIEWING: return 'Card Viewing'
      case GamePhase.PLAYING: return 'Playing'
      case GamePhase.SCORING: return 'Round Complete'
      case GamePhase.FINISHED: return 'Game Finished'
      default: return phase
    }
  }

  return (
    <div className="bg-white bg-opacity-20 rounded-lg p-4 backdrop-blur-sm">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-white">
        
        {/* Phase and Round */}
        <div>
          <div className="text-sm opacity-80">Phase</div>
          <div className="font-bold">{getPhaseDisplay(gameState.round.phase)}</div>
        </div>

        <div>
          <div className="text-sm opacity-80">Round</div>
          <div className="font-bold">{gameState.match.currentRound}</div>
        </div>

        {/* Current Player */}
        {(gameState.round.phase === GamePhase.PLAYING || gameState.round.phase === GamePhase.CARD_VIEWING) && currentPlayer && (
          <div>
            <div className="text-sm opacity-80">Current Player</div>
            <div className="font-bold flex items-center justify-center gap-2">
              <span>{currentPlayer.name}</span>
              {currentPlayer.type === 'bot' && (
                <span className="text-xs bg-blue-500 px-2 py-1 rounded-full">BOT</span>
              )}
            </div>
          </div>
        )}

        {/* Turn Number */}
        {gameState.round.phase === GamePhase.PLAYING && (
          <div>
            <div className="text-sm opacity-80">Turn</div>
            <div className="font-bold">{gameState.round.turnNumber}</div>
          </div>
        )}

        {/* Stop Called Indicator */}
        {gameState.round.stopCalled && (
          <div className="col-span-2 md:col-span-4">
            <div className="bg-red-500 bg-opacity-80 rounded-lg p-2">
              <div className="font-bold">STOP CALLED!</div>
              <div className="text-sm">
                {gameState.round.remainingTurns} turn{gameState.round.remainingTurns !== 1 ? 's' : ''} remaining
              </div>
            </div>
          </div>
        )}

        {/* Deck Progress */}
        {gameState.round.phase === GamePhase.PLAYING && (
          <div className="col-span-2 md:col-span-4">
            <div className="text-sm opacity-80 mb-1">Deck Progress</div>
            <div className="bg-white bg-opacity-20 rounded-full h-2">
              <div 
                className="bg-white rounded-full h-2 transition-all duration-300"
                style={{ width: `${(stats as any).deckProgress || 0}%` }}
              />
            </div>
            <div className="text-xs mt-1">
              {gameState.deck.drawPile.length} cards remaining
            </div>
          </div>
        )}

      </div>
    </div>
  )
}