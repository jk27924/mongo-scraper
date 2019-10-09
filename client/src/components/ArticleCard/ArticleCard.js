import React, { Component } from 'react';
import "./ArticleCard.css";
import Axios from 'axios';


class ArticleCard extends Component {

  handleSave = event => {
    console.log(this.props.link);

    Axios.get('/all').then(res => {console.log(res)})
  }

  render () {
    return (
      <div className="articleCard text-center">
        <a href= { this.props.link }>
            {this.props.title}
        </a>
        <button className="saveBtn" onClick={this.handleSave}>SAVE</button>
      </div>
    );
    }
}
  
  export default ArticleCard;