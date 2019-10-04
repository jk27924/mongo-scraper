import React from "react";
import "./style.css";

const hamburgerButton = props => (
    <button className="hamburger-button">
        <div className="hamburger-button__line"/>
        <div className="hamburger-button__line"/>
        <div className="hamburger-button__line"/>
    </button>
);

export default hamburgerButton;