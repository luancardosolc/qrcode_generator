import './App.css';
import QRCode from 'qrcode.react';
import * as api from './api';
import { useEffect, useState } from 'react';

function App() {
  const [images, setImages] = useState([]);

  const getImgs = async () => {
    const data = await api.getImgs();
    // var ids = data.map(function(item) {
    //   return item['id'];
    // });
    setImages(data);
    console.log('data', data);
  }

  useEffect(() => {
    getImgs();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <QRCode value="shorturl.at/btBO3" />
        {images.map(() => {
          return (
            <p>
              Img
            </p>
          );
        })}
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
