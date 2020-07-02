import React from "react";
import "../components-css/projectCard.css";

const CardProject = (props) => {
  function show(e) {
    let unfade = (element) => {
      let op = 0.1;
      element.style.display = "block";
      let timer = setInterval(function () {
        if (op >= 1) {
          clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = "alpha(opacity=" + op * 100 + ")";
        op += op * 0.1;
      }, 10);
    };

    console.log("clicked");
    let poles = document.querySelectorAll(".active-pole");
    console.log(e.target.attributes.getNamedItem("data-card").value);
    /*console.log(poles);
    const id = e.target.attributes.getNamedItem("data-pole").value;
    history.pushState({}, id, "/index.html?" + id);*/
    for (let i = 0; i < poles.length; i++) {
      if (poles[i].id == e.target.attributes.getNamedItem("data-card").value) {
        unfade(document.getElementById(poles[i].id));
        document.getElementById("project-pole").style.display = "none";
        document.getElementById("c-d").style.display = "block";
      } else {
        document.getElementById(poles[i].id).style.display = "none";
        document.getElementById(poles[i].id).style.opacity = "0";
      }
    }
  }
  return (
    <div className="card-container" data-card={props.name}>
      <a href="#" onClick={show} data-card={props.name}>
        <div className="card1">
          <img
            src={"../image/" + props.name + ".png"}
            data-card={props.name}
          ></img>
        </div>
        <div className="card2" data-card={props.name}>
          <h2 data-card={props.name}>{props.name}</h2>
        </div>
      </a>
    </div>
  );
};

export default CardProject;
