import { GameProvider } from './contexts';
import { useGame } from './hooks';

// Test component to verify context is working
const GameTest = () => {
  const { gameState, actions } = useGame();

  return (
    <div className="min-h-screen bg-green-800 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Card Game</h1>
        <div className="space-y-4">
          <p className="text-gray-600">
            Context setup complete! Game state is working.
          </p>
          
          <div className="bg-gray-100 p-4 rounded">
            <h3 className="font-semibold mb-2">Game Status:</h3>
            <p className="text-sm">Phase: {gameState.round.phase}</p>
            <p className="text-sm">Round: {gameState.match.currentRound}</p>
            <p className="text-sm">Players: {gameState.players.length}</p>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => actions.startGame(2, ['Player 1', 'Bot 1'])}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Start Game
            </button>
            <button
              onClick={() => actions.callStop()}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Test Stop
            </button>
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
