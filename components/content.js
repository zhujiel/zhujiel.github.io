import React, { useState } from "react";
import "../components-css/content.css";
import Animation from "../components/landing-animation.js";

const Content = () => {
  return (
    <div className="content-container">
      <div
        id="landing-page"
        className="landing active-element"
        data-content="landing"
      >
        <div className="landing-text">
          <h1>
            All great actions and thoughts,
            <br />
            all have a insignificant beginning.
          </h1>
        </div>
      </div>

      <div
        id="project"
        className="project active-element"
        data-content="project"
      >
        <p>
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
        </p>
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
    </div>
  );
};

export default Content;
