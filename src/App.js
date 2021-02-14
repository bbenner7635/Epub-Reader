import React from 'react';
import logo from './logo.svg';
import './App.css';
import useScript from './useScript.js';

function App() {
  useScript('../js/epub.js');
  useScript('../js/epub.min.js');
  useScript('https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.5/jszip.min.js');
  useScript('../js/reader.js');

    return (
      <div className="App">
        <div styles="margin-top:50px;">
          <div id="title">Rise Network Report #1</div>
          <div id="viewer" className="spreads"></div>
          <div styles="text-align:center; margin:auto; font-size:100px;">
            <button type="button" className="btn btn-primary btn-lg arrow" id="prev" href="#prev">‹</button>
            <button type="button" className="btn btn-primary btn-lg arrow" id="next" href="#next">›</button>
          </div>
        </div>
      </div>
    );
}

export default App;
