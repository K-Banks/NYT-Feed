import React from 'react';
import './App.css';
import Article from './components/article/article';
import { newState } from './constants';

class App extends React.Component {

  constructor(props) {
    super(props);
    let articles = {};
    let freshState = Object.assign({}, newState);
    this.state = freshState;
    this.getArticles = this.getArticles.bind(this);
    this.handleResponseError = this.handleResponseError.bind(this);
    this.populateArticles = this.populateArticles.bind(this);
    this.getArticles();

  }

  getArticles() {
    const url = 'https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=' + process.env.REACT_APP_CLIENT_ID;
    fetch(url).then(
      response => {
        if (response.status === 200) {
          return response.json()
        } else {
          this.handleResponseError(response);
          return null;
        }
      }
    ).then(
      body => {
        if (body) {
          this.state.articles = body.results;
          console.log(this.state);
          // this.populateArticles();
        }
      }
    )
  }

  populateArticles() {
    // for (var i = 0; i < this.articles.length; i++) {
    //   let article = this.articles[i];
    //   let target = document.getElementsByClassName('feed');
    //   let newArticle = <Article props={article} />;
    //   target.appendChild(newArticle);
    // }
  }

  handleResponseError(response) {
    console.log('There was an error: Response ' + response.status);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>NYT Feed</h1>
        </header>
        <div className="feed">

        </div>
      </div>
    );
  }
}

export default App;
