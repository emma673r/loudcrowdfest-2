import React from "react";
import tentIconRed from "/src/assets/icons/camp_red.svg";
import tentIconYellow from "/src/assets/icons/camp_yellow.svg";
import { useContext } from "react";
import { ThemeContext } from "../Theme";
function TentIconRed() {
  const { theme } = useContext(ThemeContext);
  return <div>{theme === "dark-theme" ? <img src={tentIconRed} alt="tent icon" /> : <img src={tentIconYellow} alt="tent icon yellow" />}</div>;
}

export default TentIconRed;
