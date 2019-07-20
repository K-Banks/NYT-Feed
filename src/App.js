import React from 'react';
import './App.css';
import { newState } from './constants';

function App() {

  console.log(newState.name);

  return (
    <div className="App">
      <header className="App-header">
        <h1>NYT Feed</h1>
      </header>
    </div>
  );
}

export default App;
