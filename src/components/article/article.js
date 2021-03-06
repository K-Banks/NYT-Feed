import React from 'react';
import './article.css';

function Article(props){

  if (props.props) {

    let abstract = '';
    if (props.props.abstract.length > 100) {
      abstract = props.props.abstract.substring(0, 100) + '...'
    } else {
      abstract = props.props.abstract
    }

    let published_date = props.props.published_date.substring(0,10)

    return(
      <div className="article-container">
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
          <p>{abstract}</p>
        </div>
        <div className="byline-date">
          <p><small>{published_date}</small></p>
        </div>
      </div>
    )
  } else {
    return null;
  }
}

export default Article;
