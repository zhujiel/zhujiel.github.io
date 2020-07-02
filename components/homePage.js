import React, { useState } from "react";
import Menu from "./navigator";
import BodyContent from "./bodyContent";

const homePage = () => {
  return (
    <React.Fragment>
      <Menu />
      <BodyContent />
    </React.Fragment>
  );
};
export default homePage;
