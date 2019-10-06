import React, { Component } from 'react';
import "./ArticleCard.css";
import Axios from 'axios';


class ArticleCard extends Component {

  handleSave = event => {
    console.log(this.props.link);

    Axios.get('http://localhost:3001/all').then(res => {console.log(res)})
  }

  render () {
    return (
      <div className="articleCard text-center">
        <a href= { this.props.link }>
            {this.props.title}
        </a>
        <button className="saveBtn" onClick={this.handleSave}>Save</button>
      </div>
    );
    }
}
  
  export default ArticleCard;