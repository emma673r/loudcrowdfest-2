import React from "react";
import merchIconRed from "/src/assets/icons/merch_red.svg";
import merchIconPink from "/src/assets/icons/merch_pink.svg";
import { useContext } from "react";
import { ThemeContext } from "../Theme";
function MerchIconRed() {
  const { theme } = useContext(ThemeContext);
  return <div>{theme === "dark-theme" ? <img src={merchIconRed} alt="Merch icon red" /> : <img src={merchIconPink} alt="Merch icon pink" />}</div>;
}

export default MerchIconRed;
