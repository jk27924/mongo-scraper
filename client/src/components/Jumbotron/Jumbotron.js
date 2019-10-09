import React from "react";
import "./Jumbotron.css";
import JumbotronImage from "../../jumbotronImage.png";

function Jumbotron() {
  return (
    <div className="jumbotron text-center">
      {/* <h1>MANCHESTER UNITED FC SCRAPER</h1>
      <p><a target="_blank" rel="noopener noreferrer" href="https://www.manutd.com">Powered By Manchester United Official Webpage</a></p> */}
      {/* <a target="_blank" rel="noopener noreferrer" href="https://www.manutd.com">Powered By Manchester United Official Webpage</a> */}
      <img src={JumbotronImage} alt="ManUTD Jumbotron"/>
    </div>
  );
}

export default Jumbotron;
