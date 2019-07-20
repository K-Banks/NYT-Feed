import React from 'react';
import './App.css';
import Article from './components/article/article';
import { newState } from './constants';

class App extends React.Component {

  constructor(props) {
    super(props);
    let freshState = Object.assign({}, newState);
    this.state = freshState;
    this.getArticles = this.getArticles.bind(this);
  }

  getArticles() {
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
  }

  render() {
    return (
      <div className="App">
      <header className="App-header">
      <h1>NYT Feed</h1>
      </header>
      </div>
    );
  }
}

export default App;
