import React from "react";

function Availability({ setCamp, camp, availability, totalAmountSpots }) {
  function isEnough(campAvailability) {
    if (campAvailability >= totalAmountSpots) {
      return true;
    }
  }

  const svartheimDesc = "The hiphop camp site. Remember your skate!";
  const nilfheimDesc = "The rap camp site. Get your rap on.";
  const helheimDesc = "The punk camp site. Ready for the moshpits ?";
  const muspelheimDesc = "The folk camp site. Chill vibes and good feels.";
  const alfheimDesc = "The big mix camp site.Get creative and mix it up.";

  // console.log("isEnough", isEnough);

  return (
    <>
      <h2>Camps</h2>
      <div className="center-p">You need a camp that has at least {totalAmountSpots} free spots for your party.</div>
      <div className="camps-grid">
        {Object.values(availability).map((availability, index) => (
          <div className="camp-wrap" key={index}>
            {isEnough(availability.available) ? (
              <div className="camp-name-wrap">
                <div id={availability.area} className="camp"></div>
                <h2>
                  <button onClick={() => setCamp(availability.area)}>{availability.area}</button>
                </h2>
                {availability.area === "Svartheim" && <p className="desc center-p">{svartheimDesc}</p>}
                {availability.area === "Nilfheim" && <p className="desc center-p">{nilfheimDesc}</p>}
                {availability.area === "Helheim" && <p className="desc center-p">{helheimDesc}</p>}
                {availability.area === "Muspelheim" && <p className="desc center-p">{muspelheimDesc}</p>}
                {availability.area === "Alfheim" && <p className="desc center-p">{alfheimDesc}</p>}
              </div>
            ) : (
              <div className="camp-name-wrap">
                <div id={availability.area} className="camp"></div>
                <h2>
                  <button disabled>{availability.area}</button>
                </h2>
                {availability.area === "Svartheim" && <p className="desc center-p">{svartheimDesc}</p>}
                {availability.area === "Nilfheim" && <p className="desc center-p">{nilfheimDesc}</p>}
                {availability.area === "Helheim" && <p className="desc center-p">{helheimDesc}</p>}
                {availability.area === "Muspelheim" && <p className="desc center-p">{muspelheimDesc}</p>}
                {availability.area === "Alfheim" && <p className="desc center-p">{alfheimDesc}</p>}
              </div>
            )}
            <div className="camp-desc-wrap">
              {isEnough(availability.available) ? (
                <p className="center-p">There are enough spots here !</p>
              ) : (
                <p className="center-p">There are NOT enough spots here !</p>
              )}
              <p className="center-p">
                {availability.area} has {availability.available}/{availability.spots} spots available
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Availability;
