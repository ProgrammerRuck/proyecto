import logo from './logo.svg';
import './App.css';
import Intro from './components/Intro';
import Paginas from './pages/Paginas';
import Pagina1 from './pages/Pagina1';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router";


function App() {
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Intro message="Buenas tardes" />
          <Router>
              <div>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/Paginas">Pagina 1</Link>
                  </li>
                  <li>
                    <Link to="/Pagina1">Pagina 2</Link>
                  </li> 
                </ul>
              </div>
              <Routes>
                <Route path="/Paginas" element={<Paginas />}/>
                <Route path="/Pagina1" element={<Pagina1 />}/>
              </Routes>
          </Router>
        </header>
      </div>
  );
}

export default App;
