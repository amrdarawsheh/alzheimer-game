import React from 'react'
import { useGame } from '../hooks/useGame'
import { GamePhase } from '../types'
import { PlayerArea } from './PlayerArea'
import { DeckArea } from './DeckArea'
import { GameControls } from './GameControls'
import { GameStatus } from './GameStatus'
import { DrawnCard } from './DrawnCard'
import { SpecialAbilityModal } from './SpecialAbilityModal'
import { PeekResultModal } from './PeekResultModal'
import { ScoreModal } from './ScoreModal'

export const GameBoard: React.FC = () => {
  const { gameState, actions } = useGame()
  
  // Check for special ability modals
  const drawnCardId = gameState.ui.selectedCard
  const drawnCard = drawnCardId ? actions.getCardById(drawnCardId) : null
  const showSpecialAbility = drawnCard?.isSpecial && gameState.ui.currentModal === 'special-ability'
  const showPeekResult = gameState.ui.currentModal === 'peek-result' && gameState.ui.showingPeekCard
  const peekCard = showPeekResult ? actions.getCardById(gameState.ui.showingPeekCard!) : null
  const showScoreModal = gameState.round.phase === GamePhase.SCORING
  
  const handleUseSpecialAbility = (params: any) => {
    if (!drawnCard) return
    
    if (drawnCard.rank === 'queen') {
      // Peek ability
      actions.peekCard(params.targetCardId)
    } else if (drawnCard.rank === 'jack') {
      // Swap ability
      actions.swapCards(
        params.playerCardIndex,
        params.targetPlayerId, 
        params.targetCardIndex
      )
    }
  }
  
  const handleSkipSpecialAbility = () => {
    if (!drawnCard) return
    actions.skipSpecialAbility(drawnCard.id)
  }

  return (
    <div className="min-h-screen bg-room-ambient flex items-center justify-center p-4 relative">
      {/* Ambient lighting effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-casino-900/20 to-casino-900/40"></div>
      
      <div className="max-w-6xl w-full relative z-10">
        {/* Table Edge/Rail */}
        <div className="bg-table-edge rounded-2xl p-2 shadow-2xl">
          {/* Felt Playing Surface */}
          <div className="bg-casino-table rounded-xl shadow-table p-6 border border-casino-600 relative overflow-hidden">
            {/* Subtle felt texture overlay */}
            <div className="absolute inset-0 bg-table-felt opacity-5 rounded-xl"></div>
            <div className="relative z-10">
          
          {/* Game Header */}
          <div className="text-center mb-6">
            <h1 className="text-4xl font-bold text-white mb-2">Card Game</h1>
            <GameStatus />
          </div>

          {/* Game Setup */}
          {gameState.round.phase === GamePhase.SETUP && (
            <div className="text-center">
              <div className="bg-felt-50 rounded-lg p-8 shadow-card max-w-md mx-auto border border-gold-300">
                <h2 className="text-2xl font-bold text-casino-900 mb-4">Welcome to Card Game!</h2>
                <p className="text-casino-700 mb-6">Start a new game to begin playing.</p>
                <GameControls />
              </div>
            </div>
          )}

          {/* Main Game Area */}
          {gameState.round.phase !== GamePhase.SETUP && (
            <div className="space-y-6">
              
              {/* Top Player Area (Opponents) */}
              {gameState.players.length > 1 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {gameState.players.slice(1).map((player, index) => (
                    <PlayerArea 
                      key={player.id} 
                      player={player} 
                      isCurrentPlayer={gameState.round.currentPlayerIndex === index + 1}
                      showAsOpponent={true}
                    />
                  ))}
                </div>
              )}

              {/* Center Game Area */}
              <div className="flex justify-center items-center space-x-8">
                
                {/* Deck and Discard */}
                <DeckArea />
                
                {/* Drawn Card Display */}
                <DrawnCard />
                
              </div>

              {/* Bottom Player Area (Human Player) */}
              {gameState.players.length > 0 && (
                <div className="flex justify-center">
                  <PlayerArea 
                    player={gameState.players[0]} 
                    isCurrentPlayer={gameState.round.currentPlayerIndex === 0}
                    showAsOpponent={false}
                  />
                </div>
              )}

              {/* Game Controls */}
              <div className="flex justify-center">
                <GameControls />
              </div>

            </div>
          )}

            </div> {/* Close relative z-10 div */}
          </div> {/* Close felt playing surface */}
        </div> {/* Close table edge */}

      {/* Special Ability Modal */}
      {showSpecialAbility && drawnCard && (
        <SpecialAbilityModal
          card={drawnCard}
          abilityType={drawnCard.rank === 'queen' ? 'peek' : 'swap'}
          onClose={() => actions.hideModal()}
          onUse={handleUseSpecialAbility}
          onSkip={handleSkipSpecialAbility}
        />
      )}

      {/* Peek Result Modal */}
      {showPeekResult && peekCard && (
        <PeekResultModal
          card={peekCard}
          onClose={() => {
            actions.hideModal()
            // Also clear the peek result
            if (gameState.ui.showingPeekCard) {
              actions.makeMove({ type: 'HIDE_PEEK_RESULT', payload: {} })
            }
          }}
        />
      )}

      {/* Score Modal */}
      {showScoreModal && (
        <ScoreModal
          onContinue={() => actions.forceProgressScoring()}
        />
      )}

      </div> {/* Close max-w-6xl container */}
    </div>
  )
}