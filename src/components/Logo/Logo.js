import React from "react";

import bugerLogo from "../../assets/images/original.png";
import classes from "./Logo.module.css";

const logo = props => {
  return (
    <div className={classes.Logo}>
      <img src={bugerLogo} alt="MyBurger" />
    </div>
  );
};

export default logo;
