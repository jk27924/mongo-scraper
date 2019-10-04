import React from "react";
import "./drawer.css";

const drawer = props => (
    <nav className="responsive-drawer">
        <ul>
            <li><a href>Home</a></li>
            <li><a href>Saved Articles</a></li>
        </ul>
    </nav>
);

export default drawer;