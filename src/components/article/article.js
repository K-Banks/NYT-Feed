import React from 'react';
import './article.css';

function Article(props){

  if (props.props) {
    return(
      <div className="article-container">
        <div></div>
        <div className="image">

          {props.props.multimedia[0] ? (
            <img src={props.props.multimedia[0].url} alt="article"></img>
          ) : (
            <img src={require('../../assets/nyt-logo.png')} alt="article"></img>
          )}

        </div>
        <div className="text">
          <h3><a href={props.props.url}>{props.props.title}</a></h3>
          <h5>{props.props.byline}</h5>
        </div>
        <div className="abstract">
          <p>{props.props.abstract}</p>
        </div>
      </div>
    )
  } else {
    return null;
  }
}

export default Article;
