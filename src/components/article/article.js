import React from 'react';
import './article.css';

function Article(props){

  if (props.props) {
    return(
      <div>
        <h1><a href={props.props.url}>{props.props.title}</a></h1>
        <h2>{props.props.byline}</h2>
        <img src={props.props.thumbnail_standard} alt="article"></img>
      </div>
    )
  } else {
    return null;
  }
}

export default Article;
