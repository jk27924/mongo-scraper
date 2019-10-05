import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Nav/Nav";
import Jumbotron from "./components/Jumbotron/Jumbotron"
import API from './utils/API';
import ArticleBody from "./components/ArticleBody/ArticleBody"
// import Drawer from "./components/ToggleButton/drawer"
// import BehindDrawer from "./components/BehindDrawer/BehindDrawer" 


class App extends Component {
  state = {
    articles: []
  };

  componentDidMount() {
    this.loadArticles();
  };

  loadArticles = () => {
    API.getArticles()
      .then(res =>
        this.setState({ articles: res.data }))
      .catch(err => console.log(err));
  };
  
  // FOR SIDE DRAWER
    // state = {
    //   drawerOpen: false
    // };

    // drawerHandler = () => {
    //   this.setState((originalState) => {
    //     return {drawerOpen: !originalState.drawerOpen};
    //   });
    // };

    // let drawer;
    // let behindDrawer;

    // if (this.state.drawerOpen) {
    //   drawer = <Drawer />;
    //   behindDrawer = <BehindDrawer />;
    // }
  render () {
    return (
      <div style={{height: "100%"}}>
          <Navbar /> 
          <main style={{marginTop: "64px"}}>
            <Jumbotron />
            <ArticleBody
              articles={this.state.articles} />
          </main>
      </div>
    )
  }


    // FOR SIDE DRAWER
      // <div style={{height: "100%"}}>
      //   <Navbar drawerHandler={this.drawerHandler} />
      //   {drawer}
      //   {behindDrawer}
      //   <main style={{marginTop: "64px"}}>
      //     <Jumbotron />
      //   </main>
      // </div>
  


  
}

export default App;
