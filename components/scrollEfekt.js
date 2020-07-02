import React from "react";

const Scroll = () => {
  const scroll =
    window.requestAnimationFrame ||
    function(callback) {
      window.setTimeout(callback, 1000 / 60);
    };
};

export default Scroll;
