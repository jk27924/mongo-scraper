import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Nav/Nav";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import API from './utils/API';
import ArticleBody from "./components/ArticleBody/ArticleBody";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./components/Pages/HomePage";
import SavedArticle from "./components/Pages/SavedArticle";


// import Drawer from "./components/ToggleButton/drawer"
// import BehindDrawer from "./components/BehindDrawer/BehindDrawer" 


function App() {

    return (
      <Router>
        <div style={{height: "100%"}}>
          <Navbar /> 
          <Route exact path="/" component={HomePage} />
          <Route exact path="/SavedArticle" component={SavedArticle} />
        </div>
      </Router>
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
  


  


export default App;

// Commit msg for 10/05/2019 at around 3:30pm
// 1. Created models directory with Article.js, index.js, and Note.js. so I could use Mongoose. 
// 2.Worked on my scrape route in Server.js to have those data as an anchor tag. 
// 3. By creating Utils directory with API.js, I could export an object with a method of getArticles, 
// 4. Used componentDidMount to show the scraped articles on the react webpage. 
// 5. Created ArticleBody Component so the data lies on it. 
// 6. Created ArticleCard compoment so each of title and link could be inside of each card. 
// 7. Out of those links, there were some unclickable ones with javscript:void and ones starting with slash for my source site's local webpage. So I needed to use Filter and IF statement to only filter out for those working links.