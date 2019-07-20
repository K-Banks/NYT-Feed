import React from 'react';
import './App.css';
import { newState } from './constants';

function App() {

  console.log(process.env.REACT_APP_CLIENT_ID);

  const url = 'https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=' + process.env.REACT_APP_CLIENT_ID;
  fetch(url).then(
    response => {
      if (response.status === 200) {
        return response.json()
      } else {
        this.handleResponseError(response)
      }
    }
  ).then(
    body => {
      console.log(body);
    }
  )

  return (
    <div className="App">
      <header className="App-header">
        <h1>NYT Feed</h1>
      </header>
    </div>
  );
}

export default App;
