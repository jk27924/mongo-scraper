import React from "react";
import "./ArticleCard.css";

function ArticleCard(props) {

    return (
      <div className="articleCard text-center">
        <a href= { props.link }>
            {props.title}
        </a>
      </div>
    );
  }
  
  export default ArticleCard;