import React from "react";
import HamburgerButton from "../ToggleButton/HamburgerBtn"
import "./Nav.css";
import { Link } from "react-router-dom";

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
      <div>
        <HamburgerButton />
      </div>
      <div className="navbar__logo"><a href="/">MANCHESTER UNITED FC</a></div>
      <div className="spacer"></div>
      <div className="navbar__navigation-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/SavedArticle">Saved Articles</Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Navbar;
