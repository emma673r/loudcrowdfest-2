import React from "react";
import { useLocation } from "react-router-dom";
import Bands from "../components/Bands";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import Layout from "./Layout";
function SoloAct({ bands }) {
  const location = useLocation();
  console.log(location.state.name);

  let theBand;
  bands.map((band) => {
    if (band.name === location.state.name) {
      theBand = band;
    }
  });

  const [badImgUrl, setBadImgUrl] = useState("");

  console.log(theBand);

  useEffect(() => {
    function getBadImg() {
      if (!theBand.logo.includes("https://")) {
        setBadImgUrl(`https://footrypleaseworkanddeletelateron.fly.dev/logos/${theBand.logo}`);
      }
    }
    getBadImg();
    // console.log("bad img url ", badImgUrl);

    if (!theBand.logo.includes("https://")) {
      theBand.logo = badImgUrl;
    }
  }, [badImgUrl]);

  return (
    <>
      <Layout />
      <h2>{theBand.name}</h2>
      <div className="imgflex">
        <img className="soloActImg" src={theBand.logo} alt={theBand.name} />
      </div>
      <div className="center-p solowrap">
        <div>
          <h3>Genre</h3>
          <p className="center-p">{theBand.genre}</p>
          <h3>Logo Credits</h3>
          {!theBand.logoCredits && <p className="center-p credits">no credits for this pictures.</p>}
          {theBand.logoCredits && <p className="center-p credits">{theBand.logoCredits}</p>}
        </div>

        <div className="bio">
          <h3>Bio</h3>
          <p className="center-p">{theBand.bio}</p>
        </div>
        <div>
          <h3>Members</h3>
          <div>
            {theBand.members.map((member) => (
              <p className="center-p">{member}</p>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default SoloAct;
