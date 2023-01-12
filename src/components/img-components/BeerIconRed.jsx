import React from "react";
import beerIconRed from "/src/assets/icons/beer_red.svg";
import beerIconPink from "/src/assets/icons/beer_pink.svg";
import { useContext } from "react";
import { ThemeContext } from "../Theme";

function BeerIconRed() {
  const { theme } = useContext(ThemeContext);

  return <div>{theme === "dark-theme" ? <img src={beerIconRed} alt="Beer icon red" /> : <img src={beerIconPink} alt="Beer icon pink" />}</div>;
}

export default BeerIconRed;
