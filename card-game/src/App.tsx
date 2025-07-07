import { GameProvider } from './contexts'
import { GameBoard } from './components'

function App() {
  return (
    <GameProvider>
      <GameBoard />
    </GameProvider>
  );
}

export default App;
