import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link data-testid="learn-react-link" to="/learn">Learn React</Link>
      </header>
    </div>
  );
}

export default App;
