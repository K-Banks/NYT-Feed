import React from 'react';
import './article.css';

function Article(props){
  return(
    <div>
      <h1><a href={props.url}>{props.title}</a></h1>
      <h2>{props.byline}</h2>
      <img src={props.thumbnail_standard} alt="article image"></img>
    </div>
  );
}

export default Article;
