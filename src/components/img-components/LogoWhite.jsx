import React from "react";
import { useNavigate } from "react-router-dom";
import WhiteLogo from "/src/assets/logo/lcf_white.svg";
function LogoWhite() {
  const navigate = useNavigate();
  function gotToHome() {
    navigate("/");
  }
  return <img onClick={gotToHome} src={WhiteLogo} className={"logo"} alt="Lcf logo" />;
}

export default LogoWhite;
