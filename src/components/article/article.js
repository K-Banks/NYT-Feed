import React from 'react';
import './article.css';

function Article(props){

  if (props.props) {
    return(
      <div className="article-container">
        <div></div>
        <div className="image">
          <img src={props.props.thumbnail_standard} alt="article"></img>
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
