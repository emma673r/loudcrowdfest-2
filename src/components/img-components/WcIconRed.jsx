import React from "react";
import wcIconRed from "/src/assets/icons/wc_red.svg";
import wcIconGreen from "/src/assets/icons/wc_green.svg";
import { useContext } from "react";
import { ThemeContext } from "../Theme";

function WcIconRed() {
  const { theme } = useContext(ThemeContext);
  return <div>{theme === "dark-theme" ? <img src={wcIconRed} alt="Toilet icon red" /> : <img src={wcIconGreen} alt="Toilet icon green" />}</div>;
}

export default WcIconRed;
