import React from "react";
import { useState, useEffect } from "react";
function LineupSamples({ bands }) {
  const bandsToDisplay = bands.slice([0 - 8]);

  return (
    <div className="lineupSamples">
      <h2>OUR BAD ASS 2023 LINE UP</h2>
      <div className="theLineUp">
        {bandsToDisplay.map((band) => (
          <div className="lineup-img">
            <p className="band-lineup" key={band.name}>
              {band.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LineupSamples;
