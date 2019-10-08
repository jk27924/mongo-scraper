import React, { Component } from 'react';
import Navbar from "../Nav/Nav";
import ArticleBody from "../ArticleBody/ArticleBody";
import API from "../../utils/API";


class SavedArticle extends Component {
    state = {
        articles: []
      };
    
      componentDidMount() {
        this.loadArticles();
      };
    
      loadArticles = () => {
        API.getSavedArticles()
          .then(res =>
            this.setState({ articles: res.data }))
          .catch(err => console.log(err));
      };
      
    
    render () {
        return (
            <div style={{height: "100%"}}>
                <Navbar />
                <main style={{marginTop: "64px"}}>
                <ArticleBody
                    articles={this.state.articles} />
                </main>
            </div>
        )
    }
}
 
export default SavedArticle;