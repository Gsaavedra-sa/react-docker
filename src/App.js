import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Desafio DevOps, link do repositorio abaixo.
        </p>
        <a
          className="App-link"
          href="https://github.com/Gsaavedra-sa/react-docker"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </header>
    </div>
  );
}

export default App;
