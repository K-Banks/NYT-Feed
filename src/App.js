import React from 'react';
import './App.css';
import Article from './components/article/article.js';
import Toolbar from './components/toolbar/toolbar.js';
import { newState, sectionsConstant } from './constants';

class App extends React.Component {

  constructor(props) {
    super(props);
    let freshState = Object.assign({}, newState);
    this.state = freshState;
    this.getArticles = this.getArticles.bind(this);
    this.handleResponseError = this.handleResponseError.bind(this);
    this.getArticles();
  }

  getArticles() {
    const url = 'https://api.nytimes.com/svc/news/v3/content/all/all.json?limit=10&api-key=' + process.env.REACT_APP_CLIENT_ID;
    fetch(url).then(
      response => {
        if (response.status === 200) {
          return response.json();
        } else {
          this.handleResponseError(response);
          return null;
        }
      }
    ).then(
      body => {
        if (body) {
          let articleState = body.results;
          this.setState(
            {articles : articleState}
          )
        }
      }
    )
  }

  handleResponseError(response) {
    console.log('There was an error: Response ' + response.status);
  }

  render() {
    let currentState = this.state.articles;

      return (
        <div className="App">
          <header className="App-header">
            <h1>NYT Feed</h1>
            <Toolbar props={sectionsConstant}/>
          </header>
          <div className="feed">
          {currentState.map(function(article) {
            return <Article props={article} key={article.slug_name}/>
          })}
          </div>
        </div>
      )
  }
}

export default App;
