import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Nav";
// import Drawer from "./components/ToggleButton/drawer"
import Jumbotron from "./components/Jumbotron"
// import BehindDrawer from "./components/BehindDrawer/BehindDrawer" 

function App() {
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

  return (
    <div style={{height: "100%"}}>
        <Navbar /> 
        {/* // FOR SIDE DRAWER, attach this: // drawerHandler={this.drawerHandler} between Navbar slash*/}
        {/* <Drawer />; */}
        {/* <BehindDrawer />; */}
        <main style={{marginTop: "64px"}}>
          <Jumbotron />
        </main>
    </div>

    // FOR SIDE DRAWER
      // <div style={{height: "100%"}}>
      //   <Navbar drawerHandler={this.drawerHandler} />
      //   {drawer}
      //   {behindDrawer}
      //   <main style={{marginTop: "64px"}}>
      //     <Jumbotron />
      //   </main>
      // </div>
  );


  
}

export default App;
