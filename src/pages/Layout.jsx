import React, { useContext, useState } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import ReactDOM from "react-dom/client";
import "../../src/burger-menu-style.css";
import LogoWhite from "../components/img-components/LogoWhite";
import { useEffect } from "react";
import { ThemeContext } from "../components/Theme";
import { useRef } from "react";
import { set } from "react-hook-form";

function Layout() {
  // const [isPsychTheme, setPsychTheme] = useState(false);

  const { theme, toggleTheme } = useContext(ThemeContext);

  const themeBox = useRef("themeBox");
  const toggleBtn = useRef("toggleBtn");

  const [toggleClass, setToggleClass] = useState("label");

  useEffect(() => {
    theme === "light-theme" ? (themeBox.checked = true) : (themeBox.checked = false);
    themeBox.checked ? setToggleClass("checkbox-checked checkbox") : setToggleClass("checkbox-unchecked checkbox");
    console.log("theme use effect", themeBox);
  }, [theme, themeBox]);

  console.log(theme);

  // function togglePsychTheme() {
  //   isPsychTheme ? setPsychTheme(false) : setPsychTheme(true);
  // }

  const navigate = useNavigate();
  function goToHome() {
    navigate("/");
  }
  function goToSche() {
    navigate("../schedule");
  }
  function goToLine() {
    navigate("../lineup");
  }
  function goToBook() {
    navigate("../booking");
  }
  function goToNo() {
    navigate("../noPage");
  }
  function goToInfo() {
    navigate("../information");
  }

  return (
    <div className="menuContent">
      <LogoWhite></LogoWhite>
      <p>30/6 - 07/07 2023</p>
      <div className="checkbox-box">
        <input ref={themeBox} onClick={() => toggleTheme()} type="checkbox" className={toggleClass} id="checkbox" />
        <label ref={toggleBtn} htmlFor="checkbox" className="label">
          <div className="ball" />
        </label>
      </div>
      <Menu right width={"100%"} noOverlay>
        {/* this is undefined but without it it doesnt work ?? (emma) */}
        {/* <Link onClick={() => this.closeMenu()} id="home" className="menu-item" to={"/"}> */}
        <div className="menu-item" onClick={goToHome}>
          HOME
        </div>
        {/* </Link> */}
        {/* <Link onClick={() => this.closeMenu()} id="schedule" className="menu-item" to={"../schedule"}> */}
        <div className="menu-item" onClick={goToSche}>
          SCHEDULE
        </div>
        {/* </Link> */}
        {/* <Link onClick={() => this.closeMenu()} id="lineup" className="menu-item" to={"../lineup"}> */}
        <div className="menu-item" onClick={goToLine}>
          LINE-UP
        </div>
        {/* </Link> */}
        {/* <Link onClick={() => this.closeMenu()} id="booking" className="menu-item" to={"../booking"}> */}
        <div className="menu-item" onClick={goToBook}>
          BOOKING
        </div>
        {/* </Link> */}
        {/* <Link onClick={() => this.closeMenu()} id="shop" className="menu-item" to={"../noPage"}> */}
        <div className="menu-item" onClick={goToNo}>
          SHOP
        </div>
        {/* </Link> */}
        {/* <Link onClick={() => this.closeMenu()} id="information" className="menu-item" to={"../information"}> */}
        <div className="menu-item" onClick={goToInfo}>
          INFORMATION
        </div>
        {/* </Link> */}
      </Menu>
      <Outlet />
    </div>
  );
}

export default Layout;
