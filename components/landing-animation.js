import React, { useRef, useEffect } from "react";
import AnimateBackground from "../components/animate.js";
import "../components-css/canvas.css";
const Animation = () => {
  useEffect(() => {
    AnimateBackground();
  });
  return <canvas id="canvas"></canvas>;
};

export default Animation;
