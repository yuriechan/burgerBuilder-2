import React from "react";
import classes from "./NavigationItems.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const NagivationItems = () => (
  <ul className={classes.NagivationItems}>
    <NavigationItem link="/" active>
      Burger Builder
    </NavigationItem>
  </ul>
);

export default NagivationItems;
