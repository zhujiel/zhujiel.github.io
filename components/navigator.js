import React, { useEffect } from "react";
import "../components-css/navigator.css";
import ShowContent from "../components/navigator-click.js";
//import Scroll from "./scrollEfekt.js";

const Navigator = () => {
  const refresh = () => {
    window.location.reload(false);
  };

  return (
    <div className="header-container">
      <div className="logo-outer">
        <a href="#" onClick={refresh} className="logo">
          <div className="logo-inner">
            <h1>ZJL</h1>
          </div>
        </a>
      </div>

      <div>
        <nav className="nav">
          <ul>
            <a href="#" onClick={ShowContent}>
              <li data-name="project">Projects</li>
            </a>
            <a href="#" onClick={ShowContent}>
              <li data-name="gallery">Gallery</li>
            </a>
            <a href="#" onClick={ShowContent}>
              <li data-name="music">Music</li>
            </a>
            <a href="#" onClick={ShowContent}>
              <li data-name="about">About</li>
            </a>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navigator;
