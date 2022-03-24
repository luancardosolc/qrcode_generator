import './App.css';
import QRCode from 'qrcode.react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div id="QRCodeWrapper">
        <QRCode value="shorturl.at/gvCPT" />
      </div>
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
      </header>
    </div>
  );
}

export default App;
