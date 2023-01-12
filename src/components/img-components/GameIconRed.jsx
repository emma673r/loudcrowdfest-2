import React from "react";
import gameIconRed from "/src/assets/icons/game_red.svg";
import gameIconPink from "/src/assets/icons/game_pink.svg";
import { useContext } from "react";
import { ThemeContext } from "../Theme";
function GameIconRed() {
  const { theme } = useContext(ThemeContext);
  return <div>{theme == "dark-theme" ? <img src={gameIconRed} alt="Game icon red" /> : <img src={gameIconPink} alt="Game icon pink" />}</div>;
}

export default GameIconRed;
