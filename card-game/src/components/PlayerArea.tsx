import React from 'react'
import type { Player } from '../types'
import { PlayingCard } from './PlayingCard'

interface PlayerAreaProps {
  player: Player
  isCurrentPlayer: boolean
  showAsOpponent: boolean
}

export const PlayerArea: React.FC<PlayerAreaProps> = ({ 
  player, 
  isCurrentPlayer, 
  showAsOpponent 
}) => {
  const playerScore = player.score > 0 ? player.score : null

  return (
    <div className={`
      bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 border-2 transition-all duration-300
      ${isCurrentPlayer 
        ? 'border-yellow-400 bg-opacity-20 shadow-lg' 
        : 'border-white border-opacity-30'
      }
    `}>
      
      {/* Player Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <h3 className="font-bold text-white text-lg">{player.name}</h3>
          {player.type === 'bot' && (
            <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
              BOT
            </span>
          )}
          {isCurrentPlayer && (
            <span className="bg-yellow-500 text-black text-xs px-2 py-1 rounded-full font-bold">
              TURN
            </span>
          )}
        </div>
        
        {/* Player Stats */}
        <div className="text-right text-white">
          {playerScore !== null && (
            <div className="text-sm">
              <span className="opacity-80">Score: </span>
              <span className="font-bold">{playerScore}</span>
            </div>
          )}
          <div className="text-xs opacity-60">
            Round wins: {player.roundWins}
          </div>
        </div>
      </div>

      {/* Player Cards */}
      <div className={`
        grid gap-2 transition-all duration-300
        ${showAsOpponent 
          ? 'grid-cols-4' 
          : 'grid-cols-4 md:grid-cols-4'
        }
      `}>
        {player.cards.map((playerCard, index) => (
          <PlayingCard
            key={index}
            playerCard={playerCard}
            cardIndex={index}
            playerId={player.id}
            showAsOpponent={showAsOpponent}
            isCurrentPlayer={isCurrentPlayer}
            isHumanPlayer={player.type === 'human'}
          />
        ))}
      </div>

      {/* Player Status */}
      {isCurrentPlayer && player.type === 'bot' && (
        <div className="mt-3 text-center">
          <div className="bg-blue-500 bg-opacity-80 rounded px-3 py-1 text-white text-sm">
            Bot is thinking...
          </div>
        </div>
      )}

    </div>
  )
}