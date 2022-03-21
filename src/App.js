import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <input type="text" name="textfield" placeholder="Search"></input>
        <button type="button">Search</button>
        <img src="https://media.giphy.com/media/Vh8pbGX3SGRwFDh3V0/source.gif" alt="Italian Trulli"></img>
      </header>
    </div>
  );
}

export default App;
