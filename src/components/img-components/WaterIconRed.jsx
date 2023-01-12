import React from "react";
import waterIconRed from "/src/assets/icons/water_red.svg";
import waterIconYellow from "/src/assets/icons/water_yellow.svg";
import { useContext } from "react";
import { ThemeContext } from "../Theme";
function WaterIconRed() {
  const { theme } = useContext(ThemeContext);
  return (
    <div>{theme === "dark-theme" ? <img src={waterIconRed} alt="Water icon red" /> : <img src={waterIconYellow} alt="Water icon yellow" />}</div>
  );
}

export default WaterIconRed;
