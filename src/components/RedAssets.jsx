import React from "react";
import BeerAssetRed from "./BeerAssetRed";
import BurgerAssetRed from "./BurgerAssetRed";
import DrumAssetRed from "./DrumAssetRed";
import GameAssetRed from "./GameAssetRed";
import MerchAssetRed from "./MerchAssetRed";
import TentAssetRed from "./TentAssetRed";
import WaterAssetRed from "./WaterAssetRed";
import WcAssetRed from "./WcAssetRed";

function RedAssets() {
  return (
    <>
      <div className="assetHeading">
        <h2>LCF'S ASSETS</h2>
      </div>
      <div className="redAssetWrapper">
        <div className="redAssetsHomePage">
          <TentAssetRed></TentAssetRed>
          <MerchAssetRed></MerchAssetRed>
          <DrumAssetRed></DrumAssetRed>
          <BurgerAssetRed></BurgerAssetRed>
          <GameAssetRed></GameAssetRed>
          <WcAssetRed></WcAssetRed>
          <WaterAssetRed></WaterAssetRed>
          <BeerAssetRed></BeerAssetRed>
          <p className="small-text spec-offer">*special offers and deal with our partners.</p>
        </div>
      </div>
    </>
  );
}

export default RedAssets;
