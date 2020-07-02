import React, { useState } from "react";
import "../components-css/content.css";
import Animation from "./landing-animation.js";
import Card from "./project-card.js";
import Piano from "./piano.js";

const Content = () => {
  return (
    <React.Fragment>
      <div
        id="landing-page"
        className="landing active-element"
        data-content="landing"
      >
        <table>
          <tr>
            <td>
              <h1>
                All great actions and thoughts, all have a insignificant
                beginning.
              </h1>
            </td>
          </tr>
          <tr>
            <td>
              <span className="registerBtn">注册</span>
            </td>
            <td>
              <span className="loginBtn">已注册</span>
            </td>
          </tr>
        </table>
      </div>

      <div
        id="project"
        className="project active-element"
        data-content="project"
      >
        <div
          className="project-pole"
          data-card="project-pole"
          id="project-pole"
        >
          <div className="blurBox"></div>
          <Card name="Piano" />
        </div>
        <div id="c-d">
          <div
            id="Piano"
            className="diplay-pole  active-pole"
            data-pole="Piano"
          >
            <Piano />
          </div>
        </div>
      </div>
      <div
        id="gallery"
        className="gallery active-element"
        data-content="gallery"
      >
        <p>
          Why do we use it? It is a long established fact that a reader will be
          distracted by the readable content of a page when looking at its
          layout. The point of using Lorem Ipsum is that it has a more-or-less
          normal distribution of letters, as opposed to using 'Content here,
          content here', making it look like readable English. Many desktop
          publishing packages and web page editors now use Lorem Ipsum as their
          default model text, and a search for 'lorem ipsum' will uncover many
          web sites still in their infancy. Various versions have evolved over
          the years, sometimes by accident, sometimes on purpose (injected
          humour and the like).
        </p>
      </div>
      <div
        id="music"
        className="music active-element"
        data-content="music"
      ></div>
      <div
        id="about"
        className="about active-element"
        data-content="about"
      ></div>
    </React.Fragment>
  );
};

export default Content;
