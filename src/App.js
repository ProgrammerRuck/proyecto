import logo from './logo.svg';
import './App.css';
import Intro from './components/Intro';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Intro message="Buenas tardes" />
      </header>
    </div>
  );
}

export default App;
