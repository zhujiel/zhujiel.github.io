import React, { useEffect } from "react";
import "../components-css/navigator.css";
import ShowContent from "../components/navigator-click.js";
//import Scroll from "./scrollEfekt.js";

const Navigator = () => {
  const refresh = () => {
    window.location.reload(false);
  };
  useEffect(() => {
    history.pushState({}, "", "/index.html");
  });

  return (
    <div className="header-container">
      <div className="logo-outer">
        <a href="#" onClick={refresh} className="logo">
          <div className="logo-inner">
            <span>Logo</span>
          </div>
        </a>
      </div>

      <div>
        <nav className="nav">
          <ul>
            <a href="#" onClick={ShowContent}>
              <li data-name="project">注册</li>
            </a>
            <a href="#" onClick={ShowContent}>
              <li data-name="gallery">登陆</li>
            </a>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navigator;
