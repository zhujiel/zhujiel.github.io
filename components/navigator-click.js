import React from "react";

const showContent = e => {
  let contents = document.querySelectorAll(".active-element");

  /*document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });*/

  //Fade then content
  let fade = element => {
    var op = 1;
    var timer = setInterval(function() {
      if (op <= 0.1) {
        clearInterval(timer);
        element.style.display = "none";
      }
      element.style.opacity = op;
      element.style.filter = "alpha(opacity=" + op * 100 + ")";
      op -= op * 0.1;
    }, 50);
  };

  //unfade the content
  let unfade = element => {
    var op = 0.1;
    element.style.display = "block";
    var timer = setInterval(function() {
      if (op >= 1) {
        clearInterval(timer);
      }
      element.style.opacity = op;
      element.style.filter = "alpha(opacity=" + op * 100 + ")";
      op += op * 0.1;
    }, 10);
  };

  //Define which div (fade and unfade)
  for (let i = 0; i < contents.length; i++) {
    if (
      contents[i].attributes.getNamedItem("data-content").value ==
      e.target.attributes.getNamedItem("data-name").value
    ) {
      unfade(document.getElementById(contents[i].id));
    } else {
      document.getElementById(contents[i].id).style.display = "none";
      document.getElementById(contents[i].id).style.opacity = "0";
    }
  }
};

export default showContent;
