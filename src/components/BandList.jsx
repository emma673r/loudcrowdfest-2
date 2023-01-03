import { useState, useEffect } from "react";
import Bands from "./Bands";
import { useNavigate } from "react-router-dom";
import SoloAct from "../pages/SoloAct";

function BandList({ band }) {
  // console.log(band.logo);
  let act;
  // const [theAct, setTheAct] = useState("");

  const navigate = useNavigate();

  const [badImgUrl, setBadImgUrl] = useState("");
  // console.log(badImgUrl);

  function getThisBand(e) {
    // console.log(e.target.parentElement.id);
    act = e.target.parentElement.id;

    navigate("../soloAct", { state: { name: act } });
    // setTheAct(act);

    // console.log(theAct);
  }

  // function showAct() {
  //   if (theAct === band.name) {
  //     return <SoloAct band={band}></SoloAct>;
  //   } else if (theAct === "") {
  //     return (
  //       <div onClick={getThisBand} id={band.name} className="oneBand">
  //         <div className="band-lineup">{band.name}</div>
  //         <img className="lineup-img" src={band.logo} alt={band.name} />
  //       </div>
  //     );
  //   }
  // }

  // console.log(theAct);
  // console.log(theAct);

  useEffect(() => {
    function getBadImg() {
      if (!band.logo.includes("https://")) {
        setBadImgUrl(`https://footrypleaseworkanddeletelateron.fly.dev/logos/${band.logo}`);
      }
    }
    getBadImg();
    // console.log("bad img url ", badImgUrl);

    if (!band.logo.includes("https://")) {
      band.logo = badImgUrl;
    }
  }, [badImgUrl]);

  return (
    <>
      {/* {showAct()} */}
      <div onClick={getThisBand} id={band.name} className="oneBand">
        <div className="band-lineup">{band.name}</div>
        <img className="lineup-img" src={band.logo} alt={band.name} />
      </div>
    </>
  );
}

export default BandList;
