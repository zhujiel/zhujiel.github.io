import React from "react";
import Menu from "../components/navigator.js";
import Content from "./content.js";
import BackGround from "./landing-animation.js";
import "../components-css/web.css";

const web = () => {
  return (
    <div className="web">
      <BackGround />
      <Menu />
      <Content />
    </div>
  );
};
export default web;
