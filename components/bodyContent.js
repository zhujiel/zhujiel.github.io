import React, { useState, Fragment } from "react";
import "../components-css/bodyContent.css";
import Card from "./project-card.js";

const bodyContent = () => {
  return (
    <Fragment>
      <div className="bodyContainer">
        <div className="blockContainer">
          <Card name="英雄联盟" className="block"></Card>
          <Card name="绝地求生" className="block"></Card>
          <Card name="守望先锋" className="block"></Card>
          <Card name="聊天" className="block"></Card>
        </div>
      </div>
    </Fragment>
  );
};
export default bodyContent;
