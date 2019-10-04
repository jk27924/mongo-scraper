import React from "react";
import "./style.css";

// function Nav() {
//   return (
//     <nav className="navbar navbar-dark bg-dark">
//       <a className="navbar-brand" href="/">
//         ManUTD Scraper
//       </a>
//     </nav>
//   );
// }

const Navbar = props => (
  <header className="navbar">
    <nav className="navbar__navigation">
      <div></div>
      <div className="navbar__logo"><a href="/">ManUTD Scraper</a></div>
      <div className="spacer"></div>
      <div className="navbar__navigation-items">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/">Saved Articles</a></li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Navbar;
