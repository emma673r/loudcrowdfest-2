import React from "react";
import FestivalMap from "../components/img-components/FestivalMap";
import Layout from "./Layout";
import Footer from "../components/Footer";
import PrimaryButton from "../components/PrimaryButton";
import { useNavigate } from "react-router-dom";
import FooterSponsors from "../components/img-components/FooterSponsors";
function Information() {
  const navigate = useNavigate();

  function goToLineup() {
    navigate("../lineup");
  }
  return (
    <>
      <Layout></Layout>
      <h1>Information</h1>
      <div className="infoPage">
        <h2>Map</h2>
        <FestivalMap></FestivalMap>
        <div className="info-wrap">
          <div>
            <h2>Stage</h2>
            <p className="info center-p">We have 3 stages for your enjoyment. One for the punk, one for the rap and one where we unite !</p>
          </div>
          <div>
            <h2>23' Lineup</h2>
            <p className="info center-p">We have gathered some of the biggest names for this years LoudCrowdFest!</p>
            <p className="info center-p">Take a look at them here</p>
            <div className="center-p">
              <PrimaryButton clickAction={goToLineup} desc={"See the lineup"} />
            </div>
          </div>
          <div>
            <h2>Bars</h2>
            <p className="info center-p">
              We collaborate with numbers of well know breweries to offer you the toppest of the notch of the beer and cocktails selection.
            </p>
            <p className="info center-p">
              You hvae acces to everything on the card in the main bar <em>Valhalla</em>. But we have many other bars accross the fest, with their own
              card. So enjoy and take a look around to taste some of the best beers and cocktails youæve ever tasted.
            </p>
          </div>
          <div>
            <h2>Food</h2>
            <p className="info center-p">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div>
            <h2>Merch</h2>
            <p className="info center-p">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div>
            <h2>Toilets</h2>
            <p className="info center-p">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div>
            <h2>Showers</h2>
            <p className="info center-p">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div>
            <h2>Sponsors</h2>
            <p className="info center-p">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        <h2>Sponsors</h2>
        <FooterSponsors />
      </div>
      <Footer></Footer>
    </>
  );
}

export default Information;
