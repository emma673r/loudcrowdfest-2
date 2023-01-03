import { useRef } from "react";

function Bands({ bands }) {
  //   const bandLogoUrl = bands.map((element) => element.logo);
  //   const bandLogoCred = bands.map((element) => element.logoCredits);

  function mapOutBands() {
    bands.map((band) => {
      //   console.log(band);
      {
        band.name;
      }
      <SoloBand band={band}></SoloBand>;
    });
  }
  return (
    <>
      {bands.name} {mapOutBands()}
    </>
  );
}

export default Bands;
