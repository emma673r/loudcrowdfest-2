import React from "react";
import burgerIconRed from "/src/assets/icons/burger_red.svg";
import burgerIconYellow from "/src/assets/icons/burger_yellow.svg";
import { useContext } from "react";
import { ThemeContext } from "../Theme";
function BurgerIconRed() {
  const { theme } = useContext(ThemeContext);
  return (
    <div>{theme === "dark-theme" ? <img src={burgerIconRed} alt="burger icon red" /> : <img src={burgerIconYellow} alt="burger icon yellow" />}</div>
  );
}

export default BurgerIconRed;
