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

// Commit msg for 10/05/2019 at around 3:30pm
// 1. Created models directory with Article.js, index.js, and Note.js. so I could use Mongoose. 
// 2.Worked on my scrape route in Server.js to have those data as an anchor tag. 
// 3. By creating Utils directory with API.js, I could export an object with a method of getArticles, 
// 4. Used componentDidMount to show the scraped articles on the react webpage. 
// 5. Created ArticleBody Component so the data lies on it. 
// 6. Created ArticleCard compoment so each of title and link could be inside of each card. 
// 7. Out of those links, there were some unclickable ones with javscript:void and ones starting with slash for my source site's local webpage. So I needed to use Filter and IF statement to only filter out for those working links.