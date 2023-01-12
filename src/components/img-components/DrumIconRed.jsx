import drumIconRed from "/src/assets/icons/drums_red.svg";
import drumIconGreen from "/src/assets/icons/drums_green.svg";
import { useContext } from "react";
import { ThemeContext } from "../Theme";

function DrumIconRed() {
  const { theme } = useContext(ThemeContext);
  return <div>{theme === "dark-theme" ? <img src={drumIconRed} alt="drum icon red" /> : <img src={drumIconGreen} alt="drum icon green" />}</div>;
}

export default DrumIconRed;
