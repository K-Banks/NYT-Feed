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
    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
    this.changeSelectedSection = this.changeSelectedSection.bind(this);
    this.buildURLRequest = this.buildURLRequest.bind(this);
    this.toggleLiveOrTop = this.toggleLiveOrTop.bind(this);

    this.getArticles();
  }

  getArticles() {
    let url = this.buildURLRequest();
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
            {
              articles : articleState,
              queryStatus: false
            }
          )
        }
      }
    )
  }


  // Basic API error handling, prints to console, needs UI interaction
  handleResponseError(response) {
    console.log('There was an error: Response ' + response.status);
  }

  showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
      document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });
  }

  changeSelectedSection(section) {
    this.setState({ selectedSection: section, queryStatus: true}, () => {
      this.getArticles();
    })
  }

  buildURLRequest() {
    let url = '';

    //Determine live feed or top articles
    if (this.state.liveFeed) {
      url = 'https://api.nytimes.com/svc/news/v3/content/all/' + this.state.selectedSection.value + '.json?offset=0&api-key=';
    } else {

      //Check if value is equal to 'all' then replace with equivalent string for top stories endpoint (home)
      if (this.state.selectedSection.value === 'all') {
        url = 'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=';
      } else {
        url = 'https://api.nytimes.com/svc/topstories/v2/' + this.state.selectedSection.value + '.json?api-key=';
      }
    }

    // attach API Key
    url = url + process.env.REACT_APP_CLIENT_ID;

    return url;
  }

  toggleLiveOrTop() {
    if (this.state.liveFeed) {
      this.setState({ liveFeed: false, queryStatus : true}, () => {
        this.getArticles();
      })
    } else {
      this.setState({ liveFeed: true,  queryStatus : true}, () => {
        this.getArticles();
      })
    }
  }

  render() {
    let currentState = this.state.articles;

      return (
        <div className="App">
          <header className="App-header">
            <h1> NYT Feed:

            {this.state.liveFeed ? (' Recent Stories') : (' Top Stories')}

            </h1>
            <Toolbar props={sectionsConstant} showDropdownMenu={this.showDropdownMenu} state={this.state} changeSelectedSection={this.changeSelectedSection} toggle={this.toggleLiveOrTop}/>
          </header>

          { this.state.queryStatus ? (
            <div class="loading">
              <div class="spinner">
                <div class="mask">
                  <div class="maskedCircle"></div>
                </div>
              </div>
            </div>
          ) : (
            <div className="feed">
            {currentState.map(function(article) {
              return <Article props={article} key={article.url} />
            })}
            </div>
          )}
        </div>
      )
  }
}

export default App;
