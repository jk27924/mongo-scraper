import React from "react";
import "./Jumbotron.css";

function Jumbotron() {
  return (
    <div className="jumbotron text-center">
      {/* <img source={ ("../../../assets/images/jumbotron.png") }></img> */}
      <h1>MANCHESTER UNITED FC SCRAPER</h1>
      <a target="_blank" rel="noopener noreferrer" href="https://www.manutd.com">
        Powered By Manchester United Official Webpage
      </a>
    </div>
  );
}

export default Jumbotron;
