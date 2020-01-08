import React from "react";

const Scroll = () => {
  window.addEventListener("scroll", () => {
    console.log("scrolled");
  });
};

export default Scroll;
