import React from "react";
import { useNavigate } from "react-router-dom";
import WhiteLogo from "/src/assets/logo/lcf_white.svg";
import MultiLogo from "/src/assets/logo/logo-multi.gif";
import { useContext } from "react";
import { ThemeContext } from "../Theme";
function LogoWhite() {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();
  function gotToHome() {
    navigate("/");
  }

  return (
    <>
      {theme === "dark-theme" ? (
        <img onClick={gotToHome} src={WhiteLogo} className={"logo"} alt="Lcf logo" />
      ) : (
        <img onClick={gotToHome} src={MultiLogo} className={"logo"} alt="Lcf logo multi" />
      )}
    </>
  );
}

export default LogoWhite;
