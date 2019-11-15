import React from 'react';
import logo from './logo.svg';
import './App.css';
import Api from './api/api'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Api />
      </header>
    </div>
  );
}

export default App;
