import { GameProvider } from './contexts';
import { useGame } from './hooks';

// Test component to verify context is working
const GameTest = () => {
  const { gameState, actions } = useGame();
  const currentPlayer = actions.getCurrentPlayer();
  const drawnCard = gameState.ui.selectedCard ? actions.getCardById(gameState.ui.selectedCard) : null;

  return (
    <div className="min-h-screen bg-green-800 flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Card Game - Reducer Test</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Game Status */}
          <div className="bg-gray-100 p-4 rounded">
            <h3 className="font-semibold mb-2">Game Status:</h3>
            <p className="text-sm">Phase: {gameState.round.phase}</p>
            <p className="text-sm">Round: {gameState.match.currentRound}</p>
            <p className="text-sm">Turn: {gameState.round.turnNumber}</p>
            <p className="text-sm">Players: {gameState.players.length}</p>
            <p className="text-sm">Current Player: {currentPlayer?.name || 'None'}</p>
            <p className="text-sm">Draw Pile: {gameState.deck.drawPile.length} cards</p>
            <p className="text-sm">Discard Pile: {gameState.deck.discardPile.length} cards</p>
            {gameState.round.stopCalled && (
              <p className="text-sm text-red-600">Stop called! {gameState.round.remainingTurns} turns left</p>
            )}
          </div>

          {/* Player Cards */}
          {gameState.players.length > 0 && (
            <div className="bg-blue-50 p-4 rounded">
              <h3 className="font-semibold mb-2">Your Cards:</h3>
              <div className="grid grid-cols-4 gap-2 mb-4">
                {gameState.players[0]?.cards.map((playerCard, index) => {
                  const card = actions.getCardById(playerCard.cardId);
                  return (
                    <div key={index} className="bg-white p-2 rounded border text-center text-xs">
                      <div className="font-semibold">Card {index + 1}</div>
                      {playerCard.isKnownToPlayer && card ? (
                        <div>
                          <div>{card.rank}</div>
                          <div>{card.suit}</div>
                          <div>({card.value} pts)</div>
                        </div>
                      ) : (
                        <div className="text-gray-500">Unknown</div>
                      )}
                      {playerCard.isRevealed && card && (
                        <div className="text-green-600 font-bold">REVEALED</div>
                      )}
                    </div>
                  );
                })}
              </div>
              
              {gameState.players[0]?.score > 0 && (
                <p className="text-sm font-semibold">Score: {gameState.players[0].score}</p>
              )}
            </div>
          )}

          {/* Actions */}
          <div className="bg-yellow-50 p-4 rounded">
            <h3 className="font-semibold mb-2">Actions:</h3>
            
            {gameState.round.phase === 'setup' && (
              <button
                onClick={() => actions.startGame(2, ['You', 'Bot 1'])}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mr-2 mb-2"
              >
                Start Game
              </button>
            )}

            {gameState.round.phase === 'playing' && currentPlayer?.type === 'human' && !drawnCard && (
              <div className="space-y-2">
                <button
                  onClick={() => actions.drawFromDeck()}
                  disabled={!actions.canDrawFromDeck()}
                  className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:bg-gray-300 mr-2"
                >
                  Draw from Deck ({gameState.deck.drawPile.length})
                </button>
                <button
                  onClick={() => actions.drawFromDiscard()}
                  disabled={!actions.canDrawFromDiscard()}
                  className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 disabled:bg-gray-300"
                >
                  Draw from Discard
                </button>
              </div>
            )}

            {drawnCard && (
              <div className="space-y-2">
                <div className="bg-white p-2 rounded border">
                  <strong>Drawn Card:</strong> {drawnCard.rank} of {drawnCard.suit} ({drawnCard.value} pts)
                </div>
                <div className="space-x-2">
                  {[0, 1, 2, 3].map(index => (
                    <button
                      key={index}
                      onClick={() => actions.replaceCard(index)}
                      className="px-2 py-1 bg-orange-500 text-white rounded hover:bg-orange-600 text-sm"
                    >
                      Replace Card {index + 1}
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => actions.discardDrawnCard()}
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Discard
                </button>
              </div>
            )}

            {gameState.round.phase === 'playing' && actions.canCallStop() && (
              <button
                onClick={() => actions.callStop()}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Call Stop
              </button>
            )}

            {gameState.round.phase === 'scoring' && (
              <button
                onClick={() => actions.makeMove({ type: 'START_ROUND', payload: {} })}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Start Next Round
              </button>
            )}
          </div>

          {/* Game Log */}
          <div className="bg-gray-50 p-4 rounded">
            <h3 className="font-semibold mb-2">Last Action:</h3>
            {gameState.lastAction && (
              <div className="text-xs">
                <p><strong>Type:</strong> {gameState.lastAction.type}</p>
                <p><strong>Player:</strong> {gameState.lastAction.playerId}</p>
                <p><strong>Details:</strong> {JSON.stringify(gameState.lastAction.details, null, 2)}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <GameProvider>
      <GameTest />
    </GameProvider>
  );
}

export default App;
