import React, { useState } from 'react'
import { useGame } from '../hooks/useGame'
import { GamePhase } from '../types'

export const GameControls: React.FC = () => {
  const { gameState, actions } = useGame()
  const [playerCount, setPlayerCount] = useState(2)
  const [playerNames, setPlayerNames] = useState(['You', 'Bot 1', 'Bot 2', 'Bot 3'])
  
  const currentPlayer = actions.getCurrentPlayer()
  const isHumanTurn = currentPlayer?.type === 'human'
  const hasDrawnCard = !!gameState.ui.selectedCard
  
  const canCallStop = actions.canCallStop() && isHumanTurn

  // Setup Phase Controls
  if (gameState.round.phase === GamePhase.SETUP) {
    return (
      <div className="space-y-4">
        
        {/* Player Count Selection */}
        <div>
          <label className="block text-sm font-medium text-casino-800 mb-2">
            Number of Players
          </label>
          <select 
            value={playerCount}
            onChange={(e) => setPlayerCount(Number(e.target.value))}
            className="w-full px-3 py-2 border-2 border-casino-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-casino-500 focus:border-casino-500 bg-white"
          >
            <option value={2}>2 Players</option>
            <option value={3}>3 Players</option>
            <option value={4}>4 Players</option>
          </select>
        </div>

        {/* Player Names */}
        <div>
          <label className="block text-sm font-medium text-casino-800 mb-2">
            Player Names
          </label>
          <div className="space-y-2">
            {Array.from({ length: playerCount }, (_, i) => (
              <input
                key={i}
                type="text"
                value={playerNames[i]}
                onChange={(e) => {
                  const newNames = [...playerNames]
                  newNames[i] = e.target.value
                  setPlayerNames(newNames)
                }}
                placeholder={i === 0 ? 'Your name' : `Bot ${i}`}
                className="w-full px-3 py-2 border-2 border-casino-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-casino-500 focus:border-casino-500 bg-white"
              />
            ))}
          </div>
        </div>

        {/* Start Game Button */}
        <button
          onClick={() => actions.startGame(playerCount, playerNames.slice(0, playerCount))}
          className="w-full px-8 py-4 bg-gradient-to-r from-casino-600 to-casino-700 text-white font-bold text-lg rounded-lg hover:from-casino-700 hover:to-casino-800 active:from-casino-800 active:to-casino-900 transition-all duration-200 shadow-card hover:shadow-card-hover border-2 border-casino-800 hover:border-casino-900"
        >
          🎮 Start Game 🎮
        </button>

      </div>
    )
  }

  // Card Viewing Phase Controls
  if (gameState.round.phase === 'card-viewing') {
    return (
      <div className="text-center space-y-4">
        <div className="bg-white bg-opacity-20 rounded-lg p-4 backdrop-blur-sm">
          <h3 className="text-white font-bold text-lg mb-3">Memorize Your Cards!</h3>
          <p className="text-white text-sm opacity-90 mb-4">
            Look at your face-up cards and remember them. They will be hidden once the game starts.
          </p>
          <button
            onClick={() => actions.makeMove({ type: 'START_PLAYING', payload: {} })}
            className="px-8 py-3 bg-gradient-to-r from-casino-600 to-casino-700 text-white font-bold rounded-lg hover:from-casino-700 hover:to-casino-800 active:from-casino-800 active:to-casino-900 transition-all duration-200 shadow-card hover:shadow-card-hover border-2 border-casino-800 hover:border-casino-900"
          >
            🚀 Start Playing
          </button>
        </div>
      </div>
    )
  }

  // Playing Phase Controls
  if (gameState.round.phase === GamePhase.PLAYING) {
    return (
      <div className="flex flex-wrap gap-3 justify-center">
        
        {/* Discard Button (when card is drawn) */}
        {hasDrawnCard && isHumanTurn && (
          <button
            onClick={() => actions.discardDrawnCard()}
            className="px-6 py-3 bg-gradient-to-r from-card-600 to-card-700 text-white font-bold rounded-lg hover:from-card-700 hover:to-card-800 active:from-card-800 active:to-card-900 transition-all duration-200 shadow-card hover:shadow-card-hover border-2 border-card-800 hover:border-card-900"
          >
            🗑️ Discard Card
          </button>
        )}

        {/* Call Stop Button */}
        {canCallStop && (
          <button
            onClick={() => actions.callStop()}
            className="px-6 py-3 bg-gradient-to-r from-gold-600 to-gold-700 text-white font-bold rounded-lg hover:from-gold-700 hover:to-gold-800 active:from-gold-800 active:to-gold-900 transition-all duration-200 shadow-card hover:shadow-card-hover border-2 border-gold-800 hover:border-gold-900"
          >
            ✋ Call Stop
          </button>
        )}

        {/* Development Controls (only in development) */}
        {import.meta.env.DEV && (
          <>
            <button
              onClick={() => actions.forceEndTurn()}
              className="px-4 py-2 bg-felt-600 text-white text-sm rounded hover:bg-felt-700 transition-colors duration-200 border border-felt-700"
            >
              ⏭️ Force End Turn
            </button>
            
            {currentPlayer?.type === 'bot' && (
              <button
                onClick={() => actions.processBotTurn()}
                className="px-4 py-2 bg-felt-600 text-white text-sm rounded hover:bg-felt-700 transition-colors duration-200 border border-felt-700"
              >
                🤖 Process Bot
              </button>
            )}
          </>
        )}

      </div>
    )
  }

  // Scoring Phase Controls - handled by ScoreModal now
  if (gameState.round.phase === GamePhase.SCORING) {
    return null // ScoreModal will handle this
  }

  // Finished Phase Controls
  if (gameState.round.phase === GamePhase.FINISHED) {
    return (
      <div className="text-center space-y-4">
        
        {/* Game Results */}
        <div className="bg-white bg-opacity-20 rounded-lg p-6 backdrop-blur-sm">
          <h2 className="text-white font-bold text-2xl mb-4">🎉 Game Complete! 🎉</h2>
          
          {gameState.match.winner && (
            <div className="text-yellow-300 font-bold text-xl mb-4">
              {gameState.players.find(p => p.id === gameState.match.winner)?.name} wins the match!
            </div>
          )}

          {/* Final Standings */}
          <div className="text-white">
            <h4 className="font-bold mb-2">Final Standings:</h4>
            {gameState.players
              .sort((a, b) => b.roundWins - a.roundWins)
              .map((player, index) => (
                <div key={player.id} className="flex justify-between items-center text-sm">
                  <span>{index + 1}. {player.name}</span>
                  <span>{player.roundWins} round{player.roundWins !== 1 ? 's' : ''}</span>
                </div>
              ))
            }
          </div>
        </div>

        {/* New Game Button */}
        <button
          onClick={() => window.location.reload()}
          className="px-8 py-3 bg-gradient-to-r from-casino-600 to-casino-700 text-white font-bold rounded-lg hover:from-casino-700 hover:to-casino-800 active:from-casino-800 active:to-casino-900 transition-all duration-200 shadow-card hover:shadow-card-hover border-2 border-casino-800 hover:border-casino-900"
        >
          🔄 New Game
        </button>

      </div>
    )
  }

  return null
}